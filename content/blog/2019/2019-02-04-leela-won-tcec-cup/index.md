+++
title = "Leela won the TCEC CUP!"
slug = "leela-won-tcec-cup"
published = 2019-02-04T21:59:00+01:00
author = "Bob23"
tags = []
loadChessbaseScripts = true
draft = false
+++

**Leela has won the TCEC CUP-2!** After many very difficult battles and games
against the top Chess engines, Leela eventually managed to win the tournament.  
In the final Leela managed to beat Houdini at the very final game(before
tiebreaks start) with a spectacular win.

<!--more-->

TCEC CUP-2 was a tournament running with the 32 top engines of TCEC running on
normal TCEC hardware of **43 cores** of **2 x** **Intel Xeon E5 2699** v4 at
2.8 GHz.  
Leela was running on a **Nvidia RTX 2080 Ti** plus a **RTX 2080** with the
**32742** net and **Lc0 v20.1**.

The tournament had time control of **30'+5"** (30 minutes base time plus 5
seconds per move) and predefined openings were used for the games(4 ply
openings for Round of 32 and 12 ply openings for the rest of tournament).  
TCEC CUP is a single elimination format where each engine plays another engine
a set of 8 games and the best of 8, the one with more points after 8 games,
wins and promotes to next round. Format is such that the best of previous TCEC
season(that of premier division) plays the weakest engine(the weakest of 4th
division), the 2nd best of premier division plays the 2nd worst of division 4,
etc.  
There is round of 32, round of 16, quarter finals, semi finals and the final.

## Round of 32

Leela started against **Tucano** , a relatively weak engine and faced no
problem to beat Tucano in all 8 games with a 8-0 score.  
In this round only Stockfish and Ethereal managed to win with a perfect score
like Leela, beating respectively Rodent III and Schooner 8-0.

### Leela-Tucano

{{< chessgame "leela-tucano.pgn" >}}

## Round of 16

Leela would meet a new and rapidly developing engine that had some huge rapid
increase in strength lately, **Xiphos**.

And even though they started with 3 draws, Leela had no problem to win as she
won 4 out of the next 5 games and promoted with 6-2 score.

The strongest engines also promoted in this round so quarter finals would have
the exact 8 engines of Premier Division.

### Leela-Xiphos

{{< chessgame "leela-xiphos.pgn" >}}

## Quarter Finals

Leela here was matched with **Andscacs** and she started with a win, while in
the 2nd game she outplayed Andscacs and she had a win, but Leela didn't manage
to find the winning move so game ended in a draw.

Yet she didn't really face any problems at all in the next games and she
promoted comfortably with another 2 wins and all other draws promoting with a
5.5-2.5 score.

In the meantime Stockfish promoted against Komodo MCTS winning easily 6-2,
Houdini struggled against Fire having 8 draws in the first 8 games but a win
in the 2nd game of the tiebreak pair of games, gave Houdini the promotion with
5.5-4.5 and Komodo also promoted but really struggled against Ethereal having
7 draws and 1 win promoting with a 4.5-3.5 also. In the game Ethereal lost,
Ethereal could save itself with a nice defensive move that it didn't manage to
find so it was eliminated.

### Leela-Andscacs

{{< chessgame "leela-andscacs.pgn" >}}


Here in Komodo-Ethereal game, with black to play, black can save himself by
playing Bxa3! that leads to a draw.  
Yet, Ethereal had played Qc7? that loses.

## Semi Finals

Here Leela faced the mighty **Komodo** and in most games she seemed always in
control and it was she that would push for a win in some games, but didn't
manage to get any single win at all after the 8 games. So they went into
tiebreaks. That means pairs of 2 games would be played until one has better
score in each 2-game pair. Yet, 4 such pairs have been played but all 8 games
were draws again. So 16 out of 16 games were draws. But the next pair of
tiebreaks would not have the normal 12 ply predefined openings but a different
kind of book, the predefined openings from previous TCEC Superfinals.

