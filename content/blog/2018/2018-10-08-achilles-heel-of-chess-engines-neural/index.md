+++
title = "Achilles heel of Chess engines.... Neural net engines and Leela the only hope!"
slug = "achilles-heel-of-chess-engines-neural"
published = 2018-10-08T21:20:00.002000+02:00
author = "Bob23"
tags = []
draft = false
+++

![]({{< file "2018-10-08-achilles-heel-of-chess-engines-neural-karsparov.jpeg" >}})

When first Chess engines were born were very weak. First real Chess
program(even though in 1912 there was a King Rook versus King solver and in
1951 Turing wrote only in paper a Chess program) was written in 1951 by Alan
Turing's colleague, Dietrich Prinz, but it was not able to play a whole game
but could only solve small "mate in 2" problems.  
The interest in computer Chess was growing and more and more researchers in
artificial intelligence(AI) used Chess as a platform to showcase their
progress on AI. As hardware has started to evolve more and more, many
researchers started to be able to use the already known algorithm, that has
proved to be the backbone for future Chess engines: the **Minimax algorithm**
, that was invented many years before by the pioneer in so many fields, John
Von Neumann.

Minimax algorithm combined with heuristics of simple Chess rules, trying to
simulate humans basic rules of thumb, has proved to be a success creating weak
but not random Chess playing programs showing a certain intelligence. Interest
in computer Chess was growing, Minimax algorithm was enhanced by the creation
of **AlphaBeta** search, that brought even more increase in strength and with
continuous improvements in hardware Chess engines started to win to win
against humans.

In **1967** there was the **first won game of a computer at official
tournament play** , where **Mac Hack VI** program of Richard Greenblatt,
running on a PDP-6, won against a 1510 Elo human player.

 _(Mac Hack VI)_

![]({{< file "2018-10-08-achilles-heel-of-chess-engines-neural-phpJK5zWz.png" >}})

In 1968 David Levy he beat in a friendly chess game with Stanford professor
John McCarthy, and McCarthy said that within 10 years, there would be a
computer program that would beat Levy. Levy then bet McCarthy 500 British
pounds that he would not lose a match to a computer chess program within 10
years.  
The bet later doubled to 1000 British pounds. Levy had bet three other
computer experts, including Michie, Seymour Papert from MIT and Ed Kozdrowicki
from the University of California, that no program would beat him in 10 years.  
In December 1977, he defeated Russia's strongest chess computer, Kaissa. It
was played on an Amdahl computer. In August, 1978 he won that bet when he
defeated CHESS 4.7, the strongest chess playing computer of the day, by a
score of 3.5-1.5. The computer program was being played on a Control Data
Cyber 176, the world's most powerful production computer at that time. The
computer programmers were David Slate and Larry Atkin. It could calculate 3000
positions a second.  
But despite of the win against the computer, Levy **became the first
International Master to give up a draw and a loss** to a computer program,
when **CHESS 4.7 got a draw in game 1 of the match and won the 4th game of the
match.**

 _(J. Robert Oppenheimer, John Von Neumann, and the MANIAC computer.)_

