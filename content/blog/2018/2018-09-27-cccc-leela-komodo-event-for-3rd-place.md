+++
title = "CCCC Leela-Komodo event for 3rd place and Chess variants tournament!"
slug = "cccc-leela-komodo-event-for-3rd-place"
published = 2018-09-27T16:09:00+02:00
author = "Bob23"
tags = []
draft = true
+++

[![](../../images/2018-09-27-cccc-leela-komodo-event-for-3rd-place-
fh68768888.png)](https://2.bp.blogspot.com/-iTScj_EdApo/W6zc9wKUMgI/AAAAAAAAAVc/MXajCi7ZApcWq-
rF8E36b-OZxTZkquGfgCLcBGAs/s1600/fh68768888.png)

  
Chess.com has [announced](https://www.chess.com/news/view/stockfish-houdini-
to-battle-for-computer-chess-championship-komodo-vs-lc0-for-3rd) that after
the CCCC superfinal between Stockfish and Houdini(Stockfish is ahead 27.5-20.5
till now) will finish, **then 30 games of Komodo versus Leela** will be played
to determine the 3rd place.  
This is a surprise since there were no such plans initially announced, but it
is welcomed for Leela and Komodo fans. Probably Chess.com did it since Leela
fan base is high and they want to take advantage of this.  
  
The most interesting thing on the announcement is that the top 6 engines,
Stockfish, Houdini, Komodo, Leela, Ethereal and Fire, will play a 10x Round-
Robin tournament from each of the following 5 **predefined positions/Chess
variants.**  
Each engine will play one with white and one with black from each position in
a total of 50 games for each engine(50 rounds).  
  
And here comes the dangerous part about Leela.  
Leela is a neural net engine that her evaluation of positions comes from
training by playing herself millions of Chess games. And this training is
being done from the normal Chess starting position. But Leela is being trained
in such a way and her network has been built in such a way, that in order her
network to give a meaningful opinion about a position it is **MANDATORY** to
feed her with **FULL HISTORY** of moves from the Chess starting position to
the desired position to be analyzed.  
A strange thing is that in the above sentence we can replace the "FULL
HISTORY" with a "1 or 2 plies history" and still get an equivalent meaningful
result.  
But if you provide her with just a **FEN or EPD** of the position(the
description of where each piece is but not how the position has been arisen),
she will still be able to analyze the position, but in a totally **bogus way,
in a way that we couldn't know if the output is meaningful or not **and in
many cases the output(the moves she recommends) would be of absolutely
horrendous quality.  
  
  
In most test suites(that most of the times are provided by FEN, and this is
because with traditional engines there is no difference at all with FEN or
with full history), Leela severely underperforms when she is solving them by
FEN compared to when we give each position a 2 ply history.  
  
An an exaggerated example to show the big issue(the issue is with all
positions and it just becomes more minor but still important) in the following
position:  
Black to play. His Queen is threatened and can capture for free the Bishop
with Qxa4. But this loses and it's a tough testposition for engines.  
Correct is Qa6 with a draw.  

  
Leela 11070 net, with history finds instantly a playable move(even though it
is losing but most engines want to play it) the Qxa4.  
After all the Queen is threatened to be captured so she has to move.  
  
