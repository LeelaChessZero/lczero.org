---
summary: Frequently Asked Questions about Leela Chess Zero
title: FAQ
weight: 2100
---

### What is Lc0?

Lc0 (Leela Chess Zero) is a powerful, open-source chess engine that uses deep neural networks
and Monte Carlo Tree Search to evaluate chess positions. It was inspired by Google’s
AlphaZero and learns chess by playing millions of games against itself.

### Can I run Lc0 without a GPU?

Yes, Lc0 can run on CPUs, but it will be significantly slower than on a modern GPU.
There are specific CPU-only builds available (such as BLAS or DNNL). These builds are included in the [GitHub releases](https://github.com/LeelaChessZero/lc0/releases).

### Is stockfish or Lc0 stronger?

This will depend on specific hardware and testing conditions, but Stockfish is considered to be slightly stronger than Lc0.

### What is the best Lc0 network?

There is no one universally best network, as that will depend on your hardware. You can find a list of best networks [here]({{<ref "bestnets">}})

### What is onnx-trt, and where can I find the onnx-trt version of Lc0?

`onnx-trt` is an experimental backend for Lc0, it's included in v32.0 and later releases. This is the version that is playing in TCEC since S28. Note that it's
only beneficial for very high-end GPUs (i.e., RTX 5000/6000 series), and only for
bigger nets.

The binary can be found in the releases tab on GitHub. The onnx-trt package has a readme with instructions and an install script.

### Is BT5 better than BT4?

BT5, despite having theoretical improvements over BT4, proved to be slower and worse at equal node counts. Tests have shown it to be around 50 elo weaker than BT4 in shorter time controls and around 12 elo weaker at equal node counts, despite being 20-50% slower.

### Is Lc0 or AlphaZero stronger?

Lc0 has far exceeded AlphaZero's success in chess and is much stronger.
