const { generateRoster } = require('../roster');
describe("Board", function() {

  // Тестов нет :\ 
  // Попробуешь написать?

  beforeEach(function() {
    board = generateRoster()
  });

  describe("place header", function() {
      // Код тут.
      it("Имена игроков", function () {
        expect(board[0][1]).toEqual('Joe Schmo');
        expect(board[1][1]).toEqual('Ms. Buckets');
        expect(board[2][1]).toEqual('Harvey Kay');
        expect(board[3][1]).toEqual('Sally Talls');
        expect(board[4][1]).toEqual('MK DiBoux');
      });
  });

  describe("init board", function() {
    // Код тут.
    it("в таблице должно быть 5 массивов по 4 элемента", function () {
      expect(board.length).toEqual(5);
      for(let i = 0; i < board.length; i++) {
        expect(board[i].length).toEqual(4);
      };
    });
  });
});
