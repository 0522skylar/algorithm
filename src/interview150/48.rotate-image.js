/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let m = matrix.length
  let n = matrix[0].length
  let arr = []
  for (let i = 0; i < m ; i++) {
    for (let j = 0; j < n ; j++) {
      arr.push(matrix[i][j])
    }
  }
  // console.log(arr)
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < m; j++) {
      matrix[j][i] = arr.shift()
      // console.log(j, i)
    }
  }
  return matrix
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))