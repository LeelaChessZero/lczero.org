---
author: crem
draft: false
published: "2018-08-20T21:53:00+02:00"
slug: rule50-encoding-bug-is-found
tags: []
title: Rule50 encoding bug is found
---

We had numerous issues in network encoding in the past, and now after pretty
long pause we found yet another one! :)

Turns out, that information about 50-move-no-capture-and-pawn-move-counter was
located in wrong place in training data, so networks were trained without that
information.

That bug existed since the first version of lc0.exe, but wasn't there in
lczero.exe (v0.10). That may explain a slight Elo drop when we fully switched
to lc0.exe (v0.16).

This bug will be fixed in upcoming **v0.17.0**.  
It may however cause slight Elo drop in networks after that as it needs time
to adapt.

 **And for the curious, what the bug was,**

 **In the code:**

    struct V3TrainingData {  
      uint32_t version;  
      float probabilities[1858];  
      uint64_t planes[104];  
      uint8_t castling_us_ooo;  
      uint8_t castling_us_oo;  
      uint8_t castling_them_ooo;  
      uint8_t castling_them_oo;  
      uint8_t side_to_move;  
      uint8_t move_count;  // Not used, always 0.  
      uint8_t rule50_count;  
      int8_t result;  
    };

 **Should be:**

    struct V3TrainingData {  
      uint32_t version;  
      float probabilities[1858];  
      uint64_t planes[104];  
      uint8_t castling_us_ooo;  
      uint8_t castling_us_oo;  
      uint8_t castling_them_ooo;  
      uint8_t castling_them_oo;  
      uint8_t side_to_move;  
      uint8_t rule50_count;  
      uint8_t move_count;  // Not used, always 0.  
      int8_t result;  
    };

Spot the difference!
