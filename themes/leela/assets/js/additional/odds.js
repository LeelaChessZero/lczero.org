document.addEventListener("DOMContentLoaded", function() {
    
    // --- FRC Helper Functions ---
    function isValidID(id) {
        return Number.isInteger(id) && id >= 0 && id <= 959;
    }

    function decode(id) {
        if (!isValidID(id)) return false;
        const arrangement = [0, 1, 2, 3, 4, 5, 6, 7];

        const place = (piece, pos = 0) => {
            const square = arrangement.filter(Number.isInteger)[pos];
            arrangement[square] = piece;
        };

        const divide = (num, by) => [Math.floor(num / by), Math.floor(num % by)];

        const [q2, b1] = divide(id, 4);
        arrangement[b1 * 2 + 1] = 'B';

        const [q3, b2] = divide(q2, 4);
        arrangement[b2 * 2] = 'B';

        let [q4, q] = divide(q3, 6);
        place('Q', q);
        place('N', q4 > 3 ? ((q4 -= 3) > 3 ? ((q4 -= 2) > 3 ? (q4 = 3) : 2) : 1) : 0);
        place('N', q4);

        place('R');
        place('K');
        place('R');

        return arrangement;
    }

    // --- DOM Elements ---

    const generateBtn = document.getElementById('generateBtn');
    const resultCard = document.getElementById('resultCard');
    const errorMessage = document.getElementById('errorMessage');
    const frcToggle = document.getElementById('frc-toggle');
    const frcInputContainer = document.getElementById('frc-input-container');
    const frcIdInput = document.getElementById('frc-id');
    const copyBtn = document.getElementById('copyBtn');
    const openLink = document.getElementById('openLink');
    const botValue = document.getElementById('botValue');
    const fenValue = document.getElementById('fenValue');
    const linkValue = document.getElementById('linkValue');
    const frcIdResultContainer = document.getElementById('frcIdResultContainer');
    const frcIdValue = document.getElementById('frcIdValue');

    // Select labels based on their 'for' attribute since they don't have IDs in the HTML
    const knight_q_label = document.querySelector('label[for="knight_q"]');
    const knight_k_label = document.querySelector('label[for="knight_k"]');
    const bishop_q_label = document.querySelector('label[for="bishop_q"]');
    const bishop_k_label = document.querySelector('label[for="bishop_k"]');
    const rook_q_label   = document.querySelector('label[for="rook_q"]');
    const rook_k_label   = document.querySelector('label[for="rook_k"]');

    let url = '#';

    // Event Listeners

    function updateFRCToggle() {
        const isFRC = frcToggle.checked;
        frcInputContainer.classList.toggle('hidden', !isFRC);
        
        if (!isFRC) {
            // Standard Chess Labels
            // knight_q_label.textContent = 'Queen-side Knight';
            // knight_k_label.textContent = 'King-side Knight';
            bishop_q_label.textContent = 'Queen-side Bishop'; 
            bishop_k_label.textContent = 'King-side Bishop';
            // rook_q_label.textContent   = 'Queen-side Rook';
            // rook_k_label.textContent   = 'King-side Rook';
        } else {
            // FRC Labels (Spatial or Color based)
            // knight_q_label.textContent = 'Left Knight';
            // knight_k_label.textContent = 'Right Knight';
            // Map Q-side checkbox to Dark, K-side to Light for consistency
            bishop_q_label.textContent = 'Dark-Squared Bishop';
            bishop_k_label.textContent = 'Light-Squared Bishop';
        }
    }

    frcToggle.addEventListener('change', updateFRCToggle);

    // Initialize visibility based on default state
    updateFRCToggle();

    generateBtn.addEventListener('click', generateLink);
    copyBtn.addEventListener('click', copyLink);

    function generateLink() {
        const isFRC = frcToggle.checked;
        let frcID;

        frcIdResultContainer.classList.add('hidden');
        
        errorMessage.parentNode.classList.add('hidden');
        resultCard.classList.remove('active');

        if (isFRC) {
            const isFrcIdUserSpecified = frcIdInput.value !== '';
            
            if (isFrcIdUserSpecified) {
                frcID = parseInt(frcIdInput.value, 10);
                
                if (frcID === 518) { 
                    errorMessage.textContent = 'Standard Chess (ID 518) is not allowed in FRC mode.';
                    errorMessage.parentNode.classList.remove('hidden');
                    return;
                }
            } else {
                // User did not specify an ID, so randomize it
                // Keep generating until we get a number that isn't 518 (Standard Position)
                do {
                    frcID = Math.floor(Math.random() * 960);
                } while (frcID === 518);
            }
        }


        if (isFRC && !isValidID(frcID)) {
            console.log('Invalid FRC ID detected:', frcID);
            errorMessage.textContent = 'Invalid FRC ID. Please enter a number between 0 and 959.';
            errorMessage.parentNode.classList.remove('hidden');
            return;
        }

        const playerColor = document.querySelector('input[name="color"]:checked').value;
        const initialArrangement = isFRC ? decode(frcID) : ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'];
        const files = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        

        // Map checkboxes to their piece definitions in the initial arrangement
        const pieceDefinitions = definePieces(initialArrangement, playerColor, isFRC);

        let workingArrangement = [...initialArrangement];
        let removedPieces = { Q: 0, N: 0, R: 0, B: 0 };
        let removedRookFiles = [];

        let pieceCheckboxes = ['queen', 'knight_q', 'knight_k', 'bishop_q', 'bishop_k', 'rook_q', 'rook_k'];

        for (const id of pieceCheckboxes) {
            if (document.getElementById(id).checked) {
                const def = pieceDefinitions[id];
                if (def && workingArrangement[def.index] === def.piece) {
                    workingArrangement[def.index] = null;
                    removedPieces[def.piece]++;
                    if (def.piece === 'R') {
                        removedRookFiles.push(files[def.index]);
                    }
                }
            }
        }

        if (Object.values(removedPieces).reduce((a, b) => a + b, 0) === 0) {
            console.log('No pieces selected for removal.');
            errorMessage.textContent = 'Please select at least one piece to remove.';
            errorMessage.parentNode.classList.remove('hidden');
            return;
        }

        if (!isValidOdds(removedPieces, isFRC)) {
            const { Q, N, R, B } = removedPieces;
            let guidance = "This combination of pieces is not supported.";
            if (Q === 0 && N === 1 && R === 0 && B === 1) {
                guidance = "For Bishop+Knight odds, select one bishop and one knight from opposite sides of the board";
            }
            if (Q === 0 && N === 1 && R === 1 && B === 0) {
                guidance = "For Rook+Knight odds, select queen-side rook and king-side knight";
            }
            if (Q === 1 && N === 0 && R === 1 && B === 0) {
                guidance = "For Queen+Rook odds, select queen-side rook only";
            }
            if (Q === 0 && N === 0 && R === 1 && B === 1) {
                guidance = "Rook+Bishop odds is not supported";
            }
            if (Q === 1 && N === 2 && R === 2 && B === 2) {
                guidance = "At least give the bot a fighting chance!";
            }
            console.log('Invalid piece selection:', removedPieces);
            errorMessage.textContent = `Invalid Piece Selection: ${guidance}`;
            errorMessage.parentNode.classList.remove('hidden');
            return;
        }

        // Determine bot user
        const botUser = getBotUser(removedPieces, isFRC);

        // Build FEN
        const fenRank = arrangementToFenRank(workingArrangement);
        const playerRank = arrangementToFenRank(initialArrangement);
        const castling = getCastlingRights(initialArrangement, removedRookFiles, playerColor, isFRC);

        let fen;
        if (playerColor === 'black') { // White is handicapped
            fen = `${playerRank.toLowerCase()}/pppppppp/8/8/8/8/PPPPPPPP/${fenRank.toUpperCase()} w ${castling}`;
        } else { // Black is handicapped
            fen = `${fenRank.toLowerCase()}/pppppppp/8/8/8/8/PPPPPPPP/${playerRank.toUpperCase()} w ${castling}`;
        }

        const encodedFen = fen.replace(/ /g, '_');
        url = `https://lichess.org/?user=${botUser}&fen=${encodedFen}#friend`;


        if (isFRC) {
            frcIdValue.textContent = frcID;
            frcIdResultContainer.classList.remove('hidden');
        }

        botValue.textContent = botUser;
        fenValue.textContent = fen;
        openLink.setAttribute('href', url);

        // Show result card
        resultCard.classList.add('active');
    }


    function definePieces(arrangement, playerColor, isFRC) {
        const kingIndex = arrangement.indexOf('K');
        const rookIndices = [arrangement.indexOf('R'), arrangement.lastIndexOf('R')];
        const knightIndices = [arrangement.indexOf('N'), arrangement.lastIndexOf('N')];
        const bishopIndices = [arrangement.indexOf('B'), arrangement.lastIndexOf('B')];
        if(!isFRC){
        return {
            'queen': { piece: 'Q', index: arrangement.indexOf('Q') },
            'rook_q': { piece: 'R', index: rookIndices.find(i => i < kingIndex) },
            'rook_k': { piece: 'R', index: rookIndices.find(i => i > kingIndex) },
            'knight_q': { piece: 'N', index: Math.min(...knightIndices) },
            'knight_k': { piece: 'N', index: Math.max(...knightIndices) },
            'bishop_q': { piece: 'B', index: Math.min(...bishopIndices) },
            'bishop_k': { piece: 'B', index: Math.max(...bishopIndices) }, 
        };
        } else {

            const darkBishop = bishopIndices.find(i => i % 2 === (playerColor === 'white' ? 1 : 0));
            const lightBishop = bishopIndices.find(i => i % 2 === (playerColor === 'white' ? 0 : 1));
            return {
                'queen': { piece: 'Q', index: arrangement.indexOf('Q') },
                'rook_q': { piece: 'R', index: rookIndices.find(i => i < kingIndex) },
                'rook_k': { piece: 'R', index: rookIndices.find(i => i > kingIndex) },
                'knight_q': { piece: 'N', index: Math.min(...knightIndices) },
                'knight_k': { piece: 'N', index: Math.max(...knightIndices) },
                'bishop_q': { piece: 'B', index: darkBishop }, // Dark-squared bishop
                'bishop_k': { piece: 'B', index: lightBishop }, // Light-squared bishop
            };
        }
    }

    function isValidOdds(removedPieces, isFRC) {

        const { Q, N, R, B } = removedPieces;

        // Qn(queen for knight, doesn't have to be supported yet)
        // Define valid odds combinations
        const validOdds = [
            { Q: 0, N: 1, R: 0, B: 0 }, // N
            { Q: 0, N: 0, R: 0, B: 1 }, // B
            { Q: 0, N: 0, R: 1, B: 0 }, // R
            { Q: 1, N: 0, R: 0, B: 0 }, // Q
            { Q: 0, N: 2, R: 0, B: 0 }, // NN
            { Q: 0, N: 0, R: 0, B: 2 }, // BB
            { Q: 0, N: 1, R: 1, B: 0 }, // RN
            { Q: 1, N: 1, R: 0, B: 0 }, // QN
            { Q: 1, N: 0, R: 1, B: 0 }, // QR
            { Q: 0, N: 1, R: 0, B: 1 }, // BN
            { Q: 0, N: 0, R: 2, B: 0 }, // RR
            { Q: 0, N: 2, R: 1, B: 0 }, // RNN
            { Q: 0, N: 0, R: 1, B: 2 }, // RBB
            { Q: 1, N: 1, R: 1, B: 0 }, // QRN
            { Q: 1, N: 0, R: 2, B: 0 }, // QRR
            { Q: 0, N: 2, R: 0, B: 2 }, // BBNN
            { Q: 0, N: 1, R: 0, B: 2 }, // BBN
            { Q: 1, N: 2, R: 0, B: 0 }, // QNN
            { Q: 1, N: 0, R: 0, B: 2 }  // QBB
        ];

        if (isFRC) { // Allow all 1-3 piece odds in FRC 
            if (Q + N + R + B >= 1 && Q + N + R + B <= 3) {
                return true;
            }
        }

        // Check if current removed pieces match any valid odds
        const isValidCombination = validOdds.some(odds =>
            odds.Q === (Q || 0) &&
            odds.N === (N || 0) &&
            odds.R === (R || 0) &&
            odds.B === (B || 0));

        if (!isValidCombination) {
            return false;
        }

        if (isFRC) {
            return true; // No further restrictions for FRC
        }

        // Additional restriction for BN: bishop and knight cannot be from same side
        if (Q === 0 && N === 1 && R === 0 && B === 1) {
            const knightQSelected = document.getElementById('knight_q').checked;
            const knightKSelected = document.getElementById('knight_k').checked;
            const bishopDSelected = document.getElementById('bishop_q').checked;
            const bishopLSelected = document.getElementById('bishop_k').checked;

            // Check if both pieces are from queen-side or both from king-side
            const bothQueenSide = knightQSelected && bishopDSelected;
            const bothKingSide = knightKSelected && bishopLSelected;

            // BN is only valid if pieces are from opposite sides
            return !(bothQueenSide || bothKingSide);
        }

        // Additional restriction for RN: rook must be queen-side, knight must be king-side
        if (Q === 0 && N === 1 && R === 1 && B === 0) {
            const rookQSelected = document.getElementById('rook_q').checked;
            const knightKSelected = document.getElementById('knight_k').checked;

            // RN is only valid if rook is queen-side and knight is king-side
            return rookQSelected && knightKSelected;
        }

        // Additional restriction for RNN: rook must be queen-side, knight must be king-side
        if (Q === 0 && N === 2 && R === 1 && B === 0) {
            const rookQSelected = document.getElementById('rook_q').checked;

            // RNN is only valid if rook is queen-side and both knights are king-side
            return rookQSelected;
        }

        // Additional restriction for RBB: rook must be queen-side
        if (Q === 0 && N === 0 && R === 1 && B === 2) {
            const rookQSelected = document.getElementById('rook_q').checked;

            // RBB is only valid if rook is queen-side
            return rookQSelected;
        }

        if (Q === 1 && N === 0 && R === 1 && B === 0) {
            const rookQSelected = document.getElementById('rook_q').checked;

            // QR is only valid if rook is queen-side
            return rookQSelected;
        }

        // QRN: queen-side rook and king-side knight
        if (Q === 1 && N === 1 && R === 1 && B === 0) {
            const rookQSelected = document.getElementById('rook_q').checked;
            const knightKSelected = document.getElementById('knight_k').checked;

            return rookQSelected && knightKSelected;
        }

        return true;
    }

    function getBotUser(removed, isFRC) {
        if (isFRC) {
            return 'LeelaPieceOddsFRC';
        }
        const totalRemoved = Object.values(removed).reduce((a, b) => a + b, 0);
        if (totalRemoved === 1) {
            if (removed.Q === 1) return 'LeelaQueenOdds';
            if (removed.N === 1) return 'LeelaKnightOdds';
            // LeelaRookOdds is only for standard chess, missing a- or h-rook
            if (removed.R === 1 && document.getElementById('rook_q').checked) return 'LeelaRookOdds';
        }
        return 'LeelaPieceOdds';
    }

    function arrangementToFenRank(arr) {
        let fen = '';
        let emptyCount = 0;
        for (const piece of arr) {
            if (piece === null) {
                emptyCount++;
            } else {
                if (emptyCount > 0) {
                    fen += emptyCount;
                    emptyCount = 0;
                }
                fen += piece;
            }
        }
        if (emptyCount > 0) fen += emptyCount;
        return fen;
    }

    function getCastlingRights(initialArrangement, removedRookFiles, playerColor, isFRC) {
        if (isFRC) {
            const files = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
            let whiteRights = '';
            let blackRights = '';

            initialArrangement.forEach((piece, index) => {
                if (piece === 'R') {
                    const file = files[index];
                    if (!removedRookFiles.includes(file)) {
                        whiteRights += file.toUpperCase();
                    }
                    blackRights += file.toLowerCase();
                }
            });

            let finalRights;
            if (playerColor === 'black') { // White is handicapped
                finalRights = whiteRights + blackRights;
            } else { // Black is handicapped
                finalRights = blackRights.toUpperCase() + whiteRights.toLowerCase();
            }

            return finalRights.split('').sort().join('') || '-';
        } else {
            // Standard chess uses QKqk notation
            let oddsRights = '';

            // Check king-side rook (file H)
            if (!removedRookFiles.includes('H')) {
                oddsRights += 'K';
            }
            // Check queen-side rook (file A)
            if (!removedRookFiles.includes('A')) {
                oddsRights += 'Q';

            }


            let finalRights;
            if (playerColor === 'black') { // White is handicapped
                finalRights = oddsRights + "kq";
            } else { // Black is handicapped
                finalRights = "KQ" + oddsRights.toLowerCase();
            }

            return finalRights || '-';
        }
    }
    function copyLink() {
        navigator.clipboard.writeText(url).then(() => {
            // Visual feedback for successful copy
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = `<i class="material-symbols--check"></i>Copied!`;
            copyBtn.style.backgroundColor = 'var(--color-success)';

            setTimeout(() => {
                copyBtn.innerHTML = originalText;
                copyBtn.style.backgroundColor = '';
            }, 2000);
        });
    }

    const colorRadios = document.querySelectorAll('input[name="color"]');

    colorRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            // Remove 'selected' class from all radio cards
            document.querySelectorAll('.radio-card').forEach(card => {
                card.classList.remove('selected');
            });

            // Add 'selected' class to the parent card of the checked radio
            if (this.checked) {
                this.closest('.radio-card').classList.add('selected');
            }
        });
    });
    
    // Initialize with hidden result card
    resultCard.classList.remove('active');
    errorMessage.parentNode.classList.add('hidden');
});
