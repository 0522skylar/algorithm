/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  nums.sort((a, b) => a - b)
  return nums
};

