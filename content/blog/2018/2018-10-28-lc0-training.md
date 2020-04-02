+++
title = "Lc0 training."
slug = "lc0-training"
published = 2018-10-28T23:06:00+01:00
author = "Bob23"
tags = []
draft = true
+++

[![](../../images/2018-10-28-lc0-training-
gjhgj8768788768.jpg)

If you are new to **Leela** (Lc0) Chess and have begun contributing games
either using Google Cloud or some other online service or your own home
computer, you may be wondering where all those games go and how training of
Leela happens.

Leela uses a deep convolutional neural network (NN) as a major part of its
chess playing. The NN Leela uses is complex and needs extensive training
before it plays high quality chess. The LCZero project kicked off with a
period of program development and initial test training (you can see some of
these preliminary tests in the first few crowded "bumps" at the left in the
[graph here](http://lczero.org/?full_elo=1)). The first high quality NNs
produced for Leela are called the "test 10" networks. The training games from
about 15 million to 67 million are those used to train test 10. As of October
2018 the best networks from test 10 are in use in chess engine competitions
and at play.Lc0.org. The quality of test 10 networks neared a plateau in late
August 2018, and training of new networks was started from scratch to try to
improve on test 10 (starting around training game 67 million), with some
changes in the game play parameters and two minor bug fixes. The main network
series now being trained is test 20, with an additional experimental test 30
network series training separately (not shown on the above graph). If you
contribute games to training Leela, they will normally be directed by the
developers to the test network most in need of new training games. You can
access more limited data on test 30 by clicking on "Training Runs" and then
"Alternative testing" from the main page, somewhat confusingly called ID 2
(same as test 30).

 _ **  
How Leela trains**_

What goes into training and how can you visualize progress in training the
neural networks? Leela, like the famous AlphaZero, uses self-play
(reinforcement learning) to learn chess: it starts only with the rules of
chess moves, promotions, etc. The initial neural network is given random
"weights" and evaluates chess positions extremely poorly (weights are the
strength of neuron connections in the network, try Wikipedia and blogs to
understand more about what that means). When this initial network plays games
against itself (playing both white and black sides), moves are largely random
but they result in a legal chess game with an endpoint that is either a win, a
loss, or a draw.  
Training works by collecting a large set of such self-play games and
evaluating how well the network predicted the best (winning) moves and which
side was winning each game (called the policy and the value outputs of the
network respectively). A process called backpropagation and gradient descent
is then used to update the weights in the current network so that the policy
and value outputs are improved for the current set of training games. After
these updates, the weights for the new network are made [available for
download](http://lczero.org/networks/) and a rapid test of network quality is
reported (self-play Elo on the graphs, about which more below). You can
download any of these networks and use them with Lc0 on your own computer by
using the --weights=path_to_weights_file option.

Using the new (hopefully slightly improved) network the whole process repeats:  
1) generate self-play games using the current network,  
2) gather a batch of such games,  
3) update the weights in the network so that it better predicts results for
this batch of games,  
4) save the new network, repeat.  
The most compute-intensive part of this cycle is the self-play games and that
is what you can contribute (the process is almost fully automated - you don't
have to worry about any of this stuff). One of many choices the Lc0 developers
make in this process is how many self-play games go into each batch. Currently
test 20 uses 32,000 games in each batch.

 _ **  
