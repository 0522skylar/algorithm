/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
  let n = nums.length / 2
  // console.log(n)
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1
    } else {
      obj[nums[i]]++
    }
    if (obj[nums[i]] === n) {
      return nums[i]
    }
    // console.log(arr[nums[i]])
  }
};
console.log(repeatedNTimes([2,1,2,5,3,2]))