+++
title = "Lc0 v0.19.0-rc1 (UPD: rc2) has been released."
slug = "lc0-v0190-rc1-has-been-released"
published = 2018-11-03T17:52:00+01:00
author = "crem"
tags = []
draft = false
+++

The release candidate of a new Leela version has been released:

(v0.19.0-rc1)  
 **Upd:** we are releasing v0.19.0-rc2 immediately as due to mistake in the
release procedure rc1 reported its version as v0.19.0-dev rather than
v0.19.0-rc1

We expect testing phase to last around 7-10 days, after which proper v0.19.0
will be released.

Download
[here](https://github.com/LeelaChessZero/lc0/releases/tag/v0.19.0-rc2). Please
test it thoroughly and report any bugs that you find.  
 **Note:** CudNN builds for Windows are now compiled with CUDA 10. You may
need to update you GPU driver to run it.

Please **don't** use release candidates to generate training games. We only
use stable versions for that.

### What's new:

#### Search algorithm changes

When visiting terminal nodes and collisions, instead of counting that as one
visit, estimate how many subsequent visits will also go to the same node, and
do a batch update.

That should slightly improve nps near terminal nodes and in multithread
configurations. Command line parameters that control that:

  * \--max-collision-events – number of collision events allowed per batch. 
Default is 32. This parameter is roughly equivalent to 
\--allowed-node-collisions in v0.18.
  * \--max-collision-visits – total number of estimated collisions per NN 
batch. Default is 9999.

#### Time management

  * Multiple changes have been done to make Leela track used time more 
precisely (particularly, the moment when to start timer is now much closer to 
the moment GUIs start timer).
  * For smart pruning, Leela's timer only starts when the first batch comes 
from NN eval. That should help against instamoves, especially on non-even GPUs.
  * Also Leela stops the search quicker now when it sees that time is up (it 
could continue the search for hundreds of milliseconds after that, which caused 
time trouble if opponent moves very fast).

Those changes should help a lot in ultra-bullet configurations.

#### Better logging

Much more information is outputted now to the log file. That will allow us to
easier diagnose problems if they occur. To have debug file written, add a
command line option:

\--logfile=/path/to/logfile

(or short option "-l /path/to/logfile", or corresponding UCI option "LogFile")

It's recommended to always have logging on, to make it easier to report bugs
when it happens.

#### Configuration parameters change

Large part of parameter handling has been reworked. As the result:

  * All UCI parameters have been changed to have more "classical" look.  
E.g. was "Network weights file path", became "WeightsFile".

  * Much more detailed help is shown than before when you run  
./lc0 --help

  * Some flags have been renamed, e.g.  
\--futile-move-aversion  
is renamed back to  
\--smart-pruning-factor.

  * After setting a parameter (using command line parameter or uci setoption 
command), uci command "uci" shows updated result. That way you can check the 
current option values.
  * Some command-line and UCI options are hidden now. Use \--show-hidden 
command line parameter to unhide them. E.g.  
./lc0 --show-hidden --help

Also, in selfplay mode the per player configuration format has been changed
(although probably noone knew that anyway):  
Was: ./lc0 selfplay player1: --movetime=14  
Became: ./lc0 selfplay --player1.movetime=14

#### Other

  * "go depth X" uci command now causes search to stop when depth information 
in uci info line reaches X. Not that it makes much sense for it to work this 
way, but at least it's better than noting.
  * Network file size can now be larger than 64MB.
  * There is now an experimental flag \--ramlimit-mb. The engine tries to 
estimate how much memory it uses and stops search when tree size (plus cache 
size) reaches RAM limit. The estimation is very rough. We'll see how it 
performs and improve estimation later.  
In situations when search cannot be stopped (`go infinite` or ponder),
`bestmove` is not automatically outputted. Instead, search stops progress and
outputs warning.

  * Benchmark mode has been implemented. Run run, use the following command 
line:  
./lc0 benchmark  
This feature is pretty basic in the current version, but will be expanded
later.

  * As Leela plays much weaker in positions without history, it now is able to 
synthesize it and do not blunder in custom FEN positions. There is a 
\--history-fill flag for it. Setting it to "no" disables the feature, setting 
to "fen_only" (default) enables it for all positions except chess start 
position, and setting it to "always" enables it even for startpos.
  * Instead of output current win estimation as centipawn score approximation, 
Leela can how show it's raw score. A flag that controls that is \--score-type. 
Possible values:
    * centipawn (default) – approximate the win rate in centipawns, like 
Leela always did.
    * win_percentage – value from 0 to 100.0 which represents expected score 
in percents.
    * Q – the same, but scales from -100.0 to 100.0 rather than from 0 to 
100.0
