/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumOfAverages = function(nums, k) {
  let n = nums.length;
  let sum = new Array(n+1).fill(0)
  for (let i = 1; i <= n; i++) {
    sum[i] = sum[i-1] + nums[i - 1]
  }
  let dp = new Array(n+1).fill(0).map(() => new Array(k+1).fill(0))
  // dp[i][k]表示将nums中的前i个数分成k个子数组的最大平均值

  // base case: k=1 如果分成1组
  for (let i = 1; i <= n; i++) {
    dp[i][1] = sum[i] / i;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 2; j <= k; j++) {
      for (let b = 1; b < i; b++) {
        let avg = (sum[i] - sum[b]) / (i - b)
        dp[i][j] = Math.max(dp[i][j], dp[b][j - 1] + avg)
      }
    }
  }
  // console.log(dp)

  return dp[n][k]
};


console.log(largestSumOfAverages([9,1,2,3,9], 3)) // 20
console.log(largestSumOfAverages([1,2,3,4,5,6,7], 4)) // 20.5