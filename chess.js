// Chess pieces Unicode symbols
const pieces = {
    white: {
        king: '♔',
        queen: '♕',
        rook: '♖',
        bishop: '♗',
        knight: '♘',
        pawn: '♙'
    },
    black: {
        king: '♚',
        queen: '♛',
        rook: '♜',
        bishop: '♝',
        knight: '♞',
        pawn: '♟'
    }
};

// Game state
let board = [];
let currentPlayer = 'white';
let selectedSquare = null;
let gameOver = false;
let capturedPieces = { white: [], black: [] };

// --- Engine (Stockfish) state ---
let engine = null;
let engineReady = false;
let engineThinking = false;
const ENGINE_PATH = 'engine/stockfish.js'; // cambia si tu archivo se llama distinto
const ENGINE_DEPTH = 12;

// --- En Passant state ---
let enPassantTarget = null; // { row, col } casilla destino (ej: g6)
let lastMove = null; // { fromRow, fromCol, toRow, toCol, piece, wasDoublePawnPush }


// Initialize the game
function initGame() {
    board = createInitialBoard();
    currentPlayer = 'white';
    selectedSquare = null;
    gameOver = false;
    capturedPieces = { white: [], black: [] };

    enPassantTarget = null;
lastMove = null;
initEngineOnce();

    
    renderBoard();
    updateTurnIndicator();
    updateCapturedPieces();
    document.getElementById('status-message').textContent = '';
}

// Create initial board setup
function createInitialBoard() {
    const board = Array(8).fill(null).map(() => Array(8).fill(null));
    
    // Place pawns
    for (let i = 0; i < 8; i++) {
        board[1][i] = { type: 'pawn', color: 'black' };
        board[6][i] = { type: 'pawn', color: 'white' };
    }
    
    // Place other pieces
    const backRow = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];
    for (let i = 0; i < 8; i++) {
        board[0][i] = { type: backRow[i], color: 'black' };
        board[7][i] = { type: backRow[i], color: 'white' };
    }
    
    return board;
}

// Render the board
function renderBoard() {
    const chessboard = document.getElementById('chessboard');
    chessboard.innerHTML = '';
    
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.className = 'square';
            square.className += (row + col) % 2 === 0 ? ' light' : ' dark';
            square.dataset.row = row;
            square.dataset.col = col;
            
            const piece = board[row][col];
            if (piece) {
                square.textContent = pieces[piece.color][piece.type];
                square.dataset.color = piece.color;
                square.dataset.type = piece.type;
            }
            
            square.addEventListener('click', () => handleSquareClick(row, col));
            chessboard.appendChild(square);
        }
    }
}

// Handle square click
function handleSquareClick(row, col) {
    if (gameOver) return;
    
    const piece = board[row][col];
    
    // If a square is already selected
    if (selectedSquare) {
        const validMoves = getValidMoves(selectedSquare.row, selectedSquare.col);
        const isValidMove = validMoves.some(move => move.row === row && move.col === col);
        
        if (isValidMove) {
            movePiece(selectedSquare.row, selectedSquare.col, row, col);
            selectedSquare = null;
            clearHighlights();
            
            if (isCheckmate(currentPlayer)) {
                gameOver = true;
                document.getElementById('status-message').textContent = 
                    `Checkmate! ${currentPlayer === 'white' ? 'Black' : 'White'} wins!`;
            } else if (isCheck(currentPlayer)) {
                document.getElementById('status-message').textContent = 
                    `${currentPlayer.charAt(0).toUpperCase() + currentPlayer.slice(1)} is in check!`;
            } else {
                document.getElementById('status-message').textContent = '';
            }
            
            currentPlayer = currentPlayer === 'white' ? 'black' : 'white';
            updateTurnIndicator();
            // If it's now black's turn, ask Stockfish to play
if (!gameOver && currentPlayer === 'black') {
    requestEngineMove();
}

        } else {
            // Select a new piece if it's the current player's
            if (piece && piece.color === currentPlayer) {
                selectedSquare = { row, col };
                highlightSquare(row, col);
                highlightValidMoves(row, col);
            } else {
                selectedSquare = null;
                clearHighlights();
            }
        }
    } else {
        // Select a piece if it's the current player's
        if (piece && piece.color === currentPlayer) {
            selectedSquare = { row, col };
            highlightSquare(row, col);
            highlightValidMoves(row, col);
        }
    }
}

