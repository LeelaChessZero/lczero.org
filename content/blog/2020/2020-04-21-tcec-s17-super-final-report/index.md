---
title: "TCEC S17 SUper FInal report"
slug: "tcec-s17-super-final-report"
published: 2020-04-21
author: "glbchess64"

loadChessbaseScripts: true
---

*by @glbchess64*

*thanks to @dtracers and @ildolphino for correction and rewriting.*





Leela won the SuFi, 52.5 to 47.5 (+5 wins). This was a difficult match that showed the qualities and the weaknesses of the two engines. Leela, with network SV-t60-3010, is by most people considered as a positional engine who likes to grind down the opponent instead of going for the quickest mate, but of course she is also a tremendous tactical player. Still she has tactical blunders and sometimes has difficulties with correctly estimating the opponent's queen play, especially in open positions. Sometimes she does not succeed in converting a winning position because of falling prey to a perpetual check (note: the developers are working hard on this issue and a few enhancements are in the pipeline). StockFish, with 176 threads, is a fast and impressive tactician with a very solid play. But, even non-grandmaster players permit themselves to call its positional play dubious at times. It looks like a very clever player, it calculates good combinations but sometimes does not know how to coordinate pieces with pawns. In other words StockFish attempts to solve chess by brute force calculation, very clever search heuristics and a fast evaluation function. Sometimes it even helps Leela in some positions sacking pawns in a desperate way while Leela had a hard time finding the win!

<!--more-->

Leela fans love to understand what happens on the board, love simple moves that chain with logic, love to see plans.


StockFish fans love brilliant combinations, crushing games, even if this kind of play tends to be hard to understand.


It is difficult to be both a Leela fan and a StockFish fan, even though exceptions exist. TCEC chat was passionate.


Jeroen's work on the openings resulted in fascinating games. Very open games lead to quick draws with a lot of pieces and pawns swapped (for this reason there was not any King Gambit Accepted in the book), closed games or semi-open games were more interesting and often decisive.


Even if Leela did not crush StockFish, she clearly dominated the match. With black she mostly equalized quickly. With white she tortured StockFish during very long positional struggles until StockFish accumulated decisive mistakes. Leela's play on a color or with pawns was simply impressive.


This match showed that you cannot play perfect chess by calculating combinations only, understanding the game is also necessary.


“Les pions sont l'âme des échecs,” Philidor (pawns are the soul of chess)
________________
{{<style "cleartable">}}
|Glossary:||
|-|-|
|DS |dark squares|
|DSB |dark-squared bishop|
|eval |evaluation|
|KID |king's indian defence|
|k-side |kingside|
|LS |light squares|
|LSB |light-squared bishop|
|OCB |opposite color bishop|
|PV |principal variation|
|QGA |queen's gambit accepted|
|QGD |queen's gambit declined|
|q-side |queenside|
|sac |sacrifice|
|SF |Stockfish|
|SuFi |Super Final|
|SV |Sergio Vieri (who trained sv-t60-3010 net from community run T60 selfplay games)|
|zeitnot |lack of time|
|zugzwang |lack of good move|
{{</style>}}
________________

Odd number games SF (Stockfish 20200407DC, 176 threads) with white, even number Leela (LCZero v0.24-sv-t60-3010, 4xRTX 2080Ti) with white.
TC 90'+5" (note: often short for Leela in the endgame).

#### Game 1: QGD, exchange variation.

**Book 1.d4**

Leela equalizes before move 10 and takes an advantage with better pawn structure. She takes a pawn in the center but returns her h pawn to deny 0-0 to SF. She gets a better pawn structure and a majority on the q-side where she castles with SF king in the center. Black has a good edge. But as the queens remain on the board, SF manages, with dynamic play, to equalize and gets a draw by perpetual check.


{{< chessdiagram "r1bqk2r/ppp2p2/4n3/3p2pp/8/2P1P1P1/P2NBPP1/2RQK2R w Kkq - 0 14" >}}

{{<inlinechessgame>}}
[Event "TCEC Season 17 - Superfinal"]
[Site "https://tcec-chess.com"]
[Date "2020.04.08"]
[Round "1.1"]
[White "Stockfish 20200407DC"]
[Black "LCZero v0.24-sv-t60-3010"]
[Result "1/2-1/2"]
[WhiteElo "3851"]
[BlackElo "3840"]
[ECO "E10"]
[Opening "Queen's pawn game"]
[TimeControl "5400+5"]
[Termination "adjudication"]
[PlyCount "146"]
[GameDuration "02:58:18"]
[GameEndTime "2020-04-08T21:19:03.393 CST"]
[GameStartTime "2020-04-08T18:20:44.694 CST"]
[TerminationDetails "TCEC draw rule"]

1. d4 Nf6 2. Nf3 e6 3. c4 d5 4. cxd5 exd5 5. Bf4 Ne4 6. Nc3 Bb4 7. Rc1 Nc6
8. Nd2 g5 9. Bg3 Nxg3 10. hxg3 Nxd4 11. e3 Bxc3 12. bxc3 Ne6 13. Be2 h5 14.
Rxh5 Rxh5 15. Bxh5 Qe7 16. Nb3 c6 17. c4 dxc4 18. Rxc4 Bd7 19. Na5 O-O-O
20. Qb1 Be8 21. Bf3 Qc7 22. Qb4 Qb6 23. Qa3 Nc7 24. Nb3 Bd7 25. Rb4 Nb5 26.
Qb2 Qc7 27. Nc5 Qa5 28. Nxd7 Kxd7 29. Kf1 Nd6 30. Qd4 Kc7 31. Rb2 Re8 32.
Rd2 Rd8 33. Rb2 Nb5 34. Qe5+ Rd6 35. Qe7+ Rd7 36. Qe5+ Rd6 37. Qe7+ Rd7 38.
Qe5+ Kb6 39. Qf6 a6 40. Kg1 Qa3 41. Rc2 Qe7 42. Qb2 Ka7 43. Bg4 Rd8 44. a4
Nc7 45. Rc4 Rd3 46. Be2 Rd5 47. Bh5 f6 48. Bf3 Rd3 49. Re4 Qd6 50. Rb4 b5
51. axb5 axb5 52. Qa2+ Kb6 53. Rb1 Ra3 54. Qf7 Qe6 55. Qg7 Ra4 56. Rc1 c5
57. Kh2 c4 58. Rb1 Qe5 59. Qd7 Ka5 60. Bc6 c3 61. f4 gxf4 62. gxf4 Qh5+ 63.
Kg1 Kb6 64. Bxb5 Nxb5 65. Qd6+ Kb7 66. Qd7+ Kb6 67. f5 Qe2 68. Qd6+ Kb7 69.
Qc5 Ra5 70. Qe7+ Kc8 71. Qe6+ Kc7 72. Qe7+ Kc8 73. Qe6+ Kc7 1/2-1/2
{{</inlinechessgame>}}

#### Game 2: QGD, semi-slav.

Leela loses a small beginning advantage and the game is a short draw.


{{< chessdiagram "r1br2k1/3nqpb1/1pp1p2p/p1PpP3/NP1P2p1/P2B1N2/5PPP/R2Q1RK1 w - - 0 17" >}}


{{<inlinechessgame>}}
[Event "TCEC Season 17 - Superfinal"]
[Site "https://tcec-chess.com"]
[Date "2020.04.08"]
[Round "2.1"]
[White "LCZero v0.24-sv-t60-3010"]
[Black "Stockfish 20200407DC"]
[Result "1/2-1/2"]
[WhiteElo "3840"]
[BlackElo "3851"]
[ECO "D43"]
[Opening "QGD semi-Slav"]
[TimeControl "5400+5"]
[Termination "adjudication"]
[PlyCount "77"]
[GameDuration "01:59:55"]
[GameEndTime "2020-04-08T23:20:09.438 CST"]
[GameStartTime "2020-04-08T21:20:13.695 CST"]
[TerminationDetails "TCEC draw rule"]


1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 c6 5. Bg5 h6 6. Bxf6 Qxf6 7. e3 g6 8.
Be2 Bg7 9. e4 O-O 10. O-O Rd8 11. c5 Nd7 12. Bd3 b6 13. b4 a5 14. a3 Qe7
15. e5 g5 16. Na4 g4 17. Ne1 axb4 18. axb4 bxc5 19. Nxc5 Rxa1 20. Qxa1 f6
21. f4 gxf3 22. Nxf3 fxe5 23. Nxd7 Bxd7 24. Nxe5 Qxb4 25. Qa7 c5 26. Qc7
Qxd4+ 27. Kh1 Rf8 28. Rxf8+ Bxf8 29. h3 Qe3 30. Bg6 Qc1+ 31. Kh2 Qf4+ 32.
Kh1 Qf1+ 33. Kh2 Qf4+ 34. g3 Qf2+ 35. Kh1 Qf1+ 36. Kh2 Qf2+ 37. Kh1 Qf1+
38. Kh2 Qe2+ 39. Kg1 1/2-1/2
{{</inlinechessgame>}}

#### Game 3: Sicilian, Keres attack (SF +1)

**Book 1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. g4 a6**

The last move of book 6...a6 instead 6...h6 made this line may be winning for white.
SF mobilizes the h-pawn and gets a fawn in h6. SF used it, after exploding the center, to get a winning pawn endgame.
This game looks like a Leela game but the next one is more positional.


{{< chessdiagram "r1b1k2r/4bp1p/p1npp1pP/qp4P1/4P3/P1N1B3/1PPQBP2/R3K2R w KQkq - 0 16" >}}

{{<inlinechessgame>}}
[Event "TCEC Season 17 - Superfinal"]
[Site "https://tcec-chess.com"]
[Date "2020.04.08"]
[Round "3.1"]
[White "Stockfish 20200407DC"]
[Black "LCZero v0.24-sv-t60-3010"]
[Result "1-0"]
[WhiteElo "3851"]
[BlackElo "3840"]
[ECO "B81"]
[Opening "Sicilian"]
[Variation "Scheveningen, Keres attack"]
[TimeControl "5400+5"]
[Termination "adjudication"]
[PlyCount "106"]
[GameDuration "02:23:14"]
[GameEndTime "2020-04-09T01:44:34.607 CST"]
[GameStartTime "2020-04-08T23:21:19.702 CST"]
[TerminationDetails "TCEC win rule"]


1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. g4 a6 7. g5 Nfd7 8.
a3 Nc6 9. Be3 Nde5 10. Be2 Nxd4 11. Qxd4 Nc6 12. Qd2 Be7 13. h4 b5 14. h5
Qa5 15. h6 g6 16. O-O O-O 17. f4 Qc7 18. Rf2 Rb8 19. Raf1 Bd7 20. Bg4 Rbc8
21. Bh3 Qb7 22. Na2 a5 23. Nc3 Rb8 24. b4 axb4 25. axb4 Rfc8 26. f5 Ne5 27.
fxg6 fxg6 28. Bf4 Rf8 29. Qd4 Qc7 30. Nd5 exd5 31. Bxd7 Qxd7 32. Qxd5+ Nf7
33. Qd4 Bf6 34. Qxf6 Ne5 35. Qg7+ Qxg7 36. hxg7 Rfe8 37. Bxe5 dxe5 38. Rf8+
Rxf8 39. Rxf8+ Rxf8 40. gxf8=Q+ Kxf8 41. Kf1 Kf7 42. Ke2 Kf8 43. c4 bxc4
44. Kd2 Kg7 45. b5 Kf8 46. b6 Kf7 47. b7 Ke8 48. Kc3 Ke7 49. b8=Q h6 50.
gxh6 Kf7 51. h7 g5 52. h8=Q Ke6 53. Qbxe5+ Kd7 1-0
{{</inlinechessgame>}}

#### Game 4: (Leela equalizes)


Leela gets a strong advantage even more quickly than SF. She pushes the f pawn and with Rg3 in offensive and defensive position she gets a semi closed center (black d6-e5 and white e4) and castles long while SF king remains in the center. SF decides for the thematic Rxc3 exchange sac. Swapping the queen and getting the e4 pawn as a minor compensation. The ending that results with white majority on the q-side was absolutely hopeless. Finally a very simple game : pure Leela style.


{{< chessdiagram "4k2r/3nbppp/p2p4/1p2pPP1/4b3/P1PBB1R1/2P4P/2KR4 b k - 1 19" >}}


{{<inlinechessgame>}}
[Event "TCEC Season 17 - Superfinal"]
[Site "https://tcec-chess.com"]
[Date "2020.04.09"]
[Round "4.1"]
[White "LCZero v0.24-sv-t60-3010"]
[Black "Stockfish 20200407DC"]
[Result "1-0"]
[WhiteElo "3840"]
[BlackElo "3851"]
[ECO "B81"]
[Opening "Sicilian"]
[Variation "Scheveningen, Keres attack"]
[TimeControl "5400+5"]
[Termination "adjudication"]
[PlyCount "213"]
[GameDuration "03:18:36"]
[GameEndTime "2020-04-09T05:04:21.030 CST"]
[GameStartTime "2020-04-09T01:45:44.683 CST"]
[TerminationDetails "SyzygyTB"]


1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 6. g4 a6 7. g5 Nfd7 8.
Be3 b5 9. a3 Bb7 10. f4 Nc6 11. Rg1 Rc8 12. Rg3 Be7 13. f5 Nxd4 14. Qxd4 e5
15. Qd2 Qa5 16. O-O-O Rxc3 17. Qxc3 Qxc3 18. bxc3 Bxe4 19. Bd3 Ba8 20. c4
Bc6 21. cxb5 axb5 22. c4 bxc4 23. Bxc4 Be4 24. a4 d5 25. Rxd5 Bxd5 26. Bxd5
Bb4 27. Rg4 Ba5 28. Rc4 Ke7 29. Rc6 Rd8 30. Bc4 Kf8 31. Bb5 e4 32. Bf4 e3
33. Bxe3 Ne5 34. Ra6 Rc8+ 35. Kd1 Bb4 36. h3 Kg8 37. Ke2 Bc3 38. Rd6 Bb4
39. Rd4 Bc3 40. Rd1 Bb4 41. Rc1 Ra8 42. Rb1 Bc3 43. Rc1 Ba5 44. Bf4 f6 45.
Bxe5 fxe5 46. Rc5 Kf7 47. Kf3 Kf8 48. Rxe5 Bc3 49. Rc5 Bb4 50. Rc4 Ba5 51.
h4 Rb8 52. Kg4 Rd8 53. Re4 Bc3 54. Rc4 Ba5 55. Re4 Bc3 56. Kf3 h6 57. g6 h5
58. Re6 Rc8 59. Kg2 Ba5 60. Bd7 Rb8 61. Bc6 Rb2+ 62. Kf3 Rb3+ 63. Ke4 Rb4+
64. Kd5 Rb8 65. Kc5 Bb4+ 66. Kc4 Ba5 67. Re5 Bc7 68. Re4 Ba5 69. Re6 Rb4+
70. Kc5 Rb8 71. Re4 Bb6+ 72. Kc4 Ba5 73. Re6 Rb4+ 74. Kd3 Rb3+ 75. Ke4 Rb4+
76. Kd5 Rb8 77. Bb5 Rc8 78. Re4 Rd8+ 79. Kc4 Rc8+ 80. Kb3 Rc3+ 81. Kb2 Rc8
82. Re6 Rd8 83. Kb3 Rc8 84. Re5 Rc3+ 85. Ka2 Rc2+ 86. Kb1 Rc8 87. f6 gxf6
88. Rxh5 Rc3 89. Rd5 Rc7 90. Bd3 Bb6 91. a5 Be3 92. Kb2 Kg7 93. h5 Kh6 94.
Kb3 Bf4 95. a6 Be5 96. Be2 Rc3+ 97. Kb4 Rc7 98. Kb5 Re7 99. Bg4 Bf4 100.
Rd7 Re5+ 101. Kc6 Re1 102. g7 Re8 103. Re7 Ra8 104. a7 Be3 105. Rxe3 Kxg7
106. Kb7 Rxa7+ 107. Kxa7 1-0
{{</inlinechessgame>}}

