---
title: "New batching scheme"
weight: 400
draft: true
---

The aim of a new batching scheme is to be able to gather a batch of arbitrary size.

So far it's the most pressing problem to solve and there are no nice solutions which work well with other parts of the Lc0 rewrite.

## Current batch gathering algorithm

Currently the batch gathering procedure works the following way:
* There is a **target batch size** (default: 256), after reaching which the gathering stops.
* There is a **collision events limit** (default: 32), number of times node gathering routine should hit a collision before the gathering stops prematurely.
* There is a **collision nodes limit** (default: 9999), which is the same, but taking **multivisit** into account.
* Every visit starts from root, one by one.
* When a visit goes towards the leaf of the tree, it keeps a **multivisit** count, number of visits to apply to the collided node. That way it's counted as 1 against **collision events**, but **multivisit**. **[WAT??]**
* Both collision and non-collision visits increment **n-in-flight** counter on entire path from root to the node.
    * That counter is added to **N** during the next visit and acts as a virtual loss.
    * After the evaluation is completed, **n-in-flight** is removed for collision visits, and...
    * ...converted to **N** for non-collision visits.

This has several problems:
1. Every single visit starts from root, making every single visit O(height of a tree) operation, even though most of visits take mostly the same route.
1. It's not possible to increase collision limit by much, because it performs an expensive operation of traversal through the tree while holding a mutex.
1. Even with very high collision limits, it's still not possible to gather batches of arbitrary size. Usually batches of size around 1000 are the limit.


## Alternative batch gathering idea (failed so far)

**Note that while I was writing that, I found several inconsistencies and bugs in the code, I'll experiment a bit more before declaring this a failure.**

To address those problems, the following idea was tried:
* There is a single queue of nodes-to-eval shared for all backends, and a separate thread (or set of threads) to gather nodes into that queue, independent from backend evaluation threads.
* The target queue length is called **batch budget** and is initially equal to `(batch_size)×(1 + number_of_backends)` nodes.
* The **collision budget** is initially equal to 100000.
* The batch gathering is started from the root node, which receives current **collision budget** and **batch budget**.
* The node distributes *entire* its **batch budget** among children (by computing multivisit and updating n-in-flight in a loop and using heap to update affected children).
* The **collision budget** is distributed to children proportionally to **batch budget**.
* **n-in-flight** for the child is incremented by value of **collision budget** sent to that child.
* The batch gathering is called recursively for children passing those per-child budgets as parameters. If implementation allows, all children may be called in parallel without mutex, as all they operate on different parts of the tree.
* If a node is being evaluated and received a non-empty **collision budget**, the value of collision budget and path to root is stored in the node so that it's reverted when the eval is done.
* If a node is being evaluated and received a non-empty **batch budget**, the batch is respawned from the root node. If current node is already a root node, **skip eval** command is sent to evaluator.
* *(the problems with this approach occurred long before the terminal nodes, so mentioning just for completeness)* If visit hits terminal node, entire route from parent is recomputed knowing **Q** of that node, adjusting **batch budget**, **collision budget**, and **n-in-flight** along the way.
* If after the iteration both **batch budget** sent to root and **collision budget** sent to root were larger than 0, start the operation again from root with the new values of the budgets, otherwise wait for them to become non-zero.
* Eval backend takes `(batch size)` nodes from the queue, and adds them back to the **batch budget** immediately.

In the following example, root node has **batch budget=9** and **collision budget=50**:
![The example of budget movement](new-batching.svg)

Batch budget is split to child nodes as **2+3+4**, and collision budget is split proportionally (**12+17+23**, with some rounding up). One of the visits ended up in a new node which is sent to eval (shown as circle). As there are still 6 collisions in a budget, they are propagated back to the parent updating parent's **n-in-flight** and will be used during the next iteration.

The node shown as a triangle is a collision. It adsorbs all the collision budget (17), and sends unused budget limit back to the root.

The batch and collision limit is then used for the next iteration of the algorithm.

### Why it didn't work

The expectation was that huge collision budget will make it possible to always quickly find reasonable nodes to fill the eval batch.

It turned out to be not the case. Even large collision budget all was absorbed by collision nodes and eval batch still didn't go above 1500 or so. It also required more iterations that I expected.

It still requires more thorough research what exactly is happening there. Possible ideas:
* Probably alternative virtual loss (e.g. AlphaZero-style) would help.
* Instead of reverting n-in-flight for collisions immediately, postpone it to after eval backprop is done.

## Thoughts about alternative approaches

Maybe just ignore nodes that are being evaluated completely? That will make evaluated nodes concentrated near the leaves though. Also also that "node block" should be propagated back to the parent when a node has zero available moves, undone when the node is evaluated. That adds additional challenge when combined with other search algorithm optimizations (namely, transposition hash instead of a tree).

Another idea is to store number of leaves of subtree which are not already being evaluated in the node. That idea looks fine when eval tree is a tree, but with introducing transpositions it becomes unmanageably hard.

## Idea v3

* No collisions, no n-in-flight stored in nodes
* Node gathering has an epoch (8 bit?) which is incremented every time any batch is evaluated. All gatherer-to-gatherer messages have epoch number.
* All updates, queries, etc, are from root to leaves (even backpropagation).
* Message order must be stable.
* Initially full batch at root node.
* Every node splits the batch to subtrees.
* If eval hit, message is sent to evaluator, but also to the root ("batch item used")
* If collision, the node is "excluded" from the tree, probabilities along the tree are updated, and that information is sent to root.
* If terminal, recalculate Q from entire route and send to root for update.
* If any node hits "all routes banned" situation, send skip eval to remaining nodes.
* When root receives eval, epoch is incremented.
* When epoch chenged, "excluded" list is cleared.
* Three categories of batch budget: evaluating, gathering, waiting.