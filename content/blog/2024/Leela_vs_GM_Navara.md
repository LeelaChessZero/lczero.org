---
title: "Leela vs GM David Navara"
author: "Naphthalin"
published: 2024-03-26
---

We're excited to announce a knight odds exhibition match between Leela and [GM David Navara](https://en.wikipedia.org/wiki/David_Navara).

- Saturday March 30, [2-5pm UTC](<https://www.timeanddate.com/worldclock/fixedtime.html?msg=Knight+odds+exhibition+match+Lc0+-+GM+David+Navara&iso=20240330T14&ah=3>), 10 games.
- Match will be played on Lichess between the accounts [LeelaKnightOdds](<https://lichess.org/@/LeelaKnightOdds>) and [RealDavidNavara](<https://lichess.org/@/RealDavidNavara>).
- Leela is playing white, alternating between missing b1 and g1 knight.
- Initial time control is 5'+3", but might be adjusted upwards/downwards depending on the score.

<!--more-->

Our goals for the match are to:
1. let people know about our [odds bots](https://lczero.org/blog/2024/02/update-on-playing-with-piece-odds-against-lc0-on-lichess/#quality-of-life-update-direct-challenge-links-on-lichess) and that they are worthwhile opponents even for very strong players,
2. determine how much time a strong GM needs to have balanced chances at knight odds,
3. entertain the spectators with exciting and competitive games, and
4. find ways we might improve the bot's play in the future. 

For some context the most recent public knight odds matches were by Komodo against GM David Smerdon (April 2020) and Komodo Dragon against GM Anthony Wirig (July 2021), GM Eugene Perelshteyn, and GM Ben Finegold (January 2022). The games were played at 15'+10" and all GMs won, with scores Smerdon 5-1, Wirig 6-3, Perelshteyn 4-2 and Finegold 4-2. Even though GM Navara is substantially stronger, we anticipate a competitive fight due to the faster time control and Leela's considerably stronger odds play.

#### About GM David Navara

David Navara is the top ranked Czech chess grandmaster, having won 12 of the last 20 national championships. Awarded the title of FIDE Grand Master in 2002, he is currently number 65 in the [FIDE world ranking among active players](https://ratings.fide.com/profile/309095), with very consistent classical/rapid/blitz ratings (2669/2701/2688 Elo respectively).

#### LeelaKnightOdds configuration

The LeelaKnightOdds bot will be using a (very close to final) pre-release version of Lc0 v0.31.0, with the BT4 5.87M network. It will be running on windfishballad's 4&times;RTX4090 system and we'll use a node limit so at longer time controls, Leela will move a bit faster. The bot settings are not yet finalized, but currently we are running `Contempt` 200 at a `WDLCalibrationElo` of 3200, with a short book to provide variety.

