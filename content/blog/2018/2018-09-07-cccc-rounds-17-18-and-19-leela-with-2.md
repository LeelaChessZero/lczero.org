+++
title = "CCCC rounds 17, 18 and 19. Leela with 2 wins and 1 draw."
slug = "cccc-rounds-17-18-and-19-leela-with-2"
published = 2018-09-07T17:39:00.001000+02:00
author = "Bob23"
tags = []
draft = true
+++

[ ![](../../images/2018-09-07-cccc-rounds-17-18-and-19-leela-
with-2-gjgj98789798799999.png)](https://www.chess.com/computer-chess-
championship)

  
CCCC continues with Houdini on the lead a full point ahead of the 2nd
Stockfish. Houdini till now seems unstoppable and is killing every other
engine except for the top ones. Leela is 5th for now even though she won 2
games and drew the other.  
  
 **ROUND 17**  
Houdini won against Fire in a nice game where after just a single mistake of
Fire leaving its Rook in b2 Houdini took the chance and punished it winning
the exchange of a Rook for a Knight and after some deep maneuvering it won a
Pawn also and the game was essentially over.  
  
 **Leela** completely outplayed Arasan in middlegame and in opening and her
position was winning even from move 20! Yet game lasted 147 moves and this is
because Leela refused to win. Her advantage was so huge that after some point
almost every move was winning! But she just shuffled her pieces here and
there, not pushing passed Pawns, not creating threats to win easily, just
making some Rook moves. Eventually when in danger of 50 move rule draw, she
started playing more sensible and then again a little shuffling until
eventually she won. This is typical for Leela of course when she has many
options that all are scores of e.g +20, i.e there are multiple easy winning
moves. She just doesn't know which move to choose so it appears she will draw.
But when the 50 move rule draw is imminent she plays a move to avoid it so
gets closer to win.  
This happens because her MCTS type of search(called puct) is not good at all
at finding shortest solution of a problem, checkmate here in Chess, as also
not good at focusing in a narrow line and resolving it, i.e to find a winning
line and solve it. While traditional programs use AlphaBeta search that is
exceptionally good at finding a narrow path and resolve its theoretical
result.  
  
Ethereal won against Ivanhoe so it climbed and now top 8 it's on its horizon.
Ivanhoe has chosen a gambit that it didn't know how to play it and Ethereal
punished it.  
Shredder managed to get a draw against Stockfish and with black also. When
Stockfish has shown +2.0 for white most spectators believed it's over for
Shredder but with more careful examination of the position, Stockfish was
illusional as white could not win.  
  
193 Andscacs vs Fritz 0-1  
194 Fizbo vs Gull 1/2-1/2  
195 Houdini vs Fire 1-0  
196 Ethereal vs Ivanhoe 1-0  
197 Komodo vs Crafty 1-0  
198 Booot vs Laser 1-0  
199 **Lco** vs Arasan 1-0  
200 Xiphos vs Nemorino 1-0  
201 Nirvana vs Wasp 1/2-1/2  
202 Vajolet vs Pedone 1/2-1/2  
203 Senpai vs Texel 0-1  
204 Stockfish vs Shredder 1/2-1/2  
  
  

