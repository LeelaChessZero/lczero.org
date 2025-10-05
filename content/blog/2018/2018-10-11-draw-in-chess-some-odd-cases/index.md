---
author: Bob23
draft: false
published: "2018-10-11T21:46:00+02:00"
slug: draw-in-chess-some-odd-cases
tags: []
title: Draw in Chess. Some odd cases.
---

![]({{< file "2018-10-11-draw-in-chess-some-odd-cases-hjkhk.png" >}})

Chess is a game where there are 3 distinct results. White wins or black wins
or it is a draw and nobody wins. Draw can achieved in many ways in Chess.
These are:

 **•Stalemate position.** A position where the player to move does not have a
legal move to play and his King is not in check. Game immediately ends as a
draw.

 **•3 times repetition** of a position(not necessarily in consecutive moves).
3 times repetition of a position is defined as when the **same position occurs
3 times**. **Same position** means that 2 positions are considered the same if
and only if the same player has the move AND pieces of the same kind and color
occupy the same squares AND the possible moves of the side to move are the
same AND the side to move as also the side not to move to have the same
castling rights BUT ONLY taking account for castling rights, whether the King
or the Rook, that the castling rights corresponds, has moved or not.  
If this threefold repetition happens, then the side to move can offer a draw
claim that has to be accepted and game ends as a draw. But when the position
is reached 3 times it's not an automatic draw. This means this rule, the so
called 3-fold repetition, is not a mandatory draw and game can continue if
player on move does not want a draw. Technically if both sides have just
repeated a position 3 times or the side to move can play a move that would
repeat 3 times the same position, the player having the move can claim a draw.

• **5 times repetition** of a position(not necessarily in consecutive moves).
FIDE has recently added this and with the same definition of repetition of a
position 3 times. But this 5-fold repetition is a forced draw. So if this
situation occurs a draw is forced.

 **•50 moves rule.** 50 moves rule is defined when the last 50 moves by **each
player** have been completed without the movement of any Pawn and without any
capture of a piece or Pawn.  
If this happens then the side to move can offer a draw claim that has to be
accepted and game ends as a draw. But when this happens and such game occurs
it's not an automatic draw. This means the 50 moves rule, is also not a
mandatory draw and game can continue if player on move does not want a draw.
Technically if both sides have just reached a position without the movement of
any Pawn and without any capture of a piece or Pawn in the last 50 moves by
each side, or the player having the move can play a move that will result in
the last 50 moves by each player having been made without the movement of any
Pawn and without any capture, then the player having the move can claim a
draw.  
**Checkmate** has higher precedence than 50 moves rule, so if the last move is
one, that a side can claim a draw by 50 moves rule, but it's also a checkmate,
then game is not drawn and a win for the side with the checkmate is rewarded.

 **•75 moves rule.** 75 moves rules is defined as any series of at least 75
moves that have been made by each player without the movement of any Pawn and
without any capture. If this happens, it's an automatic draw.  
If the last move resulted in **checkmate** , that shall take precedence and
game is won for the player that gave the checkmate.

 **•Dead position.** The game is drawn when a position has arisen in which
neither player can checkmate the opponent’s king with any series of legal
moves. The game **immediately ends in a draw.**

In engine play, engines can't claim a draw for 3-fold or 50 move rule, so it's
an old "agreement"  
that when 3 fold occurs or 50 move rule is reached game is an automatic draw!  
So 5-fold repetition or 75 move rule are useless for engine-engine games. Even
though having in engine-engine games the 50 or 75 move rule applied in the era
of 6 and 7 men endgame tablebases kills many wonderful checkmates in 80 and
100 and 200 or even 1000 moves.

 **E.g in the following position** white can force a checkmate in 550(or maybe
less) with a nice combination. But in between **violates the 50 moves rule so
this is a draw.** The whole magic of the combination is lost because of 50
moves rule that has been applied to save spectators(and players) from very
lengthy and unnecessary long games.  
But for engine games perhaps this should not apply. Of course then as engines
are never get tired and with the weakness of engines to endlessly shuffle many
drawn endgame positions, it would mean much longer games.

