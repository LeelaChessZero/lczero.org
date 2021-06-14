---
title: "The importance of open data"
# slug: "blog-post-title"
published: 2021-06-14
#draft: true
author: "borg"
# image: "name"
# cover: "cover.png" # Default
---

In the Leela Chess project, we generate a huge amount of data. We use them to generate the network files to use with lc0 for further data generation, but also with other chess engines, like Ceres. The same data are often used by individual project contributors to generate additional network files using the “supervised learning” approach.

<!--more-->

Our intention has always been for “our” data to be open and available to everyone to use. To that end, we adopted an open license to allow their wide use:

>This collection of training data for Leela Chess Zero is made available under the Open Database License: http://opendatacommons.org/licenses/odbl/1.0/. Any rights in individual contents of the database are licensed under the Database Contents License: http://opendatacommons.org/licenses/dbcl/1.0/


Therefore we are very pleased that Stockfish, starting from today, is using a NNUE network file [trained on the same data](https://github.com/official-stockfish/Stockfish/commit/f8c779dbe538315aa6f65556d0acf11640558504)

{{< tweet 1404360328872402945 >}}

Both projects have mentioned before that our “teams will join forces to demonstrate our commitment to open source chess engines and training tools, and open data.” This is the first concrete result stemming from this effort, and we promise it wont be the last.

