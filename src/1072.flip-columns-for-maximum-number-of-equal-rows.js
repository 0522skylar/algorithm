/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
  let m = matrix.length
  let n = matrix[0].length
  let map = {}
  for (let i = 0; i < m; i++) {
    let arr = new Array(n).fill('0')
    for (let j = 0; j < n; j++) {
      arr[j] = '0' + (matrix[i][j] ^ matrix[i][0]) // 第一列开头是1,则取反
    }
    // console.log(arr)
    let s = arr.join('')
    map[s] = (map[s] || 0) + 1
  }
  let res = 0
  for (let key in map) {
    res = Math.max(res, map[key]) // 相同列最大的行数
  }
  console.log(map)
  return res
};

console.log(maxEqualRowsAfterFlips([[0,1],[1,1]]))
console.log(maxEqualRowsAfterFlips([[0,0,0],[0,0,1],[1,1,0]]))