#### Game 5: KID, orthodox

**Book 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Ne1 Nd7 10. Nd3 f5 11. Bd2 Nf6 12. f3 f4**

SF decides for a quick a-pawn push to a6. Leela finds usual counter play on the k-side and the center. Lots of pawns and pieces swapping, to end queens and a knight pair, SF a pawn up. But with so few pawns on the board and kings in open space it is a logical draw.


{{< chessdiagram "r1bq2rk/ppp1n1b1/P2p1n2/2PPp1pp/1P2Pp2/2NN1P2/3BB1PP/R2Q1RK1 b - - 0 17" >}}


{{<inlinechessgame>}}
[Event "TCEC Season 17 - Superfinal"]
[Site "https://tcec-chess.com"]
[Date "2020.04.09"]
[Round "5.1"]
[White "Stockfish 20200407DC"]
[Black "LCZero v0.24-sv-t60-3010"]
[Result "1/2-1/2"]
[WhiteElo "3851"]
[BlackElo "3840"]
[ECO "E98"]
[Opening "King's Indian"]
[Variation "orthodox, Aronin-Taimanov, 9.Ne1"]
[TimeControl "5400+5"]
[Termination "adjudication"]
[PlyCount "97"]
[GameDuration "02:17:46"]
[GameEndTime "2020-04-09T07:23:17.418 CST"]
[GameStartTime "2020-04-09T05:05:30.706 CST"]
[TerminationDetails "SyzygyTB"]


1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8.
d5 Ne7 9. Ne1 Nd7 10. Nd3 f5 11. Bd2 Nf6 12. f3 f4 13. a4 g5 14. b4 h5 15.
a5 Kh8 16. c5 Rg8 17. a6 bxa6 18. Nf2 g4 19. fxg4 hxg4 20. Nxg4 Qe8 21. Nf2
Bf8 22. Bxa6 Ng6 23. Kh1 dxc5 24. bxc5 Bxc5 25. Bxc8 Qxc8 26. Nd3 Bd6 27.
g3 Qh3 28. Rf3 Ng4 29. Qe2 Qh5 30. gxf4 exf4 31. Nxf4 Bxf4 32. Bxf4 Nxf4
33. Rxf4 Raf8 34. Raf1 Qh6 35. Rxf8 Rxf8 36. Rxf8+ Qxf8 37. h3 Ne5 38. Kg2
Qg7+ 39. Kf1 Qh6 40. Ke1 Qxh3 41. Kd2 c6 42. Kc2 cxd5 43. exd5 Qf5+ 44. Kb3
Kg7 45. d6 Qe6+ 46. Kc2 Qxd6 47. Qg2+ Kf8 48. Qa8+ Kg7 49. Qxa7+ 1/2-1/2
{{</inlinechessgame>}}


#### Game 6:
3 pawns swap, then on move 25 Leela dominates the q-side and the center. SF holds the k-side and gives a 0 eval. Pieces begin to swap and Leela gets a strong passer in the center but Fish has counter play against Leela King. Draw.


{{< chessdiagram "r2q1bk1/5r1p/1p1p1nn1/pN1P4/P1R1Bpb1/3N4/1P4PP/3QBRK1 w - - 0 26" >}}


{{<inlinechessgame>}}
[Event "TCEC Season 17 - Superfinal"]
[Site "https://tcec-chess.com"]
[Date "2020.04.09"]
[Round "6.1"]
[White "LCZero v0.24-sv-t60-3010"]
[Black "Stockfish 20200407DC"]
[Result "1/2-1/2"]
[WhiteElo "3840"]
[BlackElo "3851"]
[ECO "E98"]
[Opening "King's Indian"]
[Variation "orthodox, Aronin-Taimanov, 9.Ne1"]
[TimeControl "5400+5"]
[PlyCount "192"]
[GameDuration "03:07:59"]
[GameEndTime "2020-04-09T10:32:27.207 CST"]
[GameStartTime "2020-04-09T07:24:27.707 CST"]
[TerminationDetails "3-Fold repetition"]


1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8.
d5 Ne7 9. Ne1 Nd7 10. Nd3 f5 11. Bd2 Nf6 12. f3 f4 13. c5 g5 14. Rc1 Ng6
15. Nb5 Rf7 16. Ba5 b6 17. cxd6 cxd6 18. Be1 a6 19. Nc3 a5 20. a4 Bf8 21.
Nb5 g4 22. fxg4 Nxe4 23. Rc4 Nf6 24. Bf3 e4 25. Bxe4 Bxg4 26. Bf3 Bxf3 27.
Qxf3 Ne5 28. Nxe5 dxe5 29. d6 Rc8 30. Rc6 Rxc6 31. Qxc6 Nd7 32. b4 axb4 33.
Bxb4 Qg5 34. Kh1 Qg4 35. Qc4 Qg6 36. Qd5 Kh8 37. Nc3 Rg7 38. Ba3 Rg8 39.
Re1 Qh5 40. Bb2 Qg6 41. Ba3 Rg7 42. Rd1 Nf6 43. Qf3 e4 44. Nxe4 Qxe4 45.
Bb2 Qg6 46. d7 Nxd7 47. Bxg7+ Qxg7 48. Qxf4 Qf6 49. Qxf6+ Nxf6 50. g3 Kg7
51. Kg2 Kg6 52. Rd8 Be7 53. Rc8 Kf5 54. Kh3 Nd5 55. Rh8 Kg6 56. Rg8+ Kf5
57. Rh8 Nf6 58. Kg2 h5 59. Kh3 Bd6 60. Rc8 Be7 61. Kh4 Ng4+ 62. Kh3 Bf6 63.
Rc6 Bd4 64. Rc4 Be3 65. Rb4 Ne5 66. Rb5 Ke4 67. Kh4 Nf3+ 68. Kh3 Bc5 69.
Rb2 Kf5 70. Rc2 Nd4 71. Rf2+ Kg6 72. Rd2 Kf5 73. Rd1 Ke4 74. Rd2 Kf5 75.
Rd1 Ke4 76. Re1+ Kd5 77. Rc1 Nf5 78. Rc3 Bd4 79. Rc7 Ng7 80. Rd7+ Kc5 81.
Re7 Nf5 82. Rf7 Ne3 83. Kh4 Kb4 84. Kxh5 Kxa4 85. g4 b5 86. Rf4 Nc2 87. g5
b4 88. g6 Be5 89. Re4 Bf6 90. Rf4 Be5 91. Re4 Bf6 92. Kh6 Nd4 93. Rf4 Be5
94. Re4 Bf6 95. Rf4 Be5 96. Re4 Bf6 1/2-1/2

{{</inlinechessgame>}}

#### Game 7: Vienna Game: Frankenstein-Dracula Variation (SF +1)

**Book 1. e4 e5 2. Nc3 Nf6 3. Bc4 Nxe4 4. Qh5 Nd6 5. Bb3 Nc6 6. Nb5 g6 7. Qf3 f5**

Likely a 1-0 opening. Black gives the Ra8 for development and space advantage. But taking back the Na8 loses two tempos, black pieces are not well coordinated and black king in d8. SF plays very clever moves like Qf3-h3-f3-d1-g4 at the right tempo, gets well coordinated pieces and wins with strong threats on the black king in the center. A masterpiece for SF.


{{< chessdiagram "2nk1b1r/p2p4/1p3q2/3b2p1/1P1NppQp/2P4P/5PP1/R1BR2K1 b - - 5 28" >}}


{{<inlinechessgame>}}
[Event "TCEC Season 17 - Superfinal"]
[Site "https://tcec-chess.com"]
[Date "2020.04.09"]
[Round "7.1"]
[White "Stockfish 20200407DC"]
[Black "LCZero v0.24-sv-t60-3010"]
[Result "1-0"]
[WhiteElo "3851"]
[BlackElo "3840"]
[ECO "C27"]
[Opening "Vienna game"]
[TimeControl "5400+5"]
[PlyCount "185"]
[GameDuration "03:15:14"]
[GameEndTime "2020-04-09T13:48:52.697 CST"]
[GameStartTime "2020-04-09T10:33:37.704 CST"]
[TerminationDetails "White mates"]


1. e4 e5 2. Nc3 Nf6 3. Bc4 Nxe4 4. Qh5 Nd6 5. Bb3 Nc6 6. Nb5 g6 7. Qf3 f5
8. Qd5 Qf6 9. Nxc7+ Kd8 10. Nxa8 b6 11. Qf3 Nd4 12. Qh3 f4 13. c3 Nc6 14.
d3 h5 15. Qf3 g5 16. Qd1 Ba6 17. Ne2 h4 18. h3 e4 19. O-O Bxd3 20. Bc2 Ba6
21. a4 Bb7 22. a5 Nxa5 23. Ba4 Bxa8 24. b4 Nc6 25. Bxc6 Bxc6 26. Nd4 Bd5
27. Qg4 Nc8 28. Rd1 Rh6 29. Bb2 Bc4 30. b5 Rh7 31. Nc6+ Kc7 32. Nxa7 Nd6
33. Ba3 Rf7 34. Bxd6+ Bxd6 35. Nc6 Bxb5 36. Nd4 Bd3 37. Ra7+ Kd8 38. Ra8+
Ke7 39. f3 Bc5 40. Rg8 Rg7 41. Rc8 Bxd4+ 42. cxd4 Qg6 43. fxe4 Qxe4 44. Qh5
Qe3+ 45. Kh2 Qg3+ 46. Kh1 f3 47. Qxf3 Qxf3 48. gxf3 Bb5 49. Rb8 Rf7 50.
Re1+ Kd6 51. Rxb6+ Bc6 52. Kg2 Rf4 53. Re4 Rf5 54. Re3 Rd5 55. Rb4 Ra5 56.
Rb2 Rd5 57. Rd2 Rf5 58. Rdd3 Rf4 59. Kf2 Bd5 60. Rd1 Be6 61. Re4 Rf5 62.
Rde1 Bd5 63. R4e3 Rf4 64. Rg1 Rf5 65. Rg4 Kc6 66. f4 Rxf4+ 67. Rxf4 gxf4
68. Re5 Be6 69. d5+ Bxd5 70. Rh5 Kd6 71. Rxh4 Ke5 72. Rg4 Kf5 73. Rg1 Be4
74. h4 d6 75. Rg8 Ke5 76. h5 Kf6 77. h6 Kf7 78. Rg7+ Kf8 79. Ke2 d5 80. Kd2
Bf5 81. Ke1 Bd3 82. Kf2 Be4 83. Ke2 d4 84. Rg4 Bc2 85. Kf2 Kf7 86. Rg7+ Kf6
87. Rc7 d3 88. h7 d2 89. h8=Q+ Kg6 90. Qg7+ Kh5 91. Rc5+ Kh4 92. Qh6+ Kg4
93. Qh5# 1-0
{{</inlinechessgame>}}


#### Game 8: (SF +1)
Leela plays nearly the same setting as SF in the previous game but not at the right tempo, and finally all advantages evaporate. A draw.


{{< chessdiagram "3k1b1r/pb1pq3/1p1n4/6p1/3N1p1p/2P4Q/PP3PPP/R1BR2K1 b - - 2 20" >}}


{{<inlinechessgame>}}
[Event "TCEC Season 17 - Superfinal"]
[Site "https://tcec-chess.com"]
[Date "2020.04.09"]
[Round "8.1"]
[White "LCZero v0.24-sv-t60-3010"]
[Black "Stockfish 20200407DC"]
[Result "1/2-1/2"]
[WhiteElo "3840"]
[BlackElo "3851"]
[ECO "C27"]
[Opening "Vienna"]
[Variation "`Frankenstein-Dracula' variation"]
[TimeControl "5400+5"]
[Termination "adjudication"]
[PlyCount "131"]
[GameDuration "02:57:37"]
[GameEndTime "2020-04-09T16:47:40.412 CST"]
[GameStartTime "2020-04-09T13:50:02.705 CST"]
[TerminationDetails "SyzygyTB"]

1. e4 e5 2. Nc3 Nf6 3. Bc4 Nxe4 4. Qh5 Nd6 5. Bb3 Nc6 6. Nb5 g6 7. Qf3 f5
8. Qd5 Qe7 9. Nxc7+ Kd8 10. Nxa8 b6 11. Qd3 Bb7 12. Ne2 Bxa8 13. O-O g5 14.
Qh3 h5 15. d4 h4 16. c3 f4 17. Bd5 exd4 18. Bxc6 Bxc6 19. Nxd4 Bb7 20. Rd1
Kc8 21. b3 Qf7 22. f3 Bg7 23. Re1 Re8 24. Rxe8+ Qxe8 25. Ba3 Bxd4+ 26. cxd4
Nb5 27. Rc1+ Kb8 28. Bb2 a5 29. Qf5 Qe3+ 30. Kh1 Ka7 31. h3 g4 32. Qxg4 Qd2
33. Qxd7 Qxb2 34. Re1 Nxd4 35. Re7 Qa1+ 36. Kh2 Nxf3+ 37. gxf3 Qxa2+ 38.
Kg1 Qb1+ 39. Kf2 Qb2+ 40. Kf1 Qc1+ 41. Ke2 Qb2+ 42. Qd2 Qxb3 43. Qxf4 Qc2+
44. Ke1 Ka6 45. Qd2 Qb1+ 46. Ke2 Qb5+ 47. Kf2 a4 48. Qd4 Qc5 49. Qxc5 bxc5
50. Ke2 Kb6 51. Kd2 a3 52. Kc3 a2 53. Kb2 Bc8 54. Rh7 Bxh3 55. Rxh4 Bg2 56.
f4 Kc6 57. Rh5 Bd5 58. Re5 Bg8 59. Rg5 Bc4 60. Re5 Kd6 61. Re4 Bd3 62. Re3
Bb1 63. Ka1 c4 64. Kb2 Kd5 65. Ka1 c3 66. Rxc3 1/2-1/2
{{</inlinechessgame>}}

#### Game 9: Dutch, Leningrad variation (SF +1)
**Book 1. d4 f5 2. g3 Nf6 3. Bg2 g6 4. Nf3 Bg7 5. O-O O-O 6. c4 d6 7. Nc3 e6**

This opening gives a good edge to white. Leela chooses a stonewall structure and plays an attack on the k-side. SF reacts on the q-side but strangely closes the game on that side to contest k-side. Interestingly both engines thought they were better. Finally after many swaps the game ends in a draw.


{{< chessdiagram "4b1rk/1p2qnrp/p1p1pb2/P1Pp1pp1/1P1P1P2/2QNPBPP/4NK2/2R4R w - - 0 28" >}}


