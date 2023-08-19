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


var maxSubarraySumCircular = function(nums) {
  let n = nums.length;
  const leftMax = new Array(n).fill(0);
  // 对坐标为 0 处的元素单独处理，避免考虑子数组为空的情况
  leftMax[0] = nums[0];
  let leftSum = nums[0];
  let pre = nums[0];
  let res = nums[0];
  for (let i = 1; i < n; i++) {
      pre = Math.max(pre + nums[i], nums[i]);
      res = Math.max(res, pre);
      leftSum += nums[i];
      leftMax[i] = Math.max(leftMax[i - 1], leftSum);
  }

  // 从右到左枚举后缀，固定后缀，选择最大前缀
  let rightSum = 0;
  for (let i = n - 1; i > 0; i--) {
      rightSum += nums[i];
      res = Math.max(res, rightSum + leftMax[i - 1]);
  }
  return res;
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/maximum-sum-circular-subarray/solutions/2350660/huan-xing-zi-shu-zu-de-zui-da-he-by-leet-elou/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
