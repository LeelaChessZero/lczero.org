---
title: "TCEC"
weight: 200
wikiname: "TCEC"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---
TCEC (Top Chess Engine Championship) is a computer chess tournament organized and maintained by Chessdom at https://tcec-chess.com/. This page documents Leela configuration in each of the "seasons" of this tournament.

# Season 20
| Division |    Executable      |     Network       |  Placement |   Result  |                                                                                                              
| -------- | ------------------ | ----------------- | ---------- | --------- | 
| SuFi     | v0.27.0-dev PR1483 |     J94-100       |     2/2    |   47/100  |
| DivP     | v0.26.3            |      66740        |     1/8    |   38/56   |

### SuFi Ordo evaluation:
```
   # ENGINE                                      :  RATING  ERROR  CFS(%)    W    D    L   GAMES
   1 Stockfish 20210113                          :      21     49    79.8   14   78    8     100
   2 LCZero 0.27.0d-Tilps-dje-magic_JH.94-100    :       0   ----     ---    8   78   14     100
```
### DivP Ordo evaluation:
```
   # ENGINE                              :  RATING  ERROR  CFS(%)    W    D    L   GAMES
   1 Stockfish 20201225                  :       0     93    50.0   24   28    4      56
   2 LCZero v0.26.3_T60.66740            :       0   ----    91.8   24   28    4      56
   3 KomodoDragon 2647.00                :     -68     95    65.0   20   25   11      56
   4 AllieStein v0.8-120f959_net-15.0    :     -86     94    84.5   15   32    9      56
   5 Stoofvlees II a16                   :    -133     96    93.9   15   24   17      56
   6 ScorpioNN 3.0.11                    :    -204     93    64.9    4   34   18      56
   7 Ethereal TCEC S20 DivP              :    -223    101    73.7    6   27   23      56
   8 rofChade 2.309                      :    -255    101     ---    4   26   26      56

Individual statistics:
2) LCZero v0.26.3_T60.66740            0 :     56 (+24,=28,-4),  67.9 %
   vs.                                    :  games (  +,  =, -),   (%) :   Diff,   SD, CFS (%)
   Stockfish 20201225                     :      8 (  2,  4, 2),  50.0 :     -0,   47,   50.0
   KomodoDragon 2647.00                   :      8 (  4,  3, 1),  68.8 :    +68,   49,   91.8
   AllieStein v0.8-120f959_net-15.0       :      8 (  3,  5, 0),  68.8 :    +86,   48,   96.3
   Stoofvlees II a16                      :      8 (  4,  4, 0),  75.0 :   +133,   49,   99.7
   ScorpioNN 3.0.11                       :      8 (  4,  4, 0),  75.0 :   +204,   48,  100.0
   Ethereal TCEC S20 DivP                 :      8 (  3,  5, 0),  68.8 :   +223,   51,  100.0
   rofChade 2.309                         :      8 (  4,  3, 1),  68.8 :   +255,   52,  100.0
```
### LC0 hardware and settings:
* Hardware: 4x V100 + Xeon 8163 CPU @ 2.50GHz, 32 vcores
* Non-default parameters:
  * MoveOverheadMs=1000
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

