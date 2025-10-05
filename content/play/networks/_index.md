---
title: Networks and Runs
weight: 800
---

Since 2018, people inside and outside of LCZero team produced hundreds of thousand of neural networks.

## What defines a network

To have a trained network, you need to think about three aspects:
* Network structure
* Training data
* Training procedure.

### Network structure

Network structure defines:

* Supported features (e.g., whether it is able to predict probability of Win/Draw/Loss or only expected outcome)
* Network capacity, how much it is able to "know" in the end.  
  Generally, larger networks have better capacity, but slower to use and train.
* How easy it learns (often hard to predict, but some structures learn better than others).

Network structure is usually picked at the start of the [run]({{< ref "#what-are-runs" >}}), and it's usually impossible to switch in the middle.

One of important characteristics of the network is its size. It's defined in number of **blocks** and **filters**, which is sometimes referred to as **height** and **width** of the network. The size is often written as i.e. `10x128`, meaning 10 blocks and 128 filters.

The size in memory/weights file, and computational complexity, is proportional to the number of blocks and to the square of number of filters. For example, `24x320` network is **15** times larger than `10x128`:
```
(320² ✕ 24) / (128² ✕ 10) = 15
```

### Training data

Network needs millions of example chess games to learn.
The games have to be both very high-level for a network to learn strong moves, and contain weaker moves so that the network learns to avoid them and know how to exploit them.

The existing sets of games, like Tournament chess or Computer chess databases, may be enough to train the network to a reasonable level, but it has its limits. This approach is called **supervised learning**.

Another approach is to generate the training data yourself: train a network, use it to generate games, and then use those games to generate a next, stronger version of the network, then generate games using the updated network and so on. This is called **reinforcement learning**.

The LCZero project uses **reinforcement learning** for its [official runs]({{< ref "#official-runs" >}}), and then people from LCZero community try different training procedures on the same data using **supervised learning** approach and produce [contrib runs]({{< ref "#contrib-runs" >}}), which usually results in even stronger networks.

### Training procedure

When it comes to training a neural network, there is a vast space of methods and parameters to pick from, including choosing an [optimizer](https://en.wikipedia.org/wiki/Stochastic_gradient_descent#Extensions_and_variants) and selecting a [learning rate schedule](https://en.wikipedia.org/wiki/Learning_rate#Learning_rate_schedule).

For reinforcement learning, runs take pretty long time, up to half a year, because generation of the training games is slow and their quality grows very gradually.

However, when all training data is there, training of a network completely takes only up to few weeks.
That makes it possible to use this training data for [contrib runs]({{< ref "#contrib-runs" >}}).
Contrib runs are usually stronger because:
* It only takes 1-2 weeks to train it, which makes it possible to try more training configurations.
* Contrib runs can pick training data in any order, skipping periods or increasing variety.
* Reinforcement learning training aims to produce a network which is good both in playing and generating high quality training data, those objectives are not the same.
  Contrib runs focus solely on better play.

## What are runs?

Training of a network is a long process.
However, it's possible to take a snapshot of a network in the middle of the training process, and use that partially trained network.
In fact, there is no such thing as "completely trained" network, you just decide to stop at some point.

The full cycle of training the network (a few months for the reinforcement learning and a few weeks for supervised) is called a **run**.
**Networks** of the run are just snapshots of this process.

Supervised runs can easily contain just one, final, network. Earlier snapshots are mostly used to check that training goes well.

For reinforcement learning however runs are crucial: when a new network is releases, selfgame generation starts to use that network, providing better training data for the next iteration.

### Official runs

Official runs use **reinforcement learning** approach. All networks of all official runs appear [here](https://training.lczero.org/networks/?show_all=0).

For historical reasons, official runs are named `testXX` (e.g. `test60`), and sometimes abbreviated as T60. Those names are not written anywhere on the training page.

The number in the run name shows first digits of the network nubmer when training started. E.g. network **63317** (sometimes written as id63317) belongs to run **test60**, and network **713111** to **test71**.

As a rule, runs starting from even numbers (test40 and test60) are "main" training runs which aim to get the network of maximum strength.

Odd numbered runs (test71, test58, etc) use much smaller network size (usually 10x128), and are used for experiments of new ideas to be used in next "main" runs. The experiments often stop before reaching the full strength (which would be not as good as for large networks anyway).

### Contrib runs

Example of a contrib run is [BT4-spsa-1740](https://storage.lczero.org/files/networks-contrib/big-transformers/BT4-1740.pb.gz), which is trained from test80 training data.
