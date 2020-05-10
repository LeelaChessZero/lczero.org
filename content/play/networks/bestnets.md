---
title: "Actual networks"
weight: 800
wikiname: "Best-Nets-for-Lc0"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---
There is no single "best net" for Leela but there a few worth recommending for various purposes. The most important consideration in choosing a net is picking the right size for your hardware and time controls (TC). In general, if you have a weak GPU (or no GPU at all) and you want to only spend milliseconds per move, then you want a smaller net that evaluates positions more quickly, i.e. higher NPS (nodes per second). On the other hand, if you have an RTX card (or several) and you want to run an analysis on a single move for hours at a time, then the quality of the evaluation is more important than the speed and a larger (but slower) net is probably going to work best.

---

### Size versus Recommended Purpose
* 30b: Recommended for multi-GPU (RTX), long analysis, or when speed isn't a major factor
* 24b: Recommended for TC > 1 minute per move with an RTX card
* 20b: Recommended for running on non-RTX cards or TC on the order of seconds (with RTX)
* 10b: Recommended for running on CPU
* <10b: Recommended for sparring vs humans

## Network Lists

In each section, the nets are listed in descending order of strength.


### 30 blocks x 384 filters:
| Name             | Source for Download               | Notes            |
|------------------|-----------------------------------|------------------|
| 384x30-t60-3010 | [Sergio-V repository](https://www.comp.nus.edu.sg/~sergio-v/t60/384x30/) | Trained on T60 data. Won CCC13 and TCEC 17 |
| 384x30-t40-1705| [Sergio-V repository](https://www.comp.nus.edu.sg/~sergio-v/t40/384x30/) | Trained on T40 data |


### 24 blocks x 320 filters:
| Name             | Source for Download               | Notes            |
|------------------|-----------------------------------|------------------|
| Latest T60       | [lczero.org run 1 networks](https://training.lczero.org/networks/1) | Current main run |
| J13B.2-136       | [GitHub: jhorthos Leela Training](https://github.com/jhorthos/lczero-training/wiki/Leela-Training) | "Terminator 2" Net |


### 20 blocks x 256 filters:
| Name             | Source for Download               | Notes            |
|------------------|-----------------------------------|------------------|
| Leelenstein 14.2 | [Patreon: jjosh](https://www.patreon.com/posts/ls-14-2-35886573) | Early Access (Patrons only) |
| Leelenstein 14.0 | [14.0 Post](https://www.patreon.com/posts/ls-14-34414677) | No account required |
| SV-20b-t40-1541  | [Sergio-V repository](https://www.comp.nus.edu.sg/~sergio-v/t40/256x20/) | Trained on T40 data |
| 42850   | [training.lczero.org direct download](https://training.lczero.org/get_network?sha=00af53b081e80147172e6f281c01daf5ca19ada173321438914c730370aa4267) | Last T40 net |


### 10 blocks x 128 filters:
| Name             | Source for Download               | Notes            |
|------------------|-----------------------------------|------------------|
| 591226  | [training.lczero.org direct download](https://training.lczero.org/get_network?sha=47e3f899519dc1bc95496a457b77730fce7b0b89b6187af5c01ecbbd02e88398) | Last T59 net |
| Latest T70  | [lczero.org run 2 networks](https://training.lczero.org/networks/2) | Current test run |
| Little Demon 2 | [data.lczero.org repository](http://data.lczero.org/files/networks-contrib/) (LD2) | JH nets also here |


### Asorted sizes:
| Size   | Name             | Source for Download               | Notes            |
|--------|------------------|-----------------------------------|------------------|
| 16b x 192f | J20-460          | [GitHub: jhorthos Leela Training](https://github.com/jhorthos/lczero-training/wiki/Leela-Training) | Trained on T40 data |
| 9b x 112f  | ID11258-112x9-se | [GitHub: dkappe Distilled Networks](https://github.com/dkappe/leela-chess-weights/wiki/Distilled-Networks) | Other sizes also here |
| 5b x 48f   | Good Gyal 5      | [GitHub: dkappe Bad Gyal](https://github.com/dkappe/leela-chess-weights/wiki/Bad-Gyal) | Other sizes also here |
| 2b x 16f   | Tiny Gyal      | [GitHub: dkappe Bad Gyal](https://github.com/dkappe/leela-chess-weights/wiki/Bad-Gyal) | Other sizes also here |


Note: The Sergio-V nets are also available on [data.lczero.org](http://data.lczero.org/files/networks-contrib/sergio-v/) in some cases.

---

### "This is all too complicated. Just tell me what net to use!"

If you don't care about squeezing out the very best performance for a particular situation and want a general-purpose net, pick a medium size 20b net, which should do reasonably well (if not optimally) under most common conditions.

The strongest 20b nets are the Leelensein ones listed above but these aren't trained purely on Lc0 data. The best 20b net trained only on Lc0 data is `256x20-t40-1541.pb.gz` from [Sergio Vieri's repository](https://www.comp.nus.edu.sg/~sergio-v/t40/256x20/).

---

If this page hasn't been updated recently, check the [Discord](https://discord.gg/pKujYxD) channels for a recommendation. Be sure to specify your hardware and use case so the helpful regulars know what to recommend.