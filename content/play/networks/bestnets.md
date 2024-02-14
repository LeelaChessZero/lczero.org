---
title: "Actual networks"
weight: 800
wikiname: "Best-Nets-for-Lc0"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---
In general, for game analysis and long calculation time per move, the largest network compatible with your hardware is recommended. In use cases with very low calculation time per move or slow hardware, a smaller network might be a better choice.

| Network Size | Purpose | Filters | Blocks | GPU Memory Usage | File Size | Network |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Large | GPU | 768 | 15 (mish activation) | 2.4 GB | 160-170 MB | [T82-768x15x24h-swa-7464000](https://storage.lczero.org/files/768x15x24h-t82-swa-7464000.pb.gz) (Right-click → "Save link as...") |
| Medium | GPU/CPU | 512 | 15 (mish activation) | 1.8 GB | 140-150 MB | [T1-512x15x8h-distilled-swa-3395000](https://storage.lczero.org/files/networks-contrib/t1-512x15x8h-distilled-swa-3395000.pb.gz) (Right-click → "Save link as...") |
| Small | GPU/CPU | 256 | 10 (mish activation) | 1.6 GB | 30-40 MB | [T1-256x10-distilled-swa-2432500](https://storage.lczero.org/files/networks-contrib/t1-256x10-distilled-swa-2432500.pb.gz) (Right-click → "Save link as...") |
| Very Small | Sparring vs. Humans | ≤128 | ≤10 | - | ≤10 MB | see below |

T1/T2/T82 networks above are contributed by masterkni6. The larger 768x15 network is comparable in architecture with networks in current training run1.

If you're getting `out of memory` errors when using large networks on GPU, pick the next best network in the list or try adding `--backend-opts=max_batch=256` to LC0 command (or UCI option: `BackendOptions: max_batch=256`), default: 1024. This will reduce GPU memory usage without any negative impact on playing strength. With the cuDNN backend you can also try `--backend-opts=custom_winograd=false` or as a UCI option: `BackendOptions: custom_winograd=false`.

Note for DirectX12 and OpenCL backend users: The format of the networks in the list above is not supported. However, you can download and use the LC0 ONNX-DML version instead, see the included README file for instructions on how to get the directml.dll that can't be included in the package for licensing reasons. Alternatively you can use older networks such as the [last T78 512x40 network 782344](http://training.lczero.org/get_network?sha=d0ed346c32fbcc9eb2f0bc7e957d188c8ae428ee3ef7291fd5aa045fc6ef4ded) or the [last T60 384x30 network 611246](http://training.lczero.org/get_network?sha=7ca2381cfeac5c280f304e7027ffbea1b7d87474672e5d6fb16d5cd881640e04).

---

### Newer nets

We also have some recent networks that are stronger at long time controls but are not supported by the current release of Lc0. These networks are very large and are intended for high-end hardware. Code that supports these can be found [here](https://github.com/Ergodice/lc0/).

| Network Size | Purpose | Filters | Blocks | GPU Memory Usage | File Size | Network |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Very Large | GPU | 1024 | 15 (mish activation) | 4 GB | 330 MB | [BT4-1024x15x32h-swa-5757500](https://storage.lczero.org/files/networks-contrib/big-transformers/BT4-1024x15x32h-swa-5757500.pb.gz) (Right-click → "Save link as...") |
| Large | GPU | 768| 15 (mish activation) | 2.6 GB | 190 MB | [BT3-768x15x24h-swa-2790000](https://storage.lczero.org/files/networks-contrib/BT3-768x15x24h-swa-2790000.pb.gz) (Right-click → "Save link as...") |

---

### Network Lists

Listed for completeness, includes networks from older training runs. Some download links might be outdated.

In each section, the nets are listed roughly in descending order of strength. Some may be too close to tell apart.

### 30 blocks x 384 filters:
| Name             | Source for Download               | Notes            |
|------------------|-----------------------------------|------------------|
| Latest T60 after 606512       | [lczero.org run 1 networks](http://training.lczero.org/networks/1) | Finished main run |
| hanse-69722-vf2  | [Contributed networks on Lc0 data](http://storage.lczero.org/files/networks-contrib/) | Trained from 609722 on T60 data, value focus emphasizes positions with eval discrepancies. See [here](https://github.com/hans-ekbrand/lczero-training/wiki) | 
| J94-100 (outdated)           | [Contributed networks on Lc0 data](http://storage.lczero.org/files/networks-contrib/) | Based on Sergio-V networks, trained on T60 data + value repair method. TCEC22 DivP+SuFi net |
| SV-3972+jio-20k (outdated)   | [Contributed networks on Lc0 data](http://storage.lczero.org/files/networks-contrib/) | Submitted for TCEC 18 Superfinal |
| 384x30-t60-3010 (outdated)   | [Contributed networks on Lc0 data](http://storage.lczero.org/files/networks-contrib/) | Won CCC13 and TCEC 17 |


### 24 blocks x 320 filters:
| Name              | Source for Download               | Notes            |
|-------------------|-----------------------------------|------------------|
| T60 until 606511  | [lczero.org run 1 networks](https://training.lczero.org/networks/1) | Finished main run |
| J13B.2-136        | [GitHub: jhorthos Leela Training](https://github.com/jhorthos/lczero-training/wiki/Leela-Training) | "Terminator 2" Net |


### 20 blocks x 256 filters:
| Name             | Source for Download               | Notes            |
|------------------|-----------------------------------|------------------|
| Leelenstein 15.0 | [15.0 Post](https://www.patreon.com/posts/leelenstein-15-0-38164065) | No account required |
| SV-20b-t40-1541  | removed | Trained on T40 data |
| 42850            | [training.lczero.org direct download](https://training.lczero.org/get_network?sha=00af53b081e80147172e6f281c01daf5ca19ada173321438914c730370aa4267) | Last T40 net |


### 15/16 blocks x 192 filters:
| Name             | Source for Download               | Notes            |
|------------------|-----------------------------------|------------------|
| Latest T79 | [lczero.org run 2 networks](https://training.lczero.org/networks/2) | Finished 2nd test run, LC0 [v0.29](https://github.com/LeelaChessZero/lc0/releases) required |
| Latest T75 | [lczero.org run 3 networks](https://training.lczero.org/networks/3) | Finished 3rd test run |
| Latest T76 | [lczero.org run 2 networks](https://training.lczero.org/networks/2) | Finished 2nd test run |
| Latest T77 | [lczero.org run 2 networks](https://training.lczero.org/networks/2) | Finished 2nd test run |
| J64-210    | [GitHub: jhorthos Leela Training](https://github.com/jhorthos/lczero-training/wiki/Leela-Training) | Trained on T60 data |
| J20-460    | [GitHub: jhorthos Leela Training](https://github.com/jhorthos/lczero-training/wiki/Leela-Training) | Trained on T40 data |


### 10 blocks x 128 filters:
| Name             | Source for Download               | Notes            |
|------------------|-----------------------------------|------------------|
| Latest T74        | [lczero.org run 2 networks](https://training.lczero.org/networks/2) | Finished 2nd test run |
| 128x10-t60-2-5300 | removed | Trained on T60 data |
| Tinker TK-6430   | [Google Drive](https://drive.google.com/file/d/19NCoFoS3AxtsCpOHejQIaYkPqRv6Vjfs/view) | Trained on T60 data |
| Latest J104 net   | [GitHub: jhorthos Leela Training](https://github.com/jhorthos/lczero-training/wiki/Leela-Training) | Based on T70 network 703810, trained on T70 data + value repair method |
| 703810            | [training.lczero.org direct download](https://training.lczero.org/get_network?sha=b30e742bcfd905815e0e7dbd4e1bafb41ade748f85d006b8e28758f1a3107ae3) | Last T70 net (not to be confused with T72) |
| 591226            | [training.lczero.org direct download](https://training.lczero.org/get_network?sha=47e3f899519dc1bc95496a457b77730fce7b0b89b6187af5c01ecbbd02e88398) | Last T59 net |
| Little Demon 2    | [data.lczero.org repository](https://storage.lczero.org/files/networks-contrib/) (LD2) | JH nets also here |


### Assorted sizes:
| Size   | Name             | Source for Download               | Notes            |
|--------|------------------|-----------------------------------|------------------|
| 19b x 256f | T71.5-Armageddon-Chess| [lczero.org run 3 network 715893](http://training.lczero.org/get_network?sha=cb4dcd82a72472daefaca85b7580ef73a7a4eda58e0d1de22e342d4d5874ff07) | Trained from scratch on Armageddon Chess |
| 19b x 256f | T71.4-FischerRandomChess| [lczero.org run 3 network 714700](https://training.lczero.org/get_network?sha=32d49c67db759a8794042a53d675e5c757a319ae696153b95970ab6099d8fc2d) | Trained from scratch on Fischer Random Chess |
| 9b x 112f  | ID11258-112x9-se | [GitHub: dkappe Distilled Networks](https://github.com/dkappe/leela-chess-weights/wiki/Distilled-Networks) | Other sizes also here |
| 5b x 48f   | Good Gyal 5      | [GitHub: dkappe Bad Gyal](https://github.com/dkappe/leela-chess-weights/wiki/Bad-Gyal) | Other sizes also here |
| 2b x 16f   | Tiny Gyal        | [GitHub: dkappe Bad Gyal](https://github.com/dkappe/leela-chess-weights/wiki/Bad-Gyal) | Other sizes also here |

---

If you still have questions, check the [Discord](https://discord.gg/pKujYxD) channels. Be sure to specify your hardware and use case so the helpful regulars know what to recommend.