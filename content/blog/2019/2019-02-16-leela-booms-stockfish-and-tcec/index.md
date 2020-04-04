+++
title = "Leela BOOMS Stockfish and TCEC Superfinal. She is leading with 2 points!"
slug = "leela-booms-stockfish-and-tcec"
published = 2019-02-16T14:42:00.003000+01:00
author = "Bob23"
tags = []
draft = true
loadChessbaseScripts = true
+++


As per the usual expression of **BOOM** of TCEC chat when an engine finds
something good, Leela right now is making a great surprise in her first
appearance in a TCEC superfinal by **leading after 64 games with 2 points
more. A 33-31 score in favor of Leela.**

<!--more-->

After a 14.5-14.5 score with 6 wins by each engine after 29 games, **19
consecutive draws** happened. But then Leela won one game and she was on the
lead for the first time on the superfinal! But there was more drama for
Stockfish fans as after 3 more draws Leela won again and hold the reverse(with
same opening) so she was 2 points up after 54 games!  
Things started to get hot and she could have even be 3 points up had she found
in the next game 55, with Leela having white, the 85.Kg3 move that wins. She
was short on time though and the win would be tough and long so it was not
such an obvious win.

Leela till now has 1 easy thrown win in the King's Gambit Accepted game-8 with
black where she blundered heavily by playing a horrible 51...Be3?? blunder
throwing the win, another one very probable win would be in game 35 if she
played 29.Bg2! instead of the 29.Ke1? even though that was not that obvious
win, she also has 2 thrown games, one at game 21 where in a slightly better
for Leela position she played the horrible super blunder 34.Kf1?? losing on
the spot and at game 20 in an equal, after the correct 39...Qb3 position, she
played the also super bad blunder 39...Rd6?? giving the full point to
Stockfish immediately. Super blunders that even programs of 1995 like Fritz
5.32 and Crafty of the time would avoid!  
Leela also blundered at game 22 where at move 32 in a position where Stockfish
had an advantage, she played 31...Qd6? that loses on the spot, while the
correct 31...Qb6 might hold with good defense.

Yet after all these Leela's very bad mistakes that are uncharacteristic for
this level, she manages to be in front by 2 points.  
This shows that this new approach of Chess engines has huge potential. It also
shows the previously(before Deepmind appeared) thought "perfect" or unbeatable
engine Stockfish is not in fact perfect or unbeatable and has big room for
improvements.

So game 58 was reached with the score at 29.5-27.5 in favor of Leela and it
was the turn of Stockfish to make a win. Its first after game 22!  
Game 22 till game 58 had Leela with **5 wins, 0 losses and 30 draws!**  
But this was again a win of Stockfish where Leela did her part helping
Stockfish by making a mistake again but this time in a difficult situation. In
a King's Indian defence, Stockfish pressed hard Leela's Kingside organizing an
attack. Leela defended well and she would have big chances to hold had she
found 33...Kf8!, yet Leela must have been lost in complications and played
Qf3? losing easily after that as Stockfish used his own version(after Houdini
doing this to Stockfish in TCEC CUP2 winning against Stockfish) of Alekhine's
gun to crush Leela's position.

After 4 more draws Leela managed to grab another win in a sharp French
variation(MacCutcheon) having white and defended easily in the reverse so she
now leads with 33.0-31.0  
Leela on French defense seems to be on another level of its own against other
engines.

 **Standings so far:**

    TCEC Season 14 - Superfinal  2019  
    1   LCZero v20.2-32930    +9/=48/-7 51.56%   33.0/64  
    2   Stockfish 190203      +7/=48/-9 48.44%   31.0/64

This is one of the most exciting superfinals of last years as the big favorite
to easily win, Stockfish, has big troubles to be on the lead and in fact Leela
is ahead by 2 points after 64 games.  
Stockfish was never in that position since its reign of being the most
dominant engine began, from about 2015 and after. In all superfinals of the
last 3 seasons, Stockfish won them comfortably(+18 points Season11, +13 points
Season 12 and +10 points last Season 13) but here Leela shows a better
understanding of the positions especially in openings, outplaying Stockfish so
result so far is not that suprrising for one that sees the games. Yet,
Stockfish is incredibly good defender and the top of its kind in tactics so it
still has a good chance of turning the tables.  
36 games remain so we will soon see if Leela manages to keep this small
advantage....

**Last game won by Leela in the French was an amazing one** showing how
much potential this new Neural-Net approach has. After Leela played some
clever openings moves advancing the h Pawn to h5 for gaining space there, she
sacrificed 2 Pawns to gain some more tempo and space for attacking to white's
King.  
Stockfish thought Leela's Pawns sacrifices weren't sound and that its position
is fine, but Leela played the unexpected to Stockfish 20.Bg6! while Stockfish
expected Leela to just regain the 2 Pawns with Bxc4. Leela knew better playing
Bg6 with a +2.25 score. Stockfish unimpressed captured the Bishop giving just
a calm +0.42 score but after next move Leela's eval started to climb even
more! Leela must have seen that the h8 black Rook is out of the game after all
these. Stockfish couldn't see it as it can't search in patterns like Leela
does, and has to calculate concrete variations but seeing that a Rook is out
of the game needs an excessive amount of computation so Stockfish is really
blind in this situation here.

