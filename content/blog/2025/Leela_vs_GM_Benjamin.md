---
title: "Leela vs GM Joel Benjamin"
author: "Naphthalin"
published: 2025-01-24
---

We're excited to announce the very first knight odds exhibition match at classical time control! Happening January 25th to 27th on Lichess with GM Joel Benjamin.

<!--more-->

From 25th to 27th of January, [LeelaKnightOdds](<https://lichess.org/@/LeelaKnightOdds>) will play 8 knight odds games at 60'+30" with [GM Joel Benjamin](<https://en.wikipedia.org/wiki/Joel_Benjamin>).

- First game will start at 5pm UTC on Saturday Jan 25, the full schedule can be found on the [Lichess event page](<https://lichess.org/broadcast/leela-knight-odds-vs-gm-joel-benjamin/game-1/vzQHuqnK>)
- 3 games on Saturday and Sunday, 2 games on Monday
- Match will be played on Lichess between the accounts [LeelaKnightOdds](<https://lichess.org/@/LeelaKnightOdds>) and [SuperEasy](<https://lichess.org/@/SuperEasy>).
- Leela is playing white, alternating between missing b1 and g1 knight.
- Time control is 60'+30" for GM Benjamin, while Leela plays almost instantly due to the node limit.

In 2024, we already had two exciting knight odds matches with elite grandmasters at fast time controls. The first one in [March 2024](https://lczero.org/blog/2024/03/leela-vs-gm-david-navara/) had GM David Navara playing against the first version of LeelaKnightOdds, using a strong regular Leela net with Contempt. The match ended with a convincing score of +6 -2 =2 in Navara's favour, with a score of +4 -1 =1 in the 3'+2" portion of the match. The second one in [December 2024](https://lczero.org/blog/2024/12/leela-vs-gm-awonder-liang/) was against the almost identically rated GM Awonder Liang, now using a [specialized odds network](https://lczero.org/blog/2024/11/fine-tuning-lc0-network-for-odds-games/). The final score was +1 -6 =7 from Liang's perspective, with a score of +0 =4 -6 in the 3'+2" section. Following the exhibition match, other top grandmasters tried as well especially at 3'+2", with similar results.

While this demonstrates the tremendous improvement LeelaKnightOdds saw from switching to a specialized odds network, it emphasizes the necessity for longer time controls even for strong players to remain competitive with LeelaKnightOdds. This results in an enormous increase in the commitment necessary for future matches, which is why we want to express our highest gratitude to GM Joel Benjamin for agreeing on an 8 game match at classical time control played over the span of 3 days. Thanks to his help, we will be able to observe how interesting and complicated Leela can keep games starting down a knight when playing at classical time control against an opponent at the level required to become a grandmaster.


#### About GM Joel Benjamin

GM Joel Benjamin is a former multiple US national champion and currently listed with a FIDE rating of 2473, with a peak rating of 2620. More relevant for the upcoming match however is his involvement with chess engines spanning back literally to the beginning of chess engines reaching and surpassing the level of the strongest human players, when he was the official GM consultant for IBM in the 1997 rematch of Deep Blue versus Kasparov. Since this marks the first ever overall win of a chess engine over a top human player in a classical match, GM Benjamin playing a classical match against Leela has an additional symbolic significance on top of his experience from [previous odds matches against Komodo](<https://www.chess.com/news/view/komodo-coasts-to-victory-over-benjamin-9464>).


#### LeelaKnightOdds configuration

The LeelaKnightOdds bot will be using the latest version of the specialized odds network trained both for knight and for rook odds which is used since the [knight odds blitz match with GM Awonder Liang](https://lczero.org/blog/2024/12/leela-vs-gm-awonder-liang) in December 2024. It will search 20000 nodes per move, and use the opening book curated by GM Larry Kaufman based on the preferences of the odds net and the performance against human players.
