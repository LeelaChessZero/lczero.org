+++
title = "TCEC Superfinal Leela-Stockfish continues. Equal after 33 games! "
slug = "tcec-superfinal-leela-stockfish"
published = 2019-02-10T17:18:00+01:00
author = "Bob23"
tags = []
draft = false
loadChessbaseScripts = true
+++

**TCEC superfinal** of **14th** Season is currently being played as
**Stockfish** and **Leela** battle for the TCEC Season 14 Champion title.  
Till now Leela surprises Stockfish and after **33** games the result is a
perfect tie with **16.5-16.5** points.  
Yet 67 more games will be played so everything can happen.

<!--more-->

The superfinal started with most people believing Stockfish for one more year
would easily win it and reach 6 TCEC champion titles. After all Stockfish is
not only the last season's TCEC champion but has dominated being 1st in the
last 3 consecutive TCEC seasons(S11, S12 and S13).

► **At Season 11** Stockfish won superfinal against Houdini 6.03 with **20
wins, only 2 losses and 78 draws** for a 59-41 total score.  
► **At Season 12** Stockfish won superfinal against Komodo 12.1.1 with **29
wins, 9 losses and 62 draws** for a 60-40 total score.  
►At previous **Season 13** Stockfish won superfinal against Komodo 2155 with
**16 wins, 6 losses and 78 draws** for a 55-45 total score.

Yet, Leela after 33 games provides a good resistance having won 6 games,
having lost 6 also and with 21 draws.

Here is the standings table so far:

**TCEC Season 14 - Superfinal  2019**

{{< style "cleartable" >}}
| | | | |
|-|-|-|-|
| 1  | Stockfish 190203 | ½½½½½½**1**½½**10**½**0**½½**10**½½**111**½½**0**½**0**½**0**½½½½  | 16.5/33 |
| 2  |LCZero v20.2-32930 | ½½½½½½**0**½½**01**½**1**½½**01**½½**000**½½**1**½**1**½**1**½½½½  | 16.5/33 |
{{< /style >}}

We remind that superfinal uses a time control of **120 minutes base time plus
15 seconds per move** Fischer increment and that the openings are preselected
by Jeroen Noomen(known for countless years for his opening books for various
Chess programs like Mephisto, Chess Tiger, Rebel, Rybka, etc) to provide
dynamic positions not too simplified where engines will have the ability to
showcase their planning strategies and playing abilities in various ECO.  
Stockfish runs on **43 cores** of 2 x Intel Xeon E5 2699 and Leela on **2
GPUs** of 1 x RTX 2080 Ti + 1 x RTX 2080.

So Leela till now puts a very good fight against the mighty Stockfish and even
though the most probable result is Stockfish to start taking a lead and
finally win, we are still not sure about anything yet and many exciting games
are being played.

Leela could even be on the lead with 3 to 4 more points than Stockfish since
she gifted for free at least 3 or even 4 half points in 4 games to Stockfish,
by blundering heavily with blunders only seen in very old programs(like
1990s). But Leela still does very bad blunders for her playing strength.
Playing something like 3500 FIDE Elo Chess and doing -sometimes- tactical
blunders players with 1200 Elo do.

So situation in TCEC superfinal so far is:

After a good start with 6 draws in the first 6 games, Leela with white lost a
rather dubious opening, a King's Gambit Accepted variation. In the reverse
game with Leela white, Leela created too a winning position(analyzing
afterwards with Stockfish and Cfish with 7 men syzygy tablebases it was shown
that h and g Pawns of white would be lost(for the a-Pawn of white) and eval of
Cfish was at +5.30 and rising) but played an inexplicable blunder,
**51...Be3??** throwing the win and it just had a draw.

