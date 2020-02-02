---
title: "Move Q and N to eges"
weight: 300
draft: true
---

### Idea
For all children nodes, have a copy  of **N** and **Q** values in a parent node. Those values would be called **edge N** and **edge Q** as opposed to **node N** and **node Q** that are stored in the node.

Before:  
![Before](before.svg)

After:  
![After](after.svg)

Actually there's no need to store **node N** and **node Q** as they can be computed from **edge N** and **edge Q**, but it may have performance impact (although likely not!), so I left them for now.

**N-in-flight** is not shown because it won't be needed.

### Why?


* All data needed for visit routing is located within node data structure, improving data locality for better cache utilization. That should help with node performance. *Currently, for a node to route a visit, algorithm has to access **N** and **Q** values of all child nodes, and they are located in remote places of memory.*

* It's much easier to parallelize tree traversal and make it scalable when you only have to lock a single node (parallelization ideas are built on that).

* It allows node eviction (e.g. killing arbitrary nodes from memory):
    * If particular node is deleted from memory, edge leading to that node still keeps valid **Q** and **N**. It means that it's possible to detect evicted node and for example make it a temporary second "root" for it to catch up if it's needed again.
    * If **edge N** is smaller than **node N** it points to, it means that child node had more visits than parent (e.g. because parent was evicted). In that case no eval is needed and "**V**" can be propagated to a parent out-of-order.

* It allows transposition support:  
Similarly to "parent is evicted" case, when a node is hit through alternative transposition, child's **node N** happens to be larger than parent's **edge N**. In that case out-of-order **V** propagation can be done.

* Finally, N and Q **are** properties of edge, not node. It's just when our graph was tree, there was no difference where to store them.

### Thoughts

* As there is data duplication, more memory is needed per node. However, hopefully those changes will be offset by
    * [Compressed node encoding](../encoding/) (probably it will be even smaller than now).
    * Being able to evict cold nodes to free up RAM.
    * Being able to offload nodes to external storage (database etc.)
    * Support of transpositions will make Lc0 have more "value" per node, although it's orthogonal.