// Move piece
function movePiece(fromRow, fromCol, toRow, toCol) {
    const capturedPiece = board[toRow][toCol];
    if (capturedPiece) {
        capturedPieces[capturedPiece.color].push(capturedPiece.type);
        updateCapturedPieces();
    }
    
    board[toRow][toCol] = board[fromRow][fromCol];
    board[fromRow][fromCol] = null;
    
    renderBoard();
}

// Get valid moves for a piece
function getValidMoves(row, col) {
    const piece = board[row][col];
    if (!piece) return [];
    
    let moves = [];
    
    switch (piece.type) {
        case 'pawn':
            moves = getPawnMoves(row, col, piece.color);
            break;
        case 'rook':
            moves = getRookMoves(row, col, piece.color);
            break;
        case 'knight':
            moves = getKnightMoves(row, col, piece.color);
            break;
        case 'bishop':
            moves = getBishopMoves(row, col, piece.color);
            break;
        case 'queen':
            moves = getQueenMoves(row, col, piece.color);
            break;
        case 'king':
            moves = getKingMoves(row, col, piece.color);
            break;
    }
    
    // Filter out moves that would put own king in check
    return moves.filter(move => !wouldBeInCheck(row, col, move.row, move.col, piece.color));
}

// Pawn moves
function getPawnMoves(row, col, color) {
    const moves = [];
    const direction = color === 'white' ? -1 : 1;
    const startRow = color === 'white' ? 6 : 1;
    
    // Forward move
    if (isValid(row + direction, col) && !board[row + direction][col]) {
        moves.push({ row: row + direction, col });
        
        // Double move from start
        if (row === startRow && !board[row + 2 * direction][col]) {
            moves.push({ row: row + 2 * direction, col });
        }
    }
    
    // Captures
    for (let dc of [-1, 1]) {
        const newRow = row + direction;
        const newCol = col + dc;
        if (isValid(newRow, newCol) && board[newRow][newCol] && 
            board[newRow][newCol].color !== color) {
            moves.push({ row: newRow, col: newCol });
        }
    }

        // --- En Passant ---
    // If opponent last move was a double pawn push and ended adjacent to this pawn,
    // this pawn may capture to the enPassantTarget square on the very next move.
    if (enPassantTarget && lastMove && lastMove.wasDoublePawnPush) {
        // Our pawn must be on the same row as the opponent pawn after it moved,
        // and adjacent by file.
        // Opponent pawn final square:
        const oppToRow = lastMove.toRow;
        const oppToCol = lastMove.toCol;

        if (oppToRow === row && Math.abs(oppToCol - col) === 1) {
            // Our capture destination must be one step diagonally forward into enPassantTarget
            for (let dc of [-1, 1]) {
                const newRow = row + direction;
                const newCol = col + dc;
                if (newRow === enPassantTarget.row && newCol === enPassantTarget.col) {
                    moves.push({ row: newRow, col: newCol });
                }
            }
        }
    }

    
    return moves;
}

// Rook moves
function getRookMoves(row, col, color) {
    return getSlidingMoves(row, col, color, [
        [-1, 0], [1, 0], [0, -1], [0, 1]
    ]);
}

// Bishop moves
function getBishopMoves(row, col, color) {
    return getSlidingMoves(row, col, color, [
        [-1, -1], [-1, 1], [1, -1], [1, 1]
    ]);
}

// Queen moves
function getQueenMoves(row, col, color) {
    return getSlidingMoves(row, col, color, [
        [-1, 0], [1, 0], [0, -1], [0, 1],
        [-1, -1], [-1, 1], [1, -1], [1, 1]
    ]);
}

// Sliding moves (for rook, bishop, queen)
function getSlidingMoves(row, col, color, directions) {
    const moves = [];
    
    for (let [dr, dc] of directions) {
        let newRow = row + dr;
        let newCol = col + dc;
        
        while (isValid(newRow, newCol)) {
            if (board[newRow][newCol]) {
                if (board[newRow][newCol].color !== color) {
                    moves.push({ row: newRow, col: newCol });
                }
                break;
            }
            moves.push({ row: newRow, col: newCol });
            newRow += dr;
            newCol += dc;
        }
    }
    
    return moves;
}

