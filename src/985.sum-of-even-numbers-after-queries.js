/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
  let ans = []
  let sum = 0
  for(let i = 0; i < nums.length; i ++) {
    if (nums[i] % 2 === 0) {
      sum += nums[i]
    }
  }
  // console.log(sum)
  for(let i = 0; i < queries.length; i++) {
    const [val, index] = queries[i]
    // 修改之后是偶数， 之前不是偶数
    if ((nums[index] + val) % 2 === 0 && nums[index] % 2 != 0) {
      sum += nums[index] + val
    }
    // 修改之后不是偶数， 之前是偶数
    if ((nums[index] + val) % 2 != 0 && nums[index] % 2 === 0) {
      sum -= nums[index]
    }

    // 修改之后是偶数，之前也是偶数
    if ((nums[index] + val) % 2 == 0 && nums[index] % 2 == 0) {
      sum -= nums[index]
      sum += (nums[index] + val)
    }

    nums[index] += val
    ans.push(sum)
  }
  return ans;
};

console.log(sumEvenAfterQueries([1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]]))