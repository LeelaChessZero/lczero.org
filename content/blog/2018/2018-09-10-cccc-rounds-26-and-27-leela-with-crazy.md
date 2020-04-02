+++
title = "CCCC rounds 26 and 27. Leela with a crazy game as also her first loss!"
slug = "cccc-rounds-26-and-27-leela-with-crazy"
published = 2018-09-10T14:33:00+02:00
author = "Bob23"
tags = []
draft = true
+++

[![](../../images/2018-09-10-cccc-rounds-26-and-27-leela-with-crazy-
uiyi888888.png)

Leela had its first loss in the tournament after 27 games that went
undefeated. It lost against Ethereal with black after she blundered in
endgame.  
But before that, a real circus game happened in the Leela game of course
again. It was the Leela-Fisbo game with Fizbo the known drawmaster with 19
draws out of 25 games but Leela managed to hypnotize Fizbo to lose, while
Fizbo was playing with tablebases and the position was a drawn with just 4
pieces remaining!

 **ROUND 26**  
In this round Arasan upset Shredder by drawing him, while the big 3 won their
games as usual and Fire won against Nemorino. While for the battle of the top
8 place Booot, Ethereal and Andscacs won their games, even though all had the
black pieces.

The real craziness happened in the Leela-Fisbo game. Fizbo till now is drawing
most of its games with 19 draws out of 25 games and 9 draws out of the last
10!  
But here with Leela had no hope since Leela outplayed it and reached a won
position. But Leela playing with no endgame tablebases failed to find on
several occasions the winning move. Afterwards analysis has shown that Leela
with tablebases would have found most of the winning moves so she would have
won. Leela was pushing to win, the position was always won for her but she
didn't make any progress. When simplifications occurred she had to find in 2-3
occasions some easy winning moves (that most of them she finds with TBs) but
was still missing the key move that would give the final blow.

And suddenly she blundered! The position form then on was a dead tablebase
draw! And Fisbo was using tablebases and immediately has shown 0.00 indicating
of course that it would draw. The game as per rules of CCCC, continued till
the inevitable 50 move rule or stalemate draw and seemingly LEela would miss
half a point that she deserved for the way she played and outplayed the
opponent.  
But then suddenly Fisbo went crazy and played an unbelievable blunder and gave
away the game!! Unbelievable blunder for an engine that has access to endgame
3,4,5 and piece tablebases and we had 4 pieces on the board. Obviously some
bug of Fizbo that was exposed with the most dramatic way.  
Fizbo the drawmaster, threw away a dead, 4-men TB position, draw! Only Leela
can do this. Skynet maybe more close than we think.

The bug is reproducible as the following picture shows. Fizbo 1.9 with 3,4,5,6
syzygy tablebases, incorrectly, believes 209...Re1?? draws. 209...Rd2+ is the
move that draws.

[![](../../images/2018-09-10-cccc-rounds-26-and-27-leela-with-crazy-
dfguyt89798.png)

301 Vajolet vs Andscacs 0-1  
302 Wasp vs Texel 0-1  
303 Stockfish vs Xiphos 1-0  
304 Arasan vs Shredder 1/2-1/2  
305 Senpai vs Booot 0-1  
306 Crafty vs Pedone 0-1  
307 Nirvana vs Ethereal 0-1  
308 Fire vs Nemorino 1-0  
309 **Lco** vs Fizbo 1-0  
310 Fritz vs Laser 1/2-1/2  
311 Komodo vs Gull 1-0  
312 Houdini vs Ivanhoe 1-0

[Event "CCCC 1: Rapid Rumble (15|5) Stage 1"] [Site "Chess.com"] [Date
"2018.09.09"] [Round "?"] [White "Lc0 17.11089"] [Black "Fizbo 1.9"] [Result
"1-0"] [ECO "D31"] [WhiteElo "3300"] [BlackElo "3226"] [Annotator "Ts,George"]
[PlyCount "445"] [EventDate "2018.??.??"] [EventType "rapid"] 1. d4 d5 2. c4
e6 3. Nc3 c6 4. e4 dxe4 5. Nxe4 Bb4+ 6. Nc3 Nf6 7. a3 {Leela always like to
get rid of the pins immediately.} Bxc3+ 8. bxc3 Nbd7 $6 { An improvisation?}
(8... c5) (8... O-O) 9. Nf3 O-O 10. a4 c5 11. a5 $1 { Leela wants to take all
available space in Queenside also.} b6 12. Bd3 bxa5 13. O-O Bb7 14. Re1 Rc8
15. Ne5 {White is already better. It has all the space it want in the
Kingside, damaged black Queenside Pawns and its 2 Bishops pointing to the
King.} cxd4 $2 {Helping white to build an even better center?} 16. cxd4 Nxe5
17. Rxe5 Ba6 18. Ra4 (18. Qe2 $1 $16 {This is even better.}) 18... Nd7 19. Bg5
Qb6 20. Re1 Qb7 21. Be4 Qc7 22. c5 {[%csl Gc5,Gd4,Re4,Rg5][%cal Rd1h5,
Re1e3,Re3h3] White has dominated the game. His Bishop pair is ready for a King
attack, his Queen may go to g4 or h5 his Rook to support the attack via e3 and
d4-c5 Pawns are killing black's counterplay. But white is so much better here
that can have play in the Queenside also and it's even faster.} Rfe8 23. Ra3 {
[%cal Ga3h3] Keeping the options for a Kingside attack.} Nf8 24. Qa4 {White
decides to focus on Queenside. The a Pawns are weak and black does not have
any counterplay at all.} Bb7 25. Bf4 Qxf4 26. Bxb7 Rcd8 27. Rd1 Re7 28. Bf3
Ng6 29. g3 $16 Qc7 {Nothing works. Black is losing. His light squares are
weak, the Knight on g6 has no squares, white's f3 Bishop is a monster
supporting a possible c6 of the passed Pawn and he has double weak Pawns on
a-file. Leela outplayed Pedone after 30 moves. It's a matter of technique now
to try to go to the winning endgame.} 30. Rb3 Rc8 31. h4 Rd7 32. Rb7 (32. c6
{Much easier.} Rdd8 33. Rb7 Qd6 34. Qxa5 Ne7 35. c7 Rd7 36. Rc1 f5 37. Rxa7
Kf7 38. Ra6 Qxd4 39. Bh5+ g6 40. Rd1 Qxd1+ 41. Bxd1 Rxd1+ 42. Kg2 Rd7 43. Qe5
Rdxc7 44. Qxe6+ Kf8 45. Qf6+ Kg8 46. Qe6+ Kf8 47. Qe5 Ng8 48. h5 $18) 32...
Qxb7 33. Bxb7 Rxb7 34. Qxa5 Ne7 35. Qa6 Rcc7 36. Qa2 Nd5 37. Rb1 h5 38. Rxb7
Rxb7 39. Qa6 { This is also won but it requires some skill to crack the little
fortress of Rook plus Knight has built. The white King should help do that.}
Rc7 40. f3 Kh7 41. g4 hxg4 42. fxg4 g6 43. Kf2 Kg7 44. Qb5 Rc8 45. Qb7 Rc7 46.
Qb8 Rd7 47. Qb5 Re7 48. Kg3 Rc7 49. Kf3 Kg8 50. Kf2 (50. Qb8+ Kg7 51. Ke4 Rd7
(51... f6 52. g5 a5 53. Qa8 a4 {[%csl Rc3][%cal Rc3e4,Rc3a4]} 54. Kd3 Re7 55.
Qxa4 $18) 52. Ke5 {Black has to give up the fortress formation. It's
hopeless.} Ne7 53. Qe8 Nc6+ 54. Ke4 Rc7 55. g5 Ne7 56. Qb8 Rd7 57. Qe8 Rc7 58.
Ke5 {[%csl Rd6]} Rb7 59. c6 Rb5+ 60. Ke4 Nd5 61. Qd8 Nc3+ 62. Kf3 Rf5+ 63. Kg3
$18 {[%cal Rc6c8]}) 50... Kg7 51. Kg3 Rc8 52. Qb7 Rc7 53. Qb5 Rc8 54. Qb7 Rc7
55. Qb8 Rd7 56. Qc8 Nf6 57. g5 Ne4+ 58. Kh3 Rxd4 59. c6 Rd3+ 60. Kg2 Nc3 61.
c7 Rd2+ 62. Kh1 Rd1+ 63. Kh2 Rd2+ 64. Kg1 Rd1+ 65. Kh2 Rd2+ 66. Kg3 Rd3+ 67.
Kg2 Rd2+ 68. Kf3 Rd3+ 69. Kf2 Rd2+ 70. Ke1 Rd1+ 71. Kf2 Rd2+ 72. Ke3 Rh2 73.
Qf8+ Kxf8 74. c8=Q+ Kg7 75. Qxc3+ {Here white has an easy win. Easy for
computers with tablebases of course since even humans would face difficulties
here to break the fortress of Rook with the strong Pawns. Leela while it
supports syzygy WDL+DTZ endgame tablebases, in CCCC it does not use them
because they were a little untested when CCCC started. So since it's not that
trivial for any engine to win such endgames without tablebases, the same
occurs for Leela too.} Kg8 76. Qd4 a5 77. Kf3 a4 {It seems black is
voluntarily helping white but in reality this is 100% lost and white could win
that Pawn anyway.} (77... Rh1 78. Kg2 Rc1 79. Qd8+ Kg7 80. Qf6+ Kg8 81. h5
Rc2+ 82. Kh3 {[%csl Rc3][%cal Rf6c3]} gxh5 83. g6 fxg6 (83... Rc7 84. gxf7+
Rxf7 85. Qxe6 $18 {White wins.} Kf8 86. Qd5 a4 87. Qxh5 Rd7 88. Qf3+ Ke7 89.
Qe4+ Kd6 90. Qxa4 $18) 84. Qxg6+ {[%csl Rc2]}) 78. Qxa4 Rh1 79. Kg2 Rb1 80.
Qd7 Rb2+ 81. Kf3 Rb3+ 82. Kf2 Rb2+ 83. Ke3 Rb3+ 84. Ke2 Rb2+ 85. Kf1 Rb1+ 86.
Ke2 Rh1 87. Qd4 e5 {Again the same. Fizbo sees it is losing by force since it
using endgame tablebases, so it doesn't mind to throw some more Pawns.} 88.
Qa4 Rh3 89. Kf2 Kg7 90. Qe4 Kg8 91. Kg2 Ra3 92. Qc6 Ra2+ 93. Kg3 e4 94. Qe8+
Kg7 95. Qe5+ Kg8 96. Qxe4 (96. h5 {This would have been much easier since
black could not create another fortress for Leela that does not use tablebases
in CCCC. The 11089 net that is playing on CCCC, with the support of tablebases
finds h5 in zero seconds even on a mere GTX 1070 Ti (about 6 times slower for
Leela than the GPUs of CCCC). It gives: 4/8 00:00 618 2,239 +12,10 h4-h5 g6xh5
Qe5-e8+ Kg8-g7 Qe8-e5+ Kg7-g8 Qe5xe4 Ra2-a6 And holds the line forever. So if
Leela with TBs were used here, it would have found the h5 and would win much
easier.}) 96... Ra3+ 97. Kg4 Ra6 98. Qe8+ Kg7 99. Kf3 Re6 100. Qc8 Re7 101.
Qc3+ Kg8 102. Qc6 (102. Qd4 Re6 103. Qd8+ Kg7 104. Kf4 Rc6 105. Qd4+ Kg8 106.
Ke5 Re6+ 107. Kd5 Kh7 108. Qc5 Kg7 109. Qc8 Rb6 110. Qc3+ Kg8 111. Qc5 Re6
112. Qc8+ Kg7 113. Qxe6 fxe6+ 114. Kxe6 $18) 102... Re6 103. Qa8+ Kg7 104. Kf2
Rd6 105. Qa1+ Kg8 106. Ke3 Re6+ 107. Kf4 Kh7 108. Qd4 Kg8 109. Kg4 Kh7 110.
Qd8 Kg7 111. Qa8 Rb6 112. Qa1+ Kg8 113. Qa8+ Kg7 114. Qa1+ Kg8 115. Qa5 Rd6
116. Qa8+ Kg7 117. Qa1+ Kg8 118. Qa8+ Kg7 119. Qa1+ Kg8 120. h5 $4 {Throws
away the win!! Now it's a draw. But Fizbo decided otherwise. } gxh5+ 121. Kxh5
{[%csl Rf7,Gg6][%cal Ga6h6,Gd6a6] No matter how hard white tries, the King
can't get passed the 6th rank as also the Pawn also, as the Rook with support
from the Pawn prevents all tries.} Re6 122. Kg4 Rb6 123. Qa8+ Kg7 124. Qa1+
Kg8 125. Qa7 Re6 126. Qb8+ Kg7 127. Kf5 Ra6 128. Qb2+ Kg8 129. Kf4 Ra4+ 130.
Kg3 Ra6 131. Qb8+ Kg7 132. Qe5+ Kg8 133. Qb2 Re6 134. Kf4 Ra6 135. Qb8+ Kg7
136. Qe5+ Kg8 137. Qe8+ Kg7 138. Qc8 Rb6 139. Qc3+ Kg8 140. Qa5 Rd6 141. Qa8+
Kg7 142. Qa1+ Kg8 143. Qa5 Re6 144. Qa3 Rb6 145. Qa8+ Kg7 146. Qa1+ Kg8 147.
Kg4 Rb4+ 148. Kg3 Rb3+ 149. Kh4 Rb4+ 150. Kh3 Rb3+ 151. Kh4 Rb4+ 152. Kg3 Rb3+
153. Kf4 Rb4+ 154. Kf3 Rb3+ 155. Kf4 Rb4+ 156. Kf3 Rb3+ 157. Kf2 Rb6 158. Qa8+
Kg7 159. g6 Rxg6 {It's unbelievable but how a 3325 CCRL 40/4 Elo engine
managed to lose a drawn 5 piece endgame while using 3,4,5,6 tablebases is
beyond imagination!!} 160. Ke2 Rb6 161. Qa1+ Kg8 162. Qa3 Rb1 163. Qa8+ Kg7
164. Qg2+ Kh8 165. Qh2+ Kg7 166. Qe5+ Kg8 167. Qg5+ Kf8 168. Qd5 Kg7 169. Qg2+
Kh8 170. Qh3+ Kg7 171. Qg3+ Kh8 172. Qc7 Rb2+ 173. Ke3 Rb1 {Fizbo says, take
the Pawn, i have my tablebases and i know i'm drawing this.} 174. Qxf7 Re1+
175. Kd4 Rd1+ 176. Ke5 Re1+ 177. Kd5 Rd1+ 178. Ke6 Re1+ 179. Kd7 Rd1+ 180. Ke6
Re1+ 181. Kd6 Rd1+ 182. Kc5 Rc1+ 183. Kd4 Rd1+ 184. Kc4 Rc1+ 185. Kd3 Rd1+
186. Ke4 Re1+ 187. Kd5 Rd1+ 188. Kc6 Rc1+ 189. Kd6 Rd1+ 190. Kc5 Rc1+ 191. Kb4
Rb1+ 192. Kc3 Rc1+ 193. Kd3 Rd1+ 194. Ke2 Re1+ {[%csl Rg7,Rg8,Rh7,Gh8] King
can never take the Knight here since then stalemate!} 195. Kd2 Rd1+ 196. Kc3
Rc1+ 197. Kd2 Rd1+ 198. Kc2 Rc1+ 199. Kb3 Rb1+ 200. Kc4 Rc1+ 201. Kb3 Rb1+
202. Ka3 Ra1+ 203. Kb2 Rb1+ 204. Ka3 Ra1+ 205. Kb2 Rb1+ 206. Kc2 Rb2+
{Tablebases here say distance to checkmate is 56 plies with distance for a
capture to be even more, and since in the game the counter for 50 move rule
draw is at 65 plies, white cannot win without drawing due to 50 move(100
plies) rule first. If the position started here and there was a capture let's
say 10 moves before, then the 50 move counter will be on 20 plies and Rb2
would be a huge mistake since white has a way to force checkmate by not taking
the Rook of course. With Kc3 or Kd3 that win by force. Here the desperado Rook
giving checks all the time and being immune from being captured doesn't work.
But returning to the game Kc3 and Kd3 would not work as they break 50 move
rule in order to reach checkmate so Fisbo did not blunder here.} 207. Kd3
(207. Kc3 {This would win (as also the text move Kd3), had not been the 50
move rule.} Rc2+ 208. Kb3 Rb2+ 209. Ka3 Rg2 210. Qf1 Rg6 211. Kb4 Kg7 212. Kc5
Rf6 213. Qd3 Kf7 214. Kd5 Rb6 215. Qc3 Rb5+ 216. Ke4 Rh5 217. Kf4 Ke6 218.
Qc8+ Ke7 219. Qc6 Kf7 220. Qd6 Rh2 221. Qd5+ Kf6 222. Qf3 Rh6 223. Qc6+ Kg7
224. Qd7+ {DRAW! In this game. Due to 50 move rule as 50 moves were played
with no Pawn movement and any capture. White can force checkmate but it's
irrelevant of course for this game.} Kf6 225. Qf5+ Kg7 226. Kg5 Rh7 227. Qd5
Rh8 228. Qd4+ Kh7 229. Qa7+ Kg8 230. Kg6 Rh1 231. Qg7#) 207... Rd2+ 208. Ke4
Re2+ 209. Kd5 Re1 $4 {An inexplicable move!!!! Fizbo while using endgame
tablebases, in a dead draw position allows its Rook to be captured in 5 moves
so 50 move rule to be reset so white will win! It is a bug since it can be
replicated(see the picture with analysis of Fizbo 1.9 in the blog).} (209...
Rd2+ 210. Kc5 Rc2+ 211. Kb6 Rb2+ 212. Ka7 Rg2 213. Qh5+ Kg7 214. Kb6 Rg6+ 215.
Kc7 Ra6 216. Qe2 Rf6 217. Kd7 Rf5 218. Qg4+ Kf6 219. Kd6 Ra5 220. Qd4+ Kf7
221. Qc4+ Kg6 222. Ke6 Rg5 223. Qh4 Ra5 224. Qe4+ {Draw because of 50 move
rule.}) 210. Qf8+ Kh7 211. Qf4 Rd1+ 212. Kc6 Ra1 213. Qf7+ Kh6 214. Qf6+ Kh5
215. Qxa1 Kg4 216. Kd5 Kf4 217. Qc3 Kf5 218. Qd4 Kg6 219. Ke6 Kg5 220. Qe4 Kh6
221. Qg4 Kh7 222. Kf6 Kh6 223. Qh3# { What a game. Leela outplayed Fizbo,
reached a totally winning position, she had several chances and ways to win,
she missed several times a winning move(that does find when she is using
tablebases), she blundered and the game was draw and then Fizbo blundered even
more heavily due to a bug and Leela finally won. All in all i think it was a
deserved win for the way Leela played in opening and middlegame. She has
issues in the endgame though, yet not in the extend they seem to be in CCCC
since there she does not use tablebases while Leela supports them and in this
game they would lead to an easy win.} 1-0

Here a little experiment to see how Leela with endgame tablebases would do
against SF dev(040918).  
SF dev had black pieces and 3,4,5,6, a big part of 7 TBs, while Leela 11089
net with 3,4,5,6 TBs running on 1 million nodes per move(around that much that
has on CCCC) and getting around 50000 to 120000 TB hits per move, played with
white pieces from 75.Qxc3 position.  
Leela got a comfortable win.

[Event "CCCC 1: Rapid Rumble (15|5) Stage 1"] [Site "Chess.com"] [Date
"2018.09.09"] [Round "?"] [White "Leela 11089"] [Black "Fizbo"] [Result "1-0"]
[ECO "D31"] [WhiteElo "2400"] [BlackElo "2400"] [PlyCount "221"] [EventDate
"2018.??.??"] [EventType "rapid"] [TimeControl "900+5"] 1. d4 d5 2. c4 e6 3.
Nc3 c6 4. e4 dxe4 5. Nxe4 Bb4+ 6. Nc3 Nf6 7. a3 Bxc3+ 8. bxc3 Nbd7 9. Nf3 O-O
10. a4 c5 11. a5 b6 12. Bd3 bxa5 13. O-O Bb7 14. Re1 Rc8 15. Ne5 cxd4 16. cxd4
Nxe5 17. Rxe5 Ba6 18. Ra4 Nd7 19. Bg5 Qb6 20. Re1 Qb7 21. Be4 Qc7 22. c5 Rfe8
23. Ra3 Nf8 24. Qa4 Bb7 25. Bf4 Qxf4 26. Bxb7 Rcd8 27. Rd1 Re7 28. Bf3 Ng6 29.
g3 Qc7 30. Rb3 Rc8 31. h4 Rd7 32. Rb7 Qxb7 33. Bxb7 Rxb7 34. Qxa5 Ne7 35. Qa6
Rcc7 36. Qa2 Nd5 37. Rb1 h5 38. Rxb7 Rxb7 39. Qa6 Rc7 40. f3 Kh7 41. g4 hxg4
42. fxg4 g6 43. Kf2 Kg7 44. Qb5 Rc8 45. Qb7 Rc7 46. Qb8 Rd7 47. Qb5 Re7 48.
Kg3 Rc7 49. Kf3 Kg8 50. Kf2 Kg7 51. Kg3 Rc8 52. Qb7 Rc7 53. Qb5 Rc8 54. Qb7
Rc7 55. Qb8 Rd7 56. Qc8 Nf6 57. g5 Ne4+ 58. Kh3 Rxd4 59. c6 Rd3+ 60. Kg2 Nc3
61. c7 Rd2+ 62. Kh1 Rd1+ 63. Kh2 Rd2+ 64. Kg1 Rd1+ 65. Kh2 Rd2+ 66. Kg3 Rd3+
67. Kg2 Rd2+ 68. Kf3 Rd3+ 69. Kf2 Rd2+ 70. Ke1 Rd1+ 71. Kf2 Rd2+ 72. Ke3 Rh2
73. Qf8+ Kxf8 74. c8=Q+ Kg7 75. Qxc3+ Kg8 76. Qd4 {This is the play of
Leela(white) with 3,4,5,6 TBs with 1.000.000 nodes per move(and around 50.000
to 120.000 TB hits per move) versus SF dev with 3-7 TBs. Up to 80th move the
Leela with TBs didn't deviate. Then, in 80th move Leela with TBs played 80.
Qa8+ instead of 80.Qd7 of the real game.} a5 77. Kf3 a4 78. Qxa4 Rh1 79. Kg2
Rb1 80. Qa8+ {Here Leela with TBs deviates and plays Qa8+} (80. Qd7 {Real game
on CCCC(Leela with no TBs) went like this.....} Rb2+ 81. Kf3 Rb3+ 82. Kf2 Rb2+
83. Ke3 Rb3+ 84. Ke2 Rb2+ 85. Kf1 Rb1+ 86. Ke2 Rh1 87. Qd4 e5 88. Qa4 Rh3 89.
Kf2 Kg7 90. Qe4 Kg8 91. Kg2 Ra3 92. Qc6 Ra2+ 93. Kg3 e4 94. Qe8+ Kg7 95. Qe5+
Kg8 96. Qxe4 Ra3+ 97. Kg4 Ra6 98. Qe8+ Kg7 99. Kf3 Re6 100. Qc8 Re7 101. Qc3+
Kg8 102. Qc6 Re6 103. Qa8+ Kg7 104. Kf2 Rd6 105. Qa1+ Kg8 106. Ke3 Re6+ 107.
Kf4 Kh7 108. Qd4 Kg8 109. Kg4 Kh7 110. Qd8 Kg7 111. Qa8 Rb6 112. Qa1+ Kg8 113.
Qa8+ Kg7 114. Qa1+ Kg8 115. Qa5 Rd6 116. Qa8+ Kg7 117. Qa1+ Kg8 118. Qa8+ Kg7
119. Qa1+ Kg8 120. h5 gxh5+ 121. Kxh5 Re6 122. Kg4 Rb6 123. Qa8+ Kg7 124. Qa1+
Kg8 125. Qa7 Re6 126. Qb8+ Kg7 127. Kf5 Ra6 128. Qb2+ Kg8 129. Kf4 Ra4+ 130.
Kg3 Ra6 131. Qb8+ Kg7 132. Qe5+ Kg8 133. Qb2 Re6 134. Kf4 Ra6 135. Qb8+ Kg7
136. Qe5+ Kg8 137. Qe8+ Kg7 138. Qc8 Rb6 139. Qc3+ Kg8 140. Qa5 Rd6 141. Qa8+
Kg7 142. Qa1+ Kg8 143. Qa5 Re6 144. Qa3 Rb6 145. Qa8+ Kg7 146. Qa1+ Kg8 147.
Kg4 Rb4+ 148. Kg3 Rb3+ 149. Kh4 Rb4+ 150. Kh3 Rb3+ 151. Kh4 Rb4+ 152. Kg3 Rb3+
153. Kf4 Rb4+ 154. Kf3 Rb3+ 155. Kf4 Rb4+ 156. Kf3 Rb3+ 157. Kf2 Rb6 158. Qa8+
Kg7 159. g6 Rxg6 160. Ke2 Rb6 161. Qa1+ Kg8 162. Qa3 Rb1 163. Qa8+ Kg7 164.
Qg2+ Kh8 165. Qh2+ Kg7 166. Qe5+ Kg8 167. Qg5+ Kf8 168. Qd5 Kg7 169. Qg2+ Kh8
170. Qh3+ Kg7 171. Qg3+ Kh8 172. Qc7 Rb2+ 173. Ke3 Rb1 174. Qxf7 Re1+ 175. Kd4
Rd1+ 176. Ke5 Re1+ 177. Kd5 Rd1+ 178. Ke6 Re1+ 179. Kd7 Rd1+ 180. Ke6 Re1+
181. Kd6 Rd1+ 182. Kc5 Rc1+ 183. Kd4 Rd1+ 184. Kc4 Rc1+ 185. Kd3 Rd1+ 186. Ke4
Re1+ 187. Kd5 Rd1+ 188. Kc6 Rc1+ 189. Kd6 Rd1+ 190. Kc5 Rc1+ 191. Kb4 Rb1+
192. Kc3 Rc1+ 193. Kd3 Rd1+ 194. Ke2 Re1+ 195. Kd2 Rd1+ 196. Kc3 Rc1+ 197. Kd2
Rd1+ 198. Kc2 Rc1+ 199. Kb3 Rb1+ 200. Kc4 Rc1+ 201. Kb3 Rb1+ 202. Ka3 Ra1+
203. Kb2 Rb1+ 204. Ka3 Ra1+ 205. Kb2 Rb1+ 206. Kc2 Rb2+ 207. Kd3 Rd2+ 208. Ke4
Re2+ 209. Kd5 Re1 210. Qf8+ Kh7 211. Qf4 Rd1+ 212. Kc6 Ra1 213. Qf7+ Kh6 214.
Qf6+ Kh5 215. Qxa1 Kg4 216. Kd5 Kf4 217. Qc3 Kf5 218. Qd4 Kg6 219. Ke6 Kg5
220. Qe4 Kh6 221. Qg4 Kh7 222. Kf6 Kh6 223. Qh3#) 80... Kg7 81. Qa5 Rb2+ 82.
Kg3 Rb3+ 83. Kf2 Rb2+ 84. Ke1 Rb1+ 85. Ke2 Rb2+ 86. Kf3 Rb3+ 87. Kf4 Rb1 88.
Qc3+ Kf8 89. Qh8+ Ke7 90. h5 Rb4+ 91. Ke3 Rb3+ 92. Kd2 gxh5 93. Qf6+ Kd6 94.
Qxf7 Rh3 95. g6 Rh2+ 96. Kd3 Rh3+ 97. Kd4 e5+ 98. Ke4 Rh4+ 99. Ke3 Rh3+ 100.
Kf2 Rh2+ 101. Kg3 Rc2 102. g7 Rc3+ 103. Kh4 Rc8 104. Kxh5 Kc6 105. g8=R Rxg8
106. Qxg8 Kd6 107. Kg6 Kc5 108. Kf5 Kd4 109. Qb3 e4 110. Kf4 e3 111. Qxe3+ 1-0

**ROUND 27**

In the battle for the 8 places, Booot, Ethereal and Andscacs won their games
again.  
Ethereal won against Leela in a sharp Sicilian because of a blunder of Leela
in the endgame. This was Leela's first loss in this tournament and now only
the first 3 are undefeated.

Shredder drew again and nothing reminds its early days in this tournament
where he was winning and winning and leading the tournament.

313 Andscacs vs Texel 1-0  
314 Vajolet vs Stockfish 0-1  
315 Shredder vs Wasp 1/2-1/2  
316 Xiphos vs Senpai 1/2-1/2  
317 Pedone vs Arasan 1/2-1/2  
318 Booot vs Nirvana 1-0  
319 Nemorino vs Crafty 1-0  
320 Ethereal vs **Lco** 1-0  
321 Laser vs Fire 1/2-1/2  
322 Fizbo vs Komodo 0-1  
323 Ivanhoe vs Fritz 1/2-1/2  
324 Gull vs Houdini 0-1

[Event "CCCC 1: Rapid Rumble (15|5) Stage 1"] [Site "Chess.com"] [Date
"2018.09.10"] [Round "?"] [White "Ethereal 10.88"] [Black "Lc0 17.11089"]
[Result "1-0"] [ECO "B90"] [WhiteElo "3283"] [BlackElo "3326"] [Annotator
"17,Image"] [PlyCount "173"] [EventDate "2018.??.??"] [EventType "rapid"] 1.
e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f4
exf4 9. Bxf4 {[%csl Rd6] In this variation, from Leela's games it's a common
issue that she has huge problems with the isolated d-Pawn and when she loses
it then she most usually loses. This happened in this game also.} Nc6 10. a3
$6 {What is this? A new move, but a rather dubious one. Normal is Qe2 or Qd2
with normal development. There is no reason to play a3 so soon without any
reason.} Be7 11. Qd2 Nh5 $6 (11... d5 {This provides black a more comfortable
play, getting rid off the weakness of the isolated Pawn.} 12. exd5 Nxd5 13.
Nxd5 Qxd5 14. O-O-O Qxd2+ $11 {Equality.}) 12. Be3 Nf6 $6 {After the next text
move, black has just lost 2 moves.} (12... Bf6) 13. O-O-O O-O 14. Kb1 b5 15.
Nd4 Nxd4 16. Bxd4 Rb8 17. Be2 Nd7 18. Rhf1 Bg5 19. Qd3 $1 Qe7 (19... b4 {This
would probably lead to equality. The rest is forced.} 20. axb4 Rxb4 21. Qxa6
Qb8 22. Bb5 Ne5 23. Ba7 Qc8 24. Qxc8 Rxc8 25. Rd4 Nc4 26. Bxc4 Bxc4 27. Rf5
Bf6 28. Rxf6 gxf6 29. Rxd6 Kg7 (29... Be6 30. Nd5 Bxd5 31. exd5 Re4 {With a
small edge for white.}) 30. Bd4 Be6 {And this must be about equal.}) 20. Bf2
b4 21. axb4 Rxb4 22. Qxd6 {The d-Pawn has fallen.Leela almost always can't
deal with this kind of position in Sicilian.} Rfb8 23. b3 Qd8 24. Nd5 Rxe4 25.
Rfe1 Bf5 26. Kb2 Rc8 27. Bd3 Rxe1 28. Bxe1 Bg4 29. Ra1 Nc5 30. Qxd8+ Rxd8 {The
endgame is very hard for black since if a-Pawn falls the 2 b-c Pawns will
decide the game. } 31. Bc4 Be6 32. Rd1 Rd7 33. Bb4 Ne4 34. Kb1 Bd8 35. Rd4 Nf2
36. Bc5 Ng4 37. Nb4 Rxd4 38. Bxd4 Bxc4 39. bxc4 Bf6 40. Bg1 Ne5 (40... Nh6 $5
41. Nxa6 (41. c5 Kf8 42. Nxa6 Nf5 {Transposition with 41.Nxa6 Nf5 42.c5 line})
41... Nf5 42. h3 (42. c5 Kf8 43. g4 Nd4 44. Be3 (44. h3 Ke7 45. Bxd4 Bxd4 46.
Ka2 h5 47. Kb3 hxg4 48. hxg4 g6 49. Kc4 Bf2 $11) 44... Ke7 45. Nb4 Kd7 $11)
42... Kf8 43. c5 ( 43. g4 Nd4 44. Bxd4 Bxd4 45. Nb4 Ke8 46. Ka2 g6 $1 47. Ka3
f5 48. gxf5 gxf5 49. Nd3 Be3 $11) 43... h5 44. Ka2 Be5 45. Kb3 Nh4 46. g4 hxg4
47. hxg4 f5 48. gxf5 Nxf5 49. Kc4 Ke7 50. Kd5 Bc3 {And white doesn't seem to
have anything.}) 41. c5 a5 $2 {The losing mistake. The King had to help with
the passed Pawn.} (41... Kf8 42. Nxa6 Ke8 43. Ka2 Ng6 44. Bf2 (44. Kb3 Nh4 45.
c6 Kd8 46. g4 Nf3 47. Bb6+ Kc8 48. h3 Ng5 $11) 44... Be5 45. g3 f5 46. Nb4 h5
$1 {And black acquired counterplay himself too. It seems drawish.}) 42. c6 Bd8
43. Bd4 $1 Bc7 44. Bxe5 $1 Bxe5 45. Na6 Bxh2 46. c7 Bxc7 47. Nxc7 f5 48. Ne6
Kf7 49. Nd8+ Kf6 50. Nb7 a4 51. Nc5 g5 52. Nxa4 h5 53. Nc5 h4 54. Kc1 g4 55.
Nd3 h3 56. gxh3 gxh3 57. c3 h2 58. Nf2 Ke5 59. Kd2 Kd5 60. Kd3 Ke5 61. Ke3 Kd5
62. Nh1 Kc4 63. Kd2 Kd5 64. Kd3 f4 65. c4+ Kc5 66. Kc3 Kd6 67. Kd4 Kd7 68. c5
Kd8 69. c6 Kc8 70. Kc5 Kc7 71. Kb5 f3 72. Kc5 f2 73. Nxf2 Kc8 74. Kb6 Kd8 75.
c7+ Kd7 76. Kb7 Ke6 77. c8=Q+ Ke5 78. Qh3 Kf4 79. Qxh2+ Kf3 80. Qh3+ Kxf2 81.
Kb6 Ke2 82. Kc5 Kf2 83. Kd4 Kg1 84. Kd3 Kf2 85. Qg4 Kf1 86. Ke3 Ke1 87. Qg1#
1-0

_**Standings after round 27 of 46.**_ First 8 go to next stage.  
| Player | Score  | (Tie)  | Ho | St | Ko | Lc | Sh | Fi | Bo | Et | An | Fr |
Te | Xi | Pe | Va | La | Ar | Gu | Fi | Ne | Wa | Iv | Se | Ni | Cr | +/-/=  
---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
---|---|---|---|---|---|---|---|---  
1: | Houdini 6.03 | 22.5 / 27 | 268.00  | XX | =. | =. | =. | =. | 1. | =. |
=. | 1. | 1. | 1. | 1. | 1. | =. | 1= | 1. | 11 | 1. | 11 | =. | 11 | 1. | 1.
| 1.| (+18 -0 =9)  
2: | Stockfish 220818 | 22.0 / 27 | 276.75  | =. | XX | =. | =. | =. | =. | 1=
| 11 | =. | 1. | 1. | =1 | 1. | 11 | =. | =. | 1. | 1. | 1. | 1. | 1. | 1. |
1. | 1.| (+17 -0 =10)  
3: | Komodo 2118.00 | 22.0 / 27 | 264.25  | =. | =. | XX | =. | 1. | 1. | 1. |
=. | =. | =. | 1. | =. | 1. | 1. | 1= | =. | =1 | 11 | 1. | 1. | 11 | 1. | 1.
| 1.| (+17 -0 =10)  
4: | **Lc0 17.11089**|  19.0 / 27 | 234.75  | =. | =. | =. | XX | =. | =. | =.
| 10 | =. | 1. | 1. | 1. | =. | 1. | 1. | 1. | 1= | =1 | =. | =. | 11 | =. |
1. | =.| (+12 -1 =14)  
5: | Shredder 13 | 18.5 / 27 | 215.50  | =. | =. | 0. | =. | XX | 1= | =. | =.
| 1. | =. | 1. | =. | =. | =. | =. | 1= | 1. | =. | 1. | == | 1. | 1. | 1. |
11| (+11 -1 =15)  
6: | Fire 7.1 | 18.0 / 27 | 210.25  | 0. | =. | 0. | =. | 0= | XX | =. | 1. |
=. | 1. | 1. | =. | 1= | =. | 1= | 1. | 1. | =. | 11 | =. | =. | 1. | 1. | 1.|
(+12 -3 =12)  
7: | Booot 6.3.1 | 17.5 / 27 | 190.50  | =. | 0= | 0. | =. | =. | =. | XX | =.
| =. | =. | 1. | =. | =. | == | 1. | =. | =. | =. | 1. | 1. | 1. | 11 | 11 |
1.| (+10 -2 =15)  
8: | Ethereal 10.88 | 17.0 / 27 | 190.00  | =. | 00 | =. | 01 | =. | 0. | =. |
XX | 1. | =. | 0. | 1. | =. | =. | 1. | 1. | 1. | =. | 1. | =. | 1. | =1 | 11
| 1.| (+12 -5 =10)  
9: | Andscacs 0.94 | 16.5 / 27 | 186.50  | 0. | =. | =. | =. | 0. | =. | =. |
0. | XX | 0. | =1 | 0= | =. | 11 | 1. | 1. | 1. | =. | 1. | 1= | =. | 1. | 1.
| 1.| (+11 -5 =11)  
10: | Fritz 16.10 | 14.0 / 27 | 158.00  | 0. | 0. | =. | 0. | =. | 0. | =. |
=. | 1. | XX | 0. | =. | 1= | 1. | == | =. | =. | =. | == | 1. | == | =. | 1.
| 1.| (+6 -5 =16)  
11: | Texel 1.07 | 14.0 / 27 | 136.25  | 0. | 0. | 0. | 0. | 0. | 0. | 0. | 1.
| =0 | 1. | XX | =. | =. | =. | =. | =1 | =. | =. | 1. | =1 | =. | 1. | 1. |
11| (+9 -8 =10)  
12: | Xiphos 0.3.17 | 13.5 / 27 | 158.25  | 0. | =0 | =. | 0. | =. | =. | =. |
0. | 1= | =. | =. | XX | =. | 01 | =. | =. | =. | =. | 1. | =. | 0. | 1= | 1.
| 1.| (+6 -6 =15)  
13: | Pedone 1.8 | 13.5 / 27 | 142.75  | 0. | 0. | 0. | =. | =. | 0= | =. | =.
| =. | 0= | =. | =. | XX | =. | =. | == | =. | 1. | =. | =. | =. | 1. | 1. |
11| (+5 -5 =17)  
14: | Vajolet 2.6 | 11.5 / 27 | 132.00  | =. | 00 | 0. | 0. | =. | =. | == |
=. | 00 | 0. | =. | 10 | =. | XX | 1. | =. | =. | =. | 0. | =. | =. | 1. | 1.
| 1.| (+5 -9 =13)  
15: | Laser 1.6 | 11.0 / 27 | 130.00  | 0= | =. | 0= | 0. | =. | 0= | 0. | 0.
| 0. | == | =. | =. | =. | 0. | XX | =. | =. | =. | 1. | =. | 0. | 1. | 1. |
1.| (+4 -9 =14)  
16: | Arasan CCCC-2018 | 11.0 / 27 | 126.00  | 0. | =. | =. | 0. | 0= | 0. |
=. | 0. | 0. | =. | =0 | =. | == | =. | =. | XX | =. | 1. | 0. | 1= | 0. | =.
| 1. | 1.| (+4 -9 =14)  
17: | Gull 3.syz | 11.0 / 27 | 114.75  | 00 | 0. | =0 | 0= | 0. | 0. | =. | 0.
| 0. | =. | =. | =. | =. | =. | =. | =. | XX | =. | =. | 1. | 1. | 1. | == |
1.| (+4 -9 =14)  
18: | Fizbo 1.9 | 10.5 / 27 | 117.75  | 0. | 0. | 00 | =0 | =. | =. | =. | =.
| =. | =. | =. | =. | 0. | =. | =. | 0. | =. | XX | =. | =. | =. | == | == |
1.| (+1 -7 =19)  
19: | Nemorino 5.00 | 10.0 / 27 | 91.50  | 00 | 0. | 0. | =. | 0. | 00 | 0. |
0. | 0. | == | 0. | 0. | =. | 1. | 0. | 1. | =. | =. | XX | =. | 1. | 1. | 1.
| =1| (+6 -13 =8)  
20: | Wasp 3.25 | 9.5 / 27 | 121.75  | =. | 0. | 0. | =. | == | =. | 0. | =. |
0= | 0. | =0 | =. | =. | =. | =. | 0= | 0. | =. | =. | XX | 0. | 1. | =. | =.|
(+1 -9 =17)  
21: | Ivanhoe 999946h | 8.5 / 27 | 102.75  | 00 | 0. | 00 | 00 | 0. | =. | 0.
| 0. | =. | == | =. | 1. | =. | =. | 1. | 1. | 0. | =. | 0. | 1. | XX | 0. |
0. | =.| (+4 -14 =9)  
22: | Senpai 2.0 | 5.5 / 27 | 60.00  | 0. | 0. | 0. | =. | 0. | 0. | 00 | =0 |
0. | =. | 0. | 0= | 0. | 0. | 0. | =. | 0. | == | 0. | 0. | 1. | XX | =. | =.|
(+1 -17 =9)  
23: | Nirvana 2.4 | 4.0 / 27 | 37.50  | 0. | 0. | 0. | 0. | 0. | 0. | 00 | 00
| 0. | 0. | 0. | 0. | 0. | 0. | 0. | 0. | == | == | 0. | =. | 1. | =. | XX |
0.| (+1 -20 =6)  
24: | Crafty 25.2 | 3.5 / 27 | 30.25  | 0. | 0. | 0. | =. | 00 | 0. | 0. | 0.
| 0. | 0. | 00 | 0. | 00 | 0. | 0. | 0. | 0. | 0. | =0 | =. | =. | =. | 1. |
XX| (+1 -21 =5)

 _ **Rating performance so far after round 27:**_

    Rank Name               Elo    +    - games score oppo. draws   
       1 Stockfish 220818   499  118  104    27   81%   274   37%   
       2 Houdini 6.03       498  122  106    27   83%   259   33%   
       3 Komodo 2118.00     482  119  105    27   81%   261   37%   
       4 Lc0 17.11089       384  102   97    27   69%   268   56%   
       5 Fire 7.1           381  103   98    27   67%   273   44%   
       6 Shredder 13        381  102   96    27   69%   262   56%   
       7 Booot 6.3.1        360  100   96    27   65%   265   56%   
       8 Ethereal 10.88     358  107  102    27   63%   270   37%   
       9 Andscacs 0.94      350  103  100    27   61%   271   41%   
      10 Xiphos 0.3.17      284   97   98    27   50%   279   56%   
      11 Fritz 16.10        275   96   96    27   52%   269   59%   
      12 Pedone 1.8         273   94   94    27   50%   269   63%   
      13 Texel 1.07         272  101  101    27   52%   265   37%   
      14 Vajolet 2.6        250   97   99    27   43%   292   48%   
      15 Laser 1.6          250   97  100    27   41%   298   52%   
      16 Gull 3.syz         242   96   99    27   43%   289   56%   
      17 Arasan CCCC-2018   229   97   99    27   41%   280   52%   
      18 Wasp 3.25          206   95   99    27   35%   284   63%   
      19 Fizbo 1.9          206   93   96    27   39%   275   70%   
      20 Nemorino 5.00      190  103  109    27   37%   282   30%   
      21 Ivanhoe 999946h    171  104  112    27   31%   301   33%   
      22 Senpai 2.0          84  106  119    27   20%   288   33%   
      23 Nirvana 2.4         23  114  136    27   15%   289   22%   
      24 Crafty 25.2          0  116  142    27   13%   288   19% 

****This is with Lc0 - Gull game counted as draw.** Since this is a rating
list the real result should be counted, as the CCCC result by their rules
because Gull crashed, was 1-0 in favor of Lc0.
