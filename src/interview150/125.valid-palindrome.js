/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let arr = []
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90) {
      arr.push(s[i].toLocaleLowerCase())
    }
    else if (s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122) {
      arr.push(s[i])
    } else if (s[i].charCodeAt() >= '0'.charCodeAt() && s[i].charCodeAt() <= '9'.charCodeAt()) {
      arr.push(s[i])
    }
  }
  console.log(arr)
  let str1 = arr.join('')
  let str2 = arr.reverse().join('')
  return str1 === str2
};

console.log(isPalindrome("0p"))