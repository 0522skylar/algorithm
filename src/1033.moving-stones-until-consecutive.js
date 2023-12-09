/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function(a, b, c) {
  let arr = [a,b,c]
  arr.sort((a, b) => a - b)
  let maxVal = (arr[1] - arr[0] - 1) + arr[2] - arr[1] - 1

  let minVal = 0
  if (arr[2] - arr[1] == 1 && arr[1] - arr[0] != 1) {
    minVal =1
  }
  else if (arr[2] - arr[1] != 1 && arr[1] - arr[0] != 1) {
    minVal = Math.min(arr[2] - arr[1], arr[1] - arr[0]) - 1
    if (minVal > 2) {
        minVal = 2
    }
  } else if (arr[2] - arr[1] != 1 && arr[1] - arr[0] === 1) {
    minVal =1
  }
  

  return [minVal , maxVal]
};

console.log(numMovesStones(1,2,5))
console.log(numMovesStones(4,3,2))
console.log(numMovesStones(3,5,1)) // [1,2]
console.log(numMovesStones(1,9,5)) // [2, 6]