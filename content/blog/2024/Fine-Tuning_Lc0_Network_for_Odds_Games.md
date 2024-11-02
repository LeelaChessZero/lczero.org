---
title: "Fine-Tuning Lc0 Network for Odds Games"
author: "Marcogio9"
published: 2024-11-02
---

For more than 20 years, human vs engine matches have become too one-sided to be interesting for spectators and players. This however isn't the case with odds, 
<!--more-->

#### A New Era for Odds Games: Specializing Lc0 for Piece Odds

Over the last few months, [LeelaKnightOdds](https://lichess.org/@/LeelaKnightOdds) has seen a substantial strength gain, thanks to the fine-tuning of Lc0 networks for specific odds scenarios using knight odds games between [the original configuration with Contempt]({{< relref "../2023/knight_odds.md" >}}) and an opponent engine emulating strong human play. Our focus has primarily been on gaining performance and playing better openings in knight odds, but we expect that the capabilities of these specialized networks extend to all four featured piece odds bots on Lichess: [LeelaKnightOdds](https://lichess.org/@/LeelaKnightOdds), [LeelaRookOdds](https://lichess.org/@/LeelaRookOdds), [LeelaQueenForKnight](https://lichess.org/@/LeelaQueenForKnight), and [LeelaQueenOdds](https://lichess.org/@/LeelaQueenOdds), now all using the spezialized piece odds network.

In the initial stage, this dedicated network has been operating under the [LeelaKnightOdds-dev[^1]](https://lichess.org/@/LeelaKnightOdds-dev) account, quickly capturing the attention of the chess community[^2] due to its superior performance and generally engaging and spectacular playing style even while we were still on the search for the strongest configuration.

#### The Ultimate Test: Challenging Grandmasters to Knight Odds Games

The effectiveness of this approach was demonstrated in an (inofficial match on Lichess)[https://lichess.org/2aaJZCqd] against [GM Aleksandr Lenderman](https://ratings.fide.com/profile/2021285), consisting of 18 games played at a time control of 15'+10", where the specialized network achieved an impressive score of +14, =2, -2, indicating an important milestone as no Grandmaster has ever been defeated in an official match under knight odds at this time control, with the best result so far being the combined +3, =8, -10 performance of Komodo Dragon in its 3 matches against Grandmasters.

These specialized networks are still under development and therefore not yet publicly available. As development continues, we are actively seeking strong Grandmasters to challenge the network at knight odds, pushing its limits and helping us better understand what constitutes a fair opponent.

[^1]: This account stopped accepting challenges starting October 31, 2024, as the new network has been integrated into the featured bot, [LeelaKnightOdds](https://lichess.org/@/LeelaKnightOdds).

[^2]: You can find a live-commented video series and analysis of selected games on the (ChessNetwork)[https://www.youtube.com/@ChessNetwork/] and (Silicon Road)[https://www.youtube.com/@SiliconRoadChess] YouTube channels.
