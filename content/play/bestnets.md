---
title: "Best Network"
weight: 800
wikiname: "Best-Nets-for-Lc0"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---
There is no single "best net" for Leela but there a few worth recommending for various purposes. The most important consideration in choosing a net is picking the right size for your hardware and time controls (TC). In general, if you have a weak GPU (or no GPU at all) and you want to only spend milliseconds per move, then you want a smaller net that evaluates positions more quickly, i.e. higher NPS (nodes per second). On the other hand, if you have an RTX card (or several) and you want to run an analysis on a single move for hours at a time, then the quality of the evaluation is more important than the speed and a larger (but slower) net is probably going to work best.

---

### Size versus Recommended Purpose
* Smaller than 10b: Recommended for sparring vs humans
* 10b: Recommended for running on CPU
* 20b: Recommended for running on non-RTX cards or TC on the order of seconds (with RTX)
* 24b: Recommended for running long analysis or TC > 1 minute per move with an RTX card
* Bigger than 24b: Mostly just for testing and research at this point

### Network List

| Size   | Name             | Source for Download               | Notes            |
|--------|------------------|-----------------------------------|------------------|
| 5b x 48f   | Good Gyal 5      | [GitHub: dkappe Bad Gyal](https://github.com/dkappe/leela-chess-weights/wiki/Bad-Gyal) | Other sizes also here |
| 9b x 112f  | ID11258-112x9-se | [GitHub: dkappe Distilled Networks](https://github.com/dkappe/leela-chess-weights/wiki/Distilled-Networks) | Other sizes also here |
| 10b x 128f | Latest T58       | [lczero.org run 2 networks](https://lczero.org/networks/2) | Current test run |
| 10b x 128f | Little Demon 2 | [data.lczero.org repository](http://data.lczero.org/files/networks-contrib/) (LD2) | JH nets also here |
| 16b x 192f | J20-460          | [GitHub: jhorthos Leela Training](https://github.com/jhorthos/lczero-training/wiki/Leela-Training) | Trained on T40 data |
| 20b x 256f | Leelenstein 12.1 | [Patreon: jjosh](https://www.patreon.com/posts/ls-12-1-32002737) | Not yet public |
| 20b x 256f | T40.B4-160       | [GitHub: jhorthos Leela Training](https://github.com/jhorthos/lczero-training/wiki/Leela-Training) | Trained on T40 data |
| 20b x 256f | 42850            | [lczero.org run 1 networks](https://lczero.org/networks/1) | Last T40 net |
| 24b x 320f | J13B.2-136       | [GitHub: jhorthos Leela Training](https://github.com/jhorthos/lczero-training/wiki/Leela-Training) | "Terminator 2" Net |
| 24b x 320f | Latest T60       | [lczero.org run 1 networks](https://lczero.org/networks/1) | Current main run |
| 30b x 384f | SV-t40-1207      | [Sergio-V repository](https://www.comp.nus.edu.sg/~sergio-v/t40/384x30/) | Trained on T40 data |

---
If this page hasn't been updated recently, check the [Discord](https://discordapp.com/channels/425419482568196106/425419483016855563) channels for a recommendation. Be sure to specify your hardware and use case so the helpful regulars know what to recommend.