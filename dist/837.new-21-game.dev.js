"use strict";

/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
// 令 dp[x] 表示从得分为 x 的情况开始游戏并且获胜的概率，目标是求 dp[0] 的值。
var new21Game = function new21Game(n, k, maxPts) {
  var dp = new Array(n + k + maxPts + 1).fill(0);

  for (var i = k; i <= n; i++) {
    dp[i] = 1;
  }

  var num = 0;

  for (var _i = k; _i <= k + maxPts - 1; _i++) {
    num += dp[_i];
  }

  for (var _i2 = k - 1; _i2 >= 0; _i2--) {
    dp[_i2] = num / maxPts;
    num -= dp[_i2 + maxPts];
    num += dp[_i2];
  }

  console.log(dp, num);
  return dp[0];
};

console.log(new21Game(21, 17, 10));
console.log(new21Game(6, 1, 10));