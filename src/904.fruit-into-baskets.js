/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  let ans = 0;
  let map = new Map()
  let left = 0
  for(let i = 0; i < fruits.length; i++) {
    map.set(fruits[i], (map.get(fruits[i]) || 0) + 1)
    while(map.size > 2) {
      map.set(fruits[left], map.get(fruits[left]) - 1)
      if (map.get(fruits[left]) == 0) {
        map.delete(fruits[left])
      }
      left++;
    }
    ans = Math.max(ans, i - left + 1)
  }
  return ans
};

// console.log(totalFruit([1,2,1,1,2,3,4]))
// console.log(totalFruit([1,2,1])) // 3
// console.log(totalFruit([0,1,2,2])) // 3
// console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4])) // 5

// console.log(totalFruit([1,2,3,2,2])) // 4

console.log(totalFruit([1,0,1,4,1,4,1,2,3])) // 5

console.log(totalFruit([0,1,6,6,4,4,6])) // 5