{{<inlinechessgame>}}
[Event "TCEC Season 17 - Superfinal"]
[Site "https://tcec-chess.com"]
[Date "2020.04.09"]
[Round "9.1"]
[White "Stockfish 20200407DC"]
[Black "LCZero v0.24-sv-t60-3010"]
[Result "1/2-1/2"]
[WhiteElo "3851"]
[BlackElo "3840"]
[ECO "A81"]
[Opening "Dutch defence"]
[TimeControl "5400+5"]
[PlyCount "209"]
[GameDuration "03:16:26"]
[GameEndTime "2020-04-09T20:05:17.449 CST"]
[GameStartTime "2020-04-09T16:48:50.707 CST"]
[TerminationDetails "Fifty moves rule"]


1. d4 f5 2. g3 Nf6 3. Bg2 g6 4. Nf3 Bg7 5. O-O O-O 6. c4 d6 7. Nc3 e6 8.
Re1 Ne4 9. Qc2 d5 10. Bf4 c6 11. e3 Nd7 12. Rac1 Qe7 13. b3 Re8 14. Be5
Nxe5 15. Nxe5 Bd7 16. Ne2 Rac8 17. c5 Ng5 18. f4 Nf7 19. Nd3 g5 20. h3 Kh8
21. Qc3 Rg8 22. Bf3 Bf6 23. Kf2 Ra8 24. b4 Rg7 25. a4 Rag8 26. Rh1 Be8 27.
a5 a6 28. Rcg1 Nd8 29. Qb2 Qf8 30. Kf1 Qe7 31. Kf2 Qf8 32. Rh2 Qe7 33. Qa1
h5 34. fxg5 Rxg5 35. h4 R5g6 36. Nef4 Rh6 37. Rhg2 Kg7 38. Rf1 Kf8 39. Qe1
Bf7 40. Qd1 Rgh8 41. Kg1 Ke8 42. Ne5 Qc7 43. Nfd3 Kf8 44. Qe2 Kg8 45. Qf2
Be8 46. Be2 Nf7 47. Qf4 Nxe5 48. Nxe5 Qg7 49. Kf2 Bd8 50. Rfg1 Bc7 51. Ke1
R8h7 52. Kd2 Kh8 53. Rf2 Bxe5 54. Qxe5 Qxe5 55. dxe5 Rg7 56. Bf3 Bd7 57.
Ke2 Rgg6 58. Rff1 Rh7 59. Kf2 Rg8 60. Rd1 Rg6 61. Rh1 Kg8 62. Kg2 Rh8 63.
Be2 Kg7 64. Kf2 Kh6 65. Bf3 Rhg8 66. Rhg1 Be8 67. Rc1 Rh8 68. Rcd1 Bd7 69.
Rd4 Ra8 70. Rd2 Rag8 71. Rd3 Rd8 72. Rdd1 Rdg8 73. Be2 R6g7 74. Rd4 Rg6 75.
Bd3 Ra8 76. Bf1 Rgg8 77. Rh1 Kg7 78. Be2 Kh6 79. Rdd1 Rac8 80. Ra1 Rcf8 81.
Rhd1 Rg6 82. Kg2 Rfg8 83. Kf2 R6g7 84. Rg1 Rg6 85. Ra3 R6g7 86. Rb3 Kg6 87.
Kg2 Re7 88. Rd3 Kh6 89. Kf2 Rg6 90. Ke1 Re8 91. Rd4 Rh8 92. Bf3 Rb8 93. Kf2
Rbg8 94. Be2 R6g7 95. Rg2 Rg6 96. Bd1 Ra8 97. Kg1 Rgg8 98. Kh2 Rac8 99. Rg1
Rb8 100. Kg2 Rg7 101. Kf2 Rbg8 102. Be2 Be8 103. Bf3 Bd7 104. Rdd1 Rg6 105.
Be4 1/2-1/2
{{</inlinechessgame>}}

#### Game 10: (SF +1)
Long positional torture by Leela. SF chooses the stonewall. Leela attacks on the q-side and SF decides to defend, Leela does not manage to explode the q-side so she goes for the center and SF reacts at k-side and manages to get enough counter play. A fighting draw.


{{< chessdiagram "2r3k1/2rn2bp/1ppq2p1/p2p1p2/3Pn2P/1P1BPNP1/PBR1QPK1/2R5 w - - 2 26" >}}


{{<inlinechessgame>}}
[Event "TCEC Season 17 - Superfinal"]
[Site "https://tcec-chess.com"]
[Date "2020.04.09"]
[Round "10.1"]
[White "LCZero v0.24-sv-t60-3010"]
[Black "Stockfish 20200407DC"]
[Result "1/2-1/2"]
[WhiteElo "3840"]
[BlackElo "3851"]
[ECO "A81"]
[Opening "Dutch defence"]
[TimeControl "5400+5"]
[Termination "adjudication"]
[PlyCount "235"]
[GameDuration "03:21:25"]
[GameEndTime "2020-04-09T23:27:52.899 CST"]
[GameStartTime "2020-04-09T20:06:27.700 CST"]
[TerminationDetails "SyzygyTB"]

#### Game 11: French, Winawer variation (SF +1)
**Book 1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 b6**

1. d4 f5 2. g3 Nf6 3. Bg2 g6 4. Nf3 Bg7 5. O-O O-O 6. c4 d6 7. Nc3 e6 8.
Re1 d5 9. b3 Ne4 10. Bb2 c6 11. e3 Nd7 12. Ne2 b6 13. Nf4 Re8 14. cxd5 exd5
15. Re2 Bb7 16. Rc1 Qe7 17. Rec2 Rac8 18. h4 Qd6 19. Nd3 Ba6 20. Nf4 Bb7
21. Nd3 Ba6 22. Bf1 Bxd3 23. Bxd3 Rc7 24. Kg2 a5 25. Qe2 Rec8 26. Ba6 Ra8
27. Bb5 Rac8 28. Ba6 Ra8 29. Bd3 Rac8 30. Qe1 Rf8 31. Be2 Re8 32. Bb5 Rec8
33. Ba6 Re8 34. Bb5 Rec8 35. Ba6 Ra8 36. Be2 Re8 37. Bd3 Rec8 38. Bf1 h6
39. Ng1 Nf8 40. Ba6 Re8 41. Bb5 Rec8 42. Ba6 Re8 43. Bb5 Rec8 44. Bd3 Qd7
45. Ba3 h5 46. Bb2 Ne6 47. Qd1 Kh7 48. a4 Bf8 49. Nh3 Bd6 50. Qe2 Kg8 51.
Bc3 Rf8 52. Rh1 Rf7 53. Be1 Nf6 54. Qd1 Rg7 55. Qb1 Qe7 56. Rb2 Ba3 57. Rc2
Bd6 58. Rb2 Ba3 59. Re2 Bd6 60. f3 Bb4 61. Bf2 Qe8 62. Rc2 Rge7 63. Rhc1
Ba3 64. Rf1 Bb4 65. Qb2 Qd7 66. Ng1 Qd6 67. Qb1 Qd8 68. Rfc1 Ba3 69. Rd1
Qd6 70. Rf1 Bb4 71. Rfc1 Qd7 72. Rf1 Rc8 73. Qc1 Kg7 74. Bb5 Nd8 75. Be2
Ne6 76. Bd3 Rc7 77. Qa1 Qe8 78. Rfc1 Kh7 79. Nh3 Kg7 80. Qb2 Bd6 81. Re2
Kg8 82. Be1 Rg7 83. b4 g5 84. Bxf5 gxh4 85. e4 dxe4 86. fxe4 Rcf7 87. d5
Bxg3 88. Kh1 Nxd5 89. exd5 Rxf5 90. Bc3 Qf7 91. dxe6 Rf1+ 92. Ng1 Qf3+ 93.
Rg2 h3 94. Rxf1 hxg2+ 95. Qxg2 Qxg2+ 96. Kxg2 Be5+ 97. Kf3 Bxc3 98. bxa5
bxa5 99. Ne2 Be5 100. Ke4 Bd6 101. Rd1 Be7 102. Nd4 Rg6 103. Ke5 Bf6+ 104.
Kd6 Rg4 105. Nxc6 Rxa4 106. Ne7+ Kf8 107. Nd5 Bg5 108. Ke5 Rg4 109. Rf1+
Kg7 110. e7 Bxe7 111. Nxe7 Kh6 112. Kf6 h4 113. Rc1 Rb4 114. Nd5 Rb3 115.
Nf4 h3 116. Rc5 Rb6+ 117. Kf7 Kh7 118. Nxh3 1/2-1/2
{{</inlinechessgame>}}


The worst opening for SF. Playing the anti positional c4 move SF proves one more time that it does not understand this opening. Leela equalized with a clever Kd7 move after sacrificing g7 pawn for counter play on k-side. Draw.


{{< chessdiagram "r6r/p2kbpQp/1p6/3pPq2/P2p4/7P/1P3PP1/R1BR2K1 w - - 1 21" >}}


{{<inlinechessgame>}}
[Event "TCEC Season 17 - Superfinal"]
[Site "https://tcec-chess.com"]
[Date "2020.04.09"]
[Round "11.1"]
[White "Stockfish 20200407DC"]
[Black "LCZero v0.24-sv-t60-3010"]
[Result "1/2-1/2"]
[WhiteElo "3851"]
[BlackElo "3840"]
[ECO "C16"]
[Opening "French"]
[Variation "Winawer, advance variation"]
[TimeControl "5400+5"]
[Termination "adjudication"]
[PlyCount "80"]
[GameDuration "01:59:41"]
[GameEndTime "2020-04-10T01:28:44.014 CST"]
[GameStartTime "2020-04-09T23:29:02.704 CST"]
[TerminationDetails "TCEC draw rule"]


1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 b6 5. Qg4 Bf8 6. Nf3 Qd7 7. Bb5 c6 8.
Be2 Ba6 9. O-O Ne7 10. a4 Ng6 11. Rd1 Bxe2 12. Nxe2 c5 13. c4 Nc6 14. Nf4
Nxd4 15. Nxd4 cxd4 16. cxd5 Nxf4 17. Qxf4 exd5 18. Qg3 Qf5 19. h3 Be7 20.
Qxg7 Kd7 21. Qg3 Rhg8 22. Qb3 Qe4 23. g3 Rac8 24. a5 Bh4 25. Qa4+ Ke6 26.
Qxd4 Qxd4 27. Rxd4 Be7 28. Be3 Rc2 29. Rf4 Bg5 30. Rg4 Bxe3 31. Rxg8 Rxf2
32. axb6 axb6 33. Re8+ Kd7 34. Raa8 Rf3+ 35. Kg2 Rf2+ 36. Kh1 Rf1+ 37. Kg2
Rf2+ 38. Kg1 Rf4+ 39. Kh1 Rf1+ 40. Kh2 Rf2+ 1/2-1/2
{{</inlinechessgame>}}


#### Game 12: (Leela equalizes)
The game all Leela fans waited for. Classical play by Leela on k-side with g4-h5, Rh3 setup. SF reacts by closing the q-side with c4? and then a4?? At this point he thinks white has a slight edge whereas Leela and all club players know that the position is hopeless for black. The remainder of the game is just technical for Leela. A game to analyse by the SF dev team.


{{< chessdiagram "r2nkb1r/1q3pp1/2n1p2p/1p1pP2P/p1pP1NP1/P1P1BN1R/1P3PK1/1R1Q4 b kq - 0 22" >}}


{{<inlinechessgame>}}
[Event "TCEC Season 17 - Superfinal"]
[Site "https://tcec-chess.com"]
[Date "2020.04.10"]
[Round "12.1"]
[White "LCZero v0.24-sv-t60-3010"]
[Black "Stockfish 20200407DC"]
[Result "1-0"]
[WhiteElo "3840"]
[BlackElo "3851"]
[ECO "C16"]
[Opening "French"]
[Variation "Winawer, advance variation"]
[TimeControl "5400+5"]
[Termination "adjudication"]
[PlyCount "360"]
[GameDuration "03:33:36"]
[GameEndTime "2020-04-10T05:03:29.748 CST"]
[GameStartTime "2020-04-10T01:29:53.705 CST"]
[TerminationDetails "SyzygyTB"]

1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 b6 5. h4 Bf8 6. Nf3 c5 7. Ne2 Ba6 8. c3
Ne7 9. h5 h6 10. Nf4 Bxf1 11. Kxf1 Nbc6 12. Bd2 a5 13. Rh3 Nf5 14. g4 Nfe7
15. Kg2 Qc7 16. Be3 Nd8 17. Rb1 Nec6 18. Rg3 Qb7 19. Rh3 a4 20. Nd3 c4 21.
Nf4 b5 22. a3 Qd7 23. Qc2 Nb7 24. Kh2 Be7 25. Ng2 O-O-O 26. Nfh4 Rhf8 27.
f3 f6 28. f4 Rde8 29. Ng6 Rf7 30. Kg1 fxe5 31. fxe5 Bd8 32. Rf1 Rxf1+ 33.
Kxf1 Qf7+ 34. Qf2 Qg8 35. Rf3 Be7 36. Kg1 Nbd8 37. Bd2 Kc7 38. Qf1 Kb6 39.
Ne1 Nb7 40. Rf7 Nbd8 41. Rf2 Kc7 42. Rf3 Nb8 43. Ng2 Nd7 44. Be1 Bg5 45.
Bh4 Bxh4 46. N2xh4 Nc6 47. Rf4 Ra8 48. Ng2 Re8 49. Kh2 Nd8 50. Kg3 Kb7 51.
Kh4 Qh7 52. Qf3 Kc7 53. Ne3 Qg8 54. g5 hxg5+ 55. Kxg5 Kb6 56. Kg4 Kc7 57.
Ng2 Nc6 58. Kg3 Nd8 59. Kh4 Nc6 60. Kh3 Ra8 61. Kg3 Kb6 62. Qg4 Qe8 63. Rf3
Ra7 64. N2f4 Nd8 65. Nh3 Rc7 66. Ng5 Ra7 67. Kg2 Ka6 68. Rf2 Rc7 69. Kg3
Ra7 70. Rf3 Kb6 71. Kg2 Rc7 72. Rf2 Ka5 73. Qf4 Qg8 74. Kg3 Ka6 75. Qg4 Ka5
76. Rf3 Qe8 77. Qf4 Ra7 78. Rf2 Qg8 79. Kg2 Rc7 80. Qf3 Qe8 81. Rf1 Rb7 82.
Kg3 Qg8 83. Qg4 Rc7 84. Rf2 Ra7 85. Rf4 Qe8 86. Kg2 Kb6 87. Rf2 b4 88. cxb4
Rc7 89. Rf3 Ka7 90. Nf4 Nf8 91. Ne2 Re7 92. Nc3 Kb8 93. Rf2 Nd7 94. Qh4 Nb6
95. Qg4 Qd7 96. Rf8 Re8 97. Rxe8 Qxe8 98. Nf3 Qh8 99. Qg5 Nf7 100. Qg6 Nd8
101. b5 Qf8 102. Qg4 Kc8 103. Kf2 Kd7 104. Ke1 Nf7 105. Qf4 Qg8 106. Nh4
Nh6 107. Kd2 Kc7 108. Kc1 Qe8 109. Qg5 Qd7 110. Kb1 Kb7 111. Qg6 Qe7 112.
Ka2 Kc7 113. Qg3 Kb8 114. Qf4 Qd8 115. Qg3 Qe7 116. Qf4 Qd8 117. Kb1 Kb7
118. Ka1 Kc7 119. Qg3 Qe7 120. Kb1 Kb7 121. Ka1 Kc8 122. Qf4 Qe8 123. Ka2
Kd8 124. Qg5+ Qe7 125. Qxe7+ Kxe7 126. Kb1 Ng4 127. Kc2 Nf2 128. Ne2 Ne4
129. Nf3 Kd7 130. Nd2 Nf2 131. Nf4 Ke7 132. Nb1 Ne4 133. Ne2 Kd8 134. Nbc3
Ng5 135. Kd2 Nf3+ 136. Ke3 Nh4 137. Kf4 Ke7 138. Nd1 Ng2+ 139. Kg3 Ne1 140.
Kg4 Kf7 141. Kf4 Nc8 142. Ke3 g6 143. hxg6+ Kxg6 144. Kd2 Nd3 145. Nc1 Nf4
146. Kc3 Kf7 147. Kb4 Ke8 148. Kxa4 Ne7 149. Kb4 Kd8 150. b3 Nf5 151. bxc4
Nxd4 152. Ne3 Nf3 153. cxd5 exd5 154. Kc5 d4 155. Nc4 d3 156. Nb3 Kd7 157.
Nbd2 Ng5 158. Kd4 Nge6+ 159. Ke4 Ne2 160. Kxd3 Nc1+ 161. Kc3 Ne2+ 162. Kb4
N2f4 163. Ne4 Nd3+ 164. Kc3 Ndf4 165. a4 Nd5+ 166. Kb3 Ndc7 167. Kb4 Nd5+
168. Ka3 Ndc7 169. Kb4 Nd5+ 170. Kb3 Ndc7 171. Ne3 Kd8 172. b6 Na6 173. Kc4
Kc8 174. Kb5 Nb8 175. Nc5 Nd4+ 176. Kc4 Ndc6 177. e6 Kd8 178. Nd7 Nxd7 179.
exd7 Ke7 180. d8=Q+ Kxd8 1-0
{{</inlinechessgame>}}



