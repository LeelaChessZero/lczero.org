---
title: "Project History"
wikiname: "Project-History"
---
* See also our [blog](https://blog.lczero.org)
* [Discord chat](https://discord.gg/pKujYxD) #announcements and #dev-log have the most detailed updates.

## T53
* Same as T52, plus:
* Endgame temperature 0
## T52
* Same as T51, plus:
* mask_legal_moves: Don't require the NN to output zeros for illegal moves.
* DTZ policy boost off from the start.
* [Q_ratio](https://blog.lczero.org/2018/10/understanding-training-against-q-as.html) where the training target becomes q_ratio • q + (1-q_ratio) • z
## T51
* Same as T50, plus:
* Improved settings for self-Elo matches
* Batch renorm from the start (and practice tuning hyperparams)
* FPU Reduction 0.5, 0 at root instead of -1 absolute
* DTZ policy boost (try to reduce endgame trolling)
  * Disabled later in the run due to complications interacting with KLD.
## T50
* 10x128 SE net
* Policy head: two 3x3 80 channel CNN (same as AZ)
* Value head: WDL (Win-Draw-Loss outputs instead of a single _Q_ output)
* KLD (spend less time on obvious moves, more on surprising ones).
* Batch renorm added (after ?)
* Did not use: Improved settings for self-Elo matches
## T40
* 20x256 SE net
* Policy head: one 1x1 80 channel CNN + FC layer
* Value head: Expected value (aka _V_)
* Batch renorm added (after 41546)
* Improved settings for self-Elo matches (after 41772)
## T37
* 10x128 SE net
* Policy head: one 1x1 80 channel CNN + FC layer (more channels to be closer to AZ)
* Value head: Expected value (aka _V_)
## T35
* 10x128 SE net
* Policy head: one 1x1 32 channel CNN + FC layer
* Value head: Expected value (aka _V_)
## T30
* 20x256 net
* Policy head: one 1x1 32 channel CNN + FC layer
* Value head: Expected value (aka _V_)
* FPU -1 absolute (from net ?)

# Older history

## Summary of major changes and milestones.

* 2018-06-10, ID 396: Switch main training pipeline to use scs-ben's bootstrapped net to try to shortcut fixing [rule50 issues](https://github.com/glinscott/leela-chess/issues/602). Elo dropped for awhile because of this transition, but tests show the rule50 issues are mostly gone.
* 2018-06-05, ID 379: [rule50 plane normalized](https://github.com/glinscott/leela-chess/issues/602). Batch Norm Betas enabled. The main training pipeline is using these changes, but so far recovery from the rule50 norm fix is very slow. In parallel some 3rd parties (scs-ben, logosgg) are bootstrapping a 15x192 and a 20x256 net from existing data. And also the lc0 client is starting from scratch. After we observe progress on these we will decide how to proceed.
* 2018-05-23, ID 330: Generate new networks once every ~40K games, but only do 10K steps (was 50K steps). Revert value_loss_weight back from 0.25 to 1.0.
* 2018-05-13, ID 287: Change value_loss_weight from 1.0 to 0.25 as a temporary workaround for [oversampling](https://github.com/LeelaChessZero/lc0/wiki/Large-Elo-fluctuations-starting-from-ID253).
* 2018-05-10, ID 271: v0.10
  * Fix #577 - Two inputs to the Neural Network (rule50 and the all 1s plane) were not connected properly.
  * Set `--fpu_reduction=0` for training games.
* 2018-05-08, ID 267: v0.9 disable tree reuse in self-play (wider search at root).
* 2018-05-06, ID 253: [Large Elo fluctuations](https://github.com/LeelaChessZero/lc0/wiki/Large-Elo-fluctuations-starting-from-ID253) began.
* 2018-05-02, ID 237: v0.8 fix a bug in FPU, tune FPU and PUCT.
* 2018-04-30, ID 227: Increased network size from 10x128 to 15x192. Self play games will be about twice as slow now.
* 2018-04-18, ID 145: v0.7 fixed a bug in the code for black pawn promotions. 
  * See [PR#351](https://github.com/glinscott/leela-chess/pull/351). This bug started affecting ID125. Training out of the bug started around ID145. 
  * A [direct black queening test position](https://docs.google.com/spreadsheets/d/1FG4EHjhtRK6itsOpPktW0ad9-_Ib8q04rcwqBf3ZcsY/edit#gid=0) shows recovery by ID149, with continued improvement afterwards. 
  * A [3 ply deep black queening test position](https://docs.google.com/spreadsheets/d/1884-iHTzR73AgFm19YYymg2yKnwhtHdaGyHLVnffLag/edit#gid=0) shows recovery by ID170.

* 2018-04-17, ID 125: Leela 125 vs Fruit 2.1 on TCEC, 6 15+10 games. `+4 =1 -1` https://lichess.org/study/CmnpSyrx

* 2018-04-17, ID 125: Leela 125 vs Stockfish 1.0 on TCEC, 20 15+10 games. `+7 =3 -10` https://lichess.org/study/6cDZXrjY

* 2018-04-17, ID 125: An informal bullet match against IM lovlas `+17 =0 -0` https://lichess.org/study/YlP9Chea

* 2018-4-15,16, ID 125: First match on TCEC, a rapid match vs Scorpio 2.79: `+4 =3 -13` https://lichess.org/study/MFUV2n3I (games 5 & 6 are a highlight, as Leela won both sides of the opening)

* 2018-4-14, ID 125: An informal 20+5 match on Lichess vs IM lovlas: `+9 =2 -0` https://lichess.org/study/kLXrkT4M

* 2018-4-12, ID 123: Increase net size from 6x64 to 10x128, and architecture changes. Revert from -v1600 back to -v800.

* 2018-4-7: Promotion gating changed from -50 to -150.
 
* 2018-4-6, ID 94: Self play games changed from -v800 to -v1600. This will produce higher quality games but run twice as slow. The main motivation for this change is to balance the rate of new games coming in to new networks being trained.

* 2018-3-29: During the transition from client V3 to V4, the move_count input to the NN was disabled. This caused some strange effects while self play and match games were being produced from a mix of V3 and V4 clients. Also networks trained from before this period may not work well in V4 clients.