// Knight moves
function getKnightMoves(row, col, color) {
    const moves = [];
    const offsets = [
        [-2, -1], [-2, 1], [-1, -2], [-1, 2],
        [1, -2], [1, 2], [2, -1], [2, 1]
    ];
    
    for (let [dr, dc] of offsets) {
        const newRow = row + dr;
        const newCol = col + dc;
        
        if (isValid(newRow, newCol) && 
            (!board[newRow][newCol] || board[newRow][newCol].color !== color)) {
            moves.push({ row: newRow, col: newCol });
        }
    }
    
    return moves;
}

// King moves
function getKingMoves(row, col, color) {
    const moves = [];
    const offsets = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];
    
    for (let [dr, dc] of offsets) {
        const newRow = row + dr;
        const newCol = col + dc;
        
        if (isValid(newRow, newCol) && 
            (!board[newRow][newCol] || board[newRow][newCol].color !== color)) {
            moves.push({ row: newRow, col: newCol });
        }
    }
    
    return moves;
}

// Check if position is valid
function isValid(row, col) {
    return row >= 0 && row < 8 && col >= 0 && col < 8;
}

// Find king position
function findKing(color) {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const piece = board[row][col];
            if (piece && piece.type === 'king' && piece.color === color) {
                return { row, col };
            }
        }
    }
    return null;
}

// Check if a position is under attack
function isUnderAttack(row, col, byColor) {
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const piece = board[r][c];
            if (piece && piece.color === byColor) {
                const moves = getBasicMoves(r, c, piece);
                if (moves.some(move => move.row === row && move.col === col)) {
                    return true;
                }
            }
        }
    }
    return false;
}

// Get basic moves without check validation
function getBasicMoves(row, col, piece) {
    switch (piece.type) {
        case 'pawn': return getPawnMoves(row, col, piece.color);
        case 'rook': return getRookMoves(row, col, piece.color);
        case 'knight': return getKnightMoves(row, col, piece.color);
        case 'bishop': return getBishopMoves(row, col, piece.color);
        case 'queen': return getQueenMoves(row, col, piece.color);
        case 'king': return getKingMoves(row, col, piece.color);
        default: return [];
    }
}

// Check if move would result in check
function wouldBeInCheck(fromRow, fromCol, toRow, toCol, color) {
    // Make temporary move
    const capturedPiece = board[toRow][toCol];
    const movingPiece = board[fromRow][fromCol];
    board[toRow][toCol] = movingPiece;
    board[fromRow][fromCol] = null;
    
    // Find king and check if under attack
    const kingPos = findKing(color);
    const inCheck = kingPos ? isUnderAttack(kingPos.row, kingPos.col, 
        color === 'white' ? 'black' : 'white') : false;
    
    // Undo move
    board[fromRow][fromCol] = movingPiece;
    board[toRow][toCol] = capturedPiece;
    
    return inCheck;
}

// Check if player is in check
function isCheck(color) {
    const kingPos = findKing(color);
    if (!kingPos) return false;
    return isUnderAttack(kingPos.row, kingPos.col, color === 'white' ? 'black' : 'white');
}

// Check if player is in checkmate
function isCheckmate(color) {
    if (!isCheck(color)) return false;
    
    // Check if any piece can make a move that gets out of check
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const piece = board[row][col];
            if (piece && piece.color === color) {
                const moves = getValidMoves(row, col);
                if (moves.length > 0) {
                    return false;
                }
            }
        }
    }
    
    return true;
}

// Highlight selected square
function highlightSquare(row, col) {
    clearHighlights();
    const squares = document.querySelectorAll('.square');
    const index = row * 8 + col;
    squares[index].classList.add('selected');
}

// Highlight valid moves
function highlightValidMoves(row, col) {
    const validMoves = getValidMoves(row, col);
    const squares = document.querySelectorAll('.square');
    
    validMoves.forEach(move => {
        const index = move.row * 8 + move.col;
        squares[index].classList.add('valid-move');
        if (board[move.row][move.col]) {
            squares[index].classList.add('has-piece');
        }
    });
}

// Clear highlights
function clearHighlights() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.classList.remove('selected', 'valid-move', 'has-piece');
    });
}

// Update turn indicator
function updateTurnIndicator() {
    const turnElement = document.getElementById('current-turn');
    turnElement.textContent = `${currentPlayer.charAt(0).toUpperCase() + 
        currentPlayer.slice(1)}'s Turn`;
    turnElement.style.color = currentPlayer === 'white' ? '#667eea' : '#333';
}

