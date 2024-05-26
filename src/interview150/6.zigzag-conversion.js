/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) {
    return s
  }
  let arr = new Array(s.length).fill(0).map(() => new Array(numRows).fill(0))
  let index = 0
  let i = 0
  let j = 0
  let jian = false
  while(index < s.length) {
    // console.log(i, j)
    arr[i][j] = s[index]
    if (jian) {
      i++
      j--
    } else {
      j++
    }
    if (j == 0) {
      jian = false
    }
    if (j == numRows - 1) {
      jian = true
    }
    index++
  }
  let ans = ''
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i] != 0) {
        ans += arr[j][i]
      }
    }
  }
  // console.log(arr)
  return ans
};
// console.log(convert("PAYPALISHIRING", 3))
console.log(convert("PAYPALISHIRING", 4))
console.log(convert("A", 1))