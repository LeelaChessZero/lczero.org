+++
title = "A Layman's Guide to Configuring lc0"
slug = "a-laymans-guide-to-configuring-lc0"
published = 2020-04-01
author = "borg"
tags = []
draft = true
+++

One of the commonly expressed complaints about lc0 is that there are too many parameters. While this is undoubtedly true, this gives us unparalleled flexibility to tune the engine[’](https://www.youtube.com/watch?v=zXP_pr7np-o)s behavior to reach the point where “when you see what Leela suggests, then you say - it makes sense” as Magnus Carlsen recently said. While there are efforts underway to simplify the user-facing configuration options, we decided that this is a perfect opportunity to reveal the underlying formulas used to derive the default values for most parameters:
<!--more-->
{{<style "cleartable">}}
| | | |
|-|-|-|
| |e (**CPuct** - √2) = 2|(1)|
| |√**CPuctBase** - (2 + π) = 6^e|(2)|
| |π^2 (**CPuctFactor** - e) = 1|(3)|
| |ln(2) + **FpuValue** = e^(1/8)|(4)|
| |π (**PolicyTemperature**^2 - 1) = 5|(5)|
| |1/ln(**SmartPruningFactor**) - 1 = √(2π) |(6)&nbsp;|
{{</style>}}

Solving those equations gives us the following exact values for the parameters. The numerical values used as defaults for lc0 are just those rounded to two decimal places:

{{<style "cleartable">}}
| | | |
|-|-|-|
| |**CPuct** = 2/e + √2|(7)|
| |**CPuctBase** = (6^e + 2 + π)^2|(8)|
| |**CPuctFactor** = 1/π^2 + e|(9)|
| |**FpuValue** = e^(1/8) - ln(2)|(10)|
| |**PolicyTemperature** = √(1 + 5/π)|(11)|
| |**SmartPruningFactor** = e^(1/(√(2π) + 1))|(12)|
{{</style>}}

We hope that this clears any misconceptions. If you still have questions, you can ask in our [Discord chat](https://discord.gg/pKujYxD).
