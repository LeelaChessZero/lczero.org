---
title: "Main"
weight: 500
wikiname: "Main"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---
Welcome to the Leela Chess Zero wiki!  
Lc0 is a UCI-compliant chess engine designed to play chess via neural network  


# Play Chess with LC0
  * [[Getting-Started]] - Download and run lc0.exe to play/analyze games.
  * [[Running Leela Chess Zero in a Chess GUI]]
# [[FAQ]]
  * Find the answers to [[Frequently Asked Question|FAQ]]
# Contribute
Use the below resources to contribute to the project through **FREE** google credits
* ### [[Run LC0 client on Google Cloud|Google-Cloud-guide-(lc0)]]
* [[Run LC0 client on Google Colab|Run-Leela-Chess-Zero-client-on-a-Tesla-K80-GPU-for-free-(Google-Colaboratory)]]  

Use the below if you want to contribute with your own hardware
* [[Getting-Started]] - Download and run client.exe to contribute training games.

# Settings and guides
  * [[Running Leela Chess Zero on Intel CPUs (Haswell or later)]]
  * [[Running Leela Chess Zero on NVIDIA GPUs in a container under nvidia-docker|Running-lczero-with-cuda-and-cudnn-under-nvidia-docker2]]
  * [[Running Leela Chess Zero as a Lichess Bot]]
# Check LC0 strength and progress
  * [See recent test match games](http://lczero.org/matches) - Click on the first row, first column, then pick a game. These games are played between recent versions of the engine to measure progress. They are blitz games played with 800 playouts (around 1 second) per move.
  * [See recent self-play training games](http://lczero.org) - Scroll to "Active Users", pick someone, then pick a game. These games are how Leela Chess Zero trains herself. They are played with extra randomness turned on so it can discover new good (and bad) moves. This means the quality of these games is lower than the match games.
# For developers
  * [[Debug and test procedures]]
  * [lczero_tools](https://github.com/so-much-meta/lczero_tools) allows you to run the network in Python on specific board positions via python-chess, and get policy/value outputs. (Works with pytorch, and is also able to run the network using the tfprocess training module included in Leela).
  * [[Script-for-testing-new-nets-versus-old-nets-on-Google-Colab]]