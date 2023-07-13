/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  let ans = 0;
  let arr = new Array(2).fill(0).map(() => new Array(grid.length).fill(0))
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[0].length; j++) {
      arr[0][i] = Math.max(arr[0][i], grid[i][j])
      arr[1][j] = Math.max(arr[1][j], grid[i][j])
    }
  }
  console.log(arr)

  // let newGrid = grid.concat();
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[0].length; j++) {
      ans += Math.min(arr[0][i], arr[1][j]) - grid[i][j]
    }
  }
  return ans
};

console.log(maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]))