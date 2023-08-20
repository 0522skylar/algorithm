/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(arr, target) {
  let n = arr.length
  const mod = 1e9 + 7
  const map = new Array(301).fill(0)
  let ans = 0
  for (let i = 0; i < n; i++) {
    ans = (ans + (map[target - arr[i]] || 0)) % mod // 2 - 7 - 12 - 16 - 20
    for (let j = 0; j < i; j++) {
      const two = arr[j] + arr[i] 
      // 1+1 = 2 * 1 ------ [1,1]
      // 1+2 = 3 * 2 ------ [1,1,2]
      // 2+2 = 4 * 1 ------ [1,1,2, 2]
      map[two]++
    }
    // console.log(map.slice(0, 10), ans)
  }
  return ans;
};

// hash+贪心
// 最少步骤的解法
console.log(threeSumMulti([1,1,2,2,3,3,4,4,5,5], 8))