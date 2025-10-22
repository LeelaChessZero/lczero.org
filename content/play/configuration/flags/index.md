---
summary: How to set engine parameters, and a list of all available parameters.
title: Engine parameters
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

The contents of this file should be command line flags, one per line, with leading `--` optional. For example:

```
# Lines starting from '#' are comments.

--weights=C:\My networks\id11259.pb.txt
cpuct-at-root=2.95
```

It's possible to use a different file name instead of `lc0.config`.
In this case, pass it as `ConfigFile` UCI parameter, or `--config` (`-c`) command line flag.

## Parameters list

Use the command line flag `-h` for the most up to date settings and settings specific to your configuration. Different modes (e.g. benchmark, selfplay, etc) will have different options available.

|UCI parameter| Command line flag | Default value | Description |
|--|--|--|--|
|LogFile | -l, --logfile |  | Write log to that file. Special value `<stderr>` to output the log to the console. |
|ConfigFile | -c, --config | lc0.config | Path to a configuration file. The format of the file is one command line parameter per line, e.g.: --weights=/path/to/weights |
|Ponder |  | false | Indicates to the engine that it will be requested to ponder. This postpones resetting the search tree until the search is started. |
|SyzygyPath | -s, --syzygy-paths |  | List of Syzygy tablebase directories, list entries separated by system separator (";" for Windows, ":" for Linux). |
|Preload | --[no-]preload | false | Initialize backend and load net on engine startup. |
|Threads | -t, --threads | 0 | Number of (CPU) worker threads to use, 0 for the backend default. |
|MinibatchSize | --minibatch-size | 0 | How many positions the engine tries to batch together for parallel NN computation. Larger batches may reduce strength a bit, especially with a small number of playouts. Set to 0 to use a backend suggested value. |
|CPuct | --cpuct | 1.75 | cpuct_init constant from "UCT search" algorithm. Higher values promote more exploration/wider search, lower values promote more confidence/deeper search. |
|CPuctBase | --cpuct-base | 38739.00 | cpuct_base constant from "UCT search" algorithm. Lower value means higher growth of Cpuct as number of node visits grows. |
|CPuctFactor | --cpuct-factor | 3.89 | Multiplier for the cpuct growth formula. |
|TwoFoldDraws | --[no-]two-fold-draws | true | Evaluates twofold repetitions in the search tree as draws. Visits to these positions are reverted when the first occurrence is played and not in the search tree anymore. |
|VerboseMoveStats | -v, --[no-]verbose-move-stats | false | Display Q, V, N, U and P values of every move candidate after each move. |
|FpuStrategy | --fpu-strategy | reduction | How is an eval of unvisited node determined. "First Play Urgency" changes search behavior to visit unvisited nodes earlier or later by using a placeholder eval before checking the network. The value specified with --fpu-value results in "reduction" subtracting that value from the parent eval while "absolute" directly uses that value. |
|FpuValue | --fpu-value | 0.33 | "First Play Urgency" value used to adjust unvisited node eval based on --fpu-strategy. |
|CacheHistoryLength | --cache-history-length | 0 | Length of history, in half-moves, to include into the cache key. When this value is less than history that NN uses to eval a position, it's possble that the search will use eval of the same position with different history taken from cache. |
|MaxCollisionEvents | --max-collision-events | 917 | Allowed node collision events, per batch. |
|MaxCollisionVisits | --max-collision-visits | 80000 | Total allowed node collision visits, per batch. |
|MaxCollisionVisitsScalingStart | --max-collision-visits-scaling-start | 28 | Tree size where max collision visits starts scaling up from 1. |
|MaxCollisionVisitsScalingEnd | --max-collision-visits-scaling-end | 145000 | Tree size where max collision visits reaches max. Set to 0 to disable scaling entirely. |
|MaxCollisionVisitsScalingPower | --max-collision-visits-scaling-power | 1.25 | Power to apply to the interpolation between 1 and max to make it curved. |
|OutOfOrderEval | --[no-]out-of-order-eval | true | During the gathering of a batch for NN to eval, if position happens to be in the cache or is terminal, evaluate it right away without sending the batch to the NN. When off, this may only happen with the very first node of a batch; when on, this can happen with any node. |
|MaxOutOfOrderEvalsFactor | --max-out-of-order-evals-factor | 2.40 | Maximum number of out of order evals during gathering of a batch is calculated by multiplying the maximum batch size by this number. |
|StickyEndgames | --[no-]sticky-endgames | true | When an end of game position is found during search, allow the eval of the previous move's position to stick to something more accurate. For example, if at least one move results in checkmate, then the position should stick as checkmated. Similarly, if all moves are drawn or checkmated, the position should stick as drawn or checkmate. |
|SyzygyFastPlay | --[no-]syzygy-fast-play | false | With DTZ tablebase files, only allow the network pick from winning moves that have shortest DTZ to play faster (but not necessarily optimally). |
|MultiPV | --multipv | 1 | Number of game play lines (principal variations) to show in UCI info output. |
|PerPVCounters | --[no-]per-pv-counters | false | Show node counts per principal variation instead of total nodes in UCI. |
|ScoreType | --score-type | WDL_mu | What to display as score. Either centipawns (the UCI default), win percentage or Q (the actual internal score) multiplied by 100. |
|MovesLeftMaxEffect | --moves-left-max-effect | 0.03 | Maximum bonus to add to the score of a node based on how much shorter/longer it makes the game when winning/losing. |
|MovesLeftThreshold | --moves-left-threshold | 0.80 | Absolute value of node Q needs to exceed this value before shorter wins or longer losses are considered. |
|MovesLeftSlope | --moves-left-slope | 0.00 | Controls how the bonus for shorter wins or longer losses is adjusted based on how many moves the move is estimated to shorten/lengthen the game. The move difference is multiplied with the slope and capped at MovesLeftMaxEffect. |
|MovesLeftConstantFactor | --moves-left-constant-factor | 0.00 | A simple multiplier to the moves left effect, can be set to 0 to only use an effect scaled by Q. |
|MovesLeftScaledFactor | --moves-left-scaled-factor | 1.65 | A factor which is multiplied by the absolute Q of parent node and the base moves left effect. |
|MovesLeftQuadraticFactor | --moves-left-quadratic-factor | -0.65 | A factor which is multiplied by the square of Q of parent node and the base moves left effect. |
|MaxConcurrentSearchers | --max-concurrent-searchers | 1 | If not 0, at most this many search workers can be gathering minibatches at once. |
|DrawScore | --draw-score | 0.00 | Adjustment of the draw score from white's perspective. Value 0 gives standard scoring, value -1 gives Armageddon scoring. |
|ContemptMode | --contempt-mode | play | Affects the way asymmetric WDL parameters are applied. Default is 'play' for matches, use 'white_side_analysis' and 'black_side_analysis' for analysis. Use 'disable' to deactivate contempt. |
|Contempt | --contempt |  | The simulated Elo advantage for the WDL conversion. Comma separated list in the form [name=]value, where the name is compared with the `UCI_Opponent` value to find the appropriate contempt value. The default value is taken from `UCI_RatingAdv` and will be overridden if either a value without name is given, or if a name match is found. |
|WDLCalibrationElo | --wdl-calibration-elo | 0.00 | Elo of the active side, adjusted for time control relative to rapid.To retain raw WDL without sharpening/softening, use default value 0. |
|WDLEvalObjectivity | --wdl-eval-objectivity | 1.00 | When calculating the centipawn eval output, decides how objective/contempt influenced the reported eval should be. Value 0.0 reports the internally used WDL values, 1.0 attempts an objective eval. |
|WDLDrawRateReference | --wdl-draw-rate-reference | 0.50 | Set this to the draw rate predicted by the used neural network at default settings. The accuracy rescaling is done relative to the reference draw rate. |
|NodesPerSecondLimit | --nps-limit | 0.00 | An option to specify an upper limit to the nodes per second searched. The accuracy depends on the minibatch size used, increasing for lower sizes, and on the length of the search. Zero to disable. |
|TaskWorkers | --task-workers | -1 | The number of task workers to use to help the search worker. Setting to -1 will use a heuristic value. |
|MinimumProcessingWork | --minimum-processing-work | 20 | This many visits need to be gathered before tasks will be used to accelerate processing. |
|MinimumPickingWork | --minimum-picking-work | 1 | Search branches with more than this many collisions/visits may be split off to task workers. |
|MinimumRemainingPickingWork | --minimum-remaining-picking-work | 20 | Search branches won't be split off to task workers unless there is at least this much work left to do afterwards. |
|MinimumPerTaskProcessing | --minimum-per-task-processing | 8 | Processing work won't be split into chunks smaller than this (unless its more than half of MinimumProcessingWork). |
|IdlingMinimumWork | --idling-minimum-work | 0 | Only early exit gathering due to 'idle' backend if more than this many nodes will be sent to the backend. |
|ThreadIdlingThreshold | --thread-idling-threshold | 1 | If there are more than this number of search threads that are not actively in the process of either sending data to the backend or waiting for data from the backend, assume that the backend is idle. |
|UCI_Opponent |  |  | UCI option used by the GUI to pass the name and other information about the current opponent. |
|UCI_RatingAdv |  | 0.00 | UCI extension used by some GUIs to pass the estimated Elo advantage over the current opponent, used as the default contempt value. |
|SearchSpinBackoff | --[no-]search-spin-backoff | false | Enable backoff for the spin lock that acquires available searcher. |
|MaxPrefetch | --max-prefetch | 32 | When the engine cannot gather a large enough batch for immediate use, try to prefetch up to X positions which are likely to be useful soon, and put them into cache. |
|SolidTreeThreshold | --solid-tree-threshold | 100 | Only nodes with at least this number of visits will be considered for solidification for improved cache locality. |
|SmartPruningFactor | --smart-pruning-factor | 1.33 | Do not spend time on the moves which cannot become bestmove given the remaining time to search. When no other move can overtake the current best, the search stops, saving the time. Values greater than 1 stop less promising moves from being considered even earlier. Values less than 1 causes hopeless moves to still have some attention. When set to 0, smart pruning is deactivated. |
|SmartPruningMinimumBatches | --smart-pruning-minimum-batches | 0 | Only allow smart pruning to stop search after at least this many batches have been evaluated. It may be useful to have this value greater than the number of search threads in use. |
|RamLimitMb | --ramlimit-mb | 0 | Maximum memory usage for the engine, in megabytes. The estimation is very rough, and can be off by a lot. For example, multiple visits to a terminal node counted several times, and the estimation assumes that all positions have 30 possible moves. When set to 0, no RAM limit is enforced. |
|MoveOverheadMs | --move-overhead | 200 | Amount of time, in milliseconds, that the engine subtracts from its total available time (to compensate for slow connection, interprocess communication, etc). |
|TimeManager | --time-manager | legacy | Name and config of a time manager. Possible names are 'legacy' (default), 'smooth', 'alphazero', and simple. See [configuration details](https://lc0.org/timemgr). |
|UCI_Chess960 | --[no-]chess960 | false | Castling moves are encoded as "king takes rook". |
|UCI_ShowWDL | --[no-]show-wdl | false | Show win, draw and lose probability. |
|UCI_ShowMovesLeft | --[no-]show-movesleft | false | Show estimated moves left. |
|PolicyTemperature | --policy-softmax-temp | 1.36 | Policy softmax temperature. Higher values make priors of move candidates closer to each other, widening the search. |
|HistoryFill | --history-fill-new | fen_only | Neural network uses 7 previous board positions in addition to the current one. During the first moves of the game such historical positions don't exist, but they can be synthesized. This parameter defines when to synthesize them (always, never, or only at non-standard fen position). |
|WeightsFile | -w, --weights | `<autodiscover>` | Path from which to load network weights. Setting it to `<autodiscover>` makes it search in ./ and ./weights/ subdirectories for the latest (by file date) file which looks like weights. |
|Backend | -b, --backend | cuda-auto | Neural network computational backend to use. |
|BackendOptions | -o, --backend-opts |  | Parameters of neural network backend. Exact parameters differ per backend. |
|NNCacheSize | --nncache | 2000000 | Number of positions to store in a memory cache. A large cache can speed up searching, but takes memory.|
