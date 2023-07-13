"use strict";

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function numMagicSquaresInside(grid) {
  var n = grid.length;
  var m = grid[0].length;
  var ans = 0;

  if (n < 3 || m < 3) {
    return 0;
  }

  for (var i = 0; i <= n - 3; i++) {
    for (var j = 0; j <= m - 3; j++) {
      var three = new Array(3).fill(0).map(function () {
        return new Array(3).fill(0);
      });
      var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      for (var k = 0; k < 3; k++) {
        for (var h = 0; h < 3; h++) {
          three[k][h] = grid[i + k][j + h];
          var index = arr.indexOf(grid[i + k][j + h]);

          if (index != -1) {
            arr.splice(index, 1);
          }
        }
      } // console.log(three)


      if (arr.length === 0 && isHuan(three)) {
        ans++;
      }
    }
  }

  return ans;
};

var isHuan = function isHuan(grid) {
  var n = grid[0][1] + grid[0][2] + grid[0][0];

  for (var i = 1; i < 3; i++) {
    var sum = grid[i][1] + grid[i][2] + grid[i][0];

    if (sum != n) {
      return false;
    }
  }

  for (var _i = 0; _i < 3; _i++) {
    var _sum = grid[1][_i] + grid[2][_i] + grid[0][_i];

    if (_sum != n) {
      return false;
    }
  }

  var one = grid[0][0] + grid[1][1] + grid[2][2];

  if (one != n) {
    return false;
  }

  var two = grid[0][2] + grid[1][1] + grid[2][0];

  if (two != n) {
    return false;
  }

  return true;
};

console.log(numMagicSquaresInside([[4, 3, 8, 4], [9, 5, 1, 9], [2, 7, 6, 2]]));