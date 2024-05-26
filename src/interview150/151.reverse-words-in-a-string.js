/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let arr = s.split(' ')
  let ans = ''
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].length != 0) {
      ans += arr[i] + ' '
    }
  }
  return ans.slice(0, ans.length - 1)
};

console.log(reverseWords("the sky is blue"))
// the sky id    b   l  u e
// 0123456789 10 11 12  13 14
console.log(reverseWords("  hello world  "))
console.log(reverseWords("a good   example"))