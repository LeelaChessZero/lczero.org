---
title: "Technical Explanation of Leela Chess Zero"
wikiname: "Technical-Explanation-of-Leela-Chess-Zero.md"
---
# Lc0 methods and input/output terms

A nice pictorial [overview](https://applied-data.science/static/main/res/alpha_go_zero_cheat_sheet.png)

## Basics

Leela searches a tree of moves and game states. Each game state is a *node* in the tree, with an estimated value for that position, and a prioritized list of moves to consider (called the *policy* for that position). Traditional chess engines have a very-finely-crafted-by-humans value and policy generation system; unlike traditional engines, Leela uses its neural network trained without human knowledge for both value and policy generation. Then, Leela expands the tree to get a better understanding of the root node, the current position.

Leela uses [PUCT](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.172.9450&rep=rep1&type=pdf) (Predictor + Upper Confidence Bound tree search). We evaluate new nodes by doing a *playout*: start from the root node (the current position), pick a move to explore, and repeat down the tree until we reach a game position that has not been examined yet (or a position that ends the game, called a *terminal node*). We expand the tree with that new position (assuming non-terminal node) and use the neural network to create a first estimate of the value for the position as well as the policy for continuing moves. In Leela, a policy for a node is a list of moves and a probability for each move. The probability specifies the odds that an automatic player that executes the policy will make that move. After this node is added to the tree, *backup* that new *value* to all nodes visited during this playout. This slowly improves the value estimation of different paths through the game tree.

When a move is actually played on the board, the chosen move is made the new root of the tree. The old root and the other children of that root node are erased. 

This is the same search specified by the AGZ paper, [PUCT](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.172.9450&rep=rep1&type=pdf) (Predictor + Upper Confidence Bound tree search). Many people call this [MCTS](https://hal.archives-ouvertes.fr/hal-00747575v4/document) (Monte-Carlo Tree Search), because it is very similar to the search algorithm the Go programs started using in 2006. But the PUCT used in AGZ and Lc0 replaces rollouts (sampling playouts to a terminal game state) with a neural network that estimates what a rollout would do. Other search algorithms are [under consideration](https://github.com/gcp/leela-zero/issues/860) on the Github of Leela Go, but there isn't yet any real consensus that something else is demonstrably better than PUCT. This is something of an active research topic in the overlap of the AI+Game Theory fields.

## Glossary
* _20x256_: Shorthand for the size of the NN. 20 _residual blocks_ and 256 _filters_.
* _Backup_: After a playout reaches a terminal nodes, and the NN is called, take _V_ and average this into the _Q_ of all nodes visited to reach that position.
* _Batch Size_: How many positions the GPU can train on simultaneously. Set as large as your GPU can handle.
* [_Batch normalization_](https://arxiv.org/abs/1502.03167): Normalize channel outputs to have variance near 1 and outputs near 0.
* [_Batch Renormalization_](https://arxiv.org/abs/1702.03275): Better but more complicated way for training to measure normalization statistics. Added during T40 to help fix Pawn promotion issues.
* _Bestmove_: Picks the move with the most visits. `randomize` or `tempdecay` options allow picking lower moves for variety.
* _Block_: See _Residual Block_.
* _CNN_: Convolutional Neural Network. The largest part of Lc0's NN uses this architecture, which convolves (slides) several 3x3xN filters across the entire board.
* _Depth_: Average depth. See also _Seldepth_.
* _FC Layer_: Fully Connected layer. Unlike filters which only look at a 3x3 area of the board, the FC layer looks at the entire board at once. This is used in the policy and value heads.
* _Filters_: A 3x3xN pattern. The N means it is looking at several input features. A "20x256" network has 256 3x3x256 filters in each layer (input layer is slightly different).
* _KLD_: [Kullback-Leibler divergence](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence) is used during selfplay to measure how the distribution of visits to different root moves is changing. This allows selfplay to spend more time when the Policy prediction was bad, and less time on obvious moves. First used in T50.
* _Learning Rate_: How fast the neural net weights are adjusted. Too high and you don't learn anything, or worse. Too low and your progress is too slow.
* _MSE loss_: Mean Squared Error of the value (_V_) NN output.  One of the terms the NN training process tries to minimize. The NN improves in a feedback loop by trying to predict who wins each self-play game. The mean squared error of the predictions is the "loss". See also _policy loss_ and _reg term_.
* _NNCache_: Stores NN evaluations, which can be reused if the same positions is reached by transposition.
* _Nodes_: A potential game position in the tree of future gameplay. The root node of the tree is the current position.
* _NPS_: Nodes per second, including _NNCache_ hits and _terminal node_ hits, but excluding nodes carried over from tree reuse. In other words, total playouts generated per second.
* _Overfitting_: If the network trains on the same positions too much or with too low _learning rate_, it may memorize those positions and not generalize well to other similar positions.
* _P_: Neural network's raw policy output (probability this is the best move)
* _Playouts_: As defined by the Monte Carlo Tree Search, starting from the root node: 1) pick a move to explore according to the _policy_ and _confidence_ of the choices (PUCT selection algorithm); 2) travel to the resulting game position node; 3) if this child node is already explored at least once, repeat steps 1) and 2), otherwise; 4) evaluate this node via the neural network, creating value and policy estimates for this position, and use this new value estimate to update all parent nodes' values. After 4), the playout is complete.
* _Policy loss_: One of the terms the NN training process tries to minimize. The NN improves in a feedback loop by trying to predict what the self-play games say the policy should be. The amount the NN differs from the self-play game outputs is the "loss". See also _mse loss_ and _reg term_.
* _PV_: Principal Variation. The moves that would be taken if we on each level chose the node that has most visits (i.e. most playout traversals). 
* _Visits_: Total number of playouts that have traversed this node. This is equal to the total size of the tree below this node (unless playouts have hit a terminal node, in which case visits = nodes + playouts_that_hit_terminal_node).
* _Q_: Average expected value of all playouts for this move, a value ranging from -1 to 1. See also _V_.
* _Reg term_: The L2-norm (roughly the size weights). The feedback training of the NN tries to minimize this along with _policy loss_ and _mse loss_. This term tries to improve the generalization of the NN, and prevent _overfiting_.
* _Residual Block_: A residual block is a popular NN architecture that combines two CNN layers with a skip connection. A "20x256" network has 20 residual blocks. (Note that this is slightly different from the Deepmind paper where a "20x256" network has 19 residual blocks).
* _Sampling Ratio_: How many times each position from self-play games is used for training. Too high and your net may _overfit_. Too low and your progress is too slow.
* _Score cp_: Traditional centipawn value where 100 is a one pawn advantage. See [[FAQ#how-does-leela-chess-zero-calculate-the-cp-eval]].
* _Squeeze Excite_: [SE](https://towardsdatascience.com/squeeze-and-excitation-networks-9ef5e71eacd7) is an extension to the _Residual Block_ architecture that Deepmind used. It adds a global pooling layer (the squeeze part) and then transmits that global information back to all parts of the board (the excite part). First used in T35.
* _Seldepth_: Maximum depth.
* _Terminal node_: A node that has a game result (checkmate or draw).
* _Train/Test Sets_: Best practice is to split your data into two sets, train and test sets. You use the train set to improve the NN weights. You use the test set to validate the NN is able to generalize what it learned to positions it has never trained on. This way you can detect if your NN is _overfitting_.
* _UCB_: Upper Confidence Bound, aka _U_. This is the part of the PUCT formula that encourages exploring moves that have not been searched much yet. See also the other half, _Q_.
* _V_: Expected Value output of the NN, ranging from -1 to 1. See also _Q_.
* _Z_: Final result of a selfplay game (-1, 0, 1).

## Example --verbose-move-stats output
```
            Move            Visits          Policy      Avg. Value      UCB                      Raw NN Value
info string g2g4  (378 ) N:      11 (+ 2) (P:  2.81%) (Q: -0.08786) (U: 0.19640) (Q+U:  0.10853) (V: -0.0652)
info string f2f3  (346 ) N:      12 (+ 2) (P:  2.92%) (Q: -0.08100) (U: 0.19088) (Q+U:  0.10988) (V: -0.0759)
info string b1a3  (34  ) N:      14 (+ 4) (P:  3.39%) (Q: -0.06031) (U: 0.17498) (Q+U:  0.11467) (V: -0.0385)
info string g1h3  (161 ) N:      18 (+ 3) (P:  3.55%) (Q: -0.05069) (U: 0.15819) (Q+U:  0.10750) (V: -0.0315)
info string a2a4  (207 ) N:      22 (+ 5) (P:  3.89%) (Q: -0.02759) (U: 0.13604) (Q+U:  0.10845) (V: -0.0084)
info string h2h4  (403 ) N:      24 (+ 6) (P:  3.70%) (Q: -0.01613) (U: 0.11689) (Q+U:  0.10077) (V: -0.0109)
info string b2b3  (230 ) N:      26 (+ 7) (P:  4.00%) (Q: -0.00999) (U: 0.11520) (Q+U:  0.10521) (V: -0.0041)
info string f2f4  (351 ) N:      27 (+ 5) (P:  4.02%) (Q: -0.00992) (U: 0.11946) (Q+U:  0.10954) (V: -0.0014)
info string b2b4  (234 ) N:      29 (+ 5) (P:  3.97%) (Q: -0.00536) (U: 0.11123) (Q+U:  0.10587) (V: -0.0090)
info string a2a3  (204 ) N:      32 (+ 9) (P:  4.38%) (Q:  0.00459) (U: 0.10220) (Q+U:  0.10679) (V:  0.0026)
info string h2h3  (400 ) N:      34 (+ 9) (P:  4.74%) (Q:  0.00160) (U: 0.10550) (Q+U:  0.10711) (V: -0.0021)
info string d2d3  (288 ) N:      37 (+11) (P:  5.35%) (Q:  0.00055) (U: 0.10692) (Q+U:  0.10746) (V: -0.0001)
info string c2c3  (259 ) N:      40 (+ 8) (P:  4.89%) (Q:  0.00996) (U: 0.09779) (Q+U:  0.10775) (V:  0.0089)
info string b1c3  (36  ) N:      44 (+18) (P:  5.69%) (Q:  0.02348) (U: 0.08859) (Q+U:  0.11207) (V:  0.0180)
info string g2g3  (374 ) N:      47 (+ 8) (P:  5.40%) (Q:  0.00971) (U: 0.09454) (Q+U:  0.10425) (V:  0.0132)
info string e2e3  (317 ) N:      48 (+11) (P:  5.65%) (Q:  0.01524) (U: 0.09223) (Q+U:  0.10746) (V:  0.0231)
info string g1f3  (159 ) N:      73 (+17) (P:  7.08%) (Q:  0.02949) (U: 0.07629) (Q+U:  0.10578) (V:  0.0343)
info string d2d4  (293 ) N:      81 (+36) (P:  7.94%) (Q:  0.04077) (U: 0.06593) (Q+U:  0.10670) (V:  0.0471)
info string c2c4  (264 ) N:      84 (+15) (P:  6.63%) (Q:  0.04203) (U: 0.06503) (Q+U:  0.10706) (V:  0.0542)
info string e2e4  (322 ) N:     128 (+63) (P: 10.01%) (Q:  0.05778) (U: 0.05111) (Q+U:  0.10889) (V:  0.0556)
```
(Note the list is in reverse visits order since Arena GUI flips it again.)

## Command line flags and UCI options

Most options have both a command line flag and a UCI option. In the list below both are listed.
Most of the options should be left default. Here are some common ones you might change:

--weights, --threads, --backend, --backend-opts, --verbose-move-stats

TBD: If you have multiple GPUs, you can use these with e.g. `--backend=?? --backend-opts=??`

## How does Lc0 calculate the cp eval?
Lc0 uses an average expected score _Q_ in the range [-1,1]. This expected score is converted to a traditional centi-pawn (cp) eval using this formula: `cp = 111.714640912 * tan(1.5620688421 * Q)`. 

| (Q+1)/2 | cp/100 |
| - | - |
| 0.50 | 0.00 |
| 0.55 | 0.18 |
| 0.60 | 0.36 |
| 0.65 | 0.57 |
| 0.70 | 0.81 |
| 0.75 | 1.11 |
| 0.80 | 1.52 |
| 0.85 | 2.16 |
| 0.90 | 3.36 |
| 0.95 | 6.71 |
| 1.00 | 128.00 |

***