#### Game 13: Benoni defense
**Book 1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. Nf3 g6 7. Nd2**

Another opening that SF does not understand but Leela does. SF plays on the q-side and keeps the center closed. Since in Benoni black must play on q-side and white in the center this results in a fighting draw where SF gets a pawn up but nothing to convert.


{{< chessdiagram "r2qr1k1/p1n2pb1/bp1p1npp/2pP4/P1N1P3/2N1BP2/1P2B1PP/R2Q1RK1 b - - 1 15" >}}


{{<inlinechessgame>}}
[Event "TCEC Season 17 - Superfinal"]
[Site "https://tcec-chess.com"]
[Date "2020.04.10"]
[Round "13.1"]
[White "Stockfish 20200407DC"]
[Black "LCZero v0.24-sv-t60-3010"]
[Result "1/2-1/2"]
[WhiteElo "3851"]
[BlackElo "3840"]
[ECO "A61"]
[Opening "Benoni"]
[Variation "Nimzovich (knight's tour) variation"]
[TimeControl "5400+5"]
[Termination "adjudication"]
[PlyCount "291"]
[GameDuration "03:26:24"]
[GameEndTime "2020-04-10T08:31:04.422 CST"]
[GameStartTime "2020-04-10T05:04:39.707 CST"]
[TerminationDetails "TCEC draw rule"]


1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. Nf3 g6 7. Nd2 Bg7 8.
e4 O-O 9. Be2 Na6 10. O-O Nc7 11. a4 Re8 12. f3 b6 13. Nc4 Ba6 14. Bg5 h6
15. Be3 Bxc4 16. Bxc4 a6 17. Qd2 Kh7 18. Rab1 Rb8 19. b4 b5 20. axb5 axb5
21. Be2 Nd7 22. bxc5 Nxc5 23. Nxb5 Nxb5 24. Bxb5 Re7 25. Bd3 Reb7 26. Rxb7
Rxb7 27. Rb1 Rxb1+ 28. Bxb1 Qf6 29. Bc2 Qa1+ 30. Qd1 Qa3 31. Qe2 Qa1+ 32.
Qd1 Qa3 33. Bf2 Qc3 34. g3 h5 35. Kf1 Kg8 36. Be1 Qe3 37. Bd2 Qa3 38. Kg2
Bf6 39. Qe2 h4 40. Be3 Nd7 41. Qd3 Qb2 42. Bf2 hxg3 43. hxg3 Qb4 44. Qb3
Qd2 45. Qd3 Qb4 46. Be3 Nc5 47. Qd1 Nd7 48. Qb1 Qc3 49. Qb3 Qa1 50. Qb4 Ne5
51. Bf2 Kg7 52. Qb3 g5 53. Bd1 Qa5 54. Qa4 Qd8 55. Be3 Qc8 56. Qc2 Qd8 57.
Qc1 Nd3 58. Qd2 Ne5 59. Be2 Qe7 60. Qc2 Qd8 61. Qd2 Ng6 62. Kg1 Qe7 63. Qb4
Ne5 64. Qb1 Ng6 65. Qc2 Qd8 66. Qc6 Qe7 67. Qc8 Qe5 68. Kf2 Qa1 69. Qc1 Qe5
70. Bd3 Qe7 71. Qc8 Qe5 72. Qc1 Qe7 73. Qc2 Ne5 74. Be2 Ng6 75. Qc8 Qe5 76.
Qc2 Qe7 77. Kg2 Qd8 78. Qc4 Qe7 79. Bb6 Qe5 80. Qc2 Qe7 81. Be3 Qd8 82. Qd2
Qe7 83. Qb4 Qc7 84. Qb3 Qe7 85. Qc4 Qd8 86. Bd1 Ne5 87. Qc2 Ng6 88. Be2 Qe8
89. Ba6 Ne5 90. Bd4 Qd8 91. Qc3 Ng6 92. Bc8 Bxd4 93. Qxd4+ Ne5 94. Bf5 Qf6
95. f4 gxf4 96. gxf4 Ng4 97. Qxf6+ Nxf6 98. Kf2 Kf8 99. Ke3 Ke7 100. Bh3
Kd8 101. Kd3 Nh5 102. Ke3 Nf6 103. Bg2 Nd7 104. Kd4 f6 105. Ke3 Nc5 106.
Bh3 Ke8 107. Kd4 Kd8 108. e5 fxe5+ 109. fxe5 Nb3+ 110. Kc4 Nd2+ 111. Kd3
Nb3 112. e6 Nc5+ 113. Ke3 Ke7 114. Kf3 Na4 115. Kf4 Nb6 116. Bg2 Kf6 117.
Be4 Na8 118. Bd3 Nc7 119. Bc4 Ne8 120. Ke4 Ke7 121. Kd4 Nf6 122. Ke3 Ke8
123. Kd4 Ng8 124. Bb5+ Ke7 125. Bd3 Nf6 126. Bb5 Ng8 127. Bf1 Ke8 128. Bd3
Ke7 129. Ke3 Nf6 130. Kd4 Ng8 131. Bc2 Nf6 132. Ba4 Ng8 133. Kc4 Nf6 134.
Bb3 Ng8 135. Bc2 Nf6 136. Bg6 Ng8 137. Kb5 Nf6 138. Kc4 Ng8 139. Kb5 Nf6
140. Kc6 Ng4 141. Be4 Nf6 142. Bf3 Ng8 143. Bd1 Nf6 144. Bf3 Ng8 145. Kb6
Nf6 146. Kb7 1/2-1/2
{{</inlinechessgame>}}


#### Game 14: (Leela +1)
New nightmare for SF. It swaps, early in the game, the Bg7 against the Nc3 and allows white to block q-side with Nb6. The only compensation it gets is the e-pawn. All Benoni players know that it is not enough. Weaknesses on DS and closed q-side is too much. At this point, on move 19, the game is positionaly lost and SF eval is just +0.7 Leela fights to take control of the e-file, SF gives the pawn back on the a-file to delay the logical result : Leela wins with a devastating rook on e6.


{{< chessdiagram "1rb1nrk1/1p2q2p/pN1p2p1/2pP1p2/P3nP2/2P2B1P/6PK/R1B1QR2 b - - 1 19" >}}


{{<inlinechessgame>}}
[Event "TCEC Season 17 - Superfinal"]
[Site "https://tcec-chess.com"]
[Date "2020.04.10"]
[Round "14.1"]
[White "LCZero v0.24-sv-t60-3010"]
[Black "Stockfish 20200407DC"]
[Result "1-0"]
[WhiteElo "3840"]
[BlackElo "3851"]
[ECO "A61"]
[Opening "Benoni"]
[Variation "Nimzovich (knight's tour) variation"]
[TimeControl "5400+5"]
[Termination "adjudication"]
[PlyCount "171"]
[GameDuration "03:14:47"]
[GameEndTime "2020-04-10T11:47:01.711 CST"]
[GameStartTime "2020-04-10T08:32:14.706 CST"]
[TerminationDetails "TCEC win rule"]


1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. Nf3 g6 7. Nd2 Bg7 8.
e4 O-O 9. Be2 Nbd7 10. h3 Ne8 11. O-O a6 12. a4 Rb8 13. Nc4 Qe7 14. f4 Bd4+
15. Kh2 Ndf6 16. Bf3 Bxc3 17. bxc3 Nxe4 18. Qe1 f5 19. Nb6 N8f6 20. c4 Bd7
21. Ra3 h5 22. Kg1 Rf7 23. Re3 a5 24. Qxa5 Qd8 25. Bb2 h4 26. Rfe1 Kh7 27.
Rb3 Qf8 28. Bxf6 Nxf6 29. Qd2 Qg7 30. a5 Kg8 31. Qf2 g5 32. Nxd7 Nxd7 33.
Bh5 Rff8 34. Re6 Nf6 35. Qe2 Qh6 36. Bf3 g4 37. hxg4 fxg4 38. Bxg4 Qxf4 39.
Bh3 Qc1+ 40. Qe1 Qxe1+ 41. Rxe1 Kg7 42. Rb6 Rfd8 43. Reb1 Ra8 44. Rxb7+ Kg6
45. Ra1 Ra6 46. Rb6 Ra7 47. a6 Kg5 48. Rf1 Nh5 49. Rf5+ Kg6 50. Re5 Nf4 51.
Kh2 Kh6 52. Rf5 Nh5 53. Bg4 Ng3 54. Re5 Kg6 55. Bd1 Rf7 56. Bc2+ Kf6 57.
Re6+ Kg5 58. Rbxd6 Rxd6 59. Rxd6 Ra7 60. Bd3 Kf4 61. Re6 Kg4 62. Kg1 Kg5
63. Kf2 Nh5 64. Kf3 Nf6 65. Ke3 Ng4+ 66. Kd2 Kf4 67. Be2 Ne5 68. Kc3 Rg7
69. Bf1 Ra7 70. Kb3 Ng4 71. Ka4 Ra8 72. Kb5 Ne5 73. Kxc5 Rc8+ 74. Kd4 Nd7
75. Re7 Nc5 76. a7 Nb3+ 77. Kc3 Nc5 78. Kb4 Ne4 79. g3+ Kf3 80. gxh4 Ra8
81. Bg2+ Kxg2 82. Rxe4 Rxa7 83. d6 Rb7+ 84. Kc5 Rf7 85. Re7 Rf5+ 86. Kb6
1-0
{{</inlinechessgame>}}

#### Game 15: Modern, Robatsch defense (Leela +1)
**Book 1. e4 g6 2. d4 d6 3. Nc3 a6**

SF chooses the 3 pawns attack, Leela reacts immediately with a6-b5 and, for a pawn, gets the control of LS on the q-side and the center. On move 20, she has enough counter play to get an easy draw in a simple endgame. Good positional play for Leela


{{< chessdiagram "1r1q1rk1/1b1nppbp/p5p1/4N3/P2P1P2/2P5/2Q1N1PP/1RB2RK1 b - - 8 21" >}}


{{<inlinechessgame>}}
[Event "TCEC Season 17 - Superfinal"]
[Site "https://tcec-chess.com"]
[Date "2020.04.10"]
[Round "15.1"]
[White "Stockfish 20200407DC"]
[Black "LCZero v0.24-sv-t60-3010"]
[Result "1/2-1/2"]
[WhiteElo "3851"]
[BlackElo "3840"]
[ECO "B06"]
[Opening "Robatsch (modern) defence"]
[TimeControl "5400+5"]
[Termination "adjudication"]
[PlyCount "70"]
[GameDuration "01:47:40"]
[GameEndTime "2020-04-10T13:35:52.569 CST"]
[GameStartTime "2020-04-10T11:48:11.706 CST"]
[TerminationDetails "TCEC draw rule"]


1. e4 g6 2. d4 d6 3. Nc3 a6 4. f4 b5 5. Bd3 Nd7 6. a4 b4 7. Nce2 c5 8. c3
d5 9. exd5 Ngf6 10. Nf3 Bg7 11. O-O bxc3 12. bxc3 Nxd5 13. Bc4 Bb7 14. Qb3
N7b6 15. Rb1 Nxc4 16. Qxc4 Nb6 17. Qxc5 Nd7 18. Qc4 Rc8 19. Qb3 Rb8 20. Qc2
O-O 21. Ne5 Ba8 22. Rxb8 Nxb8 23. Ba3 Qd5 24. Rf2 Nc6 25. Nf3 Rc8 26. Qd3
Qa5 27. f5 Qxf5 28. Qxf5 gxf5 29. d5 Nb8 30. Bxe7 Bxd5 31. Nfd4 Be4 32. Bd6
Rd8 33. Bc7 Rc8 34. Bd6 Rd8 35. Bc7 Rc8 1/2-1/2
{{</inlinechessgame>}}


#### Game 16: (SF equalizes)
Drama Leela blunders and loses the game. She chooses a Be3, h4, 0-0-0 setup and begins a long positional torture. But SF manages to resist and Leela blunders.


{{< chessdiagram "4r3/1r3qk1/4p1p1/3pR1Pp/p1p2P1P/P1P1Q3/KP2R3/8 w - - 5 62" >}}


{{<inlinechessgame>}}
[Event "TCEC Season 17 - Superfinal"]
[Site "https://tcec-chess.com"]
[Date "2020.04.10"]
[Round "16.1"]
[White "LCZero v0.24-sv-t60-3010"]
[Black "Stockfish 20200407DC"]
[Result "0-1"]
[WhiteElo "3840"]
[BlackElo "3851"]
[ECO "B06"]
[Opening "Robatsch (modern) defence"]
[TimeControl "5400+5"]
[Termination "adjudication"]
[PlyCount "391"]
[GameDuration "03:39:53"]
[GameEndTime "2020-04-10T17:16:55.771 CST"]
[GameStartTime "2020-04-10T13:37:02.705 CST"]
[TerminationDetails "TCEC win rule"]

