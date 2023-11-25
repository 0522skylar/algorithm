/**
 * @param {number} n
 * @return {string}
 */
var baseNeg2 = function(n) {
  if (n == 0) {
    return '0'
  }
  let ans = ''
  while (n) {
    let c = Math.abs(n % (-2)) 
    ans = (c == 0 ? '0' : '1') + ans
    n = (n - c) / (-2)
  }
  return ans;
};
console.log(baseNeg2(5))
