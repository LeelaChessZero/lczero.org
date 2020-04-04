+++
title = "Lc0 v0.17.0-rc2 has been released."
slug = "lc0-v0170-rc2-has-been-released"
published = 2018-08-21T20:23:00.001000+02:00
author = "crem"
tags = []
draft = true
+++

The "Release Candidate 2" for the Lc0 version
v0.17 has been published!
Available to download
[here](https://github.com/LeelaChessZero/lc0/releases/tag/v0.17.0-rc2).

<!--more-->

Release candidate 1 was mostly bug free, but there were still things to tweak:

  * The [Rule50 encoding bug]({{< ref "2018-08-20-rule50-encoding-bug-is-found" >}}) was
fixed.
  * Default batch size for openCl changed to 16.
Up to 5x speedup, promised in RC1, should be visible with default settings.

  * Time management constants were tweaked a bit.

Feel free to use this version for training, but it's not necessary. It is
expected that the "rule50" fix will **not** have either positive or negative
effect on networks in the **test10** run.

_(Reason: all weights related to that plane are equal to 0 since long ago due
to regularization, and it's not really possible to recover from that state.)_

We hope that no further changes will be needed and this release candidate will
become the v0.17.0.

We've sent this version to CCCC organizers, and it's quite possible that they
will have another test of Lc0 playing before the main event, so follow their
news if you are interested! Links to CCCC:

  * [The announcement of CCCC (from the future)](https://www.chess.com/news/view/announcing-the-new-computer-chess-championship)
  * [Link to the CCCC UI](http://chess.com/cccc)
