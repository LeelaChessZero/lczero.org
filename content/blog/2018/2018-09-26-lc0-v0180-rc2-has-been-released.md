---
author: crem
draft: false
published: "2018-09-26T22:55:00+02:00"
slug: lc0-v0180-rc2-has-been-released
tags: []
title: Lc0 v0.18.0-rc2 has been released.
---

The "Release Candidate 2" for the Lc0 version v0.18 has been published!  
Available to download
[here](https://github.com/LeelaChessZero/lc0/releases/tag/v0.18.0-rc2).

Change:

  * Fixed a severe race condition bug when only happened when 
--out-of-order-eval is on (which is the default value now).  
Could produce incorrect search results.
