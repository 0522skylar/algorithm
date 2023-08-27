/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
  // let dp = new Array(101).fill(0).map(() => new Array(101).fill(0))
  for(let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {

      if(j == 0) {
        matrix[i][j] = Math.min(matrix[i][j] + matrix[i-1][j], matrix[i][j] + matrix[i-1][j+1])
      } else if(j === matrix[0].length - 1) {
        matrix[i][j] = Math.min(matrix[i][j] + matrix[i-1][j], matrix[i][j] + matrix[i-1][j-1])
      } else {
        matrix[i][j] = Math.min(matrix[i][j] + matrix[i-1][j-1], matrix[i][j] + matrix[i-1][j+1], matrix[i][j] + matrix[i-1][j])
      }
      
    }
  }
  let n = matrix[0].length
  let row = matrix.length
  let ans = Number.MAX_VALUE
  for (let i = 0; i < n; i++) {
    ans = Math.min(ans, matrix[row-1][i])
  }
  return ans;
};

console.log(minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]]))