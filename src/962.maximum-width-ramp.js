/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    if (!arr.length || nums[i] < nums[arr[arr.length - 1]]) {
      arr.push(i)
    }
  }
  let res = 0
  for (let i = nums.length - 1; i >= 0; i--) {
    while(arr.length && nums[i] >= nums[arr[arr.length - 1]]) {
      res = Math.max(res, i - arr[arr.length - 1])
      arr.pop()
    }
  }
  return res
};

console.log(maxWidthRamp([6,0,8,2,1,5])) // 4