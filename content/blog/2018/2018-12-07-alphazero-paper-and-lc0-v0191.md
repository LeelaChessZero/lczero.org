+++
title = "AlphaZero paper, and Lc0 v0.19.1"
slug = "alphazero-paper-and-lc0-v0191"
published = 2018-12-07T22:37:00+01:00
author = "crem"
tags = []
draft = true
+++

As everyone has already heard, DeepMind has published a detailed paper on
AlphaZero!  
  
The announcement can be found [here](https://deepmind.com/blog/alphazero-
shedding-new-light-grand-games-chess-shogi-and-go/). Scroll down the
announcement to get links to the full paper text as well as supplementary
materials (including PGNs of games and training pseudocode).  
  
The paper contains additional details that were missing in the original
preprint from one year before. There were some aspects that were implemented
in Leela differently from AlphaZero, and I'm sure we'll find some more.  

### Differences found

So, what differences have we found so far? Here is the list!

  *  **In training games, only first 15 moves (30 ply) are generated with temperature randomness.**  
To explore more possibilities during training games, a randomness (including
random blunders) was added to the training. The paper preprint told that that
happens for all moves. Final paper also says so, but if you look into
pseudocode, it turns out that it's only applied during first 15 moves!  
Training new networks with 15-move-temperature setting will possibly help us
to improve endgame play. Leela won't longer wait opponent to blunder, having
too high eval for drawn positions.

  *  **When played against stockfish, AlphaZero used a new technique to ensure game diversity.**  
What AlphaZero did, is picked a random move with eval within 1% of the best
move's eval, for the first 15 moves. Surprisingly, that improved winrate of
AlphaZero in those games.  
We can try that too!

  *  **Action space turned out to be 0..1, not -1..1**  
That's more of a technical detail rather than something that changes the
algorithm. In AlphaGo paper, loss was encoded as 0 and win as 1. When
AlphaZero preprint came out, they wrote that they changed MCTS action values
to -1 for loss, 0 for draw and 1 for a win. But in the end it turned out that
it wasn't correct understanding. Loss is still 0, and draw is 0.5.  
As I mentioned, it doesn't change algorithms. However, it changes the meaning
of some constants from the paper.

  *  **Cpuct is not a constant**  
CPUCT is a constant, which indicates what should be the balance between
exploration and exploitation in the search algorithm. Turned out that that
constant is not a constant! This value grows as search progresses!  
We had plans to do something along those lines, as there were problems which
were seemingly caused by a constant Cpuct. Namely, it usually happend, that at
large number of nodes Leela stuck to one move and never switched.

  *  **First Play Urgency value is known now. It's -1!**  
FPU is a fancy name for a node eval for the case the node was never visited.
We used a value based on a parent node (assuming that eval of children is
roughly the same as parent's eval). Turned out that AlphaZero just considered
unvisited nodes as lost (with very little confidence though)

  *  **When training new network, positions from last 1 000 000 games are used.**  
We used 500 000 last games so far, as it was the number mentioned in previous
papers.

  *  **DeepMind generated new network 4 times rarer than we do.**  
We were worried that we did that too rare. But it happened that we were fine,
in fact it's fine to have 4 times less networks per day.

  *  **The network architecture has differences.**  
See [here](https://github.com/glinscott/leela-
chess/issues/47#issuecomment-445009350) for the context.

### v0.19.1-rc2

What does those findings mean for us?  
  
We want to experiment with new settings in play and training, so we are
urgently releasing a new version of Lc0 v0.19.1 (as a release candidate today,
the full release will happen during the next days), where we add missing
parameters. There are lots of parameters, and many of them are expected to be
renamed/rethought for version v0.20. So, please welcome new parameters:  
  
  

  *  **\--temp-cutoff-move=X**  
After move number X, temperature will be fixed to what is set in **\--temp-
endgame** flag.  
To reproduce match a0 vs sf8, set this to 16

  *  **\--temp-endgame**  
See above for the meaning. This parameter is mostly exposed for training
experiments. Default is 0, and it makes sense to keep it like that for play.

  *  **\--temp-value-cutoff=X**  
Only moves with eval within x percentage points from the bestmove are
considered during temperature pick.  
Set to 1.0 to reproduce match a0 vs sf8

  *  **\--temperature**  
This is an old flag, but set to 10.0 to reproduce settings of match a0 vs sf8.

  *  **\--fpu-strategy**  
Default is "reduction", old way of handling first play urgency. Set to
"absolute" to play like AlphaZero!

  *  **\--fpu-value=X**  
Only used in "absolute" FPU mode. -1.0 is the default, and that's what
DeepMind used.

  *  **\--cpuct**  
That used to be a constant, and it was equal to 3.4 for quite a long time in
Lc0.  
Correct value from AlphaZero is 2.5, but it slows down nps (will investigate
why), so for now default is 3.0

  *  **\--cpuct-base**  
That's that factor which defines how Cpuct grows. The value from DeepMind
paper is 19652, and that's now the default.

  *  **\--cpuct-factor** That's the multiplier of the growing part of Cpuct. Default value now is 2, and that's what DeepMind used (well, they didn't have that factor, but as our action space is 2 times larger, we have to scale this parameter).

  
Those parameters will appear in today's release candidate v0.19.1-rc2, which
will be available for download
[here](https://github.com/LeelaChessZero/lc0/releases/tag/v0.19.1-rc2).
(Yesterday there was already v0.19.1-rc1 which had one new parameter, but rc2
will have more!)  
  
Note that most of those parameters probably won't have immediate useful
effect. For them to be useful, new networks have to be trained using those
parameters.  
  
Also, all those parameters were added into RC2 in a bit of a hurry. It's very
probable there will be RC3 with fixes for bugs that I just introduced. If you
see a bug, please report!
