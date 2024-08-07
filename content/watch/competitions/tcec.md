---
title: "TCEC"
weight: 200
wikiname: "TCEC"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---
TCEC (Top Chess Engine Championship) is a computer chess tournament organized and maintained by Chessdom at https://tcec-chess.com/. This page documents Leela configuration in each of the "seasons" of this tournament.

# Season 26
| Division     |   Executable       |   Network   |  Placement |   Result   |                                                                                                              
| ------------ | ------------------ | ----------- | ---------- | ---------- | 
| Superfinal   | v0.31-dag-5350a2e  | BT4-6147500 |     2/2    |  43.0/100  |
| DivP         | v0.31-dag-5350a2e  | BT4-6147500 |     2/8    |  36.5/56   |

### Superfinal Results:
```
   # ENGINE                                 :  RATING  ERROR  CFS(%)    W    D    L   GAMES  DRAWS(%)
   1 Stockfish dev-20240513-e608eab8        :      49     49    97.5   31   52   17     100      52.0
   2 LCZero 0.31-dag-5350a2e-BT4-6147500    :       0   ----     ---   17   52   31     100      52.0
```
Games and additional data on TCEC website: https://tcec-chess.com/#div=sf&game=1&season=26
### LC0 hardware and settings (Superfinal):
* Hardware: 2x A100-PCIE-40GB + 2x Xeon 6230R (52 cores/104 threads)
* Parameter settings:
  * MoveOverheadMs=1000
  * StrictTiming=true
  * Backend=demux
  * BackendOptions=backend=cuda-fp16,(gpu=0,policy_head=optimistic,value_head=winner),(gpu=1,policy_head=optimistic,value_head=winner)
  * MinibatchSize=160
  * CPuct=2.897
  * CPuctFactor=3.973
  * CPuctBase=45669
  * FpuValue=0.984
  * PolicyTemperature=1.4
  * UseUncertaintyWeighting=true
  * UncertaintyWeightingCap=1.03
  * UncertaintyWeightingCoefficient=0.13
  * UncertaintyWeightingExponent=-1.76
  * SmartPruningFactor=2.0
  * SmartPruningMinimumBatches=300
  * MovesLeftSlope=0.0027
  * MovesLeftThreshold=0.8
  * TimeManager=legacy(book-ply-bonus=0.4,first-move-bonus=3.5)
  * Contempt=0
  * WDLDrawRateReference=0.64
  * WDLContemptAttenuation=0.55
  * WDLEvalObjectivity=0
  * WDLCalibrationElo=3600
  * MoveRuleBucketing=true
  * TaskWorkers=3
  * RamLimitMb=94500

# Season 25
| Division     |   Executable       |   Network   |  Placement |   Result   |                                                                                                              
| ------------ | ------------------ | ----------- | ---------- | ---------- | 
| Superfinal   | v0.31-dag-e429eeb  | BT3-2790000 |     2/2    |  48.0/100  |
| DivP Playoff | v0.31-dag-5107404  | T2-5230000  |     1/4    |  14.5/24   |
| DivP         | v0.31-dag-5107404  | T2-5230000  |     2/8    |  53.5/84   |

### Superfinal Results:
```
   # ENGINE                                 :  RATING  ERROR  CFS(%)    W    D    L   GAMES  DRAWS(%)
   1 Stockfish dev-20231010-00263636        :      14     49    71.3   27   50   23     100      50.0
   2 LCZero 0.31-dag-e429eeb-BT3-2790000    :       0   ----     ---   23   50   27     100      50.0
```
Games and additional data on TCEC website: https://tcec-chess.com/#div=sf&game=1&season=25
### LC0 hardware and settings (Superfinal):
* Hardware: 2x A100-PCIE-40GB + 2x Xeon 6230R (52 cores/104 threads)
* Parameter settings:
  * MoveOverheadMs=1000
  * StrictTiming=true
  * Backend=demux
  * BackendOptions=backend=cuda-fp16,(gpu=0,policy_head=optimistic,value_head=winner),(gpu=1,policy_head=optimistic,value_head=winner),multi_stream=true,threads=2
  * MinibatchSize=216
  * CPuct=2.897
  * CPuctFactor=3.973
  * CPuctBase=45669
  * FpuValue=0.984
  * PolicyTemperature=1.4
  * UncertaintyWeightingCap=1.03
  * UncertaintyWeightingCoefficient=0.13
  * UncertaintyWeightingExponent=-0.88
  * SmartPruningFactor=2.0
  * SmartPruningMinimumBatches=300
  * MovesLeftSlope=0.0027
  * MovesLeftThreshold=0.8
  * TimeManager=legacy(book-ply-bonus=0.4)
  * Contempt=0
  * WDLDrawRateReference=0.61
  * WDLContemptAttenuation=0.6
  * WDLEvalObjectivity=0
  * WDLCalibrationElo=3392
  * MoveRuleBucketing=true
  * TaskWorkers=3
  * RamLimitMb=94500

