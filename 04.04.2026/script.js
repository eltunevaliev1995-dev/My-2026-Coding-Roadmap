// ===================================
//  DƏYIŞƏNLƏR (Variables)
// ===================================

// Oyun vəziyyəti
let board = ['', '', '', '', '', '', '', '', '']; // 9 xana
let currentPlayer = 'X'; // Hazırkı oyunçu (X başlayır)
let gameActive = false; // Oyun aktivdir mi?
let gameMode = ''; // 'friend' və ya 'computer'

// Xallar
let scores = {
    X: 0,
    O: 0,
    draw: 0
};

// Qalib kombinasiyalar (index-lər)
const winningConditions = [
    [0, 1, 2], // Üst sıra
    [3, 4, 5], // Orta sıra
    [6, 7, 8], // Alt sıra
    [0, 3, 6], // Sol sütun
    [1, 4, 7], // Orta sütun
    [2, 5, 8], // Sağ sütun
    [0, 4, 8], // Diaqonal (sol üst - sağ alt)
    [2, 4, 6]  // Diaqonal (sağ üst - sol alt)
];

// ===================================
//  OYUNU BAŞLATMAQ
// ===================================

function startGame(mode) {
    gameMode = mode;
    gameActive = true;
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    
    // UI dəyiş
    document.getElementById('modeSelection').style.display = 'none';
    document.getElementById('gameSection').style.display = 'block';
    document.getElementById('scoreBoard').style.display = 'flex';
    document.getElementById('menuBtn').style.display = 'inline-block';
    
    // Kompüter rejimində etiketi dəyiş
    if (mode === 'computer') {
        document.getElementById('labelO').textContent = '🤖 Kompüter';
    } else {
        document.getElementById('labelO').textContent = '⭕ Oyunçu 2';
    }
    
    // Lövhəni təmizlə
    clearBoard();
    updateStatus();
    hideResult();
}

// ===================================
//  XANA TIKLAMA
// ===================================

// Bütün xanaları seç və klik event-i əlavə et
document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });
});

function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));
    
    // Yoxla: xana doludurmu? oyun aktivdir mi?
    if (board[clickedCellIndex] !== '' || !gameActive) {
        return;
    }
    
    // Xananı işarələ
    handleCellPlayed(clickedCell, clickedCellIndex);
    
    // Nəticəni yoxla
    handleResultValidation();
}

function handleCellPlayed(cell, index) {
    // Massivi yenilə
    board[index] = currentPlayer;
    
    // UI yenilə
    cell.textContent = currentPlayer === 'X' ? '❌' : '⭕';
    cell.classList.add(currentPlayer.toLowerCase());
}

// ===================================
//  NƏTICƏNI YOXLAMAQ
// ===================================

function handleResultValidation() {
    let roundWon = false;
    let winningCombination = [];
    
    // Bütün qalib kombinasiyaları yoxla
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        
        // Üç xana da eyni oyunçuya məxsusdursa
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            winningCombination = [a, b, c];
            break;
        }
    }
    
    if (roundWon) {
        // Qalib var
        announceWinner(currentPlayer, winningCombination);
        return;
    }
    
    // Bərabərlik yoxla (bütün xanalar doludurmu?)
    let roundDraw = !board.includes('');
    
    if (roundDraw) {
        announceDraw();
        return;
    }
    
    // Oyun davam edir - növbəti oyunçu
    switchPlayer();
}

// ===================================
//  OYUNÇU DEYIŞMƏK
// ===================================

function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateStatus();
    
    // Əgər kompüterin növbəsidirsə
    if (gameMode === 'computer' && currentPlayer === 'O' && gameActive) {
        setTimeout(computerMove, 500); // 0.5 saniyə gözlə
    }
}

