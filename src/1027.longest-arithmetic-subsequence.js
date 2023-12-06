/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let item = nums[j]
      let seq = nums[j] - nums[i]
      let curlen = 2
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[k] - item == seq) {
          curlen++
          item = nums[k]
        }
      }
      ans = Math.max(ans, curlen)
    }
  }
  return ans;
};

console.log(longestArithSeqLength([3,6,9,12]))
console.log(longestArithSeqLength([9,4,7,2,10]))
console.log(longestArithSeqLength([20,1,15,3,10,5,8]))