+++
title = "Leela in December"
slug = "leela-in-december"
published = 2019-01-07T20:18:00.002000+01:00
author = "Kaffe avec"
tags = []
draft = false
+++

## Quick recap

Remember to consult the
[glossary](https://github.com/LeelaChessZero/lc0/wiki/Technical-Explanation-
of-Leela-Chess-Zero) if you find some terms confusing.

With Test20 being suspended on November 16th, we started December with Test30
as the only game in town. Remember that test30 was "test10 without the bugs"
and "Test20 with policy sharpening". Test20's high CPUCT value (5.0) had never
really worked and Test10's low setting was deemed too low. CPUCT is a
parameter that influences how likely you are to try something new vs something
you know works, and was one of the crucial details missing from the original
DeepMind paper. Test30 also used 5.0 but with a technique called policy
sharpening to counteract the negative effects of a high CPUCT.

At the beginning of December Test30 had been stable for a while and the devs
agreed to experiment with parameters, starting with CPUCT. For the nitty-
gritty details one should consult the #dev-log channel in Discord where every
parameter change is recorded together with a short reasoning behind the
change. This change would lead to some weeks of lots of new knowledge at the
cost of small elo gains.

## Notable new functionality

  * Major new functionality is support for [Squeeze-and-Excitation 
Networks](https://arxiv.org/abs/1709.01507) (SE-nets) . 
  * Performance enhancements to search
  * Time management optimizations

## DeepMind paper

Then, on December 6th Google released a new version of their paper. This
ensured frantic activity amongst the devs. The most important new information
was:

  * CPUCT used was 2.4, plus more details on the formula used 
  * Deep Mind set temperature to 0 after 15 moves (from both players), ensuring 
only the best alternative was selected from then on. Leela had used a constant 
temperature throughout the game, trying to find something that gave diversity 
during the opening but not blunder too much in the end game. Temperature 
settings are the main culprit behind Leelas ... sub-optimal... end game play. 
  * First Player Urgency, FPU, was revealed to be "assume any move you haven't 
evaluated as losing". Leela had until now tried to estimate this value based on 
the parent node's evaluation. 

The paper launched a range of experiments lasting roughly until December 17th.
We learned that:

"Policy sharpening is bad"  
"AlphaZero parameters are good"  
Changing parameters mid-run gives results that might be hard to interpret.

A more indepth blog post on the paper and its impact was published
[earlier](../../../2018/12/alphazero-paper-and-
lc0-v0191.html?m=1).

## StockFish 9

Cscuile reported in our
[forum](https://groups.google.com/forum/m/?utm_medium=email&utm_source=footer#!m
sg/lczero/JO6TAfO7ODk/4QHl8ExBDgAJ)
that net 32406 is able to beat StockFish9. The post is a link to the a
spreadsheet showing 32406 with a higher elo estimate than SF9 4 core. 32425 is
reported as having even higher elo.

## TCEC

Paralell to all of this TCEC was going on. 11248 had been cruising through all
the lower divisions and Leela was certain to qualify for Premier Division
around December 24th. (Premier Division still ongoing, Leela in 2nd place
after 25/42 rounds). 11248 is an old net. From a make-the-best-chess-AI
viewpoint, Leela had not made any progress for almost six months. This was
beginning to dampen the morale and we saw drop in the number of contributors.
The decision was made to lay off further experimentation and make the best
Test30-net possible and hopefully send it to TCEC.

A solid indicator for how far into a training run one has come is the number
of Learning Rate drops (LR-drops). Each training run typically has 3-4 and
Test30's first LR-drop was November 1st. The second would have happened
already if not for all the experimentation. Thus the experimentation phase
ended with the second LR-drop on Dec 19th. The race was on to produce a new
best net before deadline. The drop gave immediate results and eventually 32194
was sent to premier division after a community vote on Discord. The number of
contributors started to rise again.

## Test35

On December 10th Tilps started Test35, a small net with 10 blocks, to test
whether the new SE-implementation works, which it seems to do. Test35 is not
expected to produce a new best net. Self-elo graph can be seen at
<http://lczero.org/training_run/1> .

## Status right now

Test35 and Test30 going in paralell. Test30 is not going away even though
Test35 is receiving the bulk of contributions. Test35 will eventually give way
for Test40, so that both test30 and test40 will continue training. A
contributor can choose what test net to contribute to or to be auto assigned
by the devs (which is the default) by using the '-run <num>' parameter. 0
means auto assign, 1 is Test35 and 2 is Test30.

## Want to contribute?

Great! Please start with our
[guides](https://github.com/LeelaChessZero/lc0/wiki#Contribute) and remember
that both the forum and Discord channel #help are eager to help.
