/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  nums.sort((a, b) => {
    if (a % 2) {
      return 1
    } else {
      return -1
    }
  })
  return nums
};
console.log(sortArrayByParity([1,3,4,2]))
console.log(sortArrayByParity([0]))