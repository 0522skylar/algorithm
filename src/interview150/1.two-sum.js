/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let ans = []
  for (let i = 0; i < nums.length; i++) {
    let curIndex = nums.indexOf(target - nums[i])
    if  (curIndex != -1 && curIndex != i) {
      ans.push(i, curIndex)
      return ans
    }
  }
};