---
title: "jose"
weight: 3000
summary: "Installing the Lc0 in jose Chess Database"
---

1. jose comes already bundled with Lc0. 

Use the engine control buttons to...

![engine-buttons-1](/home/schaefer/src/lczero.org/content/play/gui/jose/engine-buttons-1.png)

* have Lc0 play against you
* or use Lc0 for background analysis. 
  During the opening phase, the  ![engine-button-2](/home/schaefer/src/lczero.org/content/play/gui/jose/engine-button-2.png)button toggles between opening book and engine analysis.

---

2. choose Edit / Options (F9), then select the 'Engine' tab, to edit all relevant engine parameters.

Note that the bundled Lc0 version is meant for minimal hardware requirements. 
If you have a more powerful GPU, you have probably got yourself a better setup.  

Point jose to your local installation:

![engine-settings-1](/home/schaefer/src/lczero.org/content/play/gui/jose/engine-settings-1.png)

* either edit the above settings, or copy a new set of arguments using the [+], or [++] buttons.
  Don't forget to save your changes, using the Apply button.
* below, you can edit all search parameters, like time control ...

![engine-settings-2](/home/schaefer/src/lczero.org/content/play/gui/jose/engine-settings-2.png)

* ... weight files, score types, contempt settings, etc. etc.

![engine-settings-3](/home/schaefer/src/lczero.org/content/play/gui/jose/engine-settings-3.png)

* Win-Draw-Lose are scores are recommended.
* Verbose Move Stats will print additional Lc0 diagnostics. Turn it off, if you don't need it.

---

3. in the 'Opening Book' tab you may enable, or disable opening books 
   (also including the Lichess Opening database). 
   Suppose you want to play Lc0 without a book, simply check:



![book-settings](/home/schaefer/src/lczero.org/content/play/gui/jose/book-settings.png)
