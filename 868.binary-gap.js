/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
  let str = n.toString(2);
  let ans = 0;
  let count = -1;
  for(let i = 0; i < str.length; i++) {
    if (str[i] === '1') {
      if (count === -1) {
        count = i;
      } else {
        ans = Math.max(ans, i - count)
        count = i;
      }
    }
  }
  return ans;
};

console.log(binaryGap(22))
console.log(binaryGap(8))
console.log(binaryGap(5))