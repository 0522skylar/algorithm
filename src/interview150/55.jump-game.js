/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let n = 1
  for (let i = nums.length - 2; i >= 0; i--) {
    // console.log(n)
    if (nums[i] >= n) {
      n = 1
    } else {
      n++
    }
    if (n > 1 && i == 0) {
      return false
    }
  }
  return true
};

// console.log(canJump([2, 3, 1, 1, 4]))
// console.log(canJump([3,2,1,0,4]))
// console.log(canJump([0]))
console.log(canJump([2,0,0]))