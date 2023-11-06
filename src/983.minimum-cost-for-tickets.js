/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  let n = days[days.length-1];

  let dp = new Array(n + 1).fill(0)
  let a,b,c;
  for (let i = 0; i < days.length; i++) {
    dp[days[i]] = -1
  }
  // console.log(dp)
  for(let i = 1; i <= n; i++) {
    if (dp[i] === 0) {
      dp[i] = dp[i-1]
    } else {
      a = dp[i-1] + costs[0]
      if (i - 7 >= 0) {
        b = dp[i-7] + costs[1]
      } else {
        b = costs[1]
      }
      if (i - 30 >= 0) {
        c = dp[i-30] + costs[2]
      } else {
        c = costs[2]
      }
      dp[i] = Math.min(a, b)
      dp[i] = Math.min(c, dp[i])
    }

  }
  // console.log(dp)
  return dp[n]
};

console.log(mincostTickets([1,4,6,7,8,20], [2,7,15]))