---
summary: A high level overview of the architecture of the lc0 engine
title: High level architecture
weight: 200
---

The project has the following directory layout (under `src/`):

* `chess/` - Contains the chess logic, including the board representation and
  the movegen. These types are used in the search and backend APIs and therefore
  are shared between them.
* `search/` - Contains the [search algorithms](../search/).
* `neural/` - Contains the [neural network backend implementations](../neural/).
* `utils/` - Contains assorted utility code, such as logging, command line
  parsing, etc.
* `selfplay/` and `trainingdata/` - Contains code related to self-play and
  training data generation.
* `tools/` - Contains code for other non-UCI tools, such as network converters.

## Entrypoint

The entrypoint of the engine is
[`main.cc`](https://github.com/LeelaChessZero/lc0/blob/master/src/main.cc).
