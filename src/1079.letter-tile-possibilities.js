/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
  let ans = new Set()
  const dfs = (arr) => {
    let s = 0
    for (let i = 0; i < 26; i++) {
      if (arr[i] > 0) {
        arr[i] --
        s += 1 + dfs(arr)
        arr[i]++
      }
    }
    return s
  }
  let cnt = new Array(26).fill(0)
  for (let i = 0; i < tiles.length; i++) {
    cnt[tiles[i].charCodeAt() - 'A'.charCodeAt()]++
  }
  // console.log(cnt)
  return dfs(cnt)
};
console.log(numTilePossibilities('AAB'))