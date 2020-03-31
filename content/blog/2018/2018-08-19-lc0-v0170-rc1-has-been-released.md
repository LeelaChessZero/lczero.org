+++
title = "Lc0 v0.17.0-rc1 has been released."
slug = "lc0-v0170-rc1-has-been-released"
published = 2018-08-19T19:12:00+02:00
author = "crem"
tags = []
draft = true
+++

The release candidate of a new version of the Lc0 engine has been released.

v0.17.0-rc1

We expect to have a stable v0.17.0 release in one week, so that we can use it
for [CCCC](http://www.chess.com/cccc). For now you can either help us to find
bugs by trying the RC1, or use v0.16 for now.

Download and full changelog
[here](https://github.com/LeelaChessZero/lc0/releases).

#### Change highlights:

  * Syzygy Tablebases support.  
Only WDL probe for now, e.g. the engine only probes for positions after pawn
moves and captures.

  * Ponder support.
  * Batch support for OpenCL backend, that gives up to 5x speedup.

 **UPD:** It turned out that openCl batching is **off** by default, so no 5x
speedup is visible.  
To enable, use command like flag **\--backend_opts=batch_size=16**.  
Due to another issue, it may happen that batch size 16 requires too much VRAM
so it doesn't start. In that case, try lower values.

  * Windows CUDA version of Lc0 now includes all required .dlls.
