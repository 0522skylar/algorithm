/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
  let sum = nums.reduce((total, num) => { return total + num })
  let n = nums.length
  let mn = Number.MAX_VALUE / 2
  let mx = -(Number.MAX_VALUE / 2)
  // console.log(Number.MIN_VALUE, mn)
  let mndp = mn
  let mxdp = mx
  for (let i = 0; i < n; i++) {
    mndp = Math.min(mndp + nums[i], nums[i]) // 求最小和子数组
    mxdp = Math.max(mxdp + nums[i], nums[i]) // 最大和子数组
    mn = Math.min(mn, mndp)
    mx = Math.max(mx, mxdp)
  }
  // 最小和为全集的需要另外讨论, 因为数组中必须存在数
  return Math.max(mx, sum - mn) === 0 ? mx : Math.max(mx, sum - mn)
};

console.log(maxSubarraySumCircular([1,-2,3,-2]))
console.log(maxSubarraySumCircular([5,-3,5]))
console.log(maxSubarraySumCircular([3,-2,2,-3]))
console.log(maxSubarraySumCircular([-3,-2,-3]))

