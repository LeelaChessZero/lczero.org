---
title: "Getting Started"
weight: 100
---
This page describes how to install Lc0 for windows. If you just want to play Lc0 online, go [here]({{<ref "online">}}). TODO(Add link to other OSes when it's written)

## Basics
Lc0 has three parts: 

| NAME         | FILE     | Function                              | Needed for Contributing | Needed for Playing    |                                                                                                                   
| ------------ | -------- | --------------------------------------| ----------------------- | --------------------- | 
|**Engine**    | **lc0.exe**  | Does the tree search and calls the NN to get evaluations | **YES**       | **YES**   |
|**Network (NN)**|Varies e.g. **weights_run2_32930.pb.gz**| Stores the Neural Net's evaluation function | **NO**   | **YES**|
|**Client**    | **client.exe**| Gets the latest network from the server, generates self-play games, and uploads the training data to the server | **YES** | **NO**|

* To **help the project** by donating GPU time, you engine and binary, and you should run **client.exe**. The client will automatically run lc0.exe, download the network for training, and ask the server what to do. 

* To **play or analyze games** with Lc0, you don't need client.exe, but you do need the engine **lc0.exe** and a **network file**.

## Downloading
### Engine and client
Download the engine and client as described [here]({{<ref "download">}}).

### Network
To install a network.
  * Download a network file.  
  Refer to [this page]({{<ref "bestnets">}}) to decide the best network for your needs.
  * The name will be some long hash string, for example: b82f0b34b96c8f38f68ee97703b4149ab976122ca9bed6120f9dea88d733d266
  * Rename to "weights" or any other filename (for convenience, not necessary).
  * Place the network file into the same directory where the lc0 application is located.
  * The file will be found automatically by Lc0.  
  Note that if there are several network files in the directory, Lc0 will use the **latest one by file modification date**.

## Play
 The best way to play and analyze games is to use chess GUI. Check [this document]({{<ref "gui">}}) to find how to do that.

## Contribute training games
 TODO(write that)

## Support

If you have any questions or issues, it's recommended to join the [discord](https://discord.gg/pKujYxD) for quick help, it is usually very active.
If you prefer to debug stuff by yourself, [troubleshoot]({{<ref "troubleshoot">}}) page may help.