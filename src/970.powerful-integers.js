/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
  let ans = new Set()
  for (let i = 0; i < Math.sqrt(bound); i++) {
    for (let j = 0; j < Math.sqrt(bound); j++) {
      const num =  Math.pow(x, i) + Math.pow(y, j)
      if (num <= bound) {
        ans.add(num)
      }
    }
  }
  return [...ans];
};