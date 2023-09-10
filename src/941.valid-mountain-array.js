/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  if (arr.length < 3) {
    return false
  }
  let maxVal = Math.max(...arr)
  let index = arr.indexOf(maxVal)
  if(index === arr.length - 1 || index === 0) {
    return false
  }
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < maxVal && arr[i] < arr[i+1]) {
      continue
    } else if (i > index && arr[i-1] > arr[i]) {
      continue
    } else if (i ==index ){
      continue
    } else {
      return false
    }
  }
  return true
};
console.log(validMountainArray([0,3,2,1]))