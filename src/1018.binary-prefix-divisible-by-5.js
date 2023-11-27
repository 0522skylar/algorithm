/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
  let ans = []
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum = sum * 2 + nums[i] // 使用parseInt(num,2)会出错
    sum %= 5 // 要使sum变小，不然会有精度问题
    if (sum === 0) {
      ans.push(true)
    } else {
      ans.push(false)
    }
  }
  return ans;
};

console.log(prefixesDivBy5([0,1,1]))
console.log(prefixesDivBy5([0,1,1,1,1,1]))