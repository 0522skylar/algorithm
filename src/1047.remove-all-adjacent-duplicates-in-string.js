/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates1 = function(s) {
  let arr = s.split('')
  let temp = 1
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == arr[i-1]) {
      temp++
    } else {
      if (temp != 1) {
        arr.splice(i - temp, temp)
        temp = 1
        i = 0
      }
    }
  }
  if (temp != 1) {
    arr.splice(arr.length - temp, temp)
    temp = 1
  }
  return arr.join('')
};

var removeDuplicates = (s) => {
  let arr = []
  for (let i = 0; i < s.length; i++) {
    if (arr.length == 0 || s[i] != arr[arr.length - 1]) {
      arr.push(s[i])
    } else {
      arr.pop()
    }
  }
  return arr.join('')
}

console.log(removeDuplicates("abbaca"))
console.log(removeDuplicates("aaaaaaaaa")) // a
console.log(removeDuplicates("aababaab"))