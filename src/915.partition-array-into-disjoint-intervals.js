/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function(nums) {
  let key = nums.length - 1
  let ans = 0
  let curMax = nums[0]
  let leftMax = nums[0]
  for (let i = 1; i <= key; i++) {

    curMax = Math.max(curMax, nums[i])

    if (nums[i] < leftMax) {
        ans = i
        leftMax = curMax
    }
  }
  return ans + 1
};
console.log(partitionDisjoint([5,0,3,8,6]))
console.log(partitionDisjoint([1,1,1,0, 6,12]))