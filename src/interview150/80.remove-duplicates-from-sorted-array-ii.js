/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0
  let count = 0
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] == nums[j]) {
      count++;
      if (count >= 2) {
        continue
      }
      i++;
      nums[i] = nums[j];
    } else {
      count = 0
      i++;
      nums[i] = nums[j];
    }
  }
  // console.log(nums)
  return i + 1
};

console.log(removeDuplicates([1,1,1,2,2,3]))