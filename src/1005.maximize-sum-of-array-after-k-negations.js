/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
  nums.sort((a, b) => Math.abs(b) - Math.abs(a))
  // console.log(nums)
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && k > 0) {
      k--
      nums[i] = -nums[i]
    }
    ans += nums[i]
  }
  // console.log(k)
  if (k % 2) {
    ans -= 2 * nums[nums.length - 1]
  }
  return ans
};
console.log(largestSumAfterKNegations([3,-1,0,2], 3))
console.log(largestSumAfterKNegations([4,2,3], 1)) // 5
console.log(largestSumAfterKNegations([2,-3,-1,5,-4], 2)) // 13
console.log(largestSumAfterKNegations([5,6,9,-3,3], 2)) // 20
// [8,-7,-3,-9,1,9,-6,-9,3]