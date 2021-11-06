---
title: "Getting Started"
weight: 500
wikiname: "Getting-Started"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---
## Basics

* To **help the project** by donating GPU time, here's the gist of what you need to do:
1) Download and install the **Client** and **Engine**
2) Run the **client.exe**

The client will run games and arrange all communication with the learning server. Thanks for contributing!

To go a bit more in depth, Lc0 has three main parts: 

| NAME         | FILE     | Function                              | Needed for Contributing | Needed for Playing    |                                                                                                                   
| ------------ | -------- | --------------------------------------| ----------------------- | --------------------- | 
|**Engine**    | **lc0.exe**  | Does the tree search and calls the NN to get evaluations | **YES**       | **YES**   |
|**Network (NN)**|Varies e.g. **weights_run1_62114.pb.gz**| Stores the Neural Net's evaluation function | **NO**   | **YES**|
|**Client**    | **client.exe**| Gets the latest network from the server, generates self-play games, and uploads the training data to the server | **YES** | **NO**|

* To **play or analyze games** with Lc0, you don't need client.exe, but you do need the engine **lc0.exe** and a network file. The best way to do this is using a chess GUI. See the guide in [our blog](https://lczero.org/blog/2018/09/guide-setting-up-leela-on-chess-gui/).

## Downloading

Just download the relevant version for your machine and place the downloads in the same directory to be able to contribute to leela's learning process or to analyse games.

### Client 
Can be downloaded from [https://github.com/LeelaChessZero/lczero-client/releases](https://linkify.me/rkF9d9W)
* **Windows** --> client.exe
* **Linux**   --> client_linux
* **Mac**     --> client_mac
* Note: recent versions of engine package include client.exe
### Engine 
* **Mac/Linux**  -->   must be compiled by user (refer to the [[README.md|https://github.com/LeelaChessZero/lc0#mac]] in github )
* **Windows**    -->   download the latest from https://github.com/LeelaChessZero/lc0/releases
  * CPU only   : lc0-<version>-windows-blas.zip
  * Nvidia GPU : lc0-<version>-windows-cuda-zip 
  * Other GPU cases: lc0--<version>-windows-opencl.zip
* [[Changelog|https://github.com/LeelaChessZero/lc0/blob/master/changelog.txt]] between different versions

### Network

The client will already download the latest network for contributing games. If you want, you can download a specific version of a network. Download a network from http://training.lczero.org/networks or see [best nets](https://github.com/LeelaChessZero/lc0/wiki/Best-Nets-for-Lc0) for an overview of the best nets for your specific hardware conditions. 
  * The name will be some long hash string, for example: b82f0b34b96c8f38f68ee97703b4149ab976122ca9bed6120f9dea88d733d266
  * Rename to "weights" (for convenience).
  * Place in the same directory with the lc0 application. On a Mac this is /Users/[username]/lc0/build/release/.
  * The file will be found automatically after opening lc0 in the command line.

## Get started analyzing positions

You can analyse games in the engine console as follows:

* Open the lc0 application. 
* Enter the command "go nodes 100" in the terminal. 
* lc0 will begin a configuration process, which will only happen once. Then it will analyze the starting position for 100 nodes.
* To increase the quality of analysis, use more nodes.
* To analyse a position, type for example, "position startpos moves e2e4 e7e5", where the moves lead to the desired position. Then use "go nodes [number]" again.
* To analyse a specific position you can give the engine a FEN position "position fen 4k3/8/8/8/8/8/4P3/4K3 w - - 5 39". Then use "go nodes 100".

## Graphical interface for analyses

With nibbler there is now also a GUI available to help analyse games. You can find the latest version of nibbler at https://github.com/rooklift/nibbler

## Debug
* For easier debug, verify install by running from command line (cmd.exe)
  * cd to directory with lc0.exe. 
  * run `lc0.exe --logfile=log.txt`
    * Most recent weights file in that directory will be used automatically.
    * Add `--weights=c:\path\to\weights_476.txt.gz` to specify manually.
  * Example expected output:
```
       _
|   _ | |
|_ |_ |_| built Jul  8 2018
```
  * Type `go nodes 100`
  * Example expected output:
```
go nodes 100
Found network file: C:\Users\aolsen\Desktop\Engines\lc0-win-20180708-cuda92-cudnn714/weights_476.txt.gz
Creating backend [cudnn]...
info depth 2 seldepth 2 time 28 nodes 2 score cp 21 hashfull 0 nps 71 pv c2c4 g8f6
info depth 2 seldepth 3 time 39 nodes 4 score cp 19 hashfull 0 nps 102 pv c2c4 e7e5 g2g3
info depth 2 seldepth 4 time 56 nodes 15 score cp 20 hashfull 0 nps 267 pv c2c4 c7c5 g1f3 g8f6
info depth 2 seldepth 5 time 73 nodes 34 score cp 20 hashfull 0 nps 465 pv c2c4 c7c5 g1f3 g8f6 b1c3
info depth 2 seldepth 6 time 92 nodes 73 score cp 20 hashfull 0 nps 793 pv c2c4 c7c5 g1f3 g8f6 b1c3 e7e6
info depth 2 seldepth 7 time 111 nodes 121 score cp 20 hashfull 0 nps 1090 pv c2c4 c7c5 g1f3 g8f6 b1c3 b8c6 d2d4
info depth 2 seldepth 7 time 114 nodes 121 score cp 20 hashfull 0 nps 1061 pv c2c4 c7c5 g1f3 g8f6 b1c3 b8c6 d2d4
bestmove c2c4
```
  * type `quit` to exit the program.
* Common problems
  * lc0.exe exits without printing anything
    * Double check you have cublas64_100.dll, cudart64_100.dll, and cudnn64_7.dll in the same directory as lc0.exe
  * `CUDA driver version is insufficient for CUDA runtime version`
    * You need 411.31 or newer. Download latest from nvidia's website.
  * `error Network weights file not found`
    * Download the latest weights from http://training.lczero.org/networks and place in the same directory as lc0.exe.
    * OR: point to the weights using `--weights=c:\path\to\weights_run2_32282.pb.gz`
  * If there are other problems, please upload `log.txt` to the discord chat #help channel.


## Support

Join the [discord](https://discord.gg/pKujYxD) for quick help, it is usually very active.

