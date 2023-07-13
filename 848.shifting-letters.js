
/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
  let arr = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let index = 0;
  let ans = []
  for(let i = s.length - 1; i>= 0; i--) {
    index += shifts[i]
    ans.push(arr[(s[i].charCodeAt() + index - 97) % 26])
  }
  return ans.reverse().join('');
};
console.log(shiftingLetters("abc", [3,5,9]))
console.log(shiftingLetters("aaa", [1,2,3]))