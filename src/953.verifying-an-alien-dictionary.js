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