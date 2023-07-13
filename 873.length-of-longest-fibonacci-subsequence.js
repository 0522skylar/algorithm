/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) { // TEL
  let max =  2;
  let map = new Map();
  for(let i = 0; i < arr.length; i++) { // 用hash缓存加法结果,就不会超时
    map.set(arr[i], i)
  }
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      // let x = arr[i]
      // let y = arr[j]
      // let sum = x + y
      let x = i
      let y = j
      let cur = 2;
      while(y < arr.length && map.has(arr[x] + arr[y])) {
        let temp = y;
        y = map.get(arr[x] + arr[y]);
        x = temp
        // sum = x + y;
        cur++;
      }
      max = Math.max(max, cur)
    }
  }
  return max < 3 ?  0 : max
};

console.log(lenLongestFibSubseq([1,2,3,4,5,6,7,8]))
console.log(lenLongestFibSubseq([1,3,7,11,12,14,18]))