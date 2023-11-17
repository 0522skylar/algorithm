/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let arr = s.split('')
  let i = 2
  while(i < arr.length) {
    let a = arr[i - 2]
    let b = arr[ i - 1]
    let c = arr[i]
    i++
    if (a+b+c === 'abc') {
      arr.splice(i-3, 3)
      i = 2
    }
    // console.log(arr, i)
  }
  // console.log(arr)
  return arr.length > 0 ? false : true
};
console.log(isValid("abcabcababcc"))
console.log(isValid("abccba"))
console.log(isValid( "aabcbc"))