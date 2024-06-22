/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let arr  = []
  for (let i = 0; i < s.length; i++) {
    if (arr.length == 0) {
      arr.push(s[i])
      continue
    }
    if(s[i] == ')' && arr[arr.length - 1] === '(') {
      arr.pop()
      continue
    }
    if(s[i] == '}' && arr[arr.length - 1] === '{') {
      arr.pop()
      continue
    }
    if(s[i] == ']' && arr[arr.length - 1] === '[') {
      arr.pop()
      continue
    }
    arr.push(s[i])
  }
  return arr.length === 0
};