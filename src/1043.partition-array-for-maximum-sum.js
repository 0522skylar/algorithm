/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
  let n = arr.length
  let dp = new Array(n+1).fill(0)
  for (let i = 1; i <= n; i++) {
    let mx = 0
    for (let j = i, m = 1; j > 0 && m <= k ; j--, m++) {
      mx = Math.max(arr[j - 1], mx)
      dp[i] = Math.max(dp[i], dp[i - m] + mx * m)
    }
  }
  return dp[n]
};

console.log(maxSumAfterPartitioning([1,15,7,9,2,5,10], 3))