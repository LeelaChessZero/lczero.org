+++
title = "Competition Season!"
slug = "competition-season"
published = 2019-05-11T02:01:00.001000+02:00
author = "Alexis Olson"
tags = []
draft = true
+++

Today, May 10, 2019, Leela is playing in the first game of the high profile
[TCEC Season 15 Superfinal](https://tcec.chessdom.com/). Leela qualified after
she cleared Division P undefeated, winning at least once head-to-head against
every opponent except Houdini. Her opponent in the superfinal is Stockfish,
who [lost
once](https://cd.tcecbeta.club/archive.html?season=15&div=p&game=161) to Leela
head-to-head in Division P, but finished with a higher score by winning more
games than Leela against the other Division P competitors.

In the just-concluded [TCEC Cup
III](https://cd.tcecbeta.club/archive.html?season=cup3&round=fl), seeding was
determined by the engines' finishing position in their divisions, with the
exception of Leela, who was automatically seeded #1 as the Defending Cup
Champion. Leela easily handled Round 32 and Round 16 of TCEC Cup 3, knocking
out Marvin (5-0) and Booot (4.5-0.5). The quarterfinals featured the same
engines as Division P with Leela knocking out Fire (5-3). In the semifinal,
Leela scored two wins over Houdini ending with a 4.5-2.5 score to advance to
the cup final versus Stockfish. In the final, Leela and Stockfish played their
first eight games to a tie, each with one win and one loss. In the first tie-
breaker pair, Leela [won as
white](https://cd.tcecbeta.club/archive.html?season=cup3&round=fl&game=9) and
held Stockfish to a draw on the reverse, winning the match 5.5-4.5 for her
second consecutive TCEC Cup.

In the hours before the superfinal, the TCEC team ran various unofficial tests
at disparate time controls. One such test match featured Stockfish at 30' + 5"
time control and Leela 1/10th of that at 3' + 0.5". Leela still [won a
game](https://cd.tcecbeta.club/archive.html?season=bonus&div=hw_simulation1&game
=2)
and drew the match despite the large time disadvantage. Prior to the Cup,
Leela faced the supercharged 176-thread, 7-man tablebase "Bluefish" version of
the Stockfish engine that is used as a kibitzer for the TCEC eval graphs.
Again, Leela [won a
game](https://cd.tcecbeta.club/archive.html?season=bonus&div=fun_bonus&game=2)
and drew the match.

The Leela net T41800 (used in Division P) is approximately 10-20 Elo stronger
than the T32930 net that narrowly lost to Stockfish in the previous superfinal
and the T40.T8.610 net selected for this superfinal is [approximately 35 Elo
stronger](https://discordapp.com/channels/425419482568196106/530486338236055583/576454343717421086)
than T32930. Given Leela's progress, [many chess fans think that Leela is
likely to win this superfinal](https://strawpoll.com/ca24ayb5).

The net T40.T8.610 that is playing in the superfinal is a fork of T40 that has
been refined by @jhorthos. While more detail is available in the
[documentation](https://docs.google.com/spreadsheets/d/1-KAIfcaq5gwT90AlFNlqAWsmOehrCks86A88V47LDO0)
he put together, it can be summarized as a T40 net forked from 42000 with an
additional 3x LR (learning rate) drop applied at the fork and partial 7-man
tablebase rescoring. It was trained only on games produced in the main
training pipeline and doesn't include any non-zero features that distinguish
it from any other T40 net (LR drops and TB rescoring are a standard part of
Leela's training process). This fork is a short-term Elo boost that allows for
extra polishing of a competition net without affecting the LR schedule of the
main training run. The main T40 run is expected to surpass this net and will
have another LR drop in the coming weeks/months before it eventually plateaus
and is retired to open up resources for the next run.

Leela is also competing in the [Computer Chess
Championship](https://www.chess.com/computer-chess-championship) CCC 8: Deep
Dive as the last engine up in the escalation format, playing four games
against each of the other 23 engines and looking to overtake the current top
scores from Antifish, Leelenstein, and undefeated Stockfish.
