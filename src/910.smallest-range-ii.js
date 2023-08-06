/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeII = function(nums, k) {
  nums.sort((a, b) => a - b)
  console.log(nums)
  let ans = nums[nums.length - 1] - nums[0]
  for (let i = 1; i < nums.length; i++) {
    let min = Math.min(nums[0] + k, nums[i] - k)
    let max = Math.max(nums[nums.length - 1] - k, nums[i - 1] +k)
    ans = Math.min(max - min, ans)
  }
  return ans;
};
console.log(smallestRangeII([1], 0)) // 0
console.log(smallestRangeII([0, 10], 2)) // 6
console.log(smallestRangeII([1,3,6], 3)) // 3