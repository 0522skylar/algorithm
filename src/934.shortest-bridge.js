/**
 * @param {number[][]} grid
 * @return {number}
 * 
 * 题目求解的是最小翻转次数，使得两个岛屿相连，实际上等价于求解两个岛屿之间的最短距离。

因此，我们可以先通过 DFS 将其中一个岛屿的所有点找出来，放到一个队列 q 中。然后通过 BFS 一层层向外扩展，直至碰到另一个岛屿，此时将当前扩展的层数作为答案返回即可。

在 DFS 和 BFS 搜索的过程中，我们直接将已经访问过的点标记为 2，这样就不会重复访问。

时间复杂度 O(n²)，空间复杂度 O(n²)。其中 n 为矩阵的行数或列数。
 */
var shortestBridge = function (grid) {
  const n = grid.length;
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1]
  ];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        const queue = [];
        dfs(i, j, grid, queue);
        let step = 0;
        while (queue.length !== 0) {
          const sz = queue.length;
          for (let k = 0; k < sz; k++) {
            const cell = queue.shift();
            let x = cell[0],
              y = cell[1];
            for (let d = 0; d < 4; d++) {
              let nx = x + dirs[d][0];
              let ny = y + dirs[d][1];
              if (nx >= 0 && ny >= 0 && nx < n && ny < n) {
                if (grid[nx][ny] === 0) {
                  queue.push([nx, ny]);
                  grid[nx][ny] = -1;
                } else if (grid[nx][ny] === 1) {
                  return step;
                }
              }
            }
          }
          step++;
        }
      }
    }
  }
  return 0;
}

const dfs = (x, y, grid, queue) => {
  if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] !== 1) {
    return;
  }
  queue.push([x, y]);
  grid[x][y] = -1;
  dfs(x - 1, y, grid, queue);
  dfs(x + 1, y, grid, queue);
  dfs(x, y - 1, grid, queue);
  dfs(x, y + 1, grid, queue);
};