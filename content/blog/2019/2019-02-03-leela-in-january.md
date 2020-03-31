+++
title = "Leela in January"
slug = "leela-in-january"
published = 2019-02-03T20:46:00.001000+01:00
author = "Kaffe avec"
tags = []
draft = true
+++

As always, consult the
[glossary](https://github.com/LeelaChessZero/lc0/wiki/Technical-Explanation-
of-Leela-Chess-Zero) if needed.

## Ordo rating

##

The standard way to to put a number on anyone's chess skills is to determine
the [Elo](https://en.wikipedia.org/wiki/Elo_rating_system) rating. There is
however an alternative called [Ordo
rating](https://www.blogger.com/Ordo%20rating%20https://github.com/michiguel/Ord
o),
which is "a program designed to calculate ratings of individual chess engines
(or players). It has a similar concept than the Elo rating, but with a
different model and algorithm. Ordo keeps consistency among ratings because it
calculates them considering all results at once." Leela's self play rating
will from now on be based on Ordo which will better reflect the actual
progress. Especially T30 had a run-away self-play Elo at more than 11.000,
which those new to Leela often misinterpreted as a real Elo of 11.000 instead
of the more realistic 3400-3500 Elo.

When computing the Ordo rating each net is compared to previous net, next net,
the net 3 before, the net 3 after, the net 10 before and the net 10 after. A
net is given a preliminary rating based on comparisons with only prior nets
until 10 newer nets are available. At that time the final Ordo rating for a
net is computed.

TCEC

January was packed with action in the TCEC. Bob23 already wrote an [in-depth
article](../../../2019/01/leela-promotes-to-superfinal-of-
tcec.html#more) about how Leela made it to her first super final (sufi)! The
executive summary was three quick wins and a solid grasp of second place
before a disastrous 0.5 points the next four matches. Unusual low evaluation
speed (nps) following a reboot that may have done something with the GPU's fan
settings fueled a lively debate. In the end the devs went through the logs and
determined that no external factors caused the losses. In the final match
Leela would secure second place and a sufi ticket with a draw with black
against Stockfish. The net for sufi has not yet been chosen.

### The cup

Leela entered the second TCEC Cup and has had little trouble getting to the
semi finals.

## CCCC

32890 is selected for CCC5.

## T30

T30 ran through entire January and is still running, going from net 32386 to
32982. The exact Elo for each net is a bit hard to determine, but going by the
network overview the Ordo rating increased from 3263 to 3290. This is not a
strictly rising number though. Some nets are weaker than earlier nets, but
overall T30 did increase in strength during January.

The latest news is that T30's end game temperature has been turned off (no
randomish moves in the endplay). Resignation has also been disabled "for its
drift into the ether before T50 starts".

## T35

T35 quickly verified the new SE-net architecture we talked about in the
December summary. It was thanked for it's dedication to the job and stopped.

## T37

T37 was a very short lived test run before T40 started. It did what it was
supposed to and was quickly stopped.

## T40

Test40 started on January 8th. Reading Discord's #dev-log we see that "this
aims to take on a bunch of the learning we've done recently with T30/35/37,
and parts of the details revealed in the deepmind papers, and try to put
together a somewhat clean run. Since its a major run, we will use [source
control ](https://github.com/LeelaChessZero/lczero-training-
conf/tree/test40)for the training script parameters."

### Learning Rate

As we mentioned in the December update, drops in the Learning Rate (LR-drop)
if often followed by an increase of rating. Here is how the rating changed for
T40 after the LR-drop to 0.02 on January 27th.

[![](../../images/2019-02-03-leela-in-
january-2019.02.progress.png)](https://2.bp.blogspot.com/-Li_2QOfdosA/XFc7KcLBWI
I/AAAAAAAAJX4/FsZdzsAMCHka3GEJTGmvIzMFnlgXbSmEQCLcBGAs/s1600/2019.02.progress.pn
g)  
---  
Where T40 ended in January and how the first LR-drop affected the rating

### Technical details

For those with an AI-background: The keen eyed may notice that we've started
with swa_max_n of 1, to be increased once the initial plummet is over. Other
details not covered elsewhere is that rescoring now includes 6 piece dtz. This
makes it a bit slower, but still fast enough to handle a couple of million
games a day without dramas. Seed data comes from T35 (which in turn had its
seed data come from T20, which started with random seed). Rescoring has no
policy sharpening temperature, but a small offset is still applied, equivalent
to the training temperature offset of -0.25 visits - same as T30/35/37.

## T50

As mentioned under T30, the words "T50" has been spoken. All that is known is
that it will be an experimental run. The devs have not started planning it
yet.

## Standardized test results

Most Leela followers are interested in her Elo progression and as such lots of
different reports have been submitted both on discord and in the forums. Due
to a lack of coordination these tests have been run under different
circumstances and have been reported differently so comparing results between
contributors have been difficult. This has hopefully come to an end as Discord
got a new channel called #test-results. This is for reporting results in a
standard format, and only that. If you want to get the latest information on
how new nets compare against e.g. Stockfish, #test-results is where you want
to go.

## New software

27th: client version 20 is now available!

28th:  client version required for training has been raised to version 20.

read dev-log. New client and lc0

### Pytorch

## Top Contributors

User Games / Month

Nipsuli 13650381

sv 3450702

mkh 3209770

Cheetah 2610543

dje 2313586
