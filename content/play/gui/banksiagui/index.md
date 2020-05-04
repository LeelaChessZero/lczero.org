---
title: "BanksiaGUI"
weight: 100
summary: "Installing the Lc0 in BanksiaGUI."
---

# Install Lc0

To install Lc0 in BanksiaGUI, use one of two methods:

## 1. The simplest

Just drag and drop runnable file (lc0.exe in Windows) to anywhere in BanksiaGUI. It will auto detect and add that engine.

## 2. Manual

Follow the following steps:

a. Open Settings dialog (Windows, Linux: menu → File → Settings; macOS: menu → BanksiaGUI → Preferences), select the  tab "Engines", and then click "➕" button (on top right corner) to open Add Engine dialog:

![]({{< file "step010.png" >}})

b. In the "Add Engine" dialog:

* Click "Browse..." at the end of the field "Engine file" to select Lc0 runnable file. Alternative: drag that file to that field.

All other fields may let empty, BanksiaGUI will auto detect and fill them. Alternative: set "Name field" to a short name such as "lc0" to avoid the long auto-detected name.

c. Click "OK" to finish the installation of the Lc0 engine.

# Setup Lc0

After an above method, Lc0 is ready to use. However, Lc0 can show some special statistics which BanksiaGUI has supported thus they should be enabled to view.

To enable statistics:

a. Open Settings dialog (Windows, Linux: menu → File → Settings, macOS: menu → BanksiaGUI → Preferences), select the  tab "Engines", then select engine Lc0 on the top table:

![]({{< file "step020.png" >}})

b. On the below table (Engine options), tick to two boxes "LogLiveStats" and "VerboseMoveStats". Those statistics may be shown later in the forms of tables and bubbles. Lc0 has also supported new stats WDL (Win-Draw-Loss), tick the box "UCI_ShowWDL" to enable it. WDL may be shown later as a chart.

c. Setup WDL graph and bubbles

From Settings dialog, select the first tab ("General"), in the bottoms there are items to set up  sizes, colours, type of Lc0 stats bubbles and WDL chart.

![]({{< file "step030.png" >}})

d. Show stats table

When computing, Lc0 may show special stats. If there are some, a buttom will auto shown in eval bar, just click to show the table.

The below image illustrate Lc0 stats may be shown in forms of bubble, tables, and chart.

![]({{< file "step040.png" >}})


