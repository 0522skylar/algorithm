/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
function expressiveWords(S, words) {
  let count = 0;
  for (const word of words) {
      if (isStretchy(S, word)) {
          count++;
      }
  }
  return count;
}

function isStretchy(s, word) {
  let i = 0, j = 0;
  while (i < s.length && j < word.length) {
      if (s[i] !== word[j]) {
          return false;
      }
      let countS = 1, countWord = 1;
      while (i < s.length - 1 && s[i] === s[i+1]) {
          i++;
          countS++;
      }
      while (j < word.length - 1 && word[j] === word[j+1]) {
          j++;
          countWord++;
      }
      if (countS === countWord || (countS > countWord && countS >= 3)) {
          i++;
          j++;
      } else {
          return false;
      }
  }
  return i === s.length && j === word.length;
}


console.log(expressiveWords("heeellooo", ["hello", "hi", "helo"])) // 1
console.log(expressiveWords("aaa", ["aaaa"])) // 0