# Season 24
| Division     |   Executable       |   Network   |  Placement |   Result   |                                                                                                              
| ------------ | ------------------ | ----------- | ---------- | ---------- | 
| Superfinal   | v0.30-dag-a9b25c2b | BT2-3650000 |     2/2    |  48.0/100  |
| DivP Playoff | v0.30-dag-8092b376 | BT2-3650000 |     2/4    |  14.0/24   |
| DivP         | v0.30-dag-8092b376 | BT2-3650000 |     2/8    |  37.0/56   |

### Superfinal Results:
```
   # ENGINE                                  :  RATING  ERROR  CFS(%)    W    D    L   GAMES  DRAWS(%)
   1 Stockfish dev-20230409-b36d39de         :      14     49    71.3   20   64   16     100      64.0
   2 LCZero 0.30-dag-a9b25c2b-BT2-3650000    :       0   ----     ---   16   64   20     100      64.0
```
Games and additional data on TCEC website: https://tcec-chess.com/#div=sf&game=1&season=24
### LC0 hardware and settings (Superfinal):
* Hardware: 2x A100-PCIE-40GB + 2x Xeon 6230R (52 cores/104 threads)
* Non-default parameter settings:
  * MoveOverheadMs=1000
  * StrictTiming=true
  * Backend=demux
  * BackendOptions=backend=cuda-fp16,(gpu=0),(gpu=1)
  * MinibatchSize=216
  * CPuct=2.242
  * CPuctFactor=3.973
  * CPuctBase=45669
  * FpuValue=0.583
  * PolicyTemperature=1.406
  * SmartPruningFactor=2.0
  * SmartPruningMinimumBatches=300
  * MovesLeftSlope=0.0027
  * MovesLeftThreshold=0.8
  * TimeManager=legacy(book-ply-bonus=0.4)
  * TaskWorkers=3
  * WDLDrawRateReference=0.58
  * WDLContemptAttenuation=0.6
  * WDLEvalObjectivity=0
  * WDLCalibrationElo=3600
  * RamLimitMb=94500
* Added/Changed for Superfinal:
  * BackendOptions=backend=cuda-fp16,(gpu=0),(gpu=1),multi_stream=true,threads=2
  * Contempt=0
  * ScoreType=WDL_mu

# Season 23
| Division |   Executable      |    Network   |  Placement |   Result  |                                                                                                              
| -------- | ----------------- | ------------ | ---------- | --------- | 
| Superfinal     | v0.30-dag-9a9c42d |     784968   |     2/2    |  41.5/100  |
| DivP     | v0.30-dag-bord-lf |     784968   |     2/8    |  35.5/56  |

### Superfinal Results:
```
   # ENGINE                            :  RATING  ERROR  CFS(%)    W    D    L   GAMES  DRAWS(%)
   1 Stockfish dev16_20221027          :      60     42    99.7   27   63   10     100      63.0
   2 LCZero 0.30-dag-9a9c42d_784968    :       0   ----     ---   10   63   27     100      63.0
```
Games and additional data on TCEC website: https://tcec-chess.com/#div=sf&game=1&season=23
### LC0 hardware and settings (Superfinal):
* Hardware: 2x A100-PCIE-40GB + 2x Xeon 6230R (52 cores/104 threads)
* Non-default parameter settings:
  * MoveOverheadMs=1000
  * StrictTiming=true
  * Backend=demux
  * BackendOptions=backend=cuda-fp16,(gpu=0),(gpu=1)
  * MinibatchSize=192
  * MaxPrefetch=37
  * CPuct=1.589
  * CPuctFactor=3.973
  * CPuctBase=45669
  * FpuValue=0.2643
  * PolicyTemperature=1.179
  * SmartPruningFactor=2.0
  * SmartPruningMinimumBatches=300
  * RamLimitMb=94500

