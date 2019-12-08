---
title: "Batchsize   Node Collisions Testing"
weight: 500
wikiname: "Batchsize---Node-Collisions-Testing"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---
1024 bs 256 nc (cccc 2 params) vs default so far.
```
Score of lc0 v18 1024 vs lc0 v18: 33 - 45 - 89 [0.464]
Elo difference: -25.01 +/- 36.08
```
Trying medium vs large batchsize. 1024 batchsize and 256 node cccc vs TCEC 512/32.
```
Score of lc0 v18 1024 vs lc0 v18 512: 20 - 29 - 65 [0.461]
Elo difference: -27.49 +/- 41.92
```

Trying 512/128 vs default.
```
Score of lc0 v18 512 vs lc0 v18: 87 - 86 - 155 [0.502]
Elo difference: 1.06 +/- 27.32
```

Trying lower node collisions than default.
```
Score of lc0 v18 512 16 vs lc0 v18 512: 41 - 48 - 109 [0.482]
Elo difference: -12.29 +/- 32.49
```
Trying larger than default.
```
Score of lc0 v18 512 vs lc0 v18 512 nc128: 46 - 37 - 95 [0.525]
Elo difference: 17.58 +/- 34.91
```

Navs will add more data to this.
`TLDR. 1024 batchsize never wins. Non-default node collisions never wins.`