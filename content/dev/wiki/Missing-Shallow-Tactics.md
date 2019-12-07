---
title: "Missing Shallow Tactics"
wikiname: "Missing-Shallow-Tactics.md"
---
Leela Chess is known to miss relatively shallow tactics in relation to the high level of play.
The below is a rough draft explaining how the search works and why it misses shallow tactics.

![](https://lh3.googleusercontent.com/-jjabwY3TuPQ/Wut0w08U77I/AAAAAAAAFfQ/LVkypb1wAg8jh2TtKhhHpABoTh0sAZliACLcBGAs/s1600/screenshot_20180503_224158.jpg)

`Qxh7+ -> 2 (V: 31.72%) (N: 0.34%) PV: Qxh7+ Kxh7 hxg6+`

The "2" means it searched Qxh7+ twice. First it evaluated `Qxh7+`, then it evaluated `Qxh7+ Kxh7`. But the PV shown is always one move deeper than the network has evaluated, so it hasn't evaluated `Qxh7+ Kxh7 hxg6#`. The extra last move in the PV just shows what the highest probability next move is.

Even when it does evaluate that move, it will score 100%, but that will be averaged in with the previous 32.72% score (`1*1 + 0.3172*2)/3 = 54.48%`).

See also [leela search methods](https://github.com/glinscott/leela-chess/wiki/FAQ#leelas-search-methods)


