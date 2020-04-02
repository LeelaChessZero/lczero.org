+++
title = "Lc0 v0.18.0-rc2 has been released."
slug = "lc0-v0180-rc2-has-been-released"
published = 2018-09-26T22:55:00.001000+02:00
author = "crem"
tags = []
draft = true
+++

The "Release Candidate 2" for the Lc0 version v0.18 has been published!  
Available to download
[here](https://github.com/LeelaChessZero/lc0/releases/tag/v0.18.0-rc2).

Change:

  * Fixed a severe race condition bug when only happened when 
--out-of-order-eval is on (which is the default value now).  
Could produce incorrect search results.
