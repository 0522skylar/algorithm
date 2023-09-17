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

// 优化建图
var removeStones1 = function(stones) {
  const n = stones.length;
  const edge = {};
  const rec = {};
  for (const [i, [x, y]] of stones.entries()) {
      rec[x] ? rec[x].push(i) : rec[x] = [i];
      rec[y + 10001] ? rec[y + 10001].push(i) : rec[y + 10001] = [i];
  }

  for (const vec of Object.values(rec)) {
      const k = vec.length;
      for (let i = 1; i < k; i++) {
          edge[vec[i - 1]] ? edge[vec[i - 1]].push(vec[i]) : edge[vec[i - 1]] = [vec[i]];
          edge[vec[i]] ? edge[vec[i]].push(vec[i - 1]) : edge[vec[i]] = [vec[i - 1]];
      }
  }

  const vis = new Set();
  let num = 0;
  for (let i = 0; i < n; i++) {
      if (!vis.has(i)) {
          num++;
          dfs(i, vis, edge);
      }
  }
  return n - num;
};

const dfs = (x, vis, edge) => {
  vis.add(x);
  if (edge[x]){
      for (const y of edge[x]) {
          if (!vis.has(y)) {
              dfs(y, vis, edge);
          }
      }
  }
  
}

console.log(removeStones([[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]))
console.log(removeStones([[0,0],[0,2],[1,1],[2,0],[2,2]]))