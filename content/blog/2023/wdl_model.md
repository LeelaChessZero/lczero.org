---
title: "The Lc0 v0.30.0 WDL rescale/contempt implementation"
author: "Naphthalin"
published: 2023-07-20
---

The imminent v0.30.0 Lc0 release has two main features, attention body net support and WDL rescale/contempt. This blog post is about the latter, which is continuing our past efforts on providing more realistic WDL predictions with Lc0.
<!--more-->

One of the main benefits of the reinforcement learning approach Lc0 is using (based on the AlphaZero paper) has always been the simplicity of using the training data for training the neural network to predict useful outputs. Twice in the past this led to changes in the head output: The addition of the moves left head in v0.25 (Apr 2020), and the change of the value head to predict the Win/Draw/Loss chances (usually referred to as WDL) instead of just the expected score back in v0.21 (Feb 2019). Since then there have been several changes to make the WDL predictions more realistic, like fine-tuning the temperature schedule in training games, and correcting the effect of actively induced blunders in training games when processing the training data with the deblunder functionality in the rescorer. 

Having realistic WDL predictions has in theory several benefits all revolving around the possibility of using the information about the drawishness when selecting moves. One recent attempt to make use of the information for opening preparation can for example be found [here](https://www.chess-journal.com/evaluatingSharpness2.html). In v0.24 (Mar 2020), the drawscore functionality was introduced to allow the search to actively avoid or seek out draws, and to support the Armageddon format (including a test run T71.5 which only played Armageddon games). However, the drawscore didn't work as well as we hoped for, as it didn't have a big effect on Lc0's opening selection when activated, and the Armageddon performance suffered from white's chances at winning from the startpos being too slim between strong modern engines.

With v0.30.0, we’re making a big step on continuing past efforts to make the WDL predictions more realistic, and are adding a functionality which adapts the WDL predictions according to the provided playing conditions, designed to make WDL directly applicable. This includes both Contempt (to actively use the Elo rating difference in search) and a general sharpening/widening of the WDL distribution when simulating the higher/lower accuracy of players. 

Accompanying this feature, a new scoretype “WDL\_mu” has been added, which follows the [newly adopted convention](https://github.com/official-stockfish/Stockfish/pull/4216) of +1.00 meaning white has a 50% chance to win a game, thus finally making Lc0 and Stockfish evals directly comparable. Notably, this is also approximately the value of (removing) a white center pawn or a black edge pawn from the standard starting position; white edge pawns are evaluated a bit less important, black center pawns a bit more. Furthermore the drawscore adjustment has been simplified into a single parameter which is applied from white's perspective, where 0.0 will mean regular chess scoring, and -1.0 will give Armageddon scoring.


If you're interested in the technical details of how the WDL adjustments work and how the WDL_mu score is defined, you can take a look into the [pull request](https://github.com/LeelaChessZero/lc0/pull/1791), or wait for a future blog post describing the technical implementation in more details. We however want to give a few examples on how you could make use of the implementation.

#### General settings

As the initial draw rate estimation depends on the Lc0 network you're using, you'll always need to provide an appropriate value for WDLDrawRateReference to get accurate results. You can look the value up by running Lc0 with the network of your choice (supporting the WDL output) at default settings from the startpos; if you're using any of the strong recent networks like T80, BT2 or T1-4000k, this will be approximately 58%, so add

```
WDLDrawRateReference:   0.58
```

to your config. The target draw rate can be controlled in two ways: Either by directly setting WDLDrawRateTarget, or indirectly by using the WDLCalibrationElo setting, which estimates the accuracy of both players from their Elo. Note that the Elo numbers used for defining the playing conditions are at blitz/rapid time control; for longer time controls, you can use the rule of thumb of adding 50 Elo per doubling of thinking time.

If you’re using contempt in analysis, you have to set ContemptMode accordingly, depending on which side’s Elo you specified. For letting Lc0 play matches, using ContemptMode “play” automatically detects which side Lc0 is playing and applies the Elo difference from that perspective. Using “white\_side\_analysis” or “black\_side\_analysis” will however also work, in case you explicitly want to simulate one side being stronger (e.g. for Armageddon).

Also, it is recommended to use a high MovesLeftThreshold like 0.9 or 0.95, in case you're experimenting with more extreme contempt settings.



#### Analysis/Kibitzing of games

With wElo and bElo being the estimated Elo of white and black (adjusted for time control), just use

```
WDLCalibrationElo:   wElo
Contempt:            wElo - bElo
ContemptMode:        “white_side_analysis”
WDLEvalObjectivity:  0.0
ScoreType:           “WDL_mu”
```

in your config (either via GUI, or e.g. the engines.json file in Nibbler). This will give you more realistic estimations of the game outcome; however, note that this doesn't reduce the strength of Lc0's search, and it will still find tactical combinations beyond the given playing strength.



#### Opening preparation

If you're looking for inspiration on how to adapt your opening repertoire based on whether your opponents are weaker or stronger than you, you can now use Lc0 in the following way:

With yourElo and EloAdv being your Elo (again adjusted to TC), and your Elo advantage over your opponent, suggested values are

```
WDLCalibrationElo:      yourElo
Contempt:               EloAdv
ContemptMode:           “white_side_analysis” or “black_side_analysis”
                        (depending on which side you are)
WDLEvalObjectivity:     1.0
WDLContemptAttenuation: 0.5
                        (this gives a compromise between “realistic” and
                         “objective” evaluation of moves; higher values will
                         increase the aggressiveness gradually towards overplay)
ScoreType:             “WDL_mu”
```

There are a few [example results](https://github.com/LeelaChessZero/lc0/pull/1791#issuecomment-1486746586) showing the effect of different settings in a few popular openings.

*General disclaimer: the implementation doesn't affect the policy, so you should let the search run for at least 10k nodes to get the intended result.*



#### Analysis & Preparation for Armageddon/must win games

There are certain situations where either side has to play for a win, and getting a draw is virtually equivalent to losing the game. Note that this doesn't really make sense at higher levels (especially at classical TC super GM or engine level). The following settings are for analysis, assuming it's a must-win game for white:

```
WDLCalibrationElo:   wElo
Contempt:            wElo - bElo
                     in Armageddon add 30 to 100 Elo depending on TC advantage.
ContemptMode:        “white_side_analysis”
WDLEvalObjectivity:  0.0
DrawScore:           -1.0
ScoreType:           “centipawn_with_drawscore”
```

#### Pawn/piece odds games

While being more of a niche in chess (unlike for example in Go, where placing handicap stones is regularly used for rank adjustments), the new functionality can in principle also be used for playing against Lc0 with material odds. In our tests we still got reasonable play with up to rook+knight odds, but got poor performance with removed (otherwise blocked) bishops; we plan to add a lichess bot for odds games at some point, in which case there will be another blog post, but for now you can experiment with settings like this which gives reasonable play for knight odds:

```
WDLCalibrationElo:   2700
Contempt:            250
ContemptMode:        “white_side_analysis” or “black_side_analysis”
                     (depending on which side Lc0 is playing), or
                     “play” (if you have set up Lc0 to play matches)
WDLEvalObjectivity:  0.0
ScoreType:           “WDL_mu”
```
