+++
title = "Time management"
slug = "time-management"
published = 2018-09-05T22:55:00.001000+02:00
author = "crem"
tags = []
draft = true
+++

As many of you have noticed, Leela's thinking time allocation seems suboptimal
for during the CCCC games. It almost doesn't spend any time in the opening,
and spends a lot in the endgame.

It's not completely clear whether time management is really as bad as it looks
though. In this post I'll explain the time allocation algorithm, its
parameters and explain effects that we see.

There are 7 parameters which affect time allocation:

  * \--time-curve-peak
  * \--time-curve-left
  * \--time-curve-right
  * \--slowmover
  * \--move-overhead
  * \--futile-search-aversion
  * \--ponder

I agree that 7 parameters is too much, but there are attempts to add some
more!

## Base time allocation

So, as a basis, algorithms tries to divide all remaining time roughly using
the following time distribution (x axis is move number):

[![](../../images/2018-09-05-time-
management-41066697-eaedea6c-6a21-11e8-9d11-3fd57a192f3a.png)](https://user-
images.githubusercontent.com/313295/41066697-eaedea6c-6a21-11e8-9d11-3fd57a192f3
a.png)

To control the shape of that curve, the following parameters are used:

  * \--time-curve-peak (=26 by default)  
At which move this curve has it's maximum (in example above it's 40)

  * \--time-curve-left=82  
How "wide" is side to the left of the peak

  * \--time-curve-right=74  
How "wide" is side to the right of the peak

When algorithms has to compute "base time" for the current move, it takes
all1) remaining time (including all1) time from future increments), divides it
proportionally to time curve values for all1) remaeining moves, and what the
current move gets is the time used as a base.

all1) means either "time/moves till control", for games where it exists, e.g.
games where time is added every 40 moves, or 50 moves from the current move if
time is not added.

## Futile search aversion

With all other features off that's how time allocation would look like. But we
have other features. The most important of those is "futile search aversion",
which used to be called "smart pruning".

The Monte-Carlo Tree Search algorithm that Leela uses works as a sequence of
so called "visits" to move variants. When time is over, the move with highest
number of visits used to play.  
It may happen, that when the time is nearly over, some of moves have so few
visits, so they are guaranteed not to overtake the currently leading move. In
this case it's better not to allow any visits to such moves and spend more on
ones which still can theoretically lead to another decision.

That's what --futile-search-aversion=1 does. It's also possible to make it
slightly more than 1 (in which case Leela will stop considering unpromising
moves slightly earlier) or less than 1 (in which case even after it's
theoretically impossible for a move to overtake a leader, it will still try a
bit).

Remaining number of visits is estimated from remaining time and current nps.
When nps is not stable, this estimation may be wrong. Because of that even
"theoretically impossible" moves may sometimes happen.

When all moves (except one which leading now) are considered unpromising, the
search stops earlier, without using all the budgeted time.

Current value for --futile-search-aversion is 1.33

## Slowmover

As I wrote above, due to futile search aversion, search doesn't use all of the
budgeted time.

More precisely, it can take up to (1 + value-of-futile-search-aversion-flag)
times less time.

To compensate for that, there is a --slowmover flag, which just multiplies the
budgeted time for a move by a constant. Currently --slowmover is 2.4.

## Ponder

Ponder is Leela's ability to think during opponent's time. Unlike most of
other engines, which think about one opponent's move, Leela thinks about all
of them. Leela thinks more about more likely moves though. During ponder
futile search aversion is not active (as there is no way to predict how much
more is left to think).

Because of ponder, it often happens that right after the opponent's move, the
position is already well thought, and Leela sees that within the budgeted time
there is no way to change move. Because of that, she may think much less than
(budgeted-time / (1 + value-of-futile-search-aversion-flag)), and in fact it
often moves immediately.

It is true that all default parameters were never tweaked with ponder on, and
it's likely that they are not optimal.  
It's also suspected, that as nps is slower in the first moments of the search,
Leela underestimates the amount of work that it can do within budgeted time,
and futile-search-aversion triggers too early.

## Move overhead

That's just a fixed time which is subtracted from a budgeted time, to
compensate for different technical (e.g. network) delays. Currently it's 100ms
by default.

But it turns out, that other engines treat this value differently. In v0.17,
Leela thinks that it will lose that time for **each** of **"all 1)" remaing
moves**, but apparently it's more correctly to make this value mean "
**total** lost time for **the rest of the game** ". This will be changed in
v0.18.
