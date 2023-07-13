"use strict";

/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function matrixScore(grid) {
  var m = grid.length;
  var n = grid[0].length;
  var ans = m * (1 << n - 1); // console.log(ans) // 24 保证最高位一定为1
  // 1000
  // 1000
  // 1000

  for (var i = 1; i < n; i++) {
    var k = 0;

    for (var j = 0; j < m; j++) {
      k += grid[j][0] ^ grid[j][i]; //每行的当前位是否与第一位相同
    }

    k = Math.max(k, m - k); // 取最大值, 如果不是最大值, 相减之后就是

    ans += k * (1 << n - 1 - i); // 最高位加上 除去最高之后的其他位
  }

  return ans;
};

console.log(matrixScore([[0, 0, 1, 1], [1, 0, 1, 0], [1, 1, 0, 0]]));