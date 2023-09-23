/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  let arr = {}
  for(let i = 0; i < order.length; i++) {
    arr[order[i]] = i
  }
  const flag = words.concat().sort((a, b) => {
    let n1 = a.length
    let n2 = b.length
    let min = Math.min(n1, n2)
    for(let j = 0; j < min; j++) {
      if (a[j] != b[j]) {
        return arr[a[j]] - arr[b[j]]
      }
    }
    return n1 - n2
  })
  // console.log(flag, words)
  return flag.join(',') === words.join(',')
};

console.log(isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz")) // false
console.log(isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz")) // true


var isAlienSorted = function(words, order) {
  const index = new Array(26).fill(0);
  for (let i = 0; i < order.length; ++i) {
      index[order[i].charCodeAt() - 'a'.charCodeAt()] = i;
  }
  for (let i = 1; i < words.length; i++) {
      let valid = false;
      for (let j = 0; j < words[i - 1].length && j < words[i].length; j++) {
          let prev = index[words[i - 1][j].charCodeAt() - 'a'.charCodeAt()];
          let curr = index[words[i][j].charCodeAt() - 'a'.charCodeAt()];
          if (prev < curr) {
              valid = true;
              break;
          } else if (prev > curr) {
              return false;
          }
      }
      if (!valid) {
          /* 比较两个字符串的长度 */
          if (words[i - 1].length > words[i].length) {
              return false;
          }
      }
  }
  return true;
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/verifying-an-alien-dictionary/solutions/1496288/yan-zheng-wai-xing-yu-ci-dian-by-leetcod-jew7/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。