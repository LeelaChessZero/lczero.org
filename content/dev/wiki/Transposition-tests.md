---
title: "Transposition tests"
weight: 500
wikiname: "Transposition-tests"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---
## Data sets:

1. FEN dataset: All positions from http://data.lczero.org/files/training_pgns/pgns-run1-20190419-1854.tar.bz2 (12'582'379 positions).
2. Tree nodes after `go nodes 1000000` from **startpos** with network `id42482`.
3. Tree nodes after `go nodes 1000000` from (middlegame) [r2br3/ppq2pkp/2b2np1/4p3/6N1/2PB1Q1P/PP1B1PP1/R3R1K1 w - - 1 2](https://lichess.org/analysis/standard/r2br3/ppq2pkp/2b2np1/4p3/6N1/2PB1Q1P/PP1B1PP1/R3R1K1_w_-_-_1_2) with network `id42482`.
4. Tree nodes after `go nodes 1000000` from (late middlegame) [br5r/2bpkp2/B6p/2p4q/1PN1np2/P3P3/1BQ3PP/R4RK1 w - - 0 26](https://lichess.org/analysis/standard/br5r/2bpkp2/B6p/2p4q/1PN1np2/P3P3/1BQ3PP/R4RK1_w_-_-_0_26) with network `id42482`.
5. Tree nodes after `go nodes 1000000` from (endgame) [8/8/1p1n2k1/3P2p1/3P1b2/1P1K1B2/8/4B3 w - - 2 55](https://lichess.org/analysis/standard/8/8/1p1n2k1/3P2p1/3P1b2/1P1K1B2/8/4B3_w_-_-_2_55) with network `id42482`.
6. Same as dataset 6, but with 10'000'000 nodes (10 times more).
7. Perpetual check position [r6k/pp4pp/2p5/5Q2/1q5P/8/2P2PP1/1K1R3R w - - 1 25](https://lichess.org/jHxiNNJd#48) from Leko vs Kramnik game. `go nodes 1000000` with network `id42482`.
8. KRN vs KR draw enggame, [6r1/6k1/8/8/8/8/3N4/2KR4 w - - 0 1](https://lichess.org/analysis/standard/6r1/6k1/8/8/8/8/3N4/2KR4_w_-_-). `go nodes 1000000` with network `id42482`.

### Stats

*Note: Ignore MaterialKey for now, that was crem's idea for Lc2*

- Percentage of positions requiring MaterialKey to be computed:
  - **Dataset 1**: **29.8**%
  - **Dataset 2**: **46.7**%
  - **Dataset 3**: **48.1**%
  - **Dataset 4**: **33.1**%
  - **Dataset 5**: **7.1**%
  - **Dataset 6**: **46.6**%
- Bucket size distribution (Remaining bits encode pawns at ranks 2 and 3):
  - **Dataset 1**: (just for completeness; not really useful stats as positions are sampled from different games).
      - 2312346 buckets. 5.44 positions per bucket (4.7 if only unique).
      - Fun fact: 4.8% of all positions in training data is RKvsRK.
  - **Dataset 6 (unique only)**:
      - 313978 buckets, 11.8 posisions per bucket.
      - Top bucket countains  0.672% of nodes (24951).      
- Bucket size distribution (Remainig bits encode hash of pawns)
  - **Dataset 6 (unique only)**: 388226 buckets (9.5)
      - 98.5% of larger buckets contain 50% of nodes (remaining 50% nodes are contained in size < 100 buckets).
      - Size < 16 buckets still contain 25% of Nodes.
  - **Dataset 5 (unique only)**: 573 buckets, (240.0)
  - **Dataset 1 (unique only)**: 2491831 buckets, (4.36)

## Number of transpositions with exact and non-exact history

### Conclusions

- Keeping one copy of unique position leads to 50% tree reduction in most cases (and closer to endgames even more).
- Including history into the position key destroys large part of benefit.
- On the other hand, including rule50 counter into the position key doesn't spoil things much, and removes need of an NN cache (also adds a nice benefit of non-loop PV, e.g. move graph becomes DAG, although it's not really needed).
- Threefold and twofold repetitions are very rare, and it's worthwhile to have slower logic when handling them. Also it's fine to only support threefold and not twofold.
- Memory footprint for handling repetitions ("pseudonodes") is very reasonable.

| Dataset                 |        3 midg. |   4 late midg. |        5 endg. |        6 startp. | 8 shuf. |
|:------------------------|---------------:|---------------:|---------------:|-----------------:|--------:|
| Positions               |        1000350 |        1000107 |        1000000 |         10111141 | 1000145 |
| Unique positions        | 537946 (53.8%) | 692459 (69.2%) | 103738 (10.4%) |  3290287 (32.5%) |  243723 |
| Unique pos with history | 702473 (70.2%) | 875692 (87.6%) | 897186 (89.7%) |  4535616 (44.9%) |  949180 |
| Unique pos rep2 history | 538307 (53.8%) | 700134 (70.0%) | 111754 (11.2%) |  3291930 (32.6%) |  245762 |
| Unique +rule50          | 584265 (58.4%) | 750441 (75.0%) | 129460 (12.9%) |  3685536 (36.5%) |  278887 |
| Threefold               |             69 |           3128 |            404 |              323 |      33 |
| Twofold                 |            413 |           3438 |          20606 |             3794 |    6853 |
| Norep                   | 999223 (99.9%) | 970586 (97.0%) | 918339 (91.8%) | 10097097 (99.9%) |  983750 |
| Pseudonodes             |            878 |           8002 |          21020 |             2651 |   10415 |

| Dataset                 |      2 startp. | 7 perpet. |
|:------------------------|---------------:|----------:|
| Positions               |        1000232 |   1001502 |
| Unique positions        | 409988 (41.0%) |     23244 |
| Unique pos with history | 535639 (53.6%) |     64001 |
| Unique pos rep2 history | 410229 (41.0%) |     34520 |
| Unique +rule50          | 449766 (45.0%) |     29254 |
| Threefold               |             60 |    109884 |
| Twofold                 |            355 |     99294 |
| Norep                   | 999036 (99.9%) |     88295 |
| Pseudonodes             |            363 |       436 |



- **Dataset** -- title of dataset.
- **Positions** -- number of positions in the set.
- **Unique positions** -- number of unique positions in the set (what makes a cache hit in Lc0).
- **Unique positions with history** -- number of unique positions in the set, where all positions from the last capture or pawn move (in any order) are included into positions.
- **Unique positions with rep2 history** -- the same, but only history positions which appeared more than once are included into the position.
- **Unique +rule50** -- Number of unique positions (without history) if rule50 count is included into position hash.
- **Threefold** -- Number of three-fold repetition positions.
- **Threefold** -- Number of exact two-fold repetition positions.
- **Norep** -- Number of positions which do not include any repetitions in PV.
- **Pseudonodes** -- Number of additional "pseudo nodes" due to repeptition handles.