# Season 22
| Division |   Executable  |    Network   |  Placement |   Result  |                                                                                                              
| -------- | ------------- | ------------ | ---------- | --------- | 
| DivP     |  v0.29-dev+   |     781561   |     3/8    |  34/56  |

### LC0 hardware and settings (Superfinal):
* Hardware: 2x A100-PCIE-40GB + 2x Xeon 6230R (52 cores/104 threads)
* Non-default parameter settings:
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
  * SmartPruningFactor=2.0
  * SmartPruningMinimumBatches=300
  * TimeManager=legacy
  * RamLimitMb=96000

# Season 21
| Division |   Executable  |    Network   |  Placement |   Result  |                                                                                                              
| -------- | ------------- | ------------ | ---------- | --------- | 
| Superfinal     | v0.28-dev+    |     69626    |     2/2    |   44/100  |
| DivP     | v0.28.0-rc1   |     69146    |     2/8    |  36.5/56  |

### Superfinal Results:
```
   # ENGINE                       :  RATING  ERROR  CFS(%)    W    D    L   GAMES  DRAWS(%)
   1 Stockfish 14_202107131735    :      42     35    99.1   19   74    7     100      74.0
   2 LCZero 0.28-dev+_69626       :       0   ----     ---    7   74   19     100      74.0
```
Games and additional data on TCEC website: https://tcec-chess.com/#div=sf&game=1&season=21
### LC0 hardware and settings (Superfinal):
* Hardware: 4x V100 + Xeon 8163 CPU @ 2.50GHz, 32 vcores
* Non-default parameter settings:
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
* Added/Changed for Superfinal:
  * NNCacheSize=50000000
  * MovesLeftMaxEffect=0.02
  * MovesLeftSlope=0.002
  * RamLimitMb=96000
* Removed for Superfinal:
  * TimeManager=smooth(nps-update-rate=7.82)
  * DrawScoreSideToMove=-11
  * DrawScoreOpponent=5

# Season 20
| Division |    Executable      |     Network       |  Placement |   Result  |                                                                                                              
| -------- | ------------------ | ----------------- | ---------- | --------- | 
| Superfinal     | v0.27.0-dev PR1483 |     J94-100       |     2/2    |   47/100  |
| DivP     | v0.26.3            |      66740        |     1/8    |   38/56   |

### Superfinal Results:
```
   # ENGINE                                      :  RATING  ERROR  CFS(%)    W    D    L   GAMES  DRAWS(%)
   1 Stockfish 20210113                          :      21     33    89.6   14   78    8     100      78.0
   2 LCZero 0.27.0d-Tilps-dje-magic_JH.94-100    :       0   ----     ---    8   78   14     100      78.0
```
Games and additional data on TCEC website: https://tcec-chess.com/#div=sf&game=1&season=20
### LC0 hardware and settings (Superfinal):
* Hardware: 4x V100 + Xeon 8163 CPU @ 2.50GHz, 32 vcores
* Non-default parameter settings:
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
* Added/Changed for Superfinal:
  * NNCacheSize=50000000
  * RamLimitMb=96000

# Season 19
| Division | Executable  | Network           |  Placement | Result    |                                                                                                              
| -------- | ----------- |-------------------|  --------- | --------- | 
| Superfinal     | v0.26.3-rc1 | J92-190           |     2/2    | 45.5/100  |
| DivP     | v0.26.2-rc1 | J92-100           |     2/8    | 32.5/56   |

