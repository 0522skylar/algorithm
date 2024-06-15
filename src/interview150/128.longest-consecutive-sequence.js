/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums.length == 0) {
    return 0
  }
  let arr = [...new Set(nums)].sort((a, b) => a - b)
  let right = 1
  let left = 0
  let count = 1
  let ans = 0
  while(left < right && right < arr.length) {
    if (arr[right] - arr[left] == count) {
      count++
      right++
    } else {
      ans = Math.max(ans, count)
      count = 1
      left = right
      right = left + 1
    }
  }
  ans = Math.max(ans, count)
  return ans
};



console.log(longestConsecutive([100,4,200,1,3,2]))
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
console.log(longestConsecutive([0,-1]))


