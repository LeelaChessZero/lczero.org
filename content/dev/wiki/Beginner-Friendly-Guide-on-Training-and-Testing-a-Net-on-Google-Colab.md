---
title: "Beginner Friendly Guide on Training and Testing a Net on Google Colab"
weight: 500
wikiname: "Beginner-Friendly-Guide-on-Training-and-Testing-a-Net-on-Google-Colab"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---


# Introduction

This is intended to be a beginner-friendly guide on how to train and bench (against the [CCRL Baseline Net](https://lczero.org/blog/2018/09/a-standard-dataset/)) lczero neural networks. This is probably the place to look if you're stuck with no GPU / an AMD one (as I am), and if you don't use linux. If you don't fall into both or either of these categories, I still hope you'll be able to take away something from this.

Disclaimer: For now, I'm detailing the exact process I followed, that worked for me. It is indeed possible to accomplish even more of the subtasks detailed below on Google Colab, and nor are the ways I'm doing stuff the only ways to do them. Feel free to tinker around yourself. I'll try and update this article later with instructions on how to do it all on Google Colab. I'll be assuming you run Windows, although the process should be very similar for Linux as well.

This guide covers the following:
1. Preprocessing the training dataset
2. Training the neural net
3. Evaluating the strength of the trained net

Prerequisites:

1. A Google Drive account, with Backup and Sync enabled
2. A PGN database with a decent number of games (500k is a good place to start)
3. Plenty of free time

## Preprocessing the Training Dataset

1. Get the binaries for [pgn-extract](https://www.cs.kent.ac.uk/people/staff/djb/pgn-extract/) and [trainingdata-tool](https://github.com/DanielUranga/trainingdata-tool) (a prebuilt windows binary is available [here](https://ci.appveyor.com/project/DanielUranga/trainingdata-tool/builds/32830526/artifacts))
2. Create a folder inside your local Google Drive folder. This will be your working directory. Put these two binaries in the same folder, along with your PGN database. Rename the database to input.pgn.
3. Open PowerShell in that folder, and run the following commands. Each of them may / will take some considerable amount of time, so be patient. 

	`./pgn-extract -7 -C -s -o output.pgn input.pgn`

	`./trainingdata-tool output.pgn`

	I've chosen parameters as per my own convenience, and for the sake of simplicity. You may refer to the respective documentations for further information.

4. Folders named 'supervised-0', 'supervised-1', and so on will be generated. Once the trainingdata-tool has finished its job, create another folder called Training Data and move the 'supervised-x' folders into it.
5. Backup and Sync will take a while to upload everything. Move on to the next part in the meanwhile.

## Training the Neural Net
1. Download the [lczero-training](https://github.com/LeelaChessZero/lczero-training) repository, extract it all, and place it in a folder in your working directory. Navigate to lczero-training-master/tf/configs, and open example.yaml in your editor of choice. This file contains all the hyperparameters and stuff for the training pipeline. The values are supposed to be inputted  at your discretion, although I'd recommend asking the kind folks over at [discord](https://discord.gg/EgH6pX) for some help, if you have no idea what you're doing. [Here](https://github.com/Debneil/colab-nets/blob/master/example.yaml)'s my latest example.yaml; you'll find another one [here](https://github.com/LeelaChessZero/lczero-training) (This one will result in much faster training, but a weaker net overall). You'll need to edit the paths in my example.yaml to reflect the absolute paths to the respective  files when your drive is mounted on Colab (more on that later). The 'My Drive' folder is your root Google Drive folder. 

2. Head over to [Google Colab](http://colab.research.google.com/), and create a  notebook. Change the runtime type to GPU (important). Plug in the following code, run it, and go along with the authorization to mount your Google Drive on the instance. 

	`from google.colab import drive` 

	`drive.mount('/content/gdrive', force_remount=True)`

	`!chmod -R 777  "/content/gdrive/My Drive/your/working/directory/"`

3. Train the net with the code below. Note that this kinda stuff takes ungodly amounts of time, and is pretty much impossible to get done in a single session. Thankfully, with checkpoints enabled (set to 1 every 1000 steps in my example.yaml), you can automatically resume from the last created checkpoint by running the same code later. Checkpoints also provide you the added benefit of generating a net for you at every checkpoint, so that you have stuff to play around with while the full-scale net trains. And, of course, replace the paths as appropriate.
`!"/content/gdrive/My Drive/Chess/Engines/LC0/Training 4/lczero-training-master/tf/train.py" --cfg "/content/gdrive/My Drive/Chess/Engines/LC0/Training 4/lczero-training-master/tf/configs/example.yaml" --output "/content/gdrive/My Drive/Chess/Engines/LC0/Training 4/lczero-training-master/tf/tmp/mymodel4.txt"`
4. At the end of all this, you'll have your fully-trained net, in the form of a .pb.gz file (as are the intermediate ones).


## Evaluating the Strength of Trained Net
1. Get the latest linux64 binary of [cutechess-cli](https://github.com/cutechess/cutechess/releases), extract the content into a new working directory in your Google Drive. WD1 is my working directory in my examples, and contains the lc0 executables, weights and engines.json file (along with the cutechess-cli files), which you'll have to configure as per your needs.
2. Create an engines.json file and fill it up appropriately. [Here](http://lczero.org/dev/wiki/testing-guide/)'s a neat guide explaining what everything in there means (and the rest of the procedure as well, my article just aims to make it work on Colab). You can find my latest engines.json (at time of writing) [here](https://github.com/Debneil/colab-nets).

	Navigating the various directories to select the engines and weights, and making them correspond in Colab, and eventually work, is a huge pain; I prefer the much simpler alternative of placing everything in the same working directory, without any nested folders. 

	Note that while running a match between the baseline net and your net, you'll need two lc0 executables, and they can't be the same file. So, in my setup, I just made a copy and renamed it to lc1. For more networks, you can always proceed in a similar manner.
3. Paste the engines and weights in the same directory and rename whatever necessary according to your engines.json.
4. Get an opening book from [here](https://cdn.discordapp.com/attachments/429710776282906625/536596158018224139/openings.zip), and keep it somewhere suitable on your Google Drive.
5. Create a new Colab notebook, change the runtime type to GPU, and follow along:

	`from google.colab import drive`

	`drive.mount('/content/gdrive', force_remount=True)`

	`!chmod -R 777  "/content/gdrive/My Drive/Chess/Engines/LC0/Elo Eval/"`
	
	`!mkdir wd`

	`!cp -RT '/content/gdrive/My Drive/Chess/Engines/LC0/Elo Eval/WD1/' /content/wd/`

	`!cd /content/wd/ && ls`

	Make sure that all the aforementioned necessary files have been copied over.
	
	`!chmod -R 777 /content/wd/`
6. Now, run the match:
`!cd /content/wd/ && ./cutechess-cli -tournament round-robin -concurrency 1 -pgnout "/content/gdrive/My Drive/Chess/Engines/LC0/Elo Eval/Colab Tests/match.pgn" -each proto=uci tc=inf nodes=1000 restart=on -engine conf=test1 -engine conf=baseline -openings file="/content/gdrive/My Drive/Chess/Engines/LC0/Books/book.pgn" -repeat -rounds 1000 -games 1`

7. Once the match is done, if you want to evaluate ratings, you have to use ordo. [This](http://lczero.org/dev/wiki/testing-guide/) guide is good enough for instructions on that, so I won't iterate the same stuff.

## References / Read Further

1. The readme of [lczero-training](https://github.com/LeelaChessZero/lczero-training)
2. [Lc0 Testing Guide](http://lczero.org/dev/wiki/testing-guide/)
3. [This](https://lczero.org/blog/2018/09/a-standard-dataset/) article on the baseline dataset and network

Huge thanks to oscardssmith, dkappe, Tilps, borg, crem, Naphthalin and everybody else at the lc0 discord who helped me figure all of this out.