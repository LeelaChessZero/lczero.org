+++
title = "TB Rescoring"
slug = "tb-rescoring"
published = 2018-09-16T00:57:00.001000+02:00
author = "killrducky"
tags = []
draft = true
+++

While test20 runs, we are running test30 in parallel to test two ideas. First
test30 uses a different method to initialize the first random net, and a
slightly different LR (Learning Rate) strategy for the first few nets. The
idea is to see if this eliminates the large spikes seen in some key metrics --
policy loss, mse loss, reg term (see our expanded
[glossary](https://github.com/LeelaChessZero/lc0/wiki/FAQ#glossary)).

The second idea is to test TB (Endgame Tablebase) rescoring. This may improve
the accuracy of the value head. The procedure is:

  * Clients continue generating self-play games as before, no TB involved.
  * The data from these games are sent to the server.
  * The server parses these games, and when a position reaches a new WDL entry, 
the game result for all positions up to that point is changed to the TB result. 
  * An WDL entry is when there are 5 or fewer pieces and a capture or pawn push 
just happened, and neither side can castle (9000 internet points for anyone who 
can find an Lc0 self-play game where the castling exception applies!)
  * The game is parsed for the next WDL entry, and again all positions in this 
new section are marked with the TB result.

This is an alternative to doing temperature reduction or other similar
methods, but does not require changing the way clients generate data. So it’s
easier to test and compare with and without this method. Also by doing this on
the server side we don’t require all users to download TBs.
