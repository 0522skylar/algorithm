/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
 var numberOfLines = function(widths, s) {
  let line = 1
  let count = 0
  for(let i = 0; i < s.length; i++) {
    count += widths[s[i].charCodeAt() - 97]
    if(count > 100) {
      line++;
      count = widths[s[i].charCodeAt() - 97];
    }
  }
  return [line, count]
};
console.log(numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "abcdefghijklmnopqrstuvwxyz"
))

console.log(numberOfLines([4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],  "bbbcccdddaaa"))