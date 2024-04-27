/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let m = nums.length
  let left = new Array(m+1).fill(1)
  let right = new Array(m+1).fill(1)
  let ans = []
  for (let i = 1; i <= nums.length; i++) { // L[i] 为索引 i 左侧所有元素的乘积
    left[i] = left[i - 1] * nums[i - 1]
  }
  // console.log(left)
  // right[nums.length - 1] = 1
  for (let i = nums.length -1 ; i >= 0; i--) { // R[i] 为索引 i 右侧所有元素的乘积
    right[i] = right[i+1] * (nums[i+1] != undefined ? nums[i+1] : 1)
  }
  // console.log(right)
  for (let i = 0; i < nums.length; i++) {
    ans.push(left[i] * right[i])
  }
  return ans
  // console.log()
};

console.log(productExceptSelf([1,2,3,4]))