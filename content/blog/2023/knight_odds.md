---
title: "Play with knight odds against Lc0 on lichess"
author: "Naphthalin"
published: 2023-11-09
---

In the recent [blog post]({{< relref "wdl_model.md" >}}) presenting the new WDL contempt feature added in the Lc0 v0.30 release, we shared our plans to add a lichess bot for piece odds games. While allowing arbitrary piece odds poses several challenges, which aren’t resolved yet, we are proud to announce that we made a big first step towards that goal with [LeelaKnightOdds](https://lichess.org/@/LeelaKnightOdds), now accepting your challenge on lichess.
<!--more-->

#### How can I play against LeelaKnightOdds?

To challenge [the bot](https://lichess.org/@/LeelaKnightOdds) to a knight odds game, follow these steps:
1. Click on the two crossed swords symbol in the top right to issue a challenge.
2. Select the game variant “From Position” in the dropdown menu.
3. Paste the starting FEN into the field;\
`rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/R1BQKBNR w KQkq` to play without the knight on b1, and\
`rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKB1R w KQkq` to play without the knight on g1.
4. Select your preferred time control; only challenges with a main time between 1’ and 15’ and an increment between 1” and 10” will be accepted.
5. To start the challenge, select black; games will be unrated independent of your selection.

You don’t need a lichess account to challenge LeelaKnightOdds; note however that Leela will currently only play one game at the same time, and logged in lichess users might be given a higher priority.

Unfortunately, the automatic “rematch” feature doesn’t work, as it will send an offer with switched colors. Just send a new challenge instead.

The bot can also be challenged through the lichess [featured bots](https://lichess.org/player/bots) page, reachable from their top menu under "Community" &rarr; "Players" and then selecting "Online bots" on the side menu.

#### How strong do I have to be to challenge LeelaKnightOdds?

While the bot won’t reject challenges from players based on their rating, the primary target group are players rated above 2400 in blitz or rapid, and is estimated to perform around 2600 in 5’+3” games. Don’t hesitate though to give it a few tries even if you are lower rated, at worst you’ll get some first-hand experience of being fawned by Leela &#x1f600;. Generally, longer time controls should feel a bit easier.


#### Technical details

LeelaKnightOdds is using a T81 net on a mobile RTX 4090 at around 25knps with Lc0 v0.30. The emulated strengths in search are 2800 (white) and 3300 (black). During the first 10 moves, there is some amount of randomization to avoid repeating the same opening.

We also configured the time management in a way that Leela plays relatively quickly, especially for obvious moves, and never spends too much time on single moves.

The relevant settings are the following, where some require the Lc0 pro version [^1]
```
	Temperature: 0.5
	TempValueCutoff: 2
	TempCutoffMove: 10
	MovesLeftThreshold: 0.95
	Contempt: 500
	ContemptMaxValue: 1000
	WDLCalibrationElo: 3300
	WDLDrawRateReference: 0.58
	WDLEvalObjectivity: 0.0
```

We’ll adjust the settings if necessary, but don’t expect that bigger changes are required.


#### Acknowledgements

We want to thank the lichess team and patrons for providing and maintaining the platform which allows us to share features like this with people who want to play against Leela. We furthermore want to thank GM Larry Kaufman, who shared his experience with odds play and thus helped us dial in the contempt settings.

[^1]: To access the full list of parameters, use `lc0 --show-hidden` or activate the pro version by renaming the Lc0 binary to “lc0pro.exe”.

