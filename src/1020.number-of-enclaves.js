/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
  let ans = 0
  const dfs = (x,y,grid) => {
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] == 0) {
      return
    }
    grid[x][y] = 0
    dfs(x, y-1,  grid)
    dfs(x, y+1,  grid)
    dfs(x - 1, y,  grid)
    dfs(x + 1, y,  grid)
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) { // 从边缘递归改变
      if (i == 0 || j === 0 || i === (grid.length - 1) || j === grid[0].length - 1) {
        if (grid[i][j] === 1) {
          dfs(i, j, grid)
        }
      }
    }
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        ans++
      }
    }
  }
  return ans;
};

console.log(numEnclaves([[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]))