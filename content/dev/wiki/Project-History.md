---
title: "Project History"
weight: 500
wikiname: "Project-History"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---
* See also our [blog](https://blog.lczero.org)
* [Discord chat](https://discord.gg/pKujYxD) #announcements and #dev-log have the most detailed updates.

## T80
* Start date: 2022-04-03
* Network size: 15 residual blocks, 512 filters
* Attention policy head with 0 encoder layers, ReLU activations replaced with mish
* Training started from an initial net trained by tilps on T79 data for ~2m steps
* Initial learning rate of 0.04
  * 800127: Reduced to 1k steps per net (64k games)
  * 800226: Learning rate drop to 0.004, reg. term weight 0.15, back up to 2k steps per net
  * 800784: Reduced to 1k steps per net again (64k games)
  * 801910: Reduced to 500 steps per net (64k games)

## T79
* Start date: 2022-02-25
* Network size: 15 residual blocks, 192 filters
* Attention policy head with 0 encoder layers, ReLU activations replaced with mish
  * 790202: KLD dropped from 60 to 50 micronats
  * 790243: Policy softmax temperature set to 1.45 (up from 1.40)
  * 790264: Reverted last policy softmax temperature change
  * 790279: Learning rate drop to 0.04
  * 790401: Reg term weight set to 0.75
  * 790451: Reg term weight set to 0.6
  * 790503: Reg term weight set to 0.5
  * 790612: Policy softmax temperature set to 1.45... again (up from 1.40)
  * 790652: Learning rate drop to 0.004, reg term weight set to 0.15
  * 790994: Reg term weight to 0.1
  * 791071: Fpu value set to 0.26 (up from 0.23)
  * 791334: Learning rate drop to 0.0004, reg term weight set to 0.05
  * 791770: Learning rate drop to 0.00004
  * 791971: Reg term weight disabled
  * End date: 2022-05-20

## T78
* Start date: 2021-12-03
* Network size: 40 residual blocks, 512 filters
* Training started from an initial net trained by masterkni6 
* Initial learning rate of 0.0002

## T77
* Start date: 2021-11-21
* Network size: 15 residual blocks, 192 filters
* Input format 4
  * 770041: KLD set to 40 micronats (down from 60)
  * 770252: Learning rate drop to 0.04, reg term weight set to 0.5
  * 770559: Learning rate drop to 0.004, reg term weight set to 0.15
  * 771043: Reg term weight set to 0.1
  * 771258: Learning rate drop to 0.0004 and reg term weight to 0.05
  * 771548: Learning rate drop to 0.00004 and reg term weight to 0.02
  * End date: 2021-12-31

## T76
* Start date: 2021-10-16
* Network size: 15 residual blocks, 192 filters
* Value focus params applied at the beginning of the run
  * 760003: KLD set to 170 (down from 340)
  * 760005: KLD set to 80 (down from 170)
  * 760010: KLD set to 60 (down from 80)
  * 760052: KLD set to 40 (down from 60)
  * 760232: Learning rate drop to 0.04, reg term weight set to 0.5
  * 760434: Reg term weight set to 1.0
  * 760444: Reg term weight reverted back to 0.5
  * 760454: Reverted training net back to 760433
  * 760489: Learning rate drop to 0.004, reg term weight to 0.15
  * 760897: Reg term weight to 0.1
  * 760944: Learning rate drop to 0.0004, reg term weight to 0.05
  * 761257: Learning rate drop to 0.00004, reg term weight to 0.02
  * End date: 2021-11-21
## T75
* Start date:
  * End date: 2021-10-16
## T74
* Start date:

## T73
* Start date:

## T72
* Start date:

## T71
* Start date:

## T70
* Start date: 2020-02-17
* Network size: 10 residual blocks, 128 filters
* Purpose: 
  * 700002: KLD set to 30 micronats (up from 20)
  * 700061: swa_max_n set to 10
  * 700105: KLD set to 20 micronats (down from 30)
  * 700140: Learning rate drop to 0.04
  * 700271: Initial temp set to 1.0
  * 700324: Initial temp for match games set to 1.0
  * 700377: Initial temp for match games set to 1.2
  * 700378: Learning rate drop to 0.004
  * 700511: Initial temp set to 0.9
  * 700555: Training params changed, cpuct 1.32, cpuctatroot 1.9, fpu value 0.23
  * 700640: Initial temp set to 1.0, endgame temp set to 0.75, visit offset to -3
  * 700699: Revert last change
  * 700812: Learning rate drop to 0.0004 
  * 701046: Endgame temp set to 0.45, endgame-cutoff to 26
  * 701124: Endgame temp set to 0.3
  * 701214: Endgame temp cutoff set to 40
  * 701290: Sticky-endgames enabled
  * 701398: KLD set to 15 micronats (down from 20)
  * 701400: KLD set to 12 micronats (down from 15)
  * 701458: Training params changed, cpuctatroot 2.1
  * 701463: Learning rate drop to 0.00004
  * 701473: Match params synced to training params
  * 701492: Learning rate raised to 0.004, Training and match params changed, cpuctatroot 1.9, KLD set to 20 micronats (up from 12)
  * 701522: Endgame temp cutoff set to 32
  * 701556: Temp decay set to 72
  * 701603: Temp cutoff set to 60 with no decay
  * 701752: Endgame temp set to 0
  * 701809: Enabled gaviota moves left rescoring
  * 701884: Endgame temp set to 0.45
  * 701955: Endgame temp set to 0.3
  * 701955: MLH attached
  * 702218: Temp set to 0.9, endgame temp to 0.3, tempdecay-delay to 40, tempdecay to 30, temp cutoff to 60
  * 702403: Tempdecay-delay set to 20, tempdecay to 60
  * 702516: Endgame temp set to 0.4, tempdecay to 72
  * 702567: Match params changed, sticky endgames enabled
  * 703080: Endgame temp to 0.5, tempdecay to 90,
  * 703314: Endgame temp set to 0.45
  * 703460: Learning rate drop to 0.00008
  * End date: 2020-7-11

## T60
* Start date: 2019-07-26
* Network size: 320 filters, 24 residual blocks until 66511; 384 filters, 30 blocks from 66512
* Uses an absolute fpu of 1 at root.
* Important changes during the run (for minor changes consult the Discord log):
  * 60584: Training start temperature reduced to 1.15 (was 1.2)
  * 60647: Temperature further dropped to 1.1.
  * 60691: Temp visit offset changed to -0.9
  * 60781: Learning rate drop to 0.015
  * 60951-60955: Briefly activated multinet. Deactivated due to worse game generation speed.
  * 61306: **Policy softmax temperature set to 1.2** (up from 1.0)
  * 61433: Initial temperature to 1.3, temp decay aiming at 0 by move 23, but instead truncating at 0.4 at move 16.
  * 61486: Temperature set to 1.2 decaying to 0.35
  * 61538: Temperature decaying to 0.45
  * 61606: Temperature set to 1.1 decaying to 0.45
  * 61657: Endgame cutoff for the temperature at 22 instead of 16 (tempdecay moves to 37 instead of 26 to achieve this)
  * 61708: Endgame cutoff of 26
  * 61771: Learning rate drop to 0.0015
  * 62479: Temperature set to 0.9 transitioning to 0.65 without decay
  * 62622: Endgame temperature set to 0.75
  * 62670: Lookahead optimizer introduced; LR doubled to 0.003
  * 62721: Learning rate drop to 0.001
  * 63022: Learning rate back up to 0.003
  * 63062: CPuct set to 1.9, CPuctAtRoot remaining at 2.5
  * 63158: Endgame temperature back to 0.65
  * 63486: **Moves left head (MLH) attached**, no MLH settings active for now
  * 63531: MLH parameters enabled in training (quadratic Q scaling with 0.004 slope and 0.1 max effect)
  * 63828: **Policy softmax temperature set to 1.4** (up from 1.2) in conjunction with noise epsilon of 0.1 and alpha of 0.12
  * 63965: CPuct in tree of 1.3, CPuctAtRoot remaining at 2.5
  * 64026: FpuValue set to 0.3
  * 64195: Temperature set to 0.9 decaying to 0.45 (delay-moves=20, moves=80, cutoff-move=60)
  * 65105: CPuct in tree of 1.6, FpuValue in tree of 0.4
  * 65240: CPuct in tree of 1.3, FpuValue in tree of 0.3
  * 65479: Learning rate drop to 0.0002
  * 66512: Network size increased to 384x30b
  * 66664: Learning rate drop to 0.00008
  * 66868: Experimenting with learning rate 0.0002, endgame temp 0.5, cutoff-move 55
  * 66998: Further raising endgame temp to 0.55
  * 67366: Endgame temp set to 0.6
  * 67673: Reduced endgame temp to 0.55
  * 67739: Introduced value focus with min 0.7, slope 1.0
  * 67834: Further reduced endgame temp to 0.45
  * 67992: Training migrated to noob's machine; batch splits reduced by 4x
  * 68110: Value focus min set to 0.5
  * 68160: Value loss weight raised to 0.8
  * 68200: Deblunder started with threshold 0.1 (not active until aprox. 68380)
  * 68256: Value loss weight raised to 1.6 to match T74
  * 68623: Temp set to 0.9 decaying to 0.6 
  * 69426: Introduce 960 book, set at 2%
  * 609947: Value focus min set to 0.05, slope 2.0
  * 610077: Training and match params changed, cpuct 1.32, cpuctatroot 1.9, fpu value 0.23
  * 610161: Introduced 'diff focus' with q_weight 6.0, pol_scale 3.5, focus slope 3.0, focus min 0.025
  * 610269: Dirichlet noise 0.25, alpha noise, 0.30
  * 610323: Tuned values applied, cpuct 0.96, fpu value 0.28
  * 610885: Learning Rate drop to 0.0001, # of steps to 1000, switched to 2 gpu's with batch size of 1024 and no splits
  * 611226: Batch normalization momentum set to 0.999
  * End date: 2022-01-08

## T59
* Start date: 2019-12-12
* End date: 2020-02-17
* Same as T58 on termination, but no multinet

## T58
* Start date: 2019-09-28
* End date: 2019-12-12
* Same as T57, plus:
* Multinet
* Temperature of 1.1
* Important changes during the run:
  * 58188: Policy softmax temperature set to 1.2 (up from 1.0)

## T57

* Start date: 2019-08-16
* Same as T60, except for 128 filters and 10 residual blocks.

## T56
* Start date: 2019-07-25
* Same as T55, but the learning rate search will only trigger (for 1k steps) if the regularization term has gone up by more than 0.01% in the last 50 steps.

## T55
* Start date: 2019-07-19
* Same training parameters as T52 to act as a comparison point (0.45 endgame temperature and 12 micronats kld)
* Focus is on whether an experimental learning rate search can reduce the time to train without reducing strength.
* Test was declared a failure on completion.

## T54
* Same as T53, plus:
* Aggressive lowering of kldgain thresholds.
* Seed data (100k games) was produced by a 8x1 network with zero weights.

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
* End date: 2019-07-26
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