1. e4 g6 2. d4 d6 3. Nc3 a6 4. Be3 Bg7 5. h4 h5 6. Nh3 Bxh3 7. Rxh3 Nd7 8.
Qe2 Qc8 9. O-O-O c5 10. Kb1 b5 11. Nd5 Ngf6 12. dxc5 Nxd5 13. exd5 Nxc5 14.
Bd4 O-O 15. Re3 Qf5 16. g3 Bf6 17. f3 Bxd4 18. Rxd4 Ra7 19. Qd2 Qf6 20. a3
Rb7 21. Rf4 Qh8 22. Qe1 Re8 23. g4 Qh6 24. Rb4 Qh8 25. Rf4 Qh6 26. Rb4 Qh8
27. g5 Kh7 28. Ka2 Ra7 29. Rf4 Qg7 30. c3 Qf8 31. Rd4 e5 32. dxe6 fxe6 33.
Qd2 d5 34. Be2 Rae7 35. Bd1 Nb7 36. Qh2 Rf7 37. Bc2 Nd6 38. Bd3 Nc4 39.
Bxc4 bxc4 40. Qe2 Rfe7 41. Re5 a5 42. Ka1 a4 43. Qe3 Kg7 44. Ka2 Kh7 45.
Rd2 Qg7 46. Ka1 Qf7 47. Rd4 Qg7 48. Qe1 Qf7 49. Qe3 Qg7 50. Kb1 Qf8 51. Ka2
Qg7 52. Ka1 Kh8 53. Rd2 Qf8 54. Ka2 Kh7 55. Rg2 Qg7 56. Rf2 Qf8 57. Rg2 Qg7
58. Rf2 Qf8 59. f4 Qf7 60. Rg2 Kg7 61. Re2 Rb7 62. Qd4 Kh7 63. Qe3 Kg7 64.
Rd2 Ree7 65. Qd4 Kh7 66. Qe3 Qe8 67. Qe1 Kg7 68. Qe3 Qd7 69. Qd4 Kg8 70.
Rde2 Qb5 71. Ka1 Qd7 72. R5e3 Qe8 73. Re1 Kh7 74. R3e2 Qf7 75. Re5 Re8 76.
Qf2 Qd7 77. R1e2 Qf7 78. Re1 Rb3 79. Qe3 Rb7 80. Rf1 Ree7 81. Re1 Re8 82.
f5 gxf5 83. Rd1 Rbe7 84. Re1 Rb7 85. Rd1 Rbe7 86. Rf1 Kg8 87. Rf4 Kg7 88.
Qd4 Kh7 89. Rf1 Rb8 90. Qe3 Rbe8 91. Qe2 Kg7 92. Rf2 Kh7 93. Rf1 Kg8 94.
Qe3 Kh7 95. Ka2 Kg7 96. Rf2 Kg8 97. Re2 Rb7 98. Ka1 Kg7 99. Qd4 Kh7 100.
Qf2 Kg8 101. Qe3 Qg6 102. Re1 Kh7 103. Rd1 Rbb8 104. Re1 Rb7 105. Rf1 Ree7
106. Qe1 Qe8 107. Qe2 Kg8 108. Rd1 Qf7 109. Re1 Rbd7 110. Rg1 Qg6 111. Rf1
Qf7 112. Qe3 Rb7 113. Re1 Qe8 114. Rd1 Qb5 115. Qe2 Qe8 116. Rd2 Rbd7 117.
Rd1 Rd6 118. Qe3 Qg6 119. Qc5 Red7 120. Rf1 Qf7 121. Rd1 Kh7 122. Rde1 Kg7
123. Kb1 Rd8 124. Qe3 Rf8 125. Qc5 Ra6 126. Qe3 Qg6 127. Qc5 Kg8 128. Ka1
Qf7 129. Qb5 Rfa8 130. g6 Qxg6 131. R5e2 Kh8 132. Qd7 R8a7 133. Qb5 Qg8
134. Rh2 Ra8 135. Qc5 Qf7 136. Qd4+ Kh7 137. Rg2 Rg8 138. Rxg8 Qxg8 139.
Rg1 e5 140. Qc5 Qf7 141. Rg5 Rg6 142. Rxh5+ Rh6 143. Rg5 Rxh4 144. Rg1 f4
145. Qf2 Rh6 146. Kb1 Rh5 147. Ka2 e4 148. Qe2 f3 149. Qf2 Qc7 150. Qe3 Qf7
151. Qf2 Qc7 152. Qe3 Rh3 153. Rd1 Qb7 154. Rb1 Qf7 155. Qf2 Kg6 156. Rg1+
Kf5 157. Qc5 Kf4 158. Qd6+ Ke3 159. Qb6+ Ke2 160. Qd4 f2 161. Qd1+ Ke3 162.
Qd4+ Kf3 163. Qd1+ Kf4 164. Qd2+ e3 165. Qd4+ Kf5 166. Qg4+ Kf6 167. Qd4+
Ke7 168. Qe5+ Kd7 169. Rg7 f1=Q 170. Qxd5+ Ke8 171. Qa8+ Ke7 172. Qb7+ Kf8
173. Rxf7+ Qxf7 174. Qc8+ Ke7 175. Qxh3 e2 176. Qh4+ Qf6 177. Qg3 Qe6 178.
Qc7+ Ke8 179. Qb8+ Kd7 180. Qb7+ Kd6 181. Qb6+ Kd5 182. Qb7+ Ke5 183. Qh1
Kf4 184. Qh2+ Ke3 185. Qg1+ Kd2 186. Qd4+ Kc2 187. Qf2 Qe4 188. Qh2 Kd1
189. Qh5 Qc2 190. Qg4 Kc1 191. Qg1+ Qd1 192. Qg5+ Qd2 193. Qg1+ e1=Q 194.
Qxe1+ Qxe1 195. Ka1 Kc2+ 196. Ka2 0-1
{{</inlinechessgame>}}


#### Game 17: Budapest gambit
**Book 1. d4 Nf6 2. c4 e5 3. dxe5 Ng4**

SF chose a solid a2-b3-c4, e3-f4 and Bd2 setup. Leela reacts with g6 and Bg7 and begins to attack the q-side. After all pawns disappear on the q-side and center and some piece swap, SF wins a pawn but with the pawns only on k-side this is not enough to win. Good positional evaluation of the game for Leela.


{{< chessdiagram "r1bq1rk1/1pp2pbp/n2p2p1/p1n5/1PP2P2/P1N1PB2/1B4PP/R1NQ1RK1 b - - 0 15" >}}



#### Game 18:
A masterpiece of positional play. May be one of the best games of the match. A very complex game to watch absolutely and to analyse with an engine. Leela decides for the same pawn setting that SF chose in the previous game. But she puts the pieces on other squares compared to SF and begins a long positional domination of all parts of the board. She manages to get SF queen for two rooks and a pawn, and something that seems to be a drawn endgame. She continues the pressure and gets a likely won game threatening to infilter her king on weak LS in the k-side. SF sees the win and she misses it in zeitnot. 5 second increment is not enough for her to play such a difficult attack. Draw.


{{< chessdiagram "1r6/1r2k1p1/1pQpBb1p/p2P4/P4P2/1P3K2/7P/8 w - - 25 53" >}}



#### Game 19: Sicilian
**Book 1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Qb6 5. Nb3 Nf6 6. Nc3 e6 7. Qe2**

Leela 7...Be7 seems to be a new move. She manages to equalize pushing the d7 pawn to d5. After a fight around isolated d5, SF gets nothing. Draw.


{{< chessdiagram "r1b1k2r/ppq1bppp/2n1pn2/3p4/4P3/1NN1B3/PPP1QPPP/2KR1B1R w kq - 0 10" >}}




#### Game 20:
Long positional torture. Leela gets the d-file and space on the k-side. SF gets enough counter play on semi-open b-file after Leela castles long. Draw.


{{< chessdiagram "r3r1k1/4qppp/2ppb3/p3n3/4P3/P1B1Q3/1PP1B1PP/2KR3R b - - 3 23" >}}



#### Game 21: KID, Saemisch variation
**Book 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 Nc6 7. Nge2 a6 8. Qd2 Rb8 9. Rc1 Bd7**

SF attacks the k-side but Leela reacts opening lines and sacking pawns in the q-side and center. She gets a piece for 4 pawns and a draw in the endgame.


{{< chessdiagram "1r1qr1k1/3b1p2/5bpB/3Ppn2/p1R4P/1PN2P2/P2Q1KP1/5B1R w - - 0 24" >}}


#### Game 22:
A masterpiece of positional play. Leela gets DS control on the q-side, a dangerous passed pawn on d6 and an attack on the k-side. Dominating all the board with the king in the center. SF finally manages to sac the exchange and win the d6 pawn and gets enough counter play against the exposed white king. A fighting draw.


{{< chessdiagram "4rnk1/1q2Brb1/p1pP2p1/1p2p3/4P3/1P2Q2N/P7/2R1KR2 b - - 2 38" >}}



#### Game 23: Ruy Lopez, Schliemann variation
**Book 1. e4 e5 2. Nf3 Nc6 3. Bb5 f5 4. Nc3 fxe4 5. Nxe4 d5**

An opening typical of correspondence play and very risky, quasi-winning variation for white Leela manages to hold against SF in a brilliant way : sacrificing 2 pawns for attack and activity, playing good attacking and defensive moves, she manages to outclass SF on its own ground. Really impressive.
The key of the defense was the control of the e-file, LS on queen-side and a dominating knight in the center. After that, SF eval goes to 0. Draw.


{{< chessdiagram "2k1r3/2pr2pp/3q4/1p1n4/1P1P4/1R1QBR1P/P1P3P1/3K4 w - - 0 25" >}}


#### Game 24:
SF chooses one of the main lines that allows it to keep a long time a very annoying e4 pawn against two pawns. This pawn is a pain because it prevents normal development for Bc1 and Ra1. Leela plays one of the usual lines known from correspondence games and the game ends in a draw.


{{< chessdiagram "3rr1k1/1p5p/2p3p1/8/P1Pbp3/2Nn4/1PKPR1PP/R1B5 w - - 2 24" >}}



#### Game 25: Slav defense, Alapin variation.
**Book 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bg4 6. Ne5 Bh5 7. f3 Nfd7 8. Nxc4 e5**

A very biased and complex opening that looks like winning for white. White has a lot of space and Leela as black lacks room for her pieces. Playing e5 at the end of book she decides to sac a pawn to gain a tempo to develop the DSB perhaps her best piece and acting on the center with a temporary pin of the Nc3.
At this stage black position looks horrible. Nevertheless white chooses a line that causes him some issue to develop and black manages to take control on the d-file.


At that point SF decides to return the pawn to fluidify its development and swaps a knight and a rook. After this it seems that black takes an option on DS and that swapping better favours black than white.


In fact, Leela and SF often have the same PV as if SF is playing against itself. This results in an eval that decreases slowly, numbers of forced moves for Leela and a position virtually drawn. The decision to return the pawn seems, now, very doubtful since it results in a 3 to 1 pawn advantage for Leela on q-side. White has no play on that wing and this limits win possibilities.


{{< chessdiagram "r5k1/pp2q1pp/n1p1Pp2/b1n2P1b/P2r4/2N1N1PB/1PQ1P2P/R1B2RK1 w - - 7 18" >}}


#### Game 26: (Leela +1)
Contrary to SF, Leela chooses to swap the good black DSB and the queen and enters an endgame a pawn up and with a better pawn structure on q-side. With space and development advantage. Then she takes her time in a long positional torture typical of her play and finally wins. After 1/4 of games played there is no doubt that Leela dominates this match and that SF only resists because of the incredible calculus power given by the 176 threads.


{{< chessdiagram "rnr5/pN1nkppp/2p5/7b/P1Np4/5P2/1P1KP1PP/R4B1R w - - 1 16" >}}


#### Game 27: QID (SF equalize)
**Book 1. e4 b6 2. d4 Bb7 3. Bd3 e6 4. Nf3**

The game early transposed to a French defense, advance variation. Good defensive play by Leela, very clever and not so bad play by SF until Leela blunder in zeitnot.


{{< chessdiagram "2rnb1k1/2r3p1/1p2p2p/3pPpqP/1Q1P4/pP1B2P1/P3NPK1/1R5R b - - 7 31" >}}



#### Game 28: (Leela +1)
The game transposes also in French advance. SF plays the anti positional c4? and Leela a clever h4-h5, Rh3-g3, Kf1-g1. Black gets the q-side and white the k-side. But white has more space for the attack than black (c4 limits the attacking possibilities). Finally Leela manages to immobilise Bf8 and Rh8 with simple threats on g7 with the Rg3, plays f5, gets the center, swaps good black pieces and wins the endgame despite time pressure when black has only its bad pieces, DSB and Rh8.


{{< chessdiagram "1n2kb1r/2qbnpp1/4p2p/p3P2P/1p1P1N2/3BB1R1/R2NQPPK/2r5 b k - 7 36" >}}


#### Game 29: QID (SF equalize)
**Book 1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. a3 c5**

A position known from A0 games is on the board! Leela plays a better defense than SF8. Positional fight. But on move 30 SF is a pawn up without compensations for black. 10 moves later SF gets the a-pawn and a passer. Maybe a Leela blunder but the position looks difficult. Now it seems desperate for Leela that tries a dynamic defense against the white king in the center and pushes a fawn in h3. But SF eval more than 3 lets few hope. All piece swapping is good for white and the a-passer is also dangerous. Leela can not answer all the threats and loses.


{{< chessdiagram "1r4k1/5p2/3p1qp1/p2P3p/3NP3/P3KPPb/3Q3P/4R3 b - - 1 38" >}}


#### Game 30:
Same A0 position on the board. Like Leela in the previous game SF declines the d pawn gambit and Leela contrary to the Fish attack with h4-h5-hxg6. In pure A0 style, she then transfers the queen to the k-side with Qa4-h4 but SF manages to swap queens and enters a positional endgame. Leela dominates the q-side and center with a protected passer and SF has an edge on the k-side. The position remains very closed. After 31.b4 Leela enters a RB+P vs RB+P endgame that SF seems to think is winning but she does not succeed to convert. Great positional game but draw.


{{< chessdiagram "r6r/3n1kb1/p7/PppPp1p1/4Pp2/1P1N1P2/2KB2P1/5R1R w - - 6 31" >}}


#### Game 31:
**Book 1. e4**

SF plays the Ruy Lopez and Leela chooses the Berlin defense. Leela, thanks to the bishop pair and some weaknesses in white pawn structure, gets a small edge and after sacking the exchange for two pawns manages to get a good endgame. But the game ended as a draw. Good positional play.


{{< chessdiagram "3r1r1k/p1p1bqp1/1pp1bpnp/P3p3/1P2P3/1NPPBP2/2QN2PP/1R2R1K1 b - - 1 24" >}}


#### Game 32:
A Sicilian Najdorf with e5 where SF sacs the exchange for the e4 pawn and gets a strong center. After a complex middle game Leela gets an endgame where the exchange-up was more sensible but does not succeed to win. Draw.


{{< chessdiagram "3qk2r/1p1nb1pp/p2pb3/P3pp2/4n3/1NPQB3/2P1BPPP/R4RK1 w k - 0 14" >}}



#### Game 33: KID, classical (SF +1)
**Book 1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 d6 5. Bg2 O-O 6. Nc3 Nbd7 7. O-O e5 8. e4 c6 9. h3 Qb6 10. c5 dxc5 11. dxe5 Ne8**

Sub variation where pawns repartition is very unbalanced after exchange. White has a strong majority on k-side and black on q-side. This majority gives the game to white on move 29. Leela sees only on move 35 that there may be a problem (SF eval >7) and on move 38 that the game is lost. This shows the power of the 176 threads and also why she has so much difficulty to lead despite a better positional play in almost all games.


