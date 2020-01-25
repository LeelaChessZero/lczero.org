---
title: "Website"
weight: 1500
draft: false
show_contents: false
---

Many sections of this website are not fully written or and help filling/fixing them up would be appreciated.

The website is generated using the [Hugo](https://gohugo.io) static site generator.


## Where data is located

The source files of the website are located on [GitHub](https://github.com/LeelaChessZero/lc0-website/blob/master/content/). All changes of **master** branch of this repository are automatically pushed to live server every 10 minutes.

### Editing (non-GitHub wiki) pages

If you just want do edit a single page without need to create a new one or preview the page looks, you can press **[Edit on GitHub]** button on the topright corner of every article and edit in GitHub editor.

### Editing GitHub wiki pages

Some pages originated from [GitHub wiki](https://github.com/LeelaChessZero/lc0/wiki). Those pages should not be edited in WebSite repository (they would be overwritten anyway). Instead, **[Edit on Wiki]** button leads to the wiki, where those documents can be edited. Such pages are automatically synchronized with website every ten minutes.

New pages appear in [this section]({{<ref "../../dev/wiki">}}) of the website. It's possible to move the document around (and keeping `wikiname` header), and it will keep being linked/synched to the GitHub wiki page.

The syntax for pages is [CommonMark](https://commonmark.org/) standard of MarkDown.

## Setting up HuGo to run locally

If you create pages or plan to contribute non-trivial amount of changes, it's recommended to setup HuGo locally. It works will both under Windows and Linux. Here is how to do it.

For the site, you need **"extended"** version of Hugo v0.60.1 or later.

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
1. Fork the [repository](https://github.com/LeelaChessZero/lc0-website) on GitHub (only needed once per GitHub user).
1. Clone you repository and subrepositories:  
```bash
git clone --recurse-submodules git@github.com:YOURUSERNAME/lc0-website.git
```

### Running HuGo server

To start local HuGo server, use this command line:
```bash
cd lc0-website
hugo -D server  # Remove -D to stop seeing draft pages.
```

After that the website will be available by address http://localhost:1313/, and all changes will be shown live on the web page.

### Creating a new page

To create a new page, use `hugo new` command, for example:  
```bash
hugo new --kind docs watch/teapot.md
```
That will create a page which will be located at `content/watch/teapot.md` and available at `http://localhost:1313/watch/teapot`.

You may want to edit page's header:
```yaml
title: "Teapot"  # Change to human readable page title.
weight: 100      # Is used for page sorting withint server.
draft: true      # Change to publish the page.
```

### Drafts

All pages are created as drafts, and there are many stub pages.
The version of the website with all drafts rendered is located at https://draft.lczero.org/.

The "production" version of the website is currently located at https://newsite.lczero.org/,
with plans to make it the main lczero.org site.

### Contents of section

Section pages (pages that have subpages) have table of contents at the bottom of the page
by default. Add `show_contents: false` to the header to switch that off.