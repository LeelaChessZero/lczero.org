---
title: "Lc0 v0.25 has been released"
#slug: "blog-post-title"
published: 2020-05-02
author: "crem"
# image: "name"
# cover: "cover.png" # Default
---

Lc0 **v0.25** has been released.  
*(and it's actually already at v0.25.1 due to hot bugfixes after the initial release)*.


<!--more-->


## What's new in this version

### Moves left head

All of Lc0 backends support a new "moves left head", so we are starting to
train networks which have it.

**Moves left head** makes it possible for a neural network to predict the
remaining game length.

Once such networks are trained, potential uses will include:
* Making search take the shorter route towards winning (hopefully reducing "shuffling").
* Doing the same logic during generating training games (hopefully teaching the network
  to focus on non-shuffling moves even without using MLH in search)
* Better time management.
* Displaying this information to human, maybe they will find it useful.

### FRC chess

The last required pieces for Chess960 support are also included into v0.25 run,
and it's possible to start the training.

### GTX GPU optimizations

Cudnn backend has more optimizations which allows better nps on GTX GPUs.

### Time manager

The time management code was reorganized to allow more experimenting.

There is a new time manager, which is not tested but potentially supposed to be better.
Enable using `--time-manager=smooth-experimental` command line flag.

### Training and NN format specific changes
* Added input format type 3 support to encoder/training data/search  
  (allowing board flips and rotations).
* More ways to configure temperature decay.
* Fixed castling in pgn parsing for chess 960 start positions.
* Support for selfplay from books with fen tag.
* Switch to v5 training data.

### Bugfixes and other minor changes

* Lc0 can now see draws a bit earlier due to certainty propagation.
* Added option to start counting time with `go` uci command.  
  That it how it should be according to the standard, but some GUIs start clock
  from `position` command.
* Added a flag to allow `go nodes` to takes reused nodes into account.
* Shared collisions support between threads, should increase strentgh per node a bit.
* We changed win probability to centipawn value formula again. New formula is
  **cp = 90 × tan(1.5637541897 × q)**.
* Some chess GUIs didn't like chess engines returning `depth 0`, changed Lc0 to
  never do that.
* Have a separate eigen backend.
* Tensorflow (C++) backend is also there (if you can compile it).
* Relaxed C++17 requirement a bit. Lc0 still needs C++17, but also is compilable on
  compilers without `<charconv>` header. We also output better error message if
  compiler doesn't support required features.
* Most parts of FEN command are now optional.
* More checks for uci input errors.
* Fix for starting fens that differ only in 50 move ply.
* Allowed ranges for several parameters were extended.