[Event "Mate in 550"] [Site "?"] [Date "2002.06.13"] [Round "?"] [White
"Matein550"] [Black "?"] [Result "1-0"] [WhiteType "human"] [BlackType
"human"] [TimeControl "300+3"] [SetUp "1"] [FEN
"4Bn2/Q2Pr1rn/2P5/8/5k2/3K4/5ppN/3bR1qN w - - 0 1"] [Termination "normal"]
[PlyCount "1099"] 1. Rxg1 fxg1=Q 2. Qxg1 Nxd7 3. cxd7 gxh1=Q 4. Qxh1 Rxd7+ 5.
Bxd7 Rxd7+ 6. Kc3 Ng5 7. Qf1+ Bf3 8. Qc1+ Kf5 9. Kb2 Rb7+ 10. Ka3 Ra7+ 11. Kb4
Rb7+ 12. Ka5 Ra7+ 13. Kb6 Rb7+ 14. Ka6 Re7 15. Qf1 Re6+ 16. Ka7 Re7+ 17. Kb8
Re8+ 18. Kc7 Re3 19. Kc8 Rc3+ 20. Kb8 Kf4 21. Qg1 Ne4 22. Nf1 Rb3+ 23. Ka7 Rd3
24. Qh2+ Kf5 25. Kb8 Nf6 26. Nd2 Bd5 27. Qf2+ Ke5 28. Qe2+ Kd4 29. Ka7 Nd7 30.
Qg4+ Kc5 31. Qg1+ Kb4 32. Qb1+ Kc3 33. Qc1+ Kd4 34. Qb2+ Kc5 35. Qc2+ Kd4 36.
Qa4+ Kc5 37. Qa5+ Kd4 38. Qb4+ Ke5 39. Ka6 Kf5 40. Kb5 Ne5 41. Qb1 Kf6 42.
Qf1+ Bf3 43. Qf2 Ke6 44. Qh2 Bc6+ 45. Kb4 Bd5 46. Kc5 Kf6 47. Kb5 Ke6 48. Qh6+
Kf5 49. Nf1 Bc6+ 50. Kb4 Rd4+ 51. Kb3 Rd3+ 52. Ka2 Bd5+ 53. Kb1 Nc4 54. Qh5+
Kf6 55. Qh4+ Ke6 56. Ng3{50 moves rule and draw!} Rb3+ 57. Kc1 Rc3+ 58. Kd1
Re3 59. Nf1 Ra3 60. Qf4 Kd7 61. Ke1 Kc6 62. Qh6+ Kc5 63. Kf2 Rb3 64. Qh8 Kc6
65. Qa1 Kc5 66. Kg1 Ra3 67. Qb1 Kc6 68. Kh2 Rf3 69. Qc1 Kc5 70. Qa1 Kd6 71.
Qe1 Rb3 72. Qc1 Rf3 73. Kg1 Ra3 74. Qc2 Rf3 75. Qh2+ Kc6 76. Qh4 Kb5 77. Qe7
Kb6 78. Qb4+ Kc6 79. Qe1 Ra3 80. Qf2 Rf3 81. Qd4 Kd6 82. Qh4 Kc5 83. Nh2 Ra3
84. Ng4 Ra1+ 85. Kf2 Ra2+ 86. Kg3 Ra3+ 87. Kf4 Rf3+ 88. Kg5 Be6 89. Nf6 Ne5
90. Nh5 Rf5+ 91. Kh6 Ng4+ 92. Kg6 Ne5+ 93. Kg7 Rf7+ 94. Kh6 Ng4+ 95. Kg5 Ne5
96. Qa4 Rf5+ 97. Kh6 Bc4 98. Qa5+ Kd4 99. Qb6+ Kd5 100. Qd8+ Ke4 101. Qd1 Ke3
102. Qc1+ Kd4 103. Ng3 Rf6+ 104. Kh5 Kd5 105. Kh4 Rg6 106. Kh3 Bd3 107. Qf4
Rg8 108. Qb4 Ke6 109. Kh2 Kd7 110. Qb6 Rg6 111. Qb8 Ke6 112. Qf8 Rf6 113. Qg8+
Kd6 114. Kg2 Rg6 115. Qf8+ Kd5 116. Kh3 Bb5 117. Qa3 Bc6 118. Kg2 Rf6 119. Kh2
Nf3+ 120. Kh3 Rh6+ 121. Kg2 Nd4 122. Qe7 Kc4+ 123. Kg1 Rg6 124. Qf7+ Re6 125.
Qf4 Kd3 126. Qf1+ Kc3 127. Qc1+ Kb4 128. Kh2 Rf6 129. Kh3 Bd7+ 130. Kg2 Bc6+
131. Kh2 Rf3 132. Qd1 Kc5 133. Nh5 Kd5 134. Qh1 Ke5 135. Qe1+ Kd5 136. Qe7 Kc4
137. Qc7 Kc3 138. Nf4 Kc4 139. Qb8 Rc3 140. Qb6 Be4 141. Qa7 Bc6 142. Qa6+ Kc5
143. Nd3+ Kd6 144. Nb2 Rb3 145. Nd1 Nf3+ 146. Kg2 Nd4+ 147. Kf2 Rf3+ 148. Ke1
Kd5 149. Qb6 Kc4 150. Qa7 Bb5 151. Nf2 Nc2+ 152. Kf1 Bc6 153. Qa6+ Kc5 154.
Qa2 Nd4 155. Kg1 Rf5 156. Kh2 Rh5+ 157. Kg3 Rg5+ 158. Kf4 Rf5+ 159. Kg4 Bf3+
160. Kh4 Rh5+ 161. Kg3 Rg5+ 162. Kf4 Rf5+ 163. Ke3 Re5+ 164. Kd3 Be2+ 165. Kd2
Kb4 166. Qg8 Bb5 167. Qg4 Kc4 168. Nd1 Re2+ 169. Kc1 Rc2+ 170. Kb1 Rd2 171.
Qc8+ Bc6 172. Qg8+ Kb4 173. Nb2 Be4+ 174. Ka2 Nb5 175. Qb3+ Ka5 176. Ka1 Bd5
177. Qa4+ Kb6 178. Qb4 Rd4 179. Qe1 Re4 180. Qd2 Rd4 181. Qe3 Ka5 182. Nd3 Be4
183. Qe1+ Kb6 184. Nf2 Bf3 185. Kb2 Be2 186. Qg1 Ka5 187. Qh1 Bc4 188. Qe1+
Kb6 189. Qe3 Ka5 190. Ne4 Rd3 191. Qg5 Bd5 192. Nd2 Ka4 193. Kc2 Bc4 194. Qh6
Rd6 195. Qh4 Rd4 196. Qf6 Kb4 197. Kc1 Bd5 198. Kd1 Rd3 199. Ke2 Rd4 200. Ke1
Ka5 201. Nf1 Bb3 202. Kf2 Rd6 203. Qf4 Rd4 204. Qf5 Rd6 205. Qe4 Bf7 206. Qc2
Ka6 207. Ng3 Kb6 208. Kg1 Bg6 209. Qf2+ Ka6 210. Nf1 Be4 211. Qf4 Rd4 212. Qc1
Ka5 213. Kh2 Ka6 214. Ne3 Ka5 215. Kh3 Bd3 216. Kg3 Ka4 217. Qb2 Be4 218. Kg4
Bd5+ 219. Kg5 Bb3 220. Qa1+ Kb4 221. Ng4 Rd5+ 222. Ne5 Kc5 223. Kf6 Rd1 224.
Qb2 Rd6+ 225. Ke7 Bc4 226. Qa1 Be6 227. Qg1+ Kb4 228. Qe1+ Ka4 229. Kf6 Bg8+
230. Kf5 Bb3 231. Kg5 Rd5 232. Qa1+ Kb4 233. Kf4 Rd1 234. Qb2 Rd6 235. Kg4 Nc3
236. Qc1 Rd4+ 237. Kh5 Rd5 238. Qe1 Bc2 239. Qh4+ Be4 240. Qe7+ Kb3 241. Kh6
Rd4 242. Kg7 Kc2 243. Qf6 Rb4 244. Kh6 Rb7 245. Ng4 Rd7 246. Ne3+ Kd3 247.
Qf1+ Kd4 248. Ng4 Rd5 249. Qg1+ Kd3 250. Qf2 Rf5 251. Qe3+ Kc4 252. Qd2 Kb3
253. Qd7 Ra5 254. Ne3 Ra6+ 255. Kh5 Ra4 256. Kg5 Ka3 257. Kh6 Kb3 258. Qd6 Ka2
259. Qd8 Kb3 260. Qg8+ Kb2 261. Qb8+ Ka3 262. Qb6 Rb4 263. Qf6 Kb3 264. Qf7+
Ka3 265. Nc4+ Ka4 266. Qe6 Kb3 267. Nb6+ Kc2 268. Qd6 Rb5 269. Nc4 Kb3 270.
Nd2+ Kc2 271. Nf1 Kb3 272. Qd4 Bg2 273. Nd2+ Kc2 274. Nc4 Kb3 275. Qf4 Bd5
276. Nd2+ Kc2 277. Qf2 Nd1 278. Qh2 Kc3 279. Nf1 Kb3 280. Kg7 Rb7+ 281. Kh8
Rb5 282. Qg3+ Nc3 283. Ne3 Ra5 284. Qe5 Rb5 285. Nf5 Rc5 286. Kg7 Rc8 287. Kh6
Rc6+ 288. Kh5 Rc5 289. Kh4 Ra5 290. Kg3 Ra4 291. Ne3 Rd4 292. Qb8+ Rb4 293.
Qd8 Rd4 294. Qb6+ Rb4 295. Qg6 Be4 296. Qe6+ Ka3 297. Kf2 Ka4 298. Qd7+ Ka3
299. Ke1 Nb5 300. Qd8 Nc3 301. Qf6 Kb3 302. Qf7+ Ka3 303. Kd2 Nb5 304. Nc4+
Kb3 305. Nd6+ Ka4 306. Qa2+ Na3 307. Ke3 Bc6 308. Nf5 Re4+ 309. Kf3 Kb4 310.
Qb2+ Ka5 311. Qd2+ Ka4 312. Kg3 Nc4 313. Qd8 Kb4 314. Qf8+ Kb3 315. Qc5 Ba8
316. Qg1 Kb4 317. Qb1+ Kc5 318. Qb8 Bd5 319. Kf2 Kc6 320. Qa8+ Kc5 321. Qd8
Re5 322. Qc7+ Kb4 323. Nd4 Kc3 324. Qc5 Kd3 325. Nb5 Re2+ 326. Kg3 Re3+ 327.
Kf4 Re4+ 328. Kg5 Re5+ 329. Kf6 Re6+ 330. Kg7 Ne3 331. Qd4+ Ke2 332. Kf8 Kf3
333. Qh4 Re4 334. Nd4+ Kg2 335. Qg5+ Kf2 336. Nf5 Bb3 337. Qg3+ Ke2 338. Qh2+
Kd3 339. Qd6+ Nd5 340. Qg6 Nf4 341. Qg3+ Kc2 342. Qh2+ Kd3 343. Nd6 Ne6+ 344.
Ke7 Re3 345. Nf5 Re2 346. Qg3+ Kc2 347. Kf6 Kb2 348. Qd6 Rc2 349. Qe5+ Ka2
350. Nd6 Nc5 351. Qe1 Kb2 352. Ke7 Rc1 353. Qe3 Rc2 354. Qd4+ Ka2 355. Nb5
Re2+ 356. Kf6 Rc2 357. Qb4 Rf2+ 358. Kg6 Rg2+ 359. Kh5 Rh2+ 360. Kg4 Rc2 361.
Qa3+ Kb1 362. Kf5 Rc4 363. Kg6 Rg4+ 364. Kh6 Rh4+ 365. Kg5 Rc4 366. Kh5 Rc2
367. Qa8 Kb2 368. Qf3 Rc4 369. Qe2+ Kc1 370. Qe5 Ne4 371. Kg6 Bc2 372. Kf7 Ra4
373. Qd5 Kb2 374. Nd4 Kc3 375. Ne2+ Kb2 376. Qe5+ Ka2 377. Kg7 Ra7+ 378. Kh6
Ra6+ 379. Kh5 Ra4 380. Qe6+ Ka3 381. Qe7+ Kb2 382. Qg7+ Kb3 383. Qb7+ Rb4 384.
Nc1+ Ka3 385. Qe7 Ka4 386. Qa7+ Kb5 387. Qb7+ Kc4 388. Qf7+ Kb5 389. Ne2 Rc4
390. Qb7+ Kc5 391. Nf4 Nc3 392. Ne6+ Kd6 393. Nd8 Kc5 394. Kh6 Be4 395. Ne6+
Kd6 396. Qb8+ Kc6 397. Qa7 Kd6 398. Nd4 Ke5 399. Qg7+ Kd6 400. Nb3 Bd5 401.
Qg3+ Ke6 402. Qg6+ Kd7 403. Nd4 Kc7 404. Qa6 Kb8 405. Qd6+ Ka8 406. Qd7 Rc5
407. Kg6 Bb7 408. Nb3 Rc6+ 409. Kg5 Ne4+ 410. Kf4 Rf6+ 411. Ke3 Rf3+ 412. Kd4
Rf6 413. Qd8+ Ka7 414. Ke3 Re6 415. Qa5+ Kb8 416. Nd4 Re8 417. Kd3 Ba6+ 418.
Kc2 Rc8+ 419. Kb2 Ka7 420. Nb3 Nd6 421. Qa4 Nb7 422. Qd4+ Kb8 423. Qe5+ Ka7
424. Qe6 Rc7 425. Qe3+ Kb8 426. Qe5 Bf1 427. Ka3 Bh3 428. Kb4 Bd7 429. Qf4 Kc8
430. Qf8+ Nd8 431. Nc5 Rc6 432. Kc4 Rb6 433. Kc3 Rb5 434. Kd2 Ra5 435. Qd6 Bc6
436. Ke3 Ra7 437. Qe5 Rf7 438. Kd2 Rf2+ 439. Ke1 Rf7 440. Qh8 Ra7 441. Qf6 Rc7
442. Qf5+ Bd7 443. Qe5 Bc6 444. Kf1 Rf7+ 445. Kg1 Ra7 446. Qf6 Rc7 447. Qg6
Re7 448. Qg4+ Bd7 449. Qg3 Be8 450. Qg5 Ra7 451. Qg4+ Bd7 452. Qd4 Bc6 453.
Ne4 Re7 454. Nd6+ Kc7 455. Qc5 Re6 456. Nb5+ Kc8 457. Nd4 Rh6 458. Nf5 Re6
459. Ne7+ Kc7 460. Qa5+ Kd7 461. Qa7+ Bb7 462. Nf5 Kc8 463. Qd4 Bc6 464. Qg7
Re1+ 465. Kf2 Re6 466. Ne7+ Kb8 467. Kf1 Be4 468. Kg1 Bc6 469. Nf5 Nb7 470.
Qg8+ Re8 471. Qg3+ Kc8 472. Qg7 Kd8 473. Qf6+ Kd7 474. Qf7+ Kd8 475. Ng7 Re1+
476. Kf2 Re7 477. Qf8+ Kd7 478. Nf5 Re8 479. Qf7+ Kd8 480. Kg3 Bd7 481. Qf6+
Kc7 482. Ne7 Rd8 483. Nd5+ Kb8 484. Nb6 Be8 485. Nc4 Rc8 486. Qe6 Rd8 487. Kf3
Ka8 488. Qf6 Kb8 489. Kf2 Rc8 490. Qe6 Bd7 491. Qe5+ Rc7 492. Kg3 Nc5 493.
Qb2+ Rb7 494. Qh8+ Bc8 495. Nd6 Rc7 496. Qb2+ Nb7 497. Nb5 Rc5 498. Kh4 Be6
499. Qe2 Nd8 500. Nd4 Bc4 501. Qe8 Rc8 502. Qd7 Ba6 503. Qd5 Bb7 504. Qd6+ Ka8
505. Qb6 Nc6 506. Nb5 Rd8 507. Nc7+ Kb8 508. Ne6 Rd1 509. Kg5 Ka8 510. Nc5 Nd8
511. Qc7 Ka7 512. Kf4 Ka8 513. Ke3 Ka7 514. Nd7 Nc6 515. Qb6+ Ka8 516. Nc5 Nd8
517. Nd3 Nc6 518. Ke2 Rxd3 519. Kxd3 Kb8 520. Qb5 Na7 521. Qb4 Nc8 522. Kd4
Na7 523. Qf8+ Nc8 524. Qc5 Ba8 525. Ke5 Bg2 526. Ke6 Bh3+ 527. Kf6 Bg2 528.
Qe5+ Ka7 529. Qc3 Nb6 530. Qa1+ Kb7 531. Ke6 Bh3+ 532. Kd6 Nc8+ 533. Kc5 Kc7
534. Qa4 Bd7 535. Qa5+ Kb7 536. Qd8 Bc6 537. Qf6 Bd7 538. Qe5 Na7 539. Qd6 Bc6
540. Qe7+ Kb8 541. Qd8+ Kb7 542. Qb6+ Ka8 543. Qb4 Bb7 544. Kb6 Kb8 545. Qd6+
Ka8 546. Qc5 Nc6 547. Qf8+ Nb8 548. Qe7 Nd7+ 549. Qxd7 Bc8 550. Qxc8# 1-0

