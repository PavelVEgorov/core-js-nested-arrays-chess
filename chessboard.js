function generateChessboard() {
    const figures = ['Ладья', 'Конь', 'Слон', 'Ферзь', 'Король', 'Слон', 'Конь', 'Ладья'];
    const pawns = new Array(8).fill('Пешка');
    // Тут твой код. Верни массив массивов.

    const whiteFigures = figures.map((el) => 'Б '+ el ); // ряд с белыми фигурами
    const whitePawns = pawns.map((el) => 'Б '+ el ); // ряд с белыми пешками
    const blackFigures = figures.map((el) => 'Ч '+ el ); // ряд с черными фигурами
    const blackPawns = pawns.map((el) => 'Ч '+ el ); // ряд с черными пешками

    const board = []; // новый массив
    const kletka = new Array(8).fill(null) // мамссив - одна строка доски с 8 клетками с null

    for (let i = 0; i < 8; i++) {  // прогоняем через цикл 8 раз массив строки
     board.push(kletka);           // пушим в массив board и получаем массив с 8-ю массивами внутри 
    }                              // где каждое значение - клетка     

    for (let i = 0; i < 8; i++){
      board[0] = blackFigures;
      board[1] = blackPawns;
      board[6] = whitePawns;
      board[7] = whiteFigures;
    }
    return board;
    // console.log(board)
}

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
    const board = generateChessboard(); // доска из функции generateChessboard
    let newBord = board.map((el) => el.map((item) => emojis[item] || ' ').join('')).join('\n');
    // console.log(newBord)
    // console.log(newBord[0])
    // console.log(newBord[6])
    return newBord;
}

module.exports = {generateChessboard, renderChessboard};

