---
title: "CCCC"
weight: 500
wikiname: "CCCC"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---
The Chess.com Computer Chess Championship (CCCC) is continuously running computer chess events and is maintained by Chess.com at https://www.chess.com/computer-chess-championship.

# CCC 17 Blitz: Finals
|    Executable      |     Network       |  Placement |   Result  |                                                                                                              
| ------------------ | ----------------- | ---------- | --------- | 
|     v0.30.0-dev dag-bord (5e84a3) |     784038       |     2/2    | 192/480 |

### Finals Ordo evaluation:
```
   # ENGINE       :  RATING  ERROR  CFS(%)    W    D    L   GAMES  DRAWS(%)
   1 Stockfish    :      71     22   100.0  134  308   38     480      64.2
   2 Lc0          :       0   ----     ---   38  308  134     480      64.2
```
### LC0 hardware and settings:
* Hardware: 2x A100, 2x AMD EPYC 7H12, 256 cores (128 physical)
* Non-default parameters:
  * Backend=demux
  * BackendOptions=backend=cuda-fp16,(gpu=0),(gpu=1)
  * MinibatchSize=384
  * MaxPrefetch=37
  * NNCacheSize=20000000
  * CPuct=1.988
  * CPuctBase=45669
  * CPuctFactor=3.973
  * FpuValue=0.290
  * PolicyTemperature=1.186
  * SmartPruningFactor=2.0
  * SmartPruningMinimumBatches=300
  * StrictTiming=true

# CCC Rapid 2021: Finals
|    Executable      |     Network       |  Placement |   Result  |                                                                                                              
| ------------------ | ----------------- | ---------- | --------- | 
|     v0.27.0-rc1    |     J94-100       |     2/2    | 219.5/500 |

### Finals Ordo evaluation:
```
   # ENGINE       :  RATING  ERROR  CFS(%)    W    D    L   GAMES  DRAWS(%)
   1 Stockfish    :      43     22   100.0  122  317   61     500      63.4
   2 Lc0          :       0   ----     ---   61  317  122     500      63.4
```
### LC0 hardware and settings:
* Hardware: 2x A100, 2x AMD EPYC 7H12, 256 cores (128 physical)
* Non-default parameters:
  * Backend=demux
  * BackendOptions=backend=cuda-fp16,res_block_fusing=true,(gpu=0),(gpu=1)
  * MinibatchSize=192
  * MaxPrefetch=48
  * MultiGather=true
  * MaxCollisionEvents=917
  * MaxCollisionVisits=1000
  * MaxOutOfOrderEvalsFactor=2.4
  * NNCacheSize=20000000
  * SmartPruningMinimumBatches=100
  * TimeManager=legacy(steepness=4.0)
  * MoveOverheadMs=1000
  * StrictTiming=true