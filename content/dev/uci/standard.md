---
weight: 200
title: UCI Specification
summary: Official UCI Specification with Added Annotations
---

*April 2006*

## General Principles

* The specification is independent of the operating system. For Windows, the engine is a normal `.exe` file, either a console or "real" windows application.
* All communication is done via **standard input and output** (stdin/stdout) with text commands.
* The engine should boot and wait for input from the GUI. The engine should wait for the `isready` or `setoption` command to set up its internal parameters, as the boot process should be as quick as possible.
* The engine must always be able to process input from `stdin`, even while thinking.
* All command strings the engine receives will end with `\n`. Also, all commands the GUI receives should end with `\n`.
  * *Note:* `\n` can be `0x0d`, `0x0a0d`, or any combination depending on your OS. If you use the Engine and GUI in the same OS, this should be no problem in text mode, but be aware of this when running a Linux engine in a Windows GUI.
* Arbitrary white space between tokens is allowed.
  * *Example:* `debug on\n`, `\t   debug     on  \n`,  and `\t  debug \t  \t\ton\t  \n` all set the debug mode of the engine on.
* The engine will always be in **forced mode**, which means it should never start calculating or pondering without receiving a `go` command first.
* Before the engine is asked to search on a position, there will always be a `position` command to tell the engine about the current position.
* By default, all opening book handling is done by the GUI, but there is an option for the engine to use its own book (`OwnBook` option, see below).
* If the engine or the GUI receives an unknown command or token, it should ignore it and try to parse the rest of the string in this line.
  * *Examples:* `joho debug on\n` should switch the debug mode on (given that `joho` is not defined); `debug joho on\n` will be undefined however.
* If the engine receives a command which is not supposed to come (e.g., `stop` when the engine is not calculating), it should also just ignore it.

> [!NOTE]
> All annotations added by the Lc0 team to the specification are styled like this.

### Move Format

The move format is in **long algebraic notation**.
A nullmove from the Engine to the GUI should be sent as `0000`.

* *Examples:* `e2e4`, `e7e5`, `e1g1` (white short castling), `e7e8q` (for promotion).

---

## GUI to Engine Commands

These are all the commands the engine gets from the interface.

### `uci`

Tell engine to use the Universal Chess Interface (UCI). This will be sent once as the first command after program boot to switch to UCI mode.

* After receiving the `uci` command, the engine must identify itself with the `id` command and send the `option` commands to tell the GUI which settings it supports.
* After that, the engine should send `uciok` to acknowledge the UCI mode.
* If no `uciok` is sent within a certain time period, the engine task will be killed by the GUI.

### `debug [ on | off ]`

Switch the debug mode of the engine on and off.

* In debug mode, the engine should send additional info to the GUI (e.g., `info string`) to help debugging.
* This mode should be off by default and can be sent any time, including when the engine is thinking.

### `isready`

Used to synchronize the engine with the GUI.

* When the GUI has sent a command or multiple commands that take time to complete, this is used to wait for the engine to be ready or to ping the engine to find out if it is still alive.
* *Example:* Should be sent after setting paths to tablebases.
* This command must always be answered with `readyok` and can be sent while the engine is calculating, in which case the engine answers `readyok` immediately without stopping the search.

### `setoption name <id> [value <x>]`

Sent when the user wants to change internal parameters.

* For the `button` type, no value is needed.
* One string per parameter; only sent when the engine is waiting.
* `<id>` and `<x>` should not be case sensitive and can include spaces.
* Avoid "value" and "name" inside `<id>` or `<x>` to allow unambiguous parsing.
* *Examples:*
  * `setoption name Nullmove value true\n`
  * `setoption name Selectivity value 3\n`
  * `setoption name Style value Risky\n`
  * `setoption name Clear Hash\n`
  * `setoption name NalimovPath value c:\chess\tb\4;c:\chess\tb\5\n`