And after Queen's exchange Leela gave another 2 Pawns, playing with 3 Pawns
less but thinking she is winning with a **+4.35** score. Stockfish realized
Leela was right around at that time but it was too late.  
Leela used the very weak black squares and her strong Pawn march in Kingside
excellently as also of course the fact that she paralyzed h8 Rook of Stockfish
with her Bg6! Leela took advantage that she was effectively was playing with a
Rook more so she won easily.  
That h8 poor Rook of Stockfish, hasn't moved the whole game!

Leela-Stockfish 1-0 Game 63, (French, MacCutcheon, Janowski variation)

{{< chessboard "all-games.pgn" >}}

Above we mentioned Leela thinking about +2.25 after playing Bg6 while
Stockfish being on +0.42 only. But evaluation of Leela does not correspond to
evaluation of Stockfish.  
If we use the evaluation to win percentage and expected score of [THIS
article](https://www.chessprogramming.org/Pawn_Advantage,_Win_Percentage,_and_Elo)
(that also TCEC uses) for Stockfish's evaluation, as also the Leela's own
evaluation to win percentage and expected score mapping (ecpected
score=ArcTan[centiPawns/2.90680623072]/3.096181612 + 0.5), for translating her
evaluations to probabilities of winning, we obtain the following 2 diagrams to
compare.  
We see that a +3.0 eval by Leela has much less probability to win than for
Stockfish's +3 eval.

![]({{< file "graph1.png">}})

![]({{< file "graph2.png">}})

 **[UPDATE:]**

Next 2 games 65 and 66 were not without much drama.  
After Leela leading with 2 points after 64 games, she completely outplayed
Stockfish with her having having and she reached a totally **winning position
with 7 pieces on the board** :

[7 men syzygy tablebases](https://syzygy-tables.info/?fen=8/2b1k3/8/2pP4/2P3N1/5K2/8/8_b_-_-_0_1) say it's a win for
white.  
Leela and Stockfish have 6 men syzygy tablebases in TCEC though so the game
continued and a very easy win for Leela was expected with her showing big
positives scores ( **+8.92** ) and Stockfish showed +14.44 and 3 moves later a
**+152.92** indicating it has found a tablebases forced win.

But Leela **did not manage to find the winning path** so instead of easy
winning she just drew! Another inexcusable half point lost that would have
made the point difference between her and Stockfish to be at +3. But it stayed
at +2.  
So along with the other **2 easy points she has thrown she would be at +7 from
Stockfish** if she didn't have these incredible blind spots. So the potential
of her seems even higher when these things get fixed.

But things would be even worse for Leela in the next game.  
In the reverse game Leela didn't have any problems to equalize and a **drawish
position** was reached with Stockfish saying +0.18 and Leela **+0.04** and the
176 threads Stockfish that was kibitzing the game said also 0.00.  
But then an unfortunate thing happened. Leela does not run on main hardware of
44 cores of TCEC but on remote one that has the 2 GPUs. And unfortunately
**the internet connection of this remote hardware was cut off** so connection
with Leela was lost and Leela refused to make a move.  
Meanwhile Stockfish on 176 threads had analyzed **4 trillion(!!)** positions
keeping its eval to **0.00.**

So according to the **_very bad in this aspect TCEC rules, the game would have
to be replayed from the starting position and not from the last position of
the interrupted game!_**  
This is obviously a bad rule for handling crashes(that it's not the engine's
fault for them) as it introduces possible **bias** towards an engine and the
final result of superfinal **does not depend only on the 2 engines that are
playing but also on external factor**, like because cutechess crashed or
because an internet provider had problems. And this is horrible!  
For example if the position before the crash has one engine winning, or to
have a big advantage or to have a small advantage then starting again from
start position the replay game is unfair to that engine as it has to gain
again this advantage and nothing guarantees that(engines are not
deterministic) and if this does not happen and replay is draw then this engine
has not won because of e.g an internet provider would be faulty or because of
a power outage etc. Or if there is a drawn position and replay happens then
one engine may win the game, so this is unfair to the other engine again.

And the latter is what exactly happened here too. A replay happened (from
starting position) and there was a crash again and then game was **replayed
again**, from starting Chess position again, but in that 3rd game Leela did
not manage to hold. In a complicated position where Stockfish had an advantage
she blundered again missing some nice and deep tactics and Stockfish
evaluation from +1.57 to +6.37 and went on to win easily from then.

So Leela had to not draw this game(playing the initial one) because an
internet provider had problems!  
This is not a football game where a pigeon can enter the field and can affect
a goal for example. This is a 100% controllable Chess tournament and a proper
replay from the position before the crash can happen.  
A reason that was provided in the past by some TCEC admins was a replay from
the previous stopped position can't happen, as engines would not have all the
hash nodes saved from previous search so they have to start search from
scratch, but this is a 100% bogus reasoning as:

•If you repeat game from last position you stopped before the crash then:  
Engines lose all the hash they had and all the info for the game AND game
starts from the position it has stopped so the external factor will only
affect in a small way(engines to not have their hashes filled from the
position it has stopped) the course of the **INITIAL** game.  
•If you repeat game from scratch(from starting position) then:  
Engines lose all the hash they had and all the info for the game AND game
starts from starting position so you lose all previous moves of the INITIAL
game too, so there is an external factor that affected **HUGELY** the course
of the INITIAL game.

So after these misfortunes instead of Leela being **+3** points after 66
games, she is only just **+1** point ahead of Stockfish.

The incredible game Leela didn't manage to win from a 7 men tablebase
position:

{{< chessboard "tablebase-failure.pgn" >}}

