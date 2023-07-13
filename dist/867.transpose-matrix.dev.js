"use strict";

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function transpose(matrix) {
  var ans = new Array(matrix[0].length).fill(0).map(function () {
    return new Array(matrix.length).fill(0);
  });

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[0].length; j++) {
      ans[j][i] = matrix[i][j];
    }
  }

  return ans;
};

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(transpose([[1, 2, 3], [4, 5, 6]]));