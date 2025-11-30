---
title: Best Networks
weight: 800
---
The networks below are our strongest available, and the first listed (BT4-it332) is what is currently being sent to engine competitions like the TCEC and CCC. In general, the largest network compatible with your hardware is recommended. To download, right click the corresponding link and select "Save link as...". 

| Network Size | Purpose | Filters | Blocks | GPU Memory Usage | File Size | Network |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Very Large | Large GPU | 1024 | 15 | 4 GB | 365 MB | [BT4-it332](https://storage.lczero.org/files/networks-contrib/BT4-1024x15x32h-swa-6147500-policytune-332.pb.gz) |
| Very Large | Large GPU | 1024 | 15 | 4 GB | 330 MB | [BT4-1024x15x32h-swa-6147500](https://storage.lczero.org/files/networks-contrib/big-transformers/BT4-1024x15x32h-swa-6147500.pb.gz) |
| Large | GPU | 768| 15 | 2.6 GB | 190 MB | [BT3-768x15x24h-swa-2790000](https://storage.lczero.org/files/networks-contrib/BT3-768x15x24h-swa-2790000.pb.gz) |
| Large | GPU | 768 | 15 | 2.4 GB | 160-170 MB | [T82-768x15x24h-swa-7464000](https://storage.lczero.org/files/768x15x24h-t82-swa-7464000.pb.gz)  |
| Medium | GPU/CPU | 512 | 15 | 1.8 GB | 150-155 MB | [t3-512x15x16h-distill-swa-2767500](https://storage.lczero.org/files/networks-contrib/t3-512x15x16h-distill-swa-2767500.pb.gz) |
| Medium | GPU/CPU | 512 | 15 | 1.8 GB | 140-150 MB | [T1-512x15x8h-distilled-swa-3395000](https://storage.lczero.org/files/networks-contrib/t1-512x15x8h-distilled-swa-3395000.pb.gz) |
| Small | GPU/CPU | 256 | 10 | 1.6 GB | 30-40 MB | [T1-256x10-distilled-swa-2432500](https://storage.lczero.org/files/networks-contrib/t1-256x10-distilled-swa-2432500.pb.gz)  |


If you're getting `out of memory` errors when using large networks on GPU, you can tell the engine to process positions in smaller chunks by adding `--minibatch-size=16` to the lc0 command or config file. Alternatively, you can switch to a smaller network.

Note for DirectX12 and OpenCL backend users: The format of the networks in the list above is not supported. However, you can download and use the LC0 ONNX-DML version instead, see the included README file for instructions on how to get the directml.dll that can't be included in the package for licensing reasons, or use one of the legacy nets listed below.

---

## Other Nets

### Sparring Nets

These [Human Sparring Nets]({{<ref "sparring-nets">}}) are networks designed to play at a specific ELO level, one that humans are able to compete against.

### Legacy Nets

This section includes networks from older training runs. The strongest among these are [T78](http://training.lczero.org/get_network?sha=d0ed346c32fbcc9eb2f0bc7e957d188c8ae428ee3ef7291fd5aa045fc6ef4ded) and [T60](http://training.lczero.org/get_network?sha=7ca2381cfeac5c280f304e7027ffbea1b7d87474672e5d6fb16d5cd881640e04). Some download links might be outdated.

[View all legacy networks]({{<ref "legacy">}})


---

If you still have questions, check the [Discord](https://discord.gg/pKujYxD) channels. Be sure to specify your hardware and use case so the helpful regulars know what to recommend.
