---
title: "Failed attempts"
weight: 200
---

There have been already several iterations of attempting to solve the listed problems, but none so far was successful.

Summary of attempts and their results:

### Tree detaching

Detailed discussions of the idea is [in this Google doc](https://docs.google.com/document/d/16Y5ZeLje8CswAhbIQ-upMWwrDEl4K6aUQu1BU1gW1Eg/edit).

Basically the idea was that the algorithm would see which part of the tree get the most visits, and detach those subtrees so that completely separate threads work on "main" tree and "detached" subtree.

The problem with that approach turned out to be that it's not possible to quickly detect and react on "hot" parts of the tree, and those parts change very quickly. For example, it happens very often that 1000 visits all go through the particular node (making it good candidate to be a point of tree detach), and after that no new visits go through that node at all for a million of visits.

### Alternative batch gathering scheme

#### Current batch gathering algorithm

Currently the batch gathering procedure works the following way:
* There is a **target batch size** (default: 256), after reaching which the gathering stops.
* There is a **collision events limit** (default: 32), number of times node gathering routine should hit a collision before the gathering stops prematurely.
* There is a **collision nodes limit** (default: 9999), which is the same, but taking **multivisit** into account.
* Every visit starts from root, one by one.
* When a visit goes towards the leaf of the tree, it keeps a **multivisit** count, number of visits to apply to the collided node. That way it's counted as 1 against **collision events**, but **multivisit**.
* Both collision and non-collision visits increment **n-in-flight** counter on entire path from root to the node.
    * That counter is added to **N** during the next visit and acts as a virtual loss.
    * After the evaluation is completed, **n-in-flight** is removed for collision visits, and...
    * ...converted to **N** for non-collision visits.

This has several problems:
1. Every single visit starts from root, making every single visit O(height of a tree) operation, even though most of visits take mostly the same route.
1. It's not possible to increase collision limit by much, because it performs an expensive operation of traversal through the tree while holding a mutex.
1. Even with very high collision limits, it's still not possible to gather batches of arbitrary size. Usually batches of size around 1500 are the limit.

#### Alternative batch gathering idea

To address those problems, the following idea was tried:
* When a node is requested to gather a batch, two limits are passed to that node:
    * Batch budget (e.g. 256 for the root node)
    * Collision budget (e.g. 100000 for the root node)
* The node distributes *entire* its **batch budget** among children (computing multivisit and updating n-in-flight in a loop).
* The **collision budget** is distributed to children proportionally to **batch budget**.
* **n-in-flight** is updated based on **collision budget** sent to that children.
* The batch gathering is called recursively for children passing those per-child budgets as parameters. If implementation allows, all children may be called in parallel without mutex, as all they operate on different parts of the tree.
* If a node finds itself with **batch budget == 0**, all the remaining **collision budget** is sent back through the parent towards the root (to use in the next iteration), decreasing **n-in-flight** changes along its way.
* If a node finds itself with **collision budget == 0** with non-zero **batch budget**, n-in-flight remains intact, but remaining **batch budget** was sent directly to root to use on the next iteration.
* *(the problems with this approach occurred long before the terminal nodes, so mentioning just for completeness)* If visit hits terminal node, entire route from parent is recomputed knowing **Q** of that node, adjusting **batch budget**, **collision budget**, and **n-in-flight** along the way.
* If after the iteration both **batch budget** sent to root and **collision budget** sent to root were larger than 0, start the operation again from root with the new values of the budgets.

In the following example, root node has **batch budget=9** and **collision budget=50**:
![The example of budget movement](new-batching.svg)

Batch budget is split to child nodes as **2+3+4**, and collision budget is split proportionally (**12+17+23**, with some rounding up). One of the visits ended up in a new node which is sent to eval (shown as circle). As there are still 6 collisions in a budget, they are propagated back to the parent updating parent's **n-in-flight** and will be used during the next iteration.

The node shown as a triangle is a collision. It adsorbs all the collision budget (17), and sends unused budget limit back to the root.

The batch and collision limit is then used for the next iteration of the algorithm.

#### Why it didn't work

The expectation was that huge collision budget will make it possible to always quickly find reasonable nodes to fill the eval batch.

It turned out to be not the case. Even large collision budget all was absorbed by collision nodes and eval batch still didn't go above 1500 or so. It also required more iterations that I expected.

It still requires more thorough research what exactly is happening there.

### Lockless multithread batch gathering

There was an attempt to make **Node** structure support lock-free updates, but it turned out to be as bad idea as it sounds.
