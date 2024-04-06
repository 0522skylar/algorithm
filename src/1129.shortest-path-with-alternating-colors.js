/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
  const next = new Array(2).fill(0).map(() => new Array(n).fill(0).map(() => new Array()));
  for (const edge of redEdges) {
    next[0][edge[0]].push(edge[1]);
  }
  for (const edge of blueEdges) {
    next[1][edge[0]].push(edge[1]);
  }
  // [ [ [ 1 ], [ 2 ], [] ], [ [], [], [] ] ]
  const dist = new Array(2).fill(0).map(() => new Array(n).fill(Number.MAX_VALUE));
  // 两种类型的颜色最短路径的长度
  const queue = []
  dist[0][0] = 0; // 类型 0：路径最终到节点 xxx 的有向边为红色；
  dist[1][0] = 0; // 类型 1：路径最终到节点 xxx 的有向边为蓝色。
  queue.push([0,0])
  queue.push([0,1])
  while (queue.length) {
    const [x, t] = queue.shift();
    for (const y of next[1 - t][x]) {
      // 1-t: 类型0和类型1互换
      if (dist[1 - t][y] === Number.MAX_VALUE) {
        dist[1 - t][y] = dist[t][x] + 1;
        queue.push([y, 1 - t]);
      }
    }
  }
  const ans = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    ans[i] = Math.min(dist[0][i], dist[1][i]) === Number.MAX_VALUE ? -1 : Math.min(dist[0][i], dist[1][i]);
  }
  // console.log(next)
  return ans
};

// const mySort = (arr) => {
//   arr.sort((a, b) => a[0] > b[0]); // true  false
//   arr.sort((a, b) => a[0] - b[0]); // 0 -1 1
//   return arr;
// }
// console.log(mySort([3,1,4,5,2]))
console.log(shortestAlternatingPaths(3, [[0,1],[1,2]], []))
console.log(shortestAlternatingPaths(3, [[0,1]], [[1,2]]))
console.log(shortestAlternatingPaths(4, [[0,1], [0, 3]], [[2,1]]))