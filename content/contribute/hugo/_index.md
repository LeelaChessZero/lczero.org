---
title: "Website"
weight: 1500
draft: false
show_contents: false
---

Many sections of this website are not fully written, and help with filling/fixing them up would be appreciated.

The website is generated using the [Hugo](https://gohugo.io) static site generator.


## Where data is located

The source files of the website are located on [GitHub](https://github.com/LeelaChessZero/lczero.org/blob/master/content/). All changes of **master** branch of this repository are automatically pushed to live server every 10 minutes. There is also a version with drafts enabled at https://draft.lczero.org/.

### Editing (non-GitHub wiki) pages

If you just want to edit a single page without needing to create a new one or preview how the page looks, you can press the **[Edit on GitHub]** button in the top-right corner of every article and edit in the GitHub editor.

### Editing GitHub wiki pages

Some pages originated from [GitHub wiki](https://github.com/LeelaChessZero/lc0/wiki). Those pages should not be edited in the website repository (they would be overwritten anyway). Instead, **[Edit on Wiki]** button leads to the wiki, where those documents can be edited. Such pages are automatically synchronized with website every ten minutes.

New pages appear in [this section]({{<ref "../../dev/wiki">}}) of the website. It's possible to move the document around (while keeping the `wikiname` header), and it will remain linked/synced to the GitHub wiki page.

The syntax for pages is [CommonMark](https://commonmark.org/) standard of MarkDown.

## Setting up HuGo to run locally

If you create pages or plan to contribute a non-trivial amount of changes, it's recommended to set up HuGo locally. It works well under both Windows and Linux. Here is how to do it.
 
You can have a look at the latest [Hugo installation instructions](https://gohugo.io/installation/)

For the site, you need **"extended"** version of Hugo v0.70.0 or later.

### Installing HuGo on Ubuntu/Linux

To install Hugo on Ubuntu or Linux versions that support the Snap package manager, open a terminal and run the following command:

```bash
sudo snap install hugo
```

This command will install the latest version of Hugo. You can verify the installation by typing `hugo version` in the terminal.

### Installing HuGo in Windows

[This document](https://gohugo.io/getting-started/installing/) from HuGo documentation describes how to install it. Here is what worked for me:

1. Install Chocolatey (described [here](https://chocolatey.org/install)):
    1. Press **Win** key so that Windows Start menu opens.
    1. Type **Powershell** but **do not press Enter**. "Windows Powershell" will be found.
    1. Press **Run as Administrator** button.
    1. Type the following the blue window that opens:
    ```
    Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
    ```
    1. Chocolatey is installed! You can type `choco` in command line to check that it's available. Reboot may be required.
1. Install HuGo.
    1. Type:  `choco install hugo-extended -confirm`
    1. Hugo should be installed now! You can type `hugo` to check it. Reboot may be required.

### Getting site sources

1. Download (e.g. from [here](https://git-scm.com/download/win)) and install `git` on your computer (only needed once, and you may already have it installed in your system, check by typing `git`).
2. Fork the [repository](https://github.com/LeelaChessZero/lczero.org) on GitHub (only needed once per GitHub user).
3. Clone your repository and subrepositories:  
    ```bash
    git clone --recurse-submodules git@github.com:YOURUSERNAME/lczero.org.git
    ```

### Running HuGo server

To start the local HuGo server, use this command line:

```bash
cd lczero.org
hugo -D server  # Remove -D to stop seeing draft pages.
```

After that, the website will be available at the address http://localhost:1313/, and all changes will be shown live on the web page.

### Creating a new page

To create a new page, use `hugo new` command, for example:

```bash
hugo new --kind docs watch/teapot.md
```
That will create a page which will be located at `content/watch/teapot.md` and available at `http://localhost:1313/watch/teapot`.

You may want to edit page's header:

```yaml
title: "Teapot"  # Change to human readable page title.
weight: 100      # Is used for page sorting within the server.
draft: true      # Change to publish the page.
```

### Drafts

All pages are created as drafts, and there are many stub pages.
The version of the website with all drafts rendered is located at https://draft.lczero.org/.

The "production" version of the website is currently located at https://newsite.lczero.org/,
with plans to make it the main lczero.org site.

### File locations

Hugo has non-trivial rules for mapping filenames to URLs. Here is how it works roughly:

|File location|Resulting URL|
|---|---|
|`content/foo/bar.md`|`example.com/foo/bar/`|
|`content/foo/bar/index.md`|`example.com/foo/bar/`|
|`content/foo/bar/_index.md`|`example.com/foo/bar/`|

Note that `index.md` and `_index.md` have special meanings.

The difference between `_index.md` and `index.md` is that `_index.md` creates logical subsection.

* When a page doesn't have subpages, use `index.md`.
* When in doubt, use `_index.md` (there's nothing wrong with using it always).

### Contents of section

Section pages (pages that have subpages) have table of contents at the bottom of the page
by default. Add `show_contents: false` to the header to switch that off.
