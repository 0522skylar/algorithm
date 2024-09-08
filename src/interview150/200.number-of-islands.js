/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let ans = 0
  const dfs = (x, y) => {
    if (x >= grid.length || y >= grid[0].length || x < 0 || y < 0 || grid[x][y] != '1') {
      return
    }
    grid[x][y] = '2'
    dfs(x+1, y)
    dfs(x-1, y)
    dfs(x, y-1)
    dfs(x, y+1)
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        dfs(i, j)
        ans++
      }
    }
  }
  return ans;
};

console.log(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]))