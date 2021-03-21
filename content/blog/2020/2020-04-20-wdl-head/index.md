---
title: "Win-Draw-Loss evaluation"
slug: "wdl-head"
published: 2020-04-20
author: "crem"
# image: "name"
# cover: "cover.png" # Default
loadChessbaseScripts: true
---

Traditionally, computer chess engines evaluated position in terms of [pawns](https://www.chessprogramming.org/Centipawns).
This is a convenient choice, as material is a foundation of position evaluation, which is true also among humans.
Situations where the importance of positional aspect strongly outweights material are often thought as beautiful exceptions rather than the rule.

It is however not the most logical way to score a position.
Using pawns sounds arbitrary, and it's also not linear and the same step has different meanings:
while going from 0 to 1 pawn advantage keeps the position quite holdable, going from 1 to 2 usually makes it mostly lost.
Going from 10 to 11 makes no difference at all.

<!--more-->

## Using probabilities

What other values can be used as an evaluation of the position?
The natural choice appears to be using of **probability of winning**.

Probability of winning is the evaluation method that DeepMind chose for their AlphaGo and later AlphaZero engines.
It's also what LCZero used up to July 2019.

Internally, LCZero has always used probabilities, but as chess engine protocol UCI requires value in pawns, it just converted its output using the following function:

![]({{< file "qtocp.svg" >}})

You may have already noticed the problem with this approach: it doesn't account for draws.
Unlike Go[^1], chess games has three possible outcomes: **win**, **loss** and **draw**.
Both AlphaZero and pre-July-2019 LCZero work around that by assuming that draw has "½ of winning probability".
With this assumption, the meaning of evaluation changes from "probability of winning" to **expected game score**.

## WDL head

But nothing stops us from predicting all three possible outcomes separately, and that's what we did!
All networks starting from July 2019 have the so-called **WDL head**, and are capable of predicting win, draw, and loss probabilities separately.

Unfortunately, as of today, most [chess GUIs]({{< ref "#gui-with-wdl-support" >}}) still expect evaluation in *(centi)* pawns, and it's not possible to display WDL probabilities there.
But when you can see them, it opens up another important tool for position analysis and insight into Leela's thinking.

Here are some examples:

#### TCEC 17 Superfinal Game 53

This game ended in a draw. Stockfish showed eval of 0.0 for all moves starting from move 22.

{{< chessgame "TCEC_Season_17_-_Superfinal_53.pgn" >}}

However, from Leela perspective it was not that boring at all. Here is the WDL graph of this game:
![Game 53]({{< file "game53.svg" >}})

As you can see, up to move 50, both sides have solid winning chances, and draw probability was kept under **0.5**.

#### TCEC 17 Superfinal Game 71

That's also a draw, but it's a very different draw. This time, it's a "dead draw" from early on:

{{< chessgame "TCEC_Season_17_-_Superfinal_71.pgn" >}}

It was a long and boring game, and Leela knew that from the very beginning!
![Game 71]({{< file "game71.svg" >}})

#### TCEC 17 Superfinal Game 16

Game 16 Leela lost, but you can see from the graph that this game was quite an eventful:

{{< chessgame "TCEC_Season_17_-_Superfinal_16.pgn" >}}

![Game 71]({{< file "game16.svg" >}})


## GUI with WDL support

Lc0 is not the only engine that can output WDL probabilities.
[Stoofvlees](https://www.chessprogramming.org/Stoofvlees)[^2] also supports this output type.

However, there are very few chess GUIs that support displaying WDL. The ones I'm aware of are:

* [Nibbler](https://github.com/rooklift/nibbler/releases), the GUI made specifically for Lc0.
* [Banksia GUI](https://banksiagui.com/)
* Fritz 17 (as I hear), that has it enabled[^3] for their distribution of Lc0 called Fat Fritz.

If you'd like to have this feature in your favorite chess GUI (or your favorite chess engine competition), consider submitting a feature request to the author of the GUI or administator or the competition.

#### A bit of technical details

If you are a chess GUI developer, here is a bit of technical details for you:

* When an engine supports WDL output, it has the UCI parameter called `UCI_ShowWDL`
* When `UCI_ShowWDL` is set to `true`, the `info` line includes `wdl <win_prob> <draw_prob> <loss_prob>`, where probabilities are in integer permille and always add up to 1000.

Example:
```
info time 2329 nodes 184 score cp 33 wdl 395 324 281 nps 2875 pv d2d4 d7d5
                                     ^^^^^^^^^^^^^^^
```
*Note: it is not a part of the **score** parameter. The following is also valid: `info wdl 395 324 281 score cp 33`*.


[^1]: I hear Go may have draws, but they are rare.
[^2]: Stoofvlees is an engine written by [Gian-Carlo Pascutto](https://en.wikipedia.org/wiki/Gian-Carlo_Pascutto), author of Leela Zero (the engine playing Go), the engine Leela Chess Zero was originally based on.
[^3]: To enable WDL output for vanilla Lc0 in Fritz 17, create a file `lc0.config` with the following content `show-wdl=true`, to the same directory where `lc0.exe` is located.
