/**
 * @param {string[]} grid
 * @return {number}
 */
// 并查集
 const find = (fa, x) => {
  if (fa[x] !== x) {
      fa[x] = find(fa, fa[x])
  }
  return fa[x]
}
const merge = (fa, x, y) => {
  const fx = find(fa, x)
  const fy = find(fa, y)
  if (fx === fy) {
      return
  }
  fa[fx] = fy
}
var regionsBySlashes = function(grid) {
  let n = grid.length
  let arr = new Array(4 * n * n).fill(0).map((_, index) => index)
  // console.log(arr)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let idx = i * n + j
      if (i < n - 1) {
        const bottom = idx + n
        merge(arr, idx * 4 + 2, bottom * 4);
      }
      if (j < n - 1) {
        const right = idx + 1;
        merge(arr, idx * 4 + 1, right * 4 + 3);
      }
      if (grid[i][j] === '/') {
          merge(arr, idx * 4, idx * 4 + 3);
          merge(arr, idx * 4 + 1, idx * 4 + 2);
      } else if (grid[i][j] == '\\') {
          merge(arr, idx * 4, idx * 4 + 1);
          merge(arr, idx * 4 + 2, idx * 4 + 3);
      } else { // 空格
          merge(arr, idx * 4, idx * 4 + 1);
          merge(arr, idx * 4 + 1, idx * 4 + 2);
          merge(arr, idx * 4 + 2, idx * 4 + 3);
      }
    }
  }
  console.log(arr)
  let ans = 0
  arr.forEach((element, index) => {
      if (element === index) {
          ans++;
      }
  })
  return ans;
};

/**
 * 1  2  3  4 
 * 5  6  7  8
 * 9  10 11 12
 * 13 14 15 16
 */

console.log(regionsBySlashes([" /", "/ "])) // 2
console.log(regionsBySlashes([" /", "  "])) //1
console.log(regionsBySlashes(["/\\", "\\/"])) //5