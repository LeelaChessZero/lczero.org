---
title: "Time management options"
weight: 300
---

This page contains current and proposed changes to the time manager.

# Time manager legacy

'Legacy' estimates and budgets time for a move based on ..to be documented

---
title: "PR1195: Time management update"
weight: 300
---

This page contains summary of changes in
[PR 1195](https://github.com/LeelaChessZero/lc0/pull/1195).

It's basically the same idea as before, just (hopefully) more carefully done.

## Idea

The basic idea is that:
* By the end of the game, all time should be used.
* At the moment of making every move of a game, a search tree should have the
  same total number of nodes (including reused nodes).

*Note: that may be not the best way though, maybe trying to make **bestmove** to
have the same number of visits (rather than tree total) would be actually
better.*

The following factors make this harder:
* It's not known how many moves the game will have.
* NPS is not constant, so conversion between nodes and seconds is noisy.
* Some unknown part of a tree is reused for the next move.
* Due to smart pruning, the search may stop earlier at unexpected (for the time
  manager) time.

The PR tries to keep track of a history of all those factors and adjust time
budget accordingly.

## Details

### Computing a time budget for a move

Here is how the budget for a move is computed:

* Estimate **moves left**
  ([here's how]({{< relref "#estimating-moves-left" >}})).
* Remaining **game time** = base time + **moves left** × increment
* Remaining **game nodes** =
  **game time** × **[nps]({{< relref "#estimating-nodes-per-second" >}})**.  
  Estimates how many new nodes will be evaled until the end of the game.
* **avg new nodes per move** = **game nodes** ÷ **moves left**.
* **avg total nodes per move** = **avg new nodes per move** ÷
  (1 - **[tree reuse factor]({{< relref "#estimating-tree-reuse-factor" >}})**).  
  As some nodes are usually reused, total target number of nodes should be
  larger than just what we can compute.  
  The goal of the time manager is to make search stop as close to
  **avg total nodes per move** as possible.
* **target new nodes** = **avg total nodes per move** - **reused nodes**.  
  As some nodes are already in the tree, we need to compute less.
* **target search time** = **target new nodes** ÷ **nps**.  
  That's how much time we think the search will actually last.
* **search time budget** = **target search time** ÷
  **[smartpruning timeuse factor
    ]({{< relref "#estimating-smartpruning-timeuse-factor" >}})**.  
  As due to smart pruning the search often stops earlier than we plan, we need
  to compensate this by giving larger budget.  
  *Note: probably it's more correct to take number of reused nodes / existing
  visits distribution into account.*
* If **search time budget** is larger than
  **[max-move-budget]({{< relref "#configuration-parameters">}})** × base time,
  reduce it to be equal.  
  This is to avoid spending entire time on one move.

*Note: it may make sense to have search limit in nodes instead of
(or in addition to) time.*

### Estimating moves left

Soon we'll use Moves Left Head (MLH) for that.

But for now, using the estimator from the existing time manager, which is based
by the current move number:
![Moves left]({{< file "movesleft.svg" >}})

*Note: it's also easily possible to have estimations that are better than that
but still don't require MLH. For example, fixed values per total pieces on
board*

### Estimating nodes per second

Nodes per second are noisy if measured directly, so it has to be smoothed,
including reusing the information from the previous moves.

For now it works the following way:

* Initial value is taken from 
  **[init-nps]({{< relref "#configuration-parameters">}})**
  parameter (default: 20000.0)

*Note: this may be not the best way, but in the beginning of the game NPS
  is much lower than later, so initializing it even to 4×(nps after 1 second)
  didn't work well*.
* As the search goes, update **nps** based on **current nps** using
  [exponential decay]({{< relref "#exponential-decay">}}) with a step of
  **[nps-update-rate]({{< relref "#configuration-parameters">}})**
  (default: 5.0 seconds).  
  *Note: it may make sense to have step not in seconds, but in
  "[average move times]({{< relref "#what-is-an-average-move-time">}})"
  as we do with tree reuse and timeuse (below).*


The estimated **nps** value is also passed to a smart pruning stopper for better
protection against insta-moves.

### Estimating tree reuse factor

Tree reuse factor shows which fraction of tree nodes is reused, in average,
after the engine stops the search, makes a move, and then opponent makes a move.

It's computed as average (with exponential decay) of tree reuses of existing
moves: **tree reuse** = **number of nodes in the beginning of the search** ÷ 
**number of nodes at the end of the previous search**:

* Initially **tree reuse factor** is taken from
  **[init-tree-reuse]({{< relref "#configuration-parameters">}})**
  parameter (default: 0.5)
* It's updated every move based on actual **tree reuse** using
  [exponential decay]({{< relref "#exponential-decay">}}) with a step of
  **[tree-reuse-update-rate]({{< relref "#configuration-parameters">}})**
  of [average moves]({{< relref "#what-is-an-average-move-time">}})
  (default: 4.0)
* If it goes above
  **[max-tree-reuse]({{< relref "#configuration-parameters">}})**
  (default: 0.7), it's limited by this value.

#### What is an "average move time"?

How fast should the average tree reuse factor be updated?
We cannot just have an update step in seconds, as it depends on the game time
control. The first idea is to have a fixed update per move.

But this brings the following problem: suppose we have a series of insta-moves
because of the forced variant. That will quickly (because insta-moves are short)
update the tree reuse factor to an extreme value.

To fight that, instead of updating at fixed rate per move, we update at a rate
relative to an average predicted move time:
* In case a move took exactly average move time, it's updated at "per move"
  rate.
* If the search took longer than average, the update has more weight.
* In case of an insta-move, almost no update happens.

### Estimating smartpruning timeuse factor

Very similar to "tree reuse": measure
**timeuse factor** = **time used** ÷ **time budgeted** and update average
accordingly.

* Initially **smartpruning timeuse factor** is taken from
  **[init-timeuse]({{< relref "#configuration-parameters">}})**
  parameter (default: 0.7)
* It's updated every move based on actual **timeuse factor** using
  [exponential decay]({{< relref "#exponential-decay">}}) with a step of
  **[timeuse-update-rate]({{< relref "#configuration-parameters">}})**
  of [average moves]({{< relref "#what-is-an-average-move-time">}})
  (default: 10.0)
* If it goes below
  **[min-timeuse]({{< relref "#configuration-parameters">}})**
  (default: 0.3), it's limited by this value.

### Exponential decay

Exponential decay is a function which returns value approaching `to` from
`from`, so that:
* When `value` = 0, it returns `from`
* When `value` = `step`, it returns a value halfway between `from` and `to`.
* When `value` = 2×`step`, it returns a value ¾-way between `from` and `to`.
* When `value` = 3×`step`, it returns a value ⅞-way between `from` and `to`.
![Moves left]({{< file "decay.svg" >}})

```cpp
float ExponentialDecay(float from, float to, float step, float value) {
  return to - (to - from) * std::pow(0.5f, value / step);
}
```

## Configuration parameters

To enable this time manager, use `--time-manager=smooth` argument.
Why **smooth**? Noone knows.

Additional parameters can be specified in parentheses, e.g.:
```
"--time-manager=smooth(init-tree-reuse=0.2,init-nps=12345.0)"
```
Note that all parameters must be float, that means you always have to add `.0`
even if they are integer-valued.

### Parameter list

|Parameter|Default|Description|
|---------|-------|-----------|
|init-tree-reuse | 0.5 | Which fraction of the tree is reuse after a full move. Initial guess.|
|max-tree-reuse| 0.7 | Do not allow tree reuse expectation to go above this value.|
|tree-reuse-update-rate| 4.0 | Number of average move times needed to update tree reuse estimation halfway. |
|init-nps| 20000.0 | Initial NPS guess. |
|nps-update-rate| 5.0 | Number of seconds to update nps estimation halfway. |
|init-timeuse| 0.7 | Fraction of the budgeted time the engine uses, initial estimation. |
|min-timeuse| 0.3 | Do not allow timeuse estimation to fall below this. |
|timeuse-update-rate| 10.0 | Number of average move time to update timeuse estimation halfway. |
|max-move-budget| 0.3 |Fraction of a total available move time that is allowed to use for a single move. |

### Configuring Moves Left estimators

Currently there's only one move estimator, which is called `mle-legacy`
(why?..), it can be configured the following way:
```
"--time-manager=smooth(mle-legacy(steepness=12.0,midpoint=50.0))"
```

There are two parameters of `mle-legacy` estimator, `steepness` and `midpoint`.
