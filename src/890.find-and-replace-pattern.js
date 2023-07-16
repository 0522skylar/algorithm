/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */

const match1 = (word, pattern) => {
  const map = new Map();
  for (let i = 0; i < word.length; ++i) {
      const x = word[i], y = pattern[i];
      if (!map.has(x)) {
          map.set(x, y);
      } else if (map.get(x) !== y) { // word 中的同一字母必须映射到 pattern 中的同一字母上
          return false;
      }
  }
  return true;
}
var findAndReplacePattern = function(words, pattern) {

  let ans = []
  const match = (word, arr) => {
    let obj = {}
    for(let i = 0; i < word.length; i++) {
      if (obj[arr[i]]) {
        if (obj[arr[i]] === word[i]) {
          continue
        } else {
          return false
        }
      } else {
        obj[arr[i]] = word[i]
      }
    }
    let map = {}
    for(let i = 0; i < word.length; i++) {
      if (map[word[i]]) {
        if (map[word[i]] === arr[i]) {
          continue
        } else {
          return false
        }
      } else {
        map[word[i]] = arr[i]
      }
    }
    console.log(obj, map)
    return true
  }

  for(let i = 0; i < words.length; i++) {
    if (words[i].length != pattern.length) {
      continue
    }
    else {
      if (match(words[i], pattern)) {
        ans.push(words[i])
      }
    }
  }
  return ans;
};



console.log(findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"], "abb"))
console.log(findAndReplacePattern(["ef","fq","ao","at","lx"], "ya"))