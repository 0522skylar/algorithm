/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
// 令 dp[x] 表示从得分为 x 的情况开始游戏并且获胜的概率，目标是求 dp[0] 的值。


var new21Game = function(n, k, maxPts) {
  let dp = new Array(n+k+maxPts + 1).fill(0);
  for(let i = k; i <= n; i++) {
      dp[i] = 1;
  }
  let num = 0;
  for (let i = k; i <= k + maxPts - 1; i++) {
      num += dp[i]
  }
  for (let i = k - 1; i >= 0; i--) {
      dp[i] = num / maxPts;
      num -= dp[i+maxPts]
      num += dp[i]
  }
  console.log(dp, num);

  return dp[0]
};


console.log(new21Game(21, 17, 10))
console.log(new21Game(6, 1, 10))