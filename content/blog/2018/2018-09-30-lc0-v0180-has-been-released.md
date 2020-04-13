+++
title = "Lc0 v0.18.0 has been released."
slug = "lc0-v0180-has-been-released"
published = 2018-09-30T14:05:00+02:00
author = "crem"
tags = []
draft = false
+++

v0.18.0 is out of "release candidate" status, and now is fully released!

Can be downloaded
[here](https://github.com/LeelaChessZero/lc0/releases/tag/v0.18.0).

It has no changes relative to RC2. For the list of differences relative to
v0.17, see posts for
[v0.18.0-rc1](../../../2018/09/lc0-v0180-rc1-has-been-
released.html) and
[v0.18.0-rc2](../../../2018/09/lc0-v0180-rc2-has-been-
released.html).

For people contributing training games, there's no need to rush to upgrade,
it's fine to use v0.17.

There is a small known issue with time management. The version v0.18.0 times
out sometimes when **all** of the following is true:

  * Ponder is ON
  * Time is added every X moves (e.g. every 40)
  * There is per move increment

Most probably there will be v0.18.1 soon where this issue is fixed.
