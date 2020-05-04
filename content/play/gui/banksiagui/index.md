---
title: "BanksiaGUI"
weight: 100
summary: "Installing the Lc0 in BanksiaGUI."
---

# Install Lc0

To install Lc0 in BanksiaGUI, use one of two methods:

## 1. The simplest

<<<<<<< HEAD
Just drag and drop the runnable file (in Windows it is lc0.exe) to anywhere in BanksiaGUI. It will be auto detected and installed.
=======
Just drag and drop runnable file (lc0.exe in Windows) to anywhere in BanksiaGUI. It will auto detect and add that engine.
>>>>>>> 14d91c8b422fb09bed5d31a13c3673696c0ddf0d

## 2. Manual

Follow the following steps:

<<<<<<< HEAD
a. Open Settings dialog (Windows, Linux: menu → File → Settings; macOS: menu → BanksiaGUI → Preferences), select the  tab "Engines", and then click "➕" button (on the top right corner) to open "Add Engine" dialog:
=======
a. Open Settings dialog (Windows, Linux: menu → File → Settings; macOS: menu → BanksiaGUI → Preferences), select the  tab "Engines", and then click "➕" button (on top right corner) to open Add Engine dialog:
>>>>>>> 14d91c8b422fb09bed5d31a13c3673696c0ddf0d

![]({{< file "step010.png" >}})

b. In the "Add Engine" dialog:

* Click "Browse..." at the end of the field "Engine file" to select Lc0 runnable file. Alternative: drag that file to that field.

<<<<<<< HEAD
All other fields may be let empty, BanksiaGUI will auto fill them. Alternative: set "Name field" to a short name such as "lc0" to avoid the long auto-detected name (e.g., "Lc0 v0.25.1+git.69105b4").
=======
All other fields may let empty, BanksiaGUI will auto detect and fill them. Alternative: set "Name field" to a short name such as "lc0" to avoid the long auto-detected name.
>>>>>>> 14d91c8b422fb09bed5d31a13c3673696c0ddf0d

c. Click "OK" to finish the installation of the Lc0 engine.

# Setup Lc0

<<<<<<< HEAD
After an above method, Lc0 is ready to use. However, Lc0 can show some specific statistics which BanksiaGUI has supported thus they should be enabled to view.

To enable Lc0's statistics:

a. Open Settings dialog (Windows, Linux: menu → File → Settings, macOS: menu → BanksiaGUI → Preferences), select the  tab "Engines", then select engine Lc0 from the top table:

![]({{< file "step020.png" >}})

b. On the below table ("Engine options"), tick to two boxes "LogLiveStats" and "VerboseMoveStats". Those statistics may be shown later in the forms of tables and bubbles. Lc0 has also supported new stats WDL (Win-Draw-Loss), tick the box "UCI_ShowWDL" to enable it. WDL may be shown later as a chart.

c. Setup for WDL graph and bubbles

From Settings dialog, select the first tab ("General"), in the bottoms there are items to set up  sizes, colours, type for showing Lc0's stats as bubbles and WDL chart.
=======
After an above method, Lc0 is ready to use. However, Lc0 can show some special statistics which BanksiaGUI has supported thus they should be enabled to view.

To enable statistics:

a. Open Settings dialog (Windows, Linux: menu → File → Settings, macOS: menu → BanksiaGUI → Preferences), select the  tab "Engines", then select engine Lc0 on the top table:

![]({{< file "step020.png" >}})

b. On the below table (Engine options), tick to two boxes "LogLiveStats" and "VerboseMoveStats". Those statistics may be shown later in the forms of tables and bubbles. Lc0 has also supported new stats WDL (Win-Draw-Loss), tick the box "UCI_ShowWDL" to enable it. WDL may be shown later as a chart.

c. Setup WDL graph and bubbles

From Settings dialog, select the first tab ("General"), in the bottoms there are items to set up  sizes, colours, type of Lc0 stats bubbles and WDL chart.
>>>>>>> 14d91c8b422fb09bed5d31a13c3673696c0ddf0d

![]({{< file "step030.png" >}})

d. Show stats table

<<<<<<< HEAD
When computing, Lc0 may show specific stats. If there are some, a small buttom (in the top right corner) will auto shown in the bar of "Engine info" panel, just click to show the table. That table is sortable: click on any column header to sort by that coumn, click again to switch between ascending/descending order. 

In the below illustration, Lc0 stats are shown in the multi-forms/places (marked by green arrows): a WDL chart (in "Score grapth"), bubbles (on the main board), simple string for WDL, stats tables (in "Engine info"), additional strings for PVs.
=======
When computing, Lc0 may show special stats. If there are some, a buttom will auto shown in eval bar, just click to show the table.

The below image illustrate Lc0 stats may be shown in forms of bubble, tables, and chart.
>>>>>>> 14d91c8b422fb09bed5d31a13c3673696c0ddf0d

![]({{< file "step040.png" >}})


