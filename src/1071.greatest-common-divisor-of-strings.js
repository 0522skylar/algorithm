/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  let m = str1.length
  let n = str2.length

  if (str1 + str2 !== str2 + str1) {
    return ''
  }
  let a = Math.max(m,n)
  let b = Math.min(n, m)
  let temp = a % b
  while(temp != 0) {
    a = b
    b = temp
    temp = a % b
  }
  // console.log(temp, a, b)
  return str1.substring(0, b)
};

console.log(gcdOfStrings("ABCABC", "ABC"))
console.log(gcdOfStrings("ABABAB", "ABAB"))
console.log(gcdOfStrings("LEET", "CODE"))