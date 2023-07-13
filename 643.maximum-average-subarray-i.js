/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @desc {
 * 给你一个由 n 个元素组成的整数数组 nums 和一个整数 k 。

请你找出平均数最大且 长度为 k 的连续子数组，并输出该最大平均数。

任何误差小于 10-5 的答案都将被视为正确答案。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/maximum-average-subarray-i
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
}
 */
var findMaxAverage = function (nums, k) {
    let sum = 0, n = nums.length;

    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    let maxSum = sum; //先获取第一个  k个值的和

    for (let i = k; i < n; i++) {
        sum = sum + nums[i] - nums[i - k];  //加上滑动窗口右边的值，同时减掉窗口左边的值
        maxSum = Math.max(sum, maxSum);       //保持窗口长度不变
    }
    return maxSum / k;

};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4))
console.log(findMaxAverage([5], 1))