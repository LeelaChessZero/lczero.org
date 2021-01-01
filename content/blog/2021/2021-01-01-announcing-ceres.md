---
title: "Announcing Ceres"
# slug: "blog-post-title"
published: 2021-01-01
#draft: true
author: "crem"
# image: "name"
# cover: "cover.png" # Default
---

There has been a long time without posts in our blog, and finally there is a
good occasion to revive it.

It seemed that one of the most active LCZero contributors **dje**, was not
very active in 2020. I turned out, there was a good reason for it — he was
writing **Ceres**, a new chess engine that uses LCZero network.

Yesterday, December 31th 2020, it was
[released](https://github.com/dje-dev/Ceres) under the GPLv3.

<!--more-->

It's a great gift to the chess community, which came ~~right~~ approximately on
time for a [New Year](https://www.google.com/search?q=when+is+new+year+in+2021),
3rd
[anniversary](http://www.talkchess.com/forum3/viewtopic.php?t=66280) of LCZero
project, and 220th anniversary of
Ceres dwarf planet
[discovery](https://www.jpl.nasa.gov/news/news.php?feature=4824).

## What is Ceres?

Ceres is a Monte-Carlo search engine, written in C#. It uses neural networks
from LCZero.

The Elo testing is currently in progress, but initial tests show that Ceres
is stronger than Lc0 with the same network, in all kinds of tested
configurations *(possibly except ultra-bullet)*.

In competition-like configurations (2 high-end GPUs, 384 block network), the Elo
gain is currently estimated to be in 30–40 range. For less sensible
configurations (128 block network on 2 high-end GPUs) strength increase
may reach whopping 130 Elo or so.

### What makes is stronger?

There are numerous optimizations that make Ceres search both faster and smarter
than the search in Lc0. The major differences from Lc0 search can be found
in [Tilp's blog post](https://www.themissingdocs.net/?p=874).


It seems that those two sources (nps increase, and
smarter search) contribute roughly equally to Elo increase.
This also explains why smaller networks and larger number of GPUs give higher 
strength growth, as nps improvement there may exceed 2.5 times.


## Where can I download Ceres?

The [Ceres repository](https://github.com/dje-dev/Ceres) only contains source
code for now with a build instructions.
There are ≈5 people in Discord chat who managed to build it

[ I'm writing here !!] 


## What it means to LCZero project