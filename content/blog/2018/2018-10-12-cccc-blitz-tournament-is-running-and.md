+++
title = "CCCC Blitz is running.... Leela on top 3!"
slug = "cccc-blitz-tournament-is-running-and"
published = 2018-10-12T11:45:00.002000+02:00
author = "Bob23"
tags = []
draft = true
+++

[![](../../images/2018-10-12-cccc-blitz-tournament-is-running-and-
jhjhgj8798.png)

CCCC blitz tournament is running and till now Leela is having a good
performance being steadily on the top 3.

 _Conditions for the tournament are:_  
• **33 engines play a 4x Round Robin** tournament with each engine that will
play each other 4 times(2 with black and 2 with white) in a total of 128 games
per engine, with no opening books or predefined positions used.  
This implies a problem though as an engine will play each other twice with
white and twice with black so the question becomes: how variety of play will
be assured to not have duplicate games? Obviously they will rely on the non
determinism of multithreaded search(traditional engines that use more than 1
threads/cores are not deterministic, even Leela that uses more than 1 CPU
threads it's not(Leela mainly uses GPU for its search, but uses also CPUs)).
This is of course not that wise decision and they should use predefined
positions for the second part of the Round Robin.

•Time control of **5 minutes per game plus 2 seconds added time per move.**

• All engines except Leela use **46 physical cores** on a 2 x Intel Xeon
Platinum 8168, 2.70 GHz system with 8 GB hash, while Leela uses **2 Tesla V100
GPUs** on an Intel Xeon , 2.70 GHz.

•Full **3,4,5 and 6 syzygy** **endgame tablebases** are being used.

Till now **Leela** had 15 wins and 4 draws and no losses!  
Leela is playing with **0.18.1** version of **Lc0** with the **11248** net and
with 3,4,5,6 syzygy endgame tablebases(even though for the first 14 games she
was playing with about half the set of the tablebases).

Leela had some impressive wins so far, especially the games against Shredder
and Andscacs with Leela as black playing the Sicilian Najdorf and completely
outplaying its opponents were very impressive.  
Leela seems to have a much better performance till now against weaker engines
compared to the CCCC event. This must be a combination of the new stronger
11248(than 11089 that was used there) net, the use of tablebases and that the
5'+2" time controls used here is shorter from the 15'+5" that was used in main
CCCC as Leela seems to be better at shorter time controls.

Standings so far:  
| Player | Score  | (SB)  | H | S | L | F | E | L | A | S | K | B | X | C | T
| F | K | V | G | P | A | W | C | N | H | E | I | F | N | P | B | S | B | C |
A | +/-/=  
---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---  
1: | Houdini 6.03 | 18.0 / 20 | 150.75  | X | = | = | . | . | . | . | 1 | . |
. | . | 1 | . | 1 | 1 | 1 | 1 | 1 | 1 | . | 1 | 1 | . | 1 | 1 | = | 1 | = | .
| 1 | 1 | . | 1| (+16 -0 =4)  
2: | Stockfish 18092721 | 17.0 / 19 | 165.75  | = | X | . | = | = | 1 | 1 | .
| 1 | 1 | 1 | . | = | 1 | . | 1 | . | 1 | . | 1 | . | 1 | 1 | 1 | . | . | . |
. | 1 | 1 | . | 1 | .| (+15 -0 =4)  
3: | **Lc0 0.18.1**|  17.0 / 19 | 149.50  | = | . | X | = | . | . | 1 | 1 | .
| . | = | 1 | 1 | . | 1 | . | 1 | . | 1 | 1 | 1 | . | . | . | 1 | 1 | 1 | 1 |
1 | . | = | . | 1| (+15 -0 =4)  
4: | Fire 7.1 | 15.0 / 20 | 122.00  | . | = | = | X | . | . | . | 0 | . | . |
. | 1 | 1 | = | = | = | 1 | 1 | 1 | . | 1 | . | . | = | = | 1 | = | 1 | . | 1
| 1 | . | 1| (+11 -1 =8)  
5: | Ethereal 11.00 | 14.0 / 19 | 109.00  | . | = | . | . | X | 0 | . | . | =
| = | . | = | . | 1 | . | 1 | = | 1 | = | . | 1 | 1 | 1 | = | . | = | . | . |
. | 1 | 1 | 1 | 1| (+10 -1 =8)  
6: | Laser 250918 | 13.5 / 19 | 112.50  | . | 0 | . | . | 1 | X | = | . | 1 |
1 | . | . | . | = | . | = | . | 1 | 1 | = | . | 1 | 1 | 0 | . | 1 | . | . | =
| = | = | 1 | 1| (+10 -2 =7)  
7: | Andscacs 0.9403 | 13.0 / 20 | 102.50  | . | 0 | 0 | . | . | = | X | . | 1
| . | . | = | . | = | = | = | = | = | = | . | 1 | 1 | . | = | 1 | 1 | 1 | . |
. | 1 | 1 | . | =| (+8 -2 =10)  
8: | Shredder 13 | 12.5 / 19 | 102.50  | 0 | . | 0 | 1 | . | . | . | X | . | .
| 1 | 0 | = | 1 | = | = | = | . | 1 | . | 1 | . | . | = | = | 1 | = | 1 | . |
. | 1 | . | 1| (+9 -3 =7)  
9: | Komodo 2142 | 12.5 / 19 | 90.50  | . | 0 | . | . | = | 0 | 0 | . | X | 1
| . | = | . | = | . | 1 | . | 0 | 1 | . | . | = | 1 | 1 | . | = | . | . | 1 |
1 | 1 | 1 | 1| (+10 -4 =5)  
10: | Booot 6.3.1 | 12.5 / 20 | 95.75  | . | 0 | . | . | = | 0 | . | . | 0 | X
| . | = | . | = | = | 1 | = | 1 | = | . | 1 | = | 1 | = | 1 | 1 | . | . | . |
1 | = | . | 1| (+8 -3 =9)  
11: | Xiphos 0.4.3 | 12.0 / 19 | 89.75  | . | 0 | = | . | . | . | . | 0 | . |
. | X | = | 1 | = | = | = | = | . | = | . | = | . | . | 1 | 1 | = | 1 | = | .
| 1 | 1 | . | 1| (+7 -2 =10)  
12: | Chiron 20180913 | 11.5 / 20 | 103.00  | 0 | . | 0 | 0 | = | . | = | 1 |
= | = | = | X | = | . | 1 | . | = | . | . | 1 | 1 | . | = | . | = | . | 1 | 1
| 0 | . | . | 1 | .| (+7 -4 =9)  
13: | Texel 1.08 | 10.5 / 19 | 83.25  | . | = | 0 | 0 | . | . | . | = | . | .
| 0 | = | X | = | 1 | = | = | . | = | . | = | . | . | 1 | = | = | 1 | 1 | . |
. | = | . | 1| (+5 -3 =11)  
14: | Fritz 16.10 | 10.5 / 20 | 92.75  | 0 | 0 | . | = | 0 | = | = | 0 | = | =
| = | . | = | X | . | . | . | 1 | . | 1 | . | 1 | 1 | . | . | . | = | = | 1 |
= | . | = | .| (+5 -4 =11)  
15: | Komodo MC | 10.0 / 19 | 77.00  | 0 | . | 0 | = | . | . | = | = | . | = |
= | 0 | 0 | . | X | . | = | . | 0 | 1 | 1 | . | . | . | = | . | = | 1 | 1 | .
| 1 | . | 1| (+6 -5 =8)  
16: | Vajolet 2.6.1 | 9.0 / 19 | 76.25  | 0 | 0 | . | = | 0 | = | = | = | 0 |
0 | = | . | = | . | . | X | . | = | . | 1 | . | = | = | = | . | . | . | . | 1
| 1 | . | 1 | .| (+4 -5 =10)  
17: | Gull 3.syz | 9.0 / 19 | 76.25  | 0 | . | 0 | 0 | = | . | = | = | . | = |
= | = | = | . | = | . | X | . | . | = | 0 | . | . | . | 1 | . | 1 | = | = | .
| = | 1 | .| (+3 -4 =12)  
18: | Pedone 1.8 | 9.0 / 19 | 63.50  | 0 | 0 | . | 0 | 0 | 0 | = | . | 1 | 0 |
. | . | . | 0 | . | = | . | X | . | = | . | 1 | 0 | 1 | . | 1 | . | . | 1 | =
| . | 1 | 1| (+7 -8 =4)  
19: | Arasan 21.1 | 9.0 / 20 | 73.50  | 0 | . | 0 | 0 | = | 0 | = | 0 | 0 | =
| = | . | = | . | 1 | . | . | . | X | 0 | . | = | = | . | 1 | . | 1 | 1 | = |
. | . | 1 | .| (+5 -7 =8)  
20: | Wasp 3.30 | 8.5 / 20 | 56.00  | . | 0 | 0 | . | . | = | . | . | . | . |
. | 0 | . | 0 | 0 | 0 | = | = | 1 | X | 0 | 0 | . | = | = | 1 | 1 | = | . | =
| 1 | . | 1| (+5 -8 =7)  
21: | Critter 1.6 | 8.0 / 19 | 57.25  | 0 | . | 0 | 0 | 0 | . | 0 | 0 | . | 0
| = | 0 | = | . | 0 | . | 1 | . | . | 1 | X | . | 1 | . | = | . | = | 1 | 1 |
. | . | 1 | .| (+6 -9 =4)  
22: | Nemorino 5.05 | 8.0 / 19 | 53.00  | 0 | 0 | . | . | 0 | 0 | 0 | . | = |
= | . | . | . | 0 | . | = | . | 0 | = | 1 | . | X | = | = | . | 0 | . | . | 1
| 1 | . | 1 | 1| (+5 -8 =6)  
23: | Hannibal 1.7 | 7.5 / 19 | 47.50  | . | 0 | . | . | 0 | 0 | . | . | 0 | 0
| . | = | . | 0 | . | = | . | 1 | = | . | 0 | = | X | = | . | = | . | . | = |
= | = | 1 | 1| (+3 -7 =9)  
24: | Equinox 3.30 | 7.5 / 20 | 74.00  | 0 | 0 | . | = | = | 1 | = | = | 0 | =
| 0 | . | 0 | . | . | = | . | 0 | . | = | . | = | = | X | . | . | . | = | 1 |
= | . | 0 | .| (+2 -7 =11)  
25: | Ivanhoe 999946h | 7.0 / 19 | 55.00  | 0 | . | 0 | = | . | . | 0 | = | .
| 0 | 0 | = | = | . | = | . | 0 | . | 0 | = | = | . | . | . | X | . | = | = |
1 | . | 1 | = | .| (+2 -7 =10)  
26: | Fizbo 1.9 | 7.0 / 20 | 59.50  | = | . | 0 | 0 | = | 0 | 0 | 0 | = | 0 |
= | . | = | . | . | . | . | 0 | . | 0 | . | 1 | = | . | . | X | = | = | = | =
| . | 1 | .| (+2 -8 =10)  
27: | Nirvana 2.4 | 6.0 / 19 | 43.75  | 0 | . | 0 | = | . | . | 0 | = | . | .
| 0 | 0 | 0 | = | = | . | 0 | . | 0 | 0 | = | . | . | . | = | = | X | = | . |
. | 1 | . | 1| (+2 -9 =8)  
28: | Protector | 5.5 / 19 | 45.75  | = | . | 0 | 0 | . | . | . | 0 | . | . |
= | 0 | 0 | = | 0 | . | = | . | 0 | = | 0 | . | . | = | = | = | = | X | . | .
| = | . | =| (+0 -8 =11)  
29: | Black Mamba | 5.5 / 20 | 41.75  | . | 0 | 0 | . | . | = | . | . | 0 | .
| . | 1 | . | 0 | 0 | 0 | = | 0 | = | . | 0 | 0 | = | 0 | 0 | = | . | . | X |
= | 1 | . | =| (+2 -11 =7)  
30: | Senpai 2.0 | 4.5 / 19 | 36.25  | 0 | 0 | . | 0 | 0 | = | 0 | . | 0 | 0 |
0 | . | . | = | . | 0 | . | = | . | = | . | 0 | = | = | . | = | . | . | = | X
| . | = | .| (+0 -10 =9)  
31: | Bobcat 8.0 | 4.0 / 20 | 39.50  | 0 | . | = | 0 | 0 | = | 0 | 0 | 0 | = |
0 | . | = | . | 0 | . | = | . | . | 0 | . | . | = | . | 0 | . | 0 | = | 0 | .
| X | = | .| (+0 -12 =8)  
32: | Crafty 25.2 | 3.5 / 19 | 21.50  | . | 0 | . | . | 0 | 0 | . | . | 0 | .
| . | 0 | . | = | . | 0 | 0 | 0 | 0 | . | 0 | 0 | 0 | 1 | = | 0 | . | . | . |
= | = | X | =| (+1 -13 =5)  
33: | Alfilx64 | 2.0 / 20 | 13.75  | 0 | . | 0 | 0 | 0 | 0 | = | 0 | 0 | 0 | 0
| . | 0 | . | 0 | . | . | 0 | . | 0 | . | 0 | 0 | . | . | . | 0 | = | = | . |
. | = | X| (+0 -16 =4)

Some statistics:

                       Games     1-0     =-=     0-1       
    ------------------------------------------------------  
     All report games    316     114     126      76       
                                36.0%   39.8%     24.0%  
    ------------------------------------------------------

Till now draws are not that frequent, only **39.8% of games are drawn,** and
this can be explained because the difference in strength between top and lower
end engines is very big.

 **Shortest wins (White)**  
1: 1-0(38) Booot 6.3.1 - Ivanhoe 999946h  
2: 1-0(40) Houdini 6.03 - Senpai 2.0  
3: 1-0(42) Houdini 6.03 - Alfilx64  
4: 1-0(42) Xiphos 0.4.3 - Alfilx64  
5: 1-0(43) Houdini 6.03 - Bobcat 8.0

**Shortest wins (Black)**  
1: 0-1(51) Andscacs 0.9403 - Lc0 0.18.1  
2: 0-1(59) Alfilx64 - Fire 7.1  
3: 0-1(59) Pedone 1.8 - Houdini 6.03  
4: 0-1(62) Crafty 25.2 - Stockfish 18092721  
5: 0-1(63) Arasan 21.1 - Shredder 13

The percentage of opening selection of engines. We remind that engines choose
all the moves by themselves.

        Move      Frequency    Score  Draw AvElo Perf AvYear ECO  
     1: e4        210: 66.4%   53.0%  42%  2990  2973  2018 B00a   
     2: d4         89: 28.1%   62.3%  37%  2821  2999  2018 A40a   
     3: Nf3        15:  4.7%   63.3%  20%  3146  3216  2018 A04    
     4: Nc3         1:  0.3%    0.0%   0%              2018 A00l   
     5: e3          1:  0.3%   50.0% 100%              2018 A00k 

Again the French Defense is dominating engines' preference.  
 _(click to zoom)_

[![](../../images/2018-10-12-cccc-blitz-tournament-is-running-and-
hjkhkh789798.png)

Ratings so far:

    Rank Name                 Elo    +    - games score oppo. draws   
       1 Stockfish 18092721   600  171  135    19   89%   302   21%   
       2 Houdini 6.03         591  174  139    20   90%   274   20%   
       3 Lc0 0.18.1           575  174  139    19   89%   274   21%   
       4 Fire 7.1             442  132  119    20   75%   278   40%   
       5 Ethereal 11.00       425  132  120    19   74%   263   42%   
       6 Laser 250918         383  131  121    19   71%   256   37%   
       7 Shredder 13          382  128  120    19   66%   292   37%   
       8 Komodo 2142          375  134  125    19   66%   264   26%   
       9 Andscacs 0.9403      371  118  113    20   65%   285   50%   
      10 Xiphos 0.4.3         356  121  115    19   63%   278   53%   
      11 Chiron 20180913      354  116  114    20   58%   311   45%   
      12 Booot 6.3.1          351  119  114    20   63%   278   45%   
      13 Texel 1.08           322  116  113    19   55%   296   58%   
      14 Fritz 16.10          320  114  113    20   53%   311   55%   
      15 Komodo MC            313  120  119    19   53%   295   42%   
      16 Vajolet 2.6.1        308  115  116    19   47%   321   53%   
      17 Gull 3.syz           287  112  113    19   47%   307   63%   
      18 Arasan 21.1          281  115  118    20   45%   315   40%   
      19 Pedone 1.8           276  127  128    19   47%   295   21%   
      20 Critter 1.6          254  125  130    19   42%   313   21%   
      21 Nemorino 5.05        242  123  127    19   42%   288   32%   
      22 Equinox 3.30         239  112  117    20   38%   317   55%   
      23 Wasp 3.30            221  117  120    20   43%   274   35%   
      24 Ivanhoe 999946h      219  116  121    19   37%   303   53%   
      25 Fizbo 1.9            216  114  119    20   35%   310   50%   
      26 Hannibal 1.7         200  115  119    19   39%   267   47%   
      27 Nirvana 2.4          193  118  126    19   32%   305   42%   
      28 Protector            165  115  122    19   29%   299   58%   
      29 Senpai 2.0           141  119  131    19   24%   321   47%   
      30 Black Mamba          128  119  130    20   28%   285   35%   
      31 Bobcat 8.0           120  122  137    20   20%   318   40%   
      32 Crafty 25.2           55  128  149    19   18%   276   26%   
      33 Alfilx64               0  137  172    20   10%   318   20% 

Leela's games:

[Event "CCC 2: Blitz Battle (5|2)"] [Site "Chess.com"] [Date "2018.10.08"]
[Round "?"] [White "Lc0 0.18.1"] [Black "Black Mamba"] [Result "1-0"] [ECO
"D06"] [WhiteElo "2000"] [BlackElo "2200"] [PlyCount "167"] [EventDate
"2018.??.??"] [EventType "blitz"] 1. d4 d5 2. c4 Nf6 3. cxd5 c6 4. dxc6 Nxc6
5. Nf3 e5 6. Nxe5 Nxe5 7. dxe5 Qxd1+ 8. Kxd1 Ng4 9. Ke1 Bc5 10. e3 Nxe5 11.
Bd2 O-O 12. Bc3 Re8 13. Nd2 Bf5 14. Nb3 Bb6 15. Rd1 Be4 16. Bb5 Re6 17. Rg1
Rc8 18. Ke2 Re7 19. Nd4 a6 20. Ba4 Bc5 21. Bb3 Ba7 22. f3 Bg6 23. g4 Nd7 24.
e4 Nc5 25. Nf5 Rec7 26. Bd4 Bxf5 27. gxf5 Nxb3 28. Bxa7 Nc1+ 29. Ke3 Nxa2 30.
Bd4 g6 31. h4 Rc1 32. Bf6 Kf8 33. Kf4 Nb4 34. Kg5 R1c6 35. e5 Rc5 36. Rd7 Nd5
37. Rd1 Nxf6 38. Kxf6 R8c6+ 39. R1d6 Rxd6+ 40. Rxd6 Ke8 41. Rb6 Rc7 42. Kg5
Kf8 43. f6 Rc4 44. Rxb7 h6+ 45. Kxh6 Rxh4+ 46. Kg5 Rh5+ 47. Kf4 Ke8 48. Ke4 a5
49. Re7+ Kf8 50. Ra7 Ke8 51. Rxa5 Rh2 52. Rb5 Rh4+ 53. Kd5 Rh1 54. b4 Kd7 55.
Rb7+ Ke8 56. b5 Rd1+ 57. Kc6 Rc1+ 58. Kd6 Rd1+ 59. Kc5 Rc1+ 60. Kd6 Rd1+ 61.
Kc5 Rc1+ 62. Kd4 Rd1+ 63. Ke4 Re1+ 64. Kf4 g5+ 65. Kf5 Re3 66. Re7+ Kd8 67.
Rxf7 Rxf3+ 68. Kxg5 Re3 69. b6 Kc8 70. b7+ Kb8 71. Rf8+ Kxb7 72. f7 Rxe5+ 73.
Kf6 Re1 74. Rb8+ Kc6 75. f8=Q Rf1+ 76. Ke5 Rxf8 77. Rxf8 Kc5 78. Rf4 Kc6 79.
Rf1 Kd7 80. Kd5 Ke7 81. Rf5 Kd8 82. Kd6 Kc8 83. Rb5 Kd8 84. Rb8# 1-0 [Event
"CCC 2: Blitz Battle (5|2)"] [Site "Chess.com"] [Date "2018.10.09"] [Round
"?"] [White "Andscacs 0.9403"] [Black "Lc0 0.18.1"] [Result "0-1"] [ECO "B97"]
[WhiteElo "3244"] [BlackElo "3259"] [PlyCount "102"] [EventDate "2018.??.??"]
[EventType "blitz"] 1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5
e6 7. f4 Qb6 8. Nb3 Nbd7 9. Qe2 Qc7 10. a4 Be7 11. g3 O-O 12. Bg2 h6 13. Bh4
Re8 14. O-O-O e5 15. Qd3 b5 16. Kb1 bxa4 17. Nxa4 a5 18. Qc3 Qb8 19. Nc1 Nb6
20. Qc6 Nxa4 21. Qxa4 Bd7 22. Qa3 a4 23. Bxf6 gxf6 24. Qd3 Rc8 25. c3 Be6 26.
Qd2 Qc7 27. Rhe1 a3 28. b3 Rab8 29. Ka2 Qxc3 30. Qxc3 Rxc3 31. Rd2 Bd8 32. f5
Bxb3+ 33. Nxb3 Rcxb3 34. Ree2 Ba5 35. Rd5 Bc3 36. Rd3 Rb2+ 37. Rxb2 axb2 38.
Kb1 Bd4 39. Rd1 Ra8 40. Bf3 Kf8 41. Be2 Ke7 42. Kc2 d5 43. Bd3 Kd6 44. exd5
Kxd5 45. Re1 Ra3 46. g4 Rc3+ 47. Kd2 Ra3 48. Kc2 Ra1 49. Be4+ Kc4 50. Rd1 Be3
51. Rb1 Bc1 0-1 [Event "CCC 2: Blitz Battle (5|2)"] [Site "Chess.com"] [Date
"2018.10.09"] [Round "?"] [White "Lc0 0.18.1"] [Black "Wasp 3.30"] [Result
"1-0"] [ECO "D38"] [WhiteElo "2000"] [BlackElo "3139"] [PlyCount "167"]
[EventDate "2018.??.??"] [EventType "blitz"] 1. d4 Nf6 2. c4 e6 3. Nf3 d5 4.
Nc3 Bb4 5. Bg5 O-O 6. e3 Nbd7 7. cxd5 exd5 8. Bd3 c5 9. O-O Bxc3 10. bxc3 c4
11. Bf5 Qa5 12. Qc2 Re8 13. Nd2 g6 14. Bxd7 Nxd7 15. f3 Nb6 16. Rae1 Bd7 17.
h4 Ba4 18. Qc1 Bb5 19. e4 Qxa2 20. e5 Ba4 21. Rf2 Qc2 22. Qa1 Qf5 23. Nf1 Qc8
24. Ne3 Bd7 25. g4 a5 26. Qc1 Re6 27. f4 Rc6 28. f5 a4 29. h5 a3 30. Ree2 Qe8
31. Ra2 Ra6 32. hxg6 fxg6 33. Rxa3 Rxa3 34. Qxa3 h6 35. f6 hxg5 36. f7+ Qxf7
37. Rxf7 Kxf7 38. Qa7 Bc8 39. Nc2 Re6 40. Nb4 Ke8 41. Qa5 Kf7 42. Nxd5 Nxd5
43. Qxd5 Ke7 44. Qxc4 Kd8 45. Qd3 Bd7 46. Qe3 Ra6 47. d5 Kc7 48. Qxg5 Ra1+ 49.
Kf2 Ra2+ 50. Ke3 Bb5 51. Qxg6 Kb8 52. Qg7 Ka7 53. d6 Re2+ 54. Kf4 Rf2+ 55. Kg5
Re2 56. Qe7 Re3 57. c4 Bc6 58. c5 Ka6 59. Kf4 Rf3+ 60. Kg5 Rc3 61. e6 Rxc5+
62. Kf6 Kb5 63. d7 Rd5 64. d8=R Rc5 65. Qxc5+ Kxc5 66. Rc8 Kd6 67. Rxc6+ Kxc6
68. e7 Kc5 69. e8=Q b5 70. Qxb5+ Kxb5 71. g5 Kc4 72. g6 Kb3 73. g7 Kb2 74.
g8=Q Kc2 75. Ke5 Kd3 76. Qa2 Kc3 77. Qe2 Kb4 78. Kd4 Kb3 79. Kc5 Kc3 80. Kd5
Kb3 81. Kd4 Kb4 82. Qb2+ Ka4 83. Kc5 Ka5 84. Qa2# 1-0 [Event "CCC 2: Blitz
Battle (5|2)"] [Site "Chess.com"] [Date "2018.10.09"] [Round "?"] [White
"Houdini 6.03"] [Black "Lc0 0.18.1"] [Result "1/2-1/2"] [ECO "B51"] [WhiteElo
"3400"] [BlackElo "3226"] [PlyCount "346"] [EventDate "2018.??.??"] [EventType
"blitz"] 1. e4 c5 2. Nf3 d6 3. Bb5+ Nd7 4. c4 Ngf6 5. Nc3 g6 6. O-O Bg7 7. d3
O-O 8. Ba4 b6 9. h3 Bb7 10. Be3 Nh5 11. Qe2 Ne5 12. g4 Nxf3+ 13. Qxf3 Nf6 14.
Qg3 a6 15. Rad1 Rb8 16. Qh4 Ba8 17. Bh6 b5 18. cxb5 Qa5 19. b6 Qxb6 20. b3 Qb4
21. Rc1 Rfd8 22. Rfd1 Rbc8 23. Bxg7 Kxg7 24. Rc2 h5 25. g5 Nh7 26. Qg3 Kg8 27.
h4 e6 28. Kh2 Nf8 29. f3 Rc7 30. Qe1 Qb8 31. Rb1 Rb7 32. Bc6 Rb4 33. Bxa8 Qxa8
34. Qe3 Nd7 35. Rd1 a5 36. Kg2 Nb6 37. d4 c4 38. d5 e5 39. Nb1 cxb3 40. axb3
a4 41. bxa4 Qxa4 42. Qe2 Nxd5 43. exd5 Rxh4 44. Qf2 e4 45. Rcd2 exf3+ 46. Qxf3
Rg4+ 47. Kh1 Rf4 48. Nc3 Qb4 49. Qe3 Rc8 50. Rc1 Rcc4 51. Ra2 Qb3 52. Rh2 Rfe4
53. Qd2 Red4 54. Qe3 Re4 55. Qd2 Re5 56. Rh3 Rg4 57. Rg1 Qc4 58. Kh2 Rd4 59.
Qf2 Rf4 60. Qd2 Kf8 61. Rg2 Kg8 62. Rf2 Rg4 63. Rg2 Qf1 64. Qf2 Qc1 65. Qd2
Rxg2+ 66. Qxg2 Rxg5 67. Rg3 Rxg3 68. Qxg3 Qd2+ 69. Kh3 Qd4 70. Nb5 Qxd5 71.
Nxd6 g5 72. Qa3 Qh1+ 73. Kg3 Qe1+ 74. Kg2 Qe2+ 75. Kg3 Qe1+ 76. Kg2 Qe2+ 77.
Kg3 h4+ 78. Kh3 Qe6+ 79. Kh2 Qe2+ 80. Kh3 Qe6+ 81. Kh2 g4 82. Qc5 Qe2+ 83. Kg1
Qe1+ 84. Kh2 Qg3+ 85. Kh1 Qf3+ 86. Kg1 Qd1+ 87. Kh2 Qd2+ 88. Kg1 Qe1+ 89. Kh2
Qg3+ 90. Kh1 Qf4 91. Qc8+ Kg7 92. Qc3+ Kg8 93. Qc8+ Kg7 94. Qc3+ Kg6 95. Qc2+
Kf6 96. Qb2+ Kg6 97. Qb1+ Kf6 98. Qd3 Qc1+ 99. Kg2 Qb2+ 100. Kf1 Qa1+ 101. Kg2
Qa8+ 102. Kf2 Qa7+ 103. Ke1 Qg1+ 104. Ke2 Qg2+ 105. Ke1 Qg1+ 106. Ke2 Qg2+
107. Ke1 Qh1+ 108. Kd2 Qh2+ 109. Kd1 Qh1+ 110. Kc2 Qg2+ 111. Kc3 Qc6+ 112. Kd2
g3 113. Ke3 Qc5+ 114. Kf3 Qh5+ 115. Kg2 h3+ 116. Kxg3 h2 117. Ne4+ Kg7 118.
Qd4+ Kf8 119. Qb4+ Kg7 120. Qb2+ Kf8 121. Qxh2 Qe5+ 122. Kh3 Qe6+ 123. Kg3
Qxe4 124. Qh8+ Ke7 125. Qc3 Qg6+ 126. Kh3 Qf6 127. Qc5+ Qd6 128. Qc3 Ke6 129.
Qb3+ Qd5 130. Qb6+ Kf5 131. Qf2+ Ke5 132. Qe1+ Kf6 133. Qh4+ Ke5 134. Qe1+ Kf4
135. Qc1+ Kf5 136. Qb1+ Kg5 137. Qg1+ Kf5 138. Qb1+ Qe4 139. Qf1+ Qf4 140.
Qb5+ Qe5 141. Qf1+ Qf4 142. Qb5+ Kf6 143. Qb2+ Kg6 144. Qg2+ Kf5 145. Qc2+ Qe4
146. Qf2+ Qf4 147. Qc5+ Qe5 148. Qf2+ Kg6 149. Qg2+ Kf6 150. Qf3+ Ke6 151.
Qc6+ Kf5 152. Qf3+ Kg6 153. Qg2+ Kf6 154. Qf3+ Qf5+ 155. Kh4 Ke6 156. Qe3+ Qe5
157. Qh3+ Kf6 158. Qf3+ Ke6 159. Qh3+ Kf6 160. Qf3+ Qf5 161. Qc3+ Ke6 162.
Qc8+ Ke5 163. Qc3+ Ke6 164. Qb3+ Qd5 165. Qe3+ Kf6 166. Qf3+ Ke5 167. Qg3+ Kf6
168. Qf3+ Ke5 169. Qg3+ Ke6 170. Qe3+ Kd6 171. Qa3+ Ke5 172. Qc1 Qe4+ 173. Kg3
Qd3+ 1/2-1/2 [Event "CCC 2: Blitz Battle (5|2)"] [Site "Chess.com"] [Date
"2018.10.09"] [Round "?"] [White "Lc0 0.18.1"] [Black "Fire 7.1"] [Result
"1/2-1/2"] [ECO "E19"] [WhiteElo "2000"] [BlackElo "3200"] [PlyCount "382"]
[EventDate "2018.??.??"] [EventType "blitz"] 1. d4 Nf6 2. c4 e6 3. Nf3 b6 4.
g3 Bb7 5. Bg2 Be7 6. O-O O-O 7. Nc3 Ne4 8. Qd3 Nxc3 9. Qxc3 c5 10. Rd1 d6 11.
Qd3 Nc6 12. d5 Nb4 13. Qb1 exd5 14. cxd5 Re8 15. e4 c4 16. Nd4 Bf6 17. Bf4 Qd7
18. Nf5 Nd3 19. Nxd6 Bxb2 20. Rxd3 Bxa1 21. Rd1 Be5 22. Nxe8 Qxe8 23. Bxe5
Qxe5 24. Rc1 Ba6 25. Qa1 Qxa1 26. Rxa1 Kf8 27. f4 Rc8 28. Kf2 c3 29. Rc1 Bb5
30. Ke3 Ke7 31. e5 Rc5 32. Kd4 Rc4+ 33. Ke3 Rc5 34. Be4 f6 35. Kd4 Rc4+ 36.
Ke3 Rc5 37. g4 fxe5 38. fxe5 g5 39. Kd4 Rc4+ 40. Kd3 Rc5+ 41. Ke3 h6 42. Kd4
Rc4+ 43. Kd3 Rc5+ 44. Ke3 Kf7 45. Kd4 Rc4+ 46. Kd3 Rc5+ 47. Kd4 Rc4+ 48. Kd3
Rc5+ 49. Ke3 Ke7 50. h3 Kf7 51. Kd4 Rc4+ 52. Kd3 Rc5+ 53. Ke3 Ke7 54. Kd4 Rc4+
55. Kd3 Rc8+ 56. Kd4 Rc4+ 57. Kd3 Rc8+ 58. Ke3 Rc5 59. Bh1 Rc4 60. Rc2 Rc8 61.
Be4 Rc5 62. Rc1 Kf7 63. Rd1 Ke8 64. Kd4 Rc4+ 65. Kd3 Rc8+ 66. Ke3 Rc5 67. Ra1
Kd7 68. Kd4 Rc4+ 69. Kd3 Rc5+ 70. Ke3 Kd8 71. Kd4 Rc4+ 72. Kd3 Rc5+ 73. Kc2
Ba4+ 74. Kd3 Bb5+ 75. Ke3 Kd7 76. a3 Kd8 77. Rc1 Ke7 78. Kd4 Rc4+ 79. Kd3 Rc8+
80. Kd4 Rc4+ 81. Kd3 Rc5+ 82. Ke3 Kf7 83. Kd4 Rc4+ 84. Kd3 Rc5+ 85. Kd4 Rc4+
86. Ke3 Rc5 87. Rb1 Ba4 88. Rf1+ Ke7 89. Kd4 c2 90. d6+ Kd7 91. Bf5+ Kc6 92.
Be4+ Kd7 93. Rc1 Bb3 94. Bf5+ Be6 95. Bd3 Bb3 96. Bf5+ Be6 97. Bxc2 Kc8 98.
Ke4 Kd8 99. Kd4 Kc8 100. Ke4 Bd7 101. Kd3 Rd5+ 102. Ke4 Rc5 103. a4 Kd8 104.
a5 Be6 105. Kd4 Rd5+ 106. Ke4 Rc5 107. axb6 axb6 108. Kd4 Kc8 109. Ke4 Kd8
110. Ke3 Rxe5+ 111. Be4 Kd7 112. Kd4 Ra5 113. Rb1 Kxd6 114. Rxb6+ Ke7 115. Bd3
Ra3 116. Rb7+ Kd6 117. Rb6+ Ke7 118. Rb7+ Kd6 119. Rb4 Kc7 120. Bf5 Bxf5 121.
gxf5 Rxh3 122. Kd5 Rf3 123. Ke6 h5 124. Rc4+ Kd8 125. f6 g4 126. f7 g3 127.
Rd4+ Kc7 128. Rd7+ Kb6 129. Rd6+ Kc7 130. Rd7+ Kb6 131. Rd6+ Kc7 132. Rd5 h4
133. Rc5+ Kb6 134. Rg5 Kc7 135. Rc5+ Kb6 136. Rg5 Kc7 137. Rg4 Re3+ 138. Kd5
Rf3 139. Ke6 Rf1 140. Ke7 h3 141. f8=Q Rxf8 142. Rxg3 Rh8 143. Rg1 h2 144. Rh1
Rh3 145. Kf6 Ra3 146. Rxh2 Kc6 147. Ke5 Ra1 148. Rc2+ Kb5 149. Kd5 Kb6 150.
Rb2+ Kc7 151. Rf2 Rb1 152. Kc5 Ra1 153. Rf7+ Kd8 154. Kd6 Rd1+ 155. Kc6 Ra1
156. Kd6 Rd1+ 157. Kc6 Ra1 158. Rf2 Rb1 159. Kd6 Rd1+ 160. Kc6 Ra1 161. Kd6
Rd1+ 162. Kc6 Ra1 163. Kd5 Rb1 164. Rd2 Ra1 165. Kd6 Rb1 166. Rh2 Rd1+ 167.
Kc6 Ra1 168. Kd6 Rd1+ 169. Kc6 Ra1 170. Kd5 Rb1 171. Rd2 Ra1 172. Kd6 Rb1 173.
Ra2 Rd1+ 174. Kc6 Rb1 175. Kd6 Kc8 176. Kc6 Rc1+ 177. Kd6 Rb1 178. Kc6 Rc1+
179. Kd5 Rb1 180. Rf2 Ra1 181. Kc6 Rc1+ 182. Kd6 Ra1 183. Kc6 Rc1+ 184. Kd6
Ra1 185. Rf7 Rb1 186. Kc6 Rc1+ 187. Kd6 Ra1 188. Kc6 Rc1+ 189. Kd6 Ra1 190.
Rf2 Rb1 191. Kc6 Rc1+ 1/2-1/2 [Event "CCC 2: Blitz Battle (5|2)"] [Site
"Chess.com"] [Date "2018.10.09"] [Round "?"] [White "Xiphos 0.4.3"] [Black
"Lc0 0.18.1"] [Result "1/2-1/2"] [ECO "B22"] [WhiteElo "3179"] [BlackElo
"3226"] [PlyCount "137"] [EventDate "2018.??.??"] [EventType "blitz"] 1. e4 c5
2. c3 Nf6 3. e5 Nd5 4. Nf3 Nc6 5. d4 cxd4 6. Bc4 Nb6 7. Bb3 d6 8. exd6 Qxd6 9.
O-O Be6 10. Nxd4 Bxb3 11. axb3 Nxd4 12. Be3 Nxb3 13. Qxb3 Qd5 14. Qc2 Nc4 15.
Rxa7 Rxa7 16. Bxa7 e6 17. Rd1 Qc6 18. Nd2 Nxd2 19. Qxd2 Be7 20. b4 O-O 21. Qd7
Qxd7 22. Rxd7 Rd8 23. Rxd8+ Bxd8 24. c4 Kf8 25. Kf1 e5 26. c5 Ke7 27. b5 Kd7
28. Ke2 e4 29. Ke3 f5 30. Kd4 Ba5 31. Kd5 Kc8 32. c6 b6 33. g3 g6 34. Ke6 Kd8
35. h4 h5 36. Bb8 Be1 37. Be5 Bxf2 38. Kf7 Be1 39. Bd4 Bxg3 40. Bxb6+ Kc8 41.
Kxg6 f4 42. Kxh5 f3 43. Kg4 f2 44. Bxf2 Bxf2 45. h5 Bd4 46. h6 Kb8 47. Kf4 e3
48. Kf3 Kc7 49. h7 Kd6 50. Ke2 Kc7 51. Kd3 Kb6 52. Kxd4 e2 53. h8=Q e1=Q 54.
Qb8+ Ka5 55. Qd6 Qg1+ 56. Ke5 Qg5+ 57. Ke6 Qg4+ 58. Ke7 Kb6 59. c7+ Kb7 60.
c8=Q+ Qxc8 61. Qa6+ Kb8 62. Qxc8+ Kxc8 63. Kd6 Kb7 64. Kc5 Kc7 65. b6+ Kb7 66.
Kb5 Kb8 67. Ka6 Ka8 68. b7+ Kb8 69. Kb6 1/2-1/2 [Event "CCC 2: Blitz Battle
(5|2)"] [Site "Chess.com"] [Date "2018.10.09"] [Round "?"] [White "Lc0
0.18.1"] [Black "Texel 1.08"] [Result "1-0"] [ECO "E11"] [WhiteElo "2000"]
[BlackElo "3101"] [PlyCount "177"] [EventDate "2018.??.??"] [EventType
"blitz"] 1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+ 4. Nbd2 O-O 5. a3 Bxd2+ 6. Bxd2 b6 7.
Bg5 Bb7 8. e3 c5 9. Be2 h6 10. Bh4 d6 11. O-O Nbd7 12. Nd2 Re8 13. Rc1 Qc7 14.
Re1 Qc6 15. f3 Rac8 16. b4 a5 17. Qb3 Ra8 18. Nb1 cxd4 19. exd4 axb4 20. axb4
Qc8 21. Nc3 Nh5 22. Bf1 Nf8 23. Na4 Nd7 24. d5 Kh8 25. dxe6 Rxe6 26. Rcd1 Qf8
27. Bf2 b5 28. cxb5 Qe7 29. Nb6 Nxb6 30. Rxe6 fxe6 31. Bxb6 Nf4 32. Be3 Nd5
33. b6 Nxe3 34. Qxe3 Qd8 35. Rc1 Rc8 36. Rc7 Rxc7 37. bxc7 Qxc7 38. Qxe6 Qb6+
39. Kh1 Qd4 40. h3 Qd1 41. Qe8+ Kh7 42. Qb5 Kg6 43. Kh2 Kf6 44. Qxb7 Qxf1 45.
Qd5 Qa6 46. b5 Qb6 47. h4 Ke7 48. Kg3 Qa7 49. Qc6 Qa5 50. Qb7+ Kf6 51. Qd5 Ke7
52. Qd4 g6 53. Qg7+ Kd8 54. Qxg6 Qe1+ 55. Kg4 Qb4+ 56. Kh3 Qc5 57. Qxh6 Kc7
58. h5 Qf5+ 59. Kh4 Qxb5 60. Qg7+ Kc6 61. h6 Qb1 62. g4 Qh1+ 63. Kg5 Qc1+ 64.
f4 Qc5+ 65. f5 Qe3+ 66. Kg6 Qg3 67. g5 Qe1 68. Qf8 Kd5 69. h7 Qe5 70. Qf6 Qe8+
71. Qf7+ Qxf7+ 72. Kxf7 Kc4 73. g6 Kd3 74. g7 Kc2 75. g8=R d5 76. h8=Q Kd3 77.
f6 Kc3 78. Ke6 d4 79. Kd5 d3 80. Ke4 Kb3 81. Rb8+ Kc2 82. Qc8+ Kd2 83. f7 Ke1
84. Kxd3 Kf2 85. f8=R+ Kg3 86. Qh3+ Kxh3 87. Rg8 Kh4 88. Rb1 Kh5 89. Rh1# 1-0
[Event "CCC 2: Blitz Battle (5|2)"] [Site "Chess.com"] [Date "2018.10.10"]
[Round "?"] [White "Shredder 13"] [Black "Lc0 0.18.1"] [Result "0-1"] [ECO
"B97"] [WhiteElo "3287"] [BlackElo "3226"] [PlyCount "198"] [EventDate
"2018.??.??"] [EventType "blitz"] 1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5.
Nc3 a6 6. Bg5 e6 7. f4 Qb6 8. Nb3 Nbd7 9. Qe2 Qc7 10. g4 b5 11. a3 Be7 12.
O-O-O Rb8 13. Bg2 b4 14. axb4 Rxb4 15. Bh4 O-O 16. Rhf1 Nc5 17. Nxc5 Qxc5 18.
g5 Nd7 19. Na2 Ra4 20. Kb1 Bb7 21. Nc3 Rb4 22. Na2 Ra4 23. Nc3 Rc4 24. Rd3 Rb8
25. Bf2 Qc7 26. Ba7 Rc8 27. Rh3 a5 28. Qf2 Ba6 29. f5 Ne5 30. f6 Bf8 31. Rc1
Rb4 32. Na2 Rb7 33. Bd4 g6 34. Qh4 h5 35. gxh6 Kh7 36. Rc3 Nc6 37. e5 d5 38.
Ka1 Bb4 39. Rf3 Rcb8 40. c3 Bf8 41. Rf2 Bc4 42. Be3 Rb3 43. Bf1 Bxf1 44. Rcxf1
Qb7 45. Rb1 a4 46. Qg3 d4 47. Bxd4 Nxd4 48. Qg2 Bc5 49. Qxb7 R3xb7 50. cxd4
Bxd4 51. Rd2 Bxe5 52. Re2 Bxf6 53. Rf1 Bxb2+ 54. Rxb2 Rxb2 55. Rh1 Kxh6 56. h4
R2b3 57. Re1 Kg7 58. Rc1 Kh6 59. Re1 R8b6 60. Nc1 Rc3 61. Na2 Rcb3 62. Nc1 Rh3
63. Ka2 Rc6 64. Ne2 Rh2 65. Ka3 Rh3+ 66. Ka2 Rxh4 67. Ka3 Rh3+ 68. Kxa4 Rb6
69. Rc1 Rhb3 70. Nc3 Rb8 71. Rc2 R3b6 72. Ka5 R6b7 73. Ka6 Rb3 74. Ka7 R8b4
75. Ra2 Rxc3 76. Ra1 Rcb3 77. Rh1+ Kg7 78. Ra1 Kf6 79. Rf1+ Ke5 80. Re1+ Kd5
81. Ra1 Rb2 82. Ka8 e5 83. Ka7 R4b3 84. Rd1+ Kc6 85. Rc1+ Kd5 86. Rd1+ Kc6 87.
Rc1+ Kd6 88. Rd1+ Ke7 89. Ra1 Kd6 90. Rd1+ Ke6 91. Ra1 e4 92. Ra4 Kd5 93. Ka8
e3 94. Ra1 e2 95. Ra5+ Kd6 96. Ra4 e1=Q 97. Ra6+ Rb6 98. Rxb6+ Rxb6 99. Ka7
Qa5# 0-1 [Event "CCC 2: Blitz Battle (5|2)"] [Site "Chess.com"] [Date
"2018.10.10"] [Round "?"] [White "Lc0 0.18.1"] [Black "Protector"] [Result
"1-0"] [ECO "D37"] [WhiteElo "2000"] [BlackElo "3112"] [PlyCount "273"]
[EventDate "2018.??.??"] [EventType "blitz"] 1. d4 Nf6 2. c4 e6 3. Nf3 d5 4.
Nc3 Be7 5. Bf4 O-O 6. e3 Nbd7 7. Be2 Nh5 8. cxd5 Nxf4 9. exf4 exd5 10. Nxd5
Bd6 11. g3 Nf6 12. Ne3 Bh3 13. a3 h6 14. Bf1 Qc8 15. Qc2 Bxf1 16. Rxf1 a5 17.
Ne5 c5 18. Nf5 Rd8 19. O-O-O cxd4 20. Rxd4 Qxc2+ 21. Kxc2 Bxe5 22. Rxd8+ Rxd8
23. fxe5 Ng4 24. f4 g6 25. h3 gxf5 26. hxg4 fxg4 27. Rh1 Kh7 28. Rh4 Rd5 29.
Rxg4 Rc5+ 30. Kd3 Rb5 31. Kc3 a4 32. Kc2 b6 33. Kc3 Rb3+ 34. Kd4 Rxb2 35. f5
h5 36. Rg5 Kh6 37. Rg8 Kh7 38. Ra8 b5 39. Ke3 Kg7 40. Ra7 Kf8 41. f6 Ke8 42.
Re7+ Kf8 43. Rb7 Ke8 44. Ke4 Re2+ 45. Kd5 Rd2+ 46. Kc6 Rc2+ 47. Kxb5 Rc3 48.
Re7+ Kf8 49. Ra7 Ke8 50. Rxa4 Kd7 51. Ra7+ Ke6 52. Re7+ Kf5 53. a4 Kg6 54. Re8
Kf5 55. e6 Kxf6 56. exf7 Kxf7 57. Re5 Rb3+ 58. Kc6 Rxg3 59. a5 Rg6+ 60. Kb5
Rh6 61. a6 Kf6 62. a7 Kxe5 63. a8=Q Rg6 64. Qh8+ Kf4 65. Kc4 Kg5 66. Kd5 Kh4
67. Ke5 Rg5+ 68. Kf4 Rg4+ 69. Kf5 Rg5+ 70. Kf6 Rg2 71. Qe8 Kg4 72. Qe4+ Kh3
73. Qe5 h4 74. Qe4 Rg1 75. Kf5 Rg2 76. Qe7 Rg4 77. Qb7 Rg1 78. Qe4 Rg2 79. Qe7
Rg4 80. Qh7 Rg1 81. Kf4 Rg4+ 82. Kf3 Rg3+ 83. Kf2 Kg4 84. Qg6+ Kf4 85. Qh5 Rg4
86. Ke2 Rg2+ 87. Kf1 h3 88. Qxh3 Rg6 89. Ke2 Rf6 90. Qh5 Rf5 91. Qh7 Rd5 92.
Qh2+ Ke4 93. Qh1+ Kd4 94. Kf3 Rf5+ 95. Kg4 Rd5 96. Kf4 Kc5 97. Ke4 Rd4+ 98.
Ke5 Rd7 99. Qg1+ Kb5 100. Ke6 Rd3 101. Qf1 Kc4 102. Ke5 Kc3 103. Ke4 Rd4+ 104.
Ke5 Rd3 105. Qc1+ Kb4 106. Ke4 Rd7 107. Qc6 Rd2 108. Ke3 Rd1 109. Qb6+ Kc4
110. Qa6+ Kb4 111. Qc6 Rg1 112. Qe4+ Kc3 113. Qf3 Rb1 114. Ke2+ Kb2 115. Kd2
Ka2 116. Qd5+ Kb2 117. Qe4 Ka2 118. Kc2 Rb2+ 119. Kc1 Ka3 120. Qa8+ Kb3 121.
Qb7+ Kc4 122. Qxb2 Kd5 123. Qa2+ Kd6 124. Qa8 Ke6 125. Kd2 Kd6 126. Kd3 Kd7
127. Ke4 Kd6 128. Qg8 Kc6 129. Ke5 Kb5 130. Kd6 Kb4 131. Qg3 Kc4 132. Qe3 Kb4
133. Kd5 Ka5 134. Kc6 Kb4 135. Qd3 Ka4 136. Kc5 Ka5 137. Qa3# 1-0 [Event "CCC
2: Blitz Battle (5|2)"] [Site "Chess.com"] [Date "2018.10.10"] [Round "?"]
[White "Nirvana 2.4"] [Black "Lc0 0.18.1"] [Result "0-1"] [ECO "B51"]
[WhiteElo "3186"] [BlackElo "3226"] [PlyCount "210"] [EventDate "2018.??.??"]
[EventType "blitz"] 1. e4 c5 2. Nf3 d6 3. Bb5+ Nd7 4. O-O a6 5. Be2 Ngf6 6. d3
e6 7. a4 b6 8. h3 Be7 9. Bf4 Bb7 10. c4 O-O 11. Nc3 Rc8 12. Qb3 Qc7 13. Rfe1
Nb8 14. a5 bxa5 15. e5 Ne8 16. exd6 Bxd6 17. Bxd6 Nxd6 18. Qa3 a4 19. Nxa4
Bxf3 20. Bxf3 Nf5 21. Nc3 Nd4 22. Bd1 Rfd8 23. Ne4 h6 24. Re3 Qb6 25. Nc3 Nf5
26. Re2 Nc6 27. Na4 Qc7 28. Nxc5 Ncd4 29. Nxa6 Nxe2+ 30. Bxe2 Qe5 31. Bf1 Nd4
32. Qc3 Ra8 33. Ra5 Ne2+ 34. Bxe2 Qxe2 35. Nc5 Rxa5 36. Qxa5 Rc8 37. b4 Qe1+
38. Kh2 Qxf2 39. Qa6 Qf4+ 40. Kh1 Qc7 41. Qa3 Qe5 42. Ne4 Kh7 43. Kg1 Rd8 44.
Kf1 Qf4+ 45. Nf2 e5 46. Ke2 f5 47. Qa5 Rb8 48. b5 e4 49. dxe4 Qc1 50. Qd2
Qxc4+ 51. Qd3 Qxd3+ 52. Kxd3 Rxb5 53. exf5 Rxf5 54. Ng4 Kg6 55. Ke4 Kg5 56. g3
Ra5 57. Ne3 Ra3 58. h4+ Kh5 59. Kf4 g5+ 60. hxg5 hxg5+ 61. Kf3 g4+ 62. Ke2 Kg5
63. Kd2 Ra7 64. Ke1 Rf7 65. Nf1 Rf8 66. Nd2 Kf5 67. Nf1 Ke4 68. Nh2 Rg8 69.
Kf2 Kd3 70. Kg2 Ke2 71. Kg1 Rf8 72. Nxg4 Rg8 73. Nh6 Rxg3+ 74. Kh2 Rg5 75. Nf7
Rf5 76. Nd6 Rd5 77. Nc8 Kf3 78. Ne7 Rc5 79. Kg1 Rg5+ 80. Kf1 Ra5 81. Kg1 Kg3
82. Kf1 Rc5 83. Ng6 Rf5+ 84. Ke2 Rf6 85. Nh8 Kg4 86. Kd3 Kg5 87. Kd4 Rf8 88.
Ng6 Kxg6 89. Ke5 Kg5 90. Ke4 Kf6 91. Kd4 Kf5 92. Kd3 Ke5 93. Kc4 Ke4 94. Kc5
Ke5 95. Kc4 Rd8 96. Kc3 Rd4 97. Kb3 Kd5 98. Kc3 Kc5 99. Kb3 Rc4 100. Ka3 Rb4
101. Ka2 Kc4 102. Ka3 Kc3 103. Ka2 Rb7 104. Ka1 Kc2 105. Ka2 Ra7# 0-1 [Event
"CCC 2: Blitz Battle (5|2)"] [Site "Chess.com"] [Date "2018.10.10"] [Round
"?"] [White "Lc0 0.18.1"] [Black "Komodo MC"] [Result "1-0"] [ECO "D32"]
[WhiteElo "2000"] [BlackElo "3404"] [PlyCount "211"] [EventDate "2018.??.??"]
[EventType "blitz"] 1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6.
dxc5 Bxc5 7. Qxd5 Qb6 8. Qe4+ Be6 9. e3 Nf6 10. Qc2 g6 11. Be2 O-O 12. O-O Nb4
13. Qd1 Rfd8 14. Bd2 Be7 15. Nd4 Nbd5 16. Bf3 Nxc3 17. Bxc3 Bc4 18. Re1 Nd5
19. Bxd5 Bxd5 20. h3 Rac8 21. a3 Qc7 22. e4 Bc4 23. Qg4 h5 24. Qf3 Bd6 25. e5
Be7 26. e6 Bg5 27. Re5 f6 28. Rxg5 fxg5 29. Qf6 Qg7 30. Qxg7+ Kxg7 31. Nc6+
Kg8 32. Nxd8 Rxd8 33. e7 Re8 34. Bf6 g4 35. hxg4 hxg4 36. Rd1 Bb5 37. Bg5 Kf7
38. Kh2 Rh8+ 39. Kg3 Rh5 40. Kf4 Rh2 41. Rd8 Be8 42. Kg3 Rh1 43. Rd4 Ke6 44.
Kxg4 Re1 45. Rf4 Rg1 46. g3 Rd1 47. Kh4 Rh1+ 48. Kg4 Rd1 49. Rf8 Kd7 50. Bf6
Rd5 51. Kf3 Rc5 52. g4 Rc4 53. Kg3 a5 54. Kh4 Rc2 55. f4 Rc5 56. Rg8 Rd5 57.
Kg3 Rc5 58. Rh8 Rc6 59. Rf8 Rc1 60. f5 gxf5 61. gxf5 Rg1+ 62. Kf2 Rb1 63. Rh8
Rd1 64. Bc3 Kxe7 65. f6+ Kf7 66. Rh7+ Kf8 67. Rxb7 Rd6 68. Ra7 Bg6 69. Rxa5
Rd7 70. a4 Kf7 71. Rc5 Ke6 72. a5 Kd6 73. b4 Rh7 74. Rg5 Bb1 75. b5 Rh2+ 76.
Ke1 Rh7 77. b6 Kc6 78. Rg7 Rh1+ 79. Kf2 Rh8 80. Rc7+ Kb5 81. Ke3 Ba2 82. Kf4
Rh4+ 83. Kg5 Rh8 84. Be5 Kxa5 85. Ra7+ Kb5 86. Rxa2 Rg8+ 87. Kf5 Kc5 88. Ra8
Rg2 89. b7 Rf2+ 90. Ke6 Kc6 91. b8=Q Rxf6+ 92. Bxf6 Kc5 93. Qb5+ Kxb5 94. Kd5
Kb6 95. Rg8 Kc7 96. Bd8+ Kb7 97. Bb6 Kxb6 98. Rg1 Kc7 99. Kc5 Kd7 100. Re1 Kc7
101. Re7+ Kd8 102. Kd6 Kc8 103. Kc6 Kb8 104. Re1 Ka7 105. Re8 Ka6 106. Ra8#
1-0 [Event "CCC 2: Blitz Battle (5|2)"] [Site "Chess.com"] [Date "2018.10.10"]
[Round "?"] [White "Ivanhoe 999946h"] [Black "Lc0 0.18.1"] [Result "0-1"] [ECO
"A45"] [WhiteElo "3115"] [BlackElo "3099"] [PlyCount "182"] [EventDate
"2018.??.??"] [EventType "blitz"] 1. d4 Nf6 2. Nc3 d5 3. Bf4 c5 4. e3 cxd4 5.
exd4 a6 6. Nf3 Nc6 7. Qd2 Bf5 8. Bd3 Bxd3 9. cxd3 e6 10. O-O Bd6 11. Be5 Be7
12. Rac1 O-O 13. a3 h6 14. Ne2 Rc8 15. Rc3 Ne8 16. Rfc1 f6 17. Bg3 Kf7 18. h3
Nd6 19. Bh2 g5 20. Qd1 Rh8 21. Bxd6 Bxd6 22. Nd2 g4 23. hxg4 Qg8 24. Nf1 Qxg4
25. Ne3 Qg5 26. Rb3 Rc7 27. Qf1 Bf4 28. Nxf4 Qxf4 29. g3 Qg5 30. Ng2 h5 31.
Qe1 h4 32. Rxb7 Rxb7 33. Rxc6 Qg4 34. Nf4 hxg3 35. fxg3 Rxb2 36. Rc7+ Kg8 37.
Re7 Rh3 38. Nxh3 Re2 39. Qxe2 Qxe2 40. Nf4 Qe1+ 41. Kg2 e5 42. dxe5 fxe5 43.
Nxd5 Kf8 44. Re6 Qb1 45. Rf6+ Kg7 46. Rd6 Qxd3 47. a4 Qa3 48. Ne7 Kf7 49. Nf5
e4 50. Nh6+ Kf8 51. Rf6+ Kg7 52. Rf4 Kxh6 53. Rxe4 Qa2+ 54. Kh3 Kh5 55. Rh4+
Kg5 56. Rg4+ Kf5 57. Rf4+ Ke5 58. Kg4 Qh2 59. Rf5+ Ke4 60. Rf8 Qh7 61. Rf4+
Ke3 62. Rf3+ Ke2 63. Rf4 a5 64. Kg5 Qh3 65. g4 Qh7 66. Rf5 Qd7 67. Rf4 Ke3 68.
Rf5 Qxa4 69. Kh4 Qe8 70. Rd5 a4 71. Rd1 Qh8+ 72. Kg3 a3 73. Re1+ Kd4 74. Rd1+
Ke4 75. Re1+ Kd5 76. Rd1+ Qd4 77. Rxd4+ Kxd4 78. Kh4 a2 79. Kh5 a1=Q 80. Kg6
Ke4 81. Kf7 Qe5 82. Kg6 Qe7 83. g5 Kf4 84. Kh6 Kf5 85. g6 Kg4 86. g7 Qe6+ 87.
Kh7 Kh5 88. g8=N Qd7+ 89. Kh8 Kg6 90. Ne7+ Qxe7 91. Kg8 Qg7# 0-1 [Event "CCC
2: Blitz Battle (5|2)"] [Site "Chess.com"] [Date "2018.10.11"] [Round "?"]
[White "Lc0 0.18.1"] [Black "Gull 3.syz"] [Result "1-0"] [ECO "D37"] [WhiteElo
"2000"] [BlackElo "3283"] [PlyCount "233"] [EventDate "2018.??.??"] [EventType
"blitz"] 1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Nf3 a6 5. cxd5 exd5 6. Bg5 Be6 7. e3
Bd6 8. Bd3 Nbd7 9. O-O c6 10. Bf4 Qc7 11. Bxd6 Qxd6 12. h3 O-O 13. Qc2 c5 14.
dxc5 Nxc5 15. Rac1 Rac8 16. Rfd1 Qb6 17. b3 Qd6 18. Ne2 b5 19. Qd2 Nxd3 20.
Qxd3 h6 21. Qd4 Qa3 22. Qa1 Rfe8 23. Nfd4 Bd7 24. Nf4 g5 25. Rxc8 Rxc8 26.
Nfe2 Qd6 27. Ng3 Qe5 28. Rc1 Rxc1+ 29. Qxc1 Ne4 30. Nh5 Qd6 31. Qb2 Kf8 32.
Ne2 f6 33. Qd4 Be8 34. Neg3 Nxg3 35. Nxg3 Bg6 36. h4 Qe6 37. a4 bxa4 38. bxa4
Kg8 39. a5 Kg7 40. h5 Bf7 41. Qd3 Kh8 42. Qb1 Qc8 43. Qb6 Kg7 44. Qb2 Be8 45.
Qb1 Kh8 46. Qb6 Kg7 47. Qb1 Kh8 48. Qb4 Bf7 49. Qb2 Kg7 50. Qa1 Qc2 51. Qf1
Qc8 52. Qa1 Qc2 53. Qf1 Qc8 54. Qb1 Kh8 55. Qb4 Kg7 56. Qb2 Be8 57. f3 g4 58.
f4 Bf7 59. Kh2 Qe6 60. Qb6 Qc8 61. Qb1 Kh8 62. Qb4 Kg7 63. Qb1 Kh8 64. Qb4 Kg7
65. Qe7 Qe6 66. Qc7 Kf8 67. Qb6 Kg7 68. Qb3 d4 69. Qxe6 Bxe6 70. exd4 f5 71.
Nf1 Bd7 72. Ne3 Kf7 73. Nd5 Bb5 74. Kg3 Bc4 75. Ne3 Bd3 76. Kf2 Ke6 77. Ke1 g3
78. Kd2 Bb1 79. Kc3 Be4 80. Kb4 Kd6 81. Kc4 Bb1 82. d5 Ke7 83. Nf1 Kf6 84.
Nxg3 Ke7 85. Kd4 Kf6 86. Nf1 Bc2 87. Ne3 Bb3 88. Kc5 Ba4 89. Kb6 Kf7 90. Kxa6
Be8 91. Nxf5 Kf6 92. Nxh6 Ba4 93. Ng8+ Kg7 94. Kb6 Bb3 95. d6 Be6 96. Kc5 Ba2
97. d7 Bxg8 98. d8=Q Bb3 99. Qe7+ Bf7 100. Qxf7+ Kxf7 101. a6 Kg7 102. a7 Kg8
103. a8=Q+ Kg7 104. h6+ Kg6 105. f5+ Kg5 106. h7 Kf6 107. h8=R Kg5 108. Kd4
Kf4 109. Qg8 Kxf5 110. g3 Kf6 111. g4 Ke7 112. g5 Kd6 113. g6 Kc6 114. g7 Kc7
115. Kc5 Kb7 116. Qf7+ Ka6 117. Ra8# 1-0 [Event "CCC 2: Blitz Battle (5|2)"]
[Site "Chess.com"] [Date "2018.10.11"] [Round "?"] [White "Critter 1.6"]
[Black "Lc0 0.18.1"] [Result "0-1"] [ECO "B90"] [WhiteElo "3160"] [BlackElo
"3099"] [PlyCount "174"] [EventDate "2018.??.??"] [EventType "blitz"] 1. e4 c5
2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nf3 Be7 8. Bc4 O-O 9.
O-O Nc6 10. Re1 b5 11. Bb3 Na5 12. Bg5 Nxb3 13. axb3 Bb7 14. Bxf6 Bxf6 15. Nd5
Rc8 16. c3 g6 17. b4 Bg7 18. Qd3 f5 19. Rad1 Kh8 20. Nd2 Bh6 21. exf5 gxf5 22.
Nb3 Ba8 23. Ra1 Qg5 24. Red1 Rg8 25. g3 Qh5 26. Rxa6 e4 27. Qc2 Bg5 28. Raa1
Rce8 29. Rxa8 Rxa8 30. Re1 Qf7 31. Qd1 Bh6 32. Na5 f4 33. Qd4+ Bg7 34. Qxe4
Be5 35. Qf3 Raf8 36. Kh1 fxg3 37. Qxf7 Rxf7 38. fxg3 Rf2 39. Rb1 Rgf8 40. Nb3
h5 41. Nd4 Bxd4 42. cxd4 Rd2 43. Nf4 Rc8 44. b3 Rcc2 45. h4 Rb2 46. Rxb2 Rxb2
47. Nd5 Rxb3 48. Kh2 Kh7 49. Kg2 Kg6 50. Kf2 Kf5 51. Ke1 Rxg3 52. Nc7 Rb3 53.
Kd2 Rxb4 54. Kd3 Rb3+ 55. Kc2 Rh3 56. Nxb5 Rxh4 57. Nxd6+ Ke6 58. Nc4 Rxd4 59.
Nd2 h4 60. Nf3 Rg4 61. Kd2 h3 62. Ke3 Rg2 63. Nd4+ Kd7 64. Nf3 h2 65. Nxh2
Rxh2 66. Kf3 Rh8 67. Kf4 Ke6 68. Ke4 Ra8 69. Kf4 Kd5 70. Kf3 Ke5 71. Ke3 Rh8
72. Kd3 Ra8 73. Kc3 Kd5 74. Kd3 Re8 75. Kc3 Ke4 76. Kc4 Ke5 77. Kd3 Kd5 78.
Kc3 Re3+ 79. Kd2 Kd4 80. Kc2 Kc4 81. Kd2 Re8 82. Kc2 Rd8 83. Kb2 Rd2+ 84. Kc1
Kc3 85. Kb1 Kb3 86. Kc1 Rd8 87. Kb1 Rd1# 0-1 [Event "CCC 2: Blitz Battle
(5|2)"] [Site "Chess.com"] [Date "2018.10.11"] [Round "?"] [White "Lc0
0.18.1"] [Black "Chiron 20180913"] [Result "1-0"] [ECO "D32"] [WhiteElo
"2000"] [BlackElo "3276"] [PlyCount "241"] [EventDate "2018.??.??"] [EventType
"blitz"] 1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nc6 6. dxc5 Bxc5 7.
Qxd5 Qe7 8. Qe4 Nf6 9. Qxe7+ Kxe7 10. Bd2 Rd8 11. e3 Bf5 12. Be2 Rac8 13. h3
Kf8 14. O-O Ne5 15. Bc1 Nc6 16. Rd1 Rxd1+ 17. Bxd1 Rd8 18. b3 Ne4 19. Bb2 Nxc3
20. Bxc3 Ba3 21. g4 Bg6 22. Nh4 Be4 23. Bf3 Bxf3 24. Nxf3 Rd3 25. Bd2 h6 26.
Rd1 Ke7 27. Kf1 Rd5 28. Nd4 Nxd4 29. Bc3 Bc5 30. Bxd4 Bxd4 31. Rxd4 Rc5 32.
Rc4 Kd6 33. Ke2 Ra5 34. a4 b5 35. Rd4+ Kc6 36. f4 h5 37. g5 f6 38. h4 f5 39.
e4 fxe4 40. Rxe4 bxa4 41. Rxa4 Rf5 42. Ke3 a5 43. b4 axb4 44. Rxb4 Rf8 45. Ke4
Rf7 46. Ra4 Kb5 47. Ra8 Re7+ 48. Kf5 Kc6 49. Kg6 Kb7 50. Rg8 Re6+ 51. Kxh5 Kb6
52. Rxg7 Re8 53. Re7 Rh8+ 54. Kg6 Rd8 55. Rd7 Rc8 56. Rc7 Rd8 57. h5 Ra8 58.
Ra7 Rd8 59. Rd7 Rg8+ 60. Kf7 Rc8 61. Rc7 Ra8 62. Ra7 Rd8 63. Ke7 Rd3 64. g6
Rg3 65. h6 Re3+ 66. Kd6 Kb5 67. Ra4 Rd3+ 68. Ke5 Re3+ 69. Kd4 Re8 70. Kd5 Rd8+
71. Ke5 Re8+ 72. Kd6 Rd8+ 73. Ke7 Rd2 74. Rb4+ Kc6 75. Rb7 Re2+ 76. Kf7 Rh2
77. Rb6+ Kd5 78. Rb2 Rh1 79. Rb1 Rh3 80. Rb3 Rh1 81. Rb1 Rh3 82. Rb3 Rh1 83.
Rb5+ Ke4 84. Rb1 Rh5 85. Rb5 Rh1 86. Rb1 Rh5 87. h7 Rf5+ 88. Ke6 Rc5 89. Rc1
Rb5 90. Rb1 Rc5 91. h8=Q Rc6+ 92. Kd7 Rc2 93. Qd4+ Kf3 94. Qf2+ Ke4 95. Qxc2+
Kf3 96. g7 Ke3 97. g8=R Kxf4 98. Qe4+ Kxe4 99. Rg4+ Kf3 100. Rg8 Ke4 101. Ke6
Kd3 102. Rg3+ Kd2 103. Rb2+ Kc1 104. Rg1+ Kxb2 105. Kd5 Kc3 106. Ke4 Kc4 107.
Rc1+ Kb5 108. Kd5 Kb4 109. Kd4 Kb5 110. Rc8 Kb6 111. Kd5 Kb7 112. Rc1 Kb6 113.
Rb1+ Kc7 114. Kc5 Kd7 115. Re1 Kc7 116. Re7+ Kd8 117. Kd6 Kc8 118. Kc6 Kb8
119. Re1 Ka8 120. Kb6 Kb8 121. Re8# 1-0 [Event "CCC 2: Blitz Battle (5|2)"]
[Site "Chess.com"] [Date "2018.10.11"] [Round "?"] [White "Bobcat 8.0"] [Black
"Lc0 0.18.1"] [Result "1/2-1/2"] [ECO "B86"] [WhiteElo "2200"] [BlackElo
"3099"] [PlyCount "200"] [EventDate "2018.??.??"] [EventType "blitz"] 1. e4 c5
2. Nf3 d6 3. Bc4 Nf6 4. Nc3 e6 5. d4 cxd4 6. Nxd4 a6 7. a4 Be7 8. O-O O-O 9.
Be3 Nc6 10. Re1 Bd7 11. Nxc6 Bxc6 12. a5 Rc8 13. Bb6 Qe8 14. Bb3 Nd7 15. Bd4
Qd8 16. Qf3 Bf6 17. Bxf6 Nxf6 18. h3 Qc7 19. Qf4 Rfd8 20. Red1 h6 21. g3 Nh5
22. Qe3 Nf6 23. Qd4 d5 24. e5 Nd7 25. f4 Rb8 26. Ne2 Bb5 27. Nc3 Nc5 28. Qb4
Qc6 29. Nxb5 axb5 30. c3 Nxb3 31. Qxb3 Ra8 32. Rd4 Ra6 33. Rb4 b6 34. Rxb5
Rxa5 35. Raxa5 bxa5 36. Rb8 Rxb8 37. Qxb8+ Kh7 38. Qb3 g6 39. h4 Kg7 40. Kf2
Qc5+ 41. Kg2 h5 42. Qd1 Qc6 43. Kf1 a4 44. Qd2 Qc4+ 45. Kg2 Qa2 46. Qf2 Qb1
47. Qd2 Kh7 48. Kf2 Qa2 49. Qe2 Kg7 50. Kf3 Qb1 51. Ke3 Kg8 52. Qd2 Kh7 53.
Kf2 Qa1 54. Ke3 Kg7 55. Kf2 Qa2 56. Qe2 Kh7 57. Ke3 Qb1 58. Qd2 Kg8 59. Qe2
Qa1 60. Qd2 Kh7 61. Qe2 Kg7 62. Qd2 Qg1+ 63. Qf2 Qa1 64. Qd2 Kg8 65. Kf2 Qa2
66. Ke3 Kh7 67. Qe2 Kg7 68. Kf3 Qa1 69. Ke3 Qb1 70. Qd2 Qa2 71. f5 exf5 72. e6
Qc4 73. exf7 Kxf7 74. Kf2 Qb5 75. Ke1 Qe8+ 76. Kf2 Qb5 77. Ke1 Qb3 78. Qd4 Ke6
79. Qg7 Qxb2 80. Qxg6+ Ke7 81. Qg5+ Ke6 82. Qg6+ Ke7 83. Qg5+ Kd7 84. Qxf5+
Kc6 85. Qc8+ Kd6 86. Qd8+ Ke6 87. Qe8+ Kf6 88. Qh8+ Ke6 89. Qe8+ Kd6 90. Qd8+
Ke5 91. Qe8+ Kf6 92. Qh8+ Kg6 93. Qe8+ Kh6 94. Qh8+ Kg6 95. Qe8+ Kg7 96. Qe5+
Kf8 97. Qh8+ Ke7 98. Qe5+ Kf8 99. Qh8+ Ke7 100. Qe5+ Kf8 1/2-1/2 [Event "CCC
2: Blitz Battle (5|2)"] [Site "Chess.com"] [Date "2018.10.11"] [Round "?"]
[White "Lc0 0.18.1"] [Black "Arasan 21.1"] [Result "1-0"] [ECO "D06"]
[WhiteElo "2000"] [BlackElo "3244"] [PlyCount "207"] [EventDate "2018.??.??"]
[EventType "blitz"] 1. d4 Nf6 2. c4 d5 3. cxd5 c6 4. dxc6 Nxc6 5. Nf3 e5 6.
Nxe5 Nxe5 7. dxe5 Qxd1+ 8. Kxd1 Ng4 9. Ke1 Bc5 10. e3 Nxe5 11. Bd2 Nc6 12. a3
O-O 13. Bc3 Bf5 14. Nd2 Rac8 15. g4 Be6 16. h3 Bd5 17. Rg1 Rfe8 18. Rc1 Bf8
19. g5 Ne5 20. h4 g6 21. Be2 a6 22. Kf1 Rc7 23. f4 Nd7 24. Kf2 Bc5 25. Bd4
Rec8 26. Bxc5 Nxc5 27. Rc3 Na4 28. Rxc7 Rxc7 29. b3 Nc5 30. Bc4 Bxc4 31. bxc4
h5 32. Rb1 Kf8 33. Ke2 Rd7 34. Rb4 Nd3 35. Rb1 Nc5 36. Nb3 Ne4 37. Kf3 Nc3 38.
Rc1 Na4 39. c5 Rc7 40. e4 Ke7 41. Ke3 Ke8 42. f5 Nb2 43. f6 Kf8 44. c6 Rxc6
45. Rxc6 bxc6 46. Kd4 Kg8 47. Nc5 a5 48. Nd7 Nd1 49. e5 c5+ 50. Kxc5 Ne3 51.
e6 fxe6 52. Kd6 Nf5+ 53. Kxe6 Nd4+ 54. Ke7 Nf5+ 55. Ke8 Nd6+ 56. Ke7 Nf5+ 57.
Ke6 Nd4+ 58. Kd5 Ne2 59. Kd6 Nf4 60. Ke7 Nd5+ 61. Ke8 Nc7+ 62. Ke7 Nd5+ 63.
Ke8 Nc7+ 64. Kd8 Nd5 65. Ne5 Kf8 66. Kd7 Nf4 67. a4 Nd5 68. Nxg6+ Kf7 69. Ne5+
Kf8 70. Ke6 Nf4+ 71. Kf5 Ne2 72. g6 Nd4+ 73. Kg5 Kg8 74. Kxh5 Ne6 75. Nc4 Nc5
76. Nxa5 Nd7 77. Nb7 Nxf6+ 78. Kg5 Ne4+ 79. Kf5 Ng3+ 80. Kf4 Ne2+ 81. Kg5 Kg7
82. Kg4 Nc3 83. Nc5 Nd5 84. Ne6+ Kh8 85. Ng7 Nf6+ 86. Kf5 Ng8 87. h5 Ne7+ 88.
Ke4 Nc6 89. a5 Na7 90. Kd5 Nb5 91. a6 Nc7+ 92. Kc6 Kxg7 93. Kxc7 Kf6 94. a7
Kf5 95. g7 Ke4 96. a8=R Ke5 97. h6 Kd4 98. g8=R Kc4 99. h7 Kd3 100. h8=Q Kc2
101. Kd6 Kd3 102. Qh3+ Kc2 103. Rg2+ Kb1 104. Qh1# 1-0 [Event "CCC 2: Blitz
Battle (5|2)"] [Site "Chess.com"] [Date "2018.10.11"] [Round "?"] [White
"Alfilx64"] [Black "Lc0 0.18.1"] [Result "0-1"] [ECO "B51"] [WhiteElo "3139"]
[BlackElo "3099"] [PlyCount "148"] [EventDate "2018.??.??"] [EventType
"blitz"] 1. e4 c5 2. Nf3 d6 3. Bb5+ Nd7 4. d4 cxd4 5. Qxd4 a6 6. Bxd7+ Bxd7 7.
O-O Nf6 8. Nc3 e5 9. Qd3 h6 10. Be3 Be6 11. Rfe1 Be7 12. Nd2 Rc8 13. Nd5 Bxd5
14. exd5 Ng4 15. Nf3 Nxe3 16. Rxe3 O-O 17. c4 f5 18. Qc2 b5 19. Rc3 Bf6 20.
Rd1 Qd7 21. Qc1 Qa7 22. cxb5 Rxc3 23. Qxc3 axb5 24. a3 Qc5 25. Qxc5 dxc5 26.
Nd2 e4 27. Nb3 c4 28. Nd4 Rd8 29. Ne6 Rb8 30. Nd4 Rd8 31. Ne6 Rb8 32. Nd4 Kf7
33. f3 e3 34. Kf1 f4 35. Ke2 Rb6 36. g3 g5 37. Ne6 Be5 38. Nd4 Ke7 39. Nf5+
Kd7 40. Nd4 Kd6 41. Nf5+ Kc5 42. d6 Bxd6 43. Nxh6 b4 44. a4 Be5 45. Nf5 Bxb2
46. h4 gxh4 47. gxf4 b3 48. Nxe3 Bd4 49. Nxc4 Kxc4 50. f5 b2 51. Rb1 h3 52. f4
h2 53. Kf3 Rh6 54. Rh1 Bg1 55. Kg4 b1=Q 56. Kg5 Rh8 57. Rxh2 Qxf5+ 58. Kxf5
Rxh2 59. Ke4 Rh5 60. f5 Bh2 61. a5 Rh3 62. a6 Ra3 63. f6 Rxa6 64. Kf5 Kd5 65.
f7 Bd6 66. Kg6 Ke6 67. f8=N+ Bxf8 68. Kg5 Ke5 69. Kg4 Ra3 70. Kg5 Bh6+ 71. Kg6
Ra7 72. Kh5 Kf5 73. Kxh6 Rb7 74. Kh5 Rh7# 0-1 [Event "CCC 2: Blitz Battle
(5|2)"] [Site "Chess.com"] [Date "2018.10.12"] [Round "?"] [White "Lc0
0.18.1"] [Black "Fizbo 1.9"] [Result "1-0"] [ECO "D20"] [WhiteElo "2000"]
[BlackElo "3400"] [PlyCount "163"] [EventDate "2018.??.??"] [EventType
"blitz"] 1. d4 d5 2. c4 dxc4 3. e3 Nf6 4. Bxc4 a6 5. Nf3 e6 6. O-O b5 7. Bd3
c5 8. a4 b4 9. Nbd2 Bb7 10. Qe2 cxd4 11. exd4 Be7 12. a5 O-O 13. Rd1 Nc6 14.
Nb3 h6 15. Bf4 Qd5 16. h3 Rfc8 17. Be3 Kh8 18. Bc4 Qf5 19. Nfd2 Qg6 20. Qd3
Qh5 21. Qf1 Nd5 22. Be2 Qg6 23. Nc4 Nxe3 24. fxe3 Rab8 25. Rdc1 Nd8 26. Nbd2
f6 27. Bd3 Qg5 28. Qe2 Rc7 29. Qg4 f5 30. Qxg5 Bxg5 31. Kf2 f4 32. e4 Rbc8 33.
Rd1 Nf7 34. Nb6 Rd8 35. Nf3 Nd6 36. d5 exd5 37. Nxg5 hxg5 38. exd5 Kg8 39.
Rac1 Re7 40. Bg6 Kf8 41. Rd4 b3 42. h4 Nb5 43. Rb4 Rd6 44. h5 Rd8 45. Rxb3 Nd6
46. g3 Ne4+ 47. Bxe4 Rxe4 48. Rd3 Rb4 49. Rc7 Ba8 50. Kf3 Rb5 51. Nxa8 Rxa8
52. gxf4 gxf4 53. Kxf4 Rd8 54. Ke5 Rxa5 55. b3 Ra1 56. d6 Rf1 57. Kd5 Kg8 58.
Rc4 Rf7 59. Kc6 Rc8+ 60. Kb6 Rd8 61. Rc7 Rf6 62. Rc6 Rd7 63. Rc8+ Kh7 64. Kc6
Ra7 65. Rc7 Ra8 66. Kb7 Rff8 67. d7 Rfb8+ 68. Kc6 Rf8 69. Kd6 Kh6 70. Ke7 Kxh5
71. d8=Q Raxd8 72. Rxd8 Rf5 73. Ke6 Kg6 74. Rxg7+ Kxg7 75. Kxf5 Kh7 76. b4 Kg7
77. b5 Kf7 78. bxa6 Ke7 79. Rd1 Ke8 80. a7 Ke7 81. a8=Q Kf7 82. Rd7# 1-0
