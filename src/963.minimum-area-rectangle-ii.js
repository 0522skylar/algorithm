/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaFreeRect = function (points) {
  let ans = Infinity
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length; j++) {
      for (let k = 0; k < points.length; k++) {
        for (let z = 0; z < points.length; z++) {
          let t = check(i, j, k, z, points);
          if (t != -1) {
            ans = Math.min(ans, t);
          }
        }
      }
    }
  }
  return Number.isFinite(ans) ? ans : 0;
};
const check = (i, j, k, l, arr) => {
  let x1 = arr[i][0],
    y1 = arr[i][1]
  let x2 = arr[j][0],
    y2 = arr[j][1]
  let x3 = arr[k][0],
    y3 = arr[k][1]
  let x4 = arr[l][0],
    y4 = arr[l][1]

  let check1 = (y1 - y2) * (x3 - x4) === (x1 - x2) * (y3 - y4)
  let check2 = (y1 - y3) * (x2 - x4) === (x1 - x3) * (y2 - y4)
  let check3 = (y1 - y2) * (y1 - y3) === (x1 - x2) * (x1 - x3)
  let check4 = (y1 - y2) * (y2 - y4) === (x1 - x2) * (x2 - x4)

  if (check1 && check2 && check3 && check4) {
    let dxc = x1 - x2
    let dyc = y1 - y2
    let c = Math.sqrt(dxc * dxc + dyc * dyc)
    let dxk = x1 - x3
    let dyk = y1 - y3
    let k = Math.sqrt(dyk * dyk + dxk * dxk)
    return c * k === 0 ? -1 : c * k
  }
  return -1
}

console.log(minAreaFreeRect([
  [1, 2],
  [2, 1],
  [1, 0],
  [0, 1]
])) // 2
console.log(minAreaFreeRect([
  [0, 1],
  [2, 1],
  [1, 1],
  [1, 0],
  [2, 0]
])) // 1