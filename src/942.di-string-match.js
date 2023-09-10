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