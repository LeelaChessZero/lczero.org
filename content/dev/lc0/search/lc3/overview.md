---
title: "Overview"
weight: 100
summary: "Overview of the lc3 search algorithm"
---

The `lc3` search algorithm is a multi-threaded tree search implementation that
uses a streaming approach with worker threads communicating through event
queues, departing from the batch-based model of `classic` search.

For background, see the [AlphaZero Primer](../../alphazero/).

## Node Repository

The node repository is a key-value store.

Currently, it's implemented as a sharded `absl::flat_hash_map` with
straightforward value type, but

* The plan is to replace it with more space-efficient storage (while still
  keeping it as `absl::flat_hash_map`).
* In theory, API allows to implement it e.g. as a database.

### Keys

* Keys are 64-bit hashes.
* In the current version, the key is `HashConcatenate(parentHash, Move)`, making
  it a tree.
* For future, e.g in DAG search, the key can be computed from the `Position`
  alone.

### Values

The values cannot be retrieved as a whole, API only allows to update or fetch
parts of the value. This allows to implement e.g. compressed storage with
efficient update (currently not implemented).

In addition to what `classic` search stores in the nodes (node values, edge
moves and priors), `lc3` stores:

* Number of edges that have at least one visit. Also for every such outgoing
  edge, the node stores:
  * Cached `Q` value of the node it points to (single value, not W/D/L/M; may
    also have lower precision)
  * `N`, number of visits along this edge. This number includes "N in flight".
  * This allows `Node` to distribute visits to child nodes without need to fetch
    any child nodes. It also relaxes the consistency requirement for the node in
    repository and avoids the need to lock more than one node at a time.
* The "N in flight" is not included into the Node's own "`N`" (only in Edges),
  and not stored anywhere explicitly.

## Algorithm flow

Unlike the `classic` search algorithm, `lc3` doesn't use a concept of a batch.
Instead, nodes to compute are sent as a stream.

The search algorithm is implemented as a set of workers, each of which is
running in a separate thread. There may be multiple workers of each type
(running in independent threads).

Workers communicate with each other using `NodeEvent` queues. The `NodeEvent`s
are created by the `GatherWorker` and destroyed by the `BackpropWorker`.

```goat
+------------+ NodeEvent +----------+ NodeEvent +--------------+
|            +---------->|          +---------->|              |
|GatherWorker|           |EvalWorker|     ^     |BackpropWorker|
|            |           |          |     |     |              |
+-----+------+           +----------+     |     +--------------+
      |                        NodeEvent  |
      +-----------------------------------+
```

* **GatherWorker**: Performs the visits from the root node. For each visit, the
  worker takes one of the following actions based on what it encounters:
  * If the visit hits a new node, it sends a corresponding `NodeEvent` to the
    `EvalWorker`.
  * If the visit hits a known terminal [^1], it sends a `NodeEvent` to the
    `BackpropWorker`.
  * If the visit hits a collision (i.e. a node that was discovered by another
    `GatherWorker` but not yet evaluated), it sends a `NodeEvent` to the
    `BackpropWorker` to undo the collision.
  * Note that `GatherWorker` doesn't do any kind of evaluation, e.g. it doesn't
    check whether the node is a terminal, doesn't check the cache, and doesn't
    generate moves.
* **EvalWorker**: Takes the `NodeEvent`, populates it with the evaluation result
  and sends it further to the `BackpropWorker`.
  * When the worker receives a `NodeEvent` it may forward it to the
    `BackpropWorker` immediately, in the following cases:
    * If the node is a terminal.
    * *(not implemented yet)* If it's a tablebase hit.
    * If it's in the cache.
  * Otherwise, it generates legal moves for the position, and queues for a NN
    evaluation. After the NN evaluation completes, it populates the received
    `NodeEvent` with the evaluation results and forwards it to the
    `BackpropWorker`.
* **BackpropWorker**: Fetches evaluation results from the queue and propagates
  them through the tree back to the root.
  * In order to reduce the number of updates to the repository, the worker
    combines updates from the different `NodeEvent`s, and then updates the node
    in the repository once.

## Stats Collection

The search algorithm collects statistics about the search process, which
can be used for time management, changing search behavior during the search, and
reporting search insights.

The metrics are aggregated by the game, move, and exponential time intervals
(1s, 2s, 4s, 8s; ½s, ¼s, ⅛s etc.).

* **WatchdogWorker**: Currently has a minimal implementation that reports `uci`
  `info` and `bestmove` messages. Note that unlike the search workers about,
  `WatchdogWorker` is always just a single thread.

[^1]: Unlike the `classic` search algorithm, terminal nodes are stored in tree.
