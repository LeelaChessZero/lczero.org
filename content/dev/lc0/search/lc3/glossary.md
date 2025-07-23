---
title: "Glossary"
weight: 300
math: true
summary: "Summary of terms and the data types used in lc3 search"
---

There are too many similar types (and used to be 4 more!) in the lc3 search
code, so it feels like a good idea to list them.

## Vocabulary

First, let's fix some vocabulary and variable names. It's still in flux and
quite inconsistent in the code, and I'm not sure whether to use "classic-style"
names like `q`, `n`, or use more descriptive names like `num_visits`,
`node_value`.

| short | long                  | Description                                                          |
| ----- | --------------------- | -------------------------------------------------------------------- |
| `n`   | `num_visits`          | Number of visits to a node                                           |
| `m`   | `moves_left`          | Number of moves (actually, ply) left, as predicted by NN             |
| `w`   | `win_probability`     | Probability of winning                                               |
| `d`   | `draw_probability`    | Probability of drawing                                               |
| `l`   | `loss_probability`    | Probability of losing                                                |
| `v`   | `net_win_probability` | `w - l`. This is the value we store in the node for compactness.[^1] |
| `q`   | `node_value`          | `q` value to use in the \(Q+U\) formula. [^2]                        |

Some of these values may have a prefix:

| short  | long          | meaning                                           |
| ------ | ------------- | ------------------------------------------------- |
| `raw_` | `raw_`        | Single node value (e.g. as returned by the NN)    |
| `agg_` | `aggregated_` | Aggregated value (e.g. average of multiple nodes) |

## Data types

### `Variation`


[^1]: Note that it has different meaning from `v` in the classic search, where
it meant "raw value from the NN".

[^2]: Note that it also has slightly different
meaning from `q` in the classic search. It's not what is stored in the node
(which is `v` and `d`), but rather what's computed for the PUCT formula.