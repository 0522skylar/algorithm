/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
  let ans = [
    [rStart, cStart]
  ]
  let dr = [0, 1, 0, -1]
  let dc = [1, 0, -1, 0]
  let direc = 0;
  let count = 0; // 当前方向前进步数
  let maxCount = 1 // 当前该方向最多前进步数,每两个方向加1
  let changeCount = 0; // 总的改变方向的次数,要依据该数据计算maxCount,每两次maxCount都要加1
  let num = 1; // 计算已经走过的数据量
  while (num < rows * cols) {
    rStart += dr[direc % 4];
    cStart += dc[direc % 4];
    if (rStart >= 0 && rStart < rows && cStart >= 0 && cStart < cols) {
      ans.push([rStart, cStart]);
      num++;
    }
    console.log(rStart, cStart)
    count++;
    if (count == maxCount) {
      count = 0;
      direc++;
      changeCount++;
    }
    if (changeCount == 2) {
      changeCount = 0;
      maxCount++;
    }
  }
  return ans;
};

console.log(spiralMatrixIII(5, 6, 1, 4))