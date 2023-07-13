/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
  let arr = [];
  for(let i = 0; i < s.length; i++) {
    if(s[i] === c) {
      arr.push(i)
    }
  }
  let ans = [];
  for(let j = 0; j < s.length; j++) {
    let val = Math.abs(j-arr[0])
    for(let i = 1; i < arr.length; i++) {
      val = Math.min(val, Math.abs(arr[i] - j))
    }

    ans.push(val)
  }
  return ans;
};
console.log(shortestToChar("loveleetcode", "e"))
console.log(shortestToChar("aaab", "b"))