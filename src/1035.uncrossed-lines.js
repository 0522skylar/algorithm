/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 本题说是求绘制的最大连线数，其实就是求两个字符串的最长公共子序列的长度！
 */
var maxUncrossedLines = function(nums1, nums2) {
  let dp = new Array(nums1.length + 1).fill(0).map(() => new Array(nums2.length + 1).fill(0))
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i-1] === nums2[j-1]) {
        dp[i][j] = dp[i-1][j-1] + 1
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
      }
    }
  }
  return dp[nums1.length][nums2.length]
};

console.log(maxUncrossedLines([1,4,2], [1,2,4])) // 2