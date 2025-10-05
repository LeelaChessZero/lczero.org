---
summary: Overview of the Leela Chess Zero ecosystem
title: Overview
weight: 100
---

Leela Chess Zero (Lc0) is an open-source chess engine that combines neural
network evaluation with Monte Carlo Tree Search. The distributed nature of the
project requires quite a bit of infrastructure to support development, testing,
and deployment.

## Lc0 Ecosystem

On a high level, the Lc0 ecosystem consists of the following components:

### The lc0 Engine

(C++, [GitHub](https://github.com/LeelaChessZero/lc0)) It's an [UCI](https://en.wikipedia.org/wiki/Universal_Chess_Interface) chess engine that loads a neural network and runs a MCTS search.

| Component                   | Description                                                                                                                                                                                                             |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Search Algorithms**       | Various implementations of search algorithms (mainly MCTS/PUCT).                                                                                                                                                        |
| **Neural Network Backends** | Code that evaluates a chess position using a neural network on a wide range of hardware.                                                                                                                                |
| **Rescorer**                | A component that is used in the training pipeline but still is a part of the Lc0 binary. It checks positions with Syzygy tablebases, and whether the move was intentional blunder. If so, it updates the training data. |

### Reinforcement Learning (RL) Loop

A system that allows to train new neural networks using games played by the engine against itself on a previous version of the network. This part is planned for complete redesign due to several limitations mentioned below.

| Component                      | Description                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **The training client**        | (Go, [GitHub](https://github.com/LeelaChessZero/lczero-client)) A binary that downloads the latest network, runs `lc0` against itself, and uploads the games to the data collection server. In the near future, we intend to make it also support running benchmarks and engine tuning.                                                                                   |
| **The data collection server** | (Go, [GitHub](https://github.com/LeelaChessZero/lczero-server)) it provides a HTTP API for training clients to upload games, and distributes the games to the servers that train the neural networks. Currently, it also provides a web interface at <https://training.lczero.org>, but we intend only to keep the API, and move the web interface to a separate project. |
| **The training servers**       | (Python, [GitHub](https://github.com/LeelaChessZero/lczero-training)) A set of servers that wait for new games to be uploaded, train new neural networks, and upload them to the data collection server.                                                                                                                                                                  |

### The Website

(Hugo, [GitHub](https://github.com/LeelaChessZero/lczero.org)) This website with documentation, blog and other information about the project.

### Developer Website

(Python/Django, <https://dev.lczero.org>) A new website in development that is intended to replace the current <https://training.lczero.org> interface, the <https://lc0.org> URL shortener, and additional services:

| Component                 | Description                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------- |
| **Monitoring system**     | <https://dashboard.lczero.org/monitor/> (Python/Django) Our monitoring and alerting system. |
| **Openbench instance**    | <https://bench.lczero.org/>                                                                 |
| **Discord notifications** | Discord notification system of TCEC and CCCC games.                                         |

### Live.lczero.org

(Python/Sanic, [GitHub](https://github.com/LeelaChessZero/lczero-live)) A site that run for live broadcasts of notable human chess events with Leela Chess Zero annotations. We hope to update it for the next events to show even more unique insights into the games.

### Miscellaneous

Various supporting tools and services:

| Component            | Description                                                                                                                                                                                                 |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Discord bot**      | (Python) Simple command responder, URL shortener interface, and TCEC and CCCC game notifications. Planned to be rewritten together with the developer website.                                              |
| **lc0.org** | An URL shortener interface.                                                                                                                                                                                 |
| **Lc0-TUI**          | (Python, [GitHub](https://github.com/LeelaChessZero/lc0-tui)) A terminal user interface for interacting with the Lc0 engine. It was used for the WCCC competitions, but is not actively maintained anymore. |

## The `lc0` Engine

The [Lc0](https://github.com/LeelaChessZero/lc0/) is an
[UCI](https://en.wikipedia.org/wiki/Universal_Chess_Interface) compliant chess
engine, written in C++. The codebase is organized into two main logical
components (plus some utility code): search algorithms and neural network
backends.

### Search Algorithm Framework

The search algorithms are responsible for selecting which chess positions should
be sent to the neural network for evaluation and determining which move to play
based on the results. Since v0.32, we support multiple search algorithms.

The engine supports several search algorithm implementations, most of which use
Monte Carlo Tree Search with the PUCT (Predictor Upper Confidence bound applied
to Trees) algorithm. The current implementations include:

* **`classic`**: The original MCTS implementation
* **`dag-preview`**: A Directed Acyclic Graph variant
* **`policyhead`**: Evaluates one position and returns a move with the highest
  policy value. Useful e.g. for [Maia](https://www.maiachess.com) networks.
* **`valuehead`**: Evaluates all positions at depth 1 and returns the move with
  the highest value.
* **`lc3`**: Currently in development.

### Neural Network Backend System

Backends receive chess positions as input and evaluate them through neural
networks. For GPU hardware, the system batches multiple positions together for
more efficient evaluation.

Our neural network typically has three heads:

* **Position Value**: An assessment of the likely game outcome (win/loss/draw
  probability)
* **Policy**: Probability distributions for legal moves
* **Moves Left**: An estimate of remaining game length

#### Hardware-Specific Backends

The project includes backends for various hardware types, using both low-level
interfaces and higher-level libraries. The low-level backends (CUDA, cuDNN,
DirectX, SYCL, OneDNN, BLAS) are mostly written in C++ (or similar languages
like CUDA).

#### ONNX Integration

A notable category of backends uses the ONNX (Open Neural Network Exchange)
format. Lc0 includes conversion code that transforms Lc0's custom protobuf-based
network format into ONNX, which can then be executed using OnnxRuntime. This
supports multiple execution providers including ROCm, DirectML, TensorRT, CUDA,
and CPU.

There is also an XLA backend that takes ONNX format and converts it further for
use with OpenXLA compiler.

These higher-level backends allow for experimentation with new network
architectures without requiring implementation of custom low-level backends,
which can reduce development time for testing new ideas.
