---
title: "TCEC"
weight: 200
wikiname: "TCEC"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---
TCEC (Top Chess Engine Championship) is a computer chess tournament organized and maintained by Chessdom at https://tcec-chess.com/. This page documents Leela configuration in each of the "seasons" of this tournament.

# Season 22
| Division |   Executable  |    Network   |  Placement |   Result  |                                                                                                              
| -------- | ------------- | ------------ | ---------- | --------- | 
| DivP     |  v0.29-dev+   |     781561   |     3/8    |  34/56  |

### LC0 hardware and settings:
* Hardware: 2x A100-PCIE-40GB + 2x Xeon 6230R (52 cores/104 threads)
* Non-default parameters:
  * MoveOverheadMs=1000
  * StrictTiming=true
  * Backend=demux
  * BackendOptions=backend=cuda-fp16,multi_stream=true,threads=2,(gpu=0),(gpu=1)
  * NNCacheSize=50000000
  * MinibatchSize=384
  * MaxPrefetch=37
  * CPuct=1.939
  * CPuctFactor=3.973
  * CPuctBase=45669
  * FpuValue=0.3229
  * PolicyTemperature=1.156
  * SmartPruningFactor=2
  * SmartPruningMinimumBatches=300
  * TimeManager=legacy
  * RamLimitMb=96000

# Season 21
| Division |   Executable  |    Network   |  Placement |   Result  |                                                                                                              
| -------- | ------------- | ------------ | ---------- | --------- | 
| SuFi     | v0.28-dev+    |     69626    |     2/2    |   44/100  |
| DivP     | v0.28.0-rc1   |     69146    |     2/8    |  36.5/56  |

### SuFi Results:
```
   # ENGINE                       :  RATING  ERROR  CFS(%)    W    D    L   GAMES  DRAWS(%)
   1 Stockfish 14_202107131735    :      42     50    95.3   19   74    7     100      74.0
   2 LCZero 0.28-dev+_69626       :       0   ----     ---    7   74   19     100      74.0
```
### LC0 hardware and settings:
* Hardware: 4x V100 + Xeon 8163 CPU @ 2.50GHz, 32 vcores
* Non-default parameters:
  * MoveOverheadMs=1000
  * StrictTiming=true
  * Backend=demux
  * BackendOptions=backend=cuda-fp16,res_block_fusing=true,(gpu=0),(gpu=1),(gpu=2),(gpu=3)
  * NNCacheSize=50000000
  * MinibatchSize=896
  * MaxPrefetch=160
  * SmartPruningQEffect=0.2
  * SmartPruningMinimumBatches=300
  * MovesLeftMaxEffect=0.1
  * MovesLeftSlope=0.0088
  * TimeManager=smooth(midpoint=45.2,steepness=5.93,init-tree-reuse=0.52,max-tree-reuse=0.73,tree-reuse-update-rate=3.39,nps-update-rate=7.82,init-timeuse=0.7,min-timeuse=0.34,timeuse-update-rate=5.51,max-move-budget=0.42,init-piggybank=0.09,per-move-piggybank=0.12,max-piggybank-use=0.94,max-piggybank-moves=36.5)
  * DrawScoreSideToMove=-11
  * DrawScoreOpponent=5
  * RamLimitMb=48000
* Added/Changed for SuFi:
  * NNCacheSize=50000000
  * MovesLeftMaxEffect=0.02
  * MovesLeftSlope=0.002
  * RamLimitMb=96000
* Removed for SuFi:
  * TimeManager=smooth(nps-update-rate=7.82)
  * DrawScoreSideToMove=-11
  * DrawScoreOpponent=5

# Season 20
| Division |    Executable      |     Network       |  Placement |   Result  |                                                                                                              
| -------- | ------------------ | ----------------- | ---------- | --------- | 
| SuFi     | v0.27.0-dev PR1483 |     J94-100       |     2/2    |   47/100  |
| DivP     | v0.26.3            |      66740        |     1/8    |   38/56   |

### SuFi Results:
```
   # ENGINE                                      :  RATING  ERROR  CFS(%)    W    D    L   GAMES  DRAWS(%)
   1 Stockfish 20210113                          :      21     49    79.8   14   78    8     100      78.0
   2 LCZero 0.27.0d-Tilps-dje-magic_JH.94-100    :       0   ----     ---    8   78   14     100      78.0
```
### LC0 hardware and settings:
* Hardware: 4x V100 + Xeon 8163 CPU @ 2.50GHz, 32 vcores
* Non-default parameters:
  * MoveOverheadMs=1000
  * StrictTiming=true
  * Backend=demux
  * BackendOptions=backend=cuda-fp16,res_block_fusing=true,(gpu=0),(gpu=1),(gpu=2),(gpu=3)
  * NNCacheSize=20000000
  * MinibatchSize=320
  * MaxPrefetch=160
  * MaxCollisionEvents=917
  * MaxOutOfOrderEvalsFactor=2.4
  * SmartPruningMinimumBatches=300
  * RootHasOwnCpuctParams=false
  * CPuct=1.745
  * CPuctBase=38739
  * FpuValue=0.330
  * CPuctFactor=3.894
  * PolicyTemperature=1.359
  * MovesLeftMaxEffect=0.2
  * MovesLeftThreshold=0.0
  * MovesLeftSlope=0.004
  * MovesLeftQuadraticFactor=0.0
  * MovesLeftScaledFactor=1.0
  * TimeManager=legacy(steepness=4.0)
* Added/Changed for SuFi:
  * NNCacheSize=50000000
  * RamLimitMb=96000

