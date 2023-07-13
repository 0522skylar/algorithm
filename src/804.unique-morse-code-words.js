/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const arr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

  let ans = new Set()
  for(let i = 0; i < words.length; i++) {
    let str = ''
    for(let j = 0; j < words[i].length; j++) {
      str += arr[words[i][j].charCodeAt() - 97]
    }
    ans.add(str)
  }
  // console.log(ans)
  return ans.size
};
console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))
console.log(uniqueMorseRepresentations(["a"]))