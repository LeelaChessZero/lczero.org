---
title: "Download Lc0"
weight: 200
---

The latest stable version of Lc0 is **[{{< param lc0version >}}](https://github.com/LeelaChessZero/lc0/releases/tag/{{<param lc0version>}})**.

Older versions and beta releases are available at our [GitHub releases page](https://github.com/LeelaChessZero/lc0/releases).

## Windows

Every package contains:
* **lc0.exe** (the engine),
* **591226.pb.gz** (a default network file), and
* **client.exe** (only needed if you would like to contribute training games).

Depending on which hardware you have, different version of Lc0 will be best for you.  
Pick the row that matches your hardware from the following table:

| Hardware | Backend |
|----------|---------|
| Newer (2014+) NVidia GPUs: GTX&nbsp;7xx, GTX&nbsp;8xx, GTX&nbsp;9xx, GTX&nbsp;1xxx, RTX&nbsp;2xxx and so on | [CUDA](https://github.com/LeelaChessZero/lc0/releases/download/{{<param lc0version>}}/lc0-{{<param lc0version>}}-windows-gpu-nvidia-cuda.zip) |
| Newer non-NVidia GPUs (only for latest versions of Windows 10) | [DirectX 12](https://github.com/LeelaChessZero/lc0/releases/download/{{<param lc0version>}}/lc0-{{<param lc0version>}}-windows10-gpu-dx12.zip) |
| Older GPUs or Windows versions | [OpenCL](https://github.com/LeelaChessZero/lc0/releases/download/{{<param lc0version>}}/lc0-{{<param lc0version>}}-windows-gpu-opencl.zip) |
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

If you want to build the Lc0 from source, refer to [this document](https://github.com/LeelaChessZero/lc0/blob/v0.24.1/README.md#building-and-running-lc0).
