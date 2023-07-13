/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  let sArr = s.split('')
  let tArr = t.split('')
  let sans = []
  let tans = []
  for(let i = 0; i < sArr.length; i++) {
    if (sArr[i] === '#') {
      sans.pop()
    } else {
      sans.push(sArr[i])
    }
  }
  for(let i = 0; i < tArr.length; i++) {
    if (tArr[i] === '#') {
      tans.pop()
    } else {
      tans.push(tArr[i])
    }
  }
  // console.log(sans)
  return tans.join('') === sans.join('')
};

console.log(backspaceCompare("ab#c", "ad#c"))
console.log(backspaceCompare("ab##", "c#d#"))
console.log(backspaceCompare("a#c", "b"))