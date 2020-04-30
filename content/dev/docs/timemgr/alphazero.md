---
title: "Time management option alphazero"
weight: 300
---

This page contains current and proposed changes to the time manager.

## PR 1201 Time manager alphazero

'alpazero' is an optional time manager simulating the time managent as was used by the AlpaZero project. 'alphazero' Makes the engine use AlphaZero time. The alphazero engine always budgeted 5 percent of total time left for the first upcoming move. Remaining time is divided by value `alphazero-time-value`. The Default value of 20 uses (all time / 20 = 5%) 5 percent of all remaining time. Lower values of 'alphazero-time-value' will spend more time in beginning of game, higher values will save more time for later in the game.

### Configuration alphazero time
 
To enable the `alphazero` time manager configure with parameter `--time-manager=alphazero(alphazero-time-value=20)` to have each move played out at (all time / 20 = 5%) five percent of all remaining time per move.

---
title: "PR1201: Add alphazero time manager"
weight: 300
---

This page contains summary of changes in
[PR 1201](https://github.com/LeelaChessZero/lc0/pull/1201).

