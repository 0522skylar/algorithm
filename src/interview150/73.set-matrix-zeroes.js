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

var setZeroes1 = function(matrix) {
  const m = matrix.length, n = matrix[0].length;
  let flagCol0 = false, flagRow0 = false;
  for (let i = 0; i < m; i++) {
      if (matrix[i][0] === 0) {
          flagCol0 = true;
      }
  }
  for (let j = 0; j < n; j++) {
      if (matrix[0][j] === 0) {
          flagRow0 = true;
      }
  }
  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
          if (matrix[i][j] === 0) {
              matrix[i][0] = matrix[0][j] = 0;
          }
      }
  }
  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
          if (matrix[i][0] === 0 || matrix[0][j] === 0) {
              matrix[i][j] = 0;
          }
      }
  }
  if (flagCol0) {
      for (let i = 0; i < m; i++) {
          matrix[i][0] = 0;
      }
  }
  if (flagRow0) {
      for (let j = 0; j < n; j++) {
          matrix[0][j] = 0;
      }
  }
};

var setZeroes2 = function(matrix) {
  const m = matrix.length, n = matrix[0].length;
  let flagCol0 = false;
  for (let i = 0; i < m; i++) {
      if (matrix[i][0] === 0) {
          flagCol0 = true;
      }
      for (let j = 1; j < n; j++) {
          if (matrix[i][j] === 0) {
              matrix[i][0] = matrix[0][j] = 0;
          }
      }
  }
  for (let i = m - 1; i >= 0; i--) {
      for (let j = 1; j < n; j++) {
          if (matrix[i][0] === 0 || matrix[0][j] === 0) {
              matrix[i][j] = 0;
          }
      }
      if (flagCol0) {
          matrix[i][0] = 0;
      }
  }
};
