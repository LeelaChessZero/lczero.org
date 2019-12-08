---
title: "Lc0 options"
wikiname: "Lc0-options"
---
# Lc0 options


*Flag*|*UCI option*|Description
---|---|------
**--help**, **-h**||Show help and exit.
**--weights**, **-w**|**WeightsFile**|Path from which to load network weights.<br/>Setting it to &lt;autodiscover&gt; makes it search in ./ and ./weights/ subdirectories for the latest (by file date) file which looks like weights.<br/>*Default value:* ` <autodiscover>`
**--backend**, **-b**|**Backend**|Neural network computational backend to use.<br/>*Default value:* ` cudnn  `<br/>*Allowed values:* ` cudnn`, `cudnn-fp16`, `opencl`, `blas`, `check`, `random`, `roundrobin`, `multiplexing`, `demux`
**--backend-opts**, **-o**|**BackendOptions**|Parameters of neural network backend. Exact parameters differ per backend.
**--threads**, **-t**|**Threads**|Number of (CPU) worker threads to use.<br/>*Default value:* ` 2  `<br/>*Minimum value:* ` 1  `<br/>*Maximum value:* ` 128`
**--nncache**|**NNCacheSize**|Number of positions to store in a memory cache. A large cache can speed up searching, but takes memory.<br/>*Default value:* ` 200000  `<br/>*Minimum value:* ` 0  `<br/>*Maximum value:* ` 999999999`

## Search options

