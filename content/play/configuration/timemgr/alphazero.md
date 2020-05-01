---
title: "Time manager Alphazero"
weight: 100
draft: true
---

This page contains an alternative time manager to be used by lczero.

## Time manager alphazero

'alphazero' is an optional time manager simulating the time managent as was used by the AlphaZero project. 'alphazero' Makes the engine use AlphaZero time. The alphazero engine always budgeted 5 percent of total time left for the first upcoming move. Remaining time is divided by value `alphazero-time-value`. The Default value of 20 uses (all time / 20 = 5%) 5 percent of all remaining time. Lower values of 'alphazero-time-value' will spend more time in beginning of game, higher values will save more time for later in the game.

### Configuration alphazero time
 
To enable the `alphazero` time manager configure with parameter `--time-manager=alphazero(alphazero-time-value=20)`. The number `20` in the command divides all remaining available time to have each move played out at (all time / 20 = 5%) five percent of all remaining time per move. If you want you can use other numbers, but we know alphazero was using 5% of all remaining time.

### Time visualization

This graph shows that when a decay of 5% is chosen, for each subsequent move less and less time is budgeted for the move.

![Moves left](../alphazerotimedecay.png)

A development description might still be available on github 
[PR 1201](https://github.com/LeelaChessZero/lc0/pull/1201).

