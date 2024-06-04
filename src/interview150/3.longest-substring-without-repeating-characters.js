/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let ans = 0
  let cur = []
  for(let i = 0; i < s.length; i++) {
    if (cur.indexOf(s[i]) === -1) {
      cur.push(s[i])
    } else {
      curindex = cur.indexOf(s[i])
      cur.splice(0, curindex + 1)
      cur.push(s[i])
    }
    // console.log(cur)
    ans = Math.max(ans, cur.length)
  }
  return ans
};

console.log(lengthOfLongestSubstring("abcabcbb")) // 3
console.log(lengthOfLongestSubstring("bbbbb")) // 1
console.log(lengthOfLongestSubstring("pwwkew")) // 3