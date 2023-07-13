/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  let map = new Map()
  paragraph = paragraph.replace(/[!?',;.]/g, " ")
  let strArr = paragraph.toLowerCase().split(" ")
  // console.log(strArr)
  for(let item of strArr) {
    if(item.length === 0) {
      continue
    }
    let val = map.has(item) ? map.get(item) + 1 : 1
    map.set(item, val)
  }
  let ans = '';
  let num = 0
  for(let key of map) {
    if(banned.indexOf(key[0]) === -1) {
      if(key[1] > num) {
        num = key[1]
        ans = key[0]
      }
    } 
  }
  return ans
};

console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]))

console.log(mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"]))