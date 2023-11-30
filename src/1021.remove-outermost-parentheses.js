/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
  let str = ''
  let ans = []
  let temp = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      temp++
    }
    else if(s[i] === ')') {
      temp--
    }
    str += s[i]
    if (temp == 0) {
      ans.push(str.slice(1, str.length - 1))
      str = ''
    }
  }
  return ans.join('')
};

console.log(removeOuterParentheses("(()())(())"))
console.log(removeOuterParentheses("(()())(())(()(()))"))
console.log(removeOuterParentheses("()()"))