*Flag*|*UCI option*|Description
---|---|------
**--minibatch-size**|**MinibatchSize**|How many positions the engine tries to batch together for parallel NN computation. Larger batches may reduce strength a bit, especially with a small number of playouts.<br/>*Default value:* ` 256  `<br/>*Minimum value:* ` 1  `<br/>*Maximum value:* ` 1024`
**--max-prefetch**|**MaxPrefetch**|When the engine cannot gather a large enough batch for immediate use, try to prefetch up to X positions which are likely to be useful soon, and put them into cache.<br/>*Default value:* ` 32  `<br/>*Minimum value:* ` 0  `<br/>*Maximum value:* ` 1024`
**--cpuct**|**CPuct**|cpuct\_init constant from "UCT search" algorithm. Higher values promote more exploration/wider search, lower values promote more confidence/deeper search.<br/>*Default value:* ` 3.00  `<br/>*Minimum value:* ` 0.00  `<br/>*Maximum value:* ` 100.00`
**--cpuct-base**|**CPuctBase**|cpuct\_base constant from "UCT search" algorithm. Lower value means higher growth of Cpuct as number of node visits grows.<br/>*Default value:* ` 19652.00  `<br/>*Minimum value:* ` 1.00  `<br/>*Maximum value:* ` 1000000000.00`
**--cpuct-factor**|**CPuctFactor**|Multiplier for the cpuct growth formula.<br/>*Default value:* ` 2.00  `<br/>*Minimum value:* ` 0.00  `<br/>*Maximum value:* ` 1000.00`
**--temperature**|**Temperature**|Tau value from softmax formula for the first move. If equal to 0, the engine picks the best move to make. Larger values increase randomness while making the move.<br/>*Default value:* ` 0.00  `<br/>*Minimum value:* ` 0.00  `<br/>*Maximum value:* ` 100.00`
**--tempdecay-moves**|**TempDecayMoves**|Reduce temperature for every move from the game start to this number of moves, decreasing linearly from initial temperature to 0. A value of 0 disables tempdecay.<br/>*Default value:* ` 0  `<br/>*Minimum value:* ` 0  `<br/>*Maximum value:* ` 100`
**--temp-cutoff-move**|**TempCutoffMove**|Move number, starting from which endgame temperature is used rather than initial temperature. Setting it to 0 disables cutoff.<br/>*Default value:* ` 0  `<br/>*Minimum value:* ` 0  `<br/>*Maximum value:* ` 1000`
**--temp-endgame**|**TempEndgame**|Temperature used during endgame (starting from cutoff move). Endgame temperature doesn't decay.<br/>*Default value:* ` 0.00  `<br/>*Minimum value:* ` 0.00  `<br/>*Maximum value:* ` 100.00`
**--temp-value-cutoff**|**TempValueCutoff**|When move is selected using temperature, bad moves (with win probability less than X than the best move) are not considered at all.<br/>*Default value:* ` 100.00  `<br/>*Minimum value:* ` 0.00  `<br/>*Maximum value:* ` 100.00`
**--temp-visit-offset**|**TempVisitOffset**|Reduces visits by this value when picking a move with a temperature. When the offset is less than number of visits for a particular move, that move is not picked at all.<br/>*Default value:* ` 0.00  `<br/>*Minimum value:* ` -1.00  `<br/>*Maximum value:* ` 1000.00`
**--noise**, **-n**|**DirichletNoise**|Add Dirichlet noise to root node prior probabilities. This allows the engine to discover new ideas during training by exploring moves which are known to be bad. Not normally used during play.<br/>*Default value:* ` false`
**--verbose-move-stats**|**VerboseMoveStats**|Display Q, V, N, U and P values of every move candidate after each move.<br/>*Default value:* ` false`
**--smart-pruning-factor**|**SmartPruningFactor**|Do not spend time on the moves which cannot become bestmove given the remaining time to search. When no other move can overtake the current best, the search stops, saving the time. Values greater than 1 stop less promising moves from being considered even earlier. Values less than 1 causes hopeless moves to still have some attention. When set to 0, smart pruning is deactivated.<br/>*Default value:* ` 1.33  `<br/>*Minimum value:* ` 0.00  `<br/>*Maximum value:* ` 10.00`
**--fpu-strategy**|**FpuStrategy**|How is an eval of unvisited node determined. "reduction" subtracts \-\-fpu\-reduction value from the parent eval. "absolute" sets eval of unvisited nodes to the value specified in \-\-fpu\-value.<br/>*Default value:* ` reduction  `<br/>*Allowed values:* ` reduction`, `absolute`
**--fpu-reduction**|**FpuReduction**|"First Play Urgency" reduction (used when FPU strategy is "reduction"). Normally when a move has no visits, it's eval is assumed to be equal to parent's eval. With non\-zero FPU reduction, eval of unvisited move is decreased by that value, discouraging visits of unvisited moves, and saving those visits for (hopefully) more promising moves.<br/>*Default value:* ` 1.20  `<br/>*Minimum value:* ` -100.00  `<br/>*Maximum value:* ` 100.00`
**--fpu-value**|**FpuValue**|"First Play Urgency" value. When FPU strategy is "absolute", value of unvisited node is assumed to be equal to this value, and does not depend on parent eval.<br/>*Default value:* ` -1.00  `<br/>*Minimum value:* ` -1.00  `<br/>*Maximum value:* ` 1.00`
**--cache-history-length**|**CacheHistoryLength**|Length of history, in half\-moves, to include into the cache key. When this value is less than history that NN uses to eval a position, it's possble that the search will use eval of the same position with different history taken from cache.<br/>*Default value:* ` 0  `<br/>*Minimum value:* ` 0  `<br/>*Maximum value:* ` 7`
**--policy-softmax-temp**|**PolicyTemperature**|Policy softmax temperature. Higher values make priors of move candidates closer to each other, widening the search.<br/>*Default value:* ` 2.20  `<br/>*Minimum value:* ` 0.10  `<br/>*Maximum value:* ` 10.00`
**--max-collision-events**|**MaxCollisionEvents**|Allowed node collision events, per batch.<br/>*Default value:* ` 32  `<br/>*Minimum value:* ` 1  `<br/>*Maximum value:* ` 1024`
**--max-collision-visits**|**MaxCollisionVisits**|Total allowed node collision visits, per batch.<br/>*Default value:* ` 9999  `<br/>*Minimum value:* ` 1  `<br/>*Maximum value:* ` 1000000`
**--out-of-order-eval**|**OutOfOrderEval**|During the gathering of a batch for NN to eval, if position happens to be in the cache or is terminal, evaluate it right away without sending the batch to the NN. When off, this may only happen with the very first node of a batch; when on, this can happen with any node.<br/>*Default value:* ` true`
**--syzygy-fast-play**|**SyzygyFastPlay**|With DTZ tablebase files, only allow the network pick from winning moves that have shortest DTZ to play faster (but not necessarily optimally).<br/>*Default value:* ` true`
**--multipv**|**MultiPV**|Number of game play lines (principal variations) to show in UCI info output.<br/>*Default value:* ` 1  `<br/>*Minimum value:* ` 1  `<br/>*Maximum value:* ` 500`
**--score-type**|**ScoreType**|What to display as score. Either centipawns (the UCI default), win percentage or Q (the actual internal score) multiplied by 100.<br/>*Default value:* ` centipawn  `<br/>*Allowed values:* ` centipawn`, `win_percentage`, `Q`
**--history-fill**|**HistoryFill**|Neural network uses 7 previous board positions in addition to the current one. During the first moves of the game such historical positions don't exist, but they can be synthesized. This parameter defines when to synthesize them (always, never, or only at non\-standard fen position).<br/>*Default value:* ` fen_only  `<br/>*Allowed values:* ` no`, `fen_only`, `always`
**--kldgain-average-interval**|**KLDGainAverageInterval**|Used to decide how frequently to evaluate the average KLDGainPerNode to check the MinimumKLDGainPerNode, if specified.<br/>*Default value:* ` 100  `<br/>*Minimum value:* ` 1  `<br/>*Maximum value:* ` 10000000`
**--minimum-kldgain-per-node**|**MinimumKLDGainPerNode**|If greater than 0 search will abort unless the last KLDGainAverageInterval nodes have an average gain per node of at least this much.<br/>*Default value:* ` 0.00  `<br/>*Minimum value:* ` 0.00  `<br/>*Maximum value:* ` 1.00`

