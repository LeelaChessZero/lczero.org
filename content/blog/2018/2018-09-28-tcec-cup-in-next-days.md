+++
title = "TCEC Cup in the next days!"
slug = "tcec-cup-in-next-days"
published = 2018-09-28T22:09:00+02:00
author = "Bob23"
tags = []
draft = true
+++

[![](../../images/2018-09-28-tcec-cup-in-next-days-
hjkhk79799999.png)

The TCEC(Top Chess Engine Championship) tournament is currently running with
engines playing in the premier division and this division will finish in a few
days. But this time, after premier division end, there would not be an
immediate starting of the superfinal between the top 2 placed engines in
premier, but a new tournament is going to happen that Chessdom [has
announced](http://www.chessdom.com/announcing-tcec-cup-2018/), the **TCEC
CUP** , with all engines of TCEC but in a different format, that of knockout
games, one that brings in mind the traditional Cup competitions of football.  
(TCEC superfinal will he held after the TCEC Cup of course)

So the **32 engines** of season 13 of TCEC will participate and the pairs will
be according to their places that had in the current 13th season. That means
1st engine in premier will play against 8th placed engine in 4th division, 2nd
premier engines will play against 7th placed engines in 4th division, etc....  
Each pair will will play **8 games** , 4 with black and 4 with white with 4
predefined positions with reversed colors.  
After 8 games are complete the engine with higher points will promote to next
round.  
In case of a tie after 8 games, 2 more games(1 with black and 1 with white for
each engines) will be played to determine the winner(the one who will score
more points). In case of a tie another 2 games will be played and so on, until
an engine wins the 2-game tiebreak.

Obviously with 32 engines there would be a round of 32, then a round of 16,
then the **quarter-finals, then semi-finals and at the end the final**.

All games will be played with time control of **30 minutes plus 10 second per
move** increment with pondering off.  
Hardware for traditional engines will be **43 cores(2 x Intel Xeon E5 2699)**
while for the 2 neural net engines(Leela and DeusX) it would be **2x Tesla
V100 GPUs** provided by Google.

These are the current pairings and a probable, according to how Football and
Basketball competitions are being run, format between the pairings. But only
the round of 32 pairings holds as per the TCEC announcement, since they may
choose different match ups for the next rounds.

(click to zoom image)

[![](../../images/2018-09-28-tcec-cup-in-next-days-
ghjgjh866868.png)

So **Leela** will have to face **Laser** in the TCEC Cup in 8 games. The odds
should be with her and she should promote as she is stronger than Laser but we
will see.....

Knowing that premier division is running and Leela is not participating as she
got stuck in 3rd division due to the known issues with overheating problems
because of the hardware, TCEC had been running various **bonus games** with
most time Leela participating.  
And in these bonus games **Leela** has so far a fantastic performance against
the mighty Stockfish development version(dev) with 43 cores or even more!

So **Leela** test 10 nets running on good GPUs(P100s or V100s), on 20'+5" time
control has till now in TCEC bonus games against **43 cores or better
Stockfish dev** a result of:  
 _ **1 win, 7 losses and 42 draws in 50 games.**_  
That means a **-42 ±38 Elo** performance and that Stockfish has won **14 %**
of the games against Leela.

Right now Stockfish on premier division has _**21 wins, 1 loss and 25 draws in
47 games.**_  
That means a **+158 ±67 Elo** average performance and that Stockfish has won
**45 %** of its games against the other premier engines.

So one has to wonder. What super resistance Leela puts against Stockfish
compared to the premier division engines?  
Is Leela so much better than average premier division engines?  
The answer is not easy.  
Since Leela is peculiar.

She, in a way, adapts to her opponent so a great result against Stockfish
doesn't necessarily mean she will have a equivalent, Elo-wise, result against
a weaker engine, or even against a much weaker engine. Transitivity of Elo
doesn't really work that well with Leela.

This must be due to Leela is still having many blind spots resulting in
blunders from time to time mostly in endgame and mainly because of her
ineffectiveness in many occasions in the endgame, not being able to convert a
better or even winning position.  
Blunders with equal distribution occurrence against weak or strong engines,
cost her much more Elo against weaker opposition. Also not being able to
convert in endgame her advantage against weaker engines costs her again much
more Elo than when playing against stronger opponents. It's obvious from her
current playing that in opening and middlegame she can hold her own against
Stockfish and she is probably even be better(except tactical shots of course
that Stockfish is out of this world), but when it comes to endgame she loses a
whole lot of her strength, with many misevaluations and incorrect play
compared to top 20 engines. This is mainly because her puct search is not able
to compete against AlphaBeta search that is extremely efficient to resolve
positions especially with few pieces like we have in endgames. But this
happens of course also due to not optimal evaluation in many endgames. So more
training is needed to improve all these and even better training techniques
that are currently tried in test 30.  
For more about that curiosity of Leela one can read
[HERE!](http://www.talkchess.com/forum3/viewtopic.php?f=2&t=68517)

Leela's only win against Stockfish dev 43 cores in TCEC bonus games. Stockfish
was blind to the g4->g5->g6 march of Pawn.

[Event "?"] [Site "?"] [Date "2018.08.29"] [Round "7.1"] [White "Lc0 v17 11089
(4xP100, 10CPU)."] [Black "Stockfish dev (43 cores)"] [Result "1-0"] [ECO
"B90"] [WhiteElo "3247"] [BlackElo "3519"] [PlyCount "52"] [EventDate
"2018.??.??"] 1. e4 c5 2. Nf3 d6 {End of predefined opening position. Now
engines had to think for themselves.} 3. Nc3 Nf6 4. d4 cxd4 5. Nxd4 a6 6. Bd3
g6 7. h3 Bg7 8. Be3 O-O 9. O-O e6 {Till now it was all theory. Now Stockfish
chooses a rarely played line. Statistics on human games, favored black in the
opening theory till now.} 10. Qd2 b6 {[%cal Gc8b7]} 11. f4 $1 {Leela
aggressive as always.} Bb7 12. f5 gxf5 13. Bh6 fxe4 14. Qg5 $1 {[%csl Rg7]}
Nh5 {The only move for black that after Qxh5 regains the Piece with
tempo(check). So seemingly black except the fact that its King is a little
vurnerable seems to do fine. But not quite the truth.} 15. Qxh5 {[%csl
Rg1][%cal Rg7d4]} Bxd4+ {[%csl Rg1]} 16. Kh1 Bxc3 {Stockfish gave +0.58 for
white, that means it thought it controlled the situation.} 17. bxc3 f5 18. Bc4
d5 19. Be2 $3 {[%csl Rf8] Stockfish expected Bxf8 and after this move it went
to 0.00 evaluation thinking he is now fine. But missed completely Leela's
powerful continuation so it tried to reorganize its defense saving its Rook
also from the Bishop.} Rf7 $2 {This loses.} (19... Nd7 20. g4 f4 21. g5 $4
{This doesn't work now.} (21. Bxf8 Qxf8 22. Qg5+ Qg7 23. Qxg7+ Kxg7 24. Rxf4
{White is better but there is much play left and black can hope.}) 21... f3
$19) 20. g4 {The beginning of an unstoppable attack.} f4 { [%eval 0,0]
Stockfish still thinks this is equal giving 0.00 evaluation} 21. g5 $1 {This
is the move Stockfish missed!} Qe7 (21... f3 22. g6 Rf5 23. gxh7+ Kxh7 24.
Bg5+ $18) 22. g6 Rf5 {Stockfish realized its position giving +6.02 for white.
Too late for any defense, game is over.} 23. gxh7+ Kh8 24. Qg4 Qxh7 25. Qh4
Nd7 26. Rg1 Rf7 {Stockfish gives +7.88 and game is over.} (26... Rf7 27. Rg5
{[%cal Ga1g1]} Nf6 28. Rag1 Rg8 29. Rxg8+ Nxg8 30. Rxg8+ Qxg8 (30... Kxg8 31.
Qd8+ Rf8 32. Qxf8#) 31. Bxf4+ Qh7 32. Be5+ Rg7 33. Qd8+ Qg8 34. Qf6 {Black is
paralyzed. } Bc8 35. Qh6+ Qh7 36. Bxg7+ Kg8 37. Qxh7+ Kxh7 $18) 1-0
