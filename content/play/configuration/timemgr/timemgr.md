---
title: "Time management"
weight: 100
draft: true
---

This page contains different types of time managers.

# Time manager legacy

'Legacy' estimates and budgets time for a move based on ..to be documented

# Time manager smooth

'smooth' estimates and budgets time for a move based on ..to be documented

# Time manager alphazero

'alphazero' is an optional time manager simulating the time managent as was used by the AlphaZero project. 'alphazero' Makes the engine use AlphaZero time. The alphazero engine always budgeted 5 percent of total time left for the first upcoming move. This budget can be adjusted with `alphazero-time-pct`. The Default value of 5.0 uses 5 percent of all remaining time. Lower values of 'alphazero-time-pct' will spend less time in beginning of game, higher values will use up more time in the beginning of the game.

### Configuration alphazero time
 
To enable the `alphazero` time manager configure with parameter `--time-manager=alphazero` will use the default of 5%. You can also adjust the percentage by specifying `--time-manager=alphazero(alphazero-time-pct=10.0)`. The number `10.0` in the command will use 10% of all remaining available time in the upcoming move. Alternative numbers must be in the range [1.0, 99.0], but we know alphazero was using 5% of all remaining time.

### Time visualization

This graph shows that when a decay of 5% is chosen, for each subsequent move less and less time is budgeted for the move.

![Moves left](../alphazerotimedecay.png)

A development description might still be available on github 
[PR 1201](https://github.com/LeelaChessZero/lc0/pull/1201).