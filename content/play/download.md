---
title: "Download Lc0"
weight: 200
---

Latest stable version: **[{{< param lc0version >}}](https://github.com/LeelaChessZero/lc0/releases/tag/{{<param lc0version>}})** | [All Releases](https://github.com/LeelaChessZero/lc0/releases)

## Choose Your Platform

{{< downloads >}}
### Windows Downloads

All Windows packages contain:
- **lc0.exe** (the engine)
- A default neural network file
- **lc0-training-client.exe** (for contributing training games)

Select the version that matches your hardware:

#### NVIDIA GPU Users
| GPU Series | Recommended Version | Download Link |
|------------|---------------------|---------------|
| RTX 20xx, RTX 30xx, RTX 40xx (2018+) | CUDA | [Download CUDA Version](https://github.com/LeelaChessZero/lc0/releases/download/{{<param lc0version>}}/lc0-{{<param lc0version>}}-windows-gpu-nvidia-cuda.zip) |
| GTX 650 to GTX 16xx (2014-2018) | CUDNN | [Download CUDNN Version](https://github.com/LeelaChessZero/lc0/releases/download/{{<param lc0version>}}/lc0-{{<param lc0version>}}-windows-gpu-nvidia-cudnn.zip) |

#### Other GPU Users
| GPU Type | Recommended Version | Download Link |
|----------|---------------------|---------------|
| AMD/Intel GPUs | DirectML[^1] | [Download ONNX-DML Version](https://github.com/LeelaChessZero/lc0/releases/download/{{<param lc0version>}}/lc0-{{<param lc0version>}}-windows-onnx-dml.zip) |
| Generic GPUs | OpenCL | [Download OpenCL Version](https://github.com/LeelaChessZero/lc0/releases/download/{{<param lc0version>}}/lc0-{{<param lc0version>}}-windows-gpu-opencl.zip) |

#### CPU Only (No GPU)
| GPU Type | Recommended Version | Download Link |
|----------|---------------------|---------------|
| **Modern CPU only** (2009+) | DNNL BLAS | [DNNL BLAS Version](https://github.com/LeelaChessZero/lc0/releases/download/{{<param lc0version>}}/lc0-{{<param lc0version>}}-windows-cpu-dnnl.zip)     |
| **Older CPU only** | OpenBLAS | [OpenBLAS Version](https://github.com/LeelaChessZero/lc0/releases/download/{{<param lc0version>}}/lc0-{{<param lc0version>}}-windows-cpu-openblas.zip)  |


[^1]: Requires a very recent DirectML dll, see the included `README` for instructions

### MacOS

You can install Lc0 using [Homebrew](https://brew.sh/). 

```bash
brew install lc0
```

The Homebrew package includes the **lc0** engine and network **42850**.


### Linux

You have 2 options
- Package managers: Many Linux distributions include Lc0 in their repositories. Check your package manager first.
- [Build from Source](https://github.com/LeelaChessZero/lc0/blob/master/README.md#building-and-running-lc0) to ensure the most updated Lc0


### Android

Download the APK for all architectures:
[Android APK](https://github.com/LeelaChessZero/lc0/releases/download/{{<param lc0version>}}/lc0-{{<param lc0version>}}-android.apk)

Note: This is only the engine, there is no GUI with this apk. See [our page](https://lczero.org/dev/wiki/running-lc0-on-android-with-a-chess-gui/) about running Lc0 on android.
{{< /downloads >}}

### Other Options
- [All Releases on GitHub](https://github.com/LeelaChessZero/lc0/releases)
- [Build from Source](https://github.com/LeelaChessZero/lc0/blob/master/README.md#building-and-running-lc0)
