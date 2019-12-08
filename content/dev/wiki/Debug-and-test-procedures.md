---
title: "Debug and test procedures"
weight: 500
wikiname: "Debug-and-test-procedures"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---
## Example tournament command line
```
./cutechess-cli -rounds 100 -tournament gauntlet -concurrency 2 -pgnout results.pgn \
 -engine name=lc_gen13_fpu cmd=lczero_fpu arg="--threads=1" arg="--weights=$WDR/cd1a1e" arg="--playouts=800" arg="--noponder" arg="--noise" tc=inf \
 -engine name=lc_gen13 cmd=lczero arg="--threads=1" arg="--weights=$WDR/cd1a1e" arg="--playouts=800" arg="--noponder" arg="--noise" tc=inf \
 -each proto=uci
```

***

## Analysis of positions
(I think with some upcoming patches we can do this in GUIs together with `-l lzcdebug.log`).

Download from https://www.cs.kent.ac.uk/people/staff/djb/pgn-extract

`~/projects/pgn-extract/pgn-extract missmate.pgn -Wuci`

Cut output at the point you want to test, and put into a file e.g. missmate.cmd:
```
position startpos moves e2e4 f7f6 d2d4 d7d6 c2c4 a7a5 b1c3 e7e5 g1e2 c8e6 d4e5 c7c6 e5f6 h7h5 c3d5 e6d5 d1d5 c6d5 b2b4 d5e4 b4a5 a8a5 c1h6 g8f6 h2h3 b8c6 a1b1 b7b5 b1b5 c6d4 a2a4 d4b5 h6f4 h5h4 e1d2 f6d5 e2c1 d8d7 a4b5 g7g6 f4h6 d5e7 h1g1 e7f5 c1a2 e8e7 g2g4 f5h6 a2b4 d6d5 b4d5 e7e6 d2e1 d7a7 f1g2 a7a8 d5f6 e6f6 g4g5 f6g5 g1h1 a8b8 h1f1 b8b6 f1g1 f8b4 e1d1 g5f6 d1c2 a5a3 g2f1 h6f5 f1e2 a3h3 g1a1 b4a5 c2b2 b6e3 a1a5 e3d2 b2a1 g6g5 a5a3 h3g3 a3a8 h8a8 a1b1 a8a4 f2f3 a4b4 b1a1
go
quit
```

***

Generate logfiles for different gen nets:
```
rm gen006_de1d.log; cat missmate.cmd | ./lczero -w ~/lcnetworks/gen006_de1d -t1 -s1 -p800 --noponder &>> gen006_de1d.log
rm gen009_b91f.log; cat missmate.cmd | ./lczero -w ~/lcnetworks/gen009_b91f -t1 -s1 -p800 --noponder &>> gen009_b91f.log
rm gen011_6d2e.log; cat missmate.cmd | ./lczero -w ~/lcnetworks/gen011_6d2e -t1 -s1 -p800 --noponder &>> gen011_6d2e.log
```

***

## Test FENs
* [g1=Q](https://docs.google.com/spreadsheets/d/1FG4EHjhtRK6itsOpPktW0ad9-_Ib8q04rcwqBf3ZcsY/edit#gid=0) * `8/R7/8/5b2/5k2/K7/6p1/8 b - - 0 1`
* [Rook exchange + Q](https://docs.google.com/spreadsheets/d/1884-iHTzR73AgFm19YYymg2yKnwhtHdaGyHLVnffLag/edit#gid=0) `6R1/1p1r1p1p/3n1k2/3R4/p2N2p1/4P3/r4PK1/8 b - - 0 42`
* Rook sac + fork from TCEC: `6R1/1p1r1p1p/3n1k2/3R4/p2N2p1/4P3/r4PK1/8 b - - 0 42`
