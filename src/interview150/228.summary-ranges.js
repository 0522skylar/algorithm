/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let ans = []
  let item = nums[0]
  if (nums.length == 0) {
    return []
  }
  for (let i = 1; i < nums.length; i++) {
    if (nums[i-1] + 1 === nums[i]) {
      // item = nums
    } else {
      
      ans.push(item === nums[i-1] ? "" + item : `${item}->${nums[i-1]}`)
      item = nums[i]
    }
  }
  if (item === nums[nums.length - 1]) {
    ans.push(item + '')
  } else {
    ans.push(`${item}->${nums[nums.length-1]}`)
  }
  return ans
};

console.log(summaryRanges([0,1,2,4,5,7]))