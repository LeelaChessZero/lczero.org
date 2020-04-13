+++
title = "Lc0 v0.23.0 has been released"
slug = "lc0-v0230-has-been-released"
published = 2019-12-01T17:05:00+01:00
author = "crem"
tags = []
draft = false
+++

**Update:** we have a bugfix release **v0.23.1**, download
[here](https://github.com/LeelaChessZero/lc0/releases/tag/v0.23.1). It
contains no chess-play-related changes, the bug was in training game
generation code.

We have a new release today!  
Download [here](https://github.com/LeelaChessZero/lc0/releases/tag/v0.23.0).

<!--more-->

What's new in the release:

  * Support of Fischer Random Chess (`UCI_Chess960` option to enable FRC-style 
castling). Also added support for FRC-compatible weight files, but no training 
code yet.
  * New option `--logit-q` (UCI: `LogitQ`). Changes subtree selection algorithm 
a bit, with a hope to win won positions faster (experimental, default off).
  * Lc0 now reports WDL score. In addition to showing position score in 
centipawns, also show probability of winning, losing, and drawing. To enable 
it, use `--show-wdl` command-line argument or `UCI_ShowWDL` UCI option.
  * DNNL BLAS builds is included in addition to OpenBLAS. It should be faster 
for modern CPUs (for older CPUs, OpenBLAS is still faster).
  * OpenCL package now contains `check_opencl` tool which detects faulty OpenCL 
hardware or drivers.
  * Added "Badgame split" mode during the training. After the engine makes 
inferior move due to temperature, the game is branched and later the game is 
replayed from the position of the branch.
  * Added experimental `--short-sightedness` (UCI: `ShortSightedness`) 
parameter. Treats longer variations as more "drawish". If you want to try it, 
values around 0.02 are good as the first guess.
  * Lc0 can now open Fat Fritz weight files.
  * Time management code refactoring. No functional changes, but will make time 
management changes easier.
  * Lc0 logo is now printed in red when Lc0 is run from command line! \o/
  * Command line argument `-v` is now short for `--verbose-move-stats`.
  * Errors in `--backend-opts` parameter syntax are now reported.
  * The most basic version of "certainty propagation" feature (actually without 
"propagation" part). If the engine sees the checkmate in one, it plays it! 
(before it could play other good move).
  * In benchmark mode, smart pruning is now disabled to add consistency between 
benchmark runs.
  * Various small changes: hidden options to control Dirichlet noise, floating 
point optimizations, Better error reporting if there is exception in worker 
thread, better error messages in CUDA backend.
