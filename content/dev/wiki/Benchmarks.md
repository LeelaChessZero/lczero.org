---
title: "Benchmarks"
weight: 500
wikiname: "Benchmarks"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---
Run go infinite from start position and abort after depth 26 and report NPS output. 

_I put some sample ones from memory. Please put your own bench scores here in sorted NPS order if you can. If you don't know what engine type, gpu is opencl and cpu is openblas_

Google docs of bench results here. Easier to maintain/prettier? https://docs.google.com/spreadsheets/d/1lGFf6PLGmBUSMan-YP7Vul4DpRNfn6K8oeCjBILe6uA/edit#gid=0

# GPU
| GPU @ stock or OC frequency| Engine version/type | Neural Net size | Username | Speed |
| ------------- | ---- | ------------- | ------------- | ------------- |
|1080 ti @ 2ghz -t 3 | v7 Windows openCL | 10x128 | | 2500 nps|
|GTX 470 @ stock -t 2 | v7 Windows openCL | 10x128 | | 600 nps|
|GTX 1060 @ stock -t 3 | v7 Linux openCL | 10x128 | | 2650 nps|
# CPU
| CPU @ stock or OC frequency| Engine version/type | Neural Net size | Username | Speed |
| ------------- | ---- | ------------- | ------------- |------------- |
|i7-6800K @ 3.6GHz -t 12 | v7 Linux openblas | 10x128 | | 1010 nps|
|i7-8700 stock -t 12 | v7 Windows openblas | 10x128 | | 818 nps|
|i6700 stock -t 4 | v7 Windows intel_mkl | 10x128 | | 500 nps|
|i6700 stock -t 4 | v7 Windows openblas | 10x128 | | 320 nps|
|Ryzen 3 1200 stock -t 4 | v7 Windows openblas | 10x128 | | 300 nps|