> [!NOTE]
>
> * Case sensitivity is required for Linux file and path names. Note that there is at least one GUI that sends options in lower case and engines that treat option names as case sensitive, so it is recommended that GUIs use the options as given by the engines, but engines do case-insensitive comparisons.
> * Actually, for simple parsing, the strict requirement is that `<id>` should not contain the substrings "value" and "type" (the second for parsing the `option` list from the engine).
> * It is not clear whether empty strings should be set to `<empty>` or to an empty string.
> * Some GUIs send the default option values back to the engine. This is not recommended as some engines treat unset values differently.  

### `register`

Command to register an engine or tell the engine that registration will be done later. Sent if the engine sent `registration error` at startup.

* **`later`**: The user doesn't want to register now.
* **`name <x>`**: Register with name `<x>`.
* **`code <y>`**: Register with code `<y>`.
* *Example:* `register name Stefan MK code 4359874324`

### `ucinewgame`

Sent when the next search (started with `position` and `go`) will be from a different game. This could be a new game or a different position from a testsuite.

* If the GUI hasn't sent `ucinewgame` before the first `position` command, the engine shouldn't expect any further `ucinewgame` commands (GUI may not support it).
* GUI should always send `isready` after `ucinewgame` to wait for initialization.

> [!NOTE]
> The internal board state of the engine after a `ucinewgame` is undefined, so a new `position` should be set every time before a `go` command.

### `position [fen <fenstring> | startpos] moves <move1> .... <movei>`

Set up the position described in `<fenstring>` and play the moves on the internal chess board.

* If the game started from the beginning, use `startpos`.
* No "new" command is needed; however, the GUI should have sent `ucinewgame` if it's a different game.

> [!NOTE]
>
> * The `moves <move1> .... <movei>` part is optional.
> * Since an engine can't depend on a GUI sending `ucinewgame`, this is another place where time-consuming initialization may be done. Due to this, the engine may start the timer at this point, as many GUIs also do so, but not all send an `isready` afterwards and time may get out of sync.

### `go`

Start calculating on the current position. Possible parameters:

* **`searchmoves <move1> .... <movei>`**: Restrict search to these moves only.
* **`ponder`**: Start searching in pondering mode.
* **`wtime <x>`**: White has `x` msec left on the clock.
* **`btime <x>`**: Black has `x` msec left on the clock.
* **`winc <x>`**: White increment per move in msec.
* **`binc <x>`**: Black increment per move in msec.
* **`movestogo <x>`**: Moves until the next time control. If absent, it's sudden death.
* **`depth <x>`**: Search `x` plies only.
* **`nodes <x>`**: Search `x` nodes only.
* **`mate <x>`**: Search for mate in `x` moves.
* **`movetime <x>`**: Search exactly `x` msec.
* **`infinite`**: Search until `stop` command.

> [!NOTE]
>
> * The engine should be prepared to handle negative `wtime` and `btime` values. Some GUIs do send them.
> * The meaning of `depth` is no longer as clear as it was when the specification was written.
> * Whether a second `go` without changing position restarts the search or continues the previous one is implementation defined.
> * The behavior of a simple `go` without any other command is implementation defined. Many engines assume it is equivalent to `go infinite`.  

### `stop`

Stop calculating as soon as possible. Finish with `bestmove` (and `ponder` token if applicable).

### `ponderhit`

The user has played the expected move. Switch from pondering to normal search.

> [!NOTE]
> If the engine needs the opponent's time, it can be estimated by the `wtime` or `btime` minus the time taken from `go ponder` to `ponderhit`.

### `quit`

Quit the program as soon as possible.

> [!NOTE]
>
> * If the `quit` command comes during searching, the engine may output a `bestmove` before exiting.
> * Closing the input stream should be interpreted as a `quit` command.

---

## Engine to GUI Commands

### `id`

* **`name <x>`**: Identify engine name (e.g., `id name Shredder X.Y`).
* **`author <x>`**: Identify author (e.g., `id author Stefan MK`).

### `uciok`

Sent after `id` and options to confirm the engine is ready in UCI mode.

### `readyok`

Sent in response to `isready`.

> [!NOTE]
> The last sentence of the original spec was probably meant to be: "`isready` can be used anytime ... answered with `readyok`."

### `bestmove <move1> [ponder <move2>]`

The engine has stopped searching. Must be sent for every `go` command. A final `info` command should be sent directly before this.

### `copyprotection`

