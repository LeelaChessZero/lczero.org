---
title: "Lc0 for 32 bit windows"
weight: 500
wikiname: "Lc0-for-32-bit-windows"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---
32 bit processors and operating systems are supported by lc0. However CUDNN is not available for such platforms, so only the `blas` and `opencl` backends can be built. 

There are no official builds distributed, but the latest version available can be found using the following links:
* [lc0-win32-opencl.zip](https://ci.appveyor.com/api/projects/borg323/lc0/artifacts/lc0-win32-opencl.zip?branch=32bit&pr=false&job=Environment%3A%20NAME%3Dopencl%2C%20BITS%3D32)
* [lc0-win32-blas.zip](https://ci.appveyor.com/api/projects/borg323/lc0/artifacts/lc0-win32-blas.zip?branch=32bit&pr=false&job=Environment%3A%20NAME%3Dblas%2C%20BITS%3D32)