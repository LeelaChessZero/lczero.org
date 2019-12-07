---
title: "Building lc0 on Android, with Termux"
wikiname: "Building-lc0-on-Android,-with-Termux.md"
---
<div align="middle">
<img src="https://user-images.githubusercontent.com/12534727/57578012-ec787100-7451-11e9-9afe-eaf2b7b6d3e8.jpg" width="250" alt="DroidFish running Lc0" />
</div>

**Important**: If you just want to run lc0 on your Android device then the steps described here are no longer needed. Now there's an easier way to run lc0 without having to build it your own. Check it out:

[Running lc0 on Android with a chess GUI](https://github.com/LeelaChessZero/lc0/wiki/Running-lc0-on-Android-with-a-chess-GUI)

But for building lc0 there's now a better way too:

[Android build with Cross Compilation for BLAS and OpenCL back-ends](https://github.com/LeelaChessZero/lc0/pull/848)

The old instructions are left here just for reference.

---

This is a quick way of compiling lc0 on Android by using Termux, it might not be the best way to do it but it works right now. 

## Start Here

First, install Termux from Google Play:

[https://play.google.com/store/apps/details?id=com.termux](https://play.google.com/store/apps/details?id=com.termux)

After the install you should be ready to start adding packages, but give the app permissions to access the **storage** as you'll need it later.

## Automated installation

Just copy/paste the following command into your Termux, press enter and wait, everything will be ready when it's done.

`pkg install curl && curl -L https://git.io/fj8jq | sh`

It will build and install the engine to your DroidFish/**uci** folder, the libs and weights to DroidFish/**lib**. They will be ready to use with the DroidFish fork provided [here](https://github.com/lealgo/droidfish/releases/tag/1.74-lc0). Done, no more fiddling needed.

If for some reason you can't find the engine files, then something went wrong and you'll need to start again clean, reinstall Termux and follow the steps in the remaining sections.

**Disclaimer** This is a simple script I wrote and tested on my phone only. It might not work for you, but please report any issues on Discord.

## Add repos and required packages

You will need to add a custom repo that has clang, openblas and other goodies. Don't worry, the repo is listed on the Termux wiki [https://wiki.termux.com/wiki/Package_Management](https://wiki.termux.com/wiki/Package_Management).

```
pkg install coreutils curl git
curl -L https://its-pointless.github.io/setup-pointless-repo.sh | sh
```

After the repo is added you should add the required packages:

```
pkg install clang ninja openblas python
pip3 install meson
```

## Get the project from git

Get lc0 from git, you might use depth 1 for a smaller download:

```
git clone --depth 1 https://github.com/LeelaChessZero/lc0.git
cd lc0
git submodule update --init --recursive
```

## Tweak some parameters and build

Now you should open the file `meson.build`, find and comment or delete the following line, this is needed because the clang used does not recognize "native" as a valid architecture

```
# add_project_arguments('-march=native', language : 'cpp')
```

Also you need to enable the log library for Android. Just find the following two lines inside the same file `meson.build`:

```
# Third party files.
 includes += include_directories('third_party', is_system: true)
```

you should keep them, and add these lines below:

```
add_global_link_arguments('-llog', language:'cpp')
add_global_link_arguments('-latomic', language:'cpp')
```

Now you can start the build process, it will take a long time depending on your phone.

```
CC=clang CXX=clang++ ./build.sh -Ddefault_library=static
```

Hopefully no error will appear and you will have a successful build.

## Test the binary

You can test the binary right away from Termux. It just needs a weights file, let's say you copied it to the top-level folder of your phone:

```
lc0/build/release/lc0 benchmark -w /sdcard/11258-48x5-se.pb.gz
```

## Building the OpenCL back-end

This step is **optional** and requires a little more knowledge of your Android system, also a phone that supports OpenCL. First get these three things:

* Locate the library `libOpenCL.so` and remember its path, usually it's on `/system/vendor/lib64` or `/system/lib`
* Locate the library `liblzma.so` and remember its path, usually `/system/lib64` or `/system/lib`
* Get the OpenCL headers from here [https://github.com/KhronosGroup/OpenCL-Headers](https://github.com/KhronosGroup/OpenCL-Headers) expand & copy them let's say on the parent folder of your lc0 source. Remember its relative path, for example `../include/`

Now get back to editing `meson.build` file, find the line reading `# Third party files.` you edited on a previous step and add this new line below:

```
add_project_link_arguments('/system/lib64/liblzma.so', language:'cpp')
```

but you should replace the path with the exact one you've got for the `libzma` library. Now there is a longer command for performing the build:

```
CC=clang CXX=clang++ ./build.sh -Ddefault_library=static -Dopencl_include=../include/ -Dopencl_libdirs=/system/vendor/lib64
```

replacing the two paths for the include and lib dirs with your own. That's it, if you got all the paths right there's a good chance the build will succeed and you'll have a working OpenCL back-end.

## Issues

The generated binary is dynamically linked. Most chess GUIs will fail when loading it because they'll be missing the libraries it has in the Termux environment. Even when you copy the libraries along with the binary, the GUIs won't search the libraries on the current path. In my phone the dependencies are the following:

```
ldd lc0/build/release/lc0
libc.so
libopenblas.so
liblog.so
libc++_shared.so
libm.so
libdl.so
```

## Future work

The ideal outcome of this is to generate an installable package that's compatible with Android chess GUIs, for example by implementing the Open Exchange Protocol for engines [https://github.com/garawaa/chessenginesupport-androidlib/](https://github.com/garawaa/chessenginesupport-androidlib/)

It's really a very straightforward implementation. Libraries and dependent files remain something to be tested.

## DroidFish

Here's a quick fork of DroidFish that you could use to test Lc0 on Android:

[https://github.com/lealgo/droidfish/tree/load-libs](https://github.com/lealgo/droidfish/tree/load-libs)

I made a beta release of the app for those who can't setup Eclipse/Android Studio. Grab the apk from [https://github.com/lealgo/droidfish/releases/tag/1.74-lc0](https://github.com/lealgo/droidfish/releases/tag/1.74-lc0) and follow this:

* Side-load the provided apk to your phone, enabling the install from unknown sources (also deactivate "Play Protect" before installing the apk, according to @kiudee who tested). If you don't trust this apk you'll have to build from source.
* Put lc0's binary in your phone storage, the path is DroidFish/uci as for other engines. From Termux:
```
cd
cp lc0/build/release/lc0 /sdcard/DroidFish/uci
```
* Copy its dependent libraries and into DroidFish/lib, create the lib folder if it doesn't exist:
```
mkdir /sdcard/DroidFish/lib
cd /sdcard/DroidFish/lib
cp /data/data/com.termux/files/usr/lib/libopenblas.so .
cp /data/data/com.termux/files/usr/lib/libandroid-support.so .
cp /data/data/com.termux/files/usr/lib/libgfortran.so.5 .
cp /data/data/com.termux/files/usr/lib/libc++_shared.so .
```
* Copy the network weights file to DroidFish/lib. Use a small network for higher nps, like this 48x5 from [here](https://github.com/dkappe/leela-chess-weights/wiki/Distilled-Networks).

Now open DroidFish and select the lc0 engine. That should work.

**Notice**: If you built the OpenCL back-end then it will be the default one when the engine loads, and it won't respond on the first run until the **tuner** ends. You can watch the tuner progress in with `adb logcat`. Try copying the file generated by the tuner to the `lib` folder so you don't have to wait each time. Also you could choose the BLAS back-end in the engine options dialog.