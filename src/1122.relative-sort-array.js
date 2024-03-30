/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let ans = []
  let flag = []
  let map = new Map()
  for (let i = 0; i < arr2.length; i++) {
    map.set(arr2[i], 0)
  }
  for (let i = 0; i < arr1.length; i++) {
    if (map.has(arr1[i])) {
      map.set(arr1[i], map.get(arr1[i]) + 1)
    } else {
      flag.push(arr1[i])
    }
  }
  for (let item of map) {
    // console.log(item)
    for (let i = 0; i < item[1]; i++) {
      ans.push(item[0])
    }
  }
  flag.sort((a, b) => a - b)
  return [...ans, ...flag]
};

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))
console.log(relativeSortArray([28,6,22,8,44,17], [22,28,8,6]))