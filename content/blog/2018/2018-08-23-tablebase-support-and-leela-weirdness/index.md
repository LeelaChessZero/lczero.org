+++
title = "Tablebase support and Leela weirdness in endgame"
slug = "tablebase-support-and-leela-weirdness"
published = 2018-08-23T20:42:00+02:00
author = "crem"
tags = []
draft = true
+++

As it [has been announced earlier]({{< ref "2018-08-19-lc0-v0170-rc1-has-been-released" >}}),
Leela has a partial endgame tablebase support now.

The support in v0.17.0 is partial only, only WDL tables are probed, but not
DTZ.
That means, that Leela is only able to query tablebase for positions
immediately after captures and pawn moves, and for other positions it has to
think by itself.

<!--more-->

While it improves strength of the play in average, often lack of DTZ queries
causes weird endgame playing effects and losing play.

For example, Leela may have a 7-men position with considerable advantage
(probability of win 99%) and then "simplify" to 6-men "won" position by just
giving up the material. That 6-men position is "won" from the point of view of
tablebases, so it has probability of win 100%, and Leela happily goes there.
However, after that move Leela has to play by itself, and that position may be
really hard for Leela to win without tablebases. It's not rare that that leads
to drawn or lost games, which Leela would win or draw if it played without
tablebases at all.

![]({{< file "2018-08-23-tablebase-support-and-leela-weirdness-Untitled.png" >}})

The code for DTZ support is ready, but not tested, and we are not releasing it
in v0.17.0 which will be used in CCCC.

We are looking at [CCCC test](http://chess.com/cccc) which is currently
running and depending on how it looks like, possibly will ask CCCC team to
disable tablebase usage for LCZero this season (but probably won't).
