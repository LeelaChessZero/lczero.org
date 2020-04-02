+++
title = "Contributing to Leela Chess Zero. Creating the Caissa of Chess engines...."
slug = "contributing-to-leela-chess-zero"
published = 2018-10-02T22:10:00+02:00
author = "Bob23"
tags = []
draft = true
+++

[![](../../images/2018-10-02-contributing-to-leela-chess-zero-
ghgj76888.png)

Deepmind's latest paper release ( _Mastering Chess and Shogi by Self-Play with
a General Reinforcement Learning Algorithm_ ) on 5 December 2017, presented a
method of reinforcement learning for convolutional neural networks that its
result was fantastic as they created 3 engines, one for GO, one for Chess and
one for Shogi that were beating easily the best available engines of the time.

For Chess the known AlphaZero for Chess, beat Stockfish 8 easily, but in order
AlphaZero to be created it required generating games and training for "only" 4
hours, having generated **44 million games!** Then these games were used to
make the engine learn observing these games and become stronger.  
Generating games is the hard part of the whole process anyway. As it is the
most time consuming thing. And one has to generate millions of games to start
becoming really strong.

So these were exciting news for all, as now everyone could create a super
strong engine in every board game he could think of by trying the methods in
Deepmind's papers.  
And since Deepmind didn't published the AlphaZero engine, people wanted to
replicate Deepmind's results by training it according to the papers on their
own. But here comes the tricky thing. This **"only 4 hours"** generating of
games and training was with Deepmind's super hardware consisting of **5000
TPUs.** And **one TPU** has the processing power of about **10 Nvidia GTX 1080
Ti**.  
So these 4 hours, would translate to **many many years** of generating games
in our home computers. Gian-Carlo Pascutto author of many Chess related papers
and author of Chess program Sjeng that has moved to GO programming as well in
latest years, has posted a disheartening message estimating he would need
around _**1700 years to replicate the Deepmind's generation of games**_ with
his strong computer.

But then Pascutto made a very nice move! He created a distributed project,
Leela Zero for GO. So people could use their computers to contribute to
training in order to replicate Depemind's results much much faster than single
persons. The philosophy is that the power is on numbers.  
Even people with weak hardware generating like 100 games per day are important
since having 1000 such people would generate 100000 games per day.
_**Philosophy is, everyone counts!**_  
Then using Leela Zero's code, Gary Linscott modified it and created a similar
project but for Chess, the Leela Chess Zero.  
So it attracted some people initially that contributed to training and very
fast attracted even more and strength started to rise and rise and Leela Chess
Zero is most probably the 4th strongest engine right now looking in the eyes
of even Stockfish!

The project managed to have some **500 or 600 contributors** at times that it
has fallen to about 150 now and managed to have 2 very big ones, the known
inside the project's people, **Sergio Vieri and VPrelovac** , that were using
incredible hardware(like even 100 Tesla V100s) and contributing even **1 or 2
million games per day**! Right now these 2 big contributors are absent and
hopefully one day will return but this is still a distributed project and so
even a lot more slowly, games are generated with about **600000 rate per day**
right now.  
So all people that can contribute are needed, to help **Chess as also
Science.** To create a super strong program and to examine even better methods
of training and advance the training progress.

 _Contributing is easy._  
 **1)** Downloading the client here:
<https://github.com/LeelaChessZero/lczero-client/releases>  
**2)** Downloading the binaries of Lc0(one of them for the appropriate
hardware, either CUDA, BLAS or Opencl) from here:
<https://github.com/LeelaChessZero/lc0/releases>  
**3)** Putting everything in one folder and then running client.exe

Every single GPU counts. Even weak ones. So it's not pointless at all to
contribute even a little bit.

But Google offers 2 extra ways to help Leela project since it gives for
free(and for money) its GPUs with **Google Colab** and **Google Cloud**.  
With these 2 ways one without using any of its computer resources(CPU or GPU),
only Google's ones, can generate a big amount of games and help Leela get
stronger.

►For contributing at generating games with _**Google Colab**_ you must follow
the given instructions here:  
<https://github.com/LeelaChessZero/lc0/wiki/Run-Leela-Chess-Zero-client-on-a-
Tesla-K80-GPU-for-free-(Google-Colaboratory)>  
Normally Google Colab allows about 12 hours of continuous usage of its GPUs
then it stops them and then you have to restart it.  
That way you can generate about **1000 games per day.**  
But for some people in the last weeks Google Colab is very problematic since
it doesn't allow much time to use it.

►Generating games with _**Google Cloud**_ is much better, since it gives you
much stronger GPUs to use. You must follow the given instructions here:  
<https://github.com/LeelaChessZero/lc0/wiki/Google-Cloud-guide-(lc0)>

A small concern with Google Cloud is that you must provide a credit card
number (in a verified safe page of course) for ID purposes. Google after all,
has to be sure you will not abuse their offer, creating multiple accounts.

