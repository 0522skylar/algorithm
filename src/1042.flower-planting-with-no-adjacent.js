/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(n, paths) {
  let ans = new Array(n).fill(1)
  let map = new Map()
  for (const [p1, p2] of paths) {
    map.has(p1) ? map.set(p1, map.get(p1).concat(p2)) : map.set(p1, [p2])
    map.has(p2) ? map.set(p2, map.get(p2).concat(p1)) : map.set(p2, [p1])
  }

  for (const [key, value] of map) {
    const color = [1,2,3,4]
    for (const path of value) {
      const col = ans[path - 1]
      const index = color.indexOf(col)
      color.splice(index, 1)
    }

    ans[key - 1] = color[0]
  }
  return ans;
};

function gardenNoAdj(n, paths) {
  // 填颜色题目
  // 先将所有位置填上相同的颜色
  const res = new Array(n).fill(1);
  // 记录相邻位置关系
  const map = new Map();
  for (const [p1, p2] of paths) {
      map.get(p1) ? map.set(p1, map.get(p1).concat(p2)) : map.set(p1, [p2]);
      map.get(p2) ? map.set(p2, map.get(p2).concat(p1)) : map.set(p2, [p1]);
  }
  // 当前颜色取决于相邻元素剩下的颜色
  for (const [key, value] of map) {
      // 共4种颜色
      const colors = [1, 2, 3, 4];
      // 遍历相邻位置
      for (const path of value) {
          // 拿到相邻位置的颜色
          const color = res[path - 1];
          // 排除该颜色
          const index = colors.indexOf(color);
          colors.splice(index, 1);
      }
      res[key - 1] = colors[0];
  }
  return res;
};

// 作者：Veneno
// 链接：https://leetcode.cn/problems/flower-planting-with-no-adjacent/solutions/1299114/jian-dan-tian-yan-se-by-veneno-o-6nz1/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
console.log(gardenNoAdj(5, [[4,1],[4,2],[4,3],[2,5],[1,2],[1,5]]));