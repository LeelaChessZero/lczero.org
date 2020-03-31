+++
title = "Lc0 v0.21.2 has been released"
slug = "lc0-v0212-has-been-released"
published = 2019-06-09T17:25:00+02:00
author = "crem"
tags = []
draft = true
+++

After quite a long delay we are releasing an update to Lc0, new version is
v0.21.2.

Download [here](https://github.com/LeelaChessZero/lc0/releases/).

Changes include:

  * Optimizations for GTX 16xx cards (cudnn-fp16 now works for them, even 
though it doesn't give as much performance boost as for RTX cards).
  * "Sticky endgames" feature (default on). This makes Lc0 play better when it 
sees a checkmate somewhere during the search.
  * Centipawn formula has been updated, now Lc0 will show eval values more 
similar to what other engines show.
  * Optimization for wider (more filters) neural net, for future (maybe test60) 
runs.
