---
title: "Engine parameters"
weight: 100
---

## Setting the parameters

All the engine parameters can be set using one of the following ways:
* Via UCI parameters
* Using command line flags
* With a config file.

### UCI parameters

When an engine runs through a chess GUI, it communicates all the settings through the UCI protocol.

Usually GUIs have a way for a user to configure those parameters. Here is an example of such setting page for Cutechess GUI:

![]({{< file "uci.png" >}})

Please refer to the [chess GUI page]({{< ref "gui" >}}) to learn where to find the settings page in your GUI of choice.

### Command line flags

Another option is to pass command line flags to Lc0. Many chess GUIs (but not all) have a way to do that in engine settings.

To get the list of command line flags, run the following command:

```
lc0.exe --help
```

All parameters are also [listed below]({{< ref "#parameters-list">}}).


### Config file

It's also possible to put configuration in a config file.
This is useful for example if you want to run multiple configurations of Lc0 which have some settings in common.
In this case, you put the common part into the config file, and configure the rest through UCI options.

To go this, way, create a file named `lc0.config` and put it to the same directory are your `lc0.exe`.

The contents of this file should be command line flags, one per line, with trailing `--` optional. For example:

```
# Lines starting from '#' are comments.

--weights=C:\My networks\id11259.pb.txt
cpuct-at-root=2.95
```

It's possible to use a different file name instead of `lc0.config`.
In this case, pass it as `ConfigFile` UCI parameter, or `--config` (`-c`) command line flag.

## Parameters list

