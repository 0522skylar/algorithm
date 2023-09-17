/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
  let ans = 0
  tokens.sort((a, b) => a - b)
  // console.log(tokens)
  let left = 0
  let right = tokens.length - 1
  while(left <= right) {
    if (power >= tokens[left]) {
      ans ++
      power -= tokens[left]
      left++
    } else {
      if (ans > 0) {
        power += (tokens[right] - tokens[left])
        left++
        right--
      } else {
        return ans
      }
    }
  }
  return ans
};
console.log(bagOfTokensScore([100], 50))
console.log(bagOfTokensScore([100, 200], 150))
console.log(bagOfTokensScore([100, 200, 300,400], 200))


/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
  tokens.sort((a,b) => a-b);
  if (tokens.length === 0 || power < tokens[0]) return 0;
  let res = 1;
  let p = power;
  let total = tokens.reduce((a,i) => a+i, 0);
  let l = 0,r = tokens.length-1;
  while (l < r && total > p) {
      if (total - tokens[r] <= p) return r-l;
      p += tokens[r] - tokens[l];
      total -= tokens[r] + tokens[l];
      l += 1;
      r -= 1;
  }
  return Math.max(res, r-l+1);
};

// 作者：臭氧层子
// 链接：https://leetcode.cn/problems/bag-of-tokens/solutions/1361070/js-by-marswiz-14e7/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。