### SuFi Ordo evaluation:
```
   # ENGINE                                    :  RATING  ERROR  CFS(%)    W    D    L   GAMES
   1 Stockfish 202009282242_nn-baeb9ef2d183    :      32     49    89.7   18   73    9     100
   2 LCZero v0.26.3-rc1_T60.SV.JH.92-190       :       0   ----     ---    9   73   18     100
```
### DivP Ordo evaluation:
```
   # ENGINE                                    :  RATING  ERROR  CFS(%)    W    D    L   GAMES
   1 Stockfish 202008260719_nn-82215d0fd0df    :      23     89    69.2   14   41    1      56
   2 LCZero v0.26.2-rc1_J92-100                :       0   ----    80.2   10   45    1      56
   3 AllieStein v0.8-120f959_net-15.0          :     -39     90    68.4    3   52    1      56
   4 Stoofvlees II a14                         :     -61     92    54.8    4   46    6      56
   5 Komodo 2576.00                            :     -67     92    59.5    4   45    7      56
   6 ScorpioNN 3.0.8.3                         :     -78     90    54.9    2   47    7      56
   7 Fire 8_beta                               :     -84     89    60.3    2   46    8      56
   8 Ethereal 12.43                            :     -95     86     ---    2   44   10      56

Individual statistics:
2) LCZero v0.26.2-rc1_J92-100               0 :     56 (+10,=45,-1),  58.0 %
   vs.                                          :  games (  +,  =, -),   (%) :   Diff,   SD, CFS (%)
   Stockfish 202008260719_nn-82215d0fd0df       :      8 (  0,  7, 1),  43.8 :    -23,   46,   30.8
   AllieStein v0.8-120f959_net-15.0             :      8 (  0,  8, 0),  50.0 :    +39,   46,   80.2
   Stoofvlees II a14                            :      8 (  1,  7, 0),  56.2 :    +61,   47,   90.4
   Komodo 2576.00                               :      8 (  1,  7, 0),  56.2 :    +67,   47,   92.3
   ScorpioNN 3.0.8.3                            :      8 (  3,  5, 0),  68.8 :    +78,   46,   95.6
   Fire 8_beta                                  :      8 (  1,  7, 0),  56.2 :    +84,   45,   96.7
   Ethereal 12.43                               :      8 (  4,  4, 0),  75.0 :    +95,   44,   98.5
```
### LC0 hardware and settings:
* Hardware: 4x V100 + Xeon 8163 CPU @ 2.50GHz, 32 vcores
* Non-default parameters:
  * MoveOverheadMs=1000
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

### SuFi Ordo evaluation:
```
   # ENGINE                               :  RATING  ERROR  CFS(%)    W    D    L   GAMES
   1 Stockfish 202006170741               :      25     49    83.6   23   61   16     100
   2 LCZero v0.25.1-svjio-t60-3972-mlh    :       0   ----     ---   16   61   23     100
```
### DivP Ordo evaluation:
```
   # ENGINE                          :  RATING  ERROR  CFS(%)    W    D    L   GAMES
   1 Stockfish 202005232210          :      15    106    61.1    9   33    0      42
   2 LCZero v0.25.1-sv-t60-3010      :       0   ----    61.2    7   35    0      42
   3 AllieStein v0.7_dev-net_14.3    :     -15    105    55.8    7   33    2      42
   4 Stoofvlees II a14               :     -23    107    71.9    7   32    3      42
   5 Komodo 2551.00                  :     -53    105    71.5    4   34    4      42
   6 Ethereal 12.19                  :     -83    104    80.3    0   38    4      42
   7 rofChade 2.303                  :    -129    107    56.0    1   30   11      42
   8 Fire 8_beta                     :    -136    103     ---    0   31   11      42

Individual statistics:
2) LCZero v0.25.1-sv-t60-3010      0 :     42 (+7,=35,-0),  58.3 %
   vs.                                :  games ( +,  =, -),   (%) :   Diff,   SD, CFS (%)
   Stockfish 202005232210             :      6 ( 0,  6, 0),  50.0 :    -15,   54,   38.9
   AllieStein v0.7_dev-net_14.3       :      6 ( 0,  6, 0),  50.0 :    +15,   53,   61.2
   Stoofvlees II a14                  :      6 ( 1,  5, 0),  58.3 :    +23,   55,   66.1
   Komodo 2551.00                     :      6 ( 1,  5, 0),  58.3 :    +53,   54,   83.7
   Ethereal 12.19                     :      6 ( 2,  4, 0),  66.7 :    +83,   53,   94.0
   rofChade 2.303                     :      6 ( 2,  4, 0),  66.7 :   +129,   54,   99.1
   Fire 8_beta                        :      6 ( 1,  5, 0),  58.3 :   +136,   53,   99.5
```
### LC0 hardware and settings:
* Hardware: 4x V100 + Xeon 8163 CPU @ 2.50GHz, 32 vcores
* Non-default parameters:
  * MoveOverheadMs=1000
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
