---
title: "Troubleshoot"
weight: 2000
draft: false
---

### Running out of memory

Unlike traditional A/B chess engines, Lc0 has to keep entire search tree in memory.
That means that as the search goes, memory consumption increases. Lc0 requires roughly 250-350 bytes of memory per node, that means that typical RAM sizes can only handle so many nodes:

| Amount of RAM | Maximum nodes |
|--------------|---------------|
| 1GB | 3'000'000 |
| 4GB | 12'000'000 |
| 8GB | 25'000'000 |
| 16GB | 50'000'000 |
| 32GB | 100'000'000 |
| 64GB | 200'000'000 |
| 128GB | 400'000'000 |
| 256GB | 800'000'000 |


In case of long searches it's possible that the system RAM is exhausted, and in this case either the Lc0 or other system processes will crash.

To prevent that from happening, there is a UCI parameter **RamLimitMb** (or command line flag `--ram-limit-mb`) which limits amount of memory Lc0 uses (e.g. `--ram-limit-mb=32000` if you want Lc0 to use only 32GB of RAM). The memory calculation is not exact, so it's recommended to have some slack (e.g. setting it to 30000 rather than 32000).

When Lc0 reaches the limit, it will stop the search (from the outside it would look like Lc0 is thinking but not making any progress).

It's also possible to increase amount of memory available to Lc0 by a large factor by using a swap(paging) file on SSD. Usually swap files degrade performance of programs, but Lc0 can handle it just fine.  
Please consult the documentation of the operating system you use to find out how to enable the swap file.


### Other topics

TODO(Write about log collection to ask on #help in discord, common problems and their ways to debug)