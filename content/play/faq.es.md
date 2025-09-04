---
title: "FAQ"
weight: 2100
summary: "Preguntas frecuentes sobre Leela Chess Zero"
machineTranslated: true
---

### ¿Qué es Lc0?

Lc0 (Leela Chess Zero) es un potente motor de ajedrez de código abierto que utiliza redes neuronales profundas y búsqueda de árboles de Monte Carlo para evaluar posiciones de ajedrez. Se inspiró en AlphaZero de Google y aprende ajedrez jugando millones de partidas contra sí mismo.

### ¿Puedo ejecutar Lc0 sin una GPU?

Sí, Lc0 puede ejecutarse en CPUs, pero será significativamente más lento que en una GPU moderna. Hay compilaciones específicas solo para CPU (como BLAS o DNNL). Estas compilaciones están incluidas en las [versiones de github](https://github.com/LeelaChessZero/lc0/releases).

### ¿Es más fuerte Stockfish o Lc0?

Esto dependerá del hardware específico y de las condiciones de prueba, pero generalmente se considera que Stockfish es ligeramente más fuerte que Lc0.

### ¿Dónde puedo encontrar la versión onnx-trt de Lc0?

`onnx-trt` es un backend experimental para Lc0 y aún no está incluido en las versiones oficiales. Esta es la versión que jugó en el TCEC Cup 15. Ten en cuenta que solo es beneficioso para GPUs de muy alto rendimiento (como las series RTX 5000/6000) y solo para redes más grandes. También cabe mencionar que la versión que compilamos para el TCEC no tiene otros backends funcionales (como `cuda`).

El binario se puede obtener de [este artefacto de compilación](https://ci.appveyor.com/api/buildjobs/r0c84cm598j6tyfl/artifacts/build%2Flc0.exe).

También necesitarás descargar el `onnxruntime` desde aquí:  
[Windows](https://github.com/microsoft/onnxruntime/releases/download/v1.22.0/onnxruntime-win-x64-gpu-1.22.0.zip)  
o  
[Linux](https://github.com/microsoft/onnxruntime/releases/download/v1.22.0/onnxruntime-linux-x64-gpu-1.22.0.tgz).

Luego, deberás descargar las DLLs de [TensorRT](https://developer.nvidia.com/tensorrt/download/10x) y [CuDNN](https://developer.nvidia.com/cudnn-downloads), y agregarlas a tu variable PATH o al directorio que contiene el binario de lc0.

<!-- 
Eng: Refs do not support cross language. Ignoring for now

### ¿Cuál es la mejor red de Lc0?

No hay una única red de Lc0 que sea la mejor en todas las situaciones; depende del hardware que tengas. Puedes encontrar una lista de las mejores redes [aquí]({{<ref "bestnets">}}). -->

### ¿Es BT5 mejor que BT4?

A pesar de que BT5 tiene mejoras teóricas respecto a BT4, resultó ser más lento y peor con el mismo recuento de nodos. Las pruebas han mostrado que BT5 puede ser alrededor de 50 elo más débil que BT4 en controles de tiempo cortos y alrededor de 12 elo más débil a igual número de nodos, pese a ser un 20-50% más lento.

### ¿Lc0 o AlphaZero: cuál es más fuerte?

Lc0 ha superado con creces el éxito de AlphaZero en ajedrez y actualmente es mucho más fuerte.
