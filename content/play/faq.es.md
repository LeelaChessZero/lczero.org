---
title: "FAQ"
weight: 2100
summary: "Frequently Asked Questions about Leela Chess Zero"
machineTranslated: true
---

### ¿Dónde puedo encontrar la versión onnx-trt de Lc0?

`onnx-trt` es un backend experimental para Lc0 y aún no está incluido en las versiones oficiales. Esta es la versión que jugó en el TCEC Cup 15. Ten en cuenta que solo es beneficioso para GPUs de muy alto rendimiento (como las series RTX 5000/6000) y solo para redes más grandes. También cabe mencionar que la versión que compilamos para el TCEC no tiene otros backends funcionales (como `cuda`).

El binario se puede obtener de [este artefacto de compilación](https://ci.appveyor.com/api/buildjobs/r0c84cm598j6tyfl/artifacts/build%2Flc0.exe).

También necesitarás descargar el `onnxruntime` desde aquí:  
[Windows](https://github.com/microsoft/onnxruntime/releases/download/v1.22.0/onnxruntime-win-x64-gpu-1.22.0.zip)  
o  
[Linux](https://github.com/microsoft/onnxruntime/releases/download/v1.22.0/onnxruntime-linux-x64-gpu-1.22.0.tgz).

Luego, deberás descargar las DLLs de [TensorRT](https://developer.nvidia.com/tensorrt/download/10x) y [CuDNN](https://developer.nvidia.com/cudnn-downloads), y agregarlas a tu variable PATH o al directorio que contiene el binario de lc0.
