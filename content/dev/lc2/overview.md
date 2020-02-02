---
title: "Overview"
weight: 100
draft: true
---

This section contains the summary of ideas for the potential reimplementation of Lc0 search algorithm to address limitations of search algorithm (for now I name it "Lc2", although probably the name will be changed as not everyone likes that).

## Desired improvements

Here are the aspects in which the current search algorithm needs improvements:

* **CPU cache locality.**  
During the forward tree traversal phase, to decide which subtree to route a visit to, current search algorithm has to access **Q** and **N** values from all children, which leads to many CPU cache misses. I believe that this is the main reason of **nps** limit that we have on high end systems (both GPU and CPU are not loaded fully).
* **Transposition support.**  
Currently search tree is a tree. If two different move sequences lead to the same position, it's not used by the search algorithm in any way, making engine to do lots of redundant work, especially in endgames.
* **Scalability.**  
The current implementation of the MCTS algorithm doesn't scale above ≈3 GPUs and ≈3 threads. It would be nice to make it scale better, including support of NUMA architecture and distributed computation over network.
* **Dependence on NN eval latency.**  
This is a part of the scalability issue. Currently we rely a lot on latency of a single eval, but cannot utilize larger evaluation throughput (e.g. not able to gather batches larger than 1000).
* **Running out of memory.**  
As Lc0 keeps entire search tree in memory, it's pretty memory hungry and no realistic amount of RAM would allow it to run multi-day search.
* **Discarding tree on take-back.**  
It's usual for people to go back and forth in game tree when analyzing their games. Lc0 discards entire tree in that case, even though sometimes it has useful subtrees steel in memory.
* **Ability to store the search state.**  
It would be useful to be able to store/restore the search state, for example to switch analysis back and forth for different positions, or to distribute pre-computed search from startpos together with Lc0 as kind-of an opening book.

We are attempting to fix all of that at once, and repeatedly fail at that.

## Summary of ideas

The following pages describe ideas addressing the issues, but the real challenge is how to glue them together..

* Bring edge **N** and edge **Q** to [parent node]({{<ref "edgedata">}}).
* To be able to gather unlimited number of nodes fast, [temporary exclude them from legal moves]({{<ref "batching">}}) and adjust all nodes until root.
* For better (unlimited!) parallelization and remove locks, shard the nodes hashmap and have dedicated thread per shard.
* Pick hash function which incorporates rule50 but not threefold position.
* Run search using message/event passing architecture.
* Node serialization
* Nodes GC and material key
