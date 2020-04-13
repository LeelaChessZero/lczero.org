+++
title = "Nibbler: an Lc0 GUI"
slug = "nibbler-lc0-gui"
published = 2019-06-25T13:20:00+02:00
author = "fohristiwhirl"
tags = []
draft = false
+++

Does the world need another Chess GUI? Some people say no, but they don't have
very many Chess GUIs, do they?

I'm the author of [Nibbler](https://github.com/fohristiwhirl/nibbler), the
first Chess GUI designed specifically for Lc0, and inspired by the excellent
[Lizzie](https://github.com/featurecat/lizzie) Go interface. Although Nibbler
is a work in progress, it's very usable, and has received a lot of favourable
comment.

<!--more-->

![]({{< file "screenshot.png" >}})

Being designed specifically for Lc0 means it can use the sort of information
Leela provides that other engines don't (or can't). For example, Leela is
always giving opinions about multiple different moves, and so Nibbler shows
several possibilities graphically.

For the more technically minded Leela user, Nibbler also provides Nodes,
Policy, and Uncertainty statistics.

Prebuilt binary releases are
[here](https://github.com/fohristiwhirl/nibbler/releases). Do send bug reports
and feature requests.
