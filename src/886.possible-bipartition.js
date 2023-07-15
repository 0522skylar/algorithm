/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
  let father = new Array(4100).fill(-1)
  const find = (x) => {
    return x === father[x] ? x : father[x] = find(father[x])
  }
  for(let i = 0; i <= n * 2; i++) {
    father[i] = i;
  }
  for(let i = 0; i < dislikes.length; i++) {
    let item = dislikes[i]
    let a = find(item[0])
    let b = find(item[1])
    if (a === b) {
      return false
    }
    father[find(a + n)] = b;
    father[find(b + n)] = a;
  }
  return true
};
console.log(possibleBipartition(4, [[1,2],[1,3],[2,4]])) // t
console.log(possibleBipartition(3, [[1,2],[1,3],[2,3]])) // f
console.log(possibleBipartition(5, [[1,2],[2,3],[3,4],[4,5],[1,5]])) // f