---
machineTranslated: true
summary: Preguntas frecuentes sobre Leela Chess Zero
title: FAQ
weight: 2100
---

### ¿Qué es Lc0?

Lc0 (Leela Chess Zero) es un potente motor de ajedrez de código abierto que utiliza redes neuronales profundas y búsqueda de árboles de Monte Carlo para evaluar posiciones de ajedrez. Se inspiró en AlphaZero de Google y aprende ajedrez jugando millones de partidas contra sí mismo.

### ¿Puedo ejecutar Lc0 sin una GPU?

Sí, Lc0 puede ejecutarse en CPUs, pero será significativamente más lento que en una GPU moderna. Hay compilaciones específicas solo para CPU (como BLAS o DNNL). Estas compilaciones están incluidas en las [versiones de github](https://github.com/LeelaChessZero/lc0/releases).

### ¿Es más fuerte Stockfish o Lc0?

Esto dependerá del hardware específico y de las condiciones de prueba, pero se considera que Stockfish es ligeramente más fuerte que Lc0.

### ¿Qué es onnx-trt y dónde puedo encontrar la versión onnx-trt de Lc0?

`onnx-trt` es un backend experimental para Lc0; está incluido en las versiones v32.0 y posteriores. Esta es la versión que está jugando en TCEC desde S28. Ten en cuenta que solo resulta beneficioso para GPUs de gama muy alta (por ejemplo, las series RTX 5000/6000) y únicamente para redes grandes.

El binario se puede encontrar en la pestaña de releases en GitHub. El paquete `onnx-trt` incluye un README con instrucciones y un script de instalación.

<!-- 
Eng: Refs do not support cross language. Ignoring for now

### ¿Cuál es la mejor red de Lc0?

No hay una única red de Lc0 que sea la mejor en todas las situaciones; depende del hardware que tengas. Puedes encontrar una lista de las mejores redes [aquí]({{<ref "bestnets">}}). -->

### ¿Es BT5 mejor que BT4?

A pesar de que BT5 tiene mejoras teóricas respecto a BT4, resultó ser más lento y peor con el mismo recuento de nodos. Las pruebas han mostrado que BT5 puede ser alrededor de 50 elo más débil que BT4 en controles de tiempo cortos y alrededor de 12 elo más débil a igual número de nodos, pese a ser un 20-50% más lento.

### ¿Lc0 o AlphaZero: cuál es más fuerte?

Lc0 ha superado con creces el éxito de AlphaZero en ajedrez y actualmente es mucho más fuerte.