## Engine options

*Flag*|*UCI option*|Description
---|---|------
**--slowmover**|**Slowmover**|Budgeted time for a move is multiplied by this value, causing the engine to spend more time (if value is greater than 1) or less time (if the value is less than 1).<br/>*Default value:* ` 1.00  `<br/>*Minimum value:* ` 0.00  `<br/>*Maximum value:* ` 100.00`
**--move-overhead**|**MoveOverheadMs**|Amount of time, in milliseconds, that the engine subtracts from it's total available time (to compensate for slow connection, interprocess communication, etc).<br/>*Default value:* ` 200  `<br/>*Minimum value:* ` 0  `<br/>*Maximum value:* ` 100000000`
**--time-midpoint-move**|**TimeMidpointMove**|The move where the time budgeting algorithm guesses half of all games to be completed by. Half of the time allocated for the first move is allocated at approximately this move.<br/>*Default value:* ` 51.50  `<br/>*Minimum value:* ` 1.00  `<br/>*Maximum value:* ` 100.00`
**--time-steepness**|**TimeSteepness**|"Steepness" of the function the time budgeting algorithm uses to consider when games are completed. Lower values leave more time for the endgame, higher values use more time for each move before the midpoint.<br/>*Default value:* ` 7.00  `<br/>*Minimum value:* ` 1.00  `<br/>*Maximum value:* ` 100.00`
**--syzygy-paths**, **-s**|**SyzygyPath**|List of Syzygy tablebase directories, list entries separated by system separator (";" for Windows, "\:" for Linux).
**--ponder**|**Ponder**|This option is ignored. Here to please chess GUIs.<br/>*Default value:* ` true`
**--immediate-time-use**|**ImmediateTimeUse**|Fraction of time saved by smart pruning, which is added to the budget to the next move rather than to the entire game. When 1, all saved time is added to the next move's budget; when 0, saved time is distributed among all future moves.<br/>*Default value:* ` 1.00  `<br/>*Minimum value:* ` 0.00  `<br/>*Maximum value:* ` 1.00`
**--ramlimit-mb**|**RamLimitMb**|Maximum memory usage for the engine, in megabytes. The estimation is very rough, and can be off by a lot. For example, multiple visits to a terminal node counted several times, and the estimation assumes that all positions have 30 possible moves. When set to 0, no RAM limit is enforced.<br/>*Default value:* ` 0  `<br/>*Minimum value:* ` 0  `<br/>*Maximum value:* ` 100000000`
**--config**, **-c**|**ConfigFile**|Path to a configuration file. The format of the file is one command line parameter per line, e.g.\:<br/>\-\-weights=/path/to/weights<br/>*Default value:* ` lc0.config`
**--logfile**, **-l**|**LogFile**|Write log to that file. Special value &lt;stderr&gt; to output the log to the console.

