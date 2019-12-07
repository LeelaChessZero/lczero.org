---
title: "FAQ"
wikiname: "FAQ.md"
---
# Where do I start?
* To contribute to the project, see [[Getting Started]] and follow the instructions for running self-play training games.
* To just run the engine locally, see [[Getting Started]] and follow the instructions for running the engine. See also [[Running Leela Chess Zero in a Chess GUI]] for instruction on various popular GUIs.

# How does Leela Chess Zero work? 
* For non-programmers, there is [a simplified explanation of Leela Chess Zero here](https://github.com/LeelaChessZero/lc0/wiki/What-is-Lc0%3F-(for-non-programmers)).
* A nice [[Technical Explanation of Leela Chess Zero]] and glossary of technical terms is available.
* The self-play games your client creates are used by the central server to improve the neural net. See [[Neural Net Training]] for more details. You can also see a summary of the [[Training runs]]

# How can I follow project status and plans?
* See our [blog](https://blog.lczero.org)
* [Discord chat](https://discord.gg/pKujYxD) #announcements and #dev-log have the most detailed updates. 
* Our github [projects](https://github.com/orgs/LeelaChessZero/projects/1) page shows plans for current and future work.

# What is the current strength of Lc0?
## The [Elo chart](http://lczero.org) seems inflated.
* The chart is not calibrated to CCRL or any other common list. It sets 'the first net' to Elo 0, so it is not comparable, even between different training runs.
* The different points are calculated from self-play matches. Self-play tends to exaggerate gains in Elo compared to gains when playing other chess engines.

## Where can I find Lc0's current Elo?
Many people test the strength of Lc0 nets but the main exchange of results is now the test-results channel of the Lc0 chat on discord. Most web pages are no longer or only occasionally updated. Status as of 2019-10-14:

### Regularly updated
* [lc0 Elo Ratings -- ID Progression](https://docs.google.com/spreadsheets/d/1QxAG6XVTvvTAGlZ-kpSSvv0VuMGh7RkJjgKqgT37vMU/edit?ts=5bf04640#gid=0) (!sheet4 on Discord)
* [Position tester](https://docs.google.com/spreadsheets/d/1MeCqY05v41ojhnejrqSy2cUSfVhjYEAFbfNCn13cyH8/edit#gid=401642408)
### Occasionally updated
* [Lc0 test30 Elo estimates](https://docs.google.com/spreadsheets/d/19UL5a9I3M_TjIYwTpJQKdCi2RJHpxDD9YHnRogrwTnc/edit#gid=0) (!sheet3 on Discord)

### Long time no update seen
* [Aggregated list](https://docs.google.com/document/d/1vdmi1TJgPtYo_l-i-wDI_Ki6Hh9Ix26UbUP5HBbaquw)
* [Elo Summary](https://docs.google.com/spreadsheets/d/1Mi2qwPCK4aVNt9B8aC-HecIyLJ0BEAPvp63L59DTrY4/edit) collects from many sources and graphs them all on one page.
* [LCZ vs Stockfish](https://docs.google.com/spreadsheets/d/18UWR4FVhPi0vNwwPreu_avd9ycujGQ5ayR2LzJOWP4s) (!zz on Discord)
* [LCZ CCRL Estimate](https://docs.google.com/spreadsheets/d/1XSJiCcQpCLv0fNwrUn7jXjdkZFU63YFEWpdXv6dSSg0) (!ccrl on Discord)
* [L.e.e.l.a](https://docs.google.com/spreadsheets/d/1ZAIuHR6n-5JTxKQc0XUSx1jyUrgVEcj8DNLKA7-urBw/edit#gid=763519729) LcZero ELO Estimate List Approximation by Cscuile (!sheet2 on Discord)
* [CCLS Rating for LCZ](https://docs.google.com/spreadsheets/d/1xUO3-MDP5yMcaPzikJGgZ3K3K2ySZs_-fYA-FK4-Q1I/edit#gid=1245059886) from these [gauntlet results](https://docs.google.com/spreadsheets/d/1xUO3-MDP5yMcaPzikJGgZ3K3K2ySZs_-fYA-FK4-Q1I/edit#gid=1245059886). The games can be watched [here](https://www.twitch.tv/ccls)
* [LCZ Basic Checkmates](https://docs.google.com/spreadsheets/d/1uY7fplZzeXi8H52LK0L6Do2oYgF1v5VW3K_AjNS8l0M)
* [LCZ vs SF Time Handicap](https://docs.google.com/spreadsheets/d/1zcXqNzLNBT8RjTHO_AppL6WN0j8TGmOIh6osLPmaB6E) (!sheet on Discord)
* [Reinfeld's Win at Chess](https://docs.google.com/spreadsheets/d/1CZTRoxn3kEpXzOvj12wvWoJFz4SIbfCcuqcAJlLuRiM/edit#gid=1971603993)

## Which is the best net?

There is no consensus on the "best" net for many reasons:
* "Strongest net" is not uniquely defined. 
One net could be better at short time control and another at long time controls. One could be better at drawing against Stockfish but have too many draws against lower-rated engines, while another may trash lower rated engines and be trashed by Stockfish. One could be worse against other engines, but beat every other net in head to head.
* "Self-Elo" is not a true indicator of nets strength, but just a general parameter of the "health" of the training run
* The large number of nets created makes difficult to test everything 
* Substantial amount of testing is required to assess superiority outside of error bars (small sample size problem)
* There is no coordinate testing framework. It is considered that resources are better spent on training

Despite all this, some of the best nets are listed [here](https://github.com/LeelaChessZero/lc0/wiki/Best-Nets-for-Lc0).

# Can I watch Lc0 play somewhere?
* Several people run Lc0 on lichess:
  * https://lichess.org/@/LeelaChess/tv
* Some people stream test matches against other engines or itself frequently, notable streams include:
  * [CMCanavessi](https://twitch.tv/ccls)
  * [jjosh](https://www.twitch.tv/jjoshua2)
  * [y_Sensei](https://www.twitch.tv/y_sensei)
  * [Edosan](https://www.twitch.tv/edosani)
  * [Dubslow](https://twitch.tv/dubslow)
  * [potato_chess](https://twitch.tv/potato_chess)
  * [WutangRZA](https://www.twitch.tv/thewutangrza)
* [See competition games against other engines](http://legacy-tcec.chessdom.com/archive.php) 
  * Lc0 played against other strong engines in [[TCEC]] future seasons will likely feature Leela again, and can be viewed live at the [TCEC website](https://tcec.chessdom.com/) and on [Twitch](https://www.twitch.tv/tcec_chess_tv).
  * Lc0 also played at [[CCCC]] (https://www.chess.com/computer-chess-championship)
* [See recent test match games](http://lczero.org/matches) - Click on the first row, first column, then pick a game. These games are played between recent versions of the engine to measure progress. They are blitz games played with 800 playouts (around 1 second) per move.
* [See recent self-play training games](http://lczero.org/) - Scroll to "Active Users", pick someone, then pick a game. These games are how Lc0 trains herself. They are played with extra randomness turned on so it can discover new good (and bad) moves. This means the quality of these games is lower than the match games.

## Where can I find PGNs of played games?
```
Provided by:     Edosan
LC0 network ID:  240
Opponent:        Scorpio 2.8
```
Download link: http://s000.tinyupload.com/index.php?file_id=71717869477580896599

```
Provided by:     y_Sensei
LC0 version:     0.1-current version, TF version, cuDNN version
LC0 network ID:  13-current version
Opponent:        Stockfish 8 + 9, OpenTal 1.1, Rodent III 0.172
```
Download link: http://bit.ly/ys-chess

```
Provided by:     Edosan
LC0 network ID:  247 GPU v8 W/ TB
Opponent:        Houdini 6.03
```
Download link:https://lichess.org/BHgy4azy


