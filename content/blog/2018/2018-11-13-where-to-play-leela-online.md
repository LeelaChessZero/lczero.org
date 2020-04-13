+++
title = "Where to play Leela online?"
slug = "where-to-play-leela-online"
published = 2018-11-13T07:25:00+01:00
author = "crem"
tags = []
draft = false
+++

The **play.lczero.org** web site where everyone could quickly play Lc0 online
is currently down.

But even while it doesn't work, there are some options to play Leela online.

The easiest way is to play on **lichess**.  
You can pick one of the Leela Chess Zero bots:

  * [LeelaChess](https://lichess.org/@/LeelaChess) \-- full-strength bot which 
is kept reasonably up to date.
  * [LeelaNice](https://lichess.org/@/LeelaNice) \-- the bot configured almost 
not to think. It still very strong, but sometimes misses non-trivial tactics, 
which makes it possible to win.
  * [MiniHuman](https://lichess.org/@/MiniHuman) \-- distilled 48x5-se network 
from id11258 (small network learnt from large Leela net), played on Raspberry 
Pi 3 with almost no thinking.
  * [leela2200](https://lichess.org/@/leela2200) \-- distilled 112x9-se network 
from id11258, running on CPU.

Also there are other bots of different configurations and strength. Check the
[all-the-leelas](https://lichess.org/team/all-the-leelas) lichess team and
pick the one which is online. You are also welcome to host your own Leela and
join that team.

If you know other ways to play Leela online (FICS, etc), please reply in
comments, I'll add it to this post.

And of course you can always download Leela and set it up to play locally.
[This blog post](../../../2018/09/guide-setting-up-leela-on-
chess-gui.html) describes how to do that.

UPD: [Kontrachess](https://kontrachess.com/) has a way to play with LCZero. It
seems very to be very nice looking site! I did not try it myself though.
(Initially I thought it was a paid site, but one of the site representatives
said in comments below that it's actually free).

UPD2: Also [NextChessMove](https://nextchessmove.com/) has a number of options
including different networks of Lc0. From what I can see, it is similar to
what play.lczero.org was. It takes some time to get a move from a free
version, but probably paid version is faster (again, I don't know anyone who
tried that).
