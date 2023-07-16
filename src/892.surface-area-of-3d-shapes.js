/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
  let ans = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      ans += grid[i][j] * 6  // 一个的表面积为6
      if (grid[i][j] > 1) {
        ans -= (grid[i][j] - 1) * 2  // 一个的表面积为6
      }
      if (i >= 1) {
        ans -= Math.min(grid[i][j], grid[i-1][j]) * 2
      }
      if (j >= 1) {
        ans -= Math.min(grid[i][j], grid[i][j-1]) * 2
      }
      // grid[i][j]会与grid[i - 1][j], grid[i][j - 1]有接触
      // 接触面个数为二者的最小,每一个接触面面积同样也是2,减去
    }
  }
  return ans;
};

console.log(surfaceArea([[1,2],[3,4]])) // 34 = 4+4+7+6+7+6
console.log(surfaceArea([[1,1,1],[1,0,1],[1,1,1]])) // 32 = 8+8+3*4 + 4*1