/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
  let move = [[0, 1], [0,-1 ], [1, 0], [-1, 0], [1, 1], [-1, 1], [1, -1], [-1, -1]]
  let n = grid.length
  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) {
    return -1
  }
  if (n === 1) {
    return 1
  }
  let queue = [[0, 0, 1]]
  // let ans = 0

  while(queue.length) {
    let arr = queue.shift()
    for (let m = 0; m < move.length; m++) {
      let x = arr[0] + move[m][0]
      let y = arr[1] + move[m][1]
      if (x >= 0 && x < n && y >= 0 && y < n && grid[x][y] === 0) {
        grid[x][y] = 1
        if (x == n - 1 && y == n - 1) {
          return arr[2] + 1
        }
        queue.push([x,y, arr[2] + 1])
      }
    }
  }
  return -1
};

console.log(shortestPathBinaryMatrix([[0,1],[1,0]]))

console.log(shortestPathBinaryMatrix([[0,0,0,0],[1,0,0,1],[0,1,0,0],[0,0,0,0]]))