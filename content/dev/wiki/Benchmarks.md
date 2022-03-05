---
title: "Benchmarks"
weight: 500
wikiname: "Benchmarks"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---
Run `lc0.exe benchmark --nncache=2000000` and report nps output and binary version, please use latest release or current master.
Google docs of bench results here. Easier to maintain/prettier? https://docs.google.com/spreadsheets/d/1i4ymeCO7SH1vQ5gS7ZcBChjQaiv1dNItwXwLqvNC-r4/preview

# Ampere Cards
| GPU model | Engine version | Neural Net size | Backend | Speed |
| ------------- | ---- | ------------- | ------------- | ------------- |
|A100 40GB | v0.28.2 | 30x384 | cuda-fp16 | 71560 nps|
|RTX 3090 | v0.28| 30x384 | cuda-fp16 | xxx nps|
|RTX 3080 | v0.29.0-dev 3/5 | 40x512 | cuda-fp16 | 15159 nps|
|RTX 3080 | v0.28.2 | 30x384 | cuda-fp16 | 32289 nps|
|RTX 3070 | v0.28.2 | 30x384 | cuda-fp16 | xxx nps|
|RTX 3060 | v0.28.2 | 40x512 | cuda-fp16 | xxx nps|
|RTX 3060 | v0.28.2 | 30x384 | cuda-fp16 | xxx nps|
# Turing Cards
| GPU model | Engine version | Neural Net size | Backend | Speed |
| ------------- | ---- | ------------- | ------------- | ------------- |
|Tesla V100 | v0.28.2 | 30x384 | cuda-fp16 | xxx nps|
|RTX 2080 | v0.28.2 | 30x384 | cuda-fp16 | xxx nps|
|RTX 2070 | v0.28.0 | 30x384 | cuda-fp16 | xxx nps|
|RTX 2060 | v0.28.2 | 30x384 | cuda-fp16 | xxx nps|
# CPUs 
| CPU model + # of threads | Engine version | Neural Net size | Backend | Speed |
| ------------- | ---- | ------------- | ------------- | ------------- |
|3990x -128th | v0.28.2 | 10x128 | DNNL-BLAS | xxx nps|
|5950x -32th | v0.28.2 | 15x192 | Open-BLAS | xxx nps|
|11900k -16th | v0.28.2 | 15x192 | onednn | xxx nps|
|5600x -12th | v0.28.2 | 10x128 | onednn | xxx nps|


