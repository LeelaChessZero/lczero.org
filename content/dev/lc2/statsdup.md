---
title: "Node stats duplication"
weight: 300
draft: true
---

It is believed that the main limiting factor of Lc0 performance is memory latency. The reason for that is that the node selection algorithm is not CPU cache friendly.

For a node to route a visit, algorithm has to access **N** and **Q** values of all child nodes, and they are located in remote places of memory.

The proposal is to have a copy of **N** and **Q** values in a parent node. Those values would be called **edge N** and **edge Q** as opposed to **node N** and **node Q** that are stored in the node.

Actually there's no need to store **node N** and **node Q** as they can be computed from **edge N** and **edge Q**, but it may have performance impact.

Note that depending on how those values will be used, only single-value **edge Q** for CPuct formula (as opposed to, for example, **W-L** and **D** values) may be enough.

### Pros

* All data needed for visit routing is located within node data structure, improving data locality. That will hopefully help with node performance.
* It's much easier to parallelize tree traversal and make it scalable when you only have to lock a single node.
* It allows node eviction:
    * If particular node is deleted from memory, edge leading to that node still keeps valid **Q** and **N**. It means that it's possible to detect evicted node and for example make it a temporary second "root" for it to catch up if it's needed again.
    * If **edge N** is smaller than **node N** it points to, it means that child node had more visits than parent (e.g. because parent was evicted). In that case no eval is needed and **V** can be propagated to a parent out-of-order.
* It allows transposition support:  
Similarly to "parent is evicted" case, when a node is hit through alternative transposition, child's **node N** happens to be larger than parent's **edge N**. In that case out-of-order **V** propagation can be done.


### Cons

* As there is data duplication, more memory is needed per node. However, probably those changes will be offset by
    * [Compressed node encoding](../encoding/) (maybe it won't be larger after all).
    * Being able to evict cold nodes.
    * Being able to offload nodes to external storage (database etc.)
    * Support of transpositions will make Lc0 have more "value" per node, although it's orthogonal.