Understanding the Elo graphs**_  
At each round of network updating, many parameters that measure network
quality are made, one of which appears on the main graph at
[lczero.org](http://lczero.org/). This measure is called Self-play Elo and is
a crude but fast estimate of playing strength made by assuming random moves
have an Elo of 0 (do not give any credence to short term changes in Self-play
Elo, more below). Much more meaningful estimates of playing strength can be
seen by clicking "Elo Estimates", which gives a graphical window of recent
networks assessed in various ways. The x-axes on these two plots are different
(games since Lc0 started vs network ID) so don’t try too hard to line them up
in your head. All of the measurements on the Elo Estimates graph are useful,
but the simplest to interpret is the CCRL estimate (currently in dark red),
which is obtained by playing a Leela network against other computer chess
engines with known Elo. The CCRL estimate is a good approximation of how the
network would perform against other engines in a tournament with a specific
hardware configuration. Some or all of these Elo estimates are often a little
out of date - the price of volunteers contributing their time to make them -
and some are made only periodically because they require much more compute
time to estimate.

Another very useful measure is the "100n vs SF9" estimates (it is the upper
aquamarine line on the graph). These are made by running a network against
Stockfish 9, but stopping Leela when it has evaluated 100 nodes at each move
(a “node” is a board position in the variant lines tested for move choice).
The absolute Elo estimate is not correct for normal play conditions (which
allow Leela to evaluate many more nodes), but the test is fast and fairly
accurate (unlike Self-play Elo) and is done for many more networks than the
CCRL estimate. Similar estimates are made at 10 nodes and 1 node for Leela.
You can see that the Self-play Elo values often do NOT follow these more
accurate estimates (Self-play Elo is the dark blue line, scaled to fit nicely
on the same graph). For example, at the time I am writing, there is a long
period (from networks 21600 to 21900) when the Self-play Elo curve drops
extensively while the CCRL and 100n vs SF9 curves go up or are flat. Much
comment is often made when the Self-play Elo curve rises or drops during
training - explain to your friends that this is expected: it is not exciting
when it goes up and it is not distressing when it goes down!

Two other useful indicators are currently on the Elo estimates graph. One is a
dark red line near the top that approximates the best performance of any
previous Leela network (exceeding this is a major long term goal). This line
seems a bit high to me and I don't know why - presumably it comes from the
same CCRL estimate method. Last but not least are the " **LR** " dots. These
are the points when the **"learning rate"** (LR) was dropped for network
training, and it is theoretically expected that the fastest network
improvement will occur just after these drops, as is the case in the current
graph window (note: some Elo tests are intermittent and sometimes they are
missing data points, don't misinterpret sudden increases "before" the LR drop
- those are artifacts of when the Elo tests were done).  
The LR is used to scale the magnitude of network update by backpropagation and
gradient descent, and it is varied during the training process. For current
Leela training runs, the LR starts high and is occasionally reduced (the LR
drop) until it gets close to zero at the end (other methods such as cyclical
LR changes are possible). You can think of early stages of training as fast
but crude and the later stages as increasingly fine tuned ([read
here](https://towardsdatascience.com/understanding-learning-rates-and-how-it-
improves-performance-in-deep-learning-d0d4059c1c10) for more).  
Though network improvement occurs fastest after an LR drop, the process
continues until the next LR drop, and some patience is needed to let each
learning rate level squeeze out all the juice before the next LR drop.
Dropping the LR too soon is counterproductive, even when network quality isn’t
obviously improving when you eyeball these curves. If you have the impression
the entire learning process should take hours rather than months, that comes
from the [AlphaZero paper](https://arxiv.org/pdf/1712.01815.pdf), which used
huge hardware to self-play 44 million games in a few hours.

 _ **  
Going deeper**_  
Network evaluation over time is much more extensive than the Self-play Elo and
Elo estimate graphs. If you want to start to immerse yourself in some of these
data, get a free account on the Discord gamer chat site (“LCZero chat” 
button
at lczero.org), and type !sheet, !sheet2, !tensorflow or other similar
commands as your message. Be warned, things get very complicated very fast but
there is a wealth of additional information that you can access there. Among
other things, you can find more extensive Elo estimates across all of the main
test networks plus many other tantalizing mysteries such as “Gradient norm”
and “MSE Loss”. These sheets are designed mostly for the developers to track
NN progress, so be prepared to spend a lot of time figuring out what it all
means; for some of it you will need to learn a lot more about neural networks.

Have fun!

 _Article by Jhorthos(nickname at Leela Discord)._
