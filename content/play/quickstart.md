---
title: "Get Started with Lc0"
weight: 100
---

**Latest stable version:** [{{< param lc0version >}}](https://github.com/LeelaChessZero/lc0/releases/tag/{{<param lc0version>}}) | [All releases](https://github.com/LeelaChessZero/lc0/releases)

Lc0 is a powerful chess engine that works with chess GUIs (Graphical User Interfaces). Think of it like this: Lc0 is the "brain" that calculates the best moves, while the GUI is the "interface" that shows you the board and lets you interact with it.

**You'll need both components to play chess with Lc0.** This guide walks you through the complete setup in 6 simple steps.

---

## Step 1: Choose and Install a Chess GUI

First, you need a chess GUI to display the board and interact with Lc0. Here are the most popular options:

**Recommended for beginners:**
* **[Nibbler](https://github.com/rooklift/nibbler/releases)** (free) - Designed specifically for Lc0 with helpful features
* **[BanksiaGUI](https://banksiagui.com/)** (free) - Also has Lc0-specific features
* **[Arena Chess GUI](http://www.playwitharena.de/)** (free) - Simple and widely used

**Other options:**
* **[Cutechess](https://cutechess.com/)** (free) - Good for engine tournaments
* **[jose](https://peteschaefer.github.io/jose)** (free) - Has Lc0 specific features
* **[Chessbase](https://chessbase.com/)** (paid) - Professional chess software

Download and install your chosen GUI first, then continue to Step 2.

---

## Step 2: Download Lc0 for Your Hardware

The performance of Lc0 depends heavily on using the right version for your hardware. **Choose the version that matches your computer:**

### Windows Users

| Your Hardware                                         | Download This Version                                                                                                                                   |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Newest NVidia GPUs** (RTX 20xx, RTX 30xx, RTX 40xx) | [CUDA Version](https://github.com/LeelaChessZero/lc0/releases/download/{{<param lc0version>}}/lc0-{{<param lc0version>}}-windows-gpu-nvidia-cuda.zip)   |
| **Older NVidia GPUs** (GTX 650-16xx, GT 640M-980M)    | [CUDNN Version](https://github.com/LeelaChessZero/lc0/releases/download/{{<param lc0version>}}/lc0-{{<param lc0version>}}-windows-gpu-nvidia-cudnn.zip) |
| **AMD GPUs or Intel Arc**                             | [DirectML Version](https://github.com/LeelaChessZero/lc0/releases/download/{{<param lc0version>}}/lc0-{{<param lc0version>}}-windows-onnx-dml.zip)      |
| **Modern CPU only** (no dedicated GPU)                | [DNNL BLAS Version](https://github.com/LeelaChessZero/lc0/releases/download/{{<param lc0version>}}/lc0-{{<param lc0version>}}-windows-cpu-dnnl.zip)     |
| **Older CPU only**                                    | [OpenBLAS Version](https://github.com/LeelaChessZero/lc0/releases/download/{{<param lc0version>}}/lc0-{{<param lc0version>}}-windows-cpu-openblas.zip)  |

### Mac Users
Install via [Homebrew](https://brew.sh/):
```
brew install lc0
```

### Android Users
Download the [Android APK](https://github.com/LeelaChessZero/lc0/releases/download/{{<param lc0version>}}/lc0-{{<param lc0version>}}-android.apk)

### Linux Users
**Package managers:** Many Linux distributions include Lc0 in their repositories. Check your package manager first.
**Build from source:** [Follow these instructions](https://github.com/LeelaChessZero/lc0/blob/master/README.md#building-and-running-lc0) for optimal performance.

**Not sure which version to choose?** Start with the CPU version (DNNL BLAS for Windows) - it will work on any computer, though it may be slower than GPU versions.

---

## Step 3: Install Lc0

1. **Extract the downloaded file** to a folder of your choice (e.g., `C:\lc0\` on Windows)
2. **You should see these important files:**
   - `lc0.exe` - The main Lc0 engine
   - `791556.pb.gz` (or similar) - The neural network file
   - Various `.dll` files - Required libraries

**Important:** Keep all files in the same folder!

---

## Step 4: Connect Lc0 to Your Chess GUI

Now you need to tell your chess GUI where to find the Lc0 engine:

1. **Open your chess GUI**
2. **Look for "Engines" or "Add Engine"** in the menus (usually under Settings, Tools, or Engine menu)
3. **Click "Add Engine" or "Install Engine"**
4. **Browse to your Lc0 folder** and select `lc0.exe`
5. **Give it a name** like "Leela Chess Zero" or "Lc0"
6. **Save the settings**

**GUI-specific help:** Check our [detailed GUI setup guide]({{< ref "gui">}}) if you need specific instructions for your chosen GUI.

---

## Step 5: Test Your Setup

1. **Start a new game** in your chess GUI
2. **Select Lc0 as your opponent** (look for engine selection options)
3. **Make a move** - you should see Lc0 thinking and then responding

**If it's working:** Congratulations! You're ready to play chess with Lc0.

**If there are problems:** Don't worry - check our [troubleshooting guide]({{<ref "troubleshoot">}}) or join our [Discord](https://discord.gg/pKujYxD) for quick help.

---

## Step 6: Optional Improvements

### Try Different Neural Networks
The included neural network is good for getting started, but you might want to try others:
- **For stronger play:** Check our [best networks guide]({{< ref "bestnets" >}})
- **For faster analysis:** Consider networks optimized for speed
- **To install:** Simply download the `.pb.gz` file and put it in your Lc0 folder

*Note: If you have multiple networks, Lc0 will automatically use the newest one by file date.*

### Adjust Lc0 Settings
Most chess GUIs let you configure engine settings:
- **Threads:** Use more CPU cores for faster analysis
- **Hash:** Increase memory usage for better performance
- **Time controls:** Set how long Lc0 thinks per move

---

## Getting Help

**Need assistance?**
- **Quick help:** Join our very active [Discord server](https://discord.gg/pKujYxD)
- **Troubleshooting:** Check our [troubleshooting page]({{<ref "troubleshoot">}})
- **Advanced topics:** Browse our full documentation

**Still confused?** That's okay! Chess engines can seem complicated at first. The Discord community is very friendly and helpful to newcomers.

---

## What's Next?

Once you have Lc0 running:
- **Play games** against Lc0 to improve your chess
- **Analyze your games** to find better moves
- **Compare different engines** to see various playing styles
- **Join tournaments** using your chess GUI

Welcome to the world of computer chess!