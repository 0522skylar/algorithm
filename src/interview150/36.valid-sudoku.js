/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let ans = true
  for (let i = 0; i < board.length; i++) {
    let arr = []
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] != '.') {
        if (arr.indexOf(board[i][j]) != -1) {
          ans = false
          return ans
        }
        arr.push(board[i][j])
      }
    }
    console.log(arr)
  }

  for (let i = 0; i < board[0].length; i++) {
    let arr = []
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] != '.') {
        if (arr.indexOf(board[j][i]) != -1) {
          ans = false
          return ans
        }
        arr.push(board[j][i])
      }
    }
  }
  for(let i = 0; i < board.length; i+= 3) {
    for (let j = 0; j < board[0].length; j+= 3) {
      let arr = []
      for (let k = 0; k < 3; k++) {
        for (let m = 0; m < 3; m++) {
          if (board[i + k][j + m] != '.') {
            if (arr.indexOf(board[i + k][j + m]) != -1) {
              ans = false
              return ans
            }
            arr.push(board[i + k][j + m])
          }
        }
      }
    }
  }
  return ans
};
var isValidSudoku1 = function (board) {
  let rows = []
  let cols = []
  let box = []
  for (let i = 0; i < 9; i++) {
      rows[i] = new Map()
      cols[i] = new Map()
      box[i] = new Map()
  }
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] !== '.') {
              // 获取数字所在子数组的序号
              let s = parseInt(i / 3) * 3 + parseInt(j / 3)
              if (rows[i].has(board[i][j]) || cols[j].has(board[i][j]) || box[s].has(board[i][j])) {
                console.log(rows[i], cols[j], box[s])
                  return false
              }
              else {
                  rows[i].set(board[i][j], 1)
                  cols[j].set(board[i][j], 1)
                  box[s].set(board[i][j], 1)
              }
          }
      }
  }
  
  return true
};
console.log(isValidSudoku([
  ["7",".",".",".","4",".",".",".","."],
  [".",".",".","8","6","5",".",".","."],
  [".","1",".","2",".",".",".",".","."],
  [".",".",".",".",".","9",".",".","."],
  [".",".",".",".","5",".","5",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".","2",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."]
])) // false