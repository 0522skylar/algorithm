/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
  let two = 0
  let ans = 0
  for(let i = 0; i < s.length; i++) {
    if(s[i] == '0') {
      ans = Math.min(ans +1, two)
    } else { // 只能增加1 ,因为要递增
      two++
    }
  }
  return ans;
};


console.log(minFlipsMonoIncr("00110"))
console.log(minFlipsMonoIncr("010110"))