After 2 more draws, Stockfish playing some nice aggressive Chess with white
finished the game easily with some nice attack and won, but in the next
game(not the reverse of that Stockfish won) Leela, in a French Tarrasch
opening where Stockfish played very badly, won rather very easily and managed
to hold the reverse as Stockfish played the white side badly also. After that
Leela won with white again so score was equal again with both sides having
from 2 wins.

After 2 more draws Stockfish completely outplayed Leela in a very dynamic
opening and won, but Leela in the next game(not the reverse as Leela starts
the opening pairs first), won also so score was again equal with both having
from 3 wins.

2 more draws and then suddenly Leela started a blunder fest by **losing 3
consecutive games by 3 horrible blunders.**

![]({{< file "horrible-blunders.png" >}})

In a complicated Ruy Lopez variation, both engines reached a very dynamic and
tactical position. Stockfish with white had a small advantage, but Leela must
have been lost in tactics and overlooked some nice moves by Stockfish, yet
position was still holdable and 39...Qb3 must have given a draw(in a nice
endgame of KRPPP-KBNP but that must be draw) but Leela played the horrible
**39...Rd6??** losing on the spot. Stockfish is a tactical monster, the best
of its kind, that will not forgive anything!

In the next game Leela in an extremely complicated game(an English gambit
opening line) she had an advantage but on move 34 she decided to commit
suicide missing a tactic and playing **34.Kf1??** an AWFUL move that not only
loses the advantage but that loses the game immediately!! Then Stockfish after
playing the pretty 34...Bxf2 went on to win easily.

Even trying the very old 1996 program Fritz 5.32, it never even considers Kf1
seeing it's losing! Very bad tactical oversight by Leela.

But it's probably ok since Leela is still very new, it hasn't even closed 1
year of existence! So many new approaches and improvements will be discovered
for her training to improve in tactics and generally of course, as also many
new innovations in her PUCT (Polynomial Upper Confidence Trees) search will
occur too and even hybrids with search of MCTS or PUCT along with a
cooperation with AlphaBeta search may happen to improve tactical strength.

For now Leela is blind to some tactics every now and then, but it's has become
a rarity these days compared to 6-7 months before. Yet, they still happen and
cost her 1.5 to 2 points here till now(plus the minus 1.5 to 2 points where
Stockfish would have less).

One thing Leela's devs are thinking is to implement Deepmind's representation
of policy head and they conjecture it will improve Leela in tactics. Probably
in the next main run(test as they call it) it will be implemented. This is the
issue for it [HERE!](https://github.com/LeelaChessZero/lc0/issues/637):

So Leela lost 2 games in a row. But things was about to get even worse. Since
in the next game Leela would lose again! In a position where white(Stockfish)
had an advantage and was pushing things trying to win, but it was not an easy
win, Leela decided to do things easy for Stockfish. She played **31...Qd6?**
losing easily. 31...Qb6 would provide much tougher resistance and would may
hold. One can argue that this is was not an exact gifted half point of Leela
of course but was a bad blunder again where most good engines from 2000 till
now would have found easily.

![]({{< file "bad-blunder.png" >}})

 **So now Stockfish was on the lead with 6 wins versus 3 of Leela.** So
everyone thought well this is it, things have gone the normal way Stockfish
will win easily this supefinal.  
Well not that easy!

After 2 draws, Leela managed to win in the endgame of a strange game of equal
material because she had more active pieces. Another draw and Leela with white
again won in a spectacular way a Pirc line. Leela's play on that game was very
speculative and active playing for attacking Stockfish King. Stockfish
completely missed **18.g5!** and **19.h4!!** moves by Leela and then it went
downhill for it.  
So the lead of Stockfish would be back to 1 point.  
Another draw of Leela against Stockfish that had white, and once again in a
Dutch opening she played solid and again with a classic h6 thorn Pawn that
created some mating threats she reached an endgame where she was much better
and won.

And then 3 more drawn games happened.  
So we had 6 wins for both right now with 21 draws.

 **The games for replay:**

{{< chessgame "games.pgn" >}}