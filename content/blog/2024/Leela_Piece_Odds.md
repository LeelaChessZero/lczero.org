---
author: Naphthalin
published: "2024-12-02"
title: 'The Leela Piece Odds Challenge: What does it take you to win against Leela?'
---

Finally, [LeelaPieceOdds](https://lichess.org/@/LeelaPieceOdds) is ready, awaiting piece odds challenges from you at Lichess.
<!--more-->


#### Summary of Leela giving piece odds so far

When we initially tested configurations for Leela giving piece odds with regular Leela nets using Contempt, quality of play deteriorated quickly with higher material value and more missing pieces. This was especially true when missing bishops, as the network seemed to hallucinate them back into existence, neglecting the arising pawn weaknesses. Thankfully, some nets performed well enough in selected positions, so we added [LeelaRookOdds](https://lichess.org/@/LeelaRookOdds), [LeelaQueenOdds](https://lichess.org/@/LeelaQueenOdds) and [LeelaQueenForKnight](https://lichess.org/@/LeelaQueenForKnight) to [LeelaKnightOdds](https://lichess.org/@/LeelaKnightOdds), forming the Leela Piece Odds family on Lichess.

Of these four, the two favourites have been the hardest (knight odds, at or above strong GM level) and the most accessible challenge (queen odds, performing at 2000-2700 rating, depending on the time control), with a total game time of 60 days of knight odds and 100 days of queen odds within less than a year. While the other two combined add 40 more days, they aren't doing an ideal job at bridging the big gap between knight odds and queen odds, in particular due to the 400+ Elo gap between queen odds and queen for knight odds and the unfamiliarity with openings being a knight down as a human player well versed in theory. Furthermore, for a significant share of chess enthusiasts, especially at faster time controls even queen odds isn't enough to overcome the raw strength difference to a top engine like Leela.


#### The missing puzzle piece: A dedicated piece odds network

Already when comparing the original configurations for Leela piece odds bots with the knight odds configuration, it was evident that the optimal Contempt settings for higher odds didn't differ much from the knight odds configuration, suggesting that the primary goal is to allow reasonable opening play and avoiding forced piece exchanges, irrespective of the total odds.

Thanks to the new [dedicated odds network]({{< relref "Fine-Tuning_Lc0_Network_for_Odds_Games.md" >}}), we don't have to rely on Contempt anymore in order to capture potential difficulties in a position. This reduces the amount of nodes required to select reasonable moves (allowing more games to be played in parallel on a single RTX 4090), and more importantly also improves the quality of higher odds play, especially with multiple missing pieces. With this, playing almost arbitrary piece odds positions becomes viable, allowing a fine-grained division of the gap between knight odds and queen odds, plus an extension beyond queen odds to include lower rated players as well.

Since the odds network is trained on games where white is the stronger player, in order to play piece+move odds where black is the stronger player starting one or more pieces down, a special Lc0 binary is required, swapping colors when evaluating the NN with the [SwapColors](https://github.com/LeelaChessZero/lc0/pull/2079) option.

#### Selection and difficulty of piece odds starting positions

Historically, in order to establish a more fine-grained sequence of increasing odds, removing pawns and allowing multiple moves in a row were used as well. This however comes at the downside of potentially affecting pawn structures and openings, and potentially accelerates Leela's piece development, which effectively reduces the handicap. We therefore decided to only remove full pieces but no pawns, allowing players to experiment with their preferred setups.

Two more restrictions are made: First, if a rook is removed, it's always the queen side rook in order to maintain king side castling rights. Second, removing one of the two bishops leads to an unrealistic color imbalance regarding the pawn structure far beyond the opening phase. We therefore only include odds positions where both bishops are either present or removed.

To assess the difficulty of the different challenges, the following approximate material values can be used:

Queen: 9.0
Rook: 4.6
Bishop pair: 7.0
Knight: 3.0

where 1 point in material equates to roughly 70 Elo performance. Furthermore, the difference between playing as white and as black is bigger in odds chess than in regular chess, approximately 100 Elo.


#### Challenge LeelaPieceOdds on Lichess

[LeelaPieceOdds](https://lichess.org/@/LeelaPieceOdds) accepts the following starting positions.

If you accidentally select the wrong color (or try to play from an unsupported position), there will be a generic error message that the bot currently isn’t accepting challenges. Similarly, the Lichess rematch feature automatically switches colors, thus rematch offers will always be declined.

##### Piece odds (play as black)
[N (b1)](https://lichess.org/?user=LeelaPieceOdds&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/R1BQKBNR_w_KQkq#friend)
[N (g1)](https://lichess.org/?user=LeelaPieceOdds&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKB1R_w_KQkq#friend)
[R](https://lichess.org/?user=LeelaPieceOdds&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/1NBQKBNR_w_Kkq#friend)
[Qn](https://lichess.org/?user=LeelaPieceOdds&fen=r1bqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNB1KBNR_w_KQkq#friend)
[NN](https://lichess.org/?user=LeelaPieceOdds&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/R1BQKB1R_w_KQkq#friend)
[BB](https://lichess.org/?user=LeelaPieceOdds&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RN1QK1NR_w_KQkq#friend)
[RN](https://lichess.org/?user=LeelaPieceOdds&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/1NBQKB1R_w_Kkq#friend)
[Q](https://lichess.org/?user=LeelaPieceOdds&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNB1KBNR_w_KQkq#friend)
[RR](https://lichess.org/?user=LeelaPieceOdds&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/1NBQKBN1_w_kq#friend)
[BBN (b1)](https://lichess.org/?user=LeelaPieceOdds&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/R2QK1NR_w_KQkq#friend)
[BBN (g1)](https://lichess.org/?user=LeelaPieceOdds&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RN1QK2R_w_KQkq#friend)
[RNN](https://lichess.org/?user=LeelaPieceOdds&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/2BQKB1R_w_Kkq#friend)
[RBB](https://lichess.org/?user=LeelaPieceOdds&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/1N1QK1NR_w_Kkq#friend)
[QN (b1)](https://lichess.org/?user=LeelaPieceOdds&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/R1B1KBNR_w_KQkq#friend)
[QN (g1)](https://lichess.org/?user=LeelaPieceOdds&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNB1KB1R_w_KQkq#friend)
[BBNN](https://lichess.org/?user=LeelaPieceOdds&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/R2QK2R_w_KQkq#friend)
[QR](https://lichess.org/?user=LeelaPieceOdds&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/1NB1KBNR_w_Kkq#friend)
[QNN](https://lichess.org/?user=LeelaPieceOdds&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/R1B1KB1R_w_KQkq#friend)
[QBB](https://lichess.org/?user=LeelaPieceOdds&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RN2K1NR_w_KQkq#friend)
[QRN](https://lichess.org/?user=LeelaPieceOdds&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/1NB1KB1R_w_Kkq#friend)
[QRR](https://lichess.org/?user=LeelaPieceOdds&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/1NB1KBN1_w_kq#friend)

Bonus (won't count towards the ladder):
[BN](https://lichess.org/?user=LeelaPieceOdds&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/R1BQK1NR_w_KQkq#friend)
[BN](https://lichess.org/?user=LeelaPieceOdds&fen=rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RN1QKB1R_w_KQkq#friend)

##### Piece and move odds (play as white)
[n (b8)](https://lichess.org/?user=LeelaPieceOdds&fen=r1bqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQkq#friend)
[n (g8)](https://lichess.org/?user=LeelaPieceOdds&fen=rnbqkb1r/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQkq#friend)
[r](https://lichess.org/?user=LeelaPieceOdds&fen=1nbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQk#friend)
[qN](https://lichess.org/?user=LeelaPieceOdds&fen=rnb1kbnr/pppppppp/8/8/8/8/PPPPPPPP/R1BQKBNR_w_KQkq#friend)
[nn](https://lichess.org/?user=LeelaPieceOdds&fen=r1bqkb1r/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQkq#friend)
[bb](https://lichess.org/?user=LeelaPieceOdds&fen=rn1qk1nr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQkq#friend)
[rn](https://lichess.org/?user=LeelaPieceOdds&fen=1nbqkb1r/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQk#friend)
[q](https://lichess.org/?user=LeelaPieceOdds&fen=rnb1kbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQkq#friend)
[rr](https://lichess.org/?user=LeelaPieceOdds&fen=1nbqkbn1/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQ#friend)
[bbn (b8)](https://lichess.org/?user=LeelaPieceOdds&fen=r2qk1nr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQkq#friend)
[bbn (g8)](https://lichess.org/?user=LeelaPieceOdds&fen=rn1qk2r/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQkq#friend)
[rnn](https://lichess.org/?user=LeelaPieceOdds&fen=2bqkb1r/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQk#friend)
[rbb](https://lichess.org/?user=LeelaPieceOdds&fen=1n1qk1nr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQk#friend)
[qn (b8)](https://lichess.org/?user=LeelaPieceOdds&fen=r1b1kbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQkq#friend)
[qn (g8)](https://lichess.org/?user=LeelaPieceOdds&fen=rnb1kb1r/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQkq#friend)
[bbnn](https://lichess.org/?user=LeelaPieceOdds&fen=r2qk2r/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQkq#friend)
[qr](https://lichess.org/?user=LeelaPieceOdds&fen=1nb1kbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQk#friend)
[qnn](https://lichess.org/?user=LeelaPieceOdds&fen=r1b1kb1r/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQkq#friend)
[qbb](https://lichess.org/?user=LeelaPieceOdds&fen=rn2k1nr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQkq#friend)
[qrn](https://lichess.org/?user=LeelaPieceOdds&fen=1nb1kb1r/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQk#friend)
[qrr](https://lichess.org/?user=LeelaPieceOdds&fen=1nb1kbn1/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQ#friend)

Bonus (won't count towards the ladder):
[bn](https://lichess.org/?user=LeelaPieceOdds&fen=r1bqk1nr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQkq#friend)
[bn](https://lichess.org/?user=LeelaPieceOdds&fen=rn1qkb1r/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR_w_KQkq#friend)

#### Future plans: Leela Piece Odds leaderboards

In order to highlight the community aspect of challenging Leela to piece odds games, we're planning to add a leaderboard for games against [LeelaPieceOdds](https://lichess.org/@/LeelaPieceOdds), tracking and comparing the individual performances at different time controls and odds, and thus hopefully encouraging players to try setups both above and below their rating. In order to get more consistent data, only time controls 1'+1", 3'+1", 5'+3" and 15'+10" will count towards the ladder, and the bot might stop accepting other time controls automatically at some point.

A preliminary version of the leaderboard can already be accessed [here](https://marcogio9.github.io/LeelaQueenOdds-Leaderboard/) for games against [LeelaQueenOdds](https://lichess.org/@/LeelaQueenOdds), showing the estimated individual performance at queen odds, corrected for the time control and color, recalibrated to 5'+3". 


#### Acknowledgements

Making top engines accessible to the chess community in such a unique way is only possible thanks to the support of a multitude of people. This includes the lichess team and patrons for providing the online platform, the lichess devs and contributors for maintaining and developing specialized tools like `lichess-bot` and [direct challenge links]({{< relref "piece_odds_update.md" >}}#quality-of-life-update-direct-challenge-links-on-lichess), and GM Larry Kaufman for his continuous contributions judging and improving the quality and performance of Leela's piece odds play. Credits for training the specialized knight resp. queen odds nets go to marcus98 and Noah.
