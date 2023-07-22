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


// numSpecialEquivGroups2使用排序
var numSpecialEquivGroups2 = function(A) {
  let set = new Set()
  for (let i = 0; i < A.length; i++) {
      let item = A[i];
      let odd = []
      let even = []
      for (let k = 0; k < item.length; k++) {
          if (k % 2 == 0) {
              odd.push(item[k]) 
          } else {
              even.push(item[k])
          }
      }
      set.add(odd.sort().join('') + even.sort().join(''))
  }
  return set.size
};

console.log(numSpecialEquivGroups(["abcd","cdab","cbad","xyzz","zzxy","zzyx"]))