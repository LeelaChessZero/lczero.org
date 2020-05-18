---
title: "Contribute"
date: 2019-12-07T19:57:46+01:00
draft: false
weight: 100
show_contents: false
---

If you would like to contribute to the LCZero project in any way, it would be
appreciated!

Here is a brief list of ideas what you can do:

## Contributing without coding

If you are not a developer, there is still plenty of ways to contribute:

* [Contribute training games.](https://github.com/LeelaChessZero/lc0/wiki/Contributing-Training-Games)
Self-play training game generation is vital part of the LCZero project.
* Help on **#help** channel in our Discord.
* Contributing to [improving this site]({{<ref "hugo">}}).
* Maintaining [benchmark tool]({{<ref "benchmark">}}) and submitting your
  benchmark data.
* Testing and tuning of the engine (join #test-discuss in Discord).
* Run Lc0 Lichess bots.
* Maintain or moderate one of our social surfaces (forum, twitch, blog).
* Do Lc0 games streaming or youtube videos with analysis.
* Create and maintain Lc0 packages in various Linux distros.
* Be a point of contact with competition administration or coordinate with GUI
  authors.

## Helping with development

We maintain several codebases and it's not only the engine itself.
It's possible to find codebases for a wide variety of tastes:

* [Lc0](https://github.com/LeelaChessZero/lc0), the engine itself. Written in C++.
    * Example improvement: Revive tensorflow backend and look into support of TPUs.
    * Another idea: Investigate what is needed for Lc0 to be IDeA compatible.
* [Training code](https://github.com/LeelaChessZero/lczero-training). Written in Python.
* [Training client](https://github.com/LeelaChessZero/lczero-client). Written in Go.
    * For example, make screensaver version of the client, to make it use GPU only when
    computer is not in use and display generated games as they are being played.
* [Training server](https://github.com/LeelaChessZero/lczero-server). Written in Go.
    * Example improvement: support competitive contribution (API, teams, more often stats update)
* Our Discord bot [Little Teapot](https://github.com/LeelaChessZero/little-teapot).
Written in Python, being rewritten in Go.

## New project ideas

For people who prefer to code from scratch, there is also plenty of ideas to try.
Some ideas for inspiration:

* Network evaluation framework as a centralized server (e.g. position-tester-as-a-service).
* Visualization of networks (structure and activation).
* Come up with more stats, and run them.
* Web site for gathering stats for people who wants to provide more stats.
* Tools to be able to run chess engine remotely (e.g. on colab while doing local analysis)
* GUI for engines running remotely (e.g. like TUI we used for WCCC but through web).
* Better monitoring for server infrastructure.
* Automate backup management.
* Improve detection of malicious training games.
* Maintain a webassembly version of Lc0 (Lichess wants to have that!)
* Maintain a version of Lc0 for mobile platforms.
* Maintain Linux / MacOS compilation.
* Write a "hub" website for competitions (so that people won't have to stream
their competitions through twitch). Basically, do a distributed CCCC.