Same here, black in this position loses but it needs 517 moves for white to
capture a piece instead of 50 that has available for not breaking 50 moves
rule.

[Event "https://syzygy-tables.info/?fe"] [Site "https://syzygy-
tables.info/?fe"] [Date "2018.10.11"] [Round "?"] [White "Syzygy"] [Black
"Syzygy"] [Result "1/2-1/2"] [Annotator "syzygy-tables.info"] [SetUp "1"] [FEN
"QN4n1/8/3k4/8/b2K2r1/8/8/8 w - - 0 1"] [PlyCount "100"] [EventDate
"2018.??.??"] {DTZ 1033} 1. Kc3 Ne7 2. Qa6+ Bc6 3. Qa3+ Ke6 4. Kb2 Rg2+ 5. Kc1
Rg1+ 6. Kd2 Rg2+ 7. Ke1 Rg1+ 8. Kf2 Rg2+ 9. Kf1 Rg5 10. Qa6 Rf5+ 11. Ke1 Re5+
12. Kf2 Rf5+ 13. Kg3 Rc5 14. Kh3 Rc3+ 15. Kh2 Kd6 16. Qa7 Nd5 17. Na6 Rc2+ 18.
Kg1 Rc4 19. Qb8+ Ke6 20. Kh2 Nf6 21. Nb4 Be4 22. Qb6+ Ke5 23. Qb5+ Kd4 24. Kg1
Ng4 25. Qd7+ Ke3 26. Qa7+ Kd2 27. Qa2+ Kc3 28. Qa3+ Kd2 29. Qb2+ Ke3 30. Qb3+
Kd4 31. Qd1+ Ke3 32. Qe1+ Kd4 33. Qd2+ Ke5 34. Kf1 Ke6 35. Qa2 Ne5 36. Ke2
Bf3+ 37. Kd2 Be4 38. Qa6+ Ke7 39. Qb5 Ke6 40. Qb6+ Kf5 41. Qh6 Nf3+ 42. Ke2
Ne5 43. Qf8+ Ke6 44. Na6 Bf3+ 45. Kd2 Rd4+ 46. Kc1 Rc4+ 47. Kb1 Be4+ 48. Ka2
Nd3 49. Qe8+ Kf6 50. Qd8+ Kf5 {Draw by 50 moves rule.}

