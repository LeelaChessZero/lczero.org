+++
title = "Lc0 v0.24 has been released!"
slug = "lc0-v024-has-been-released"
published = 2020-03-11T19:02:00.004000+01:00
author = "crem"
tags = []
draft = true
+++

**IMPORTANT UPDATE:** v0.24.0 had a bug when either `--logit-q` or 
`--draw-score-*` options were active. If you use either of those options, please
upgrade to v0.24.1.

It's been a while since we had a blog post, and it's been a while since we had
a release of Lc0. And today is happening:

Lc0 v0.24 has been released, and you can download it
[here](https://github.com/LeelaChessZero/lc0/releases/tag/v0.24.1).

<!--more-->

## What's new?

### Highlights for chess players

  * Lc0 now has DirectX12 backend. For NVidia GPUs **cudnn** backend is usually
    still better. For AMD GPUs dx12 is often better than **opencl** backend.  
Note: DirectX12 backend only works with Windows10 with latest updates.

  * Android builds are now added to the official releases (and it's now possible
  to embed networks into the binary for any platform, but it's mostly useful for
  Android builds).
  * We have tuned many of our parameters (cpuct, fpu, etc). Now Lc0 plays
  stronger with default settings.
  * All release packages are bundled with **id591226** network by default, to
  make Lc0 usable right after you unpacked it. This is a small network, so it 
works well on weaker hardware. Of course there exist many larger or stronger 
networks, and you are free to replace the net.
  * Cache fullness is not reported anymore in hash parameter of UCI response, 
as it was too confusing. There's a way to enable it back, ask us in [Discord 
chat](https://discord.gg/pKujYxD) if you need that.
  * It's slightly less likely now for Lc0 to run out of time in fast TC slow 
hardware configuration.
  * It's possible to change draw score from 0.0 to something else. It may work 
as contempt, or with some settings you can switch Lc0 into Armaggeddon mode. 
Probably it doesn't have much effect on existing networks as only affects Q 
head but not P, however it's also possible to adjust those while training. 
Parameters are:  
`DrawScoreSideToMove`  
`DrawScoreOpponent`  
`DrawScoreWhite`  
`DrawScoreBlack`  
Example parameters to use

    * For slight contempt: `DrawScoreOpponent 10`
    * For Armaggeddon: `DrawScoreWhite -100 DrawScoreBlack 100`

### For training

  * There is a support of generating selfplay games from opening books. This 
can potentially be used to train topical networks and have better opening 
diversity.

### Parameters

  * There is a new command, `lc0.exe backendbench`, to test the performance of 
your NN evaluation backend without any search.
  *  **cpuct** parameters are now separate for the root node and for other 
nodes. To use parameters from older versions, you need also to set root 
counterparts for them:  
`CPuctAtRoot` (in addition to CPuct)  
`CPuctBaseAtRoot` (in addition to CPuctBase)  
`CPuctFactorAtRoot` (in addition to CPuctFactor)

  * The new `MaxConcurrentSearchers` parameter allows to avoid thread contention 
in the early stages of the search (default is 1, and you probably don't need to 
change it).
  * New parameter `SmartPruningMinimumBatches` to only allow smart pruning to 
stop after at least k batches, preventing instamoves on slow backends.
  * New parameter `MaxOutOfOrderEvalFactor` to adjust how many out-of-order 
evaluations are allowed during one iteration of the search.

If you have any questions about the new version of the Lc0 and how to
configure it, please join [our Discord chat](https://discord.gg/pKujYxD) and
ask there in the **#help** channel.
