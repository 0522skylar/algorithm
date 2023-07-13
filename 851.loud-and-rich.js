/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function(richer, quiet) {
  let n = quiet.length;
  const arr = new Array(n).fill(0)
  for(let i = 0; i < n; i++) {
    arr[i] = []
  }
  for(const r of richer) {
    arr[r[1]].push(r[0]) // r[1]前面有多少个富人
  }

  console.log(arr)

  const ans = new Array(n).fill(-1)
  for(let i = 0; i < n; i++) {
    dfs(i, quiet, arr, ans)
  }
  return ans;
};

const dfs = (x, quiet, arr, ans) => {
  if (ans[x] !== -1) {
    return
  }
  ans[x] = x; // 最大的quiet一定是本身
  for(const y of arr[x]) { // 如果在x前面还有富人, 需要递归去找最小的quiet
    dfs(y, quiet, arr, ans)
    if (quiet[ans[y]] < quiet[ans[x]]) { // 如果还有比本身更小的quiet,就找到它并替换
      ans[x] = ans[y]
    }
  }
}

console.log(loudAndRich([[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]],[3,2,5,4,6,1,7,0] ))