---
draft: false
summary: Reference and usage guide for all Hugo shortcodes supported in the LCZero
  theme, including examples and rendered output.
title: Shortcodes Reference & Usage Guide
weight: 100
---

## Built-In Shortcodes

There are many built-in shortcodes in Hugo, you can see them here: https://gohugo.io/content-management/shortcodes/#embedded

## Custom Shortcodes

### Lichess Embed

Used to embed a Lichess game into the page. Parameters:
- game_id (required) — the Lichess game id.
- ply (optional) — move number to anchor to, e.g. ply=69.
- width (optional) — CSS width for the embed container (e.g. "80%", "600px"); defaults to "100%".
- caption (optional) — text displayed centered below the board.

Rendered example (default width):
{{< lichessgame game_id=BMuSp0Wt >}}

Raw shortcode (won't render):
```go
{{</* lichessgame game_id=BMuSp0Wt */>}}
```

Examples:
- Minimal:
  {{< lichessgame game_id=BMuSp0Wt >}}
  ```go
  {{</* lichessgame game_id=BMuSp0Wt */>}}
  ```

- With a move (ply):
  {{< lichessgame game_id=jrLkiOkY ply=69 >}}
  ```go
  {{</* lichessgame game_id=jrLkiOkY ply=69 */>}}
  ```

- With width (80%) and caption (caption appears centered below the board):
  {{< lichessgame game_id=jrLkiOkY ply=69 width="80%" caption="Hikaru makes a mistake" >}}
  ```go
  {{</* lichessgame game_id=jrLkiOkY ply=69 width="80%" caption="Hikaru makes a mistake" */>}}
  ```

- With fixed pixel width:
  {{< lichessgame game_id=jrLkiOkY width="600px" caption="Compact board" >}}
  ```go
  {{</* lichessgame game_id=jrLkiOkY width="600px" caption="Compact board" */>}}
  ```

Notes:
- width accepts any valid CSS width value; the board will scale to fill the container width.
- caption text is optional and will be centered beneath the board when provided.

### Downloads

Used to insert the downloads HTML segment into the page. Do not use this on any page but the downloads page.

Example usage

```go
{{</* downloads */>}}
```

### Style

Adds an additional div with customizable class.

Example:
```go
{{</* style "button" */>}}
Hello World
{{</*/ style */>}}
```

{{< style "button" >}}
Hello World
{{</ style >}}

### Obsidian Style Alerts

Supported categories: `note`, `important`, `info`, `caution`, `warning`, `tip`

Examples:

```md
> [!note]
> This is a note alert.
```
> [!note]
> This is a note alert.

```md
> [!info]- Informational Title
> This is some informational text.
```
> [!info]- Informational Title
> This is some informational text.

```md
> [!important]
> Always comment your code
```

> [!important]
> Always comment your code

```md
> [!tip]- Best Starting Move
> 1. a3
```

> [!tip]- Best Starting Move
> 1. a3


```md
> [!warning]- You Read This First
> and this second
```

> [!warning]- You Read This First
> and this second

```md
> [!caution]
> Be careful with this step.
```

> [!caution]
> Be careful with this step.


```md
> [!tip]+ Best Practice
> Use strong passwords.
```

> [!tip]+ Best Practice
> Use strong passwords.

## Deprecated Shortcodes

### Chess Diagram

> [!NOTE]
> Currently does not work

{{< chessdiagram "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1" >}}

### Chess Game

> [!NOTE]
> Currently does not work

### File

Used in 2018 Blog Posts to place images, no longer needed with modern Hugo.

Example:
```go
[]({{</* file "Capture.PNG" */>}})
```
