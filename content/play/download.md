---
title: "Download Lc0"
weight: 200
---

The latest stable version of Lc0 is **{{< param lc0version >}}**.

There are several versions of the engine which use different hardware to evaluate neural network.

## Windows

Every package contains:
* **lc0.exe** (the engine),
* **591226.pb.gz** (a default network file), and
* **client.exe** (only needed if you would like to contribute training games).

Pick a version of **Lc0 {{< param lc0version >}} for Windows** to download:

| Hardware | Backend |
|----------|---------|
| Newer (2014+) NVidia GPUs: GTX&nbsp;7xx, GTX&nbsp;8xx, GTX&nbsp;9xx, GTX&nbsp;1xxx, RTX&nbsp;2xxx and so on | [CUDA](https://github.com/LeelaChessZero/lc0/releases/download/{{<param lc0version>}}/lc0-{{<param lc0version>}}-windows-gpu-nvidia-cuda.zip) |
| Newer non-NVidia GPUs (only for latest versions of Windows 10) | [DirectX 12](https://github.com/LeelaChessZero/lc0/releases/download/{{<param lc0version>}}/lc0-{{<param lc0version>}}-windows-gpu-nvidia-dx12.zip) |
| Older GPUs or Windows versions | [OpenCL](https://github.com/LeelaChessZero/lc0/releases/download/{{<param lc0version>}}/lc0-{{<param lc0version>}}-windows-gpu-opencl.zip) |
| Computers without GPUs, but with modern CPUs | [DNNL BLAS](https://github.com/LeelaChessZero/lc0/releases/download/{{<param lc0version>}}/lc0-{{<param lc0version>}}-windows-cpu-dnnl.zip) |
| Older CPUs | [OpenBLAS](https://github.com/LeelaChessZero/lc0/releases/download/{{<param lc0version>}}/lc0-{{<param lc0version>}}-windows-cpu-openblas.zip) |

Older versions and beta releases are available at our [GitHub releases page](https://github.com/LeelaChessZero/lc0/releases).

## Other versions

TODO(write about other OSes, including Linux, MacOS and Android. Possibly in a separate article)
