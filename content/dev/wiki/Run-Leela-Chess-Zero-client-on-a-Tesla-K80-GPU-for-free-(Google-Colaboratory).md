---
title: "Run Leela Chess Zero client on a Tesla K80 GPU for free (Google Colaboratory)"
wikiname: "Run-Leela-Chess-Zero-client-on-a-Tesla-K80-GPU-for-free-(Google-Colaboratory).md"
---
[Google Colaboratory](https://colab.research.google.com) (Colab) is a free tool for machine learning research. It is a Python notebook running in a Virtual Machine using an NVIDIA Tesla K80 GPU (a graphics processor developed by the NVIDIA Corporation).

Or, in dummy language, Colab is processing power located on Google servers - not on your local computer - and people who have a google account can use this in order to contribute training games for Leela. It is a service by Google.

Using Colab requires **no installation and runs in your browser. It will not use your processor and it will not exhaust your internet connection**. You can freely use your computer while running training games.

This example shows how to run an **LCZero client on Colab to contribute training games**. You can expect to contribute 1000 to 1500 games per day. At approximately 1000 nodes per second (nps), a single Colab client is faster than a speedy 16-CPU server.

Each session will **stop running after 12 hours of use and needs to be restarted**. You must also keep the browser tab open. More details are below.

**Do not use multiple accounts for training.** Google has notified us they will block users for this.

## Running the GPU client
* First [download a copy of the latest notebook](https://cdn.discordapp.com/attachments/427066771627966466/508693534547771441/lc0_v6.ipynb)
(Here are the old [v5](https://cdn.discordapp.com/attachments/427066771627966466/501185896511438860/lc0_v5.ipynb) and [v4](https://cdn.discordapp.com/attachments/425419999096733706/474576119996219402/lc0_v4.ipynb) notebooks).
* Sign in to your Google account and [open Google Colab](https://colab.research.google.com/notebooks/welcome.ipynb).
* In the menu, choose **File** -> **Upload notebook…** and upload the notebook.
* **Optional**: When the notebook has opened, scroll down to the second last cell and there replace ...

  `!cd lc0/build && ./client_linux --user 'Google Colab' --password googlecolab >/dev/null`

  ... with ...

  `!cd lc0/build && ./client_linux --user 'yournick' --password yourpassword >/dev/null`

  Here `yournick` and `yourpassword` can be freely chosen. Your nick will then be listed on http://lczero.org/ and you can click on it and replay all games you contributed. You dont need to change the nick and password. If you keep it as it is the games will be appended to [The Google Colab User on lczero.org](http://lczero.org/user/Google%20Colab). Changing the password is just helpful the first time, to test if your games are actually relayed.
  
* **Optional**: If you want to see the complete output, remove the `> /dev/null` at the end. It will then log each ponder line. **Notice that this will cause a lot internet traffic - around 20 GB per month if you would let it run nonstop.**

* Finally, click **Runtime** -> **Run All**, which will run each of the cells in order. This will take around 10 minutes to complete.

If everything has gone well, you should see similar output as shown in the image below (it may take a minute or two until you see the first line):

![Screenshot of the cell running the games](https://i.imgur.com/JScyZEh.png)

Note: Google offers **unlimited access to its GPUs**, but each session will **stop running after 12 hours of use and need to be restarted**. The animated spinning "stop" symbol will turn into a static red "play" symbol when the cell has stopped. You can restart with **Runtime** -> **Restart Runtime** followed by **Runtime** -> **Run All**. A simple macro would work to automate the restarting process. 

A session will also stop if you close the browser tab running Colab (about ~1.5 hours after closing the tab). To ensure the client runs for the full 12 hours, please **keep the tab open**.

## Troubleshooting

* If you get a **"signal: aborted (core dumped)" error** when running the client ...

  ```
  cl::Error
  what():  clGetPlatformIDs
  2018/04/18 14:52:31 signal: aborted (core dumped)
  ```

  ... or **"failed to assign a backend"** popup ...

  ![No GPUs](https://i.imgur.com/n3RQOga.png)

  ... then this means there are no GPUs available on Google Colab. Try **Runtime** -> **Restart Runtime** and running again, or **kill the entire VM** with `!kill -9 -1` and try again (VM may take 5 minutes to restart after being killed). **As Google Colab has a limited number of free GPUs, you may just have to try again another time.**

* If the notebook appears to be stuck in "Initializing" and won't run, try restarting as above. After restart, you should see "Connected" with a green checkmark.

## Other Platforms
 * Other paid platforms offer a similar service as Google Colab (Jupyter notebook Python environment for machine learning). For example, [FloydHub](https://www.floydhub.com/) offers a free 2-hour Tesla K80 GPU trial, and a [working Jupyter notebook is available here](https://drive.google.com/open?id=1c0rxfB5r-5-JhfNAjJfvjDFBSVYIFOq7) (developed by @scs-ben).