/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {

  let ans = 0
  nums.sort((a, b) => b - a)
  console.log(nums)
  const isAngle = (a, b, c) => {
    return a + b > c && a + c > b && c + b > a
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (isAngle(nums[i], nums[j], nums[k])) {
          return nums[i] + nums[j] + nums[k]
         }
      }
    }
  }
  return ans
};
console.log(largestPerimeter([2,1,2]))
console.log(largestPerimeter([3,2,3,4]))