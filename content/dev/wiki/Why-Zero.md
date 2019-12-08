---
title: "Why Zero"
weight: 500
wikiname: "Why-Zero"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---
"Zero" means that no human knowledge have been added, with the exception of the rules of the game (piece movement and victory condition).
Even very simple strategic concepts (e.g. it's good to have more pieces instead of less) were not taught to Leela Chess Zero.

There are two schools of thought on this.
* One embraces "zero" as philosophy for its possibility and style (e.g. easy application to other domains)
* Another sees "zero" as a way to maximize the strength of the final trained net.

The "strength" rationale behind the choice of "zero" is to avoid human bias.
Anything Leela learns from humans (heuristics, evaluation function, etc.) could be wrong and reduce the maximum achievable strength.  

Even training against other engines is "not zero", since even SF makes mistakes. 
Only self play lets it gradually find a path to perfect chess, assuming there is such a path. Google's DeepMind shows there is at least a path to very very good chess.