## Selfplay options

*Flag*|*UCI option*|Description
---|---|------
**--share-trees**|**ShareTrees**|When on, game tree is shared for two players; when off, each side has a separate tree.<br/>*Default value:* ` true`
**--games**|**Games**|Number of games to play.<br/>*Default value:* ` -1  `<br/>*Minimum value:* ` -1  `<br/>*Maximum value:* ` 999999`
**--parallelism**|**Parallelism**|Number of games to play in parallel.<br/>*Default value:* ` 8  `<br/>*Minimum value:* ` 1  `<br/>*Maximum value:* ` 256`
**--playouts**|**Playouts**|Number of playouts per move to search.<br/>*Default value:* ` -1  `<br/>*Minimum value:* ` -1  `<br/>*Maximum value:* ` 999999999`
**--visits**|**Visits**|Number of visits per move to search.<br/>*Default value:* ` -1  `<br/>*Minimum value:* ` -1  `<br/>*Maximum value:* ` 999999999`
**--movetime**|**MoveTime**|Time per move, in milliseconds.<br/>*Default value:* ` -1  `<br/>*Minimum value:* ` -1  `<br/>*Maximum value:* ` 999999999`
**--training**|**Training**|Enables writing training data. The training data is stored into a temporary subdirectory that the engine creates.<br/>*Default value:* ` false`
**--verbose-thinking**|**VerboseThinking**|Show verbose thinking messages.<br/>*Default value:* ` false`
**--resign-playthrough**|**ResignPlaythrough**|The percentage of games which ignore resign.<br/>*Default value:* ` 0.00  `<br/>*Minimum value:* ` 0.00  `<br/>*Maximum value:* ` 100.00`
**--reuse-tree**|**ReuseTree**|Reuse the search tree between moves.<br/>*Default value:* ` false`
**--resign-wdlstyle**|**ResignWDLStyle**|If set, resign percentage applies to any output state being above 100% minus the percentage instead of winrate being below.<br/>*Default value:* ` false`
**--resign-percentage**|**ResignPercentage**|Resign when win percentage drops below specified value.<br/>*Default value:* ` 0.00  `<br/>*Minimum value:* ` 0.00  `<br/>*Maximum value:* ` 100.00`
**--resign-earliest-move**|**ResignEarliestMove**|Earliest move that resign is allowed.<br/>*Default value:* ` 0  `<br/>*Minimum value:* ` 0  `<br/>*Maximum value:* ` 1000`
**--interactive**||Run in interactive mode with UCI\-like interface.<br/>*Default value:* ` false`

## Benchmark options

*Flag*|*UCI option*|Description
---|---|------
**--nodes**||Number of nodes to run as a benchmark.<br/>*Default value:* ` -1  `<br/>*Minimum value:* ` -1  `<br/>*Maximum value:* ` 999999999`
**--movetime**||Benchmark time allocation, in milliseconds.<br/>*Default value:* ` 10000  `<br/>*Minimum value:* ` -1  `<br/>*Maximum value:* ` 999999999`
**--fen**||Benchmark initial position FEN.<br/>*Default value:* ` rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`
