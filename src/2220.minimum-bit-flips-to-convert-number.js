/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
  let strA = start.toString(2)
  let strB = goal.toString(2)
  // console.log(strA, strB)
  if (strA.length !== strB.length) {
    let num = Math.abs(strA.length - strB.length)
    if (strA.length > strB.length) {
      while(num) {
        strB = '0' + strB
        num--
      }
    } else {
      while(num) {
        strA = '0' + strA
        num--
      }
    }
  }
  let ans = 0
  // console.log(strA, strB)
  for (let i = 0; i < strA.length; i++) {
    if (strA[i] != strB[i]) {
      ans++
    }
  }
  return ans;
};
console.log(minBitFlips(10,7))
console.log(minBitFlips(3,4))

