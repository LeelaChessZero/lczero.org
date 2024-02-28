---
title: "Update on playing with piece odds against Lc0 on Lichess"
author: "Naphthalin"
published: 2024-02-11
---

Since its first games almost 3 months ago, [LeelaKnightOdds](https://lichess.org/@/LeelaKnightOdds) has played over 1800 matches against a variety of opponents at a multitude of time controls.
<!--more-->


#### Performance of LeelaKnightOdds against human opponents

While it is difficult to calculate the exact performance due to time losses and opponents with inaccurate ratings, the performance for rapid, blitz and bullet against strong human opponents can be estimated as
* Rapid (5’+5” and upwards, ca. 200 games): approx. 2800 Elo on Lichess, or 2630 FIDE
* Blitz (3’+2” to 5’+3”, ca. 140 games): approx. 3000 Elo on Lichess, or 2700 FIDE
* Bullet (1’+1”, ca. 180 games): +178-0=2 against 2560 avg rated, so >3400 Lichess, off the human scale

(Intermediate time controls and time controls without increment weren’t included. Furthermore, there weren’t many games against players rated 2500+ FIDE, so it’s unclear how well the estimates extend to stronger players beyond that only 2600+ FIDE rated players can be competitive in Rapid.)

The performance being better under shorter time controls is expected due to the nature of odds play, where having additional time benefits the weaker player much more than the stronger player who is giving the material odds. This also means that for any player who is strong enough to win at knight odds against Lc0 at long time controls, there is a “fair time control”. Since this fair time control likely lies in the blitz range for strong GMs, a hypothetical knight odds match between Lc0 and a strong GM would be very exciting.

Until now the bot only accepted knight odds as white; since we’re quite satisfied with the performance, we decided to also accept knight odds as black (usually called “knight and move odds” in the literature) to provide a bit more variety.

The settings have been changed several times since [the previous values]({{< relref "knight_odds.md" >}}#technical-details) were published, now using net 816730 and playing with[^1]
```
	Temperature: 0.8
	TempValueCutoff: 0.4
	TempDecayMoves: 4
	MovesLeftThreshold: 0.95
	DrawScore: 0
	Contempt: 450
	ContemptMaxValue: 2000
	WDLCalibrationElo: 3300
	WDLMaxReasonableS: 2.5
	WDLDrawRateReference: 0.65
	WDLEvalObjectivity: 0.0
```

#### LeelaQueenForKnight and LeelaQueenOdds as new additions to Leela playing piece odds on Lichess

To provide a similar challenge to lower rated players, we added two more Leela bots with an increased handicap, with [LeelaQueenForKnight](https://lichess.org/@/LeelaQueenForKnight) playing Queen for Knight odds and [LeelaQueenOdds](https://lichess.org/@/LeelaQueenOdds) playing full Queen odds as either color, the latter accepting 2 games in parallel unlike the other two bots.

Both are featured [Lichess bots](https://lichess.org/player/bots) and are awaiting your challenges. The approximate rapid performances are around 2250 Lichess Elo with Queen for Knight Odds, and 1800 with full Queen odds, depending on both the time control and the color.

The next step will most likely be to fill in the gaps with Rook odds (in between Knight and Queen for Knight odds), double Knight odds, and Rook and Knight odds (both in between Queen for Knight and full Queen odds), which are all played well by [t1-512x15x8h-distilled-swa-3395000](https://storage.lczero.org/files/networks-contrib/t1-512x15x8h-distilled-swa-3395000.pb.gz). 

If you want to learn more about piece odds in chess, you might be interested in an upcoming article about the topic by GM Larry Kaufman in the “New In Chess” magazine, whose assessment of the quality of play and analysis of performance were a big contribution to improving the level of the bots and making them possible in the first place.

#### Update 2024-02-29: LeelaRookOdds added to the Leela piece odds family of lichess bots

We now added LeelaRookOdds to fill in the gap between knight odds and queen for knight odds. The expected rapid performance should be around 2650 when Leela plays white and 2500 as black (lichess ratings), so between 2300 and 2500 FIDE.

#### Quality of life update: direct challenge links on Lichess

Thanks to [zamfofex](https://github.com/lichess-org/lila/pull/14511), we are now able to provide direct challenge links for the different bots, so you don’t have to copy the FEN any more from the bot descriptions.

##### LeelaKnightOdds:
Knight odds:\
[Without queenside knight - play as black](https://lichess.org/?user=LeelaKnightOdds&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/R1BQKBNR_w_KQkq#friend)\
[Without kingside knight - play as black](https://lichess.org/?user=LeelaKnightOdds&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKB1R_w_KQkq#friend)

Newly added: knight and move odds\
[Without queenside knight - play as white](https://lichess.org/?user=LeelaKnightOdds&fen=r1bqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQkq#friend)\
[Without kingside knight - play as white](https://lichess.org/?user=LeelaKnightOdds&fen=rnbqkb1r/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQkq#friend)


##### LeelaQueenForKnight:
Queen for the Knight on b1/b8:\
[Play as black](https://lichess.org/?user=LeelaQueenForKnight&fen=r1bqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNB1KBNR_w_KQkq#friend)\
[Play as white](https://lichess.org/?user=LeelaQueenForKnight&fen=rnb1kbnr/pppppppp/8/8/8/8/PPPPPPPP/R1BQKBNR_w_KQkq#friend)


##### LeelaQueenOdds:
[Play as black](https://lichess.org/?user=LeelaQueenOdds&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNB1KBNR_w_KQkq#friend)\
[Play as white](https://lichess.org/?user=LeelaQueenOdds&fen=rnb1kbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQkq#friend)


##### New: LeelaRookOdds:
Rook odds:\
[Without queenside rook - play as black](https://lichess.org/?user=LeelaRookOdds&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/1NBQKBNR_w_Kkq#friend)\
[Without kingside rook - play as black](https://lichess.org/?user=LeelaRookOdds&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBN1_w_Qkq#friend)

Rook and move odds:\
[Without queenside rook - play as white](https://lichess.org/?user=LeelaRookOdds&fen=1nbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQk#friend)\
[Without kingside rook - play as white](https://lichess.org/?user=LeelaRookOdds&fen=rnbqkbn1/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQq#friend)

If you accidentally select the wrong color (or try to play from an unsupported position), there will be a generic error message that the bot currently isn’t accepting challenges. Similarly, the Lichess rematch feature automatically switches colors, thus rematch offers will always be declined.

[^1]: This makes use of [new code](https://github.com/LeelaChessZero/lc0/pull/1941) which isn’t yet merged to the main Lc0 repository

