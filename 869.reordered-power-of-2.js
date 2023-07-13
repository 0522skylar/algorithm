/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
  const backTrack = (nums, indexs, num) => {
    if (indexs === nums.length) {
      return isPoewr(num)
    }
    for(let  i = 0; i < nums.length; i++) {
      if (nums[i] === '0' && num === 0) { // 不能有前导零
        continue
      }
      if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) { // 重复数字+是否访问过
        continue
      }
      vis[i] = true

      if (backTrack(nums, indexs + 1, num * 10 + nums[i].charCodeAt() - '0'.charCodeAt())) {
        // num * 10 + nums[i].charCodeAt() - '0'.charCodeAt()组合成总数
        return true;
      }
      vis[i] = false;
    }
    return false
  }
  const nums = Array.from('' + n);
  console.log(nums)
  nums.sort();
  const vis = new Array(nums.length).fill(false);
  return backTrack(nums, 0, 0);
};

const isPoewr = (n) => { // 判断是否2的幂
  return (n & (n - 1)) === 0;
}

console.log(reorderedPowerOf2(61))