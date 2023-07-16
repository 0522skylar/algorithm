/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
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