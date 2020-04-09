---
title: "Testing guide"
weight: 500
wikiname: "Testing-guide"
# Warning: File is automatically generated from GitHub wiki, do not edit by hand.
---
So you'd like to do some engine testing with Lc0 (testing different nets, checking if your improvement increases elo, etc.). Here's how:

### Setup
1. Install `cutechess-cli`. Repository [here](https://github.com/cutechess/cutechess). `cutechess-cli` is a tool that allows you to play games and tournaments between multiple engines. It is **highly recommended** to build from source in order to enable some openings-specific flags that are not present in the prebuilt binary releases (namely, `policy=round`, which allows multiple engines to play the same openings in one round). For Windows users, it is possible to grab the `cutechess-cli` executable from AppVeyor build artifacts [here](https://ci.appveyor.com/project/artoj/cutechess/builds/28410121/artifacts) (do **not** download from the Releases section on github). For Linux users, it is possible to compile with:
```
cd cutechess/projects
qmake -after "SUBDIRS = lib cli"
make
```

2. Install `ordo`. Repository [here](https://github.com/michiguel/Ordo). `ordo` is a tool for computing elo ratings.

3. Download a decently-sized opening book. If you play engine matches without an opening book, the engines will often play the same games over and over again, which is obviously problematic. If you force unique openings for each pair of games or round, you will get much better results. Chad's opening books [here](https://cdn.discordapp.com/attachments/429710776282906625/536596158018224139/openings.zip) are built from the most popular human openings and are decent for testing.

4. Set up a `cutechess-cli` config file, which should be named `engines.json`. Here is a sample file with configurations for lc0 and stockfish:
```
[
    {
        "command": "lc0",
        "name": "lc0",
        "options": [
            {
                "name": "WeightsFile",
                "value": "/path/to/weights/47e3f899519dc1bc95496a457b77730fce7b0b89b6187af5c01ecbbd02e88398"
            },
            {
                "name": "Threads",
                "value": 2
            }
        ],
        "protocol": "uci",
        "workingDirectory": "/working/directory"
    },
    {
        "command": "stockfish_20011801_x64_modern",
        "name": "sf",
        "options": [
            {
                "name": "Hash",
                "value": 256
            },
            {
                "name": "Threads",
                "value": 12
            }
        ],
        "protocol": "uci",
        "workingDirectory": "/working/directory"
    }
]
```

In the `options` object you specify UCI parameters. Note that many UCI parameters that are floating points will have to be represented as strings, with quotes `""` around them. When you use `cutechess-cli`, you can refer to these engines with `conf=<engine name in engines.json>`.

### Testing
First, play matches with `cutechess-cli`. Here is an example command:

```cutechess-cli -tournament gauntlet -concurrency 1 -pgnout output_pgn_file.pgn -engine conf=sf tc=5.2+0.0832 -engine conf=lc0 tc=4+0.064 -draw movenumber=40 movecount=4 score=8 -resign movecount=4 score=500 -each proto=uci -openings file=blah/openings-6ply-1000.pgn policy=round -repeat -rounds 500 -games 2```

<details>
  <summary>What's actually happening in this command? (this is a spoiler, click to expand) </summary>
  

  Let's walk through this command.

  `-tournament gauntlet`: this option tells us that our tournament style is a gauntlet. This means that all other engines in the list will play the first engine. There are other options, such as round-robin, which have all engines play all other engines.

  `-concurrency 1`: we play one game at a time. It is highly recommended to only ever play one game at a time to prevent engines from hogging each others' resources.

  `-pgnout output_pgn_file.pgn`: the file to store the game results in. The results are concatenated to the end of the file, so you can put multiple tournaments in the same file.

  `-engine conf=sf tc=5.2+0.0832`: add an engine player to the tournament, with config name `sf`, as seen in the `engines.json` file above. `tc` tells us the time control, here stockfish is playing with a Fischer clock at 5.2 seconds main time + 83.2 milliseconds increment.

  `-engine conf=lc0 tc=4+0.064`: see above.

  `-draw movenumber=40 movecount=4 score=8`: draw adjudication. If more than 4 moves pass with both engines having score <= 8 centipawns, and at least 40 moves have been played, call the game off as a draw.

  `-resign movecount=4 score=500`: resign adjudication. If more than 4 consecutive moves pass where both engines believe the score to be more than 500 centipawns, resign the game.

  `-each proto=uci`: both engines use the UCI protocol.

  `-openings file=blah/openings-6ply-1000.pgn policy=round -repeat -rounds 500 -games 2`: details about the games. Here we are looking at openings from the file `openings-6ply-1000.pgn`. `policy=round` tells us that if we have multiple engines, the same opening is used in each round; if we lack this then in the same round different engines will play different openings, which makes calculated ratings less accurate. `-repeat` tells us that between any pair of engines, once an opening is played, the players swap sides, so both players play from both black and white. `-rounds 500 -games 2`: a total of 500 rounds are played, with 2 games per round, for a total of 1000 games. **Games should always be 2.**
  
  
</details>


Ok, so now that you've finally finished playing all those matches, you need to use `ordo` to calculate ratings.

`ordo` also has a lot of options, but these are a bit less involved than with `cutechess-cli`. In general, just copy this command:

`ordo -Q -D -a 0 -A "sf" -W -n8 -s1000 -U "0,1,2,3,4,5,6,7,8,9,10" -j h2h.txt -C matrix.csv -p games.pgn`

`-a 0 -A "sf"` anchors all ratings relative to the player called "sf" at 0 elo; you can change the name and anchored rating here. This should output something similar to this (3 engine example):

```
   # PLAYER                 :  RATING  ERROR  POINTS  PLAYED   (%)  CFS(%)    W     D    L  D(%)
   1 sf                     :     0.0   ----  2073.5    4000    52      98  800  2547  653    64
   2 lc0_policytempdecay    :    -9.6    9.0   973.0    2000    49      85  338  1270  392    64
   3 lc0                    :   -16.6    9.5   953.5    2000    48     ---  315  1277  408    64
```

You're done! Those are the results you're looking for. 