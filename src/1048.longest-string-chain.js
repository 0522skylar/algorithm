/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
  let map = new Map()
  words.sort((a, b) => {
    return a.length - b.length
  })
  let ans = 0
  for (let i = 0; i < words.length; i++) {
    map.set(words[i], 1)
    for (let j = 0; j < words[i].length; j++) {
      const pre = words[i].substring(0, j) + words[i].substring(j + 1)
      if (map.has(pre)) {
        // console.log(pre, words[i])
        map.set(words[i], Math.max(map.get(words[i]), map.get(pre) + 1))
      }
      ans = Math.max(ans, map.get(words[i]))
    }
  }
  return ans
};

console.log(longestStrChain(["a","b","ba","bca","bda","bdca"]))