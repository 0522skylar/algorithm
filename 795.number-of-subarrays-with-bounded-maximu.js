/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function(nums, left, right) {

  let temp = 0;
  let ans = 0;
  let k = -1;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] > right) { // 大于right情况, 后面的数值, 于前面联系断开
      k = i;
    }
    if(nums[i] >= left) { // 大于left情况
      temp = i - k;
    }
    ans += temp // 小于left情况, 加上上一个的temp值, 例如demo1中的数值1
    
  }
  return ans;
  // 2,1,4,3
  // [2][21][3] 
  // 1,9,2,5,6,
  // [2] [2][5][25][6][56][256]
};

// 题目中的连续是只索引连续
console.log(numSubarrayBoundedMax([2,1,4,3], 2,3))
console.log(numSubarrayBoundedMax([2,9,2,5,6], 2,8))