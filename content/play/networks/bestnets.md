---
title: "Actual networks"
weight: 800
wikiname: "Best-Nets-for-Lc0"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---
There is no single "best net" for Leela but there a few worth recommending for various purposes. 

The most important consideration in choosing a net is picking the right size for your hardware and time controls. In general, if you have a weak GPU or no GPU and want to only spend milliseconds per move, then you want a smaller net that evaluates positions more quickly, i.e. higher NPS (nodes per second). On the other hand, if you have an RTX card(s) and you want to run analysis from a position hours at a time, then the quality of the evaluation is more important than the speed, and a larger (but slower) net is probably going to work best.

---

### "This is all too complicated. Just tell me what net to use!"

If you don't care about squeezing out the very best performance for a particular situation and want a general-purpose net, pick a medium size 20b net, which should do reasonably well (if not optimally) under most common conditions.

The strongest 20b net is Leelenstein listed below, but it isn't trained purely on Lc0 data: [LS15 on Patreon](https://www.patreon.com/posts/leelenstein-15-0-38164065). The best 20b net trained only on Lc0 data is `256x20-t40-1541.pb.gz` from [Sergio Vieri's repository](https://www.comp.nus.edu.sg/~sergio-v/t40/256x20/).

---

### Size versus Recommended Purpose
* 30b: Recommended for RTX cards (any time control), GTX cards (analysis, long time control)
* 24b/20b: Recommended for GTX cards (short time control)
* 16b: Recommended for running on CPU (analysis, long time control)
* 10b: Recommended for running on CPU (short time control, long time control)
* <10b: Recommended for sparring vs humans

## Network Lists

In each section, the nets are listed (roughly) in descending order of strength. (Some may be too close to tell apart).


### 30 blocks x 384 filters:
| Name             | Source for Download               | Notes            |
|------------------|-----------------------------------|------------------|
| hanse-69722-vf2  | [Contributed networks on Lc0 data](http://storage.lczero.org/files/networks-contrib/) | Trained from 609722 on T60 data, value focus emphasizes positions with eval discrepancies. See [here](https://github.com/hans-ekbrand/lczero-training/wiki) | 
| Latest T60 after 606512       | [lczero.org run 1 networks](http://training.lczero.org/networks/1) | Current main run |
| J94-100 (outdated)           | [Contributed networks on Lc0 data](http://storage.lczero.org/files/networks-contrib/) | Based on Sergio-V networks, trained on T60 data + value repair method. TCEC22 DivP+SuFi net |
| Latest 30b SV net (outdated) | [Sergio-V repository](https://www.comp.nus.edu.sg/~sergio-v/t60/384x30/) | Trained on T60 data |
| SV-3972+jio-20k (outdated)   | removed | Submitted for TCEC 18 Superfinal |
| 384x30-t60-3010 (outdated)   | [Sergio-V repository](https://www.comp.nus.edu.sg/~sergio-v/t60/384x30/) | Won CCC13 and TCEC 17 |
| 384x30-t40-1705 (outdated)   | [Sergio-V repository](https://www.comp.nus.edu.sg/~sergio-v/t40/384x30/) | Trained on T40 data |


### 24 blocks x 320 filters:
| Name              | Source for Download               | Notes            |
|-------------------|-----------------------------------|------------------|
| T60 until 606511  | [lczero.org run 1 networks](https://training.lczero.org/networks/1) | Current main run |
| J13B.2-136        | [GitHub: jhorthos Leela Training](https://github.com/jhorthos/lczero-training/wiki/Leela-Training) | "Terminator 2" Net |


### 20 blocks x 256 filters:
| Name             | Source for Download               | Notes            |
|------------------|-----------------------------------|------------------|
| Leelenstein 15.0 | [15.0 Post](https://www.patreon.com/posts/leelenstein-15-0-38164065) | No account required |
| SV-20b-t40-1541  | [Sergio-V repository](https://www.comp.nus.edu.sg/~sergio-v/t40/256x20/) | Trained on T40 data |
| 42850            | [training.lczero.org direct download](https://training.lczero.org/get_network?sha=00af53b081e80147172e6f281c01daf5ca19ada173321438914c730370aa4267) | Last T40 net |


### 15/16 blocks x 192 filters:
| Name             | Source for Download               | Notes            |
|------------------|-----------------------------------|------------------|
| Latest T75 | [lczero.org run 3 networks](https://training.lczero.org/networks/3) | Current 3rd test run |
| J64-210    | [GitHub: jhorthos Leela Training](https://github.com/jhorthos/lczero-training/wiki/Leela-Training) | Trained on T60 data |
| J20-460    | [GitHub: jhorthos Leela Training](https://github.com/jhorthos/lczero-training/wiki/Leela-Training) | Trained on T40 data |


### 10 blocks x 128 filters:
| Name             | Source for Download               | Notes            |
|------------------|-----------------------------------|------------------|
| Latest T74        | [lczero.org run 2 networks](https://training.lczero.org/networks/2) | Current 2nd test run |
| 128x10-t60-2-5300 | [Sergio-V repository](https://www.comp.nus.edu.sg/~sergio-v/new/128x10-t60-2/) | Trained on T60 data |
| Tinker TK-6430   | [Google Drive](https://drive.google.com/file/d/19NCoFoS3AxtsCpOHejQIaYkPqRv6Vjfs/view) | Trained on T60 data |
| Latest J104 net   | [GitHub: jhorthos Leela Training](https://github.com/jhorthos/lczero-training/wiki/Leela-Training) | Based on T70 network 703810, trained on T70 data + value repair method |
| 703810            | [training.lczero.org direct download](https://training.lczero.org/get_network?sha=b30e742bcfd905815e0e7dbd4e1bafb41ade748f85d006b8e28758f1a3107ae3) | Last T70 net (not to be confused with T72) |
| 591226            | [training.lczero.org direct download](https://training.lczero.org/get_network?sha=47e3f899519dc1bc95496a457b77730fce7b0b89b6187af5c01ecbbd02e88398) | Last T59 net |
| Little Demon 2    | [data.lczero.org repository](https://storage.lczero.org/files/networks-contrib/) (LD2) | JH nets also here |


### Assorted sizes:
| Size   | Name             | Source for Download               | Notes            |
|--------|------------------|-----------------------------------|------------------|
| 19b x 256f | T71.5-FR960-Armageddon-Chess| [lczero.org run 3 network 714700](https://training.lczero.org/get_network?sha=32d49c67db759a8794042a53d675e5c757a319ae696153b95970ab6099d8fc2d) | Trained from scratch on Fischer Random Armageddon Chess |
| 9b x 112f  | ID11258-112x9-se | [GitHub: dkappe Distilled Networks](https://github.com/dkappe/leela-chess-weights/wiki/Distilled-Networks) | Other sizes also here |
| 5b x 48f   | Good Gyal 5      | [GitHub: dkappe Bad Gyal](https://github.com/dkappe/leela-chess-weights/wiki/Bad-Gyal) | Other sizes also here |
| 2b x 16f   | Tiny Gyal        | [GitHub: dkappe Bad Gyal](https://github.com/dkappe/leela-chess-weights/wiki/Bad-Gyal) | Other sizes also here |


Note: The Sergio-V nets are also available on [storage.lczero.org](https://storage.lczero.org/files/networks-contrib/sergio-v/) in some cases.

---

If this page hasn't been updated recently, check the [Discord](https://discord.gg/pKujYxD) channels for a recommendation. Be sure to specify your hardware and use case so the helpful regulars know what to recommend.