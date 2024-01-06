/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
  let newArr = arr.concat();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i+1, 0, 0)
      i++
    } 
  }
  if (arr.length > newArr.length) {
    arr.splice(newArr.length, arr.length - newArr.length)
  }
  return arr
};

console.log(duplicateZeros([0,1,7,6,0,2,0,7]))
console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]))