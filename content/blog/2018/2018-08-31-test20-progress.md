+++
title = "Test20 progress"
slug = "test20-progress"
published = 2018-08-31T23:25:00.002000+02:00
author = "crem"
tags = []
draft = true
+++

Test20 is being run for a few hours already, and several people expressed a
concern that this time progress is slower then it was in previous runs.

Slower progress at start is expected (per network, not that much per time),
for 3 reasons:

1\. We have much more frequent networks than in previous tests, so there are
less games per network, and less training per network.

2\. Our training window is now 500000 games from the very beginning, and we
generated 500000 random games. We need 500000 non-random games for random
games to fully go out of the training window. Until then, we still use random
games for training.

3\. Cpuct was changed to 5, it's expected that training will be slower with it
at first.

(credits to Tilps, a person who handles training, for this explanation).