{{< chessdiagram "1r2r1k1/pb3p1p/2p3p1/1pq2P1P/2pRP1P1/P7/1P3QB1/3R2K1 b - - 0 29" >}}



#### Game 34: (Leela equalize)
Leela played 12.e6 at the end of the book and closed the center. Later on, SF plays the strange new move 17...Rd7 that seems ugly and forces Leela to put her queen on a better square. Later on, bis repetita, 25...Ba6 forced an unexpected rook move 28.Rf2 and the SF eval began to rise (if SF, I would have played the Leela move). SF got a position with a horrible bad bishop, an attack against its king and rooks and queen blocked by pawns. Only a strong knight in the center. Finally SF sacs the exchange to get rid of a strong Ne6 and loses a technical endgame.


{{< chessdiagram "r1bq3k/4r2p/2pNp1pP/pp1nP1Q1/2p2P2/P1P3PB/R4R1K/8 b - - 1 34" >}}



#### Game 35: Sicilian, Dragon, Yugoslav Attack
**Book 1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6 9. Bc4 Qa5 10. O-O-O Bd7**

Generally this is a 1-0 opening for computers. SF plays it in a very personal fashion. Leela went for the thematic exchange sac in c3 but SF declines it and swaps the queens. But Leela had to sac a piece for a dangerous h7 pawn. And SF manages to take the Ra8 for 3 pawns. It seems it will win even if Leela had 2 connected and protected passers on k-side.
SF wins a pawn and sac a piece for 2 pawns. Now it is an exchange up. But it had to return the exchange for the two passers and loses a central pawn and finally gets a BPPP vs NPP endgame. All the q-side pawns remain and are in the starting position. And Leela holds... What a game!


{{< chessdiagram "R7/pp1bppk1/3p4/r3n1p1/3NP3/1B3p2/PPP5/1K1R4 w - - 0 27" >}}





#### Game 36: (Leela +1)
There is little doubt that Leela will win this game. She plays the thematic Nd5 move to inflict structural damages to SF swapping the Nf6 and the Qa5 for double f-pawns and an isolated d-pawn. Advancing pawns SF allows Leela to trade a rook pair and LSB for the knight. Some pawn exchanges later she gets a winning ending: opposite color bishops and rooks but 3 connected passers. She trolls at the last move with a Rg4 sac to get a 6 men TB win!


{{< chessdiagram "r1r2k2/p2b1pb1/3p1pp1/1p2n2p/3NPB1P/1B3P2/PPPR2P1/1K5R b - - 1 18" >}}



#### Game 37: (Leela +1)
**Book 1. c4 Nc6**

Starting from an English opening the game evolves to a QGD, exchange variation structure with a weak c6 square since Leela played b6. SF decides for a3-b4 pushes and got a very bad DSB. So Leela chooses to "waste" 3 tempos to swap LSB and fight for LS control. After a pair of rook swap along a-file, began a long sequence of piece moves for better positions as if SF is not aware of its bad DSB. Finally Leela equalizes, gets a pawn and two connected passers and SF is forced to take a perpetual. Draw.


{{< chessdiagram "rn1q1rk1/p1p1bppp/bp3n2/3p4/1P1P4/P1NBPN2/2Q2PPP/R1B1K2R w KQ - 1 11" >}}


#### Game 38: (Leela +2)
May be the worst SF game in TCEC history. SF chooses a system that gives a good advantage to white: the bishop pair, a good center and DS control. As a compensation black has a short development advantage and an advanced e-pawn.


White castled long and the fight is promising but with 17...c5?? Fish closes the q-side after the obvious 18.a4 that Leela plays. Its eval rises to 2 but too late. Now Leela should win. New mistake 20...Nd3?? and Leela gets a central pawn and swaps the knight. Now all endgames are losing since the a-pawn will fall in the endgame. After Be1, Ra3 Leela attacks this pawn and Fish makes a third positional mistake swapping the queens. The game is totally lost for Fish but its eval is just +3. Leela eval is close to 3.5 and everybody knows what that means.


{{< chessdiagram "r1r3k1/1p2qpp1/3p1n1p/1PpPn3/p1P1p3/2B1P2P/1PQ1BPP1/1K1R2R1 b - - 1 20" >}}



#### Game 39: French Defense, Classical, Steinitz variation (Leela +2)
**Book 1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. e5 Nfd7 5. f4 c5 6. Nf3 Nc6 7. Be3 a6 8. Qd2 b5 9. Nd1 Bb7**

Like all good french players, Leela attacked the center and the q-side without castling. The center stabilizes with d5-e6-f5 for black and d4-e5-f4 for white. Both opponents have a bad bishop since SF chooses to keep its bad DSB when swapping around d4. Fish attacks the k-side with Rf3-h3 and Leela castles short under fire and answers g4 with b3. At this point SF understands it has nothing. The q-side explodes after Leela adds the a3 push.
Then Fish makes a positional blunder, closing the k-side with g5. Now Leela can use all her pieces on the q-side. She plays a little combination to swap white LSB for a knight. She is a pawn down but with better pieces, space and perspectives. The position is equal. Draw.


{{< chessdiagram "r4rk1/1b1n2pp/1qn1p3/3pPp2/3P1PP1/pp2B2R/PP3Q1P/RB1N2K1 w - - 0 21" >}}


#### Game 40: (Leela +2)
Fish, like Leela in the previous game, attacks the center and the q-side without castling. But Leela does not take the same swapping decisions in the battle around c3 and d4. She prefers keeping a pawn on c3 and uses the d4 square for a piece. A typical french treatment of the position. But she let Fish swap a knight for her LSB, which is a strange decision. Then sacs a pawn to open the center playing 17.f5 a thematic push in front of the SF king. The position looks tactically complicated and dangerous for black but Fish thinks all is OK. It castles short and Leela sacs the a new pawn in f6 while c3 is also hanging. The two sacs are declined and a fawn appears when Fish plays g6. Now Leela has an option on DS on the k-side and center. The position simplifies. Fish is a pawn up with a bad LSB and Leela has a knight and dominates DS thanks to her fawn.


Finally Leela got an endgame B+pawns vs N+pawns where she thinks to have a great advantage despite a pawn less. Fish eval is 0 since a long time. The black king is in a box, pawns are blocked. The white king can go everywhere on the board but without real threats. Draw.


{{< chessdiagram "r3k2r/1bq1bppp/p1n1p3/3pPP2/3N4/2PQB3/P5PP/1R1N1RK1 b kq - 0 17" >}}



#### Game 41: Old Benoni (Leela +2)
**Book 1. d4 c5 2. d5 e5 3. e4 d6**

This blocked pawn structure in the center is perfect for Leela. SF developed slowly controlling the q-side and attacking the k-side with a strong advantage, all pawns on white square. Leela swaps her bad DSB for the good white DSB and counter attacks on q-side with a pawn sac that SF takes time to accept. After many swapping the game ends in a drawn rook ending. SF pawn up in the center is not really usable.


{{< chessdiagram "rr5k/3bqp1n/p2p1np1/1p1Pp2p/PRN1P1P1/2NB1P1P/2P2QK1/7R w - - 0 37" >}}




#### Game 42: (Leela +2)
After seeing the previous game there is little doubt that Leela will win this game. 


The game starts the same way, Leela searching to limit black play on the q-side but contrary to Fish she manages to push a5 and to play Nb6 for a total blockade. Then she turns her attention to k-side where she manages to keep control on DS with h4-g3 and keeping the bishops on the board. The position looks strong for white (Leela eval +2). 


Leela keeps her king in the center, while SF manages to swap its good LSB for Leela bad DSB, she uses the DSB as a threat but refuses to swap and waits for better rooks position before the opening of k-side. Leela slowly takes control of all the board and manages to slightly modify the pawn structure in her favour. Semi-open h-file with h6 as a target, semi-open e-file with the threat to push e5 swapping d6 and creating a passer and threat to open q-side at any time pushing b-pawn. Rooks and queens still on the board, black bad DSB and white Nc4 controlling b6 (Leela eval >3).


Leela finally opens the b-file without getting any advantage and the game ends in a draw.


{{< chessdiagram "4rbk1/1p1r4/p2p2qp/P1pP2p1/2N1PpP1/1PPQ1P2/5KR1/7R w - - 0 37" >}}




#### Game 43: Scandinavian defense (Leela +1)
**Book 1. e4 d5 2. exd5 Qxd5 3. Nc3 Qd6 4. d4 Nf6 5. Nf3 a6 6. g3**

An inferior variation of the Scandinavian defence and quasi-winning for white. 


Leela develops with Bg4 and Nc6 and SF reacts with thematic h3-g4, Ne5, Bg2 and then h4 setup. As a result it trades the Bg2 for the Nc6 and the Ne5 for the Bg6 inflict heavy structural damages: c and g doubled pawns, isolated e-pawn. Then it castles long and gets a winning attack against Leela king in the center. 


Leela desperately searches for counter play with heavy pieces on q-side. SF sacs the exchange to end Leela attack and get a N+pawns vs R+pawns endgame that it wins thanks to 2 advanced passers and the threats of forks by the knight.


{{< chessdiagram "r4b1r/2p2kp1/p1p1pnp1/7p/1q1P1BPP/2NQ4/PPP2P2/2KR3R b - - 3 16" >}}



#### Game 44: (Leela +2)
This opening seems really too biased in white favour. Leela treats the position in her own way: a positional approach. She early gets the bishop pair against two knights, castles long and pushes a fawn in h6. SF reacts attacking the q-side but around move 35 the game is nearly winning for white: not enough threats on the q-side whereas white controls all the board with her aggressive bishop and the fawn, and also threatens the f5 devastating push.


Finally she pushes g5, consolidating the fawn and the grip on the k-side. She gets the a-pawn so that all endgames are lost. Trading pieces is the most simple winning plan. 


She wins the endgame trading pieces and getting more pawns.


{{< chessdiagram "r4rk1/1p1n1ppp/p1p1pn2/q7/3P4/P1B2BPP/1PP1QP2/1K1R3R b - - 0 17" >}}



#### Game 45: Benko Gambit (Leela +2)
**Book 1. d4 Nf6 2. c4 c5 3. d5 b5 4. Qc2 Na6**

A strange variation with the weird Na6. I suppose Qc2 idea is to decline the gambit so SF continues with 5.a3 and with 5...b4 Leela justify the knight position.


Before move 20, Leela attacks the k-side with a bishop sac that SF declines, all her pieces are on efficient squares except maybe the Na6. White is underdeveloped on the q-side. Leela equalizes.


Now she focuses on q-side and the center with the e4 push and Fish releases the tension, swapping pawns in b4. With Nxb4, Leela gives a good square to the knight. SF swaps queens and sacs the exchange for a pawn and after a long tactical sequence Leela finally gets a knight for 2 pawns, then only… But SF has a perpetual. Draw.


{{< chessdiagram "2bq1rk1/pr4bp/n2p4/2pPpp1Q/1pP5/P5PP/1P1N1P2/RBB1R1K1 b - - 2 21" >}}



#### Game 46: (Leela +2)
Fish with black decides to attack the q-side and thinks it has equalized after a few moves. Leela Thinks she has a good edge. The q-side closes on move 16.b3. White pieces seem to occupy a better position to attack. 


Now, white can turn attention to the center and k-side with for example Nh2, f4 or may be g4. But she prefers a slow setup with Be3, Re2, Kh1, Nd2, Nh2, Rfe1. In fact she has time since half of black pieces are on q-side and have no position to occupy on k-side. SF seems to understand that its 0 eval is too optimistic and Leela fans see a won game.


But the e-file opens and it appears that heavy pieces must occupy it and exchange. So that the game ends in a draw.


{{< chessdiagram "rnbq1rk1/3nppbp/3p2p1/p1pP4/PpP1P3/1P1B1N1P/R4PP1/1NBQ1RK1 b - - 0 16" >}}



#### Game 47: Caro-Kann Defense, advance variation (Leela +2)
**Book 1. e4 c6 2. d4 d5 3. e5 Bf5 4. Nc3 e6 5. g4 Bg6 6. Nge2 c5**

A good opening for a double kill by Leela. After swapping one pawn, bishops and a knight, the k-side pawn and the center structure is blocked. The SF eval remains to 0 whereas Leela eval gives her a strong advantage.


But the engines close the q-side and despite the very optimistic Leela eval it is a draw and a very deceiving game : it started from an interesting position but the engines played it like humans that wanted a draw.


{{< chessdiagram "2r1k2r/1p3p2/p3p1n1/2qpPpPp/P4P1P/2P4R/1P1QN3/R3K3 b Qk - 1 24" >}}


#### Game 48: (Leela +2)
The game begins with 15 tactical moves to reach an equal endgame where Fish is a pawn up. After some piece positioning moves and a new wild long swapping sequence the game reaches a drawn simple QP vs RNPPP endgame. This game is based all along on dynamic equality. Who said that Leela is not good at tactics ? 


{{< chessdiagram "r5nr/1p3pN1/pk2p3/4n1B1/3pb1PP/7R/P4P2/2R1KB2 w - - 0 22" >}}

#### Game 49: KID (Leela +2)
**Book 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. h3 O-O 6. Be3 c5 7. Nf3 Qa5 8. Nd2 cxd4 9. Nb3 Qxc3+ 10. bxc3 dxe3**

A good starting position from Firouzja, Alireza  (2682) vs Karthikeyan, Murali  (2593), 18th Asian Continental,  2019/06/11,  0-1.


In this position white has a queen for knight, bishop and a pawn, but heavy structural damages. There are good outposts for black knights, strong Bg7 (white DS are very weak), bishop pair, and white double pawn on semi-open c-file. Holding this is a pain.


After swapping black LSB for a knight on e6 square, Leela takes with f-pawn opening the f-file. SF tries to find counter play on the a-file and Leela gets a dangerous passer on the a-file that she leads to a3 after pushing h-pawn to h3.


At that point after a few shuffling moves Leela eval goes to -2 and SF eval becomes negative. But in zeitnot, with 5s increment, Leela does not manage to find the win. Draw.


{{< chessdiagram "rnb2rk1/pp2ppbp/3p1np1/8/2P1P3/1NP1p2P/P4PP1/R2QKB1R w KQ - 0 11" >}}


#### Game 50: (Leela +2)
Leela plays f4 and sacs the exchange and c3 pawn to get the Bg7. One of the big problems for white is DS weaknesses, now this problem is solved and she thinks she gets an edge.


She takes the e3 pawn with the king and pushes a fawn to h6 then sacs a pawn to open lines and gets a strong attack but it is not enough. Fighting draw.


{{< chessdiagram "3r1rk1/pb1n1p1p/np1p2pP/4p3/2P1PP2/1N2K3/P3B1P1/Q6R b - - 0 19" >}}


#### Game 51: Sicilian, Kan variation (Leela +2)
**Book 1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Bd3 Nf6 6. O-O Qc7**

White establishes a Maróczy Bind and starts an attack on the k-side. SF sacs two pawns to open lines, Leela sacs the exchange and returns a pawn, SF gives back the exchange. The position looks strong but the engines evaluate it equal. SF sacs a new pawn to get full play for the bishop pair. Leela returns a pawn, repulses the attack and swaps white LSB. Draw.


