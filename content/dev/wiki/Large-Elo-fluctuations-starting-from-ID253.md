---
title: "Large Elo fluctuations starting from ID253"
wikiname: "Large-Elo-fluctuations-starting-from-ID253"
---
Below is a brief summary of our investigation into the issues that started showing up in the Elo graph from ID253. We have been performing a number of tests that require changing parameters, generating new self-play games, and training on those. This process requires many self-play games, so your help generating them is still invaluable! We have some promising leads, but still require more time and testing. Thank you for your patience.

2018-05-15 Update: We have a good theory ( [[oversampling|Large-Elo-fluctuations-starting-from-ID253#where-oversampling-comes-from]] ), and we have a temporary workaround in place (value_loss_weight changed to 0.25). Error is working on a permanent fix, see his [[plan|Large-Elo-fluctuations-starting-from-ID253#error323s-plan]]).

## crem's summary:
* It was discovered that lczero.exe doesn't use rule50 and last all-ones plane (since flip bugfix), but it was filled during training. That was fixed in v0.10, rating jumped for one epoch, then started to fall down.
* Learning rate changed to 0.0005 / 0.0001 (from 0.001 / 0.0005). Helped a bit for a few epochs, but then it started to drop again.
* value_loss_weight changed to 0.25. Helped for one epoch so far (UPD 2018-05-14: for 4 epochs so far)
* FPU reduction is disabled in training games (in command line sent from server)
* Another thing which was introduced in v0.8 but not reverted is Cpuct change from 0.85 to 0.6

* There are discussions whether we should rollback. If yes, what exactly (only network or also drop training games) and to which point.
* There are observations that we sample too many positions from the same game (several times more than there are moves in game?). And also that our shuffle buffer is too small
* There is observation that rule50 plane's average weights are much higher than other planes. No explanation of that. It seems that it was like that even before the rule50 bug, and it seems that it was the highest right after boostrap and it gradually decreases but not much.
* rule50 plane is the only plane which is not normalized (other planes only contain 0 and 1, rule50 contains numbers from 0 to 99). That doesn't easily explain weights inflation, but probably still worth normalizing.
* There is a long proposal from Dubslow about development organization and that we have to feature freeze for now. Everyone seems to agree.
* There is a discussion that test and training data are not correctly separated. https://github.com/glinscott/leela-chess/issues/595
* After fixing rule50 plane in lczero, lc0 and lczero return nearly identical results from NN and MCTS. Makes them easy to compare, and means that probably no major bugs are left (or both lczero and Lc0 have the same bugs).

## Error323's plan:
Thanks. Given all that's happened, may I propose the following. (Please correct me if I missed something).

0. Normalize 50 rule plane 
1. Adjust the trainingpipeline to same position samplingrate as A0. 
2. Roll back from last high perf net with sane value head 
3. Let v0.10 fill the training window 
4. Resume training 

Enforce lc0 asap, and I mean ASAP. Without OpenCL support. I know this is somewhat controversial and problematic to AMD users. But 1) It's so much faster and getting games is our #1 priority (right after being bugfree) 2) None of the people here are familiar with OpenCL and so we are making ourselves dependent on external factors which is never a good idea. 3) It's easier to maintain and understand for newcomers. 

Take the hyperparameter settings union of A0 and AG0 (in accordance with A0) and make sure we replicate the work by Deepmind as faithfully as possible. I strongly believe this is our best shot at success, as none of us has the amount of compute to scientifically propose superior hyperparameters. Even though we still miss a subset of all parameters, this is still easier to control than also deviating from the ones we do know (even if it will produce faster convergence in theory).

## Where oversampling comes from:
* ~160'000 games are created daily
* ~135 positions are there in average game
* = 21'600'000 positions generated per day.

Training occurs at the following schedule:
* ~6 networks per day in average
* x51'200'000 positions per training session (50000 steps * 1024 positions)
* = 307'200'000 positions used for training per day.

307'200'000 / 21'600'000 = 14.2  -- in average, we use the same position for training so many times.
Ideally, it should be 1 or slightly less.

How to fix that:
* Generate more games. That's always welcome. :)
* Reduce number of positions per training cycle. It's said to reduce training quality (need more information why).
* Produce new network rarer (daily or less, maybe 14 times rarer). That's the most probable way forward for now. (After rollback)

## Data supporting that overfitting was a major problem
v10 fixed some bugs (rule50, all 1s plane) and was released at around ID271, but the self-play Elo continued to go down. value_loss_weight was changed around ID287, and the self-play Elo immediately started to go up. This plus many other indicators (tensorboard graphs, analysis of positions, analysis of policy and value heads) show that overfitting was the largest factor in the Elo fluctuations, not the bugs (rule50, all 1s) which had been in the code since v5, or the other params (puct, fpu).

## crem's update, 2018-05-19

The plan for now:

* No rollback.

Instead fix current pipeline:
* Do proper separation of test and training datasets.
* Only start training of new net when X new games available (exact X to be decided but it's somewhere in range of 100000-500000)

In parallel:
* Fix other things like rule50 plane normalization
* Bootstrap a 256x20 net from existing games.

After that compare how old and new network perform and decide how to proceed (most likely, use 256x20 net)