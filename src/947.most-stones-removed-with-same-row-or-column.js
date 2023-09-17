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


var removeStones = function(stones) {
  const dsu = new DisjointSetUnion();
  for (const [x, y] of stones) {
      dsu.unionSet(x, y + 10001);
  }
  return stones.length - dsu.numberOfConnectedComponent();
};

class DisjointSetUnion {
  constructor() {
      this.f = new Map();
      this.rank = new Map();
  }

  find (x) {
      if (!this.f.has(x)) {
          this.f.set(x, x);
          this.rank.set(x, 1);
          return x;
      }
      if (this.f.get(x) === x) {
          return x;
      }
      this.f.set(x, this.find(this.f.get(x)));
      return this.f.get(x);
  }

  unionSet (x, y) {
      let fx = this.find(x), fy = this.find(y);
      if (fx  && fy) {

      }
      if (fx === fy) {
          return;
      }
      if (this.rank.get(fx) < this.rank.get(fy)) {
          [fx, fy] = [fy, fx];
      }
      this.rank.set(fx, this.rank.get(fy) + this.rank.get(fx));
      this.f.set(fy, fx);
  }

  numberOfConnectedComponent () {
      let sum = 0;
      for (const [x, fa] of this.f.entries()) {
          if (x === fa) {
              sum++;
          }
      }
      return sum;
  }
}

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/most-stones-removed-with-same-row-or-column/solutions/560363/yi-chu-zui-duo-de-tong-xing-huo-tong-lie-m50r/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

console.log(removeStones([[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]))
console.log(removeStones([[0,0],[0,2],[1,1],[2,0],[2,2]]))