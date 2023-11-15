/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  let x, y;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === 'R') {
        x = i;
        y = j
      }
    }
  }
  let ans = 0;

  let dx = [-1, 1, 0, 0]
  let dy = [0, 0, -1, 1]
  for (let i = 0; i < 4; i++) {
    let xx = x;
    let yy = y;
    while (true) {
      xx += dx[i]
      yy += dy[i]
      if (xx < 0 || xx >= 8 || yy < 0 || yy >= 8 || board[xx][yy] === 'B') {
        break
      }
      if (board[xx][yy] == 'p') {
        ans++
        break
      }
    }
  }
  return ans;
};