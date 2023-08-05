/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
  if (nums.length <= 1) {
    return 0
  }
  nums.sort((a,b) => a - b)
  let maxV = nums[nums.length - 1];
  let minV = nums[0];
  return (maxV - k ) - (minV + k) < 0 ? 0 : (maxV - k ) - (minV + k)
};

console.log(smallestRangeI([1], 0))
console.log(smallestRangeI([0, 10],2))
console.log(smallestRangeI([1,3,6], 3))