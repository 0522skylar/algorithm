/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  let row = board.length;
  let colum = board[0].length;
  const dfs = (x, y) => {

    if (x >= row || y >= colum || x < 0 || y < 0 || board[x][y] != 'O') {
      return
    }
    board[x][y] = '-'
    dfs(x + 1, y)
    dfs(x - 1, y)
    dfs(x, y - 1)
    dfs(x, y + 1)
  }

  
  for (let i = 0; i < row; i++) {
    dfs(i, 0);
    dfs(i, colum - 1);
  }
  for (let j = 0; j < colum; j++) {
    dfs(0, j);
    dfs(row - 1, j);
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < colum; j++) {

      if (board[i][j] == '-') {
        board[i][j] = 'O';
      } else {
        board[i][j] = 'X';
      }
    }
  }
  return board
};

console.log(solve([
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"]
]))
// console.log(solve([["X","X","X"],["X","O","X"],["X","X","X"]]))
console.log(solve([
  ["O", "O", "O"],
  ["O", "O", "O"],
  ["O", "O", "O"]
]))