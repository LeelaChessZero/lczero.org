---
title: "Implementing a new search algorithm"
weight: 2000
draft: true
summary: "A guide to implementing a new search algorithm in lc0"
---

Starting with version v0.32, `lc0` defines a
[search API](https://github.com/LeelaChessZero/lc0/blob/master/src/search/search.h)
that allows for multiple search algorithms to be implemented.

The API is deliberately high-level, so every search algorithm has to address the
following aspects by itself:

* **Search tree/nodes storage.** The algorithm decides for themselves how and
  whether to store the search tree (should be be a tree, graph, stored in
  memory, on disk, etc.).
* **Time management.**

The plan is to have a set of reusable components that can be used by search for
these aspects, but currently they are not implemented yet.

On the other hand, the following aspects are provided by the API:

* **UCI interface.** This includes support of configuration options.
* **Move generation.** Strictly speaking, this is not enforced by the API, but
  given that `Move` and `Position` are passed through the API, it's natural to
  also use the
  [`GenerateLegalMoves`](https://github.com/LeelaChessZero/lc0/blob/e0bbc58b8f4698ae1196f7bebf64a2fbf13a21fe/src/chess/board.h#L102)
  function to generate moves.
* **Backend interface, including caching.**
* **Syzygy tablebase support.**