function updateStatus() {
    const statusElement = document.getElementById('currentPlayer');
    const playerSymbol = currentPlayer === 'X' ? '❌' : '⭕';
    const playerClass = currentPlayer === 'X' ? 'player-x' : 'player-o';
    
    statusElement.innerHTML = `Sıra: <span class="${playerClass}">${playerSymbol}</span>`;
}

// ===================================
//  KOMPÜTER HƏRƏKƏTI (AI)
// ===================================

function computerMove() {
    if (!gameActive) return;
    
    // 1. Qalib gələ biləcəyikmi? (hücum)
    let move = findWinningMove('O');
    
    // 2. Rəqib qalib gələ bilərmi? (müdafiə)
    if (move === -1) {
        move = findWinningMove('X');
    }
    
    // 3. Mərkəzi boşdursa, oraya oyna
    if (move === -1 && board[4] === '') {
        move = 4;
    }
    
    // 4. Təsadüfi boş xana seç
    if (move === -1) {
        const emptyCells = board.map((val, idx) => val === '' ? idx : -1).filter(val => val !== -1);
        move = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    }
    
    // Hərəkət et
    const cell = document.querySelector(`[data-index="${move}"]`);
    handleCellPlayed(cell, move);
    handleResultValidation();
}

// Qalib gələ biləcək hərəkəti tap
function findWinningMove(player) {
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        const line = [board[a], board[b], board[c]];
        
        // 2-si bizimdir, 1-i boşdur
        const playerCount = line.filter(val => val === player).length;
        const emptyCount = line.filter(val => val === '').length;
        
        if (playerCount === 2 && emptyCount === 1) {
            // Boş xananı tap və qaytar
            if (board[a] === '') return a;
            if (board[b] === '') return b;
            if (board[c] === '') return c;
        }
    }
    return -1;
}

// ===================================
//  NƏTICƏLƏRI ELAN ET
// ===================================

function announceWinner(winner, combination) {
    gameActive = false;
    scores[winner]++;
    
    // Qalib xanaları işıqlandır
    combination.forEach(index => {
        document.querySelector(`[data-index="${index}"]`).classList.add('winner');
    });
    
    // Mesaj göstər
    const winnerName = winner === 'X' ? '❌ Oyunçu 1' : 
                      (gameMode === 'computer' ? '🤖 Kompüter' : '⭕ Oyunçu 2');
    
    showResult(`${winnerName} qalib gəldi! 🎉`, 'win');
    updateScoreBoard();
}

function announceDraw() {
    gameActive = false;
    scores.draw++;
    
    showResult('Bərabərlik! 🤝', 'draw');
    updateScoreBoard();
}

function showResult(message, type) {
    const resultElement = document.getElementById('resultMessage');
    resultElement.textContent = message;
    resultElement.className = `result-message show ${type}`;
}

function hideResult() {
    const resultElement = document.getElementById('resultMessage');
    resultElement.className = 'result-message';
    resultElement.style.display = 'none';
}

// ===================================
//  XAL CƏDVƏLI
// ===================================

function updateScoreBoard() {
    document.getElementById('scoreX').textContent = scores.X;
    document.getElementById('scoreO').textContent = scores.O;
    document.getElementById('scoreDraw').textContent = scores.draw;
}

// ===================================
//  OYUNU SIFIRLAMAQ
// ===================================

function resetGame() {
    gameActive = true;
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    
    clearBoard();
    updateStatus();
    hideResult();
}

function clearBoard() {
    const cells = document.querySelectorAll('.cell');
    
    cells.forEach(cell => {
        cell.textContent = '';
        cell.className = 'cell';
    });
}

// ===================================
//  ANA MENYU
// ===================================

function goToMenu() {
    document.getElementById('modeSelection').style.display = 'block';
    document.getElementById('gameSection').style.display = 'none';
    document.getElementById('scoreBoard').style.display = 'none';
    document.getElementById('menuBtn').style.display = 'none';
    
    // Xalları sıfırla
    scores = { X: 0, O: 0, draw: 0 };
    updateScoreBoard();
    hideResult();
}