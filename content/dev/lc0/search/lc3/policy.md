---
title: "Search Policy"
weight: 200
summary: "What is a search policy"
---

[Search policy](https://github.com/LeelaChessZero/lc0/blob/master/src/search/lc3/search_policy/search_policy.h)
is a set of types and functions that define the details of the search process.
The aim is to make workers focus on the infrastructure of the search, while the
policy defines the details of the search algorithm. Several policies may
coexist, allowing experimentation with different ideas.

Search policy defines things like:

* Computation of the hash for a position (e.g. whether transpositions end up
  having the same hash).
* Distribution of visits between child nodes.
* Updating node values from the evaluation results.
* Which move to play after the search is finished.

The logic that is currently implemented will be described in the following
sections.

The way `SearchPolicy` is defined is still evolving/subject to change:

* Currently, it is implemented as a struct with static functions, which worker
  classes incorporate `using Policy = SearchPolicy` declarations.
* When we need more than one SearchPolicy, one option will be have it as a
  template parameter of the worker classes, e.g. `GatherWorker<SearchPolicy>`.
* Another option is to make it a virtual class, and make functions non-static.
  There may be slight inconvenience with the type definitions though.
* Functions in the `SearchPolicy` will need access to the engine settings. At first, we'll just pass the settings as a parameter.
* Later we likely will make it a member variable of the `SearchPolicy`, meaning
  the functions will need to be non-static. Note that it doesn't require
  functions to be virtual.
