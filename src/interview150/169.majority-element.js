/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++
    } else {
      obj[nums[i]] = 1
    }
  }
  let max = 0
  let key = 0
  // console.log(obj)
  for (let i in obj) {
    if (obj[i] > max){
      max = obj[i]
      key = i
    }
  }
  return Number(key)
};

console.log(majorityElement([3,2,3]))