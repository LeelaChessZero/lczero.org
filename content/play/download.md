---
title: "Download Lc0"
weight: 200
---

The latest stable version of Lc0 is **[{{< param lc0version >}}](https://github.com/LeelaChessZero/lc0/releases/tag/{{<param lc0version>}})**.

Older versions and beta releases are available at our [GitHub releases page](https://github.com/LeelaChessZero/lc0/releases).

## Windows

Every package contains:
* **lc0.exe** (the engine),
* **791556.pb.gz** or **753723.pb.gz** (a default network file), and
* **lc0-training-client.exe** (only needed if you would like to contribute training games).

Depending on which hardware you have, different version of Lc0 will be best for you.  
Pick the row that matches your hardware from the following table:

| Hardware | Backend |
|----------|---------|
| Newest (2018+) NVidia GPUs: RTX&nbsp;20xx, RTX&nbsp;30xx and so on (but not GTX&nbsp;16xx) | [CUDA](https://github.com/LeelaChessZero/lc0/releases/download/{{<param lc0version>}}/lc0-{{<param lc0version>}}-windows-gpu-nvidia-cuda.zip) |
| Newer (2014-2018) NVidia GPUs: GTX&nbsp;7xx, GTX&nbsp;8xx, GTX&nbsp;9xx, GTX&nbsp;10xx and also GTX&nbsp;16xx | [CUDNN](https://github.com/LeelaChessZero/lc0/releases/download/{{<param lc0version>}}/lc0-{{<param lc0version>}}-windows-gpu-nvidia-cudnn.zip) |
| Other GPUs (requires a very recent DirectML dll, see the included `README` for instructions) | [onnx-dml](https://github.com/LeelaChessZero/lc0/releases/download/{{<param lc0version>}}/lc0-{{<param lc0version>}}-windows-onnx-dml.zip) |
| Computers without GPUs, but with modern CPUs | [DNNL BLAS](https://github.com/LeelaChessZero/lc0/releases/download/{{<param lc0version>}}/lc0-{{<param lc0version>}}-windows-cpu-dnnl.zip) |
| Older CPUs | [OpenBLAS](https://github.com/LeelaChessZero/lc0/releases/download/{{<param lc0version>}}/lc0-{{<param lc0version>}}-windows-cpu-openblas.zip) |

## MacOS

You can install Lc0 using [Homebrew](https://brew.sh/).

```
brew install lc0
```

The Homebrew package includes the **lc0** engine and network **42850**.

## Android

| Architecture | Backend |
|--------------|---------|
| All architectures | [BLAS](https://github.com/LeelaChessZero/lc0/releases/download/{{<param lc0version>}}/lc0-{{<param lc0version>}}-android.apk) |

## Building from sources (Linux, Windows and MacOS)

If you want to build the Lc0 from source, refer to [this document](https://github.com/LeelaChessZero/lc0/blob/master/README.md#building-and-running-lc0).