But Leela 11070, analyzing with FEN, for the first 250000 nodes ignores that
her queen is about to be captured and plays nonsensical moves like e4, g6
giving +17.00 on the white side since white will capture the Queen!! After
250000 nodes she wakes up and moves her Queen out of the danger.  
  
 _ **Analyzing from the FEN:**_  

    
    
    Lc0v17 11070:  
     1/2    00:00     10    256    +39,29    h7-h5 c4xb5  
     2/3    00:00     19    365    +27,24    e5-e4 c4xb5 e4-e3  
     3/4    00:00     149    1,637    +18,52    f6-f5 c4xb5 e5-e4   
     3/4    00:00     157    1,554    +18,39    Rf8-e8 c4xb5 e5-e4   
     4/5    00:00     351    2,180    +18,92    e5-e4 c4xb5 e4-e3   
     4/6    00:00     666    2,786    +18,44    e5-e4 c4xb5 e4-e3   
     5/7    00:00     1,063    3,192    +18,59    e5-e4 c4xb5 e4-e3   
     5/8    00:00     1,575    3,563    +11,92    e5-e4 c4xb5 c6xb5   
     5/9    00:01     5,376    4,290    +14,43    g7-g6 c4xb5 e5-e4   
     5/9    00:01     7,175    4,475    +13,30    e5-e4 c4xb5 e4-e3   
     5/9    00:01     7,687    4,527    +13,55    h7-h5 c4xb5 c6xb5  
     5/9    00:01     8,199    4,557    +13,71    e5-e4 c4xb5 e4-e3   
     6/9    00:02     13,069    4,826    +14,69    e5-e4 c4xb5 e4-e3   
     6/10    00:03     18,425    4,933    +15,05    e5-e4 c4xb5 e4-e3   
     6/11    00:16     98,899    6,058    +16,63    e5-e4 c4xb5 e4-e3  
     6/11    00:21     138,229    6,474    +16,98    e5-e4 c4xb5 e4-e3 b5xc6 e3xf2   
     7/11    00:26     180,148    6,863    +17,25    e5-e4 c4xb5 e4-e3 b5xc6 e3xf2  
     7/11    00:31     222,873    7,131    +17,40    e5-e4 c4xb5 e4-e3 b5xc6 e3xf2   
     7/19    00:35     247,140    6,877    +17,40    e5-e4 c4xb5 e4-e3 b5xc6 e3xf2  
     7/19    00:36     252,795    6,839    -2,14    Qb5xa4 Nd2-e4 h7-h6 Rc1-d1 f6-f5

  
 _ **Analyzing with PGN(history of 2 plies):**_  

    
    
    [Event "?"]   
    [Site "?"]   
    [Date "????.??.??"]   
    [Round "?"]   
    [White "New game"]  
    [Black "?"]   
    [Result "*"]   
    [SetUp "1"]   
    [FEN "5rk1/6pp/qPp2p2/pRP1p3/Bp6/pN5P/P1PN1P2/1KR5 b - - 0 1"]   
    [PlyCount "2"]   
    1... Qxb5 2. c4   
    

  

    
    
    Lc0v17 11070:  
     1/2    00:00     2    47    -5,43    Qb5xa4 Nd2-e4  
     2/3    00:00     4    76    -3,42    Qb5xa4 Nd2-e4 f6-f5  
     3/4    00:00     9    145    -3,72    Qb5xa4 Nd2-e4 f6-f5 Ne4-d6  
     3/5    00:00     19    260    -2,84    Qb5xa4 Nd2-e4 Rf8-b8 Ne4-d6 h7-h5  
     4/6    00:00     46    479    -3,10    Qb5xa4 Nd2-e4 Rf8-b8 Ne4-d6 h7-h5 h3-h4  
     4/7    00:00     81    623    -3,07    Qb5xa4 Nd2-e4 Rf8-b8 Ne4-d6 h7-h5 h3-h4  
     4/8    00:00     161    987    -3,01    Qb5xa4 Nd2-e4 f6-f5 Ne4-d6 Rf8-b8 Rc1-g1 e5-e4  
     5/9    00:00     324    1,506    -2,96    Qb5xa4 Nd2-e4 f6-f5 Ne4-d6 e5-e4 b6-b7 Rf8-b8   
     5/10    00:00     513    1,928    -2,82    Qb5xa4 Nd2-e4 f6-f5 Ne4-d6 e5-e4 h3-h4 f5-f4   
     6/10    00:00     889    2,483    -2,71    Qb5xa4 Nd2-e4 f6-f5 Ne4-d6 e5-e4 h3-h4 f5-f4   
     6/11    00:00     1,401    2,859    -2,71    Qb5xa4 Nd2-e4 f6-f5 Ne4-d6 e5-e4 Rc1-d1 h7-h6   
     6/12    00:00     2,204    3,198    -2,61    Qb5xa4 Nd2-e4 f6-f5 Ne4-d6 e5-e4 Rc1-d1 h7-h6   
     7/12    00:01     3,739    3,713    -2,53    Qb5xa4 Nd2-e4 f6-f5 Ne4-d6 e5-e4 Rc1-d1 h7-h6   
     7/13    00:01     6,569    4,160    -2,36    Qb5xa4 Nd2-e4 f6-f5 Ne4-d6 e5-e4 Rc1-d1 h7-h6   
    

  
