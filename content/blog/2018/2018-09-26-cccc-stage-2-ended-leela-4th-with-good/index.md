+++
title = "CCCC stage 2 ended. Leela 4th with a good performance! Stockfish undefeated!"
slug = "cccc-stage-2-ended-leela-4th-with-good"
published = 2018-09-26T11:24:00+02:00
author = "Bob23"
tags = []
draft = false
+++

![]({{< file "2018-09-26-cccc-stage-2-ended-leela-4th-with-good-
gjhgj786867645.png" >}})

Chess.com Computer Chess Championship stage 2 has finally ended. After a 280
games battle only the top 2 engines will continue to the superfinal.  
 **Stockfish and Houdini** for a **200** games "fight". Well no one really
expects it would be a fight and Stockfish will probably win this by a huge
margin.

 **Leela** finished 4th, with 37.5 points, in a strong position where it was
very close just 1 point short to the 3rd Komodo and a comfortable 6.5 points
ahead of the 5th Ethereal. Fire was 6th with 29 points and Booot and Andscacs
took the last 2 places with 25.5 and 24.5 point respectively.  
Houdini with 43 points won easily the 2nd place 4.5 point ahead of Komodo
while Stockfish remained undefeated with an easy lead 8 full points ahead of
the 2nd Houdini!  
So till now **Stockfish** has not lose a single game out of the 116 of stage 1
and 2. Let's see if it will lose in the 200 games of the superfinal. Logic
says it will but Stockfish on CCCC hardware appears to be invincible! Even
though it should definitely had lost one game against Leela since they reached
a dead-won endgame position.

Leela managed against the big 3 to have a fantastic score in this tournament
of **2 wins, 3 losses and 31 draws!!** While against Stockfish she was the
only engine in this tournament that lost just 1 time as it had 1 loss and 11
draws against the mighty Stockfish.

In stage 2 there were also some really dubious predefined opening lines, like
one that Leela had to deal with in 2 games against Ethereal(the lines always
had been played on reverse too so for a specific pair of engines would not be
unfair) the 1.e4 Nf6 2.e5 Ne4? line where Leela won with white while she lost
with black. Other 2 such dubious lines had been played but Leela did not have
any of the other.

From the 280 played games, **white** won the **80(28.6%)** , **black** only
the **23(8%)** and **177(63%)** ended in a **draw**.

Other than that Leela performed very good in this tournament showing it
belongs to top 5, perhaps even top 4 engines and very close to top 3 now, of
the Chess engine world right now, and showed in head to head performance
against the big 3 it's already among them. The problem lies when it comes to
play weaker engines where she does not succeed to have such good results as
the other big 3 have.  
This was even more evident in stage 1 where she finished behind Fire, while
here she left Fire, 8.5 full point behind!

So she definitely has a specific problem of underperformance when playing in a
pool of weaker engines. This issue must be because of the general Chess
related problem of Leela to convert an advantage that usually gets in
middlegame. And this is mostly an endgame issue, on converting her advantage
in endgame. Her endgame while still pretty good, it has certain blind spots
compared to other top 20 traditional Alpha-Beta engines.  
A general issue is the **perpetual check problem of Leela** , that she is not
able to detect perpetual checks. This can be improved by more and more
training, so to see patterns where perpetual had occurred(a big problem to
this is temperature with training, that is mandatory as it allows bad moves to
be played in order Leela to learn new things, but it kinda makes perpetuals
much more rare, so there should be a fine balance between temperature amount
and a method of allowing game to continue for Leela to start learning
perpetuals, not an easy problem to solve) and mainly by search, that is to
improve the **puct** (polynomial upper confidence trees) search Leela uses,
that is not good at finding and resolving very narrow lines in the search
tree, that alpha-Beta search is superb at this finding these lines very fast,
but again this is not an easy thing to do also.  
Another endgame issue are specific type of endgames like King and Rook for one
side versus King and Knight or Bishop for the other where Leela believes the
Rook side wins. A bigger issue is with opposite color Bishops(OCB) endgames
where at least test-10 nets of Leela have big problems on handling these,
giving very high evaluations even on drawing positions.  
Leela definitely needs more endgame training with other methods like using
endgame tablebases and definitely seeing more endgames in her training and
currently test-30 is about that, experimenting with different schemes to help
her in the endgame.

_**  
****LEELA'S MISTAKES.**_  
This Leela net(11089) in this tournament would have won at least 3 games if
she was using endgame tablebases(EGTBs or TBs). She supports them but they
preferred(because it was not that well tested) Leela not to use them in CCCC.  
Furthermore, Leela lost half a point in 10 games that she should definitely
should have taken! And another half point in a winning position.  
 **The games where:**  
 **•Leela-Crafty.** Leela should have won easily in a dead winning position
but failed to find the winning move more than once. Newer nets and with TBs
would help in one position where it would find it, but not in all positions
that net 11089 missed. A 2000s engine would find the winning move.  
 **•Leela-Pedone.** Leela reached a winning endgame only to badly misplay it
failing to find the winning continuation multiple times. Leela with other
newer nets with TBs would win or would not win also as some nets managed to
win from that position while other didn't.  
 **•Pedone-Leela.** Leela reached another totally winning endgame position
only to blunder the win. Thankfully this net as also all newer ones(e.g the
strong 11250) when using TBs managed to win easily from the game position.  
 **•Andscacs-Leela.** Here in a drawn 7 piece position Andscacs blundered and
Leela had an easy 6 men TB win. Yet in CCCC she didn't use TBs so she didn't
managed to win in a difficult to win without TBs position of King+Rook+Bishop
versus King++Bishop(OCB)+Knight of Andscacs. She would have won easily had she
used the binary with tablebase support.  
 **•Leela-Komodo.** Here Leela missed 7 chances to win, the 3 in the late
middlegame where she failed to provide a killing blow with moves that would
win very easily, but she also missed in the endgame, a totally winning endgame
position, 4 times to play the correct move and win. Thankfully this net as
also especially newer ones(e.g 11250) with the use of TBs are winning easily
from this position.  
 **•Leela-Stockfish**. Here Leela managed to outplay Stockfish and reached a
totally winning endgame position, only to blow it and blunder to make it a
dead draw by TBs. Leela with this 11089 net with TBs would not have won the
game also, so TBs would now have helped her in this game. Thankfully though,
newer nets like 11250 would have won easily with the use of TBs.  
 **•Leela-Stockfish**. Another game against Stockfish and another missed win
by Leela. This time it was not an endgame miss. Leela missed a nice middlegame
tactical move that if she had found it she would have a crushing position.
This net can't seem to find it even with much more time, while net 11250 finds
it after 1.5 million nodes which in this time control of 15'+5" and that
hardware, is on the limit to find it or not. Yet with better scaling on GPUs
that is on the plans 1.5 million nodes would be easy in this time control
since for example Leela on CCCC uses 4 Tesla V100 but in reality she does not
take advantage of that and her speed is about 40% of what should be. That
means even if she run on 2 V100 the result would be the same. So when this
multiGPU scaling issue is fixed her speed would by much better in these
tournaments.  
 **•Ethereal-Leela.** Leela reached a totally winning endgame position, only
to badly blunder it and just draw. TBs would certainly help here and Leela
would have avoided the blunder moves that lead to immediate draw, but this
endgame needs 1-2 key moves with a specific technique to be won so maybe even
then Leela would not have won. Afterward games with other nets from this
position haven't been done yet like in the above cases, so we don't currently
know how newer nets would do and if they be able to win.  
 **•Houdini-Leela.** Leela had in this tournament against Houdini 11 draws and
one loss. The loss came in a completely drawn position where Leela blundered
heavily. Thankfully if Leela(this net as also others) had used TBs it would
not blundered and would have found the drawing move(181...h2).  
 **•Fire-Leela.** Leela in a dynamic but equal position blundered heavily and
Fire won easily after that. This net doesn't seem to be able to find the
correct(drawing as analysis says) move in time, while net 11250, as also other
newer nets, finds it in zero seconds.  
 **•Andscacs-Leela.** In a completely equal middlegame position Leela
blundered heavily giving an easy point to Andscacs. Most Leela nets have a
hard time to avoid the mistake so the answer for avoiding this is more
training for Leela or search improvements :)  
Leela also badly misplayed a game with black against Booot, after outplaying
it in middlegame they reached a favorable endgame position for Leela, only to
blunder it because she acquired a Pawn in 2nd rank that thought it was
winning(giving super high bogus evals of -10.0 or so) only to realize inside
the game that it was a dead draw by perpetual.

 _ **Final stage 2 standings:**_  
| Player | Score  | (Tie)  | Stockfish  | Houdini 6. | Komodo 211 | Lc0 17.110
| Ethereal 1 | Fire 7.1  | Booot 6.3. | Andscacs 0 | +/-/=  
---|---|---|---|---|---|---|---|---|---|---|---|---  
1: | Stockfish 220818 | 51.0 / 70 | 1639.25  | XXXXXXXXXX | =1=1=1=1=1 |
===1=====1 | ====1===== | 1=1=1=1=11 | 11=11=1=1= | =1=111===1 | 11=11111==|
(+32 -0 =38)  
2: | Houdini 6.03 | 43.0 / 70 | 1367.50  | =0=0=0=0=0 | XXXXXXXXXX |
1==1==01=1 | ========1= | 1==1=1==== | 11=11=1==1 | =1===1=1=1 | 1=1=1===1=|
(+22 -6 =42)  
3: | Komodo 2118.00 | 38.5 / 70 | 1248.75  | ===0=====0 | 0==0==10=0 |
XXXXXXXXXX | ======0=01 | 1====1===1 | 1==101==== | 1==1==1==1 | 1==1=1=1==|
(+16 -9 =45)  
4: | Lc0 17.11089 | 37.5 / 70 | 1264.25  | ====0===== | ========0= |
======1=10 | XXXXXXXXXX | ========10 | =111=0==== | 11====1=== | 10====101=|
(+12 -7 =51)  
5: | Ethereal 10.88 | 31.0 / 70 | 1017.00  | 0=0=0=0=00 | 0==0=0==== |
0====0===0 | ========01 | XXXXXXXXXX | ==0=0====1 | ======1=== | 1=1=10=11=|
(+8 -16 =46)  
6: | Fire 7.1 | 29.0 / 70 | 950.75  | 00=00=0=0= | 00=00=0==0 | 0==010==== |
=000=1==== | ==1=1====0 | XXXXXXXXXX | ===1=1=1== | =====0=1==| (+8 -20 =42)  
7: | Booot 6.3.1 | 25.5 / 70 | 879.00  | =0=000===0 | =0===0=0=0 | 0==0==0==0
| 00====0=== | ======0=== | ===0=0=0== | XXXXXXXXXX | ====1=====| (+1 -20 =49)  
8: | Andscacs 0.94 | 24.5 / 70 | 842.50  | 00=00000== | 0=0=0===0= |
0==0=0=0== | 01====010= | 0=0=01=00= | =====1=0== | ====0===== | XXXXXXXXXX|
(+4 -25 =41)

 _ **Stage 2 ratings:**_

    Rank Name               Elo    +    - games score oppo. draws   
       1 Stockfish 220818   198   58   55    70   73%    61   54%   
       2 Houdini 6.03       133   55   54    70   61%    70   60%   
       3 Komodo 2118.00     102   54   53    70   55%    75   64%   
       4 Lc0 17.11089        98   52   52    70   54%    75   73%   
       5 Ethereal 10.88      50   53   53    70   44%    82   66%   
       6 Fire 7.1            34   54   55    70   41%    84   60%   
       7 Booot 6.3.1         11   52   54    70   36%    88   70%   
       8 Andscacs 0.94        0   54   56    70   35%    89   59% 

**Shortest wins (White)**  
1: 1-0(52) Lc0 17.11089 3300 - Andscacs 0.94 3404  
2: 1-0(53) Ethereal 10.88 3283 - Lc0 17.11089 3276  
3: 1-0(56) Stockfish 220818 3439 - Fire 7.1 3283  
4: 1-0(56) Komodo 2118.00 3404 - Fire 7.1 3300

 **Shortest wins (Black)**  
1: 0-1(58) Ethereal 10.88 3283 - Komodo 2118.00 3400  
2: 0-1(59) Andscacs 0.94 3244 - Stockfish 220818 3300,  
3: 0-1(64) Fire 7.1 3326 - Stockfish 220818 3283  
4: 0-1(67) Andscacs 0.94 3244 - Stockfish 220818 3300

The games of Leela to download in a PGN: [Leela
PGN](https://georgemj23.000webhostapp.com/LeelaStage2.pgn)  
And all stage 2 games in a PGN: [CCCC Stage 2
PGN](https://georgemj23.000webhostapp.com/CCCC%20stage%202.pgn)  
(the last Houdini-Komodo 1-0 game was not included in the official PGN so it
is missing from here too.)
