/**
 * @param {string[]} words
 * @return {number}
 */
var numSpecialEquivGroups = function(words) {
  let ans = new Set()
  for (let i = 0; i < words.length; i++) {
    let count = new Array(52).fill(0) // two 26
    for (let j = 0; j < words[i].length; j++) {
      count[words[i][j].charCodeAt() - 'a'.charCodeAt() + 26 * (j % 2)]++
    }
    ans.add(count.join(''))
  }
  return ans;
};

console.log(numSpecialEquivGroups(["abcd","cdab","cbad","xyzz","zzxy","zzyx"]))