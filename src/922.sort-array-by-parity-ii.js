/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
  let one = []
  let two  = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2) {
      one.push(nums[i])
    } else {
      two.push(nums[i])
    }
  }
  let ans = []
  for(let i = 0; i < one.length; i++) {
    ans.push(two[i])

    ans.push(one[i])
  }
  return ans;
};