---
title: "Neural Net Training"
wikiname: "Neural-Net-Training"
---
The self-play games your client creates are used by the central server to improve the neural net. This process is called training (many people call the process of running the client to produce self-play games training, but in machine learning these games are only the input data for the actual training process). 

Some machine learning terms:
* _Batch Size_: How many positions the GPU can train on simultaneously. Set as large as your GPU can handle.
* _Learning Rate_: How fast the neural net weights are adjusted. Too high and you don't learn anything, or worse. Too low and your progress is too slow.
* _Sampling Ratio_: How many times each position from self-play games is used for training. Too high and your net may _overfit_. Too low and your progress is too slow.
* _Train/Test Sets_: Best practice is to split your data into two sets, train and test sets. You use the train set to improve the NN weights. You use the test set to validate the NN is able to generalize what it learned to positions it has never trained on. This way you can detect if your NN is _overfitting_.
* _Overfitting_: If the network trains on the same positions too much or with too low _learning rate_, it may memorize those positions and not generalize well to other similar positions. Larger learning rates or other regularization like L2 or dropout can reduce this, if more data is not available. See https://arxiv.org/pdf/1803.09820.pdf for some discussion on L2 and learning rate affecting this.


This [sheet](https://docs.google.com/spreadsheets/d/13MTxsCvLBkc7luOKU3iFFP_JcPjcfg4esU_63Ka5tmY/edit?usp=sharing) shows how some of the hyper parameters are picked.
