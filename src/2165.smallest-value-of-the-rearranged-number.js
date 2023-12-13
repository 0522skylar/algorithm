/**
 * @param {number} num
 * @return {number}
 */
var smallestNumber = function(num) {
  let arr = []
  let numArr = String(Math.abs(num)).split('').map(item => Number(item))
  if (num < 0) {
    arr = numArr.sort((a, b) => b - a)
  } else {
    arr = numArr.sort((a, b) => a - b)
  }
  let count = 0
  while(arr.length > 1 && arr[count] == 0) {
    count++
  }
  let str = '' + arr[count]
  arr.splice(count, 1)
  for (let i = 0; i < arr.length; i++) {
    str += arr[i]
  }
  return num > 0 ? Number(str) : -Number(str)
};

console.log(smallestNumber(310))
console.log(smallestNumber(-7605))