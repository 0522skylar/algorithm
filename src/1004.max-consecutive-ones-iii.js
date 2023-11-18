/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  let ans = 0
  let left = 0
  let right = 0
  let cnt = 0
  while(right < nums.length) {
    if (nums[right] == 0) {
      cnt ++
    }
    while(cnt > k) {
      if (nums[left++] == 0) {
        cnt--
      }
    }
    ans = Math.max(ans, right - left + 1)
    right++
  }
  return ans
};

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2)) // 6
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3)) // 10