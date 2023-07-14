/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
  let ce = 0;
  let zheng = 0;
  let di = 0;
  for(let i = 0; i < grid.length; i++) {
    zheng += Math.max(...grid[i])
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] != 0) {
        di++;
      }
    }
  }
  for (let j = 0; j < grid[0].length; j++) {
    let arr = []
    for(let i = 0; i < grid.length; i++) {
      arr.push(grid[i][j])
    }
    ce += Math.max(...arr)
  }
  console.log(di,zheng, ce)
  return di+zheng+ce
};

console.log(projectionArea([[1,2], [3,4]]))
console.log(projectionArea([[1,0],[0,2]]))
// 1 -- 1个在（0，0）
// 2 -- 2个在（0，1）
// 3 -- 3个在（1，0）
// 4 -- 4个在（1，1）

// 底--- 4
// 正--- 2 + 4 --- y轴---最高
// 侧--- 3 + 4 ---x轴---最高