[Event "CCCC 1: Rapid Rumble (15|5) Stage 1"] [Site "Chess.com"] [Date
"2018.09.06"] [Round "?"] [White "Lc0 17.11089"] [Black "Arasan CCCC-2018"]
[Result "1-0"] [ECO "D30"] [WhiteElo "3300"] [BlackElo "3179"] [PlyCount
"293"] [EventDate "2018.??.??"] [EventType "rapid"] [TimeControl "900+5"] 1.
d4 {[%eval 23,14] [%emt 0:00:27]} d5 {[%eval -17,27] [%emt 0:00:31]} 2. c4 {
[%eval 25,16] [%emt 0:00:11]} e6 {[%eval -14,28] [%emt 0:00:27]} 3. Nf3 {
[%eval 24,15] [%emt 0:00:30]} a6 {[%eval -16,26] [%emt 0:00:47]} 4. cxd5 {
[%eval 39,14] [%emt 0:00:20]} exd5 {[%eval -12,28] [%emt 0:00:16]} 5. Nc3 {
[%eval 41,17] [%emt 0:00:01]} Nc6 {[%eval -14,29] [%emt 0:00:27]} 6. Qb3 {
[%eval 62,13] [%emt 0:00:22]} Bb4 {[%eval -8,29] [%emt 0:00:23]} 7. Bg5 {
[%eval 69,14] [%emt 0:00:19]} Nge7 {[%eval -7,27] [%emt 0:00:23]} 8. e3 {
[%eval 72,14] [%emt 0:00:10]} f6 {[%eval -8,28] [%emt 0:00:16]} 9. Bf4 {
[%eval 86,13] [%emt 0:00:20]} Bg4 {[%eval -9,27] [%emt 0:00:12]} 10. a3 {
[%eval 93,17] [%emt 0:00:26]} Bxc3+ {[%eval -19,28] [%emt 0:00:27]} 11. Qxc3 {
[%eval 89,16] [%emt 0:00:01]} g5 {[%eval 0,32] [%emt 0:00:21]} 12. Bg3 {
[%eval 91,23] [%emt 0:00:07]} h5 {[%eval 0,30] [%emt 0:00:14]} 13. h3 {[%eval
86,35] [%emt 0:00:00]} Bxf3 {[%eval 0,30] [%emt 0:00:54]} 14. gxf3 {[%eval 91,
17] [%emt 0:00:00]} Nf5 {[%eval -35,30] [%emt 0:00:26]} 15. Bh2 {[%eval
111,16] [%emt 0:00:21]} Qd7 {[%eval -42,30] [%emt 0:00:06]} 16. Be2 {[%eval
110,14] [%emt 0:00:11]} Nfe7 $2 {[%eval -35,26] [%emt 0:00:21] Black isn't
sure about what to do? Losing time with the retreat might be even the losing
move.} (16... Rg8) 17. h4 $1 {[%eval 115,16] [%emt 0:00:21][%cal Ge2f1,Gf1h3]}
gxh4 {[%eval -34,27] [%emt 0:00:22]} 18. Bf1 $1 {[%eval 119,18] [%emt
0:00:02][%cal Rf1h3, Rh3c8]} Ng6 $6 {[%eval -39,26]} (18... Rg8) 19. O-O-O
{[%eval 159,14] [%emt 0: 00:22]} O-O-O {[%eval -43,29] [%emt 0:00:23]} 20. b4
$1 {[%eval 270,18] [%emt 0:00:21][%cal Rh2b8] Very nice! White sees that black
has a big weakness in Kingside and attacks it immediately. His h2 Bishop
vision is excellent.} f5 { [%eval -142,28] [%emt 0:00:41]} 21. a4 $16 {[%eval
277,24] [%emt 0:00:00]} Qe7 {[%eval -166,31] [%emt 0:00:21]} 22. b5 {[%eval
413,18] [%emt 0:00:22]} Qb4 { [%eval -182,34] [%emt 0:00:00]} 23. Qxb4 {[%eval
411,19] [%emt 0:00:11]} Nxb4 { [%eval -196,31] [%emt 0:00:10] This game is
essentially over. It's difficult to believe but black even though is a Pawn up
is almost lost as the Bishop pair controls everything than the randomly placed
Knights, and along with bad black's King position white is winning. Leela gave
in the game +4.12 for white like she knew this is sure win.} 24. Kd2 {[%eval
415,19] [%emt 0:00:02] [%csl Rb4,Gb5,Rg6][%cal Gh2c7,Gf1a6,Gd1c1,Gd1b1]} a5
{[%eval -217,33] [%emt 0: 00:22]} 25. Bh3 {[%eval 423,23] [%emt 0:00:00]} Ne7
{[%eval -192,36] [%emt 0: 00:17]} 26. Be5 {[%eval 430,20] [%emt 0:00:00]} Rh7
{[%eval -208,31] [%emt 0: 00:26]} 27. Rdg1 {[%eval 440,18] [%emt 0:00:00]} Rf8
{[%eval -200,31] [%emt 0: 00:15]} 28. Rg5 {[%eval 442,28] [%emt 0:00:00]} Kd8
{[%eval -207,34] [%emt 0: 00:48]} 29. Rhg1 {[%eval 441,18] [%emt 0:00:10]}
Rff7 {[%eval -210,33] [%emt 0: 00:25]} 30. Rc1 {[%eval 551,19] [%emt 0:00:23]}
c6 {[%eval -217,34] [%emt 0:00: 00]} 31. b6 {[%eval 570,20] [%emt
0:00:10][%csl Rc7]} Na6 {[%eval -241,35] [%emt 0:00:02]} 32. Bf1 {[%eval
578,19] [%emt 0:00:06]} Kc8 {[%eval -255,35] [%emt 0:00:14]} 33. Bd6 {[%eval
591,21] [%emt 0:00:00]} Rh8 {[%eval -265,36] [%emt 0:00:50]} 34. Bxe7 $1
{[%eval 715,13] [%emt 0:00:23]} Rxe7 {[%eval -281, 37] [%emt 0:00:00]} 35.
Rxf5 {[%eval 727,13] [%emt 0:00:11]} Kb8 {[%eval -285, 36] [%emt 0:00:04]} 36.
f4 {[%eval 763,12] [%emt 0:00:14]} Rd7 {[%eval -295,32] [%emt 0:00:30]} 37.
Rg5 {[%eval 811,12] [%emt 0:00:14]} Rd6 {[%eval -294,34] [%emt 0:00:14]} 38.
Ke2 {[%eval 852,12] [%emt 0:00:14][%cal Gd2e2,Ge2f3,Gf3g2, Gg2h3] Leela
showing almost +9.0 for white already has seen the King journey.} Rdd8 {[%eval
-318,31] [%emt 0:00:13]} 39. Kf3 {[%eval 985,10] [%emt 0:00:22]} Nb4 {[%eval
-348,34] [%emt 0:00:16]} 40. Kg2 {[%eval 1038,10] [%emt 0:00:12]} h3+ {[%eval
-373,38] [%emt 0:00:00]} 41. Kxh3 {[%eval 1217,10] [%emt 0:00:23]} h4 {[%eval
-368,38] [%emt 0:00:00]} 42. Rc5 {[%eval 1273,10] [%emt 0:00:21]} Rhg8 {[%eval
-392,36] [%emt 0:00:00]} 43. Be2 {[%eval 1375,11] [%emt 0:00:27]} Na2 {[%eval
-421,31] [%emt 0:00:13]} 44. Bd3 {[%eval 1421,10] [%emt 0:00:26]} Rge8 {[%eval
-462,35] [%emt 0:00:21]} 45. Bb1 {[%eval 1511,10] [%emt 0:00:26]} Nb4 {[%eval
-496,37] [%emt 0:00:10]} 46. Rxa5 {[%eval 1471,11] [%emt 0:00:07]} Re7 {[%eval
-497,35] [%emt 0:00:13]} 47. Rc5 {[%eval 1721,8] [%emt 0:00:41]} Na6 {[%eval
-496,32] [%emt 0:00:12]} 48. Rc1 {[%eval 1790,9] [%emt 0:00:21]} Ka8 {[%eval
-508,36] [%emt 0:00:00]} 49. Kxh4 {[%eval 1964,9] [%emt 0:00:24]} Rf7 {[%eval
-555,33] [%emt 0:00:00]} 50. Kg4 {[%eval 2078,8] [%emt 0:00:42]} Nb8 {[%eval
-618,36] [%emt 0:00:24]} 51. a5 {[%eval 2044,8] [%emt 0:00:42]} Nd7 {[%eval
-639,38] [%emt 0:00:00]} 52. Bf5 {[%eval 2182,8] [%emt 0:00:38]} Nf6+ { [%eval
-557,34] [%emt 0:00:12]} 53. Kf3 {[%eval 2127,8] [%emt 0:00:15]} Rff8 { [%eval
-603,35] [%emt 0:00:00]} 54. Bd3 {[%eval 2186,7] [%emt 0:00:30]} Ne8 { [%eval
-613,32] [%emt 0:00:16]} 55. Rcg1 {[%eval 2272,7] [%emt 0:00:35]} Nd6 { [%eval
-700,36] [%emt 0:00:26]} 56. Rg7 {[%eval 2173,7] [%emt 0:00:32]} Nc4 { [%eval
-685,40] [%emt 0:00:00]} 57. Bxc4 {[%eval 2294,8] [%emt 0:00:17]} dxc4 {
[%eval -719,40] [%emt 0:00:08]} 58. Rc1 {[%eval 2271,8] [%emt 0:00:18]} Rd5 {
[%eval -738,40] [%emt 0:00:00]} 59. Rxc4 {[%eval 2228,8] [%emt 0:00:17]} Rxa5
{ [%eval -709,33] [%emt 0:00:20]} 60. Rb4 {[%eval 2159,8] [%emt 0:00:04]} Kb8
{ [%eval -840,39] [%emt 0:00:32]} 61. Rb1 {[%eval 2129,8] [%emt 0:00:27]} Rc8
{ [%eval -677,33] [%emt 0:00:10]} 62. Rgg1 {[%eval 2272,7] [%emt 0:00:27]} Rf8
{ [%eval -689,33] [%emt 0:00:23]} 63. Ke4 {[%eval 2179,7] [%emt 0:00:25]} Ra2
{ [%eval -517,30] [%emt 0:00:10]} 64. Kf3 {[%eval 2129,8] [%emt 0:00:13]} Re8
{ [%eval -672,29] [%emt 0:00:07]} 65. Rg7 {[%eval 2261,7] [%emt 0:00:22]} Ra5
{ [%eval -955,33] [%emt 0:00:22]} 66. Rg5 {[%eval 2337,7] [%emt 0:00:21]} Rd5
{ [%eval -789,32] [%emt 0:00:14]} 67. Re5 {[%eval 2323,7] [%emt 0:00:22]} Red8
{ [%eval -1471,35] [%emt 0:00:19]} 68. Ke4 {[%eval 2318,7] [%emt 0:00:20]}
R5d7 { [%eval -760,34] [%emt 0:00:05]} 69. f5 {[%eval 2442,7] [%emt 0:00:18]}
Rf7 { [%eval -921,44] [%emt 0:00:00]} 70. Ra1 {[%eval 2414,7] [%emt 0:00:19]}
Rdf8 { [%eval -1505,41] [%emt 0:00:00]} 71. Kf4 {[%eval 2376,7] [%emt
0:00:09]} Kc8 { [%eval -1335,35] [%emt 0:00:19]} 72. e4 {[%eval 2292,8] [%emt
0:00:00]} Kd7 { [%eval -942,34] [%emt 0:00:05]} 73. Re6 {[%eval 2329,7] [%emt
0:00:08]} Rh7 { [%eval -1188,32] [%emt 0:00:05]} 74. Ra7 {[%eval 2391,7] [%emt
0:00:05]} Rb8 { [%eval -1193,34] [%emt 0:00:02]} 75. Ra1 {[%eval 2372,7] [%emt
0:00:05]} Kd8 { [%eval -1095,26] [%emt 0:00:05]} 76. Rg1 {[%eval 2608,6] [%emt
0:00:04]} Kd7 { [%eval -905,28] [%emt 0:00:06]} 77. f3 {[%eval 2475,7] [%emt
0:00:05]} Rf8 { [%eval -1007,25] [%emt 0:00:05]} 78. Reg6 {[%eval 2455,6]
[%emt 0:00:03]} Rh4+ {[%eval -1458,26] [%emt 0:00:06]} 79. Ke5 {[%eval 2522,7]
[%emt 0:00:05]} Rhh8 {[%eval -1421,28] [%emt 0:00:05]} 80. Rg7+ {[%eval
2782,7] [%emt 0:00:03]} Kc8 {[%eval -2256,36] [%emt 0:00:02]} 81. Ra1 {[%eval
2752,7] [%emt 0:00:06]} Kb8 { [%eval -24600,31] [%emt 0:00:05]} 82. Rg2
{[%eval 2795,7] [%emt 0:00:02]} Re8+ {[%eval -1037,28] [%emt 0:00:05]} 83. Kd6
{[%eval 2747,8] [%emt 0:00:07]} Rd8+ {[%eval -1487,30] [%emt 0:00:06]} 84. Ke5
{[%eval 2709,8] [%emt 0:00:00]} Rhe8+ {[%eval -1755,27] [%emt 0:00:06]} 85.
Kf4 {[%eval 2485,8] [%emt 0:00:02]} Rd6 { [%eval -2425,34] [%emt 0:00:04]} 86.
Ra4 {[%eval 2754,6] [%emt 0:00:11]} c5 { [%eval -2431,28] [%emt 0:00:06]} 87.
dxc5 {[%eval 2871,7] [%emt 0:00:02] This is easily winning. But Leela refused
to push Pawn, refuse to put pressure and win more Pawns, refused to
simplicate, just she shuffled its Rooks. When 50 move rule was about to come
it moved the Pawns. This happened again until finally progress was made and
checkmate was inevitable even though Arasan made 2 strange moves shortening
it.} Rf6 {[%eval -3722,30] [%emt 0:00:03]} 88. Rga2 {[%eval 3222,7] [%emt
0:00:05]} Kc8 {[%eval -24600,28] [%emt 0:00:05]} 89. Rd2 {[%eval 3111,8] [%emt
0:00:03]} Kb8 {[%eval -24600,28] [%emt 0:00:02]} 90. Rda2 {[%eval 3032,7]
[%emt 0:00:07]} Kc8 {[%eval -24600,27] [%emt 0:00:05]} 91. Rd4 {[%eval 3071,8]
[%emt 0:00:01]} Kb8 {[%eval -24600,30] [%emt 0:00:04]} 92. Rd3 {[%eval 2966,7]
[%emt 0:00:09]} Rc6 {[%eval -24600,29] [%emt 0:00:05]} 93. Rda3 {[%eval
3062,7] [%emt 0:00:02]} Kc8 {[%eval -24600,28] [%emt 0:00:06]} 94. Rd2 {[%eval
2955,8] [%emt 0:00:01]} Kb8 {[%eval -24600,29] [%emt 0:00:05]} 95. Ra5 {[%eval
2866,7] [%emt 0:00:10]} Rf6 {[%eval -24600,30] [%emt 0:00:00]} 96. Ra1 {[%eval
3024,6] [%emt 0:00:04]} Rc6 {[%eval -24600,28] [%emt 0:00:05]} 97. Rda2
{[%eval 3134,7] [%emt 0:00:03]} Kc8 {[%eval -24600,27] [%emt 0:00:03]} 98. Rd1
{[%eval 2916,7] [%emt 0:00:04]} Kb8 {[%eval -24600,28] [%emt 0:00:05]} 99.
Rda1 {[%eval 2865,7] [%emt 0:00:07]} Kc8 {[%eval -4119,27] [%emt 0:00:06]}
100. Rd2 {[%eval 2701,7] [%emt 0:00:04]} Kb8 {[%eval -24600,29] [%emt
0:00:05]} 101. Rd3 {[%eval 2827,7] [%emt 0:00:05]} Rxc5 {[%eval -24600,30]
[%emt 0:00:05]} 102. Rda3 {[%eval 2827,7] [%emt 0:00:03]} Kc8 {[%eval
-24600,26] [%emt 0:00:03]} 103. Rd1 {[%eval 2693,8] [%emt 0:00:04]} Kb8
{[%eval -1450,24] [%emt 0:00:05]} 104. Rda1 {[%eval 2597,7] [%emt 0:00:07]}
Kc8 {[%eval -24600,28] [%emt 0:00:05] } 105. Rd3 {[%eval 2572,8] [%emt
0:00:04]} Kb8 {[%eval -24600,29] [%emt 0:00: 05]} 106. Rad1 {[%eval 2567,7]
[%emt 0:00:04]} Kc8 {[%eval -24600,30] [%emt 0: 00:05]} 107. Rd4 {[%eval
2787,6] [%emt 0:00:06]} Rb5 {[%eval -24600,26] [%emt 0:00:06]} 108. Rd6
{[%eval 2549,7] [%emt 0:00:04]} Rb3 {[%eval -24600,28] [%emt 0:00:01]} 109.
Rc1+ {[%eval 2663,6] [%emt 0:00:04]} Kb8 {[%eval -24600, 28] [%emt 0:00:05]}
110. Rh1 {[%eval 2622,7] [%emt 0:00:03]} Rc3 {[%eval -24600,29] [%emt
0:00:06]} 111. Rhd1 {[%eval 2675,6] [%emt 0:00:06]} Kc8 { [%eval -24600,27]
[%emt 0:00:05]} 112. R6d5 {[%eval 2809,6] [%emt 0:00:05]} Rb3 {[%eval
-1017,25] [%emt 0:00:05]} 113. Rd6 {[%eval 2533,7] [%emt 0:00:04]} Rf8 {[%eval
-24600,28] [%emt 0:00:05]} 114. Ra1 {[%eval 2604,7] [%emt 0:00:05]} Kb8
{[%eval -24600,30] [%emt 0:00:05]} 115. Rh1 {[%eval 2574,7] [%emt 0:00:04]}
Rb4 {[%eval -24600,28] [%emt 0:00:05]} 116. Rdh6 {[%eval 2519,6] [%emt
0:00:05]} Kc8 {[%eval -2946,28] [%emt 0:00:06]} 117. Rd6 {[%eval 2494,7] [%emt
0:00:03]} Rc4 {[%eval -24600,31] [%emt 0:00:05]} 118. Ra1 {[%eval 2618,7]
[%emt 0:00:04]} Kb8 {[%eval -24600,29] [%emt 0:00:06]} 119. Rad1 {[%eval
2525,7] [%emt 0:00:06] } Kc8 {[%eval -24600,31] [%emt 0:00:05]} 120. R6d3
{[%eval 2613,6] [%emt 0:00: 05]} Ra4 {[%eval -24600,26] [%emt 0:00:05]} 121.
Rd6 {[%eval 2727,6] [%emt 0: 00:04]} Ra3 {[%eval -24600,26] [%emt 0:00:05]}
122. e5 {[%eval 2740,6] [%emt 0: 00:05]} Rc3 {[%eval -24600,26] [%emt
0:00:05]} 123. R6d4 {[%eval 2792,6] [%emt 0:00:04]} Rc5 {[%eval -24600,27]
[%emt 0:00:05]} 124. Ra4 {[%eval 2732,7] [%emt 0:00:05]} Kb8 {[%eval
-24600,26] [%emt 0:00:05]} 125. Rad4 {[%eval 2623, 8] [%emt 0:00:04]} Kc8
{[%eval -24600,27] [%emt 0:00:05]} 126. f6 {[%eval 2659, 7] [%emt 0:00:04]}
Rc6 {[%eval -2310,25] [%emt 0:00:05]} 127. Kf5 {[%eval 2613, 7] [%emt
0:00:05]} Rxb6 {[%eval -24600,26] [%emt 0:00:00]} 128. f4 {[%eval 2427,7]
[%emt 0:00:04]} Rb5 {[%eval -2265,21] [%emt 0:00:05]} 129. Rd6 { [%eval
2433,6] [%emt 0:00:05]} Kc7 {[%eval -2601,22] [%emt 0:00:05]} 130. Ke6 {
[%eval 2468,6] [%emt 0:00:04]} Rc5 {[%eval -1964,23] [%emt 0:00:06]} 131. R6d3
{[%eval 2404,6] [%emt 0:00:05]} Re8+ {[%eval -1774,22] [%emt 0:00:06]} 132.
Kf5 {[%eval 2474,7] [%emt 0:00:03]} Rf8 {[%eval -2118,20] [%emt 0:00:05]} 133.
Rd4 {[%eval 2414,7] [%emt 0:00:06]} Rh8 {[%eval -1499,20] [%emt 0:00:05]} 134.
Rd7+ {[%eval 2539,6] [%emt 0:00:04]} Kb6 {[%eval -2271,22] [%emt 0:00:01]}
135. R7d6+ {[%eval 2560,6] [%emt 0:00:05]} Ka5 {[%eval -2121,23] [%emt
0:00:06]} 136. R6d2 {[%eval 2586,6] [%emt 0:00:04]} b5 {[%eval -1597,18] [%emt
0:00:06]} 137. Rd7 {[%eval 2452,6] [%emt 0:00:05]} b4 {[%eval -1636,19] [%emt
0:00:07]} 138. Rb7 {[%eval 2630,6] [%emt 0:00:03]} Ka6 {[%eval -3220,21] [%emt
0:00:07]} 139. Rxb4 {[%eval 2777,7] [%emt 0:00:02]} Ra5 {[%eval -2695,27]
[%emt 0:00:02]} 140. Rdb1 {[%eval 3039,6] [%emt 0:00:05]} Rh5+ {[%eval
-24600,25] [%emt 0:00: 05]} 141. Ke6 {[%eval 3002,7] [%emt 0:00:07]} Rh6
{[%eval -24600,28] [%emt 0: 00:04]} 142. Kf5 {[%eval 3006,6] [%emt 0:00:05]}
Rh7 {[%eval -24600,26] [%emt 0:00:04]} 143. R4b3 {[%eval 3014,6] [%emt
0:00:04]} Rf7 {[%eval -24600,27] [%emt 0:00:05]} 144. Ke6 {[%eval 3168,6]
[%emt 0:00:04]} Rd7 {[%eval -24600,24] [%emt 0:00:04] Arasan has had enough
and gives up.} (144... Rf8 {This would stand 12 more moves.}) 145. Kxd7
{[%eval 3954,6] [%emt 0:00:03]} Rxe5 {[%eval -24600, 34] [%emt 0:00:02] I
can't stand this anymore, says Arasan. Allowing a mate in 2.} 146. fxe5
{[%eval 7752,5] [%emt 0:00:03]} Ka5 {[%eval -24600,34] [%emt 0: 00:00]} 147.
Ra3# 1-0

  
  
**ROUND 18**  
Arasan surprised Komodo and managed to get a draw while the other top 3 won
easily. Shredder also won, but Leela facing with black the Wasp engine, after
a bad opening where most pieces to have been exchanged till move 20, didn't
have to play for anything and just drew.  
  
Ethereal won an imprortant game with black again Gull and is now very close to
entering top 8 after Andscacs drew with Fizbo. Fire had an important win after
a series of unsuccessful results and kept it well inside top 8.  
  
  
205 Fizbo vs Andscacs 1/2-1/2  
206 Fire vs Fritz 1-0  
207 Gull vs Ethereal 0-1  
208 Crafty vs Houdini 0-1  
209 Ivanhoe vs Booot 0-1  
210 Arasan vs Komodo 1/2-1/2  
211 Laser vs Xiphos 1/2-1/2  
212 Wasp vs Lco 1/2-1/2  
213 Nemorino vs Vajolet 1-0  
214 Texel vs Nirvana 1-0  
215 Pedone vs Stockfish 0-1  
216 Shredder vs Senpai 1-0  
  
  

[Event "CCCC 1: Rapid Rumble (15|5) Stage 1"] [Site "Chess.com"] [Date
"2018.09.06"] [Round "?"] [White "Wasp 3.25"] [Black "Lc0 17.11089"] [Result
"1/2-1/2"] [ECO "B50"] [WhiteElo "3041"] [BlackElo "3099"] [PlyCount "187"]
[EventDate "2018.??.??"] [EventType "rapid"] [TimeControl "900+5"] 1. e4
{[%eval 23,24] [%emt 0:00:25]} c5 {[%eval -16,13] [%emt 0:00:21]} 2. Nf3
{[%eval 22,25] [%emt 0:00:23]} d6 {[%eval -15,15] [%emt 0:00:12]} 3. Bc4 {
[%eval 32,24] [%emt 0:00:32]} Nf6 {[%eval -5,15] [%emt 0:00:21]} 4. Nc3 {
[%eval 22,24] [%emt 0:00:01]} e6 {[%eval -5,17] [%emt 0:00:09]} 5. O-O {
[%eval 22,23] [%emt 0:00:41]} Be7 {[%eval -2,13] [%emt 0:00:36]} 6. d4 {
[%eval 21,25] [%emt 0:00:24]} cxd4 {[%eval -4,16] [%emt 0:00:00]} 7. Nxd4 {
[%eval 21,24] [%emt 0:00:23]} Nc6 {[%eval -5,13] [%emt 0:00:37]} 8. Be3 {
[%eval 22,25] [%emt 0:00:25]} O-O {[%eval -7,14] [%emt 0:00:42]} 9. Bb3 {
[%eval 22,25] [%emt 0:00:00]} Bd7 {[%eval -20,12] [%emt 0:00:32]} 10. f4 {
[%eval 25,22] [%emt 0:00:27]} Qc7 {[%eval -23,15] [%emt 0:00:01]} 11. f5 {
[%eval 26,25] [%emt 0:00:32]} Nxd4 {[%eval -6,16] [%emt 0:00:19]} 12. Bxd4 {
[%eval 21,25] [%emt 0:00:06]} b5 {[%eval 5,15] [%emt 0:00:19]} 13. fxe6 {
[%eval 19,24] [%emt 0:00:28]} fxe6 {[%eval 2,18] [%emt 0:00:14]} 14. a3 {
[%eval 28,25] [%emt 0:00:13]} a5 {[%eval -2,24] [%emt 0:00:03]} 15. Qe2 {
[%eval 12,25] [%emt 0:00:29]} a4 {[%eval -7,18] [%emt 0:00:00]} 16. Nxb5 {
[%eval 15,26] [%emt 0:00:28]} Qc6 {[%eval -7,21] [%emt 0:00:20]} 17. Bc4 {
[%eval 13,27] [%emt 0:00:08]} Nxe4 {[%eval -12,21] [%emt 0:00:06]} 18. Nc3 {
[%eval 10,28] [%emt 0:00:21]} d5 {[%eval -11,26] [%emt 0:00:00]} 19. Nxe4 {
[%eval 10,28] [%emt 0:00:27]} Qxc4 {[%eval -6,26] [%emt 0:00:12]} 20. Qxc4 {
[%eval 12,30] [%emt 0:00:27]} dxc4 {[%eval -5,25] [%emt 0:00:00]} 21. Bc5 {
[%eval 12,30] [%emt 0:00:25]} Rxf1+ {[%eval -4,21] [%emt 0:00:00]} 22. Rxf1 {
[%eval 14,32] [%emt 0:00:24] An unfortunate opening. Most pieces are off and
nothing is left to play.} Bc6 {[%eval -1,23] [%emt 0:00:00]} 23. Bxe7 {[%eval
13,32] [%emt 0:00:23]} Bxe4 {[%eval -1,18] [%emt 0:00:00]} 24. Rf4 {[%eval 13,
30] [%emt 0:00:22]} Bxc2 {[%eval 0,20] [%emt 0:00:00]} 25. Rxc4 {[%eval 12,28]
[%emt 0:00:22] 25th move and this is already dead draw.} Bb3 {[%eval 1,23]
[%emt 0:00:00]} 26. Rc7 {[%eval 17,29] [%emt 0:00:21]} Ra5 {[%eval 0,25] [%emt
0:00:00]} 27. Bc5 {[%eval 18,26] [%emt 0:00:20]} h5 {[%eval -1,26] [%emt 0:00:
00]} 28. h4 {[%eval 16,28] [%emt 0:00:18]} Rb5 {[%eval -2,18] [%emt 0:00:22]}
29. Bd4 {[%eval 12,29] [%emt 0:00:00]} g5 {[%eval 16,18] [%emt 0:00:23]} 30.
Rg7+ {[%eval 11,31] [%emt 0:00:00]} Kf8 {[%eval 15,20] [%emt 0:00:11]} 31.
Rxg5 {[%eval 12,33] [%emt 0:00:08]} Rxg5 {[%eval 14,19] [%emt 0:00:02]} 32.
hxg5 { [%eval 13,34] [%emt 0:00:10]} Kf7 {[%eval 15,19] [%emt 0:00:00]} 33.
Be3 { [%eval 12,32] [%emt 0:00:17]} e5 {[%eval 15,12] [%emt 0:00:54]} 34. Kf1
{ [%eval 0,33] [%emt 0:00:24]} Bd5 {[%eval 25,11] [%emt 0:00:39]} 35. Kf2 {
[%eval 0,37] [%emt 0:00:18]} h4 {[%eval 24,12] [%emt 0:00:27]} 36. Bc5 {
[%eval 0,33] [%emt 0:00:17]} Kg6 {[%eval 26,12] [%emt 0:00:22]} 37. Be7 {
[%eval 0,35] [%emt 0:00:17]} Bc6 {[%eval 14,12] [%emt 0:00:43]} 38. Bd8 {
[%eval 0,35] [%emt 0:00:00]} Bd7 {[%eval 14,12] [%emt 0:00:44]} 39. Bf6 {
[%eval 3,31] [%emt 0:00:17]} Kf5 {[%eval 13,13] [%emt 0:00:21]} 40. Be7 {
[%eval 3,32] [%emt 0:00:17]} Kg6 {[%eval 14,14] [%emt 0:00:19]} 41. Kf3 {
[%eval 0,35] [%emt 0:00:16]} Bc8 {[%eval 13,16] [%emt 0:00:24]} 42. Bd6 {
[%eval 0,32] [%emt 0:00:19]} Kf5 {[%eval 13,11] [%emt 0:00:32]} 43. Kf2 {
[%eval 0,35] [%emt 0:00:00]} Kxg5 {[%eval 11,11] [%emt 0:00:36]} 44. Bxe5 {
[%eval 8,32] [%emt 0:00:16]} Kg4 {[%eval 10,8] [%emt 0:00:36]} 45. Bc3 {
[%eval 7,36] [%emt 0:00:16]} Bb7 {[%eval 9,9] [%emt 0:00:30]} 46. Bf6 {[%eval
7,37] [%emt 0:00:16]} Bc6 {[%eval 11,8] [%emt 0:00:32]} 47. Bh8 {[%eval 7,38]
[%emt 0:00:15]} Bd7 {[%eval 11,8] [%emt 0:00:26]} 48. Be5 {[%eval 7,38] [%emt
0:00:15]} Be6 {[%eval 12,8] [%emt 0:00:32]} 49. Bd6 {[%eval 7,38] [%emt 0:00:
15]} Bd7 {[%eval 11,8] [%emt 0:00:27]} 50. Be5 {[%eval 7,39] [%emt 0:00:14]}
Be6 {[%eval 11,8] [%emt 0:00:25]} 51. Bd4 {[%eval 7,38] [%emt 0:00:14]} Bd5 {
[%eval 11,7] [%emt 0:00:24]} 52. Bf6 {[%eval 7,39] [%emt 0:00:13]} Bc6 {
[%eval 12,8] [%emt 0:00:21]} 53. Bd4 {[%eval 7,39] [%emt 0:00:13]} Bd5 {
[%eval 11,8] [%emt 0:00:20]} 54. Bc5 {[%eval 7,40] [%emt 0:00:13]} Be6 {
[%eval 11,7] [%emt 0:00:24]} 55. Be3 {[%eval 7,38] [%emt 0:00:12]} Bd7 {
[%eval 12,8] [%emt 0:00:21]} 56. Bd4 {[%eval 7,39] [%emt 0:00:12]} Be6 {
[%eval 11,7] [%emt 0:00:20]} 57. Bf6 {[%eval 7,39] [%emt 0:00:00]} Bc8 {
[%eval 12,8] [%emt 0:00:20]} 58. Bd4 {[%eval 7,39] [%emt 0:00:12]} Be6 {
[%eval 11,7] [%emt 0:00:17]} 59. Bf6 {[%eval 7,39] [%emt 0:00:12]} Bc8 {
[%eval 11,7] [%emt 0:00:17]} 60. Bc3 {[%eval 7,39] [%emt 0:00:11]} Bb7 {
[%eval 11,9] [%emt 0:00:06]} 61. Bd2 {[%eval 7,38] [%emt 0:00:11]} Bc6 {
[%eval 11,8] [%emt 0:00:15]} 62. Be3 {[%eval 7,36] [%emt 0:00:11]} Bd7 {
[%eval 12,8] [%emt 0:00:16]} 63. Bc5 {[%eval 7,37] [%emt 0:00:00]} Be6 {
[%eval 11,7] [%emt 0:00:18]} 64. Bd6 {[%eval 7,39] [%emt 0:00:00]} Bc8 {
[%eval 12,7] [%emt 0:00:11]} 65. Bb4 {[%eval 7,36] [%emt 0:00:05]} Bd7 {
[%eval 10,7] [%emt 0:00:04]} 66. Bd6 {[%eval 7,37] [%emt 0:00:05]} Bc6 {
[%eval 13,7] [%emt 0:00:05]} 67. Bh2 {[%eval 7,36] [%emt 0:00:04]} Bb7 {
[%eval 16,7] [%emt 0:00:04]} 68. Be5 {[%eval 7,35] [%emt 0:00:04]} Bc6 {
[%eval 12,7] [%emt 0:00:04]} 69. Bd6 {[%eval 7,37] [%emt 0:00:04]} Bb7 {
[%eval 13,7] [%emt 0:00:05]} 70. Bc7 {[%eval 7,36] [%emt 0:00:00]} Bc6 {
[%eval 13,7] [%emt 0:00:04]} 71. Be5 {[%eval 7,36] [%emt 0:00:04]} Kh5 {
[%eval 14,7] [%emt 0:00:05]} 72. Bd4 {[%eval 7,35] [%emt 0:00:04]} Kg4 {
[%eval 13,7] [%emt 0:00:04]} 73. Bf6 {[%eval 7,38] [%emt 0:00:05]} Bb7 {
[%eval 13,7] [%emt 0:00:05]} 74. Bc3 {[%eval 7,34] [%emt 0:00:04]} Bc6 {
[%eval 12,7] [%emt 0:00:04]} 75. Bd2 {[%eval 7,36] [%emt 0:00:00]} Bb7 {
[%eval 12,7] [%emt 0:00:05]} 76. Bc3 {[%eval 7,38] [%emt 0:00:04]} Bc6 {
[%eval 11,7] [%emt 0:00:04]} 77. Be5 {[%eval 7,36] [%emt 0:00:00]} Kh5 {
[%eval 13,7] [%emt 0:00:05]} 78. Bb8 {[%eval 7,36] [%emt 0:00:04]} Bd5 {
[%eval 15,7] [%emt 0:00:05]} 79. Bd6 {[%eval 7,35] [%emt 0:00:04]} Kg4 {
[%eval 12,7] [%emt 0:00:04]} 80. Be7 {[%eval 7,37] [%emt 0:00:04]} Bc6 {
[%eval 12,7] [%emt 0:00:05]} 81. Bc5 {[%eval 7,35] [%emt 0:00:04]} Bd7 {
[%eval 12,7] [%emt 0:00:05]} 82. Bd6 {[%eval 7,37] [%emt 0:00:04]} Kh5 {
[%eval 11,7] [%emt 0:00:04]} 83. Bc5 {[%eval 7,33] [%emt 0:00:04]} Bc8 {
[%eval 11,7] [%emt 0:00:04]} 84. Bd4 {[%eval 7,32] [%emt 0:00:04]} Bd7 {
[%eval 11,7] [%emt 0:00:04]} 85. Bc3 {[%eval 7,34] [%emt 0:00:04]} Bc6 {
[%eval 9,7] [%emt 0:00:04]} 86. Be5 {[%eval 7,35] [%emt 0:00:05]} Kg4 {[%eval
11,7] [%emt 0:00:05]} 87. Bd6 {[%eval 7,34] [%emt 0:00:00]} Kh5 {[%eval 9,7]
[%emt 0:00:05]} 88. Bf4 {[%eval 7,33] [%emt 0:00:04]} Bb7 {[%eval 10,7] [%emt
0:00:04]} 89. Bc7 {[%eval 7,36] [%emt 0:00:04]} Kg4 {[%eval 8,7] [%emt
0:00:04] } 90. Kg1 {[%eval 0,36] [%emt 0:00:00]} Bd5 {[%eval 8,7] [%emt
0:00:05]} 91. Kf2 {[%eval 0,33] [%emt 0:00:04]} Bf7 {[%eval 5,6] [%emt
0:00:05]} 92. Bd6 { [%eval 0,38] [%emt 0:00:04]} Be6 {[%eval 3,5] [%emt
0:00:04]} 93. Bc7 {[%eval 0,39] [%emt 0:00:04]} Bf7 {[%eval 0,3] [%emt
0:00:04]} 94. Bh2 1/2-1/2

  
  
**ROUND 19**  
Andscacs had a draw with Fire and gave Ethereal a chance to get passed it, but
Ethereal didn't took the chance as it drew Fizbo with white so now it's tied
for 8th place. In an unfortunate opening for Ethereal if found itself in a
dubious position and didn't manage anything out of it.  
All top 5 engines won their games rather easily except Komodo that faced some
problems but found its way. It was really magic the way Komodo won as after a
very strong Wasp play when they reached an opposite color Bishop's ending and
having a Pawn less, it managed to create enough counterplay in both sides and
with extremely strong tactical moves it outplayed Wasp creating a King attack
so it has won.  
  
Leela in a QGD Slav opening played the interesting 9.Bxb5 instead of the
normal 9.Ne4 and after several inaccuracies of Texel we reached a position
where Texel's King was in a bad position and Leela had a Rook for 2 pieces
Knight plus Bishop. Because of the bad black's King position white was
standing better but not won. Texel made many inaccuracies and mistakes then
and white's position got better with black King to be very open under heavy
fire. Leela misplayed several moves by not playing the best move that would
kill black quickly, but found a way to a won endgame with Rook plus 3 Pawns
versus the Bishop and Knight with one Pawn of black. Her technique on that
endgame was excellent and won easily.  
  
  
217 Andscacs vs Fire 1/2-1/2  
218 Ethereal vs Fizbo 1/2-1/2  
219 Fritz vs Crafty 1-0  
220 Booot vs Gull 1/2-1/2  
221 Houdini vs Arasan 1-0  
222 Xiphos vs Ivanhoe 0-1  
223 Komodo vs Wasp 1-0  
224 Vajolet vs Laser 1-0  
225 Lco vs Texel 1-0  
226 Stockfish vs Nemorino 1-0  
227 Nirvana vs Shredder 0-1  
228 Senpai vs Pedone 0-1  
  
  

[Event "CCCC 1: Rapid Rumble (15|5) Stage 1"] [Site "Chess.com"] [Date
"2018.09.07"] [Round "?"] [White "Lc0 17.11089"] [Black "Texel 1.07"] [Result
"1-0"] [ECO "D11"] [WhiteElo "3300"] [BlackElo "3439"] [PlyCount "183"]
[EventDate "2018.??.??"] [EventType "rapid"] [TimeControl "900+5"] 1. d4
{[%eval 23,13] [%emt 0:00:27]} d5 {[%eval -24,25] [%emt 0:00:47]} 2. c4 {
[%eval 25,16] [%emt 0:00:07]} c6 {[%eval -25,25] [%emt 0:00:35]} 3. Nf3 {
[%eval 28,14] [%emt 0:00:29]} dxc4 {[%eval -34,25] [%emt 0:00:45]} 4. e3 {
[%eval 66,14] [%emt 0:00:20]} Be6 {[%eval -42,26] [%emt 0:00:46]} 5. Nbd2 {
[%eval 71,16] [%emt 0:00:14]} b5 {[%eval -47,25] [%emt 0:00:41]} 6. a4 {
[%eval 104,18] [%emt 0:00:19]} a6 {[%eval -44,26] [%emt 0:00:20]} 7. axb5 {
[%eval 106,24] [%emt 0:00:15]} cxb5 {[%eval -53,26] [%emt 0:00:21]} 8. b3 {
[%eval 110,36] [%emt 0:00:00]} c3 {[%eval -52,28] [%emt 0:00:36]} 9. Bxb5+ $5
{ [%eval 111,40] [%emt 0:00:00] Wow. Instead of normal Ne4 Leela plays
something bold giving a Knight and a Bishop for a Rook with initiative and
attack to the still in the center black King.} (9. Ne4 Bd5 (9... Nf6 $6 10.
Nxc3 $16) 10. Nxc3 Bb7 11. Bd3 Nf6 12. Ba3 Nbd7 13. O-O e6 14. Bxf8 Nxf8 15.
Qb1 N8d7 { With equal game.}) 9... axb5 {[%eval -27,27] [%emt 0:00:36]} 10.
Rxa8 {[%eval 112,32] [%emt 0:00:00]} cxd2+ {[%eval -13,27] [%emt 0:00:29]}
(10... Bd5 11. Ra1 Nf6 (11... cxd2+ 12. Bxd2 {Same with main line.}) 12. Nf1
b4 13. Ng3 e6 { With very complicated game.}) 11. Bxd2 {[%eval 138,22] [%emt
0:00:18]} Bd5 { [%eval -22,28] [%emt 0:00:14]} 12. Ra1 {[%eval 148,18] [%emt
0:00:01]} f6 $2 { [%eval -38,26] [%emt 0:00:50] A very bad move. It's
inexplicable why Texel prefered this very weak move.} (12... e6) (12... Nf6)
13. Qe2 {[%eval 136,31] [%emt 0:00:07]} Qd7 {[%eval -32,28] [%emt 0:00:31]}
14. Ra5 {[%eval 141,26] [%emt 0:00:00]} Nc6 {[%eval -33,28] [%emt 0:00:28]}
15. Ra8+ {[%eval 145,19] [%emt 0:00:00]} Nd8 {[%eval -40,29]} 16. Rb8 {[%eval
135,21] [%emt 0:00:19]} e6 {[%eval -40,29] [%emt 0:00:06]} 17. Ba5 {[%eval
139,22] [%emt 0:00:06]} Be7 { [%eval -64,28] [%emt 0:00:19]} 18. O-O {[%eval
140,26] [%emt 0:00:01]} Kf7 $2 { [%eval -62,27] [%emt 0:00:35] Texel is too
impatient getting its King out of Rook's way but this is a mistake. It now
puts him in danger for the whole game. } (18... Nh6 19. Qxb5 Qxb5 20. Rxb5 Nb7
21. Ra1 {And black is fine.}) 19. e4 $1 {[%eval 174,20] [%emt 0:00:22] Leela
does not miss the chance.} Bb7 $2 { [%eval -99,24] [%emt 0:00:31] Another
mistake. Texel can't really believe it would hold with so many mistakes.}
(19... Bxb3 20. Rxb5 Ba4 21. Rbb1 $16) 20. d5 $1 { [%eval 218,29] [%emt
0:00:21] Opening the position with the King in the center and many black's
pieces sleeping.} exd5 {[%eval -99,24] [%emt 0:00:00]} 21. e5 {[%eval 216,31]
[%emt 0:00:06]} Ne6 {[%eval -155,27] [%emt 0:00:16]} 22. exf6 { [%eval 211,38]
[%emt 0:00:00]} gxf6 {[%eval -155,26] [%emt 0:00:30]} 23. Nh4 { [%eval 220,30]
[%emt 0:00:00]} Ng7 {[%eval -182,26] [%emt 0:00:17]} (23... h5 24. Re1 Nf4
$16) 24. Rc1 {[%eval 256,20] [%emt 0:00:24]} Bc6 {[%eval -177,28] [%emt
0:00:22]} 25. Qf3 {[%eval 306,25] [%emt 0:00:02]} f5 {[%eval -220,26] [%emt
0:00:15]} 26. Rb6 {[%eval 337,28] [%emt 0:00:20]} (26. g3 $1 Bxh4 27. gxh4 h5
28. Bd2 Rh7 29. Rb6 Ne7 30. Bb4 {[%csl Rc6]} d4 31. Rcxc6 Nxc6 32. Rxc6 Ne8
33. Rb6 Kg8 34. Kf1 Rf7 $18) 26... Bxh4 {[%eval -210,27] [%emt 0:00:04]} 27.
Rcxc6 {[%eval 338,32] [%emt 0:00:06]} Ne7 {[%eval -240,26] [%emt 0:00:11]} 28.
Rd6 {[%eval 344,28] [%emt 0:00:02]} Qa7 {[%eval -220,26] [%emt 0:00:14]} 29.
Ra6 {[%eval 354,31] [%emt 0:00:00]} Qd4 {[%eval -247,26] [%emt 0:00:46]} 30.
g3 {[%eval 366,30] [%emt 0:00:00]} Rg8 {[%eval -255,26] [%emt 0:00:16]} 31.
Bc3 $6 {[%eval 366,31] [%emt 0:00:00] Leela misses the way to a far easier
win. } (31. Rdb6 Bg5 (31... Nc8 32. Rxb5 Be7 33. Rxd5 Qe4 34. Qd1 $18) 32. h4
Bxh4 33. Bc3 Qe4 34. Qxe4 fxe4 35. gxh4 Ngf5+ 36. Kf1 $18) 31... Qe4 {[%eval
-105, 24] [%emt 0:00:17]} 32. Qd1 {[%eval 369,32] [%emt 0:00:00]} f4 {[%eval
-127,25] [%emt 0:00:15]} 33. Bxg7 {[%eval 369,27] [%emt 0:00:00]} Rxg7 {[%eval
-125,25] [%emt 0:00:15]} 34. Qh5+ {[%eval 367,28] [%emt 0:00:00]} Ng6 {[%eval
-125,26] [%emt 0:00:14]} 35. Qxd5+ {[%eval 368,27] [%emt 0:00:00]} Qxd5
{[%eval -112,28] [%emt 0:00:14]} 36. Rxd5 {[%eval 369,21] [%emt 0:00:00]} fxg3
{[%eval -114,28] [%emt 0:00:15]} 37. hxg3 {[%eval 380,21] [%emt 0:00:08]} Ne7
{[%eval -114,28] [%emt 0:00:05]} 38. Rxb5 {[%eval 388,18] [%emt 0:00:04]} Bf6
{[%eval -122,27] [%emt 0:00:09] White stands a lot better here since the
outside Pawn in b file is very difficult to defend along with advancing of the
f-Pawn and the double Rook threats. The side with double Rooks against one
opponent Rook usually means this side can easily force one Rook exchange for
the opponent's and then black will have to deal with b and f Pawn with the
help of white King so this must be won for white.} 39. Rh5 {[%eval 397,15]
[%emt 0:00:04]} Kg6 {[%eval -106,27] [%emt 0:00:08]} 40. Rha5 {[%eval 408,17]
[%emt 0:00:01]} Kf7 {[%eval -130,25] [%emt 0:00:20]} 41. Kg2 {[%eval 431,16]
[%emt 0:00:18]} Rg8 {[%eval -130,25] [%emt 0:00:00]} 42. Ra8 {[%eval 451,15]
[%emt 0:00:16]} Rg7 {[%eval -130,25] [%emt 0:00:00]} 43. Rc5 {[%eval 462,16]
[%emt 0:00:12]} Rg6 {[%eval -163,26] [%emt 0:00:28]} 44. Rh5 {[%eval 549,14]
[%emt 0:00:26]} h6 {[%eval -193,27] [%emt 0:00:14]} 45. Ra6 {[%eval 561,15]
[%emt 0:00:26]} Bg5 {[%eval -161,25] [%emt 0:00:08]} 46. Rxg6 {[%eval 554,16]
[%emt 0:00:07]} Kxg6 { [%eval -215,26] [%emt 0:00:04]} 47. Rh1 {[%eval 550,14]
[%emt 0:00:05] And now white is winning here as Stockfish with 7 piece sygyzy
tablebases say hitting a TB win score. Leela though in CCCC has no tablebases
at all(even though it supports it) but her technique here was stable brilliant
forcing black step by step to the inevitable.} Nc6 {[%eval -214,27] [%emt
0:00:06]} 48. f4 {[%eval 545,14] [%emt 0:00:42]} Be7 {[%eval -223,26] [%emt
0:00:13]} 49. Rc1 {[%eval 542,15] [%emt 0:00:48]} Nb4 {[%eval -228,25] [%emt
0:00:12]} 50. Kf3 {[%eval 626,12] [%emt 0:00:25]} Kf7 {[%eval -243,25] [%emt
0:00:09]} 51. Rh1 {[%eval 653,12] [%emt 0:00:22]} Kg6 {[%eval -224,26] [%emt
0:00:11]} 52. g4 {[%eval 664,13] [%emt 0:00:10]} Bf8 {[%eval -224,26] [%emt
0:00:00]} 53. Rh5 {[%eval 707,11] [%emt 0:00:23]} Kg7 {[%eval -278,24] [%emt
0:00:11]} 54. Ke4 {[%eval 732,11] [%emt 0:00:27]} Kf7 {[%eval -256,25] [%emt
0:00:09]} 55. Rb5 {[%eval 734,11] [%emt 0:00:37]} Nc2 {[%eval -324,25] [%emt
0:00:09]} 56. Rf5+ {[%eval 733,12] [%emt 0:00:30]} Kg7 {[%eval -314,26] [%emt
0:00:20]} 57. Ra5 {[%eval 733,12] [%emt 0:00:40]} Kg6 {[%eval -276,27] [%emt
0:00:09]} 58. Ra8 {[%eval 738,11] [%emt 0:00:42]} Kf7 {[%eval -276,27] [%emt
0:00:00]} 59. Ra7+ {[%eval 732,12] [%emt 0:00:25]} Kf6 {[%eval -333,28] [%emt
0:00:09]} 60. Ra6+ {[%eval 733,12] [%emt 0:00:40]} Kf7 {[%eval -333,28] [%emt
0:00:00]} 61. Rb6 {[%eval 733,12] [%emt 0:00:13]} Nb4 {[%eval -399,27] [%emt
0:00:33]} 62. Kf5 {[%eval 771,18] [%emt 0:00:17]} Nd3 {[%eval -399,27] [%emt
0:00:02]} 63. Rc6 {[%eval 877,13] [%emt 0:00:19]} Kg7 {[%eval -491,28] [%emt
0:00:03]} 64. Rc7+ {[%eval 870,13] [%emt 0:00:34]} Kg8 {[%eval -491,28] [%emt
0:00:00]} 65. Rb7 {[%eval 870,13] [%emt 0:00:09]} Ba3 {[%eval -548,27] [%emt
0:00:29]} 66. Rd7 {[%eval 1162,11] [%emt 0:00:16]} Nf2 {[%eval -548,27] [%emt
0:00:00]} 67. Rd2 $1 { [%eval 1269,10] [%emt 0:00:22][%csl Rd1,Rd3,Re4,Gh3]}
Nh3 {[%eval -1146,26] [%emt 0:00:07]} 68. Rd4 {[%eval 1291,11] [%emt
0:00:04][%csl Rf4][%cal Gf5g6]} Ng1 {[%eval -1137,23] [%emt 0:00:08]} 69. Kg6
{[%eval 1337,11] [%emt 0:00:09]} Kf8 {[%eval -1137,23] [%emt 0:00:00]} 70. Rc4
{[%eval 1376,10] [%emt 0:00:12]} Ne2 {[%eval -1137,23] [%emt 0:00:00]} 71. f5
{[%eval 1566,11] [%emt 0:00:16]} Bd6 {[%eval -31882,20] [%emt 0:00:08]} 72. f6
{[%eval 1699,13] [%emt 0:00:14]} Nf4+ {[%eval -31837,20] [%emt 0:00:08]} 73.
Kf5 {[%eval 1622,12] [%emt 0:00:03] } Nh3 {[%eval -31900,19] [%emt 0:00:04]}
74. Ke6 {[%eval 2095,9] [%emt 0:00:15] } Ng5+ {[%eval -31900,19] [%emt
0:00:00]} 75. Kxd6 {[%eval 2103,9] [%emt 0:00: 11]} Kf7 {[%eval -31900,19]
[%emt 0:00:00]} 76. Ke5 {[%eval 2079,9] [%emt 0:00: 16]} Kg6 {[%eval
-32413,20] [%emt 0:00:08]} 77. b4 {[%eval 2095,8] [%emt 0:00: 19]} Nf7+
{[%eval -32681,19] [%emt 0:00:08]} 78. Ke6 {[%eval 2100,9] [%emt 0: 00:20]}
Ng5+ {[%eval -32681,19] [%emt 0:00:00]} 79. Ke7 {[%eval 2125,8] [%emt
0:00:21]} Nh7 {[%eval -32681,19] [%emt 0:00:00]} 80. f7 {[%eval 2198,9] [%emt
0:00:11]} h5 {[%eval -32681,19] [%emt 0:00:00]} 81. gxh5+ {[%eval 2301,8]
[%emt 0:00:12]} Kf5 {[%eval -32747,21] [%emt 0:00:05]} 82. Kd6 {[%eval 2377,8]
[%emt 0:00:12]} Kg5 {[%eval -32747,19] [%emt 0:00:08]} 83. Ke5 {[%eval 2474,8]
[%emt 0:00:12]} Kxh5 {[%eval -32747,21] [%emt 0:00:07]} 84. Kf5 {[%eval
2672,9] [%emt 0:00:12]} Nf8 {[%eval -32751,17] [%emt 0:00:00]} 85. Rc6 {[%eval
2711,8] [%emt 0:00:26]} Nd7 {[%eval -32753,15] [%emt 0:00:00]} 86. b5 {[%eval
2947,7] [%emt 0:00:23]} Nf8 {[%eval -32753,15] [%emt 0:00:00]} 87. b6 {[%eval
3192,8] [%emt 0:00:11]} Nd7 {[%eval -32753,15] [%emt 0:00:00]} 88. b7 {[%eval
3715,8] [%emt 0:00:13]} Kh4 {[%eval -32753,15] [%emt 0:00:00]} 89. Rc3 {[%eval
4511,8] [%emt 0:00:09]} Nf6 {[%eval -32753,15] [%emt 0:00:00]} 90. b8=Q
{[%eval 5822,5] [%emt 0:00:10]} Ng4 {[%eval -32753,15] [%emt 0:00:00]} 91.
Qh8+ {[%eval 7913,4] [%emt 0:00:08]} Nh6+ {[%eval -32753,15] [%emt 0:00:00]}
92. Qxh6# 1-0

  
  
  
_**Standings after round 19 out of 46.**_ First 8 go to next stage.  
  
| Player | Score  | (SB)  | H | S | K | S | L | B | F | A | E | X | F | T | P
| V | A | F | G | I | W | L | N | S | C | N | +/-/=  
---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---  
1: | Houdini 6.03 | 16.0/19 | 133.50  | X | = | = | . | = | = | 1 | 1 | = | 1
| 1 | . | . | = | 1 | 1 | 1 | 1 | . | 1 | 1 | 1 | 1 | 1| (+13 -0 =6)  
2: | Stockfish 220818 | 15.0/19 | 133.00  | = | X | = | = | = | 1 | = | = | 1
| = | 1 | 1 | 1 | 1 | = | . | . | . | 1 | . | 1 | 1 | 1 | 1| (+11 -0 =8)  
3: | Komodo 2118.00 | 14.5/19 | 122.00  | = | = | X | . | = | 1 | 1 | = | = |
= | = | . | . | 1 | = | 1 | = | 1 | 1 | 1 | . | 1 | 1 | 1| (+10 -0 =9)  
4: | Shredder 13 | 14.5/19 | 115.00  | . | = | . | X | . | = | 1 | 1 | = | = |
. | 1 | = | = | 1 | = | 1 | 1 | = | = | 1 | 1 | 1 | 1| (+10 -0 =9)  
5: | **Lc0 17.11089**|  14.0/19 | 126.50  | = | = | = | . | X | = | = | = | 1
| 1 | 1 | 1 | . | 1 | 1 | = | 1 | 1 | = | . | . | = | = | 1| (+9 -0 =10)  
6: | Booot 6.3.1 | 12.5/19 | 95.50  | = | 0 | 0 | = | = | X | = | . | . | . |
= | 1 | = | = | = | . | = | 1 | 1 | 1 | 1 | 1 | 1 | 1| (+8 -2 =9)  
7: | Fire 7.1 | 12.0/19 | 100.00  | 0 | = | 0 | 0 | = | = | X | = | 1 | = | 1
| . | 1 | = | . | = | 1 | = | . | 1 | 1 | 1 | . | 1| (+8 -3 =8)  
8: | Andscacs 0.94 | 11.0/19 | 86.75  | 0 | = | = | 0 | = | . | = | X | . | 0
| 0 | = | = | 1 | . | = | 1 | = | 1 | 1 | 1 | 1 | . | 1| (+7 -4 =8)  
9: | Ethereal 10.88 | 11.0/19 | 82.25  | = | 0 | = | = | 0 | . | 0 | . | X | .
| = | 0 | = | . | 1 | = | 1 | 1 | = | 1 | 1 | = | 1 | 1| (+7 -4 =8)  
10: | Xiphos 0.3.17 | 10.0/19 | 78.75  | 0 | = | = | = | 0 | . | = | 1 | . | X
| = | = | = | 0 | = | . | . | 0 | = | = | 1 | 1 | 1 | 1| (+5 -4 =10)  
11: | Fritz 16.10 | 10.0/19 | 78.25  | 0 | 0 | = | . | 0 | = | 0 | 1 | = | = |
X | . | 1 | 1 | . | = | = | = | . | = | = | = | 1 | 1| (+5 -4 =10)  
12: | Texel 1.07 | 10.0/19 | 67.50  | . | 0 | . | 0 | 0 | 0 | . | = | 1 | = |
. | X | = | = | = | = | = | = | = | = | 1 | 1 | 1 | 1| (+5 -4 =10)  
13: | Pedone 1.8 | 9.5 / 19 | 74.75  | . | 0 | . | = | . | = | 0 | = | = | = |
0 | = | X | = | = | 1 | = | = | = | = | = | 1 | 1 | .| (+3 -3 =13)  
14: | Vajolet 2.6 | 9.0 / 19 | 69.50  | = | 0 | 0 | = | 0 | = | = | 0 | . | 1
| 0 | = | = | X | = | . | . | . | = | 1 | 0 | 1 | 1 | 1| (+5 -6 =8)  
15: | Arasan CCCC-2018 | 8.0 / 19 | 65.75  | 0 | = | = | 0 | 0 | = | . | . | 0
| = | . | = | = | = | X | 1 | = | 0 | 1 | = | 0 | = | . | 1| (+3 -6 =10)  
16: | Fizbo 1.9 | 8.0 / 19 | 64.25  | 0 | . | 0 | = | = | . | = | = | = | . |
= | = | 0 | . | 0 | X | = | = | = | = | = | = | 1 | =| (+1 -4 =14)  
17: | Gull 3.syz | 8.0 / 19 | 60.50  | 0 | . | = | 0 | 0 | = | 0 | 0 | 0 | . |
= | = | = | . | = | = | X | 1 | 1 | = | = | . | 1 | =| (+3 -6 =10)  
18: | Ivanhoe 999946h | 7.5 / 19 | 62.75  | 0 | . | 0 | 0 | 0 | 0 | = | = | 0
| 1 | = | = | = | . | 1 | = | 0 | X | 1 | 1 | 0 | . | = | .| (+4 -8 =7)  
19: | Wasp 3.25 | 6.5 / 19 | 53.75  | . | 0 | 0 | = | = | 0 | . | 0 | = | = |
. | = | = | = | 0 | = | 0 | 0 | X | = | = | 1 | . | =| (+1 -7 =11)  
20: | Laser 1.6 | 6.5 / 19 | 51.25  | 0 | . | 0 | = | . | 0 | 0 | 0 | 0 | = |
= | = | = | 0 | = | = | = | 0 | = | X | 1 | . | 1 | .| (+2 -8 =9)  
21: | Nemorino 5.00 | 6.0 / 19 | 47.00  | 0 | 0 | . | 0 | . | 0 | 0 | 0 | 0 |
0 | = | 0 | = | 1 | 1 | = | = | 1 | = | 0 | X | . | = | .| (+3 -10 =6)  
22: | Senpai 2.0 | 3.5 / 19 | 28.00  | 0 | 0 | 0 | 0 | = | 0 | 0 | 0 | = | 0 |
= | 0 | 0 | 0 | = | = | . | . | 0 | . | . | X | = | =| (+0 -12 =7)  
23: | Crafty 25.2 | 3.0 / 19 | 17.50  | 0 | 0 | 0 | 0 | = | 0 | . | . | 0 | 0
| 0 | 0 | 0 | 0 | . | 0 | 0 | = | . | 0 | = | = | X | 1| (+1 -14 =4)  
24: | Nirvana 2.4 | 2.0 / 19 | 13.00  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0
| 0 | 0 | . | 0 | 0 | = | = | . | = | . | . | = | 0 | X| (+0 -15 =4)  
  
  
  
 **Rating performance so far after round 19:**  

    
    
    Rank Name               Elo    +    - games score oppo. draws   
       1 Houdini 6.03       497  146  124    19   84%   256   32%   
       2 Stockfish 220818   471  133  119    19   79%   270   42%   
       3 Komodo 2118.00     437  129  117    19   76%   261   47%   
       4 Shredder 13        395  128  115    19   76%   234   47%   
       5 Lc0 17.11089       394  121  113    19   71%   267   58%   
       6 Fire 7.1           371  121  115    19   63%   283   42%   
       7 Booot 6.3.1        360  121  114    19   66%   261   47%   
       8 Andscacs 0.94      330  119  116    19   58%   273   42%   
       9 Ethereal 10.88     308  121  118    19   58%   258   42%   
      10 Xiphos 0.3.17      293  116  115    19   53%   265   53%   
      11 Fritz 16.10        280  116  115    19   53%   269   53%   
      12 Vajolet 2.6        269  118  119    19   47%   274   42%   
      13 Pedone 1.8         257  108  108    19   50%   256   68%   
      14 Texel 1.07         254  113  112    19   53%   243   53%   
      15 Gull 3.syz         239  113  115    19   45%   268   58%   
      16 Arasan CCCC-2018   232  114  117    19   42%   274   53%   
      17 Ivanhoe 999946h    214  117  122    19   39%   285   37%   
      18 Fizbo 1.9          212  108  111    19   42%   255   74%   
      19 Laser 1.6          188  113  119    19   34%   280   47%   
      20 Wasp 3.25          180  112  117    19   34%   268   58%   
      21 Nemorino 5.00      158  119  129    19   32%   283   32%   
      22 Senpai 2.0          84  122  140    19   18%   293   37%   
      23 Crafty 25.2         32  130  157    19   16%   279   21%   
      24 Nirvana 2.4          0  136  171    19   11%   297   21%   
    

  
****This is with Lc0 - Gull game counted as draw.** Since this is a rating
list the real result should be counted, as the CCCC result by their rules
because gull crashed, was 1-0 in favor of Lc0.  
  
  
Next rounds:  
 **  
ROUND 20**  
229 Ethereal vs Andscacs 1-0  
230 Crafty vs Fire 0-1  
231 Fizbo vs Booot  
232 Arasan vs Fritz  
233 Gull vs Xiphos  
234 Wasp vs Houdini  
235 Ivanhoe vs Vajolet  
236 Texel vs Komodo  
237 Laser vs Stockfish  
238 Shredder vs **Lco**  
239 Nemorino vs Senpai  
240 Pedone vs Nirvana  
  
 **ROUND 21**  
241 Andscacs vs Crafty  
242 Booot vs Ethereal  
243 Fire vs Arasan  
244 Xiphos vs Fizbo  
245 Fritz vs Wasp  
246 Vajolet vs Gull  
247 Houdini vs Texel  
248 Stockfish vs Ivanhoe  
249 Komodo vs Shredder  
250 Senpai vs Laser  
251 **Lco** vs Pedone  
252 Nirvana vs Nemorino
