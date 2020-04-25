---
title: "What is Lc0? (for non programmers)"
weight: 500
wikiname: "What-is-Lc0?-(for-non-programmers)"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---
Lc0 is often referred to as a chess engine, however, Lc0 is more like a chess engine *shell* than an actual chess engine. This is often called "the binary".
Lc0 needs a *neural network* (also called a "weights file") in order to play, just as a car requires a driver, or a mech requires a pilot.

In other words, Lc0 is a robot body with eyes to see the pieces and hands to move them, and the neural network is the brain of the robot that chooses the best move.

Lc0 (the shell) tells the network (the brain) where the pieces are and what the possible moves are. The network then figures out which moves are most likely to win the game. If a move looks good, the network will look at the moves that might come after it to figure out if it really is the best move. If it isn't, it will start looking at a different, better looking move.

But this requires that the network knows what a good looking move even is. A completely new untrained network has no idea what moves are good and will choose seemingly random moves. But a trained network that has seen millions of games will know what a good move looks like and will generally choose a great, or the best, move, which Lc0 will then play.

With a weak network, Lc0 can play as poorly as a toddler, and with a strong network, Lc0 can beat even the strongest existing chess engines (assuming you have a good enough GPU).

And so, if you wish to use Lc0, you need to download both Lc0 *and* a network to drive it. To get started, you can follow [the instructions found here](https://github.com/LeelaChessZero/lc0/wiki/Getting-Started).

There are also different network sizes. The bigger networks are smarter but slower, and the smaller networks aren't as smart but are much faster. So if Lc0 is playing a bullet game, then you might want to use a smaller net which can think faster. However if you are using Lc0 to analyze a position, and don't really care about the time it takes to analyze it, then you'll want a bigger and smarter network.

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

J nets are trained on the games that the T networks train with.

The J nets have different network sizes and different training parameters from the T nets, which can sometimes make them stronger than the T nets in some ways.

There are many J nets, each of different sizes and different parameters. (This is a summary, but for the full description of each, head to [this page](https://github.com/jhorthos/lczero-training/wiki/Leela-Training).)

**J13** nets are trained on T40 games.

**J48** nets are trained on T60 games.

**LD2** (Little Demon 2) is a specific J net trained on T40 games.

## Other Nets

**Leelenstein** is [a net](https://www.patreon.com/jjosh) that is trained on a myriad of chess game databases with a myraid of training methods, focused mostly on high level play. It also runs on a modified version of Lc0.

**Dark Queen** is a net that is trained on the available Lichess games database.

You can find more nets [here](https://github.com/LeelaChessZero/lc0/wiki/Third-Party-Nets).

**SV or Sergio**

Nets by Sergiovieri, [found here](https://www.comp.nus.edu.sg/~sergio-v/t40/).

## What is the BEST net?

That depends on what you're using the net for and the system that you are running it on. You can find [a good list here](https://github.com/LeelaChessZero/lc0/wiki/Best-Nets-for-Lc0).