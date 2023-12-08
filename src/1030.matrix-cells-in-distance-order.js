/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
  let ans = []
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      ans.push([i, j])
    }
  }
  // console.log(ans, 11)
  ans.sort((a, b) => {
    return (Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter)) - (Math.abs(b[0] - rCenter) + Math.abs(b[1] - cCenter))
  })
  return ans
};

console.log(allCellsDistOrder(1,2,0,0))
console.log(allCellsDistOrder(2,3,1,2))
console.log(allCellsDistOrder(2,2,0,1))