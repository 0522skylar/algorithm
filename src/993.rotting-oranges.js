/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {

  const dfs = (i, j, grid, time) => {
    if (i < 0  || i >= grid.length || j < 0 || j >= grid[0].length) {
      return
    }
    if (grid[i][j] === 1 || (grid[i][j] < 0 && time > grid[i][j]) ) {
      grid[i][j]  = time
      dfs(i, j+1, grid, time - 1)
      dfs(i, j-1, grid, time - 1)
      dfs(i-1, j, grid, time - 1)
      dfs(i + 1, j, grid, time - 1)
    }
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        dfs(i, j+1, grid, -1)
        dfs(i, j-1, grid, -1)
        dfs(i+1, j, grid, -1)
        dfs(i-1, j, grid, -1)
        // ans = Math.min(ans, step)
      }
    }
  }
  let ans = 0

  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        return -1
      }
      ans = Math.min(ans, grid[i][j])
    }
  }
  // console.log(grid)

  return -ans
};

console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]))