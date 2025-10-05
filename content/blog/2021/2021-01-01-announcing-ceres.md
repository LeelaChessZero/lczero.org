---
author: crem
published: "2021-01-01"
title: Announcing Ceres
---

There has been a long time without posts in our blog, and finally there is a
good occasion to revive it.

One of the most active LCZero contributors **dje**, was not
very active in 2020. There was a good reason for it though — he was
writing **Ceres**, a new chess engine that uses LCZero networks!

Yesterday, December 31th 2020, it was
[released](https://github.com/dje-dev/Ceres) under the GPLv3.

<!--more-->

It's a great gift to the chess community, which came ~~right~~ approximately on
time for [New Year](https://www.google.com/search?q=when+is+new+year+in+2021),
the 3rd
[anniversary](http://www.talkchess.com/forum3/viewtopic.php?t=66280) of LCZero
project, and the 220th anniversary of
Ceres dwarf planet
[discovery](https://www.jpl.nasa.gov/news/news.php?feature=4824).

## What is Ceres?

Ceres is a highly optimized Monte-Carlo search engine with many novel
algorithmic improvement ideas, written in C#.
It uses neural networks from LCZero.

The Elo testing is currently in progress, but initial results show that Ceres
is stronger than Lc0 with the same network, in all kinds of
configurations *(except possibly ultra-bullet)*.

In competition-like configurations (2 high-end GPUs, 384 block network), the Elo
gain is currently estimated to be in the 30–40 range. For less sensible
configurations (128 block network on 2 high-end GPUs) the strength increase
may reach whopping numbers of >100 Elo.

### What makes it stronger?

There are numerous optimizations that make Ceres search both faster and smarter
than Lc0. The major differences from Lc0 search can be found
in [Tilps' blog post](https://www.themissingdocs.net/?p=874).


It seems that those two sources (nps increase, and
smarter search) contribute roughly equally to the Elo increase.
So it's not only due to higher nps, it's not only due to better search on fixed
number of nodes, it's both.
This also explains why smaller networks and more GPUs give higher
strength growth, as nps improvement there may exceed 2.5 times.


## Where can I download Ceres?

The [Ceres repository](https://github.com/dje-dev/Ceres) only contains source
code for now, with build instructions.
There are ~5 people in Discord chat who managed to build it, but currently
it's a bit complicated. The community is working on simplifying the build process
and providing a compiled binary to use.

Currently only Windows 10 is supported, but Linux support is being worked on.


## What it means to LCZero project?

It is not yet known what route will LCZero project take with the appearance of
Ceres, and it will likely take weeks to decide the direction.

There are several factors that make that decision difficult:

* Lc0 is still the only way to generate training data, so this part of Lc0 will
have to be maintained in any case.
* Ceres is written in C#, which will make the engine less portable. While
having a Linux build is on the radar, more exotic platforms
(like tensoflow-js, or even Windows versions prior to 10) are surely out of scope.
* Even though it will be possible to build Ceres on Linux, I expect developer
velocity will be slower with C# and less people are familiar with it, so there
may be less dev engagement.
* Back-porting of many of the Ceres features into Lc0 is not possible without
a full rewrite (although full rewrite is always a good idea :-P).
* It's not rational to split the effort and try to maintain two engines at high
quality at the same time.

It's possible that Ceres will co-exist in parallel to Lc0 and Lc0 devs will
try to back-port new ideas, or devs of LCZero project will abandon Lc0
completely and switch to Ceres. It also depends on whether author of Ceres
will prefer the engine to be separate from LCZero project or he's fine it
to be "merged" into the project.