_**3-fold repetition**_ is also interesting in some cases.  
For example in the _**position-1:**_  
White to move and black **King and Rook haven't moved** the whole game.

Black has castling rights as his King and Rook haven't moved.  
But black can't castle, since white b4 Bishop controls the f8 square the King
should pass to make the castle.

While after forcing to position-1 the moves 20.Ba5 Kf8 21.Bb4 Ke8, we reach
the _**position-2**_ :  
White to move and **black King has moved** obviously(20...Kf8 21...Ke8)

Similar looking with position-1, BUT here black can't castle because white b4
Bishop controls the f8 square _**AND**_ because King has moved.

These 2 positions are **NOT** the same regarding the 3-fold repetition
definition, since now black has lost castle rights because his King moved(and
this is the critical for whether the 2 positions are equal for 3-fold
repetition because of castling rights, if the Rook and King had moved or not).  
So in a case of a 3-fold repeat of a position, when for example, position 1 is
repeated 2 times and then position 2 arises again, it will be NOT a 3 fold
repetition and one could not claim a draw!

Now, about the above last rule for draws, _**the one with the dead position**_
, has a significant possible effect in time controlled games. As if a dead
position occurs, it is immediately being declared by Chess rules, as a draw
even if one side runs out of time. Of course in human play if the weak side
loses on time in such a position and haven't noticed it's a dead position(nor
its opponent-assuming a fair opponent that would tell) and the dead position
goes unnoticed it will be not declared as a draw provided the weak side loses.  
But in engine-engine games the GUI and most importantly the operator should
notice such things.  
While this issue and rule seems trivial and such positions trivial and easy to
look, there are many interesting dead (draw) positions.

