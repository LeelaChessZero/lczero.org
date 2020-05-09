---
title: "Getting Started"
weight: 100
---

To set up Leela Chess Zero, follow the following steps:

#### 1. Setup a chess GUI

Leela Chess Zero, as the most of other chess programs, implements UCI protocol and requires a chess GUI.
Popular GUIs are:
* [Arena Chess GUI](http://www.playwitharena.de/) (free)
* [BanksiaGUI](https://banksiagui.com/) (free, has Lc0 specific features)
* [Cutechess](https://cutechess.com/) (free)
* [Nibbler](https://github.com/fohristiwhirl/nibbler/releases) (free, has Lc0 specific features)
* [Chessbase](https://chessbase.com/) (paid).

#### 2. Download Lc0

Download a version of Lc0 for your hardware on [this page]({{<ref "download">}}).

#### 3. Unpack the downloaded .zip file

Unpack the contents of the file that you downloaded into the location of your choice.
Among other files, you'll find the following:

| File     | Purpose                               |
| -------- | --------------------------------------|
| **lc0.exe**  | The Leela Chess Zero chess engine. |
| E.g. **weights_run2_32930.pb.gz**| The default Neural Network. |
| ***.dll** | Libraries needed for the engine to function. |
| **client.exe**| Not needed unless you want to contribute to training the networks. |

#### 4. (optional) Select a Neural Network to use.

The Lc0 is bundled with a reasonable neural network which will be fine to get you started.

However, depending on your hardware and time control, it's likely that other networks may work better.
If you want to go this way, [here]({{< ref "bestnets" >}}) is a guide to help you picking a net for your needs.

To install the network, simply put it into the same folder as your **lc0.exe**.  
*Note that if there are several network files in the directory, Lc0 will use the **latest one by file modification date**.*


#### 5. Add the engine into the chess GUI

Now it's time to add the Lc0 into the chess GUI of your choice.
How exactly it's done, depends on the GUI, but usually there is "Add Engine..." somewhere in settings.
You can give any name to the entry, and as select the file **lc0.exe** that you unpacked as a **binary**/**command**.

You may find more details instructions for particular chess GUI on [this page]({{< ref "gui">}}).

#### 6. That's it.

After this you should be able to use Lc0 in your GUI.

## Support

If you have any questions or issues, it's highly recommended to join the [discord](https://discord.gg/pKujYxD) for quick help, it is usually very active.
If you prefer to debug stuff by yourself, [troubleshoot]({{<ref "troubleshoot">}}) page may help.
