/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const m = s.length;
  let ansLeft = -1;
  let ansRight = m;
  let left = 0;
  let  less = 0;
  const cntS = Array(128).fill(0); // s 子串字母的出现次数
  const cntT = Array(128).fill(0); // t 中字母的出现次数
  for (const c of t) {
    if (cntT[c.codePointAt(0)]++ === 0) {
      less++; // 有 less 种字母的出现次数 < t 中的字母出现次数
    }
  }
  for (let right = 0; right < m; right++) { // 移动子串右端点
    const c = s[right].codePointAt(0); // 右端点字母（移入子串）
    if (++cntS[c] === cntT[c]) {
      less--; // c 的出现次数从 < 变成 >=
    }
    while (less === 0) { // 涵盖：所有字母的出现次数都是 >=
      if (right - left < ansRight - ansLeft) { // 找到更短的子串
        // console.log(123, right, left, ansLeft, ansRight)
        ansLeft = left; // 记录此时的左右端点
        ansRight = right;
      }
      const x = s[left++].codePointAt(0); // 左端点字母（移出子串）
      if (cntS[x]-- === cntT[x]) {
        less++; // x 的出现次数从 >= 变成 <
      }
    }
  }
  return ansLeft < 0 ? "" : s.substring(ansLeft, ansRight + 1);
};

console.log('a'.codePointAt(0))
console.log(minWindow("ADOBECODEBANC", "ABC"))