People in Leela groups have given the following instructions on how to run it:

With Google Cloud you can rent GPUs ranging from K80/P100/V100 via your
browser, with no processing on your end.  
_**You get $300 credit just for signing up** **for a free trial**_ and per
Google you will not be billed once the $300 is used and the trial ends(of
course you can opt to continue renting the GPUs if you wish).  
For example, with this you can rent 1 Tesla V100 for about 21 days generating
approximately 15000 games per day, so about 315000 games generated for free.

**1)** Go to <https://cloud.google.com/compute/> and set up an account to
start your free trial. If you have a gmail account already you can just use
that. You will need to provide credit card details for ID purposes.

**2)** Click on 'Compute Engine' on the interface and navigate to 'VM
instances'

 **3)** Click 'Create an instance' at the top.

 **4)** Under Machine Type, click customize. Under GPUs, select how many GPUs
you want to run (e.g. 1). Choose which GPU type you want. If you don't see the
GPU type you want, choose a different Region.

**5)** Scroll a bit down and under Boot Disk click the 'Change' button and
select 'Ubuntu 16.04 LTS'

 **6)** On the right hand side you will be able to see the estimated hourly
cost of the GPU you are running. It is likely much higher than expected. We
can reduce this by expanding the 'Management, security, disks, networking,
sole tenancy' section. Scroll down to the Pre-emptibility option and select
'ON", What this does is it makes it so that you only get lower priority access
to the GPUs, and have to restart the instance every 24 hours, but reduces
costs by about 60%.

**7)** Finally look for the Startup Script option under the Automation
section. In the box there copy and paste the script found in
[https://github.com/LeelaChessZero/lc0/wiki/Google-Cloud-guide-(lc0)
](https://github.com/LeelaChessZero/lc0/wiki/Google-Cloud-guide-\(lc0\))

**8)** Click create, and after a few minutes the VM instance should show up.
You can click on it and select 'monitoring' and hopefully it should show
active CPU utilization after a bit; you can also check Lczero after 1/2 an
hour or so and it should be generating around 600 games per hour with a V100.
If you chose a pre-emptible gpu then you will just need to restart it every 24
hours or so.

So try to contribute in any way you want, running the client on your GPU or
running for free Google Colab or Cloud, since the goal is to create the
strongest Chess engine possible so every training game counts!  
Doing this new things can be learned for the training methodology so it will
help the area of neural nets training with deep learning methods so it would
help science too and especially the Leela Chess Zero project will provide a
solid platform for generating other super strong engines in other Chess
variants as also non Chess variants.

This new methodology of Neural Networks trained with Deep learning methods is
the future in most board games and of course this is just one of the areas it
will be applied and is the future in countless other. Chess programming is too
much advanced though, the last 50 years new search optimizations are explored
and current Chess engines are super strong much much stronger than the top
human Grandmasters. And neural networks' strong point is that they provide
with a superb evaluation function.  
That seemed to work in GO exceptionally good. Since previous GO programs
didn't really have even a primitive evaluation function to judge how good a
position is. So AlphaGO series of engines of Deepmind and their method to
create an evaluation function with the neural net trained on
supervised(AlphaGO Zero) or reinforcement learning methods(AlphaZero GO
engine) provided an extremely good one so it brought a colossal leap in GO
engines strength even surpassing by a big margin top humans, something no one
could ever imagine it will happen for the next 10 years.  
This method seems to work at Chess too, but with not that gigantic success and
this is because at Chess, tactics(so search and not evaluation) play a much
bigger role than in GO. Ii Chess even a primitive evaluation function with
simple rules like novice rules for piece values(e.g Rook=5, Knight =3) and
some other rules like Rook on open file add +0.2 bonus etc, combined with a
very good search provides an engine with very high strength. So evaluation
function is not that important as in GO.

But of course it still is **VERY important!** And as Leela proves and
AlphaZero proved, she is able to compete with monsters(traditional engines)
looking some 70 million positions per second while she does look something
like 40 thousands position per second!  
And she is able to do that because of her much superb evaluation function. She
is much more clever in a sense. So improving it is essential to obtaining a
even stronger engine. So more generated games for training is essential.  
A question is that where is the limit of the intelligence of the neural
network can reach. How much higher than current top Chess engines, Stockfish?
Probably the limit is a lot lot higher, but it's not that straightforward or
easy to reach it.  
And there is the search part also. Neural nets and Leela use some variations
of MCTS(Monte Carlo Tree Search) and it's just 10 years of this development in
practice for board game engines and just half or less for Chess engines,
compared to more than 40 for traditional engines search(AlphaBeta).

New breakthroughs will definitely come and even hybrid methods(MCTS+AlphaBeta)
will succeed in taking advantage of the superb evaluation function of
Deepmind's method.  
**2018 is the beginning of a new era.**  
Future in computer Chess starts to look shiny again....
