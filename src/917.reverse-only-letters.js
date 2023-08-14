/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
  // const arr = s.split('-')
  let str =  ''
  let ans = ''
  for (let i = 0; i < s.length; i++) {
    if (/^[A-Za-z]+$/.test(s[i])) {
      str += s[i]
    }
  }
  console.log(str)

  let count = str.length - 1

  for (let i = 0; i < s.length; i++) {
    if (!/^[A-Za-z]+$/.test(s[i])) {
      ans += s[i]
    } else {
      ans += str[count--]
    }
  }
  return ans
};

console.log(reverseOnlyLetters("a-bC-dEf-ghIj"))
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"))