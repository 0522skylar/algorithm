/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen1 = function(target, nums) {// TEL
  let arr = []
  nums.reduce((total, num) => {
    arr.push(total + num)
    return total + num
  }, 0)
  let left = 0
  let right = arr.length - 1
  let ans = Number.MAX_VALUE
  // console.log(arr)
  
  for (let i = 0; i < arr.length; i++) {
    left = i
    right = i + 1
    if (arr[left] >= target) {
      ans = Math.min(ans, left + 1)
    }
    while(right < arr.length) {
      let cur = arr[right] - arr[left]
      if (cur >= target) {
        ans = Math.min(ans, right - left)
        break
      }
      right++
    }
  }
  return ans === Number.MAX_VALUE ? 0 : ans;
};
var minSubArrayLen = function(target, nums) { 
  let ans = 0
  let sum = 0
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j]
    while(sum >= target) {
      ans = ans == 0 ? j - i + 1 : Math.min(ans, j  - i + 1)
      sum -= nums[i]
      i++
    }
  }
  return ans;
};


console.log(minSubArrayLen(7, [2,3,1,2,4,3])) // 2
console.log(minSubArrayLen(15, [1,2,3,4,5])) // 5
console.log(minSubArrayLen(5,[2,3,1,1,1,1,1])) // 2