# Season 19
| Division | Executable  | Network           |  Placement | Result    |                                                                                                              
| -------- | ----------- |-------------------|  --------- | --------- | 
| SuFi     | v0.26.3-rc1 | J92-190           |     2/2    | 45.5/100  |
| DivP     | v0.26.2-rc1 | J92-100           |     2/8    | 32.5/56   |

### SuFi Results:
```
   # ENGINE                                    :  RATING  ERROR  CFS(%)    W    D    L   GAMES  DRAWS(%)
   1 Stockfish 202009282242_nn-baeb9ef2d183    :      32     49    89.7   18   73    9     100      73.0
   2 LCZero v0.26.3-rc1_T60.SV.JH.92-190       :       0   ----     ---    9   73   18     100      73.0
```
### LC0 hardware and settings:
* Hardware: 4x V100 + Xeon 8163 CPU @ 2.50GHz, 32 vcores
* Non-default parameters:
  * MoveOverheadMs=1000
  * StrictTiming=true
  * Backend=demux
  * BackendOptions=backend=cudnn-fp16,custom_winograd=true,(gpu=0),(gpu=1),(gpu=2),(gpu=3)
  * NNCacheSize=20000000
  * MinibatchSize=320
  * MaxPrefetch=160
  * MaxCollisionEvents=917
  * MaxOutOfOrderEvalsFactor=2.4
  * SmartPruningMinimumBatches=600
  * MovesLeftMaxEffect=0.2
  * MovesLeftThreshold=0.862976
  * MovesLeftSlope=0.0004
* Added/Changed for SuFi:
  * BackendOptions=backend=cudnn-fp16,custom_winograd=true,res_block_fusing=true,(gpu=0),(gpu=1),(gpu=2),(gpu=3)
  * MovesLeftThreshold=0.0
  * MovesLeftSlope=0.004
  * MovesLeftQuadraticFactor=0.0
  * MovesLeftScaledFactor=1.0

# Season 18
| Division | Executable | Network           |  Placement | Result    |                                                                                                              
| -------- | ---------- |-------------------|  --------- | --------- | 
| SuFi     | v0.25.1    |svjio-t60-3972-mlh |     2/2    | 46.5/100  |
| DivP     | v0.25.1    |sv-t60-3010        |     2/8    | 24.5/42   |

### SuFi Results:
```
   # ENGINE                               :  RATING  ERROR  CFS(%)    W    D    L   GAMES  DRAWS(%)
   1 Stockfish 202006170741               :      25     49    83.6   23   61   16     100      61.0
   2 LCZero v0.25.1-svjio-t60-3972-mlh    :       0   ----     ---   16   61   23     100      61.0
```
### LC0 hardware and settings:
* Hardware: 4x V100 + Xeon 8163 CPU @ 2.50GHz, 32 vcores
* Non-default parameters:
  * MoveOverheadMs=1000
  * StrictTiming=true
  * Backend=demux
  * BackendOptions=backend=cudnn-fp16,custom_winograd=true,(gpu=0),(gpu=1),(gpu=2),(gpu=3)
  * NNCacheSize=20000000
  * MinibatchSize=320
  * MaxPrefetch=160
  * MaxCollisionEvents=917
  * MaxOutOfOrderEvalsFactor=2.4
  * SmartPruningMinimumBatches=600
* Added for SuFi:
  * MovesLeftMaxEffect=0.2
  * MovesLeftThreshold=0.0
  * MovesLeftSlope=0.007
  * MovesLeftQuadraticFactor=0.0
  * MovesLeftScaledFactor=1.0
  * MovesLeftConstantFactor=0.0

# Season 13
| Division | Executable               | Network     | Placement | Result    |                                                                                                              
| -------- | --------------------------------------------------------------------------- |-----| ------- | ------ | 
| Div4     | lc0 "v0.16.1" ([b1301aa9](https://github.com/LeelaChessZero/lc0/commit/b1301aa9a9be0c5f62aac8279ca5fb627c365f6f)) |10161|1st place| 22.0/28|
| Div3     | lc0 "v0.16.1" ([b1301aa9](https://github.com/LeelaChessZero/lc0/commit/b1301aa9a9be0c5f62aac8279ca5fb627c365f6f)) |10520|3rd place| 16.0/28|

* Hardware: TCEC GPU server has 2x GTX 1080 ti. Full specs [here](http://www.chessdom.com/tcec-season-13-the-advance-of-the-nns)
* Command line: `lc0 -w 10161 -t 4 --minibatch-size=512 --backend=multiplexing "--backend-opts=(backend=cudnn,gpu=0),(backend=cudnn,gpu=1)" --nncache=2000000 -l lc0debug.txt`
* UCI: `Move time overhead in milliseconds=2000`
  * Div3 added: `Time weight curve peak ply=37; Aggressive smart pruning threshold=0.604; Scale thinking time=3.05;`

TCEC "v0.16.1" binary from [appveyor](https://ci.appveyor.com/project/LeelaChessZero/lc0/build/317/job/2jeyneauuvuj0c25/artifacts)

[[TCEC S13 issues]]

# Bonus games 7-10-2018
* Net IDs: kb3 and id481
* Hardware: TheAnswer volunteered 2x1080 ti via ssh access.
* Command line: `./lc0 -w [kb3|id481] --backend=multiplexing '--backend-opts=a(backend=cudnn,threads=2,gpu=0),b(backend=cudnn,threads=2,gpu=1)' -t 4` (kb1 and default respectively with increased move overhead to help with latency). 

# Season 12
* Versions
  * Div4: lczero v0.10, ID125 - +0 -25 =2 (and 1 win by forfeit)
* Hardware: TCEC CPU server 2 x 8 core Intel Xeon E5-2689 @ 3300 MHz
* Command line: `lczero -w id125 ....?`
