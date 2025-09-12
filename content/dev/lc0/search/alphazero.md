---
title: "Alphazero Primer"
weight: 200
math: true
summary: "A refresher on the AlphaZero algorithm."
---

Here's a brief refresher on the AlphaZero algorithm, which Lc0 is based on.

It's described in the detail in the papers

* "[Mastering the game of Go without human knowledge](hhttps://www.nature.com/articles/nature24270.epdf?author_access_token=VJXbVjaSHxFoctQQ4p2k4tRgN0jAjWel9jnR3ZoTv0PVW4gB86EEpGqTRDtpIz-2rmo8-KG06gqVobU5NSCFeHILHcVFUeMsbvwS-lxjqQGg98faovwjxeTUgZAUMnRQ)"
([DeepMind blog post](https://deepmind.com/blog/article/alphago-zero-starting-from-scratch)),
and then
* "[A general reinforcement learning algorithm that masters chess, shogi and Go through self-play](https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/alphazero-shedding-new-light-on-chess-shogi-and-go/alphazero_preprint.pdf)"
([DeepMind blog post](https://deepmind.google/discover/blog/alphazero-shedding-new-light-on-chess-shogi-and-go/))
describes the extension of the AlphaZero algorithm to chess and shogi.

Two main components of AlphaZero are the neural network and the MCTS/PUCT (Monte
Carlo Tree Search / Predictive Upper Confidence bounds applied to Trees) search
algorithm.

## Neural Network

```goat
  +------------------+
  |       Input      |
  +------------------+
  |                  |
  |                  |
  |      ResNet      |
  |                  |
  |                  |
  +----------+-------+
  |  Policy  | Value |
  |   Head   | Head  |
  +----------+-------+
```

The neural network takes a position as input and outputs two things:

* **Policy**: A probability distribution over legal moves, indicating the
  likelihood of each move being played.
* **Value**: A scalar value representing the expected outcome of the position
  (\( -1..1 \), where \( -1 \) is a loss, \( 0 \) is a draw, and \( 1 \) is a
  win).

> [!NOTE]
>
> In Lc0, the value head is Win/Draw/Loss score rather than a single scalar, as
> briefly mentioned below.
>
> Also, Lc0 currently has one additional "Moves left" head, which estimates the
> number of moves left in the game.

### Input format

In AlphaZero, the input to the neural network is a stack of 119 boolean planes
of 8×8 elements each, representing the position and some additional information:

* 12 planes for each piece type (6 for each color, e.g. white pawn, black pawn,
  etc.)
* 7 copies of the similar planes for the last 7 half-moves,
* Other planes for castling rights, en passant square, turn, etc.

> [!NOTE]
>
> Lc0 largely follows this format (with 112 planes), but starting from v0.32,
> Lc0 supports a more flexible input format, so input format is likely to
> change.

### The network body

The topology of the neural network is an implementation detail, but in AlphaZero
and for long time in Lc0, it was a ResNet.  
Some time ago, Lc0 switched to transformer-based architecture.

### Policy Head

Policy head is implemented as a softmax layer with all possible legal moves
(from/to squares and optional promotion, e.g. `e2e4`, `g1f3` or `e7e8q` as
elements). There are 1862 elements total.

During the search, illegal moves are masked out, so legal moves add up to 1.0.

### Value Head

In AlphaZero, the value head returns a single number, expected game outcome,
between -1 and 1. (-1 for the loss for the side to move, 1 for the win).

Lc0 switched to using Win/Draw/Loss probability instead (three numbers that add
up to 1.0). The MCTS still uses a single number Q though, so these values are
converted to Q using a formula, the simplest of which is \( Q = W - L \).

## PUCT algorithm

### Node tree

The basic algorithm is quite straightforward. We store a tree of nodes (where
every node is a certain chess position with the root being the current position
on board, and edges being legal moves from this position).

Every node stores:

* \(N\), number of visits that went through this route.
* \(Q\), average evaluation of the subtree with the root in this node. In
  AlphaZero paper, it's described as \(W\), sum of all evaluations of the
  subtree. That's equivalent, as \(Q = W / N\).

For every edges, we store:

* \(P\), prior probability of this edge, as returned by the policy head of the  
  neural network.

### Algorithm iteration

The following three steps happen in a loop:

* Starting from the root, we route a "visit" by selecting which edge (move) to
  follow, and so on until we reach a leaf node.
* The leaf node is evaluated by the neural network (or the value is assigned
  immediately if the node is terminal). Policy initializes \(P\) of the leaf
  node.
* The value is backpropagated to the root, incrementing \(N\) and updating \(Q\)
  values of the nodes along the path.

After a certain number of iterations, the edge from the root that leads to the
node with highest \(N\) is selected as the best move.

### Edge selection

The most important part of the algorithm is how to select the edge to follow
during the visit. To do that, just pick the edge with the highest PUCT value:

\[
PUCT = Q + U
\]

where \(U\) is the exploration term, defined as:

\[
U = c_{puct} \cdot P \cdot \frac{\sqrt{N_{total}}}{1 + N}
\]

where \(N_{total}\) is the number of visits to the parent node, and \(c_{puct}\)
is a constant that controls the exploration-exploitation trade-off, \(P\) is the
prior probability of the edge, and \(N\) is the number of visits to the child
node.

\(Q\) is the average evaluation of the subtree with the root in this node, as
described above.

### First Play Urgency (FPU)

If an edge didn't have any visits yet, it doesn't have \(Q\) value yet, so we
need to choose a value for it. In AlphaZero, the value is just set to 0 (i.e.
draw value).

In Lc0, we use First Play Urgency (FPU) instead, first introduced in Leela Zero
(Go engine by Gian-Carlo Pascutto). FPU takes parent's \(Q\) value and subtracts
a value based on sum of priors (\(P\)) of all edges that have at least one
visit.  
The intuition behind FPU is that it's likely that unexplored edges are worse
than the explored ones (as they have lower priors), and they become worse the
further we go into the low-prior territory.

### Virtual loss

The algorithm above is fully sequential. Until you update the node values
through the backpropagation, you can't know which edge to follow next (redoing
the visit would just lead to the same node).

However, modern hardware requires parallelization to be efficient, i.e. it
requires several positions to be evaluated at the same time.

To achieve this, a technique called "virtual loss" is used. During the visit,
nodes are temporarily updated as if the current visit will result in a loss
(incrementing \(N\) and updating \(Q\) as if the visit was a loss). This
discourages the next visits to follow the same edge. allowing to gather larger
batches. However, even with virtual loss, it still happens that several visits
end up in the same node. It's called a "collision", and in general, it wastes
space in the computation batch.

In Lc0, instead of virtual loss, we use "unscored virtual visit": \(N\) is
updated, but \(Q\) is not, as if the visit would return exactly the same value
as the subtree already has. This is much more realistic, and it ends up
selecting more reasonable set of nodes to evaluate, but it's less efficient in
avoiding collisions.