Net 11070 does not find the Qa6 drawing move that holds but does not give
nonsensical results like before.  
  
  
So Leela is _ **a) not meant for analyzing positions from FEN and b) not
suitable for playing Chess variants.**_  
But because she can analyze from FEN(even with bogus results and unexpected
effects) and play Chess variants people may think it's all fine.  
So here comes the dangerous part. That her performance may be considered ok
and be judged as like she is playing normally. But this would not be the case
as Leela will be underperforming in unexpected ways!  
  
  
A similar test had been done at [CCC
here](http://www.talkchess.com/forum3/viewtopic.php?f=2&t=68173&p=770566#p770566)
that showed Leela is not really suitable for Chess variants.  
  
  
 _The 5 positions of this Chess.com Chess variants event:_  
(A small gaunlet of Leela v18rc2 11089 net with GTX 1070 Ti versus 2 core
Stockfish dev, Ethereal 11 and Andscacs 0.93 has been played for each position
by FEN(this is a big mistake but since the CCCC games will by played that
way....))  
  
  
 **Knightmare!** In this very interesting Chess variant(it's not a Chess
variant actually since this is an illegal Chess position), white starts with 7
Knights instead of its 7 pieces and black's Knights are removed. Engines
usually believe from the starting position that black is winning but in fact
white maybe equal since the forking and mutually supporting power of Knights
is not to be underestimated as practice shows.  
Leela is **ABSOLUTELY TERRIBLE** at this with **white** pieces giving her
Knights for Pawns and really does not have any idea at all for the position!
With black she plays this better but again she doesn't really know how to
handle it. This is logical since she was not trained for this variant but only
for Chess. Furthermore the position starts from FEN so it's even worse for her
but that's not the main issue.  
This will be interesting to see how engines(except from Leela's games) will
handle.  

  
The results for this position:  

    
    
    Lc0v18 11089     - Stockfish_18081801_x64_bmi2       0.0 - 2.0    +0/=0/-2    0.00%  
    Lc0v18 11089     - Ethereal 11.00-x64-pext           0.0 - 2.0    +0/=0/-2    0.00%  
    Lc0v18 11089     - Andscacs 9.3                      1.0 - 1.0    +1/=0/-1    50.00%  
    

  
Leela won the game with black against Andscacs.  
  
  
 **Vertical Chess.** This is somewhat interesting and it will result in a
multiple Queens games where tactics will be very important. But first 3
moves(2 for white and 1 for black) are forced and we will probably end up
seeing almost identical games so it's not anything special.  
 **Leela** is absolutely **HORRENDOUS** in this variant! In some games against
other engines, she was lost as white from move 3(!) and 4(!) against Stockfish
and Ethereal and as black was lost from move 4 in all games. She was not even
willing to capture the opponent Queen(in forced recaptures) in some moves(!),
she was not capturing pieces for free and her play was more than terrible and
nonsensical.  

The results for this position:  

    
    
    Lc0v18 11089     - Stockfish_18081801_x64_bmi2       0.0 - 2.0    +0/=0/-2    0.00%  
    Lc0v18 11089     - Ethereal 11.00-x64-pext           0.0 - 2.0    +0/=0/-2    0.00%  
    Lc0v18 11089     - Andscacs 9.3                      1.0 - 1.0    +1/=0/-1    50.00%

Leela won the game with white against Andscacs.  
  
In this variant **white does not have the f-Pawn**. This is not and the most
interesting Chess variant but it's ok to see how white will handle missing the
valuable for King safety f-Pawn. Sometimes if white gets a good development,
the castled Rook has a nice view on the f-file.  

  
Leela did rather good in this variant even though it started from FEN. An
interesting experiment would be to play this with history e.g playing from a
PGN with the _1.f4 Nh6 2.f5 Nxf5 3.Nf3 Nh6 4.Ng1 Ng8_ line and see how much of
a difference for Leela this would do in her results, since this is the
appropriate way to play any predefined position with Leela.  
And even giving not full history but just 2 plies is enough as practice says,
e.g:  

    
    
    [Event "?"]  
    [Site "?"]  
    [Date "????.??.??"]  
    [Round "?"]  
    [White "New game"]  
    [Black "?"]  
    [Result "*"]  
    [SetUp "1"]  
    [FEN "rnbqkb1r/pppppppp/5n2/8/8/7N/PPPPP1PP/RNBQKB1R w KQkq - 0 1"]  
    [PlyCount "2"]  
      
    1. Ng1 Ng8   
    

  
Anyway, the results for this position(from FEN):  

    
    
    Lc0v18 11089    - Stockfish_18081801_x64_bmi2    0.0 - 2.0    +0/=0/-2    0.00%  
    Lc0v18 11089    - Ethereal 11.00-x64-pext        1.5 - 0.5    +1/=1/-0    75.00%  
    Lc0v18 11089    - Andscacs 9.3                   1.5 - 0.5    +1/=1/-0    75.00%

  
  
In this variant **white's pieces start up 1 rank.** This is kinda interesting
and creates normal Chess games as the weakness of white' s King inability to
castle is counterbalanced by the much more space in the center white has,
since he is able to attack the center much more easily.  
Leela did fine here since it can be considered a sane Chess position, even
though it started from FEN.  

  
The results for this position:  

    
    
    Lc0v18 11089     - Stockfish_18081801_x64_bmi2       1.0 - 1.0    +0/=2/-0    50.00%  
    Lc0v18 11089     - Ethereal 11.00-x64-pext           1.5 - 0.5    +1/=1/-0    75.00%  
    Lc0v18 11089     - Andscacs 9.3                      2.0 - 0.0    +2/=0/-0    100.00%

  
  
In this variant the **Rooks in the initial Chess position are replaced by
Queens**. No castle of course is available. Having 3 Queens in each side is a
tactical nightmare of course where crazy sacrifices are lurking around in
every corner, but it removes much of the Chess positional beauty and Rook
play. Just a tactical variant and nothing more.  
**Leela** seems to handle **TERRIBLY** this, as seeing this pattern with 3
Queens initially is something bizzare to her apparently and not only plays
suboptimal moves but doesn't even understand what is going on! Again logical
since she is not trained for this position. Not to mention that starting this
from FEN must be an extra reason too. There were positions(in the gaunlet)
where Leela while complete busted and losing, with a Queen less for a Bishop
and a checkmate very close to her King, was showing positive evals for her(!)
she was giving voluntarily her Queen for a Knight for no compensation, she was
not capturing pieces, etc.  

  
The results for this position:  

    
    
    Lc0v18 11089     - Stockfish_18081801_x64_bmi2       0.0 - 2.0    +0/=0/-2    0.00%  
    Lc0v18 11089     - Ethereal 11.00-x64-pext           0.0 - 2.0    +0/=0/-2    0.00%  
    Lc0v18 11089     - Andscacs 9.3                      0.0 - 2.0    +0/=0/-2    0.00%

  
  
So all in all an interesting event, but Leela is not an appropriate engine for
such variants tournament. She was not trained for that! She was trained for
Chess.
