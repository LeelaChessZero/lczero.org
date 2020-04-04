+++
title = "CCCC starts."
slug = "cccc-starts"
published = 2018-08-31T17:59:00.003000+02:00
author = "Bob23"
tags = []
draft = true
+++

[Chess.com Computer Chess Championship](http://www.chess.com/computer-chess-championship) starts today.

24 engines will participate playing all against all twice, in a double Round
Robin tournament with 15 minutes for each player for the game plus 5 seconds
per move increment and pondering(thinking in opponent's time) on. There will
be no opening books usage for the 1st round. Every engine will calculate all
the moves by itself.  
Leela will play on four Tesla V100 GPUs while the other engines on 46 threads
of a 2 x Intel Xeon Platinum 8168, 2.70 GHz that has 48 logical cores and 96
threads.

The hardware is very fast, the engines belong to the top ones so the level of
play will be amazing.  
Every engine will play 46 games so there would be 46 rounds.  
After all games are completed, the first **8** of the 24 engines will advance
to round 2.

<!--more-->

![]({{< file "ffh67678845.png" >}})

Leela
will compete with Lc0 cuda version, with **11089** net and with no tablebases
usage.

The first game will start at 17:00 UTC and Leela's first game will be around
September 1st, 00:00 UTC.  
After that she should play around 08:00 UTC and around 16:00 UTC. This should
keep for most games but not all.

Leela follows Nirvana's schedule so with every opponent Nirvana is playing in
a round, in the next one Leela will play that opponent. Except when Leela and
Nirvana meet.

The schedule of the first 3 rounds is:

&emsp;&emsp;**ROUND 1**  
1 Andscacs vs Xiphos  
2 Wasp vs Arasan  
3 Booot vs Vajolet  
4 Texel vs Crafty  
5 Ethereal vs Stockfish  
6 Shredder vs Fire  
7 Fizbo vs Senpai  
8 Pedone vs Fritz  
9 Gull vs Nirvana  
10 Nemorino vs Houdini  
11 Ivanhoe vs **Lco**  
12 Laser vs Komodo

&emsp;&emsp;**ROUND 2**  
13 Wasp vs Andscacs  
14 Vajolet vs Xiphos  
15 Arasan vs Texel  
16 Stockfish vs Booot  
17 Crafty vs Shredder  
18 Senpai vs Ethereal  
19 Fire vs Pedone  
20 Nirvana vs Fizbo  
21 Fritz vs Nemorino  
22 **Lco** vs Gull  
23 Houdini vs Laser  
24 Komodo vs Ivanhoe

&emsp;&emsp;**ROUND 3**  
25 Andscacs vs Vajolet  
26 Texel vs Wasp  
27 Xiphos vs Stockfish  
28 Shredder vs Arasan  
29 Booot vs Senpai  
30 Pedone vs Crafty  
31 Ethereal vs Nirvana  
32 Nemorino vs Fire  
33 Fizbo vs **Lco**  
34 Laser vs Fritz  
35 Gull vs Komodo  
36 Ivanhoe vs Houdini

Yesterday there were some test games on CCCC and Leela had a rather good
performance without losing games against Xiphos, Texel, Wasp and Crafty. Here
is one of the games against Wasp which was impressive:

[Event "CCCC 1: Rapid Rumble (15|5) Testing"] [Site "Chess.com"] [Date
"2018.08.30"] [Round "?"] [White "Lc0 17.11089"] [Black "Wasp 3.25"] [Result
"1-0"] [ECO "D38"] [WhiteElo "3300"] [BlackElo "3041"] [Annotator "Ts,George"]
[PlyCount "135"] [EventDate "2018.??.??"] [EventType "rapid"] [TimeControl
"60+5"] 1. d4 Nf6 {Trying to play Nf6 against 1.d4 of Leela practice says it's
always not that good idea.} 2. c4 e6 3. Nf3 d5 4. Nc3 Bb4 5. Bg5 O-O 6. e3 h6
7. Bxf6 Bxc3+ 8. bxc3 Qxf6 9. g4 $1 {A classical Leela move! With black's
underdeveloped pieces she grabs the chance to attack.} Qe7 10. h4 Nc6 11. g5
h5 12. Bg2 Qa3 13. O-O Qxc3 14. Rc1 Qa5 {4 out of black's 6 moves was a Queen
move and now she is placed far away from her King's defence. You can't really
afford to play like this against Leela.} 15. g6 $1 {Does not give time to
black for g6 closing the position.} fxg6 16. Qc2 Rf5 17. Ng5 Bd7 18. cxd5 exd5
19. Qb3 b6 20. Be4 Nxd4 $5 {Interesting idea even though it can't hold.}
(20... Raf8 {Trying to give material for stopping the attack doesn't work.}
21. Bxf5 Rxf5 {And now for the cost of the exchange, the attack of white is
stalled. White still is much better though.} 22. Rc2 $1 {With multiple plans.
E.g Rfc1 with pressure on c-file.}) 21. exd4 Ba4 22. Bxf5 $1 {A Queen
sacrifice, even though it's actually an advantageous trade to much strengthen
the position. White gets a Rook and Bishop plus Knight for the lonely Queen of
black.} Bxb3 23. Be6+ Kh8 24. axb3 {[%csl Ra5,Gc1,Ge6,Gg5] A horde of pieces
against the Queen. Leela is a lot better here.} c5 25. dxc5 bxc5 26. Bxd5 Rf8
27. Rce1 Qd2 28. Bc4 Qd7 29. Re4 Rf5 30. Rfe1 Rxg5+ 31. hxg5 {It's just easy
technique from here.} Kh7 32. R1e3 Qd1+ 33. Kg2 Qd6 34. Re8 Qf4 35. Bg8+ Kh8
36. R3e5 Qg4+ 37. Kf1 Qd1+ 38. Re1 Qd7 39. R1e2 Qh3+ 40. Ke1 Qh1+ 41. Kd2 Qg1
42. Rf8 Qxg5+ 43. f4 Qf6 44. Ree8 Qb2+ 45. Kd3 Qd4+ 46. Ke2 Qb2+ 47. Kf3 Qc3+
48. Kg2 Qd2+ 49. Kh3 Qc3+ 50. Kh2 Qd2+ 51. Kg3 Qc3+ 52. Kh4 g5+ 53. Kxh5 Qh3+
54. Kg6 Qh6+ 55. Kf5 Qh3+ 56. Ke5 Qc3+ 57. Kd6 Qd4+ 58. Bd5+ Kh7 59. f5 Qf4+
60. Kd7 Qxf5+ 61. Rxf5 Kg6 62. Ke6 Kh5 63. Rf1 Kh4 64. Rg1 g4 65. Kf5 g6+ 66.
Kf4 g5+ 67. Kf5 a6 68. Rh8# 1-0