* `copyprotection checking`
* `copyprotection ok` | `copyprotection error`
If error occurs, engine should not function properly but should not quit. GUI should display error.

### `registration`

* `registration checking`
* `registration ok` | `registration error`
GUI can still use the engine after error but should inform the user.

### `info`

Used to send search statistics.

* **`depth <x>`**: Search depth in plies.
* **`seldepth <x>`**: Selective search depth.
* **`time <x>`**: Time searched in ms.
* **`nodes <x>`**: Nodes searched.
* **`pv <move1> ... <movei>`**: Best line found.
* **`multipv <num>`**: Multi-PV mode ranking.
* **`score`**:
  * **`cp <x>`**: Score in centipawns.
  * **`mate <y>`**: Mate in `y` moves.
  * **`lowerbound` / `upperbound`**: Score bounds.
* **`currmove <move>`**: Current move being searched.
* **`currmovenumber <x>`**: Current move number.
* **`hashfull <x>`**: Hash filling (permill).
* **`nps <x>`**: Nodes per second.
* **`tbhits <x>`**: Tablebase hits.
* **`sbhits <x>`**: Shredderbase hits.
* **`cpuload <x>`**: CPU load in permill.
* **`string <str>`**: Debug/Comment string.
* **`refutation <move1> <move2> ... <movei>`**: Refutation line.
* **`currline <cpunr> <move1> ... <movei>`**: Current line on specific CPU.

> [!NOTE]
>
> * It is a good idea to have the `pv` be the last field as it has variable length.
> * A common extension is to show WDL information with `wdl <w> <d> <l>`, where `<w>`, `<d>` and `<l>` are win/draw/loss probabilities multiplied by 100. Should only be shown if `UCI_ShowWDL` is true.
> * A GUI should not assume that the `depth` value will not decrease while the engine is calculating.
> * If an unknown token is encountered while parsing an `info` line, all subsequent tokens before the next known one should be ignored.  

### `option`

Sent once at startup to define parameters.

* **`name <id>`**: Option identifier.
  * *Reserved IDs:* `Hash`, `NalimovPath`, `NalimovCache`, `Ponder`, `OwnBook`, `MultiPV`.
  * *Reserved Prefix:* `UCI_` (e.g., `UCI_ShowCurrLine`, `UCI_Elo`, `UCI_AnalyseMode`).
* **`type <t>`**: `check`, `spin`, `combo`, `button`, `string`.
* **`default <x>`, `min <x>`, `max <x>`, `var <x>`**: Value constraints.

> [!NOTE]
> Commonly encountered extensions:
>
> * `<id> = Threads`, type `spin`: Number of CPU threads.  
> * `<id> = SyzygyPath`, type `string`: Path to Syzygy tablebases.  
> * `<id> = UCI_ShowWDL`, type `check`: Enable WDL output.  
> * `<id> = UCI_RatingAdv`, type `spin`: Estimated Elo advantage.  

---

## Examples

### Boot Communication

```text
GUI: uci
ENG: id name Shredder
ENG: id author Stefan MK
ENG: option name Hash type spin default 1 min 1 max 128
ENG: uciok
GUI: setoption name Hash value 32
GUI: isready
ENG: readyok
GUI: ucinewgame
GUI: position startpos moves e2e4 e7e5
GUI: go infinite
ENG: info depth 1 seldepth 0
ENG: info score cp 13 depth 1 nodes 13 time 15 pv f1b5 
...
GUI: stop
ENG: bestmove g1f3 ponder d8f6
```

---

## Chess960 (Fischer Random Chess)

UCI is extended for Chess960 via the `UCI_Chess960` option.

* **Castling moves:** Sent as king "takes" his own rook (e.g., `e1h1` for white short castle).
* **FEN/EPD:** Uses rook file letters for castling rights (e.g., `RNBQKBNR w AHah -`).

> [!NOTE]
>
> * The X-FEN encoding uses `kKqQ` for castling rights unless there are two rooks on the same side and the inner one is the one that can castle, so the engine should be prepared to handle this encoding as well.
> * An engine should accept Chess960 castling rights and moves even if the `UCI_Chess960` option is set to false.