The line that was chosen(always randomly) was an interesting Pirc line with a
dynamic position.

Leela playing with black first, outplayed Komodo to obtain her first win of
the series. So if she would hold in the next game, even with a draw, she would
promote to the final. Yet Leela having white this time, easily outplayed
Komodo and she managed to win again.

So she **promoted with a final score 10-8.**

In the other pair of **Stockfish-Houdini** a great battle was expected but
most people expected Stockfish to prevail easily or not. Houdini after all is
from September-October of 2017, a 1.5 year old engine while Stockfish is being
updated almost every day really expanding its lead as the strongest Chess
engine, while Houdini stays still. But these were just 8 games so everything
could happen. And it had happened!

First 8 games were draws. But then, in tiebreaks, Stockfish really lost a
chance to win and promote as in a great game it outplayed Houdini and reached
a winning position and while Stockfish showed an evaluation of **+5.99**
(which is most times an instant win when Stockfish says that) it didn't manage
to win! Next game was draw so with score at 5-5 a new pair of 2 tiebreaks
games would occur.

Next 2 games started with another draw but then in a Houdini-Stockfish game
and while it seemed a draw fortress, Houdini found a nice attacking resource
(called Alekhine's gun, that Stockfish saw it 10 moves before Houdini but
couldn't do anything to prevent its fate) and executed it perfectly so it won
easily after that.

 **Stockfish was eliminated!** It was a big SHOCK! Even though at these low
number of played games like here 8 anything can happen, still Stockfish didn't
lose a single game at premier division so when it loses in this TCEC hardware
of 43 cores, is big news.

### Leela-Komodo

{{< chessgame "leela-komodo.pgn" >}}

In the Stockfish-Houdini, Stockfish had the chance to win the match and
promote in this winning position where Stockfish showed a +5.99 score but
didn't manage to win.

{{< chessdiagram "2Rb1r1k/3P4/p7/4P2p/5P1P/1R6/4r1P1/7K b - - 0 66" >}}

## Final

Leela versus **Houdini** then.

Leela again seemed in control of the game and defended without any problems
when she was with black and with white created some problems for Houdini but
without anything much more than just applying some pressure where Houdini
managed to draw eventually.

So after first 7 games were draws, last game(8) before tiebreaks, was a very
sharp and double edged opening Leela decided to get into, where she played
some nice speculative attacking moves trying to apply pressure to the weak
Kingside so Houdini had to be very careful, even though Houdini had a very
strong counterplay with 2 advanced passed Pawns on the Queenside so Leela
should had that in mind too. But Houdini played 2 suboptimal moves that can
maybe even characterized as mistakes or blunders, but not that obvious
mistakes though and more analysis is needed as position is crazy complicated,
and Leela grasped the chance to attack! The attack went great and Leela played
some nice attacking Chess and she played move 31 playing fxe5 with a **+3.16**
score while Houdini was at +0.47 and Stockfish dev 176 threads (that was
kibitzing the game) didn't see fxe5 and was preferring 31.Rf1 with +1.11.
After Leela played 31.fxe5 and after 2 more moves having been played the 176
thread Stockfish jumped to +3.03 seeing indeed that Leela's move was sound and
superb.

After that it was more or less over so Leela went on to win and win the final
and the CUP!

### Leela-Houdini

{{< chessgame "leela-houdini.pgn" >}}

** Archive of TCEC CUP2 is [HERE!](http://legacy-tcec.chessdom.com/archive.php)
The whole TCEC CUP2:

![]({{< file "standings.png" >}})

Leela now plays the Superfinal of TCEC Season 14 against Stockfish dev. Time
control is 120'+15".

Leela there uses Lc0v20.2 version and 32930 net while Stockfish the 190203(3
February 2019) version.

First game was draw while in 2nd Stockfish seems to have an edge.

100 games will be played and the winner will be the TCEC Season 14 Champion!

Games can be followed [HERE!](https://tcec.chessdom.com/live.html)
