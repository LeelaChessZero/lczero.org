+++
title = "Leela Chess Zero - difficult positions. The new world of NN engines!"
slug = "leela-chess-zero-difficult-positions"
published = 2018-09-03T15:44:00.004000+02:00
author = "Bob23"
tags = []
draft = true
+++

[![](../../images/2018-09-03-leela-chess-zero-difficult-positions-
gjhbn6868.png)](https://3.bp.blogspot.com/-LndCa_VLYEk/W4031TFAFwI/AAAAAAAAAQs/IRn3C02EKB4fe9gbdHodf8-Oqlc7wf4OgCLcBGAs/s1600/gjhbn6868.png)

  
Traditional Chess engines with classic Alpha-Beta search, sometimes have huge
problems with some positions that require deep planning and understanding of
the position. This is because they try to search all possible moves in a
position and then their replies and then all the replies of the replies, etc.
They discard most moves of course with clever algorithms that prune almost all
moves but a few that they focus on. With a cost of course to discard a move,
not good looking at first sight, but that after many moves ahead it proves to
be a very good one. Traditional engines also have a handcrafted evaluation
function. That means in order to judge a position they have to rely on human
rules for it, e.g bonus for Rook on open file, bonus if a Pawn is on 6th rank
etc, etc.  
  
Neural net engines with latest advances Deepmind brought with deep learning
techniques used to train convolutional neutral networks, like Leela, on the
other hand use a much more powerful evaluation function. One that acquired
Chess knowledge about every single aspect of Chess by playing against itself
millions of games. No need to manually put hundreds instructions like "if it's
a closed position then Knight value increases and Rook's decreases" etc. You
let them play against itself and they create by themselves millions of such
"rules". Leela also uses a MCTS(Monte Carlo Tree Search) type of search that
is completely different than traditional AlphaBeta search.  
  
  
  
So it's no wonder that Leela plays very frequently now, moves that other top
engines like Stockfish, Komodo, Houdini etc, can't find.  
In some cases like these that would be shown here, it even plays moves that
not a single one traditional engine can find, or that they need very long
searching to do!  
Of course that doesn't mean Leela finds most deep testpositions because this
is not true. Leela is still not that good anyway in testpositions that require
tactics. But when long strategical thinking is required without so much
immediate tactics, then Leela usually shines!  
  
 _ **Test position 1.**_  
  
White to play.  

[![](../../images/2018-09-03-leela-chess-zero-difficult-positions-
popki7671.png)](https://2.bp.blogspot.com/-saXddRVPM3Y/W402NWRb8kI/AAAAAAAAAQI/zWTm3nClC8YLSDkFpHgq1fcZAo9vpx1eQCLcBGAs/s1600/popki7671.png)

  
White has created a nice concentration of its pieces in the Kingside but has
many problems to solve, especially with Bxa3 pending that will destroy white's
position. Defensive resources of black are big and King's position seems very
solid. The c2 Knight is very annoying too for white. Most traditional engines
give here black slightly better or even a lot better or even winning!  
And want to play moves like Rh6, Bf2, Nd2. Moves that lead nowhere for white
and probably are losing.  
  
  
  
  
  
  
  
But if you let Leela analyze the position(since Leela Chess Zero is just the
project name, by saying LCZero, we're referring to the body of her the **Lc0
binary** that takes the neural net and provides the search, plus the brain of
her, and that is the **nets/weights** , and here i tried about 9 nets and all
find the same move) you will see her after only something less than 1 second
of thought proposing **Qf6+** sacrificing the Queen with a big plus score for
white!!  
And not only this but she is finding the correct continuation of **Ng5** later
on that white has to play! h5 Bxh5 that she is playing are the correct move
for black also(the toughest defense) and the best reply by white.  
  
  
Analysis by Lc0v17 11089:  
  
4/8 00:00 222 801 +0,49 Be1-d2 Rf8-h8 Rh3-h6 Nc2xa3 h2-h4 Na3-c2  
4/9 00:00 247 826 +1,55 Qf4-f6+ Be7xf6 g5xf6+ Kg7-g8 Nf3-g5 Nc2xd4 c3xd4 h7-h5
Be2xh5  
5/10 00:00 299 920 +1,70 Qf4-f6+ Be7xf6 g5xf6+ Kg7-g8 Nf3-g5 Nc2xd4 c3xd4
c4-c3 Rh3xh7 Bc6-b5  
5/11 00:00 353 1,002 +1,72 Qf4-f6+ Be7xf6 g5xf6+ Kg7-g8 Nf3-g5 Nc2xd4 c3xd4
c4-c3 Rh3xh7 Bc6-b5  
6/12 00:00 431 1,110 +1,42 Qf4-f6+ Be7xf6 g5xf6+ Kg7-g8 Nf3-g5 Nc2xd4 c3xd4
c4-c3 Rh3xh7 Bc6-b5  
9/16 00:01 2,794 2,457 +1,96 Qf4-f6+ Be7xf6 g5xf6+ Kg7-g8 Nf3-g5 Nc2-e3 Rh3xh7
Rb8-b7 Be1-d2 Ne3xd1  
9/17 00:01 5,697 2,880 +2,09 Qf4-f6+ Be7xf6 g5xf6+ Kg7-g8 Nf3-g5 h7-h5 Be2xh5
Nc2xa3 Bh5-g4 Na3-c2  
10/18 00:02 5,881 2,885 +2,08 Qf4-f6+ Be7xf6 g5xf6+ Kg7-g8 Nf3-g5 h7-h5 Be2xh5
Nc2xa3 Bh5-g4 Na3-c2  
10/19 00:02 7,656 3,098 +2,02 Qf4-f6+ Be7xf6 g5xf6+ Kg7-g8 Nf3-g5 h7-h6 Rh3xh6
Nc2-e3 Rh6-h7 Rb8-b7  
10/20 00:02 9,007 3,236 +2,04 Qf4-f6+ Be7xf6 g5xf6+ Kg7-g8 Nf3-g5 h7-h6 Rh3xh6
Nc2-e3 Rh6-h7 Rb8-b7  
11/20 00:03 10,230 3,333 +2,02 Qf4-f6+ Be7xf6 g5xf6+ Kg7-g8 Nf3-g5 h7-h6
Rh3xh6 Nc2-e3 Rh6-h7 Rb8-b7  
13/28 00:12 48,019 3,804 +1,52 Qf4-f6+ Be7xf6 g5xf6+ Kg7-g8 Nf3-g5 h7-h5
Be2xh5 Nc2xa3 Bh5-g4 Na3-c2  
13/29 00:12 48,392 3,809 +1,52 Qf4-f6+ Be7xf6 g5xf6+ Kg7-g8 Nf3-g5 h7-h5
Be2xh5 Nc2xa3 Bh5-g4 Na3-c2  
14/29 00:13 51,523 3,806 +1,52 Qf4-f6+ Be7xf6 g5xf6+ Kg7-g8 Nf3-g5 h7-h5
Be2xh5 Nc2xa3 Bh5-g4 Na3-c2  
14/30 00:16 63,490 3,810 +1,56 Qf4-f6+ Be7xf6 g5xf6+ Kg7-g8 Nf3-g5 h7-h5
Be2xh5 Nc2xa3 Bh5-g4 Na3-c2  
14/31 00:17 65,141 3,809 +1,54 Qf4-f6+ Be7xf6 g5xf6+ Kg7-g8 Nf3-g5 h7-h5
Be2xh5 Nc2xa3 Bh5-g4 Na3-c2  
14/31 00:18 68,414 3,794 +1,55 Qf4-f6+ Be7xf6 g5xf6+ Kg7-g8 Nf3-g5 h7-h5
Be2xh5 Nc2xa3 Bh5-g4 Na3-c2  
  
  
Note that the analysis of this position and for all positions by Leela should
be done by **not providing the simple FEN or EPD** and let it analyze, but by
providing a history of moves that ended in that position. And this is because
of the way Leela thinks, she thinks of position sequences from the start of
the game. But practically it is proven that you do not need to provide Leela
with a full history from starting position to the desired one, but only 2-3
moves. By making her analyze from a FEN, you are IN A HUGE DANGER of obtaining
an analysis that is completely meaningless.  
So for example to obtain the above analysis for the position, we gave her the
**PGN** :  
  
[Event "?"]  
[Site "?"]  
[Date "????.??.??"]  
[Round "?"]  
[White "New game"]  
[Black "?"]  
[Result "*"]  
[SetUp "1"]  
[FEN "1r3r2/4bpkp/1qb1p1p1/3pP1P1/p1pP4/PpP2NQR/1P2B2P/n2RB2K w - - 0 1"]  
[PlyCount "2"]  
  
1\. Qf4 Nc2 *  
  
And this is the correct move in this position, white to give its Queen! And it
wins the game!  
  

[Event "?"] [Site "?"] [Date "2018.??.??"] [Round "?"] [White "?"] [Black "?"]
[Result "1-0"] [SetUp "1"] [FEN
"1r3r2/4bpkp/1qb1p1p1/3pP1P1/p1pP1Q2/PpP2N1R/1Pn1B2P/3RB2K w - - 0 22"]
[PlyCount "5"] [EventDate "2018.??.??"] [EventType "rapid"] 22. Qf6+ $3 {White
wins with this.} Bxf6 23. gxf6+ Kh8 24. Ng5 $1 {And this is 1-0 but there are
countless variations with many difficult key moves for white to find.} 1-0

  
  
_**Test position 2.**_  
  
White to play.  

[![](../../images/2018-09-03-leela-chess-zero-difficult-positions-
hkjhkj72.png)](https://3.bp.blogspot.com/-LH2ywgbLfTs/W4025MzsAKI/AAAAAAAAAQQ/p-ONtVKiqrsqx4Ckbe82qUkY6-fcdAI5gCLcBGAs/s1600/hkjhkj72.png)

  
This is a position that results in one of the variations of the previous
position 1. White is a Queen down. Yet it is winning and has a forced
checkmate with **Rg1!!**.  
Stockfish the best engine as of now, make about 1.6 billion nodes in order to
find the winning move. Most other traditional engines have also big problems
finding this as they require to calculate many many nodes.  
  
Leela again finds it immediately with a winning score!  
  
  
  
  
  
  
  
  
 _ **Test position 3.**_  
  
White to play.  

[![](../../images/2018-09-03-leela-chess-zero-difficult-positions-
hkjhkj89793.png)](https://3.bp.blogspot.com/-65k3VZ6RiH0/W403MpZdF_I/AAAAAAAAAQY/TYRjjcF3xCA9gCiwXCwEnnCrrXJGZpgdACLcBGAs/s1600/hkjhkj89793.png)

  
Here we have a classic anticomputer position where traditional engines have
many problems to see that the only way for white to win is by playing
**Qxb5!**  
A human can see it easily. Engines have huge problems in this and want to save
their Queen by retreating.  
But not Leela, as it plays Qxb5 instantly!  
  
  
  
  
  
  
  
  
  
  
E.g analysis with Lc0v17 11089 net:  
4/7 00:00 1,777 2,307 +16,62 Qa4-a2 Ke7-d8 Qa2-a1 Nf6-h7 Rb2-a2 Nh7-f8  
4/7 00:00 2,289 2,580 +19,83 Qa4xb5 a6xb5 a5-a6 Ke7-d8 a6-a7 Ne8-c7  
4/9 00:01 5,875 3,615 +19,54 Qa4xb5 a6xb5 a5-a6 Ke7-d8 a6-a7 Ne8-c7  
5/9 00:02 9,718 4,197 +19,48 Qa4xb5 a6xb5 a5-a6 Ke7-d7 a6-a7 Ne8-c7 Rb2-a2  
5/10 00:04 23,863 5,387 +19,32 Qa4xb5 a6xb5 a5-a6 Ke7-d8 a6-a7 Ne8-c7 Rb2-a2
Nf6-d7 Ra2-a6  
5/11 00:08 47,496 5,781 +19,26 Qa4xb5 a6xb5 a5-a6 Ne8-c7 Rb2-a2 Ke7-d7 a6-a7
Kd7-e8 Ra2-a6  
5/12 00:09 53,412 5,836 +19,27 Qa4xb5 a6xb5 a5-a6 Ne8-c7 a6-a7 Ke7-d7 Rb2-a2
Kd7-e8 Ra2-a6  
6/12 00:10 59,317 5,878 +19,22 Qa4xb5 a6xb5 a5-a6 Ne8-c7 Rb2-a2 Ke7-d7 a6-a7
Kd7-e8 Ra2-a6  
6/12 00:20 126,846 6,306 +18,67 Qa4xb5 a6xb5 a5-a6 Ne8-c7 Rb2-a2 Nf6-d7 a6-a7
Nd7-b6 Ra2-a5 Nb6-a8  
6/12 00:25 163,418 6,499 +18,67 Qa4xb5 a6xb5 a5-a6 Ne8-c7 a6-a7 Ke7-d7 Rb2-a2
Kd7-e8 Ra2-a6 Nf6-d7  
6/13 00:25 164,964 6,504 +18,66 Qa4xb5 a6xb5 a5-a6 Ne8-c7 Rb2-a2 Nf6-d7 a6-a7
Nd7-b6 Ra2-a5 Nb6-a8  
6/13 00:30 202,289 6,655 +18,68 Qa4xb5 a6xb5 a5-a6 Ne8-c7 Rb2-a2 Ke7-d7 a6-a7
Kd7-e8 Ra2-a6 Nf6-d7 Ra6-h6  
6/13 00:35 241,472 6,817 +18,67 Qa4xb5 a6xb5 a5-a6 Ne8-c7 Rb2-a2 Ke7-d8 a6-a7
Nf6-d7 Ra2-a6 Nc7xa6 a7-a8Q+  
7/13 00:52 388,231 7,353 +18,62 Qa4xb5 a6xb5 a5-a6 Ne8-c7 Rb2-a2 Ke7-d7 a6-a7
Kd7-e8 Ra2-a6 Nf6-d7 Ra6-h6  
7/13 01:17 622,539 7,995 +18,40 Qa4xb5 a6xb5 a5-a6 Ne8-c7 Rb2-a2 Ke7-d7 a6-a7
Kd7-e8 Ra2-a6 Nf6-d7 Ra6-h6  
  
  
 _ **Test position 4.**_  
  
  
Black to play.  

[![](../../images/2018-09-03-leela-chess-zero-difficult-positions-
ggj6876874.png)](https://1.bp.blogspot.com/-PNvJiAy4j-8/W403eTjEKuI/AAAAAAAAAQg/-ZX7T4PJIX8jAls5RbXEyIfmWIPty6otgCLcBGAs/s1600/ggj6876874.png)

  
  
  
  
Here is a position from a real game where Leela as black has played **g5!!** A
very deep positional move, trying to trap the Bishop.  
Most engines don't seem to find it in logical time.  
  
  
  
  
  
  
  
  

[Event "CCCC 1: Rapid Rumble (15|5) Stage 1"] [Site "Chess.com"] [Date
"2018.09.02"] [Round "?"] [White "Vajolet 2.6"] [Black "Lc0 17.11089"] [Result
"0-1"] [ECO "B92"] [WhiteElo "3101"] [BlackElo "3226"] [SetUp "1"] [FEN
"rn1qr1k1/1p2bp1p/3p2pB/p2Ppb2/P7/1N6/1PPQBPPP/R2R2K1 b - - 0 15"] [PlyCount
"1"] [EventDate "2018.??.??"] [EventType "rapid"] [TimeControl "900+5"] 15...
g5 $3 {[%eval -8,35] [%emt 0:00:00][%csl Rh6] Leela played this very fast!
Creating pressure on opponent's Kingside but mainly trying to entrap the
Bishop. Finally it succeeded in the game and won.} 0-1

  
  
  
_**Test position 5.**_  
  
White to play.  

[![](../../images/2018-09-03-leela-chess-zero-difficult-positions-
hkhkj79879795.png)](https://3.bp.blogspot.com/-qmy0oFSxzZs/W403qjrgLQI/AAAAAAAAAQk/L7pd-
_N95BEwyxPFj41qWiLwUN7Em8rMgCLcBGAs/s1600/hkhkj79879795.png)

  
  
  
In this again anticomputer position white has to immediately play **Bxb5!!**
in order to win.  
Most engines need a very long search in order to find it if at all since many
are stuck in capturing the Knight that only draws after Rxe2! by black.  
Not Leela, since after just some seconds finds Bxb5 with a winning score.  
  
  
  
  
  
  
  
Analysis by Lc0v17 11089:  
4/9 00:00 3,892 3,967 +16,89 Rf1xe1 Rd2xe2 Re1xe2 Kd8-e8 Rf3-c3 Ke8-d8  
4/9 00:01 4,148 3,996 +17,21 Bf2xe1 Rd2xe2 Rf3-g3 Re2xe5 Rg3-g2 Re5-e3+ Kh3-g4  
4/9 00:01 4,404 4,021 +16,64 Rf1xe1 Rd2xe2 Re1xe2 Kd8-e8 Rf3-c3 Ke8-d8  
5/9 00:01 4,660 4,045 +16,78 Rf1xe1 Rd2xe2 Re1xe2 Kd8-e8 Rf3-c3 Ke8-d8  
5/10 00:01 5,428 4,130 +16,28 Rf1xe1 Rd2xe2 Re1xe2 Kd8-e8 Rf3-c3 Ke8-d8  
5/10 00:01 7,988 4,327 +15,89 Bf2xe1 Rd2xe2 Rf3-g3 Re2xe5 Rg3-g2 Re5-e3+
Kh3-g4 Re3-e5  
5/10 00:01 8,244 4,341 +15,39 Rf1xe1 Rd2xe2 Re1xe2 Kd8-c8 Kh3-g4 Kc8-d8 Kg4-f4
Kd8-e8  
5/10 00:02 8,756 4,375 +15,50 Bf2xe1 Rd2xe2 Rf3-g3 Re2xe5 Rg3-g2 Re5-e3+
Kh3-g4 Re3-e5  
5/10 00:02 9,012 4,387 +15,56 Rf1xe1 Rd2xe2 Re1xe2 Kd8-c8 Kh3-g4 Kc8-d8 Kg4-f4
Kd8-e8 Re2-e3  
5/10 00:02 10,804 4,473 +14,98 Bf2xe1 Rd2xe2 Rf3-g3 Re2xe5 Rg3-g2 Re5-e3+
Kh3-g4 Re3-e5  
5/11 00:03 15,413 4,591 +12,90 Bf2xe1 Rd2xe2 Rf3-d3 Re2xe5 Kh3-g4 Re5-e2
Kg4-f4 Re2-h2  
5/11 00:03 17,100 4,604 +13,68 Be2xb5 Ne1xf3 Bb5xa6 Rd2-b2 Bf2-e3 Nf3-d2
Be3xd2 Rb2-a2 Ba6-c4  
5/12 00:04 19,921 4,623 +13,23 Be2xb5 Ne1xf3 Bb5xa6 Nf3-h2 Kh3xh2 Rd2-b2
Ba6-d3 Rb2xb4 a5-a6  
5/13 00:04 22,483 4,657 +13,02 Be2xb5 Ne1xf3 Bb5xa6 Rd2-b2 Bf2-e3 Nf3xe5
Be3-d4 Rb2-b3+ Kh3-g2  
6/13 00:04 22,998 4,658 +13,00 Be2xb5 Ne1xf3 Bb5xa6 Rd2-b2 Bf2-e3 Nf3xe5
Be3-d4 Rb2-b3+ Kh3-g2  
6/13 00:09 47,568 4,781 +14,10 Be2xb5 Ne1xf3 Bb5xa6 Rd2-a2 Bf2-e3 Nf3-d4
Be3xd4 Ra2-a4 Ba6-d3  
6/14 00:10 49,873 4,792 +14,14 Be2xb5 Ne1xf3 Bb5xa6 Rd2-a2 Bf2-e3 Nf3-d4
Be3xd4 Ra2-a4 Ba6-d3  
7/14 00:11 55,507 4,825 +14,27 Be2xb5 Ne1xf3 Bb5xa6 Rd2-b2 Bf2-e3 Nf3-d2
Be3xd2 Rb2xd2 Ba6-c4  
7/15 00:16 80,453 4,912 +13,35 Be2xb5 a6xb5 Rf1xe1 Rd2-d3 Rf3xd3 Kd8-c8 a5-a6
Kc8-b8 a6-a7+ Kb8xa7  
7/16 00:17 87,629 4,972 +13,25 Be2xb5 a6xb5 Rf1xe1 Rd2-d3 Rf3xd3 Kd8-c8 a5-a6
Kc8-b8 a6-a7+ Kb8xa7  
8/16 00:32 179,923 5,544 +13,23 Be2xb5 a6xb5 Rf1xe1 Rd2-d3 Rf3xd3 Kd8-c8 a5-a6
Kc8-b8 a6-a7+  
9/17 00:42 239,377 5,571 +13,04 Be2xb5 a6xb5 Rf1xe1 Rd2-d3 Rf3xd3 Kd8-c8 a5-a6
Kc8-b8 a6-a7+  
9/18 00:52 298,068 5,699 +13,26 Be2xb5 a6xb5 Rf1xe1 Rd2-d3 Rf3xd3 Kd8-c8
Rd3-d5 Kc8-b7 a5-a6+  
9/18 00:55 318,816 5,757 +13,18 Be2xb5 a6xb5 Rf1xe1 Rd2xf2 Rf3xf2 Kd8-c8 a5-a6
Kc8-b8 a6-a7+  
  
  
Yet, in the most difficult types of positions for computers in Chess, the
fortress positions, Leela doesn't fare well at all generally despite the fact
that in the aforementioned 2 positions it did perfectly. But generally
especially in draw fortress situations she does not have too much success.
Which is strange for a MCTS type search since one would expect an engine with
random rollouts like Monte Carlo does, to be able to see through its
statistics that one move in a fortress position holds for example the draw.
But this does not occur here since Leela does not do random rollouts but uses
the neural net to guide the search.  
So in order to be able to solve fortress positions also, she just need more
training games.
