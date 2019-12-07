---
title: "TCEC S13 Issues"
wikiname: "TCEC-S13-Issues.md"
---
For TCEC Season 13, division 3, LC0 performed much worse than expected. This page summarizes the issues:

* TCEC server performance
  * TCEC server is getting less NPS than expected. We expect ~26K from startpos, but only get 22K (source: jjosh in Discord).
  * In div4, TCEC GPUs were overheating. For div3 fans were set to 100%, but GPUs still overheat, and we still observe lower than expected NPS. 
  * Some time around div3, Game 80, scs-ben used afterburner to limit the power to GPUs to 65% on one and 85% on the other. The idea is to prevent overheating which would cause performance to get even worse. Also running at a slower but constant speed may be better due do the way Time management works (needs a steady NPS). Results were much better after this workaround.
* Time management settings seem to have lc0 play too quickly in the opening.
* While investigating differences between TCEC build and v0.16 build, crem found a [bug](https://github.com/LeelaChessZero/lc0/pull/260). It doesn't seem likely this bug can explain what is going on though.

Quote from mps19 2018-08-16 at 5:17 PM. lc0_tcec shows 6 elo regression from lc0 v0.16 against AB engines instead of improvement found in self play.
```I've run a lot of STC games between a selection of top AB engines and Leela nets
TC: 30+1 seconds
Machine: 8 core Xeon 2.2 GHz with P100 GPU
Leela ratio: 0.78
Book: Perfect2017, 8 ply, No TB
Result computed with ordo, where AB programs are given its CCRL 40/40 ratings with error bars
   # PLAYER            :  RATING  ERROR  POINTS  PLAYED   (%)  CFS(%)
   1 Stockfish 9       :    3457     28    96.5     136  71.0      99
   2 lc0 10583         :    3401     45    89.0     146  61.0      62
   3 Stockfish 8       :    3394     23   110.0     182  60.4      65
   4 lc0 10663         :    3385     42    54.5     102  53.4      58
   5 lc0 10520         :    3380     37   119.5     202  59.2      57
   6 lc0_tcec 10520    :    3376     52    58.5     100  58.5      99
   7 lc0 594           :    3295     46    61.0     132  46.2      85
   8 Ethereal 10.55    :    3270     40    63.0     150  42.0      57
   9 Stockfish 5       :    3266     27    53.0     126  42.1      63
  10 Ethereal 10.81    :    3259     39    69.0     168  41.1      52
  11 Andscacs 0.94     :    3258     43    55.5     132  42.0      61
  12 lc0 10161         :    3252     37    75.5     186  40.6      99
  13 Laser 1.6         :    3199     35    39.0     126  31.0     ---
I've watched these rating numbers over time, and I'm pretty sure that given the conditions, these are fairly accurate
The lc0_tcec entry uses the latest binary built from master and uses TCEC time management settings. All other lc0 entries uses 0.16 binary and default config.
```

Other pages:
* [[TCEC]]
* [[CLOP-tuning]]