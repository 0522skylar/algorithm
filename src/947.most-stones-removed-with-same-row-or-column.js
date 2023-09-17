/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
  let n = stones.length
  const edge = {} // 第i个点与哪些行列有关
  for(const [i, [x1, y1]] of stones.entries()) {
    for (const [j, [x2, y2]] of stones.entries()) {
      if (x1 === x2 || y1 === y2) {
        edge[i] ? edge[i].push(j) : edge[i] = [j]
      }
    }
  }
  // console.log(edge)

  let vis = new Set()
  let num = 0 // 不可移除石子的数量

  const dfs = (x, vis, edge) => {
    vis.add(x)
    for (let y of edge[x]) {
      if (!vis.has(y)) {
        dfs(y, vis, edge)
      }
     }
  }
  for (let i = 0; i < n; i++) {
    if(!vis.has(i)) {
      num ++
      dfs(i, vis, edge)
    }
  }
  return n - num
};

console.log(removeStones([[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]))
console.log(removeStones([[0,0],[0,2],[1,1],[2,0],[2,2]]))