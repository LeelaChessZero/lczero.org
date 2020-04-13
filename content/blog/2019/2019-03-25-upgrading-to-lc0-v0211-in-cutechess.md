+++
title = "Upgrading to Lc0 v0.21.1 in CuteChess"
slug = "upgrading-to-lc0-v0211-in-cutechess"
published = 2019-03-25T11:45:00.002000+01:00
author = "crem"
tags = []
draft = false
+++

This a quick note for people who use **CuteChess** and just upgraded to
**v0.21.1** from earlier versions.

Meaning of FPU-related parameters are changed in **v0.21.1** , along with
default values of those parameters.

<!--more-->

If you upgraded your Lc0 to **v0.21.1** in CuteChess by just replacing the
files, most probably CuteChess still remembers old defaults and sets them.

To make CuteChess see correct default values, either install Lc0 v0.21.1 as a
fresh engine, or try pressing "Detect" / "Restore to defaults" in engine
settings in cutechess.

After update, there should be:

  *  **no FpuReduction** parameter, 
  * **FpuValue** should be equal to **1.20000** (was -1.00000 before the change)

 **UPD** : Similar issue also happens in Arena. The fix is similar: "Restore
to defaults" in engine settings, or reinstall the engine fresh.
