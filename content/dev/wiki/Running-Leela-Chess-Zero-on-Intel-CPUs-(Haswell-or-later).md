---
title: "Running Leela Chess Zero on Intel CPUs (Haswell or later)"
wikiname: "Running-Leela-Chess-Zero-on-Intel-CPUs-(Haswell-or-later)"
---
Update:  While the MKL version may be useful for analysis, it will be quite slow when generating training games.

If you have an newer intel CPU and no dedicated GPU, you can boost your nps by using Intel's Math Kernel Library. Please note that you should keep track of your CPU temperature to avoid overheating, especially if you have an older Haswell CPU. Windows Task Manager and [HWInfo64](https://www.hwinfo.com/download.php) are great tools for tracking your resource usage. This guide takes into account that you have already downloaded the most recent [cpu-win.zip](https://github.com/glinscott/leela-chess/releases) and extracted it.

***

1. Head over to [Intel's Math Kernel Library page](https://software.intel.com/en-us/mkl)
2. Register
3. Download the MKL libraries for Windows
4. Install the package
5. You only need Intel MKL core libraries for C/C++ for Intel 64, so you can uncheck everything else

![Example of installation](https://i.imgur.com/YcIVkKp.png)

6. Go to your installation directory (usually C:\Program Files (x86)\IntelSWTools\compilers_and_libraries_2018.2.185\windows\redist\intel64_win\mkl) and find three dlls: mkl_avx2.dll, mkl_core.dll, and mkl_sequential.dll
7. Copy them to your cpu-win folder
8. Extract and replace lczero.exe with the one from [lczero10_mkl_bmi2_and_popcnt.zip](https://github.com/glinscott/leela-chess/releases/download/v0.10rc1/lczero10_mkl_bmi2_and_popcnt.zip)
9. Run client.exe

***
Running LCZero with MKL will directly increase your nps. If you have multiple cores/threads you can also run multiple clients.