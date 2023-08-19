/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
  let arr = []
  for (let i = 0; i < s.length; i++) {
    // if (s[i] === '(' && arr.indexOf(')') != -1) {
    //   let index = arr.indexOf(')')
    //   arr.splice(index, 1)
    // } else 
    if(s[i] === ')' && arr.indexOf('(') != -1) {
      let index = arr.indexOf('(')
      arr.splice(index, 1)
    } else {
      arr.push(s[i])
    }
    console.log(arr)
  }
  return arr.length
};

// console.log(minAddToMakeValid("())"))
// console.log(minAddToMakeValid("((("))

console.log(minAddToMakeValid("()))((")) // 4