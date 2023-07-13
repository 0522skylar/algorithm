/**
 * @param {string[]} board
 * @return {boolean}
 */

var validTicTacToe = function(board) {
  let xx = 0;
  let oo = 0;
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[0].length; j++) {
      xx = (board[i][j] === 'X') ? (xx+1) : xx;
      oo = (board[i][j] === 'O') ? (oo+1) : oo
    }

    
  }
  return !((oo != xx && oo !== xx - 1) || 
            (oo != xx -1 && win(board, 'X')) ||
            (oo != xx && win(board, 'O'))  
    )
};

const win = (board, str) => {
  for(let i = 0; i < 3; i++) {
    // 竖轴 + 横轴
    if((str === board[0][i] && str === board[1][i] && str === board[2][i]) ||
      (str === board[i][0] && str === board[i][1] && str === board[i][2])
    ) {
      return true
    }
  }
  // 两条对轴
  return ((str === board[0][0] && str === board[1][1] && str === board[2][2]) ||
          (str === board[0][2] && str == board[1][1] && str === board[2][0])
  )
}
/*
var validTicTacToe = function(board) {
  let xCount = 0, oCount = 0;
  for (const row of board) {
      for (const c of row) {
          xCount = (c === 'X') ? (xCount + 1) : xCount;
          oCount = (c === 'O') ? (oCount + 1) : oCount;
      }
  }
  console.log(xCount, oCount)
  return !((oCount != xCount && oCount != xCount - 1) ||
             (oCount != xCount - 1 && win(board, 'X')) ||
             (oCount != xCount && win(board, 'O')));
};

const win = (board, p) => {
  for (let i = 0; i < 3; ++i) {
      if ((p == board[0][i] && p == board[1][i] && p == board[2][i]) ||
          (p == board[i][0] && p == board[i][1] && p == board[i][2])) {
          return true;
      }
  }
  return ((p == board[0][0] && p == board[1][1] && p == board[2][2]) ||
          (p == board[0][2] && p == board[1][1] && p == board[2][0]));
}
*/

console.log(validTicTacToe(["O  ","   ","   "]))
console.log(validTicTacToe( ["XOX"," X ","   "]))
console.log(validTicTacToe(["XOX","O O","XOX"]))