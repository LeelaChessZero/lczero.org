---
title: Neural network topology
weight: 100
---

The Leela Chess Zero's neural network is largely based on the DeepMind's AlphaGo Zero[^1] and AlphaZero[^2] architecture.
There are however some changes.

## Network topology

The core of the network is a **residual tower** with **Squeeze and Excitation**[^3] (SE) layers.  
The number of the residual `BLOCKS` and `FILTERS` (channels) per block differs between networks.
Typical values for `BLOCKS`×`FILTERS` are 10×128, 20×256, 24×320.  
SE layers have `SE_CHANNELS` channels (typically 32 or so).

**Input** to the neural network is **112 planes** 8×8 each.

The network consists of a "body" (residual tower) and several output "heads" attached to it.

All convolution layers also include bias layers.

**Fully connected layer** is **MatMul** plus adding **Bias** on top.

### Body

* Input convolution: from 112×8×8 to `FILTERS`×8×8.
* Residual tower consisting of `BLOCKS` blocks:
    * Convolution from `FILTERS`×8×8 to `FILTERS`×8×8.
    * Convolution from `FILTERS`×8×8 to `FILTERS`×8×8.
    * SE layer *(only in network type NETWORK_SE_WITH_HEADFORMAT [current])*, i.e.:
        * Global average pooling layer (`FILTERS`×8×8 to `FILTERS`)
        * Fully connected layer (`FILTERS` to `SE_CHANNELS`)
        * ReLU
        * Fully connected layer (`SE_CHANNELS` to 2×`FILTERS`).
        * 2×`FILTERS` is split into two `FILTERS` sized vectors `W` and `B`
        * `Z` = Sigmoid(`W`)
        * Output of the SE layer is `(Z × input) + B`.
    * Adding the residual tower skip connection.
    * ReLU activation function.

All convolutions have kernel size 3×3 and stride 1.  
Batch normalization is already folded into weights, so there's no need to do any normalization during the inference.

### Policy head

#### Format: POLICY_CONVOLUTION [current]

* Convolution from `FILTERS`×8×8 to `FILTERS`×8×8.
* Convolution from `FILTERS`×8×8 to 80×8×8.
* The vector of length 1858 is gathered from the 80×8×8 matrix using [this mapping](https://github.com/LeelaChessZero/lc0/blob/master/src/neural/shared/policy_map.h) (only 73×8×8 is actually used, the rest is for padding).
* *(note there is no activation function on the output)*

#### Format: POLICY_CLASSICAL

`POLICY_CONV_SIZE` is a parameter.

* Convolution from `FILTERS`×8×8 to `POLICY_CONV_SIZE`×8×8
* Fully connected from `POLICY_CONV_SIZE`×8×8 to a vector of length `1858`
* *(note there is no activation function on the output)*

### Value head

#### Common part

* Convolution from `FILTERS`×8×8 to 32×8×8
* Convolution from 32×8×8 to the vector of length 128
* ReLU

#### Format: VALUE_WDL [current]

* Fully connected from vector of length 128 to the vector of length 3
* Softmax

#### Format: VALUE_CLASSICAL

* Fully connected from vector of length 128 to a scalar
* Tanh


### Moves left head

`MLH_CHANNELS` and `FC_SIZE` are parameters.

* Convolution from `FILTERS`×8×8 to `MLH_CHANNELS`×8×8.
* Fully connected from `MLH_CHANNELS`×8×8 to a vector of size `FC_SIZE`.
* ReLU
* Fully connected from a vector of size `FC_SIZE` to a scalar
* ReLU


[^1]: AlphaGo Zero [https://deepmind.com/research/publications/mastering-game-go-without-human-knowledge](https://deepmind.com/research/publications/mastering-game-go-without-human-knowledge), scroll down for the paper link.
[^2]: AlphaZero [https://deepmind.com/blog/article/alphazero-shedding-new-light-grand-games-chess-shogi-and-go](https://deepmind.com/blog/article/alphazero-shedding-new-light-grand-games-chess-shogi-and-go), scroll down for the paper link.
[^3]: Squeeze and Excitation networks: https://arxiv.org/abs/1709.01507