[![]({{< file "MANIAC.jpg" >}})](https://1.bp.blogspot.com/-lZdNCqBN71Q/W7um4G_WhtI/AAAAAAAAAYQ/-RzaYrmGq80WZW4cvuaQb-0v_CeMH3tWQCLcBGAs/s1600/Oppie%2B%252526%2BNeumann%2B%252526%2BMANIAC_0.jpg)

In the decade of 1970, Chess engine interest continues to flourish and Chess
playing programs continued to improve because of a combination of big hardware
advances as also algorithms continuing getting better and also new innovative
improvements were happening, like **iterative deepening** that had brought a
very __ nice boost in the depth of search of Alpha-Beta algorithm.

 **In 1981 Cray Blitz** of Robert Hyatt, Harry Nelson and Albert Gower was the
Chess program that **won for the first time a human master** Joe Sentef 2262
Elo, in tournament play, while in 1982 Ken Thompson's Chess program **Belle**
, earns a US master title, while in 1986 **Deep Thought** was the first
computer Chess program that **defeated a human Grandmaster** as it won the GM
Bent Larsen.

With the coming of home PCs, the 1990s brought the Chess engines in everyone's
home and the rise of specialized software for PCs has come with countless
Chess engines from different authors to exist, tournaments for Chess programs
to be held etc.  
In 1994 one such program the **ChessGenius** of Richard Lang, was the **first
program to ever win a world champion at Chess, the great Garry Kasparov** , in
a non blitz time control game!  
3 years later **Deep Blue** would win a whole series of games against Kasparov
in the well known match.

While Deep Blue won that match and showed computers are of maybe equal
strength with top GMs, the Chess engines on home PCs were of a much less
strength mainly because of much slower hardware(we remind that Deep Blue was
calculating about **250 million positions per second** , a huge number even
for todays standards even though it was hugely more a so called bean counter
compared to recent Chess engines). Deep Blue was the myth of the time for
hobbyists on the Chess engine scene, and people would wish their PC programs,
like Fritz, Hiarcs, Junior, Rebel Century, Chess Genius, Crafty etc etc, would
find Deep Blues star moves, but in vain most times. At the late 90s top 20 PC
Chess engines had already surpassed top humans in blitz time controls.

Progress continued and new innovations mostly in search happened, full
adoption of bitboards, null move pruning, late move reductions, futility
pruning and many many others made the search much more efficient and in 2000s
engines made a big leap in strength starting with the release of **Fruit 2.1**
as an open source and the coming of **Rybka** **1.0** an engine that dominated
everything for many years has lead to very top levels of play. From about
2004-2005 humans started to not be a match for computers even on classical
time controls.

Next decade from 2010 and thereafter, had **Stockfish** with the adoption of a
clear and rigid testing framework(Fishtest) to explode and reach super level
of strength being currently the strongest Chess engine around. Other engines
of course got huge improvements also and engines in this era are no match in
humans at any time control and any top human would get crushed by any top 50
engine.

 _(At this position of Deep Blue-Garry Kasparov, game 2 in 1997, Deep Blue,
was supposed to play the typical computer move Qb6 in order to win a pawn.
Kasparov and the viewers were quit surprised by Deep Blue's move **Be4!** This
positionally strong move almost chokes every counter play. Later analysis
showed Deep Blue didn't play this correctly and Kasparov could have drawn This
legendary Be4 move is now easily found from Chess engines with the correct
continuation of course.)_

![]({{< file "2018-10-08-achilles-heel-of-chess-engines-neural-Deep-Blue-versus-Garry-Kasparov-game-2-in-1997-At-this-position-Deep-Blue-using-the.png" >}})

Engines initially were very weak in all aspects of the game, but as
improvements came they started to be really good at **tactics**. This fact,
that engines are good tactically would be the key characterization of them
till now. Bad back then programs would have some important blind spots.
**Positionally** most were very bad, they would not dare easily to make
sacrifices to get an attack, they would hesitate most of the time to **give
the exchange** for the initiative, they would play **closed positions** in a
random way just shuffling pieces and they were very very bad in **endgames**.
And above all they would absolutely suck in _**fortress**_ positions.

With time, positional play would improve(the Be4!! and h5! moves of Deep Blue
would started to be found by even 2005 engines) and it was a usual trick for
commercial engine's advertisement to include the key phrase "Much improved in
positional play", that even nowadays it's still used. These days programs have
in their evaluation function countless rules so positional play to be adequate
and combined with their extreme search depths of now(>25 plies easily)
quantity becomes quality and positional play is very good. Along with these
improvements in evaluation heuristics and search leaps, came the ability of
programs to find sacrifices. With the introduction of Fruit and especially
Rybka(the old King of material imbalances) engines started to be very good at
exchange sacrifices also.

Endgame was steadily was improving and after about 2011-13 programs started to
be considered better than even top GMs in endgame. Todays engines with the use
of endgame tablebases also, they are much much better than humans in endgame
too, even though some blind spots remain.

Big thorns on engine play though, still remains the closed positions play,
where even todays engines continue their never-ending shuffling. But with a
big difference of the past that they can't be tricked to worsen their position
like in the old days and that extremely more often now, they do find a
breakthrough, something that didn't occur in older days.

 _But the biggest weakness of Chess engine remains undaunted!_ _**Fortress
positions!**_  
A fortress position is one that one side can't make any progress because the
other has built an impenetrable cage. And so engines can't see that no
progress can be made because this requires huge depths that even todays
engines can't reach.

2018 brought the introduction of neural net engines using a variation of MCTS
search. **AlphaZero** for Chess and Leela.  
And while we can't see the games of AlphaZero we are seeing the games of Leela
and we can see that it's evaluation function is many order better than
classical engines while its search is not that effective in resolving going
deeply in specific positions. Its tactical ability still incredibly stronger
compared to humans, it lacks the depth and narrowness AlphaBeta can search and
solve a position so it's a lot worse. Positionally appears to be a lot better
than current engines, handling Pawns and material imbalances in a far superior
way(Leela took the royal scepter from Rybka on material imbalances) and in
middlegame is also superior to anything else. And while its endgame is worse
than other top engines this is because of not enough training in endgame
positions and this can be easily improved with more training.

The introduction of neural net engines brought hope that it would handle
better closed positions or fortresses. But in vain. Leela appears to shuffle
maybe even more than traditional engines. And in fortress positions things
remain unchanged, with neural nets to suck at them also.  
This seems to contradict the MCTS(Monte Carlo tree search) search they use,
since Monte Carlo means you should play countless times at random, from a
position and then see which moves were having the best statistics. So
seemingly MCTS should be able to solve fortress positions but why this doesn't
occur? Because

AlphaZero and Leela does not use any random process to guide the search but
the search is guided by the neural network only!

Traditional engines don't seem to have any hope to ever solve fortress
positions, expect when they will start searching 80 or more plies ahead.  
But neural nets seem to have big chances to do it, as they are supposed to
learn from what they see and so more and more training games would
theoretically mean they would learn to solve them.

And here are some nice fortress Chess positions that it would be awesome if
engines started to solve them:

[Event "?"] [Site "?"] [Date "????.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "*"] [SetUp "1"] [FEN "3k4/4pp2/n2n4/5BN1/3N4/b7/4K3/8 w -
- 0 1"] [PlyCount "13"] {White to move and draw.} 1. Nxf7+ $1 {Giving the
Knight to create a drawn fortress it's the only move that draws.} Nxf7 2. Ne6+
Ke8 3. Bg6 Bc1 4. Bd3 Nb8 5. Bb5+ Nd7 6. Kd1 Bh6 7. Be2 {White created a
really nice fortress. Black can't make progress. When he moves a Knight white
gives a check.} *

[Event "?"] [Site "?"] [Date "????.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "*"] [SetUp "1"] [FEN
"2b1r3/r2ppN2/8/1p1p1k2/pP1P4/2P3R1/PP3PP1/2K5 w - - 0 1"] [PlyCount "37"]
{White to play and draw!! How many years away are engines from finding this?}
1. Nd6+ $3 {[%csl Re8,Rf5]} exd6 {Black had to capture.} 2. Rf3+ Kg6 3. Rg3+
Kf6 4. Rf3+ {Black has to go eventually to f7 to make progress or else white
will give endless checks.} Ke7 5. Re3+ Kd8 6. Rxe8+ Kxe8 7. a3 Bb7 8. Kd1 Ra8
9. Ke1 Ke7 10. Kf1 {White created an impenetrable position! E.g:} Rh8 11. Kg1
Kf6 12. g3 Re8 13. Kf1 Rh8 14. Kg1 Kg5 15. f3 Kf5 16. Kg2 Re8 17. Kf2 Kg5 18.
Kf1 Rh8 (18... Re3 19. Kf2 Re6 (19... Rd3 20. Ke2 $11) 20. Kf1 Rf6 21. Kf2 Rh6
22. Kg2 $11) 19. Kg2 $11 *

[Event "?"] [Site "?"] [Date "????.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "*"] [SetUp "1"] [FEN
"1k6/3p4/1B6/4Pp1p/1p5R/1p4p1/pP3n2/K6n w - - 0 1"] [PlyCount "31"] {White
draws with only one move.} 1. Rxh1 $3 Nxh1 2. e6 $1 dxe6 3. Bc7+ Kb7 4. Bxg3
{[%cal Gg3h4,Gg3e1] White's Bishop is immune as if it gets captured it's
stalemate. Stays in e1-h4 diagonal and captures everything.} Kc6 5. Bh4 Kd5 6.
Bg3 e5 7. Bf2 e4 8. Bg3 Kd4 9. Bh4 e3 10. Be1 f4 11. Bh4 f3 12. Bf2 Kd3 13.
Bg3 f2 14. Bxf2 e2 15. Bh4 Kd2 16. Bf2 $11 {Hopefully one day computers will
find this move.} *

[Event "?"] [Site "?"] [Date "????.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "*"] [SetUp "1"] [FEN "4knQ1/7r/3p2p1/2bP1pP1/5P1N/6K1/8/8
b - - 0 1"] [PlyCount "18"] 1... Rxh4 $1 2. Kxh4 Bd4 {[%csl
Re6,Rf7,Rg7,Rh7,Rh8][%cal Gd4a1] All moves of Queen are blocked. Bishop move
son a1-d4 diagonal and black can't make progress.} 3. Kg3 Bc3 4. Kf3 Bb2 5.
Ke3 Bc3 6. Kd3 Ba1 7. Kc4 Bb2 8. Kb5 Bc3 9. Kc6 Ke7 10. Kc7 $11 *

[Event "?"] [Site "?"] [Date "????.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "*"] [SetUp "1"] [FEN
"3B4/1r2p3/r2p1p2/bkp1P1p1/1p1P1PPp/p1P4P/PPB1K3/8 w - - 0 1"] [PlyCount "11"]
{[#]} 1. Ba4+ $3 {This is a classic position that still resists to todays
computers. Maybe one day....} Kxa4 2. b3+ Kb5 3. c4+ Kc6 4. d5+ Kd7 5. e6+
Kxd8 6. f5 $11 {White gave its 2 Bishops in order to create a fortress that
black can't enter.} *

[Event "?"] [Site "?"] [Date "2010.01.07"] [Round "?"] [White "?"] [Black "?"]
[Result "1/2-1/2"] [Annotator ",user"] [SetUp "1"] [FEN
"7r/p3k3/2p5/1pPp4/3P4/PP4P1/3P1PB1/2K5 w - - 0 1"] [PlyCount "29"] [EventDate
"2010.??.??"] 1. Kd1 $3 {Giving the Bishop to create a fortress.} Rh2 2. Ke2
Rxg2 3. Kf1 Rh2 4. Kg1 Rh7 5. f3 Rh8 6. Kg2 Ke6 7. Kg1 Kf5 8. Kg2 Re8 9. Kf2
a5 10. Kf1 Ra8 11. Kf2 b4 (11... a4 12. b4) 12. a4 Rh8 13. Kg2 Rh7 14. Kg1 Rh3
15. Kg2 $11 1/2-1/2

[Event "?"] [Site "?"] [Date "????.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "*"] [SetUp "1"] [FEN
"8/2r3k1/8/1p1p1p2/p2PbPp1/PB4P1/1P1K4/5R2 w - - 0 1"] [PlyCount "11"] {[#]}
1. Rc1 $3 {Giving the Bishop to create a fortress.} (1. Bd1 $2 Rc4 2. Ke3 Kf6
$19) 1... Rxc1 2. Kxc1 axb3 3. Kd2 b4 (3... Kf6 4. Kc3 Bc2 5. Kb4 Bd3 6. Kxb3
Ke6 7. Kc3 Be2 8. b4 $11) 4. a4 $1 (4. axb4 $4 Kf6 $19) 4... Bg2 $1 { [%csl
Gf1]} 5. Ke1 {[%csl Rf1]} Be4 {[%csl Gd3]} 6. Kd2 $11 {[%csl Rd3]} *

[Event "?"] [Site "?"] [Date "2018.10.08"] [Round "?"] [White "New game"]
[Black "?"] [Result "*"] [Annotator ""] [SetUp "1"] [FEN
"3k1b2/2p3r1/1pP1P3/pP3Q2/N1K5/1P6/r7/8 b - - 0 95"] [PlyCount "4"] 95...
Rxa4+ $3 {Creating a drawing fortress.} (95... Ke8 $2 96. Nc3 Ra1 (96... Rh2
97. Ne4 Rh6 98. Nf6+ Rxf6 99. Qxf6 Re7 100. b4 a4 (100... axb4 101. Qh8 Rg7
102. Qh5+ Kd8 103. Kd5 $18) 101. Qh8 Rg7 102. Qh5+ Kd8 103. Kc3 Re7 104. Qh8
Ke8 105. Kb2 $18) 97. Ne4 Rc1+ 98. Kd3 Rd1+ 99. Kc2 $18 Rdg1 100. Nf6+ Ke7
101. Nd5+ Ke8 102. Nf6+ Ke7 103. Ne4 $18) 96. bxa4 Ke8 97. Kd5 $11 {[%csl
Ge7,Gg7] [%cal Gg7e7,Ge7g7] White can't penetrate.} *

[Event "?"] [Site "?"] [Date "????.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "*"] [SetUp "1"] [FEN
"8/2p5/2Pp1k2/3Pp3/p3P3/5P1p/6p1/4K1B1 w - - 0 1"] [PlyCount "10"] 1. Kf2 $1
{This is the only move that draws, creating a nice fortress.} (1. Kd2 $2 Kg5
$19) (1. Kd1 $2 Kg5 $19) 1... a3 2. Kg3 a2 3. Kxh3 a1=Q 4. Kxg2 Qb1 5. Bf2 Qc2
{Draw! Black can't make any progress at all.} *

[Event ""] [Site "?"] [Date "1929.11.17"] [Round "?"] [White "Hasek=J"] [Black
"(=0031.46d6a8)"] [Result "*"] [SetUp "1"] [FEN
"k7/1p1p1p2/1PpKpP2/2P1P3/p7/8/6N1/3b4 w - - 0 1"] [PlyCount "10"] [EventDate
"1929.??.??"] 1. Nf4 $1 {Creating a superb draw fortress.} (1. Ke7 $2 a3 2.
Kxf7 Bh5+ 3. Ke7 a2 4. Nf4 a1=Q 5. Nxh5 Qxe5 6. f7 Qxc5+ 7. Kxd7 Qf8 8. Kxe6
Kb8 $1 9. Nf6 Kc8 $1 10. Nh7 Qh6+ 11. Ke5 Qg7+ 12. Ke6 Qg6+ 13. Nf6 Qh6 $1 14.
Ke7 Qe3+ 15. Kf8 Kd8) 1... a3 2. Ng6 $1 a2 (2... Kb8 3. Kxd7 a2 4. Nf8 a1=Q 5.
Kd8 Qd4+ 6. Nd7+ Ka8 $11) 3. Nf8 a1=Q 4. Nxd7 Qd4+ 5. Kc7 Be2 $11 {Black a
queen up but it's pointless.} *

[Event "?"] [Site "?"] [Date "????.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "*"] [SetUp "1"] [FEN
"6kr/p1p1p1p1/3pPpPp/2pP1P2/P1P4P/1K6/P6B/8 w - - 0 2"] [PlyCount "18"] 2.
Bxd6 $3 {Creates a beautiful draw.} (2. Bf4 $2 Kf8 3. Bxd6 {This won't work
now as white lost a single tempo.} (3. Kc2 h5 4. Bd2 Ke8 5. Bc3 Kd8 6. Be1 Kc8
7. Bc3 Kb7 8. Be1 c6 9. Bc3 cxd5 10. cxd5 Ka6 11. Bd2 Rb8 12. Be1 c4 $19) 3...
cxd6 4. h5 Ke8 5. a5 Kd8 6. a6 Kc7 7. Ka4 Rb8 $19) (2. a5 $3 {This draws also
but again white has to find Bxd6 again.} a6 3. Bxd6 $3 cxd6 4. h5 Kf8) 2...
cxd6 3. h5 Kf8 (3... a5 4. Kb2 Kf8 5. Kb3 Ke8 6. Kb2 Kd8 7. Kb3 Kc7 8. Ka3 Rb8
{Stalemate.}) 4. a5 a6 (4... Ke8 5. a6 Kd8 6. Ka4 Kc7 7. Ka5 Rb8 8. a4 {
Stalemate traps.}) 5. Kc3 (5. a3 Ke8 6. Kc3 Kd8 7. Kb3 Kc7 8. Ka4 {Stalemate
traps.}) 5... Ke8 6. a3 Kd8 7. Kb3 Kc7 8. Ka4 Kb7 9. Kb3 Ka7 10. Ka4 Rb8 {
Stalemate.}

[Event "?"] [Site "?"] [Date "2017.??.??"] [Round "?"] [White "Fortress by
Arpad Rusz"] [Black "?"] [Result "*"] [Annotator "Ts,George"] [SetUp "1"] [FEN
"7k/8/7p/2p1p1pP/1pPpPpP1/1P1P1P2/4K3/2N5 w - - 0 1"] [PlyCount "39"]
[EventDate "2017.??.??"] 1. Kd2 {Here black tried to built a fortress but it's
not that good. Yet white has to find the right moves in order to win. This is
not really a tets position where an engine has to find a specific starting
move, it's rather that has to have the right moves to create a zugzwang in
order to sacrifice its Knight the right time in order to win. The following is
not the only way to win, there are multiple path to victory but can an engine
from this position win?} (1. Na2 $6 Kg7 (1... Kg8) 2. Nxb4 $2 cxb4 $11) 1...
Kg7 2. Ne2 Kf7 3. Ng1 Kf6 4. Nh3 Ke6 5. Nf2 (5. Nxg5+ $2 hxg5 $11) 5... Kf6 6.
Nd1 $1 Ke6 7. Nb2 Kd6 8. Na4 Kc6 9. Kc1 Kd6 10. Nb6 Ke7 11. Nd5+ Ke6 12. Nc7+
Kd7 13. Nb5 Kc6 14. Na3 $1 {Preparing this sacrifice was the reason of moving
the white king to the c-file.} Kd6 15. Nc2 $1 {This move explains why we have
not chosen 9.Kc2?!} Ke6 16. Ne1 Kf6 17. Ng2 Ke6 18. Kd1 Kf6 19. Nh4 $1 Kf7
(19... gxh4 20. Ke1 $18) 20. Nf5 {[%csl Rh6]} *

[Event "?"] [Site "?"] [Date "2014.??.??"] [Round "?"] [White "Tarasiuk,
Vladislav"] [Black "?"] [Result "*"] [SetUp "1"] [FEN
"8/1N1Pb2p/p3p3/1ppP2P1/6p1/P1k5/6PK/2n5 w - - 0 1"] [PlyCount "33"]
[EventDate "2014.??.??"] 1. g6 $1 (1. d6 $2 {This just draws as black creates
an amazing fortress.} g3+ 2. Kh1 Bxg5 3. d8=Q Bxd8 4. Nxd8 b4 5. axb4 cxb4 6.
Nxe6 b3 7. Nc5 b2 8. Na4+ Kc2 9. Nxb2 Kxb2 10. d7 Ne2 11. d8=Q {[%csl Rh7] See
this Pawn and compare it with main line on 12th move there.} Kc2 12. Qd5 h6 $1
13. Qd8 a5 14. Qxa5 Kd3 $11 {Draw!}) 1... hxg6 2. d6 Bg5 3. d8=Q Bxd8 4. Nxd8
g3+ 5. Kh1 b4 6. axb4 cxb4 7. Nxe6 b3 8. Nc5 b2 9. Na4+ Kc2 10. Nxb2 Kxb2 11.
d7 Ne2 12. d8=Q { [%csl Rh7] In the 1.d6 line the Pawn is on h7 and it's a
draw. Here white wins! } Kc2 13. Qd5 g5 14. Qd8 g4 15. Qd5 a5 16. Qxa5 Kd3 17.
Qg5 {1-0} *

[Event ""] [Site "?"] [Date "2014.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "*"] [Annotator "Ts,George"] [SetUp "1"] [FEN
"4KBbn/5p2/5Pp1/3k4/3N2P1/7p/8/8 b - - 0 1"] [PlyCount "3"] [EventDate
"2014.??.??"] [SourceDate "2018.10.08"] 1... g5 $1 {Only this wins. The other
2 moves engines usually play lead to an indestructible fortress!} (1... h2 $2
2. g5 h1=Q 3. Bh6 Kxd4 4. Kf8 $11 { White with a Queen and a Knight more but
it is just a draw!!}) (1... Kxd4 $2 2. g5 h2 3. Bh6 h1=Q 4. Kf8 $11) 2. Nf3
Ng6 $19 *

[Event ""] [Site "?"] [Date "1968.??.??"] [Round "?"] [White "Kasparyan=G"]
[Black "(=3012.32e3d6)"] [Result "*"] [SetUp "1"] [FEN
"5N2/6N1/q2k3p/8/6p1/4K1PP/B5P1/8 w - - 0 1"] [PlyCount "18"] [EventDate
"1968.??.??"] 1. Nf5+ $1 {White will create a fortress with a draw.} (1. Kf4
$2 Qf1+ 2. Kxg4 Qxf8 $19) (1. Nfe6 $2 Qxa2 2. hxg4 Qxg2 $19) 1... Ke5 (1...
Kc5 2. Ne6+ Kb4 3. Bd5 $11) (1... Kc6 2. Nd4+ Kb6 3. Nd7+ Kc7 4. Be6 $11) 2.
Nd7+ $1 Kxf5 3. Bb1+ Kg5 4. h4+ Kh5 5. Kf2 $1 Qa7+ 6. Kf1 Qa1 7. Nf6+ $1 Qxf6+
8. Kg1 Qb6+ 9. Kh2 $11 Qxb1 *

[Event "?"] [Site "?"] [Date "????.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "1/2-1/2"] [SetUp "1"] [FEN
"4bq2/5pbK/3kp3/1p1p2p1/pP1PPP2/P5B1/P7/5Q2 w - - 0 2"] [PlyCount "21"] 2.
fxg5+ $3 {Giving the Queen to create a fortress.} (2. f5+ $2 Ke7 3. f6+ Bxf6
4. Bd6+ Kxd6 5. e5+ Kc7 6. Qxf6 Bc6 $19) 2... Ke7 3. Qf6+ $3 Bxf6 4. gxf6+ Kd8
5. e5 Bc6 6. Bf4 Kc7 7. Bh6 Qd8 8. Bf8 Kd7 (8... Qxf8 $11 {Stalemate.}) 9. Bc5
Bb7 10. Kg7 $11 {Black can't penetrate.} Qc8 11. Kh7 Qxc5 12. bxc5 1/2-1/2

[Event "?"] [Site "?"] [Date "2013.03.27"] [Round "?"] [White ""] [Black "?"]
[Result "*"] [SetUp "1"] [FEN
"6r1/6r1/2p1k1pp/p1pbP2q/Pp1p1PpP/1P1P2NR/1KPQ3R/8 b - - 0 1"] [PlyCount "5"]
1... Qf5 $3 {Giving the Queen to obtain a fortress white can't break.} 2. Nxf5
gxf5 3. Rg3 h5 $11 *

[Event "?"] [Site "?"] [Date "2013.03.27"] [Round "?"] [White "draw"] [Black
"?"] [Result "*"] [Annotator "George"] [SetUp "1"] [FEN
"r7/7k/5R2/p3p3/Pp1pPp2/1PpP1Pp1/K1P3P1/8 w - - 0 1"] [PlyCount "13"] 1. Kb1
$3 Kg7 2. Rh6 $3 Kxh6 3. Kc1 Kg6 4. Kd1 Rh8 5. Ke2 Rh2 6. Kf1 Rh1+ 7. Ke2
{Stalemate trap.} *

[Event "?"] [Site "?"] [Date "2013.03.15"] [Round "?"] [White "Draw!!"] [Black
"?"] [Result "*"] [Annotator "George"] [SetUp "1"] [FEN
"6N1/6p1/1B2P3/6r1/6Pk/5ppP/6P1/7K w - - 0 1"] [PlyCount "25"] [EventDate
"2013.??.??"] 1. e7 $1 (1. Ne7 $2 f2 2. Bxf2 gxf2 3. Kh2 Rxg4 4. g3+ Kg5 5.
h4+ Kf6 $19) 1... Re5 2. e8=Q Rxe8 3. Ne7 Rxe7 4. Bd8 f2 5. Bxe7+ g5 6. Bc5
f1=Q+ 7. Bg1 Qb5 8. Ba7 Qb1+ 9. Bg1 Qc2 10. Bd4 Qd1+ 11. Bg1 Qe2 12. Bc5 Qe1+
13. Bg1 $11 {Draw.} *

[Event "?"] [Site "?"] [Date "2009.09.23"] [Round "?"] [White "?"] [Black "?"]
[Result "*"] [Annotator ",user"] [SetUp "1"] [FEN
"3k4/p1pq3p/1p5R/4P3/P6P/2PN4/1PN3K1/8 w - - 0 1"] [PlyCount "12"] [EventDate
"2009.??.??"] 1. Nd4 $3 {An amazing position where white builds a cage for
black's Queen.} Qg7+ 2. Kh3 Qxh6 3. Nf4 Kd7 (3... Qg7 4. Nde6+) (3... Qf8 4.
Nde6+) 4. Nde6 c6 5. Kg4 Ke7 6. h5 Ke8 {All squares of Queen are blocked and
the white King can freely move and analysis shows white wins!} *

[Event ""] [Site "?"] [Date "2008.08.16"] [Round "?"] [White ""] [Black "?"]
[Result "*"] [Annotator ",user"] [SetUp "1"] [FEN
"2n1k3/1pPp2B1/pP1Pp3/P3Pp2/2R2Pp1/2K3np/5P1P/8 w - - 0 1"] [PlyCount "39"]
[EventDate "2008.??.??"] 1. Kd3 $18 (1. fxg3 $2 {The key is to avoid fxg3?
that leads to a fortess for black with a draw.}) 1... Nf1 (1... Nh5 2. Bh6 Kf7
3. Rc1 Kg6 4. Bg5 Kf7 5. Rg1 Kg6 6. f3 gxf3 7. Rf1 f2 8. Rxf2 Ng7 9. Rf3 $18)
2. Rc1 Nxh2 3. Rh1 Nf3 4. Bf6 Kf7 5. Ke3 Kg6 6. Rxh3 gxh3 7. Kxf3 Kh5 8. Kg3
h2 9. Kxh2 Kg4 10. Bg5 Kf3 11. Kh3 Ke4 12. Kh4 Kd5 13. Kh5 Kc5 14. Kg6 Kb4 15.
Kf7 Kxa5 16. Ke8 Nxb6 17. c8=Q Nxc8 18. Kxd7 Na7 19. Kxe6 Kb4 20. d7 $18 *

[Event "1800"] [Site "?"] [Date "2008.07.08"] [Round "?"] [White "New game"]
[Black "?"] [Result "*"] [Annotator "User,user"] [SetUp "1"] [FEN
"k1b5/Pp1p1ppp/1P1P1P1P/5p1K/5P2/3p1P2/8/2N5 w - - 0 1"] [PlyCount "29"]
[EventDate "2008.??.??"] 1. Nb3 $1 {Black has built a fortress but white's
Knight is tricky. This is the only move that wins.} (1. hxg7 d2 2. Kh6 dxc1=Q
3. g8=Q Qh1+ 4. Kg7 Qh6+ 5. Kxh6) (1. Nxd3 gxf6 {Draw. Stalemate on next move.
If white tries:} 2. Ne5 fxe5 3. fxe5 f4 {It's pointless. So a draw!}) 1... d2
2. Nxd2 gxf6 3. Ne4 $1 fxe4 4. fxe4 f5 5. e5 f6 6. Kh4 fxe5 7. fxe5 f4 8. Kh3
f3 9. e6 f2 (9... dxe6 10. Kg3 f2 11. Kxf2 $18) 10. Kg2 f1=Q+ 11. Kxf1 dxe6
12. Kf2 e5 (12... Bd7 13. Kf3 Bb5 14. Ke4 Bd7 15. Ke5 Bc8 16. Kf6 $18) 13. Kf3
Bf5 14. Ke3 e4 15. Kf4 $18 *

[Event "1800"] [Site "?"] [Date "2008.07.08"] [Round "?"] [White "ChestUCI
Ver.4.4"] [Black "User, user"] [Result "*"] [SetUp "1"] [FEN
"4r3/p1p1pPp1/P1P1P1P1/5K2/3p2P1/7p/3P1ppr/3R1nkq w - - 0 1"] [PlyCount "37"]
[EventDate "2008.??.??"] 1. fxe8=N $3 {Black has built a stalemate fortress.
But again Knights give the solution! White wins with this underpromotion to
Knight. And several others :)} d3 2. Nf6 gxf6 3. g5 fxg5 4. g7 g4 5. g8=N g3
6. Nf6 exf6 7. Kg6 f5 8. e7 f4 9. e8=N f3 10. Nd6 cxd6 11. c7 d5 12. c8=N d4
13. Nb6 axb6 14. a7 b5 15. a8=N b4 16. Nb6 b3 17. Nc4 b2 18. Ne5 b1=Q 19.
Nxf3# *

[Event "1800"/1"] [Site "?"] [Date "2008.04.03"] [Round "?"] [White ""] [Black
"?"] [Result "*"] [Annotator "User,user"] [SetUp "1"] [FEN
"5kbQ/pp4p1/n3p2p/3p2r1/7N/2PPP2P/PP3PP1/4n2K b - - 0 5"] [PlyCount "5"] 5...
Rxg2 $3 {Black takes advantage of the cage he has put the white Queen.} ( 5...
Nxd3 6. f4 Nxf4 (6... Rf5 7. Ng6+ (7. Nxf5 exf5 8. g4 fxg4 (8... Nac5 9. g5
hxg5 10. fxg5) 9. f5 Kf7 10. f6 gxf6 11. Qxh6) 7... Kf7 8. Ne7 Kxe7 9. Qxg8
$11) (6... Rg3 7. Kh2 Rxe3 8. f5 $11) 7. exf4 Rxg2 $11) 6. Nxg2 (6. e4 Nc5 7.
exd5 exd5 8. f4 $19) (6. d4 Nb8 7. e4 Nc6 8. c4 Nd8 9. cxd5 exd5 10. exd5 Nf7
11. Qxg8+ Kxg8 12. Nxg2 Nxg2 13. Kxg2 $19) 6... Nxg2 7. Kxg2 Nb8 $19 {Black
wins easily.} *
