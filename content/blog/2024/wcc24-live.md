---
title: "LCZero Live analysis for WCC 2024"
slug: "wcc24-live"
published: 2024-11-20
draft: true
author: "crem"
# image: "name"
# cover: "cover.png" # Default
---

We are excited to announce the launch of https://live.lczero.org/ for the upcoming
World Chess Championship 2024 between Ding Liren and Gukesh Dommaraju.
On this site, you’ll be able to follow real-time annotations of the matches powered by the LCZero engine.

<!--more-->

As you may know, there is a similar site https://analysis.sesse.net/ that provides real-time analysis of the games using Stockfish.
We'd like to showcase the distinctive features of LCZero that allow us to provide more insights into the games, for example:

* Showing probabilities of every game outcome (white wins, black wins, draw), rather than just a single centipawn evaluation.
* Showing the evaluation and probability of each move being played by the players, rather than just the best move.

The WCC games will start on November 25th, but we also hope to cover the FRC games between Magnus Carlsen and Fabiano Caruana that will start on November 20th (if we find a move feed).
Inbetween the games, we may run the annotation of TCEC games just to keep the engine running and to provide some entertainment for the viewers.

---

### Technical details

The analysis is done on the following hardware:

* 4 x RTX 4090 GPUs
* AMD EPYC 7502 32-Core Processor
* 512 GB RAM
* Network running is BT4-1024x15x32h-swa-6147500.

The probabilities will be adjusted by the players' ratings and their clock times.


### User interface



We’re hopeful it’ll manage the traffic smoothly, although we're uncertain about how much popularity to expect.