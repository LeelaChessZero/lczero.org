---
title: "Failed attempts"
weight: 20000
draft: true
---

*Feel free to skip this page, nothing useful is here.*


There have been already several iterations of attempting to solve the listed problems, but none so far was successful (probably because I keep on trying to solve them all at once).

Summary of attempts and their results:

## Tree detaching

Detailed discussions of the idea is [in this Google doc](https://docs.google.com/document/d/16Y5ZeLje8CswAhbIQ-upMWwrDEl4K6aUQu1BU1gW1Eg/edit).

Basically the idea was that the algorithm would see which part of the search tree get the most visits, and detach those subtrees so that completely separate threads work on "main" tree and "detached" subtrees.

The problem with that approach turned out to be that it's not possible to quickly detect and react on "hot" parts of the tree, and those parts change very quickly. For example, it happens very often that 1000 visits all go through the particular node (making it good candidate to be a point of tree detach), and after that no new visits go through that node at all for a million of visits. Experiments shown no improvements at all with this idea, not even 1%.

## Alternative batch gathering scheme

Described [here](../batching/).

TODO(change to paragraph link when its supported).

## Lockless multithread batch gathering

There was an attempt to make **Node** structure support lock-free updates, but it turned out to be as bad idea as it sounds (large structures is practically not possible to make lockless and bugless at the same time).

## Double-hashing using MaterialKey

[MaterialKey](../materialkey/) is a 64-bit value computed from a chess position. By comparing **MaterialKey**s of two positions, it's possible to tell whether it's possible to reach the second position from the first.

The idea of double-hashing using MaterialKey was an extension of having a hash-map of nodes. The idea was to have instead of one-level hash-map `Zorbist hash -> Node` a two-level hash-map: `MaterialKey -> Zorbist hash -> Node`.

That would allow easy node garbage collection: just go over all MaterialKeys in hash-map and drop ones which are not reachable from the root.

The hope was that there would be a few **MaterialKey**s in a tree and second level hashmaps would be larger.

However, that turned out to be not the case. The tree contained many different MaterialKeys, and second-level hashmaps often contained just one element, making the idea useless.

MaterialKey is probably still useful for garbage collection, but not through double-hashing.