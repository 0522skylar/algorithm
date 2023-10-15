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

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length - 1; j > i; j-- ) {
      if (nums[i] <= nums[j]) {
        arr.push(j - i)
      }
    }
  }
  if (arr.length) {
    arr.sort((a, b) => b - a)
    return arr[0]
  } else {
    return 0
  }
};

console.log(maxWidthRamp([6,0,8,2,1,5])) // 4