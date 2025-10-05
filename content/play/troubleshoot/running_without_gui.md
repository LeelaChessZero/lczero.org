---
draft: false
title: Running without GUI
---

This guide will help you test if Leela Chess Zero is working correctly by running it without any chess GUI program.

## Step-by-Step Instructions

### Step 1: Find the lc0 file
1. Open **File Explorer** (the folder icon in your taskbar, or press `Windows key + E`)
2. Navigate to the folder where you installed Leela Chess Zero
   - This is usually in a folder like `C:\Lc0\` or wherever you extracted the files
3. Look for a file named `lc0` (it will show as type "Application" or "Windows Application")
   - Note: You might not see the `.exe` extension - that's normal in Windows

### Step 2: Run lc0 directly
1. **Double-click** on the `lc0` file
2. A **black window** (Command Prompt) should open
   - Don't worry if it looks intimidating - this is normal!
   - You should see some text appear, possibly including version information

### Step 3: Test the engine
1. In the black window, **type exactly**: `go nodes 1000`
2. Press **Enter**
3. Wait for the program to respond (this may take a few seconds)

### Step 4: Check the results
Look at what appears in the black window:

**✅ Good signs (everything is working):**
- You see lines starting with "info" showing search progress
- You see a line starting with "bestmove" followed by a chess move (like "bestmove e2e4")
- No error messages appear

**❌ Problem signs (something needs fixing):**
- Error messages appear (often in red text)
- The program crashes or closes immediately
- You see messages about missing files or networks
- Nothing happens after typing the command

### Step 5: Take a screenshot or copy the text
Before closing the program, you should save what you see for getting help:

**Option 1 - Take a screenshot:**
1. Press `Windows key + Shift + S` (this opens the snipping tool)
2. Click and drag to select the black window
3. The screenshot will be saved to your clipboard

**Option 2 - Copy the text:**
1. Right-click anywhere in the black window
2. Select **"Select All"** from the menu
3. Right-click again and select **"Copy"**
4. The text is now copied to your clipboard

### Step 6: Exit the program
- Type `quit` and press **Enter**, OR
- Simply close the black window by clicking the **X** button in the top-right corner

## What to do next

- **If everything worked correctly**: Your Leela Chess Zero installation is fine, and any problems are likely with your chess GUI setup
- **If you saw error messages**: Post your screenshot or copied text in the **#help** channel of the [Lc0 Discord server](https://discord.gg/pKujYxD) for assistance

## Getting Help

If you encountered problems:
1. Join the [Lc0 Discord server](https://discord.gg/pKujYxD)
2. Go to the **#help** channel
3. Paste your screenshot or the copied text from the black window
4. Describe what you were trying to do and what went wrong

## Common Issues

- **"Network not found" errors**: You may need to download a neural network file
- **"CUDA/OpenCL errors"**: Your graphics card drivers may need updating
- **Program won't start**: You might be missing required system files (like Visual C++ redistributables)

---

*Tip: The screenshots and copied text will help the community diagnose your specific issue much faster than just describing the problem*