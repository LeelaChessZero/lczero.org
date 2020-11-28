---
title: "Training runs"
weight: 500
wikiname: "Training-runs"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---
## Overview
| Run  # | Reference                    | Summary     | Currently Active | Net Numbers    |  Best nets |                                                                                                                  
| ------ | ---------------------------- | ------------| ---------------- | -------------- | ---------- |
| NA     | [Old Main](http://oldmain.lczero.org/networks)  | Original 192x15 "main" run | No | 1 to 601 | [ID595](http://oldmain.lczero.org/get_network?sha=b8d4e9323d8028bcbe078b47a81ca989d871dc8ef89b2a6ef7023d4eefc8c4e5)
| test10     | [[Lc0 Transition]]                              | Original 256x20 test run   | No | 10'000 to 11'262 | [11250](http://training.lczero.org/get_network?sha=093eb742d27cb725825ed4ec213a9a21a56c9a316c2a4773b116f54a4118ed06) [11248](http://training.lczero.org/get_network?sha=994de36c13ddf2540bf588817fcca0cb4e279e61c7d118c3bccc9c74419caecd)   |                                                                                                                       
| test20     | [Training run reset](http://blog.lczero.org/2018/08/training-run-reset.html) |Many changes, see blog.                                                                                                           |No|20'001 to 22'201| [22018](http://training.lczero.org/get_network?sha=ee0f91e76c772abe500c6f8b616a13e2b76253c57544843bcf29f6bf1b321acb)
| test30     | [TB rescoring](http://blog.lczero.org/2018/09/tb-rescoring.html)       | Experiment with network initialization strategy, trying to solve spike issues. Experiment with Tablebase rescoring | No              | 30'001 to 33'005 | [32930](http://training.lczero.org/get_network?sha=5c222ccd1ccbed2666b3a8ef94d8833d386d2168d51c3e99a0a3fc37a56d2569) |

## LR Drop

|Training Run|1st LR drop| Elo |2nd LR drop| Elo|3rd LR drop| Elo| Best Net| Elo|Current best|
|------------|-----------|-----|-----------|----|-----------|----|---------|----|------------|
| Old Main   |           |     |           |    |           |    | ID 595  |3148|            |
| Test 10    |ID 10077   |     | ID 10320  |    | ID 11013  |    |ID 11248 |3282|     *      |
| Test 20    |ID 20247   |2318 | ID 20493  |    | ID 21281  |    |ID 22018 |3118|            |
| Test 30    |ID 30854   |     |           |    |           |    |         |    |            |

ID for test 20 to be checked

## Sampling ratio
Most data from this [sheet](https://docs.google.com/spreadsheets/d/13MTxsCvLBkc7luOKU3iFFP_JcPjcfg4esU_63Ka5tmY/edit?usp=sharing)

* Alpha Zero reference paper  
Use best guess for games length and assuming resign cuts game length by 30%
* Old Main  
Initially new networks generated based on fixed timing rather than on games

|Item |A0 with resign| A0 w/out resign| Main up to ID xxx| Main from ID xxx|Main from IDyyy to ID598| Test 10 | Test 20|
|------|-------------|-------------|-----------|-----------|-----------|-----------|-----------|
|Positions per training game    |          95|        135  |        135|        135|        135|        135|-----------|
|New networks   per day         |-----------|             |          6|          6|           |           |
|Training Games per day         |-----------|             |    160,000|    160,000|           |           |
|Training Games per network     |-----------|             |     26,700|     26,700|     40,000|     40,000|
|Total training games           |44,000,000 | 44,000,000  |           |           | 25,000,000|           |
|Positions generated per day    |-----------|-------------| 21,600,000| 21,600,000|           |           |
|Positions generated per network|-----------|-------------|  3,600,000|  3,600,000|  5,400,000|  5,400,000|	
|Total positions generated      |4.158 B    |5.940 B      |           |           |           |           |
|Batch size                     |      4,096|        4,096|      1,024|       256 |        256|      2,048|
|Training steps per day         |-----------|-------------|    300,000|   300,000 |           |           |
|Training steps per network     |-----------|-------------|     50,000|    50,000 |     10,000|      2,500|
|Total training steps           |    700,000|      700,000|           |           |           |           |
|Positions trained per day      |-----------|-------------|307,200,000| 76,800,000|           |           |
|Positions trained per network  |-----------|-------------| 51,200,000| 12,800,000|  2,560,000|  5,120,000|
|Total position trained         |2.867 B    |2.867 B|     |           |           |           |
|**Sampling ratio**             |**0.69**   |**0.48**     | **14.22** | **3.55**  |   **0.47**| **0.95**  | **0.89**|
				
