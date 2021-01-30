---
title: "Google Cloud guide (lc0)"
weight: 500
wikiname: "Google-Cloud-guide-(lc0)"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---
This guide will allow you to have Leela Chess Zero clients running in the cloud in 10 minutes or less. These clients will run self-play training games and help make Leela stronger. This guide is aimed at everyone and assumes no technical understanding.

Google offers a free trial with **$300 USD credit** to anyone signing up to Google Cloud services for the first time. This credit is valid for 1 year, but unfortunately will not be available if you have ever utilised any Google Cloud Platform service previously (For more information about the free trial click [here](https://cloud.google.com/free/docs/frequently-asked-questions)).

**Note: you need to upgrade to a Paid Account to utilise the cloud GPUs as described in this guide**. 

Google has discontinued access to GPUs through the free trial, however fret not as you still keep the $300 credit even after upgrading to a **Paid Account**. Thus we strongly recommend that you consider upgrading, but with the caveat that you must just make sure to stop/delete any instances before your credit fully runs out lest you get charged (see: ['What is an upgraded billing account'](https://cloud.google.com/free/docs/frequently-asked-questions)).

## Cloud Shell Tutorial

You can click this [link](https://console.cloud.google.com/cloudshell/open?git_repo=https://gist.github.com/jeremylorino/f01da7b5ebd49d83936a3063513ee1f1&page=editor&tutorial=create-gce-trainer.md) to open up a [tutorial](https://www.useloom.com/share/0154154bf56043e9b2fc81244780e280) in Cloud Shell which automates the instructions below. 

Alternatively, just follow the instructions below which are intended to be as simple and clear to follow as possible.

## Creating your free Google Cloud Account
Create a free account on [Google Cloud Platform](https://cloud.google.com/compute/). (Note that you will be required to provide credit card details when signing up; this is for ID purposes.)

Once you've created an account, this is a good opportunity to double check that your account has been given the $300 credit before using it. Note that this amount will automatically get converted to your local currency. There should be a small header at the top of the page listing how much credit you have remaining, it should also have an **Upgrade** button on the top right corner. Click on that **Upgrade** button to upgrade your account to a **Paid account**; this removes certain restrictions in what computing services you can utilise, most notably GPUs. You can also see your current credit balance by navigating to the **Billing** section.

Check that you have been allocated **GPU quota** (previously all paid accounts would automatically have quota for 1 GPU to be allocated but some have reported not being allocated any GPU quota). Navigate to **IAM & Admin** and click on **Quotas** on the left. This will bring up the total quota limits for your google cloud account. Under the 'Metric' dropdown header, click 'None' to deselect everything and then just select 'GPUs (all regions)'. It should show a limit of 1. If it shows a limit of 0, select its tickbox and click the **Edit Quotas** button at the top and follow the process for upgrading your quota. Once you have been allocated GPU quota, you can proceed to creating your VM instance.

Navigate to [Google Cloud Compute](https://console.cloud.google.com/compute). In the interface, this is also listed as **Compute Engine**. 

## Create a VM
Navigate to **VM Instances**. Here you should have the option to create a VM instance. Click **Create Instance** at the top.
On the 'Create an instance' page you have many options which you will see as you scroll down. You can ignore most of these for now. Here are the ones you need to modify:
* **Machine type**:
    Here you can select your memory and CPU/GPU. For maximum cost-efficiency, I recommend running a [V100 GPU](https://cloud.google.com/gpu/); the following instructions will detail how to set one up with optimal settings. 
1) Click on the **Customize** button to the right.  
2) Select a [Region and Zone that contains V100 GPUs](https://cloud.google.com/compute/docs/gpus/) e.g. us-west1 (Oregon).
3) Choose **4 Cores/vCPUs** and **4 GB Memory**. 
4) Under 'Number of GPUs' choose 1 (free trials are restricted to 1 GPU) and under 'GPU Type' choose **NVIDIA Tesla V100**. If you don't see V100s available, select a different Region/Zone.

* **Boot disk**:
    Click the 'Change' button and select **Ubuntu 16.04 LTS**.
            
* **'Management, security, disks, networking, sole tenancy'**: click on the drop-down to expand some options.
1) Scroll down to the **Pre-emptibility** option under 'Automation'. To reduce the cost of running the GPU, Google Cloud allows you to run them as [pre-emptible instances](https://cloud.google.com/compute/docs/instances/create-start-preemptible-instance); this makes it so that your GPU costs **60%** less to run, with the caveat that you have to restart your instance every 24 hours and it may suffer interruptions at times. I would strongly recommend that you turn **Pre-emptibility** to **ON**. 

2) Scroll to **'Startup script'** under 'Automation' and copy and paste the following script into the box according to what kind of GPU you are using:

***This script is very old and obsolete - you almost certainly don't want this - look further down for one that is newer and maybe less useless (but probably still needs updating too).***

**For V100 GPUs:**
```bash
#!/bin/bash
echo "Installing CUDA"
wget -nc http://developer.download.nvidia.com/compute/cuda/repos/ubuntu1704/x86_64/cuda-repo-ubuntu1704_9.0.176-1_amd64.deb
sudo apt-get install -y --fix-missing --no-install-recommends dirmngr gnupg-curl
sudo dpkg -i cuda-repo-ubuntu1704_9.0.176-1_amd64.deb
sudo apt-key adv --fetch-keys http://developer.download.nvidia.com/compute/cuda/repos/ubuntu1704/x86_64/7fa2af80.pub
sudo apt-get update
sudo mkdir /usr/lib/nvidia
sudo apt-get install -y --fix-missing --no-install-recommends nvidia-384=384.111-0ubuntu1 libcuda1-384=384.111-0ubuntu1 nvidia-384-dev=384.111-0ubuntu1
sudo apt-get install -y --fix-missing --no-install-recommends cuda-cudart-9-0 cuda-cublas-9-0  cuda-core-9-0  cuda-cublas-dev-9-0 cuda-cudart-dev-9-0
cd /usr/local/ &&  sudo ln -s cuda-9.0 cuda
export PATH="$PATH:/usr/local/cuda/bin"
cd ~

echo "Installing CUDNN"
wget -nc http://developer.download.nvidia.com/compute/redist/cudnn/v7.1.4/cudnn-9.0-linux-x64-v7.1.tgz
tar -xzvf cudnn-9.0-linux-x64-v7.1.tgz
sudo cp -P cuda/include/cudnn.h /usr/local/cuda/include/cudnn.h
sudo cp -P cuda/lib64/libcudnn* /usr/local/cuda/lib64/
sudo chmod a+r /usr/local/cuda/lib64/libcudnn*
sudo nvidia-smi -pm 1

echo "Installing other"
sudo apt-get install -y ninja-build libprotobuf-dev protobuf-compiler python3-pip
sudo pip3 install meson
sudo apt-get install -y g++-6

echo "Installing lc0"
rm -rf lc0 
git clone --recurse-submodules https://github.com/LeelaChessZero/lc0.git
cd lc0 && git checkout $(git tag --list |grep -v rc |tail -1)
CC=clang-6.0 CXX=clang++-6.0 ./build.sh
mv ./build/release/lc0 lc0

echo "Downloading lczero client"
sudo curl -s -L https://github.com/LeelaChessZero/lczero-client/releases/latest | egrep -o '/LeelaChessZero/lczero-client/releases/download/.*/client_linux' | head -n 1 | wget --base=https://github.com/ -i - -O client_linux && chmod +x client_linux

echo "Running Leela Chess Zero"
./client_linux --user googlecloud --password googlecloud
``` 

**For Non-V100 GPUs**

If you happened to be using a non-V100 GPU then change the final line in the script to use this command instead:

```
./client_linux --user googlecloud --password googlecloud
```
You may also want to change the "googlecloud" username and password to your own username and password so you can see how many games you are contributing on the [Leela Chess Zero website](http://lczero.org/). Remember that the password you use will NOT be encrypted so do not use a sensitive one.

* Once you've reviewed all the settings, now click the **'Create'** button at the bottom.

And that's most of the hard work done. Now grab yourself a drink while the VM boots up and the startup script runs (which should take around 3-5 minutes). A V100 setup with the above configuration will cost $0.774/hour to generate approximately 1000 games per hour. With the free $300 credit, this should generate 25,000 games daily, lasting for 16 days, generating around 400,000 games for free!

## Monitoring your VMs performance
It is highly recommended to periodically check in on your VM instance's performance, particularly if you were running it as a pre-emptible instance as these may stop every now and then. 

You can monitor your VMs by double clicking on your instance name on the **'VM instances'** page. This will direct you to the **'VM Instance Details'** page where you can see how much of your instances CPU is being used up (along with many other things). If you were running a V100 with 4 vCPUs, it should stabilise at approximately 40% CPU utilisation.

Alternatively, you can directly view the game generation logs by clicking on **'Serial port 1 (console)'** under the **'Logs'** subsection in the **'VM Instance Details'** page.

## Monitoring your contributed games

After about 20-30 minutes, games from your clients will complete. After this happens, you'll be able to see the number of games you've contributed on the main page (lczero.org or testserver.lczero.org).

Occasionally, bugs or client version updates may require the client to be restarted. You can check to see if this is needed by monitoring the main page. At the time of writing, the client is on version 18. If a new version is released, simply delete the current instance on Google Cloud and repeat the steps above. 

## Preemptible VM Instances
Users who want to maximize their Google Cloud credits should use "pre-emptible" instances, which Google offers at a **~60% discount**. The downside is that Google can turn off these instances when they please, and each instance will only run for a maximum 24 hours before being turned off.

However, restarting the pre-emptible instance after a shutdown is a 1-click operation from the Google management page (or one command using Google Cloud Shell) -- simply click on the particular instance and click **'Start'** and it will promptly restart again for another 24 hours.

You can also restart your VM instance with one click from your smartphone using the [Google Console app](https://cloud.google.com/console-app/). 

## Alternative instructions
The above instructions are a bit old, so I (Tilps) decided to try and generate some new ones that might be slightly better.  Note that these have had minimal testing.  Just listing the differences to above for now.

* **Boot disk**:
    Click the 'Change' button and select **Intel® optimized Deep Learning Image: Base m24 (with Intel® MKL and CUDA 10.0)**. (Instead of ubuntu)

* **Startup Script**:
```bash
#!/bin/bash
echo "Installing driver"
sudo /opt/deeplearning/install-driver.sh

echo "Installing other"
sudo apt-get install -y ninja-build libprotobuf-dev protobuf-compiler python3-pip
sudo pip3 install meson
sudo apt-get install -y clang-6.0

echo "Installing lc0"
rm -rf lc0 
git clone --recurse-submodules https://github.com/LeelaChessZero/lc0.git
cd lc0 && git checkout $(git tag --list |grep -v rc |tail -1)
CC=clang-6.0 CXX=clang++-6.0 ./build.sh
mv ./build/release/lc0 lc0

echo "Downloading lczero client"
sudo curl -s -L https://github.com/LeelaChessZero/lczero-client/releases/latest | egrep -o '/LeelaChessZero/lczero-client/releases/download/.*/lc0-training-client-linux' | head -n 1 | wget --base=https://github.com/ -i - -O client_linux && chmod +x client_linux

echo "Running Leela Chess Zero"
./client_linux --user googlecloud --password googlecloud
```

* **GPU Type:** Consider T4 instead of v100, if you can get quota.  Rough estimate is that a 4vcpu/4G ram instance with 1 T4 is about 20% more games generated per dollar than same instance with a v100.  T4 is about half the speed - so you need 2 instances to get the same games/hour, but that is still cheaper than a single v100 instance.
