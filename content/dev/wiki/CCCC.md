---
title: "CCCC"
weight: 500
wikiname: "CCCC"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---
The Chess.com Computer Chess Championship (CCCC) is continuously running computer chess events and is maintained by Chess.com at https://www.chess.com/computer-chess-championship.

# CCC Rapid 2021: Finals
|    Executable      |     Network       |  Placement |   Result  |                                                                                                              
| ------------------ | ----------------- | ---------- | --------- | 
|     v0.27.0-rc1    |     J94-100       |     2/2    | 280.5/500 |

### Finals Ordo evaluation:
```
   # ENGINE       :  RATING  ERROR  CFS(%)    W    D    L   GAMES  DRAWS(%)
   1 Stockfish    :    49.3   17.3   100.0  122  317   61     500      63.4
   2 Lc0          :     0.0   ----     ---   61  317  122     500      63.4

White advantage = 132.2 +/- 8.9
Draw rate (equal opponents) = 88.6 % +/- 3.7
```
### LC0 hardware and settings:
* Hardware: 2x A100, 2x AMD EPYC 7H12, 256 cores (128 physical)
* Non-default parameters:
  * MoveOverheadMs=1000
  * StrictTiming=true
  * Backend=demux
  * BackendOptions=backend=cuda-fp16,res_block_fusing=true,(gpu=0),(gpu=1)
  * NNCacheSize=20000000
  * MinibatchSize=192
  * MaxPrefetch=48
  * MultiGather=true
  * MaxCollisionEvents=917
  * MaxCollisionVisits=1000
  * MaxOutOfOrderEvalsFactor=2.4
  * SmartPruningMinimumBatches=100
  * TimeManager=legacy(steepness=4.0)