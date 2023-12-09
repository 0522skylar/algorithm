/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */

// dp + 滑动数组
var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {

  const fn = (nums, a, b) => {
    let n = nums.length
    let res = 0
    let arr = new Array(n+1).fill(0)
    for (let i = 1; i <= n; i++) {
      arr[i] = arr[i-1] + nums[i-1]
    }

    for (let i = a + b, maxa = 0; i <= n; i++) {
      // console.log(i - b, i - b - a)
      maxa = Math.max(maxa, arr[i-b] - arr[i - b - a]) // a个子数组的和
      res = Math.max(res, maxa + arr[i] - arr[i - b]) // b个子数组的和+ a子数组的和
    }
    // console.log(res, 111)
    return res
  }
  // 不妨设长度为 firstLen 的子数组在长度为 secondLen 的子数组前来计算此时的两段子数组的最大和
  return Math.max(fn(nums, firstLen, secondLen), fn(nums, secondLen, firstLen))
};

console.log(maxSumTwoNoOverlap([0,6,5,2,2,5,1,9,4], 1,2)) // 20
// console.log(maxSumTwoNoOverlap([3,8,1,3,2,1,8,9,0], 3,2)) // 29
// console.log(maxSumTwoNoOverlap([2,1,5,6,0,9,5,0,3,8], 4, 3)) // 31