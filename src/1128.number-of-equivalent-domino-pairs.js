/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  let map = []
  for (let i = 0; i < dominoes.length; i++) {
    let flag = false
    for (let item of map) {
      let [a, b] = item
      if (a[0] === dominoes[i][0] && a[1] === dominoes[i][1]) {
        flag = true
        item[1]++
      } else if (a[0] === dominoes[i][1] && a[1] === dominoes[i][0]) {
        flag = true
        item[1]++
      }
    }
    if (!flag) {
      map.push([dominoes[i], 1])
    } 
    
  }
  let ans = 0
  for (let item of map) {
    // ans = Math.max(ans, item[1])
    if (item[1] >= 2) {
      ans += item[1] * (item[1] - 1) / 2
    }
  }
  return ans
};

console.log(numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]]))
console.log(numEquivDominoPairs([[1,1],[2,2],[1,1],[1,2],[1,2],[1,1]]))