---
title: "What is Lc0? (for non programmers)"
weight: 500
wikiname: "What-is-Lc0?-(for-non-programmers)"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---
Lc0 is often referred to as a chess engine, however, Lc0 is more like a chess engine *shell* than an actual chess engine.
Lc0 needs a *neural network* in order to play, just as a car requires a driver, or a mech requires a pilot.

The brains of Lc0, the true *player* of the engine, is the neural network that it uses.
Lc0 will give the possible moves (the resulting positions) to the network, and the network will evaluate how good the positions are and determine which positions/moves are most likely to result in victory or at least a draw, and then tell Lc0 what move is the best.

In other words, Lc0 is a robot body with eyes to see the pieces and hands to move them, and the neural network is the brain of the robot that chooses the best move.

With a weak network, Lc0 can play as poorly as a toddler, and with a strong network, Lc0 can beat even the strongest existing chess engines.

And so, if you wish to use Lc0, you need to download both Lc0 *and* a network to drive it. To get started, you can follow [the instructions found here](https://github.com/LeelaChessZero/lc0/wiki/Getting-Started).

---

So what networks are available, and what are the differences between them?

## T Nets

T nets are the main Lc0 networks.

The T nets are created entirely by playing against themselves for some number of games at a time and then learning from those games.
After finishing a set of those games, a new network is created by adjusting the previous network based on what worked and what didn't in the games.

There are different generations of T nets. Each generation starts from scratch, and so the newest generation will be significantly weaker than previous generations until they are trained up.

The current (Dec 6, '19) generation that is being trained is called **T60**.

The previous generation, that is no longer being trained, is called **T40**.

You may ask, "Where is T50?"

**T50** is a set of small, lightweight nets that are used to test different training methods before applying those training methods to T60.

All of the main networks can be downloaded from [lczero.org](https://lczero.org/networks/)

## J Nets

[J nets](https://github.com/jhorthos/lczero-training/wiki/Leela-Training) are nets created by jhorthos.

J nets are not the main Lc0 networks, but are still important networks, and are often used in tournaments against other engines.

Because all of the T net games are saved, all of them can be used as training data for other networks as well.
J nets are trained on these games.

The J nets have different network sizes and different training parameters from the T nets, which can sometimes make them stronger than the T nets in some ways.

There are many J nets, each of different sizes and different parameters. (This is a summary, but for the full description of each, head to [this page](https://github.com/jhorthos/lczero-training/wiki/Leela-Training).)

**J13** nets are trained on T40 games.

**J48** nets are trained on T60 games.

**LD2** (Little Demon 2) is a specific J net trained on T40 games.

## Other Nets

**Leelenstein** is [a net](https://www.patreon.com/jjosh) that is trained on a myriad of chess game databases with a myraid of training methods.

**Dark Queen** is a net that is trained on the available Lichess games database.

You can find more nets [here](https://github.com/LeelaChessZero/lc0/wiki/Third-Party-Nets).

## What is the BEST net?

That depends on what you're using the net for and the system that you are running it on. You can find [a good list here](https://github.com/AlexisOlson/lc0/wiki/Best-Lc0-Nets).