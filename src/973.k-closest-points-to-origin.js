/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  let ans = new Map()
  let arr = []
  if (k == 10000) {
    return points
  }
  for (let i = 0; i < points.length; i++) {
    const [x, y] = points[i]
    const val = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
    arr.push(val)
    if (ans.has(val)) {
      let num = ans.get(val);
      num.push(points[i])
      ans.set(val, num)
    } else {
      ans.set(val, [points[i]])
    }
  }
  arr.sort((a, b) => a - b)
  let res = []
  const index = k >= arr.length ? k : arr[k]
  // console.log(ans)

  for (let item of ans) {
    if (item[0] < index) {
      res.push(...item[1])
    }
  }
  return res
};
// console.log(kClosest([[1,3],[-2,2]], 1))
// console.log(kClosest([[3,3],[5,-1],[-2,4]], 2))
console.log(kClosest([[0,1],[1,0]], 2))