|UCI parameter| Command line flag | Default value | Description |
|--|--|--|--|
|**WeightsFile** | `-w`, `--weights`| `<autodiscover>` |Path from which to load network weights. Setting it to <autodiscover> makes it search in ./ and ./weights/ subdirectories for the latest (by file date) file which looks like weights.|
|**Backend** | `-b`, `--backend`| `cudnn-auto` |Neural network computational backend to use.|
|**Threads** | `-o`, `--backend-opts`| `2` |Parameters of neural network backend. Exact parameters differ per backend. [UCI: BackendOptions]  -t,  --threads=1..128 Number of (CPU) worker threads to use.|
|**NNCacheSize** | `--nncache`| `200000` |Number of positions to store in a memory cache. A large cache can speed up searching, but takes memory.|
|**MinibatchSize** | `--minibatch-size`| `256` |How many positions the engine tries to batch together for parallel NN computation. Larger batches may reduce strength a bit, especially with a small number of playouts.|
|**MaxPrefetch** | `--max-prefetch`| `32` |When the engine cannot gather a large enough batch for immediate use, try to prefetch up to X positions which are likely to be useful soon, and put them into cache.|
|**LogitQ** | `--[no-]logit-q`| `false` |Apply logit to Q when determining Q+U best child. This makes the U term less dominant when Q is near -1 or +1.|
|**CPuct** | `--cpuct`| `2.15` |cpuct_init constant from "UCT search" algorithm. Higher values promote more exploration/wider search, lower values promote more confidence/deeper search.|
|**CPuctAtRoot** | `--cpuct-at-root`| `2.15` |cpuct_init constant from "UCT search" algorithm, for root node.|
|**CPuctBase** | `--cpuct-base`| `18368.00` |cpuct_base constant from "UCT search" algorithm. Lower value means higher growth of Cpuct as number of node visits grows.|
|**CPuctBaseAtRoot** | `--cpuct-base-at-root`| `18368.00` |cpuct_base constant from "UCT search" algorithm, for root node.|
|**CPuctFactor** | `--cpuct-factor`| `2.82` |Multiplier for the cpuct growth formula.|
|**CPuctFactorAtRoot** | `--cpuct-factor-at-root`| `2.82` |Multiplier for the cpuct growth formula at root.|
|**Temperature** | `--temperature`| `0.00` |Tau value from softmax formula for the first move. If equal to 0, the engine picks the best move to make. Larger values increase randomness while making the move.|
|**TempDecayMoves** | `--tempdecay-moves`| `0` |Reduce temperature for every move from the game start to this number of moves, decreasing linearly from initial temperature to 0. A value of 0 disables tempdecay.|
|**TempCutoffMove** | `--temp-cutoff-move`| `0` |Move number, starting from which endgame temperature is used rather than initial temperature. Setting it to 0 disables cutoff.|
|**TempEndgame** | `--temp-endgame`| `0.00` |Temperature used during endgame (starting from cutoff move). Endgame temperature doesn't decay.|
|**TempValueCutoff** | `--temp-value-cutoff`| `100.00` |When move is selected using temperature, bad moves (with win probability less than X than the best move) are not considered at all.|
|**TempVisitOffset** | `--temp-visit-offset`| `0.00` |Adjusts visits by this value when picking a move with a temperature. If a negative offset reduces visits for a particular move below zero, that move is not picked. If no moves can be picked, no temperature is used.|
|**VerboseMoveStats** | `-v`, `--[no-]verbose-move-stats`| `false` |Display Q, V, N, U and P values of every move candidate after each move.|
|**FpuStrategy** | `--fpu-strategy`| `reduction` |How is an eval of unvisited node determined. "First Play Urgency" changes search behavior to visit unvisited nodes earlier or later by using a placeholder eval before checking the network. The value specified with --fpu-value results in "reduction" subtracting that value from the parent eval while "absolute" directly uses that value.|
|**FpuValue** | `--fpu-value`| `0.44` |"First Play Urgency" value used to adjust unvisited node eval based on --fpu-strategy.|
|**FpuStrategyAtRoot** | `--fpu-strategy-at-root`| `same` |How is an eval of unvisited root children determined. Just like --fpu-strategy except only at the root level and adjusts unvisited root children eval with --fpu-value-at-root. In addition to matching the strategies from --fpu-strategy, this can be "same" to disable the special root behavior.|
|**FpuValueAtRoot** | `--fpu-value-at-root`| `1.00` |"First Play Urgency" value used to adjust unvisited root children eval based on --fpu-strategy-at-root. Has no effect if --fpu-strategy-at-root is "same".|
|**CacheHistoryLength** | `--cache-history-length`| `0` |Length of history, in half-moves, to include into the cache key. When this value is less than history that NN uses to eval a position, it's possble that the search will use eval of the same position with different history taken from cache.|
|**PolicyTemperature** | `--policy-softmax-temp`| `1.61` |Policy softmax temperature. Higher values make priors of move candidates closer to each other, widening the search.|
|**MaxCollisionEvents** | `--max-collision-events`| `32` |Allowed node collision events, per batch.|
|**MaxCollisionVisits** | `--max-collision-visits`| `9999` |Total allowed node collision visits, per batch.|
|**OutOfOrderEval** | `--[no-]out-of-order-eval`| `true` |During the gathering of a batch for NN to eval, if position happens to be in the cache or is terminal, evaluate it right away without sending the batch to the NN. When off, this may only happen with the very first node of a batch; when on, this can happen with any node.|
|**MaxOutOfOrderEvalsFactor** | `--max-out-of-order-evals-factor`| `1.00` |Maximum number of out of order evals during gathering of a batch is calculated by multiplying the maximum batch size by this number.|
|**StickyEndgames** | `--[no-]sticky-endgames`| `true` |When an end of game position is found during search, allow the eval of the previous move's position to stick to something more accurate. For example, if at least one move results in checkmate, then the position should stick as checkmated. Similarly, if all moves are drawn or checkmated, the position should stick as drawn or checkmate.|
|**SyzygyFastPlay** | `--[no-]syzygy-fast-play`| `true` |With DTZ tablebase files, only allow the network pick from winning moves that have shortest DTZ to play faster (but not necessarily optimally).|
|**MultiPV** | `--multipv`| `1` |Number of game play lines (principal variations) to show in UCI info output.|
|**PerPVCounters** | `--[no-]per-pv-counters`| `false` |Show node counts per principal variation instead of total nodes in UCI.|
|**ScoreType** | `--score-type`| `centipawn` |What to display as score. Either centipawns (the UCI default), win percentage or Q (the actual internal score) multiplied by 100.|
|**HistoryFill** | `--history-fill`| `fen_only` |Neural network uses 7 previous board positions in addition to the current one. During the first moves of the game such historical positions don't exist, but they can be synthesized. This parameter defines when to synthesize them (always, never, or only at non-standard fen position).|
|**MovesLeftMaxEffect** | `--moves-left-max-effect`| `0.00` |Maximum bonus to add to the score of a node based on how much shorter/longer it makes the game when winning/losing.|
|**MovesLeftThreshold** | `--moves-left-threshold`| `1.00` |Absolute value of node Q needs to exceed this value before shorter wins or longer losses are considered.|
|**MovesLeftSlope** | `--moves-left-slope`| `0.00` |Controls how the bonus for shorter wins or longer losses is adjusted based on how many moves the move is estimated to shorten/lengthen the game. The move difference is multiplied with the slope and capped at MovesLeftMaxEffect.|
|**ShortSightedness** | `--short-sightedness`| `0.00` |Used to focus more on short term gains over long term.|
|**MaxConcurrentSearchers** | `--max-concurrent-searchers`| `1` |If not 0, at most this many search workers can be gathering minibatches at once.|
|**DrawScoreSideToMove** | `--draw-score-sidetomove`| `0` |Score of a drawn game, as seen by a player making the move.|
|**DrawScoreOpponent** | `--draw-score-opponent`| `0` |Score of a drawn game, as seen by the opponent.|
|**DrawScoreWhite** | `--draw-score-white`| `0` |Adjustment, added to a draw score of a white player.|
|**DrawScoreBlack** | `--draw-score-black`| `0` |Adjustment, added to a draw score of a black player.|
|**Ponder** | `-s`, `--syzygy-paths`| `true` |List of Syzygy tablebase directories, list entries separated by system separator (";" for Windows, ":" for Linux). [UCI: SyzygyPath]  --[no-]ponder This option is ignored. Here to please chess GUIs.|
|**UCI_Chess960** | `--[no-]chess960`| `false` |Castling moves are encoded as "king takes rook".|
|**UCI_ShowWDL** | `--[no-]show-wdl`| `false` |Show win, draw and lose probability.|
|**ConfigFile** | `-c`, `--config`| `lc0.config` |Path to a configuration file. The format of the file is one command line parameter per line, e.g.: --weights=/path/to/weights|
|**KLDGainAverageInterval** | `--kldgain-average-interval`| `100` |Used to decide how frequently to evaluate the average KLDGainPerNode to check the MinimumKLDGainPerNode, if specified.|
|**MinimumKLDGainPerNode** | `--minimum-kldgain-per-node`| `0.00` |If greater than 0 search will abort unless the last KLDGainAverageInterval nodes have an average gain per node of at least this much.|
|**SmartPruningFactor** | `--smart-pruning-factor`| `1.33` |Do not spend time on the moves which cannot become bestmove given the remaining time to search. When no other move can overtake the current best, the search stops, saving the time. Values greater than 1 stop less promising moves from being considered even earlier. Values less than 1 causes hopeless moves to still have some attention. When set to 0, smart pruning is deactivated.|
|**SmartPruningMinimumBatches** | `--smart-pruning-minimum-batches`| `0` |Only allow smart pruning to stop search after at least this many batches have been evaluated. It may be useful to have this value greater than the number of search threads in use.|
|**RamLimitMb** | `--ramlimit-mb`| `0` |Maximum memory usage for the engine, in megabytes. The estimation is very rough, and can be off by a lot. For example, multiple visits to a terminal node counted several times, and the estimation assumes that all positions have 30 possible moves. When set to 0, no RAM limit is enforced.|
|**MoveOverheadMs** | `--move-overhead`| `200` |Amount of time, in milliseconds, that the engine subtracts from it's total available time (to compensate for slow connection, interprocess communication, etc).|
|**TimeManager** | `--time-manager`| `legacy`,`smooth`,`alphazero` |Name and config of atime manager.|

