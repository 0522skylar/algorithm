/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
  let ans = []
  for (let i = 0; i < s.length; i++) {
    if (ans.indexOf(s[i]) != -1) {
      continue
    }
    while(ans.length && ans[ans.length - 1] > s[i] && s.indexOf(ans[ans.length - 1], i + 1) > -1) {
      ans.pop()
    }
    ans.push(s[i])
  }
  return ans.join('')
};

console.log(smallestSubsequence("bcabc"))
console.log(smallestSubsequence("cbacdcbc"))