// Update captured pieces display
function updateCapturedPieces() {
    const capturedWhite = document.getElementById('captured-white');
    const capturedBlack = document.getElementById('captured-black');
    
    capturedWhite.innerHTML = capturedPieces.white
        .map(type => pieces.white[type]).join(' ');
    capturedBlack.innerHTML = capturedPieces.black
        .map(type => pieces.black[type]).join(' ');
}

// ========== STOCKFISH ENGINE INTEGRATION ==========

function initEngineOnce() {
    if (engine) return;

    engine = new Worker(ENGINE_PATH);

    engine.onmessage = (e) => {
        const line = (e.data || '').toString();

        if (line.includes('uciok')) {
            engine.postMessage('isready');
        }
        if (line.includes('readyok')) {
            engineReady = true;
        }

        if (line.startsWith('bestmove')) {
            engineThinking = false;
            const parts = line.split(' ');
            const move = parts[1]; // e2e4, g7g5, e7e8q, etc.
            if (move && move !== '(none)') {
                playEngineMoveUCI(move);
            }
        }
    };

    engine.postMessage('uci');
}

function requestEngineMove() {
    if (!engine || !engineReady) return;
    engineThinking = true;

    const fen = boardToFEN();
    engine.postMessage(`position fen ${fen}`);
    engine.postMessage(`go depth ${ENGINE_DEPTH}`);
}

function playEngineMoveUCI(uci) {
    // Engine is black in our setup
    if (gameOver) return;
    if (currentPlayer !== 'black') return;

    const from = algToCoords(uci.slice(0, 2));
    const to = algToCoords(uci.slice(2, 4));

    // Validate move exists in our rules (important)
    const validMoves = getValidMoves(from.row, from.col);
    const ok = validMoves.some(m => m.row === to.row && m.col === to.col);
    if (!ok) {
        // If mismatch, just stop thinking so player isn't stuck
        engineThinking = false;
        return;
    }

    movePiece(from.row, from.col, to.row, to.col);
    clearHighlights();

    // Keep your original messaging logic style:
    if (isCheckmate(currentPlayer)) {
        gameOver = true;
        document.getElementById('status-message').textContent =
            `Checkmate! ${currentPlayer === 'white' ? 'Black' : 'White'} wins!`;
    } else if (isCheck(currentPlayer)) {
        document.getElementById('status-message').textContent =
            `${currentPlayer.charAt(0).toUpperCase() + currentPlayer.slice(1)} is in check!`;
    } else {
        document.getElementById('status-message').textContent = '';
    }

    currentPlayer = 'white';
    updateTurnIndicator();
}

// ---------- FEN helpers ----------
function boardToFEN() {
    const map = {
        white: { king: 'K', queen: 'Q', rook: 'R', bishop: 'B', knight: 'N', pawn: 'P' },
        black: { king: 'k', queen: 'q', rook: 'r', bishop: 'b', knight: 'n', pawn: 'p' }
    };

    let fen = '';
    for (let row = 0; row < 8; row++) {
        let empty = 0;
        for (let col = 0; col < 8; col++) {
            const p = board[row][col];
            if (!p) empty++;
            else {
                if (empty) { fen += empty; empty = 0; }
                fen += map[p.color][p.type];
            }
        }
        if (empty) fen += empty;
        if (row !== 7) fen += '/';
    }

    const side = currentPlayer === 'white' ? 'w' : 'b';
    const castling = '-'; // (tu juego aún no implementa castling)
    const ep = enPassantTarget ? coordsToAlg(enPassantTarget.row, enPassantTarget.col) : '-';
    const halfmove = '0';
    const fullmove = '1';

    return `${fen} ${side} ${castling} ${ep} ${halfmove} ${fullmove}`;
}

function coordsToAlg(row, col) {
    const file = String.fromCharCode(97 + col); // a-h
    const rank = (8 - row).toString();          // 8-1
    return file + rank;
}

function algToCoords(sq) {
    const col = sq.charCodeAt(0) - 97;   // a-h -> 0-7
    const rank = parseInt(sq[1], 10);    // 1-8
    const row = 8 - rank;
    return { row, col };
}


// Event listeners
document.getElementById('reset-btn').addEventListener('click', initGame);

// Initialize game on page load
initGame();
