---
author: crem
draft: false
published: "2018-08-23T11:13:00+02:00"
slug: test10-learning-rate-has-been-lowered
tags: []
title: Test10 learning rate has been lowered
---

The learning rate for the **test10** training run has been lowered to 0.0002.
Network id 11013 will be the first network trained with the new LR.

This is the last time we lower it for test10 to squeeze some more Elo out of
it. It's expected that the result will be visible within a day or two.

The test10 will probably stay for some weeks, and after that the plan is to do
a reset and to start a **main2** run from scratch again.

What will change after restart:

  * int8 quantization during training  
That's how DeepMind did it. This will produce networks compatible with
TensorRT framework which should considerably improve nps on supported
hardware.  
We tried to quantize existing nets, but it doesn't really work that way. Elo
drop was about -300.

  * Training with Stochastic Weights Averaging  
That will hopefully result in better network quality.

  * Rule50 plane.  
As I wrote in a few previous blog posts, it turns out that information about
50-move rule counter was not available to the network. That will be fixed.

  * Value of Cpuct constant will be increased during training.  
That may allow Leela to better see tactics.

  * It's possible that we'll train multiple network sizes in parallel, but 
recently training was really back to back, we are not sure there will be 
capacity even for two networks.
