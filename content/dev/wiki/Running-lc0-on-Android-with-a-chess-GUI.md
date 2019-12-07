---
title: "Running lc0 on Android with a chess GUI"
wikiname: "Running-lc0-on-Android-with-a-chess-GUI.md"
---
Follow these simple steps and you'll be running lc0 on your Android device. No root needed. Just the right engine, a weights file and a chess GUI.

## Video Tutorial

Here's a small video showing the steps described below, just in case you need to see it in action:

https://streamable.com/fozkg

## Get lc0 for Android

Android builds aren't official yet, but there are already some you can try out.

### Supported Devices

There are currently two architectures supported: *armv7-a* and *aarch64*. In general older devices are 32-bit in which case you must download the *armv7-a* builds. The more recent devices are 64-bit so if you have one you should get the *aarch64* builds that are much *faster*. If you are not sure which architecture to choose, use [this app](https://play.google.com/store/apps/details?id=com.inkwired.droidinfo) to lookup the architecture of your Android device.

### Supported Android versions

All the 64-bit builds on this page are compiled targeting the API Level 21 (equivalent to Android 5.0 Lollipop). The 32-bit ones target the API Level 16 (Android 4.1 Jelly Bean). Older Android versions may not work.

### Which back-end to choose?

It's better to try either Eigen or OpenBLAS links first as they're easier to use and they should be faster too. As for the OpenCL ones, they are heavier and have some extra requirements:
* Device with OpenCL support (builds are linked to OpenCL version 2.0)
* Expect a very long delay on the first start of the engine and when a different network size is tried. This happens because the OpenCL tuner needs to optimize its parameters to your device.

### Builds for the new release 0.23

|  Architecture   |  Eigen   | OpenBLAS  |   OpenCL   |
|:----------------|:---------:|:---------:|:---------:|
| armv7-a     |   [link](https://github.com/LeelaChessZero/lc0/files/3909474/lc0-0.23-eigen-armv7.zip)  |  [link](https://github.com/LeelaChessZero/lc0/files/3909472/lc0-0.23-blas-armv7.zip)   |   [link](https://github.com/LeelaChessZero/lc0/files/3909475/lc0-0.23-opencl-armv7.zip)    |
| aarch64     |   [link](https://github.com/LeelaChessZero/lc0/files/3909470/lc0-0.23-eigen-aarch64.zip)  |  [link](https://github.com/LeelaChessZero/lc0/files/3909467/lc0-0.23-blas-aarch64.zip)   |   [link](https://github.com/LeelaChessZero/lc0/files/3909471/lc0-0.23-opencl-aarch64.zip)    |

### Builds for the previous release 0.22

|  Architecture           |  Eigen   | OpenBLAS  |   OpenCL   |
|:------------------------|:---------:|:---------:|:---------:|
| armv7-a | [link](https://github.com/LeelaChessZero/lc0/files/3494665/lc0-0.22-eigen-armv7a.zip) | [link](https://github.com/LeelaChessZero/lc0/files/3494666/lc0-0.22-blas-armv7a.zip) | |
| aarch64     |   [link](https://github.com/LeelaChessZero/lc0/files/3494676/lc0-0.22-eigen-aarch64.zip)  |  [link](https://github.com/LeelaChessZero/lc0/files/3494674/lc0-0.22-blas-aarch64.zip)   |   [link](https://github.com/LeelaChessZero/lc0/files/3494675/lc0-0.22-opencl-aarch64.zip)    |

### Special builds with embedded weights

|  Architecture           |  Eigen   | OpenBLAS  |   OpenCL   |
|:------------------------|:---------:|:---------:|:---------:|
| armv7-a with **LD2** | [link](https://github.com/LeelaChessZero/lc0/files/3494669/lc0-0.22-LD2-eigen-armv7a.zip) | [link](https://github.com/LeelaChessZero/lc0/files/3494667/lc0-0.22-LD2-blas-armv7a.zip) | |
| aarch64 with **LD2** | [link](https://github.com/LeelaChessZero/lc0/files/3494671/lc0-0.22-LD2-eigen-aarch64.zip) | [link](https://github.com/LeelaChessZero/lc0/files/3494673/lc0-0.22-LD2-blas-aarch64.zip) | [link](https://github.com/LeelaChessZero/lc0/files/3494670/lc0-0.22-LD2-opencl-aarch64.zip) |

* **LD2**: Little Demon 2 is a strong 128x10 network from aart (https://lc0.org/ld2).

These are special builds for those who couldn't or wouldn't fiddle with UCI Options and full paths, or maybe those using a GUI without that capability. These builds contain a small weights file embedded into the engine itself. You'll still be able to use other weights with them, but the embedded weights will load when you didn't specify one.

### Previous development builds

|  Architecture           |   Eigen   | OpenBLAS  |   OpenCL   |
|:------------|:---------:|:---------:|:---------:|
| armv7-a     |  [link](https://github.com/LeelaChessZero/lc0/files/3370132/lc0-eigen-armv7a.zip)  |  [link](https://github.com/LeelaChessZero/lc0/files/3370130/lc0-blas-armv7a.zip)   |      |
| armv7-a with **48x5**     |  |  [link](https://github.com/LeelaChessZero/lc0/files/3232984/lc0-blas-armv7a-api16-48x5.zip)   |      |
| aarch64     |   [link](https://github.com/LeelaChessZero/lc0/files/3370131/lc0-eigen-aarch64.zip)  |  [link](https://github.com/LeelaChessZero/lc0/files/3370129/lc0-blas-aarch64.zip)   |   [link](https://github.com/LeelaChessZero/lc0/files/3370133/lc0-opencl-aarch64.zip)    |
| aarch64 with **48x5**     |  |  [link](https://github.com/LeelaChessZero/lc0/files/3232978/lc0-blas-aarch64-api21-48x5.zip)   |      |

* The 48x5 network is a distilled network from dkappe (https://github.com/dkappe/leela-chess-weights/releases/tag/11258-48x5-se).

For more information about the above builds, please browse this PR: https://github.com/LeelaChessZero/lc0/pull/848

## Select a network weights file

The regular nets will work just fine, get one from the usual place:

http://lczero.org/networks

But you could choose a small network like these ones, that will be faster:

https://github.com/dkappe/leela-chess-weights/wiki/Distilled-Networks

## Choose a GUI

Any chess GUI that supports setting the UCI Options should do. DroidFish works quite good:

https://play.google.com/store/apps/details?id=org.petero.droidfish

There is another well-known GUI, *Chess for Android* that is reported to work too:

https://play.google.com/store/apps/details?id=com.google.android.chess

With *Chess for Android* you'll need to employ a little trick though. After installing the engine to the GUI, install the weights file too as if it were another engine. This way the weights file will be copied to the same destination as the engine and the auto-discover will work.

## Install the GUI and copy the engine

You'll need to install DroidFish and give it access to the storage. Then unzip the lc0 engine downloaded in the first step and copy it to the DroidFish/uci folder on your Android device. After that, just open DroidFish and select the engine lc0. But don't start analysis/play yet as you'll have to configure it first.

## Configure the engine

The auto-discover feature for the weights file won't work on Android, since some GUIs import the engine to a private directory. That's why you need to provide the engine with the full path to the weights file. You could use a file manager app that allows copying the full path of a file. Like this one:

https://play.google.com/store/apps/details?id=com.mi.android.globalFileexplorer

Navigate to the weights file you downloaded and copy its full path. Then paste it to the engine options, it's the first one.

If you followed until now then you should have an engine working. Start analysis and watch.
