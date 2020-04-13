+++
title = "What's going on with training!"
slug = "whats-going-on-with-training"
published = 2019-06-16T12:58:00+02:00
author = "crem"
tags = []
draft = false
+++

I've just decided that maybe it's a time for a post. Describing what's going
on and what are the plans, stuff like that!

There are some plans for the Lc0 engine itself, but that is a topic for
another post. At least we hope to make releases more regular again
(v0.21.0-rc1 appeared on February 16th, and we are not even v0.22 yet).

<!--more-->

So, this post is be about networks and training.

## Training servers

Our main training server is still down.

Meanwhile we have a temporary replacement in cloud, but it won't last long.

We also have a longer-term temporary replacement (also in cloud), where we are
migrating to right now, and it should last for a month or two.

## Networks

Short description of historical networks can also be find
[here](https://github.com/LeelaChessZero/lc0/wiki/Project-History).

### test40

Test40 run started in mid-February, and continues to be our main run. It
underwent its semi-final LR drop 2 weeks ago. There may be one more small
final drop, but in won't run long and won't bring much extra strength.

####  **T40.T8.610 (id49901)**

There is also a fork-and-polish of test40 named T40.T8.610 which actually
played and won TCEC 15. It is based on test40 network, but was trained on top
with 7-men tablebase rescoring and learning rate ahead of test40 schedule.

Now, as test40's learning rate is also reduced, it's not clear whether
T40.T8.610 is stronger than latest test40.

### test49.9

This is an experiment to see how fixed opening book affects network strength.

The plan is to take T40.T8.610 as a base network (that's why it's also
id49901) and generate a few hundred thousand games with opening book on it,
train with them on top, and see the result.

 **jhorthos** from discord is running the training, so it's the only run not
affected by training server being down.

If you are willing to contribute to this experiment, you need to have a
special Lc0 version. Further information in our discord ([link to the
instructions](https://discordapp.com/channels/425419482568196106/445928688115122176/589323938010759168)).
There is also [this document](http://lc0.org/test49.9), maybe it will have
instructions too.

### test5x

test5x is a series of tests on smaller network to find what might work for the
next large run.

#### test50

What was new here:

  * AlphaZero-style policy head (output is a tensor 8x8x73: list of possible 
moves for a given "from square" instead of plain list of 1858 possible moves 
like before).
  * WDL-style value head. Not only learn mean game result (from -1 to 1), but 
win, lose and draw probability independently.
  * KLD - during training, instead of computing strictly 800 nodes per move, 
compute less on obvious moves and more on complicated (but in average still 
800).
  * FPU set to -1 absolute (like AlphaZero had)

Of all test5x tests so far, it is the only one which shown strength gain
compared to baseline (which was test35).

#### test51

  * FPU is back to Lc0's -0.5 relative to parent (eval of unvisited subtrees is 
assumed to be "parent eval - 0.5" rather than absolute loss [-1]).
  * Tried to use DTZ policy boost (to learn Lc0 to converge endgames faster), 
but it was later disabled due to bad iteraction with KLD.
  * Some tweaking in regularization and normalization (fixed gammas instead of 
regularization, batch normalization from the start. test50 also had it, but 
only in the end).

test51 turned out to be slightly weaker than test50. It's possible though that
if test50 and 51 were larger (than 128x10), it might be vice versa.

#### test52

  * Masking illegal moves. Instead of training illegal moves to have 0 
probability (as if they were legal but very bad), don't do that. Instead, only 
train legal moves.
  * Q_ratio training: instead of using only final game result as an indicator 
whether certain position is good, also add move eval after search into the mix.

Was roughly same strength as test51.

#### test53

  * Do not do any randomness during endgame (temperature = 0)

Was clearly weaker than test52.

#### test54

This run has just started.

  * Lower KLD thresholds more aggressively. Average number of nodes per move 
will likely be increased too (that's how I was told it works, lower thresholds 
means larger average number of nodes).

### What's next

Next big run will be test60. It will likely be a larger net in the beginning
(320x24).  
Unlike test40, which we didn't tweak during the training, test60 is planned to
be tweaked as soon as we have something promising (e.g. something discovered
by test7x experiments which will start soon after test60).

One of the possible improvements we'll have in the middle is switching to
256x24 [self-scaling](https://github.com/Cyanogenoid/lczero-training/wiki/Positive-results#self-scaling-httpsgithubcomcyanogenoidlczero-trainingtreeselfscale2)
network (by training it in parallel from same training data). It's expected that
256x24 self-scaling net is stronger than 320x24without self-scaling while having
same computational complexity.

Other possible changes (but unlikely, especially from the very beginning):

  * Instead of starting all training games from startpos, training from some 
kind of opening book (external or self-generated to calm down protests from 
"zero" activists). That depends on test49.9 results and when proper opening 
book support will be implemented.
  * Generate training games between different generations of the network 
(instead of both opponents using the same network). That will prevent 
rock-paper-scissors sequences, and eliminate need of matches, as training games 
are like matches, but have much more games.
