/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  // let ans = 0;
  // words.reverse()
  // for(let j = 0; j < words.length; j++) {
  //   words[j] = words[j].split('').reverse().join('')
  // }
  // for(let i = 0; i < words.length - 1; i++) {
  //   let str = words[i]
  //   if(words[i+1].slice(0, str.length) === str) {
  //     continue

  //   } else {
  //     ans += (words[i].length + 1)
  //   }
  // }
  // return ans + words[words.length - 1].length + 1

  words.sort((a, b) => b.length - a.length)
  // console.log(words)
  let arrStr = words[0] + '#'
  let ans = words[0].length + 1
  for(let i = 1; i < words.length ; i++) {
    if(arrStr.indexOf(words[i] + '#') == -1) {
      arrStr += words[i] + '#'
      ans += words[i].length + 1
    }
  }
  return ans;
};
console.log(minimumLengthEncoding(["time", "me",'e', "bell"])) // 10
console.log(minimumLengthEncoding(['me','time'])) // 5