{{< chessdiagram "2r2rk1/1bqnbp1p/pp1pp1p1/5PPn/2PNP3/2N1B3/PPB1Q2P/2R2RK1 b - - 0 16" >}}



#### Game 52: (Leela +2)
With white Leela lets SF establish a strong center on LS : c6-d5-e6, against the e5-c4 setup. In such a position no pawn move is possible without strong tactical reason. The plan seems to play against the bad Bc8 and to take control on DS. SF reacts with a5 and Ba6 that seems good.


After a dubious Rd4, Leela takes control of all the DS and gets a passer, sacking the h pawn and the exchange on d6. But finally she may have missed something since her eval dropped.


After some pawns sacs to open lines, SF gets a dynamic draw.


{{< chessdiagram "3r1rk1/2q1bppp/b1p1p3/p1npP3/2P2B1P/1P6/P2NQPP1/1BRR2K1 b - - 0 17" >}}


#### Game 53: Dutch defence, Blackburne variation (Leela +2)
**Book 1. d4 f5 2. g3 Nf6 3. Bg2 e6 4. Nh3 d5**

Generally in the Dutch black plays to push e5 to liberate the bad Bc8. This is not so easy with the d5-e6-f5 setup given by the book so black establishes the solid stonewall with c6 after white logical c4 and the tension remains since moving a pawn in this situation is not good. This solid center gives black the time needed to organize pieces. 


But SF plays the anti-positional 8.cxd5 and with 8...exd5 Leela eval decreases a bit. This is not a major concession by SF but this helps a lot black to develop. On move 12, white has lost its initial advantage and on move 20 the position is totally equal.


Leela starts an attack on the q-side and SF panics, pushing f4 to slow down the attack but giving the e4 square to Leela. That Leela occupies with a strong knight a few moves later. Now, she has a slight advantage.


Leela sacs a pawn on q-side and destroys it, forcing Fish to take the Ne4. Then she attacks k-side, SF reacts in the center, gives the pawn back and obtains a draw endgame.


{{< chessdiagram "2bq1r1k/r2nbnpp/2p5/1p1pBp2/p2P4/2NNPPP1/PP3QBP/2RR2K1 w - - 0 21" >}}


#### Game 54: (Leela +2)
SF with black plays 9...dxc4 to use d5 as an outpost for a knight but definitely giving e6 and the e5 square to white that have now a durable edge.


Leela exchanges the bad DSB, a pair of knights and turns attention to the backward c-pawn on a semi-open file. SF reacts on k-side. Leela sacs the backward b3 pawns to inflict two isolated doubled e-pawns to the Fish and has now a good Ne5 against bad black LSB.


The pawns structure is fixed in center and q-side to white advantage that gets definitively the c-file with a target in c7. As a compensation, Fish gets the semi open f-file but the Ne4 controls f3 and f7 and it has less value for black than c-file for white.


Fish pushes the h-pawn to h4 and Leela closes the k-side with g4. There is not enough play for white to win and the game would end in a draw by 50 moves rule. But Leela decides to sac the h-pawn to continue. With black queen in h3 she gets the c-pawn and a Rc8 but SF sac a rook on f2 to get a perpetual.


{{< chessdiagram "3rqrk1/2p1b1pp/bp2pn2/p2nNp2/P1NP4/1P2P1P1/4QPBP/R1B2RK1 w - - 7 17" >}}


#### Game 55: Pirc defence (Leela +2)
**Book 1. e4 d6 2. d4 Nf6 3. Nc3 Nbd7 4. g4 h6 5. h3 e5**

To react to the aggressive h3-g4 white setup, Leela quickly develops the q-side and sacs two pawns. SF accepts the d6 pawn and swaps its dangerous Nf5.


Leela starts a massive swapping combination that ends in RB+pawns endgame where white is a pawn up but with no gain perspective thanks to the OCB. After swapping rooks the OCB endgame is a draw.


{{< chessdiagram "r2q1rk1/pb1nbpp1/3p1n1p/1pp2N2/4P1P1/P1N1B2P/1PP2P2/R2QKB1R w KQ - 2 13" >}}


#### Game 56: (Leela +2)
In the reverse game, Leela with white tries to maintain as long as possible a close center and castle long. But SF plays Nc4 and she must swap it, opening the b-file for SF attack. Then with the logical f4 and black f5 reaction, the center explodes. Too many lines are opened, pieces swap and an inevitable drawn endgame is on the board.


{{< chessdiagram "1rb2rk1/pq2bpp1/3p1n1p/3Pp3/2p3P1/P1N3NP/1PP1QP2/K1BR3R b - - 8 17" >}}


#### Game 57: Benoni defence (Leela +2)
**Book 1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 Bd6 6. e4 O-O 7. f4**

This opening gives white a very aggressive setup in the center but a slight development disadvantage. Leela reacts immediately sacking a knight for a pawn to open the center and attack the white king. SF reacts, sacking its queen for the two most aggressive black pieces, the Bd6 and the Re8.


Developing her queen Leela, trade the c4 pawn for SF’s b2. Then she gets the central d5 pawn swapping a knight pair. SF remains with a material advantage that compensates Leela’s initiative so that it has a good edge. 


SF pieces are well coordinated so that it repulses the attack. Leela now thinks to defend, secures the fragmented pawns and key squares on row 6. SF forces a rook swap.


Pawns moves stop in a position where any new move creates weaknesses without a single compensation.  White wants to keep the bishop pair and swapping black LSB for white knight is only good for white. Draw by 50 moves rule is likely but Leela moves a pawn in an equal position.


The game ends in a draw after two tries by Leela to promote a pawn.


{{< chessdiagram "rnbq1rk1/pp1p1ppp/3b4/2pP4/4nP2/2N5/PP4PP/R1BQKBNR w KQ - 0 8" >}}


#### Game 58: (Leela +2)
Any Leela fan expects a win when Leela plays white in the Benoni. But SF plays the same line as Leela until it deviates with 10...Qe7 instead of 10...c4 played by Leela. This means that after the queen sac, white do not get the black c-pawn.


Leela still plays the queen sac, trades Nb4 for the DSB castle long to protect her pawns and finally gets a position she evaluates much better than whatever SF got in the previous game. Is Leela stronger than SF even in open games ?


Leela sacs the d-pawn, reorganizes pieces in the center, begins a king walk to the k-side, trades a rook pair and a-pawns. The material is balanced but Leela eval is +3 and SF eval +2. SF has two doubled b-pawns and an isolated d-pawn in an open file. Good targets for Leela rook and knight.


And finally Leela pushes the f-pawns and swaps black LSB for a knight. Now all pawns are fragmented, this is the time for picking. “Les feuilles mortes se ramassent à la pelle”, Jacques Prévert, in english “Dead leaves are picked up by the shovel.” Leela is winning! But she misses the win. a Queen in open space is a real problem for Leela.


r1b1r1k1/pp1pqppp/n2b4/2pP4/4NP2/8/PP1BQ1PP/R3KBNR w KQ - 5 11" >}}


#### Game 59: two knights defence (Leela +2)
**Book 1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7 Kxf7 7. Qf3+ Ke6 8. Nc3 Nb4**

A very weird initial position that at first SF evaluated to +5 before finding just an edge for white as Leela. The black king is in e6 under attack and white got this after sacking a knight for a pawn.


The middle game is very confusing and finally SF gets 4 pawns for the knight with two connected central passers, one in d6. Heavy pieces and OCB remain on the board. Leela, as black, is also a knight up. Leela pieces block the dangerous d6 pawn and king is safe in h7. It seems that she will hold. After rooks swap in the open e-file the game ends in a draw.


{{< chessdiagram "r1bq1b1r/ppp3pp/4k3/3np3/1nB5/2N2Q2/PPPP1PPP/R1B1K2R w KQ - 4 9" >}}


#### Game 60: (Leela +2)
Leela plays the clever 11.Qd1 instead of Fish 11.Qe2 in the previous game. The advantage of this move is to maintain the e-file open for the attack. The fish has difficulty regrouping its pieces and sacs 3 pawns. But Leela does not have enough play. Draw.


{{< chessdiagram "r1b2b1r/pp4pp/2p1kq2/3np3/1nBP4/2N5/PPP2PPP/R1BQ1RK1 b - - 2 11" >}}




#### Game 61: Trompowsky attack (Leela +2)
**Book 1. d4 Nf6 2. Bg5 c5 3. d5 Qb6 4. Nc3**

As often in tactical open fight, a lot of pieces swap in a wild and quick fight. When smoke disappears Fish has a queen for rook, bishop and pawn. Leela pawn structure is sound and looks like a fortress. On move 28 this is a draw but the game will continue until move 190.


{{< chessdiagram "1k1r4/pp4pp/4pb2/2Q5/2P5/8/P5PP/6K1 w - - 1 28" >}}


#### Game 62: (Leela +2)
As in the previous game the lines open quickly. The opposite castle and a wild white attack forces SF with black to take a perpetual on move 21.


{{< chessdiagram "rn3rk1/1p2ppb1/p5p1/q1p1P1NP/1n4Q1/2N5/2PB2P1/1K1R3R b - - 1 21" >}}



#### Game 63: king indian attack (Leela +2)
**Book 1. e4 e6 2. d3 d5 3. Nd2 c5 4. g3 Nc6 5. Bg2 Nf6 6. Ngf3 Be7 7. O-O O-O 8. Re1 b5 9. e5 Nd7 10. Nf1**

At the end of the book black dominates the q-side and the center is blocked but not robust. white as a small advantage on the k-side.


Leela, as black, attacks the center and the q-side sacking the a-pawn. SF plays to maintain the center and get a strong control on DS. Leela has just a slight edge. Pawns swap and pieces remain on the board. Finally an OCB drawn endgame is reached.


{{< chessdiagram "3q1r1k/3b2pp/3bpn2/np1pN3/r2P3P/P5P1/PB3PBN/R2QR1K1 b - - 4 21" >}}


#### Game 64: (Leela +2)
Leela, as white, first plays to slow down black attack on the q-side. Then she reinforces the center and launches a wild attack on the k-side, taking control of the DS.


She abandons the q-side where she sacs two pawns. She pushes a fawn in f6. SF launches a furious counter attack sacking a knight for the fawn. Pawns and pieces do not count. Leela gets a mate threat and Fish has to take a perpetual in a position where it has sacked the exchange for 6 pawns. 


{{< chessdiagram "brrq2k1/p2nbppp/4p3/n2pP1P1/PppP1B1P/1P2NN1B/2P2P2/R2QR1K1 b - - 0 19" >}}



#### Game 65: KID (Leela +2)
**Book 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7**

The book gives 6 plies in the King Indian Defence. SF pushes an early d5 and launches an attack on the k-side with h3-g4. Leela reacts attacking the q-side and the center where she sacs the Nf6 for 2 pawns.


She finally gets a rook endgame where SF has a bishop for 3 pawns. Draw.


{{< chessdiagram "r1bq1rk1/ppp1ppbp/3p1np1/3Pn3/2P1P1P1/2N1B2P/PP3P2/R2QKBNR b KQ g3 0 8" >}}



#### Game 66: KID (Leela +3)
Leela gets a bind with c4-e4-f3 and Fish swaps the Bg3 for Nc3 inflicted doubled d-pawns to Leela.This is a totally anti-positional decision. The c-file is not open, there is no means to attack the double pawns and now Leela dominates the DS.


She finds a combination that swaps pieces and gets a rook endgame with a bishop for 4 fragmented pawns. This is the picking season : Leela grabs each pawn, one after another, keeping her g-pawn for queening. Nice win from a standard position.


{{< chessdiagram "r1bqr1k1/pppn1p1p/2np2p1/8/2P1P3/2P1BP2/P1N1B1PP/R2Q1RK1 b - - 0 12" >}}



#### Game 67: Sicilian, Kan (Leela +3)
**Book 1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Qc7 5. Nc3 e6 6. Ndb5 Qb8 7. Be3 a6 8. Bb6 axb5 9. Nxb5 Bb4+**

A sub variation that forces Leela to give up the queen and a pawn for the two knights and the DSB. Fish attacks with pawns on all the board and gets a drawn endgame.


{{< chessdiagram "rqb1k1nr/1p1p1ppp/1Bn1p3/1N6/1b2P3/8/PPP2PPP/R2QKB1R w KQkq - 1 10" >}}


#### Game 68: (Leela +3)
Leela in a more positional style decides to not take the queen to reach a position with a good space advantage but where SF is a knight up for two pawns and has lost castling right.


Leela gets 3 connected passers that leads to a drawn endgame.


{{< chessdiagram "rqb2knr/3p1ppp/2nNp3/bB6/4P3/2P1B3/PP3PPP/R2QK2R b KQ - 0 14" >}}


#### Game 69: QGD, Slav variation (Leela +3)
**Book 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. e4 b5**

A very sharp opening. White gives a pawn for better development and a very huge center. Black compensation is a 4 to 2 pawn advantage on the q-side.


Leela returns the pawn to accelerate development and gets a drawn endgame.


{{< chessdiagram "rn3rk1/4npp1/b1p1p2p/p1NqP3/Pp1P4/2p2N1P/1P1QBPP1/R2R2K1 w - - 0 17" >}}


#### Game 70: (Leela +3)
Leela varies from the previous game with the interesting 8.Qc2. Then, playing 10...b4 SF lost all advantage since the q-side black pawns are now impossible to defend. Leela equalizes but she does not succeed to take an advantage. Draw.


{{< chessdiagram "r1bqkb1r/3n1ppp/2p1pn2/p7/PppPP3/2N2N2/1PQ1BPPP/R1B2RK1 w kq - 0 10" >}}


#### Game 71: Nimzovich defense (Leela +3)
**Book 1. e4 Nc6**

A perfect opening for a double kill by Leela. SF plays badly in the opening. The weird Bh5+ leads to the Karpovian Kd7 by Leela. The anti-positional g4 blocks the Bh5. So at the end  of the opening phase, Leela gets a dangerous protected passer in e4 and she equalizes easily sacking the queen for rook and knight. 


A few moves later she sacs the exchange for a pawn and begins to advance the e4 pawn. As SF gives the exchange back for the pawn, the endgame is a draw.


{{< chessdiagram "7r/1ppkn3/p3p3/3p1nrB/3Pp1P1/2P5/PP3Q2/4KR2 b - - 5 27" >}}


#### Game 72: (Leela +3)
The opening is very orthodox for a closed French like pawn structure. SF castles long and Leela short. The two opponents begin a race against the king, alternating defensive and offensive moves. Fighting draw.


{{< chessdiagram "2kr1bnr/pppq3p/2n1pp2/3pP1p1/3P1P2/2PQ3N/PP1N2PP/R1B2RK1 b - - 3 10" >}}


#### Game 73: Benoni defense (Leela +3)
**Book 1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. e4 g6 7. f4 Bg7 8. Bb5+ Nfd7 9. Be2**

An opening that generally Leela wins as white and draws as black. Leela decides to swap the good Bg7 for the Nc3 to win the e4 pawn. Is this not too risky ? She won a game as white when SF did the same.


No, because there are two big differences. Her LSB is not blocked in c8 but is in g4 and she swaps it for the Nf3. The q-side is not blocked and she immediately opens it and gets a passer in the a-file. She trades a pair of rooks in the e-file, sacs the a-pawn and trades the rooks in the a-file. Now there is not enough play for SF. Draw.


