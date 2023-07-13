/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
  let ans = []
  let char = s[0]
  let count = 1;
  for(let i = 1; i < s.length; i++) {
    if(char === s[i]) {
      count++
    }
    if(char != s[i]) {
      if(count >= 3) {
        ans.push([i-count,i-1])
      }
      char = s[i]
      count = 1
    }
  }
  if(count >= 3) {
    ans.push([s.length-count,s.length-1])
  }
  return ans;
};
console.log(largeGroupPositions("abbxxxxzzy"))
console.log(largeGroupPositions("abc"))
console.log(largeGroupPositions("abcdddeeeeaabbbcd"))
console.log(largeGroupPositions("aaa"))