Obviously the trivial dead positions are King-King, King-King+Knight, King-
King+Bishop.

[Event "?"] [Site "?"] [Date "????.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "*"] [SetUp "1"] [FEN "8/6K1/8/8/1k6/8/8/8 w - - 0 0"]
[PlyCount "0"] {This position is clearly a dead position as no side can
checkmate the other.} Kf7

[Event "?"] [Site "?"] [Date "????.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "*"] [SetUp "1"] [FEN "8/6K1/8/8/1k6/8/4n3/8 w - - 0 1"]
[PlyCount "0"] {This is also a dead position as black cannot checkmate white
with any legal way.} Kf7

[Event "?"] [Site "?"] [Date "????.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "*"] [SetUp "1"] [FEN "8/6K1/8/8/1k6/8/4B3/8 w - - 0 1"]
[PlyCount "0"] {This is also a dead position as white cannot checkmate black
with any legal way.} Kf7

[Event "?"] [Site "?"] [Date "????.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "1-0"] [SetUp "1"] [FEN "8/6K1/8/8/nk6/8/4B3/8 w - - 0 1"]
[PlyCount "15"] {This is NOT a dead position as at least one side can
checkmate the opponent's King, in this case both black and white can checkmate
the opponent, with extremely unskillful play of course but this is irrelevant
to the rule. So it's not an automatic draw.} 1. Kf6 (1. Kh8 Kc5 2. Bd3 Kd6 3.
Bh7 Ke7 4. Bg6 Kf8 5. Bh7 Nc5 6. Bf5 Nd7 7. Be4 Ne5 8. Bh7 Nf7#) 1... Ka5 2.
Ke6 Kb6 3. Kd6 Ka7 4. Kc7 Ka8 5. Bd3 Nb6 6. Be2 Nc8 7. Ba6 Na7 8. Bb7# 1-0

[Event "?"] [Site "?"] [Date "????.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "*"] [SetUp "1"] [FEN "8/6K1/2b5/8/1k6/8/4B3/8 w - - 0 1"]
[PlyCount "0"] {King+Bishop versus King+Bishop with same Bishop colors is a
dead position so it's an automatic draw! Neither side can checkmate the other
with any series of legal moves.} Kf7

[Event "?"] [Site "?"] [Date "????.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "0-1"] [SetUp "1"] [FEN "8/6K1/8/2b5/1k6/8/4B3/8 w - - 0
1"] [PlyCount "14"] {But King+Bishop versus King+Bishop with opposite Bishop
colors, is NOT a dead draw as a checkmate (for either side) is possible(with
very unskillful play of course).} 1. Kh8 Kc3 2. Bf3 Kd4 3. Bg4 Ke5 4. Bf3 Kf6
5. Bg4 Kf7 6. Bf5 Bb6 7. Bh7 Bd4# 0-1

[Event "?"] [Site "?"] [Date "????.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "1-0"] [SetUp "1"] [FEN "7k/8/7P/1K6/8/8/8/8 w - - 0 0"]
[PlyCount "9"] {This is NOT a dead position and an automatic draw as black can
lose the game even if this would require a complete suicidal play from him.}
1. Kc5 Kg8 2. Kd5 Kf8 3. Ke6 Kg8 4. h7+ Kf8 5. h8=Q# 1-0

[Event "?"] [Site "?"] [Date "????.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "1-0"] [SetUp "1"] [FEN "8/8/2k2N2/8/1K6/8/4N3/8 w - - 0
0"] [PlyCount "17"] {King plus 2 Knights against a lone King, is NOT a dead
position also, as the side with the Knights can checkmate the opponent King!
With very unskillful play from the lone King of course. Note that the side
with 2 Knights can't force a checkmate but if black has a Pawn not below 5th
rank and white can block it, then white can force a checkmate always! So in a
KNN versus K situation white can't force a win but if black has a Pawn, in
many position white can force a win.} 1. Ka5 Kc7 2. Ka6 Kc8 3. Ka7 Kd8 4. Ne4
Kc8 5. Ng5 Kd8 6. Ne6+ Kc8 7. Nc3 Kd7 8. Nd5 Kc8 9. Nb6# 1-0

[Event "?"] [Site "?"] [Date "????.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "*"] [SetUp "1"] [FEN "8/K7/8/1B6/4B1k1/3B4/8/8 b - - 0
9"] [PlyCount "0"] {This is a dead position and an automatic draw since white
had no way to checkmate the black King as all his Bishops are of the same
color.} 9...Kg3

[Event "?"] [Site "?"] [Date "????.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "*"] [SetUp "1"] [FEN "8/K4b2/8/1B6/4B1k1/3B4/8/8 b - - 0
9"] [PlyCount "0"] {This is also a dead position and a draw as neither side
can checkmate the opponent's King.} 9...Kg3

[Event "?"] [Site "?"] [Date "????.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "*"] [SetUp "1"] [FEN "2k3r1/2Q5/r4n2/8/b7/7p/7P/7K b - -
0 1"] [PlyCount "0"] {This is a dead position also! Black is forced to capture
the Queen and then it's stalemate. So checkmate can't occur by neither side
with legal play so it's an automatic draw. That means even for some reason
black loses on time after Qc7+ it would still be a draw.} 1...Kxc7

[Event "?"] [Site "?"] [Date "????.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "1/2-1/2"] [SetUp "1"] [FEN
"1kq3r1/1pp5/r4n2/8/b7/1Qp4p/1QP4P/7K w - - 0 1"] [PlyCount "4"] {[#]} 1.
Qxb7+ {After white played that move it's a dead position! So an automatic
draw. So even if black or white lose on time after this move, it would still
be a draw.} Qxb7+ { Forced.} 2. Qxb7+ {Forced.} Kxb7 {Forced. Draw.} 1/2-1/2

[Event "?"] [Site "?"] [Date "????.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "*"] [SetUp "1"] [FEN "8/4p3/2k5/1p2p1p1/1P2P1P1/8/4K3/8 w
- - 0 0"] [PlyCount "0"] {Another dead position, since no side can reach a
checkmate with any series of legal moves. So this is an automatic draw per
FIDE rules. So even if one side loses on time it's still a draw.} Kd2

[Event "?"] [Site "?"] [Date "????.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "*"] [SetUp "1"] [FEN
"5b1k/4p1p1/4P1P1/8/8/4p1p1/2B1P1P1/5B1K w - - 0 0"] [PlyCount "0"] {Another
dead position, with an automatic draw.} Bb3

[Event "?"] [Site "?"] [Date "????.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "*"] [SetUp "1"] [FEN "6k1/5pPp/5P1P/1p6/8/3p4/1P1P4/qKB5
w - - 0 1"] [PlyCount "0"] {Another dead position, with an automatic draw. No
side can reach a checkmate with any series of legal moves. So even if one side
loses on time it's still a draw.} 1.Kxa1

[Event "?"] [Site "?"] [Date "????.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "1/2-1/2"] [SetUp "1"] [FEN "7R/7k/5K2/8/8/8/1B6/8 b - - 0
0"] [PlyCount "0"] {Immediately when white played Rh8+ it has become a dead
draw position with an automatic draw.} Kxh8

[Event "?"] [Site "?"] [Date "????.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "1/2-1/2"] [SetUp "1"] [FEN
"4knQ1/1N1p1p2/p2P1P2/P7/1q1R2r1/1P3Q2/3N1Pp1/3RK1B1 w - - 0 1"] [PlyCount
"5"] 1. Qe4+ {White has chosen the wrong check. Now this is a dead position!
With an automatic draw. Whatever happens from now it's pointless, as even if
one side loses on time(to play the forced moves) it's still a draw.} Rxe4+ 2.
Rxe4+ Qxe4+ 3. Nxe4 1/2-1/2

[Event "?"] [Site "?"] [Date "????.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "1/2-1/2"] [SetUp "1"] [FEN
"6kr/3N1p1p/p4P1n/P5PP/1P1q1RQr/7p/4pN1P/4B1KR w - - 0 1"] [PlyCount "5"] 1.
gxh6+ {White gives a discovered check but what happens from now on in the game
is pointless, as this is a dead position. An automatic draw! The next is
forced and lead to stalemate. Once again, if one side loses on time before
reaching the final stalemate position, it's still a draw.} Rxg4+ 2. Rxg4+
Qxg4+ 3. Nxg4 1/2-1/2

[Event "?"] [Site "?"] [Date "????.??.??"] [Round "?"] [White "New game"]
[Black "?"] [Result "1/2-1/2"] [SetUp "1"] [FEN
"6k1/p1p1ppP1/5b1K/3N1P1P/6Nq/8/P1P5/8 w - - 0 0"] [PlyCount "10"] 1. Ngxf6+
Qxf6+ {And this immediately ends the game as a draw! Because a dead position
arises. Since no side can win with any possible legal continuation of moves.
So even if one side loses on time the game is still draw.} 2. Nxf6+ exf6 3. c3
c5 4. c4 a5 5. a3 a4 1/2-1/2
