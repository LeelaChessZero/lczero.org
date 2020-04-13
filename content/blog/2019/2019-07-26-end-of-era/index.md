+++
title = "End of era"
slug = "end-of-era"
published = 2019-07-26T15:44:00+02:00
author = "crem"
tags = []
draft = false
# cover = "cover.png" # Default
+++

The era of test40 has finished, that training of test40 has been stopped.

<!--more-->

Instead we've just started to train **test60**. What's new there (relative to
test40):
  * Residual tower size is 320x24 (24 blocks, 320 filters).
  * Policy head is AlphaZero-style (8×8×73 instead of plain 1858 vector).
  * Value head is WDL.
  * Instead of using fixed nodes for every move while training, KLD threshold 
is used instead (think less in obvious cases, think more in complicated cases, 
but in average it's still about the same as it was).
  *  _[disabled after net 60021 due to issues]_ Illegal moves are masked from 
policy head, so that neural network doesn't have to learn detecting legal moves 
itself.
  * Instead of training value head just on game outcome {-1; 0; 1}, a fraction 
of tree's Q value after the move is added.
  * Using different FPU at root vs for the rest of the tree.

As it was written in
[earlier post]({{< ref "2019-06-16-whats-going-on-with-training" >}}), it's not
going to be a "clean run". If we discover improvements while test60 is being
trained, it's likely that they will be incorporated in the middle of the
training process.

Let's see how it goes.
