/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let n = matrix.length
  let m = matrix[0].length
  let harr = []
  let larr = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        harr.push(i)
        larr.push(j)
      }
    }
  }
  for (let i = 0; i < harr.length; i++) {
    for (let j = 0; j < m; j++) {
      matrix[harr[i]][j] = 0
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < larr.length; j++) {
      matrix[i][larr[j]] = 0
    }
  }
  return matrix
};

console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))