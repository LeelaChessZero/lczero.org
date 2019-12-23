---
title: "TCEC"
weight: 200
wikiname: "TCEC"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---
TCEC (Top Chess Engine Championship) is a computer chess tournament organized and maintained by Chessdom at http://tcec.chessdom.com/. This page documents Leela configuration in each of the "seasons" of this tournament.

# Season 13
| Division | Executable               | Network     | Placement | Result    |                                                                                                              
| -------- | --------------------------------------------------------------------------- |-----| ------- | ------ | 
| Div4     | lc0 "v0.16.1" ([b1301aa9](https://github.com/LeelaChessZero/lc0/commit/b1301aa9a9be0c5f62aac8279ca5fb627c365f6f)) |10161|1st place| 22.0/28|
| Div3     | lc0 "v0.16.1" ([b1301aa9](https://github.com/LeelaChessZero/lc0/commit/b1301aa9a9be0c5f62aac8279ca5fb627c365f6f)) |10520|3rd place| 16.0/28|

* Hardware: TCEC GPU server has 2x GTX 1080 ti. Full specs [here](http://www.chessdom.com/tcec-season-13-the-advance-of-the-nns)
* Command line: `lc0 -w 10161 -t 4 --minibatch-size=512 --backend=multiplexing "--backend-opts=(backend=cudnn,gpu=0),(backend=cudnn,gpu=1)" --nncache=2000000 -l lc0debug.txt`
* UCI: `Move time overhead in milliseconds=2000`
  * Div3 added: `Time weight curve peak ply=37; Aggressive smart pruning threshold=0.604; Scale thinking time=3.05;`

TCEC "v0.16.1" binary from [appveyor](https://ci.appveyor.com/project/LeelaChessZero/lc0/build/317/job/2jeyneauuvuj0c25/artifacts)

[[TCEC S13 issues]]

# Bonus games 7-10-2018
* Net IDs: kb3 and id481
* Hardware: TheAnswer volunteered 2x1080 ti via ssh access.
* Command line: `./lc0 -w [kb3|id481] --backend=multiplexing '--backend-opts=a(backend=cudnn,threads=2,gpu=0),b(backend=cudnn,threads=2,gpu=1)' -t 4` (kb1 and default respectively with increased move overhead to help with latency). 

# Season 12
* Versions
  * Div4: lczero v0.10, ID125 - +0 -25 =2 (and 1 win by forfeit)
* Hardware: TCEC CPU server 2 x 8 core Intel Xeon E5-2689 @ 3300 MHz
* Command line: `lczero -w id125 ....?`
