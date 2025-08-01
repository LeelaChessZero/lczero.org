---
title: "FAQ"
weight: 2100
summary: "Frequently Asked Questions about Leela Chess Zero"
---

### What is Lc0?

Lc0 (Leela Chess Zero) is a powerful, open-source chess engine that uses deep neural networks
and Monte Carlo Tree Search to evaluate chess positions. It was inspired by Google’s
AlphaZero and learns chess by playing millions of games against itself.

### Can I run Lc0 without a GPU?

Yes, Lc0 can run on CPUs, but it will be significantly slower than on a modern GPU.
There are specific CPU-only builds available (such as BLAS or DNNL). These builds are included in the [github releases](https://github.com/LeelaChessZero/lc0/releases).

### Is stockfish or Lc0 stronger?

This will depend on specific hardware and testing conditions but generally stockfish is considered to be slightly stronger than Lc0.

### What is the best Lc0 network?

There is no one universally best network as that will depend on your hardware. You can find a list of best networks [here]({{<ref "bestnets">}})

### Where can I find the onnx-trt version of Lc0?

`onnx-trt` is an experimental backend for Lc0, it's not yet included in the
official releases. This is the version that played TCEC Cup 15. Note that it's
only beneficial for very high-end GPUs (i.e. RTX 5000/6000 series), and only for
bigger nets. Also note that the version that we compiled for TCEC doesn't have
other backends working (like `cuda`).

The binary can be taken from
[this build artifact](https://ci.appveyor.com/api/buildjobs/r0c84cm598j6tyfl/artifacts/build%2Flc0.exe).

You'll also need to download the `onnxruntime` from here
[Windows](https://github.com/microsoft/onnxruntime/releases/download/v1.22.0/onnxruntime-win-x64-gpu-1.22.0.zip)
or
[Linux](https://github.com/microsoft/onnxruntime/releases/download/v1.22.0/onnxruntime-linux-x64-gpu-1.22.0.tgz).

Next, you need to download the [TensorRT](https://developer.nvidia.com/tensorrt/download/10x) and 
[CuDNN](https://developer.nvidia.com/cudnn-downloads) DLLs, then add them to your PATH or the 
directory containing the lc0 binary.



