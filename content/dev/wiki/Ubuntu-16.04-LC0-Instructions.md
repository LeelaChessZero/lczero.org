---
title: "Ubuntu 16.04 LC0 Instructions"
wikiname: "Ubuntu-16.04-LC0-Instructions.md"
---
# Building instructions for using CUDA backend

For Ubuntu 17.10 and 18.04 see [Troubleshooting section](#troubleshooting)

Should now work on 16.04 and 17.10, tested on fresh 16.04 docker and 17.10 docker

In docker image remove `sudo` from start of all commands that have it.

TensorFlow build instructions are different and not yet covered here: please add them if you have built TensorFlow support

Docker image: `apt update`

If you don't already have, install git:
`sudo apt install git`

Docker 16.04 image needs also  gnupg: `apt install git gnupg`

Docker 17.10 image needs also dirmng: `apt install git gnupg dirmng`

Get lc0 source if you don't already have it. Follow the [README.md instructions](https://github.com/LeelaChessZero/lc0#downloading-source) on how to create a `git` clone of the repository.

Create `/etc/apt/sources.list.d/cuda.list` with line:

`deb http://developer.download.nvidia.com/compute/cuda/repos/ubuntu1604/x86_64 /`

Create `/etc/apt/sources.list.d/nvidia-ml.list` with line:

`deb http://developer.download.nvidia.com/compute/machine-learning/repos/ubuntu1604/x86_64 /`

Add key:

`sudo apt-key adv --fetch-keys http://developer.download.nvidia.com/compute/cuda/repos/ubuntu1604/x86_64/7fa2af80.pub`

Update package list: `sudo apt update`

Install CUDA 9.2 (will also install newest NVIDIA driver if you don't already have it: this will likely require reboot before running lc0):
`sudo apt install cuda`

Install cuDNN 7.1:
`sudo apt-get install libcudnn7 libcudnn7-dev`

Install ninja, clang and pip3 (docker 16.04 needs pip3 installation, actual 16.04 includes it):

`sudo apt install ninja-build clang python3-pip`
_(UPD: G++ of version 6 or later should also be fine)_

Only installing ninja might work: `sudo apt install ninja-build`

Install/upgrade meson
`sudo pip3 install --upgrade meson`

Build LC0: `./build.sh` when you are in `lc0/` directory

Resulting `lc0` is at `lc0/build/release/lc0`


***
## Troubleshooting

* If you have an older cuda/cudnn build already you may need to uninstall it. 
* I (killerducky) wasn't able to get this command to work: `sudo apt-get install cuda nvidia-cuda-toolkit`. I had to follow the instruction here https://docs.nvidia.com/cuda/cuda-installation-guide-linux. After downloading the local .deb file, I ran these commands:
```
sudo dpkg -i cuda-repo-ubuntu1604-9-1-local_9.1.85-1_amd64.deb 
sudo apt-get update
sudo apt-get install cuda-9.1
```
* Nvidia cuda does not support gcc later than 6: 
  * `#error -- unsupported GNU version! gcc versions later than 6 are not supported!`.
  * I just ignored them and did this: `sudo vim /usr/local/cuda-9.1/bin/../targets/x86_64-linux/include/crt/host_config.h` and change it to `#if __GNUC__ > 10`
  * This is probably only a problem because I'm using Ubuntu 17.10?
  * If there are further issues with Ubuntu 18.04, please edit wiki

Alternative cuDNN install:

Download
- cuDNN v7.1.3 Runtime Library for Ubuntu 16.04 (Deb)
- cuDNN v7.1.3 Developer Library for Ubuntu 16.04 (Deb)
- cuDNN v7.1.3 Code Samples and User Guide for Ubuntu 16.04 (Deb)

from: https://developer.nvidia.com/rdp/cudnn-download

then run

`sudo dpkg -i libcudnn7_7.1.3.16-1+cuda9.1_amd64.deb libcudnn7-dev_7.1.3.16-1+cuda9.1_amd64.deb libcudnn7-doc_7.1.3.16-1+cuda9.1_amd64.deb`