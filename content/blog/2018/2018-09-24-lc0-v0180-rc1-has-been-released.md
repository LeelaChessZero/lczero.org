+++
title = "Lc0 v0.18.0-rc1 has been released."
slug = "lc0-v0180-rc1-has-been-released"
published = 2018-09-24T21:40:00+02:00
author = "crem"
tags = []
draft = false
+++

The release candidate of a new Leela version has been released:

v0.18.0-rc1

We expect testing phase to last around 7-10 days, after which proper v0.18.0
will be released.

Download and full changelog
[here](https://github.com/LeelaChessZero/lc0/releases/tag/v0.18.0-rc1). Please
test it thoroughly and report any bugs that you find.

Please **don't** use release candidates to generate training games. We only
use stable versions for that.

 **Change highlights:**

  * Full Syzygy tablebase support (both WDL and DTZ) (read 
[here](../../../2018/08/tablebase-support-and-leela-weirdness.html
) for more context what it is).
  * MultiPV support is added.
  * Time management is optimized. Leela should take more time in first half of 
the game now, and insta-move rarer.
