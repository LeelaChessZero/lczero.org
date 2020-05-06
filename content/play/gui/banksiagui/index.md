---
title: "BanksiaGUI"
weight: 200
summary: "Installing the Lc0 in BanksiaGUI."
---

# Install Lc0

To install Lc0 in BanksiaGUI, use one of two methods:

## 1. The simplest

Just drag and drop the runnable file (in Windows it is lc0.exe) to anywhere in BanksiaGUI. It will be auto detected and installed.

## 2. Manual

Follow the following steps:

a. Open Settings dialog (Windows, Linux: menu → File → Settings; macOS: menu → BanksiaGUI → Preferences), select the  tab "Engines", and then click "➕" button (on the top right corner) to open "Add Engine" dialog:

![]({{< file "step010.png" >}})

b. In the "Add Engine" dialog:

* Click "Browse..." at the end of the field "Engine file" to select Lc0 runnable file. Alternative way: drag that file to that field.

All other fields may be let empty, BanksiaGUI will auto fill them. Suggestion: set "Name field" to a short name such as "lc0" to avoid the auto-detected long name (e.g., "Lc0 v0.25.1+git.69105b4").

c. Click "OK" to finish the installation of the Lc0 engine.

# Setup Lc0

After an above method, Lc0 is ready to use. However, Lc0 can show some specific statistics which BanksiaGUI has supported thus they should be enabled to view.

To enable Lc0's statistics:

a. Open Settings dialog (Windows, Linux: menu → File → Settings, macOS: menu → BanksiaGUI → Preferences), select the  tab "Engines", then select engine Lc0 from the top table:

![]({{< file "step020.png" >}})

b. On the below table ("Engine options"), tick to two boxes "LogLiveStats" and "VerboseMoveStats". Those statistics may be shown later in the forms of tables and bubbles. Lc0 has also supported new stats WDL (Win-Draw-Loss), tick the box "UCI_ShowWDL" to enable it. WDL stats may be shown later as a chart.

c. Setup for WDL graph and bubbles

From Settings dialog, select the first tab ("General"), in the bottom there are several items to set up sizes, colours, type for showing Lc0's stats as bubbles and WDL chart.

![]({{< file "step030.png" >}})

d. Show stats table

When computing, Lc0 may show specific stats. A small buttom (in the top right corner) in the bar of "Engine info" panel will auto shown. Just click to show/hide the stats table. That table is sortable: click on any column header to sort by that coumn, click again to switch between ascending/descending order. 

In the below illustration, Lc0 stats are shown in the multi-forms/places (marked by green arrows): a WDL chart (in "Score grapth" panel), bubbles (on the main board), simple string for WDL, stats tables, additional strings for PVs (in "Engine info" panel).

![]({{< file "step040.png" >}})


