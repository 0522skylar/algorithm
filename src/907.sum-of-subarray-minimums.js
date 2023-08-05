/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
  let ans = 0
  const MOD = 1000000007;
  for(let i = 0; i < arr.length; i++) {
    let left = i -  1;
    for(; left >= 0 && arr[i] < arr[left]; left--);
    let right = i + 1;
    for (; right < arr.length && arr[i] <= arr[right]; right++);
    // console.log(left, right, (i - left) * (right - i) )
    ans += (i - left) * (right - i) * arr[i] // 计算每个数在子数组中最小的次数
  }
  return ans % MOD
};

console.log(sumSubarrayMins([3,1,2,4]))
// [1] => 1 ---- 1
//[1,3] => 1+3+4 => ----1+1+3
// [1,3,2] => 1+3+4+2+5+6-----1+3+2
// [1,3,2,4] => 1+3+4+2+5+6+ 8 + 9 + 10   ----- 