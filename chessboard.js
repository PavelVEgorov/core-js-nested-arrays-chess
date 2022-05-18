function generateChessboard() {
    const figures = ['Ладья', 'Конь', 'Слон', 'Ферзь', 'Король', 'Слон', 'Конь', 'Ладья'];
    const pawns = new Array(8).fill('Пешка');
    
    const board = [];
    const kletka = new Array(8).fill(null)

    for (let i = 0; i < 8; i++) {
     board.push(kletka);
    }

    for (let i = 0; i < figures.length; i++){
      board[0] = figures;
    }
    console.log(board)
    // Тут твой код. Верни массив массивов.
}

console.log(generateChessboard())

function renderChessboard() {
    const emojis = {
        'Б Ферзь': '♕',
        'Б Король': '♔',
        'Б Слон': '♗',
        'Б Конь': '♘',
        'Б Ладья': '♖',
        'Б Пешка': '♙',
        'Ч Ферзь': '♛',
        'Ч Король': '♚',
        'Ч Слон': '♝',
        'Ч Конь': '♞',
        'Ч Ладья': '♜',
        'Ч Пешка': '♟'
    }
       
    // Тут твой код.
}

module.exports = {generateChessboard, renderChessboard};

