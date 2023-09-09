/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(n) {
  const mod = 1000000007;
  if (n === 1) {
    return 10
  }
  let [a0,a1,a2,a3,a4,a6,a7,a8,a9] = Array(9).fill(1)
  while(n-- > 1) {
    [a0,a1,a2,a3,a4,a6,a7,a8,a9] = [
      (a4 + a6) % mod,
      (a8 + a6) % mod,
      (a7 + a9) % mod,
      (a4 + a8) % mod,
      (a0 + a3 + a9) % mod,
      (a0 + a1 + a7) % mod,
      (a2 + a6) % mod,
      (a1 + a3) % mod,
      (a2 + a4) % mod,
    ]
  }

  return (a0+a1+a2+a3+a4+a6+a7+a8+a9) % mod
};

console.log(knightDialer(2))
console.log(knightDialer(3131))


/**
 * @param {number} n
 * @return {number}
 */
var knightDialer1 = function(n) {
  if (n === 1) return 10; // 一位，选取0-9均可
  let mod = 1e9 + 7;
  let arr = [2,2,2,2,3,0,3,2,2,2]; // 2位及以上，5不能选取为起始点。这里记录各位为结尾的号码数
  let c = 2;
  while (c < n) {
      let nArr = arr.slice(); // 下一长度的号码数分布
      nArr[0] = (arr[4] + arr[6]) % mod;
      nArr[1] = (arr[8] + arr[6]) % mod;
      nArr[2] = (arr[9] + arr[7]) % mod;
      nArr[3] = (arr[4] + arr[8]) % mod;
      nArr[4] = (arr[0] + arr[3] + arr[9]) % mod;
      nArr[6] = (arr[0] + arr[1] + arr[7]) % mod;
      nArr[7] = (arr[2] + arr[6]) % mod;
      nArr[8] = (arr[1] + arr[3]) % mod;
      nArr[9] = (arr[4] + arr[2]) % mod;
      c += 1;
      arr = nArr;
  }
  return arr.reduce((a,i) => (a+i)%mod); // 返回加和
};

// 作者：臭氧层子
// 链接：https://leetcode.cn/problems/knight-dialer/solutions/1345380/js-by-marswiz-now2/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。