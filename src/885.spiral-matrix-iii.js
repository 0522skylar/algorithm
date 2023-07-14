/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
  let ans = [[rStart,cStart]]
  let track = new Array(rows).fill(0).map(() => new Array(cols).fill(0))
  track[rStart][cStart] = 1
  let count = 1;

  let dir = [[0, 1], [1, 0], [-0, -1], [-1, 0]]
  let startD = 0 // 右-下-左-上
  while(count < 7) {
    let [x, y] = [rStart + dir[startD][0], cStart + dir[startD][1]]
    console.log(x, y, count, startD)
    if (track[x][y] === 0) {
      track[x][y] = 1;
      count++
      ans.push([x, y])
      startD = (++startD ) % 4
      rStart = x
      cStart = y
    } else {
      startD = (--startD ) % 4
      // break
    }
  }
  console.log(track)
};

console.log(spiralMatrixIII(5,6,1,4))