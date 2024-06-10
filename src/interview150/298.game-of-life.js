/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  let arr = [[1,0],[0,1],[-1,0], [0,-1], [-1,-1], [1,-1], [-1,1], [1,1]] // 8

  let ans = []
  let m = board.length
  let n = board[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        let hou = 0
        for (let k = 0; k < arr.length; k++) {
          if (i + arr[k][0] >= 0 && i + arr[k][0] < m && j + arr[k][1] >= 0 && j + arr[k][1] < n) {
            if (board[i + arr[k][0]][j + arr[k][1]]) {
              hou++
            }
          }
        }
        // console.log(hou, [i, j])
        if (hou < 2) { // siwang
          ans.push([i, j])
        }else if (hou > 3) { //siwang
          ans.push([i, j])
        }
      } else {
        let hou = 0
        for (let k = 0; k < arr.length; k++) {
          if (i + arr[k][0] >= 0 && i + arr[k][0] < m && j + arr[k][1] >= 0 && j + arr[k][1] < n) {
            if (board[i + arr[k][0]][j + arr[k][1]]) {
              hou++
            }
          }
        }
        if (hou === 3) { //fuhuo
          ans.push([i, j])
        }
      }
    }
  }
  // console.log(ans)
  for (let i = 0; i < ans.length; i++) {
    board[ans[i][0]][ans[i][1]] =  board[ans[i][0]][ans[i][1]] ^ 1
  }
  return board
};

console.log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]))