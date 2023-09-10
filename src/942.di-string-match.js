/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
  let ans = []
  let ii = 0
  let dd = s.length
  for(let i = 0; i < s.length; i++) {
    if(s[i] == 'I') {
      ans.push(ii++)
    } else {
      ans.push(dd --)
    }
  }
  ans.push(ii)
  return ans
};

console.log(diStringMatch("IDID"))
console.log(diStringMatch("III"))
console.log(diStringMatch("DDI"))

var diStringMatch = function(s) {
  let n = s.length, lo = 0, hi = n;
  const perm = new Array(n + 1).fill(0);
  for (let i = 0; i < n; ++i) {
      perm[i] = s[i] === 'I' ? lo++ : hi--;
  }
  perm[n] = lo; // 最后剩下一个数，此时 lo == hi
  return perm;
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/di-string-match/solutions/1473721/zeng-jian-zi-fu-chuan-pi-pei-by-leetcode-jzm2/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。