### Superfinal Results:
```
   # ENGINE                                    :  RATING  ERROR  CFS(%)    W    D    L   GAMES  DRAWS(%)
   1 Stockfish 202009282242_nn-baeb9ef2d183    :      32     36    95.8   18   73    9     100      73.0
   2 LCZero v0.26.3-rc1_T60.SV.JH.92-190       :       0   ----     ---    9   73   18     100      73.0
```
Games and additional data on TCEC website: https://tcec-chess.com/#div=sf&game=1&season=19
### LC0 hardware and settings (Superfinal):
* Hardware: 4x V100 + Xeon 8163 CPU @ 2.50GHz, 32 vcores
* Non-default parameter settings:
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
* Added/Changed for Superfinal:
  * BackendOptions=backend=cudnn-fp16,custom_winograd=true,res_block_fusing=true,(gpu=0),(gpu=1),(gpu=2),(gpu=3)
  * MovesLeftThreshold=0.0
  * MovesLeftSlope=0.004
  * MovesLeftQuadraticFactor=0.0
  * MovesLeftScaledFactor=1.0

# Season 18
| Division | Executable | Network           |  Placement | Result    |                                                                                                              
| -------- | ---------- |-------------------|  --------- | --------- | 
| Superfinal     | v0.25.1    |svjio-t60-3972-mlh |     2/2    | 46.5/100  |
| DivP     | v0.25.1    |sv-t60-3010        |     2/8    | 24.5/42   |

### Superfinal Results:
```
   # ENGINE                               :  RATING  ERROR  CFS(%)    W    D    L   GAMES  DRAWS(%)
   1 Stockfish 202006170741               :      25     43    86.7   23   61   16     100      61.0
   2 LCZero v0.25.1-svjio-t60-3972-mlh    :       0   ----     ---   16   61   23     100      61.0
```
Games and additional data on TCEC website: https://tcec-chess.com/#div=sf&game=1&season=18
### LC0 hardware and settings (Superfinal):
* Hardware: 4x V100 + Xeon 8163 CPU @ 2.50GHz, 32 vcores
* Non-default parameter settings:
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
* Added for Superfinal:
  * MovesLeftMaxEffect=0.2
  * MovesLeftThreshold=0.0
  * MovesLeftSlope=0.007
  * MovesLeftQuadraticFactor=0.0
  * MovesLeftScaledFactor=1.0
  * MovesLeftConstantFactor=0.0

# Season 17
| Division | Executable | Network           |  Placement | Result    |                                                                                                              
| -------- | ---------- |-------------------|  --------- | --------- | 
| Superfinal     | v0.24      |  sv-t60-3010      |     1/2    | 52.5/100  |
| DivP     | v0.24      |  sv-t60-3010      |     1/10   | 22/36     |

### Superfinal Results:
```
   # ENGINE                      :  RATING  ERROR  CFS(%)    W    D    L   GAMES  DRAWS(%)
   1 LCZero v0.24-sv-t60-3010    :       0   ----    81.8   17   71   12     100      71.0
   2 Stockfish 20200407DC        :     -18     38     ---   12   71   17     100      71.0
```
Games and additional data on TCEC website: https://tcec-chess.com/#div=sf&game=1&season=17
### LC0 hardware and settings (Superfinal):
* Hardware: 4 x NVIDIA RTX 2080 ti + 2x Intel Xeon E5-2630V4 2.2 GHz (20 cores / 40 ht)
* Non-default parameter settings:
  * MoveOverheadMs=1000
  * Backend=demux
  * BackendOptions=backend=cudnn-fp16,(gpu=0),(gpu=1),(gpu=2),(gpu=3)
  * NNCacheSize=20000000
  * MinibatchSize=352
  * MaxPrefetch=160
  * CPuct=2.147
  * CPuctAtRoot=2.147
  * CPuctBase=18368
  * FpuValue=0.443
  * CPuctFactor=2.815
  * PolicyTemperature=1.607
  * MaxCollisionEvents=160
  * MaxOutOfOrderEvalsFactor=2.0
  * SmartPruningMinimumBatches=160
* Added for Superfinal:
  * MinibatchSize=176
  * MaxCollisionEvents=917
  * MaxOutOfOrderEvalsFactor=2.4

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