{{< chessdiagram "r2qr1k1/3n1p1p/pp1p1np1/P1pP4/2P2P2/5BPP/3B2K1/R2QR3 w - - 0 24" >}}


#### Game 74: (Leela +3)
In the opening SF plays the ugly Na6 that blocks its q-side so that Leela has not to worry about that side. She launches a pawn attack on the k-side, sacs the e4 pawn to get a fawn in f6 and to trap the Bh8. She then sacs the d5 pawn to swap the queens and the LSB.


Is it enough to win ? SF sacs the Bh8 for 2 pawns and gets a drawn rook ending where it has 3 pawns for a knight.


{{< chessdiagram "r4rkb/pp3p2/3p1P1p/2p2pP1/7P/5N2/PP3R2/5RK1 b - h3 0 27" >}}


#### Game 75: Pirc (Robatsch) defense (Leela +3)
**Book 1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 Bg7 5. Qd2**

SF plays badly in the opening. It starts with an aggressive Bh6 but then plays the slow h3 instead of continuing with moves like Bc4. Leela counter attack in the center and at move 11 the game is nearly a draw.


After queen and central pawns swap. The rooks exchange in the open central files and the endgame with symmetric pawns structure leads to an inevitable draw.


{{< chessdiagram "r1b1k2r/pp1nqp1p/2p2npQ/4p3/4P3/2N2N1P/PPP2PP1/R3KB1R w KQkq - 1 11" >}}


#### Game 76: (Leela +3)
Leela manages to get a strong bind but does not succeed in converting to win. Draw.


{{< chessdiagram "2b2r1k/2q4p/4p1pP/p2pN1Q1/Pp3P2/1PbB2P1/2P1R1K1/8 b - - 0 43" >}}


#### Game 77: QGD, Chigorin defense (Leela +2)
**Book 1. d4 d5 2. c4 Nc6 3. Nf3 Bg4 4. cxd5 Bxf3 5. gxf3 Qxd5 6. e3 e5**

This variation gives a strong edge to white since the Nc6 blocks the useful c-pawn. By sacking the b-pawn Leela manages to double her rooks in the b-file to get a very bad rook ending that SF manages to win.


{{< chessdiagram "1r4k1/p5pp/1rp1p3/8/3PP3/4PP2/P6P/2R1K2R b K - 0 23" >}}


#### Game 78: (Leela +2)
Leela gets a rook endgame with a bishop pair against knights. She has a strong central pawn mass but SF manages to block the pawns. Draw.


{{< chessdiagram "2kr1r2/ppp1n1pp/2n5/5p2/3P4/1R2PP2/P2BBP1P/4K2R w K - 1 15" >}}


#### Game 79: Ruy Lopez (Leela +2)
**Book 1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Bb7 10. d4 Re8 11. Nbd2 Bf8 12. a4 h6 13. Bc2 exd4 14. cxd4 Nb4 15. Bb1 bxa4**

A very  long opening line that looks like a draw at the end of the book. Draw.


{{< chessdiagram "r2qrbk1/1bp2pp1/p2p1n1p/8/pn1PP3/5N1P/1P1N1PP1/RBBQR1K1 w - - 0 16" >}}


#### Game 80: Ruy Lopez (Leela +2)
Leela gets more pressure with white but it is still a draw.


{{< chessdiagram "1r4qk/2p1n1b1/3pPr1p/5pp1/1P6/5P1P/3BRP2/1B1QR1K1 b - - 0 39" >}}


#### Game 81: KID (Leela +2)
**Book 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 e5 7. d5 Nh5 8. Qd2 Qh4+ 9. g3 Nxg3 10. Qf2 Nxf1 11. Qxh4 Nxe3 12. Ke2 Nxc4**

A very  long opening line where black sacked the queen for the bishop pair and two pawns. Begins a furious dog fight where pawns and pieces count less than threats and speed and that ends in a drawn endgame.


{{< chessdiagram "rnb2rk1/ppp2pbp/3p2p1/3Pp3/2n1P2Q/2N2P2/PP2K2P/R5NR w - - 0 13" >}}


#### Game 82: KID (Leela +2)
In the reversed game, Leela as often is more positional and the play is slower and more understandable. But after the inevitable 20.Ne3 Nxe3 21.Kxe3 SF remains with a strong Nc5 that controls the key squares and prevents the queen from entering behind black lines.


It is likely that white will be forced to sac the exchange for that knight. But Leela does not choose this solution, she prefers to place her pieces on good squares. At this point no progress is possible and she simplifies in a drawn endgame with the exchange for two pawns. 


{{< chessdiagram "r4rk1/p1p2pb1/3p2pp/1pnPp3/2n1P3/5P1Q/PP2K2P/2RN3R b - - 0 18" >}}


#### Game 83: Sicilian (Leela +1)
**Book 1.  e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Qb6 5. Nb3 a6 6. Nc3 d6 7. Bf4 Nf6 8. Qd2 Be7 9. O-O-O O-O**

A sharp opening where white looks like winning at the end of the book : the Qb6 is misplaced in an opposite castle situation. Logically Fish attacks the k-side with pawns and Leela must replace the Q to c7. Then Fish plays the deadly 15.g6 and wins.


{{< chessdiagram "r1brn1k1/2qnbppp/p2pp1P1/1p6/4P2P/1NN1BP2/PPPQ4/2KR1B1R b - - 0 15" >}}


#### Game 84: Sicilian (Leela +2)
Leela plays this game in Leela positional fashion. She pushes a fawn to h6 and then after SF e5 plays against the d6 backward pawn. She slowly ameliorates piece positions and finally wins a pawn.


After a long shuffle time she finally sacs the exchange to win a pawn and enter into black position. The black pawns fall one after the other. Win.


{{< chessdiagram "1r6/r3k2p/3p1ppP/p3p3/2p1P3/PnP1NP2/KPR3P1/3R4 w - - 4 45" >}}



#### Game 85: Dutch defense (Leela +2)
**Book 1. d4 f5 2. Nf3 d6 3. c4 c6 4. Nc3 Nf6**

Leela occupies the center and attacks the k-side. SF attacks the q-side, too slowly. On move 21, the game is equal. Leela does not have enough play to win. Draw.


{{< chessdiagram "2r2r2/pp2p1bk/2ppqnp1/1P3b2/P1PPp2p/2R1P2P/1B1NBPP1/1Q3RK1 b - - 0 21" >}}



#### Game 86: (Leela +2)
SF attacks the q-side. Leela contains the attack and stabilizes the center. She launches an attack on the q-side. Finally she plays on the two wings but she does not have enough threats to win. Draw.


{{< chessdiagram "2r2rk1/1q4bp/2bpp1p1/1pPp1p2/pP1Pn3/P3PP1P/1BR1B1PN/2R1Q1K1 b - - 0 30" >}}


#### Game 87: Modern (Robatsch) defense (Leela +1)
**Book 1. e4 g6 2. d4 c6**

The opening transposes to a KID with classical plan : SF attacks the q-side and Leela the k-side. On move 33 all pieces are still on board and the position is equal. Pieces swap, the e-file opens, and Leela blunders. SF wins.


{{< chessdiagram "6rk/p2b1n1r/np1p1p1q/1NpPpNpp/1PP1Pb2/PR3PBP/4B1P1/4QRK1 b - - 13 33" >}}


#### Game 88: (Leela +2)
The reversed game also transposes to a classical KID. But SF as black decides to attack the q-side. This is a dubious plan. The c-file opens and Leela gets a strong advantage in that file.


Leela exchanges the LSB and a pair of knights and gets a winning endgame : all her pawns are on LS so that SF DSB has no target.


{{< chessdiagram "r1bq1rk1/3nppbp/p1pp1np1/1p6/2PPP3/2N1BN1P/PPQ1BPP1/R4RK1 b - - 1 10" >}}



#### Game 89: Nimzo Indian defense (Leela +2)
**Book 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 b6 6. e4 Bb7 7. e5**

This opening honours Leela since it had been discovered by ID395 against Gull. [A video on it.](https://youtu.be/0Hhhpu2_Ugk)

SF has an attack on k-side for an exchange sac. Leela repulses the attack and gives back the exchange to reach a drawn endgame.


{{< chessdiagram "rn1q1rk1/pbpp1ppp/1p2pn2/4P3/1bPP4/2NB4/PP3PPP/R1BQK1NR b KQ - 0 7" >}}


#### Game 90: (Leela +2)
Leela leads the attack against black king in a slightly different way and finally gets a small edge. But SF finds a perpetual. Draw.


{{< chessdiagram "r2q1rk1/p1p2p2/1p2p1pB/8/2pPn2Q/2P4N/P1B2P1P/2KR3b w - - 2 17" >}}


#### Game 91: Two knight defense (Leela +2)
**Book 1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 Bc5**

A very sharp opening likely winning for white. SF plays 5.Bxf7+ getting a pawn and denying castling for black.


SF lets Leela open the g-file and the d-file and to advance the a-pawn in a3. Difficult to say what was wrong in the Fish attack. With this pawn structure, Leela manages to regroup pieces on good squares and she holds. 


She finally gets a drawn queen endgame. What a game!


{{< chessdiagram "r1k1r3/2pb3p/1p3n1q/4p3/1PP1P3/pP2PNRP/3NQ3/1K3R2 w - - 0 28" >}}



#### Game 92: (Leela +3)
Leela plays the same 5.Bxf7+ Ke7 line. Have a look at the position : white is a pawn up (f7), black lost castling right (Ke7) and there is nothing as a compensation. If Leela plays her positional usual style, she must win. A giuoco piano with great advantages.


Leela simplifies to a winning endgame swapping a rook and a pawn for bishop and knight. She has a good pawn structure, the center and the bishop pair. In particular she is very strong on LS. The rest is a technical matter.


{{< chessdiagram "r2r4/ppp1k1p1/3p1b1p/3B4/3PPB2/5N2/PP5P/R4K2 b - - 0 20" >}}




#### Game 93: QGD, Chigorin variation (Leela +2)
**Book 1. d4 d5 2. Nf3 Nc6 3. g3 Bg4 4. Bg2 Qd7 5. O-O O-O-O 6. c3**

A new very sharp opening likely winning for white. Long castling is always dangerous for black and with opposite castles it is often deadly.


T8.T40.610 lost this opening against “the engine that can not be named”, version 3, the winner of TCEC S4,  in a S15 bonus with all champions.


At the end of the book, Leela plays the slow 6...f6 and it is likely that 6...h4 is the only playable move if it is possible to hold this : this game is a speed race. SF totally outclasses Leela in that game.


{{< chessdiagram "2kr1bnr/pppqp1pp/2n2p2/3p4/3P2b1/2P2NP1/PP2PPBP/RNBQ1RK1 w - - 0 7" >}}


#### Game 94: (Leela +3)
White has more time to play the position. Leela stabilises the center, pushes her pawns toward SF king, and swap the Nc6. Slow but efficient. SF swaps the Nf3 for the Bg4 and opens the h-file but lacks pieces to continue.


Leela pushes a fawn in a6, SF sac the exchange for Leela strong LSB. She reduces material to a winning R+pawns vs N+pawns endgame, thanks to the fawn.


{{< chessdiagram "1k4rr/pppq1p2/3bp1p1/1P1n4/P1QP1P2/6P1/3B1PB1/1R2R1K1 b - - 1 20" >}}


#### Game 95: French, advance variation (Leela +4)
**Book 1. e4 e6 2. d4 d5 3. e5 b6**

A dubious variation of the french defense that gives a good edge to white. The recommended move is 4.Bb5+ but SF plays the not so good c3.


Leela plays like in the manual : she attacks the head and the tail of the central pawn chain, sacs a pawn to activate her bad LSB, pushes g5 pawn in front of the enemy king. On move 20 the position is roughly equal.


SF makes a positional blunder that gives Leela two linked passers on the q-side and has to sac the LSB for the pawns. Leela wins the endgame.


{{< chessdiagram "2kr1b1r/1b1qn2p/p3p3/1p2P1p1/1PpP4/6Q1/P1N1BPPP/1RBR2K1 w - g6 0 20" >}}



#### Game 96: (Leela +5)
Leela does not play the recommended 4.Bb5+ but pushes h4 her speciality. She gets that way a big space advantage on the k-side and prevents SF to castle short. SF reacts by opening the c-file and Leela sac the d4 pawn to use the square as an outpost for a knight.


She gets a quasi-winning endgame that she converts, SF helping a lot sacking two pawns under pressure and self-trapping a bishop.


By the way she wins the SuFi since there are not enough games for SF to recover.


{{< chessdiagram "1n1k3r/3bbpp1/p3p2p/1p1pP2P/1P1N1PP1/P2B2K1/5B2/2R5 b - - 6 38" >}}


#### Game 97: KID, Mar Del Plata variation (Leela +5)
**Book 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Ne1 Nd7 10. Be3 f5 11. f3 f4 12. Bf2 g5**

Classical plans, SF attacks the q-side, Leela the k-sides. Leela gives a pawn, pieces swap, she gets a RB+pawns vs RN+pawns drawn endgame because of a bad DSB.


{{< chessdiagram "2kr1b1r/1b1qn2p/p3p3/1p2P1p1/1PpP4/6Q1/P1N1BPPP/1RBR2K1 w - g6 0 20" >}}


#### Game 98: (Leela +6)
Leela sacs the c-pawn to open lines on the q-side. Then, on move 20 she plays the good g4 that stop the black attacks on k-side. Fish thinks it has an edge after that move. In fact this is the contrary. This g4 move closes the k-side and only Leela has threats now.


After some long Leela maneuvers to place pieces on good squares, Fish commit suicide playing a5 that open more lines in white favour. The rest of the game is easy for Leela.


{{< chessdiagram "r4rk1/pbpq2b1/np1p2n1/1N1Pp1pp/1P2PpP1/5P2/P3BN1P/2RQBRK1 b - g3 0 20" >}}




#### Game 99: Sicilian, English attack (Leela +5)
**Book 1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e6 7. f3 Be7 8. Qd2 Nc6 9. O-O-O O-O**

The English attack is characterized by e4-f3-g4-h4 with 0-0-0, Qd2, Be3 and considered very dangerous. Fish plays 22.Kb1 and Leela thinks the position is very bad. A few moves later, she plays g6, Fish opens the k-side and wins.


{{< chessdiagram "1rr3k1/2q1bppp/pn6/1p1pp1PP/4P3/P1PQ1P2/1P1B4/1K1R1B1R b - - 1 22" >}}




#### Game 100: (Leela +5)
Leela also chooses the classical setup of the English attack and plays an early prophylactic Kb1. SF is not impressed and thinks the position is equal.


Leela pushes a fawn in h6! After Leela played a3, SF swaps the DSB for the Nc3, inflicting doubled isolated c-pawns to Leela but also giving more value to the fawn. Now, white has a simple plan : reduce material and win an endgame based on the two weaknesses principle, exploiting the q-side majority and the h6-fawn with a strong play on DS.


She applies my plans ! In fact it is Leela's plan, I saw so many games she played like this that I anticipated her moves. SF sacs the exchange to get the g5 pawn that reinforces the fawn. Queen swaps and she gets a very good RRB+pawns vs RBN+pawns endgame with the a-passer. But she draws.


{{< chessdiagram "2rq1rk1/1b3p1p/p1nppbpP/1p6/4P1P1/2N1BP2/PPP1B3/1K1RQ2R w - - 0 19" >}}


