/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
  const set = new Set(points.map(p => JSON.stringify(p)))
  let ans = Infinity
  const n = points.length
  for(let i = 0; i < n; i++) {
    for(let j = i+1; j < n; j++) {
      if(points[i][0] != points[j][0] && points[i][1] != points[j][1]) {
        const area = Math.abs(points[j][0] - points[i][0]) * Math.abs(points[j][1] - points[i][1])

        if(area > ans) {
          continue
        }
        if(set.has(JSON.stringify([points[i][0], points[j][1]])) && set.has(JSON.stringify([points[j][0], points[i][1]]))) {
          ans = Math.min(ans, area)
        }
      }
    }
  }
  return Number.isFinite(ans) ? ans : 0;
};

console.log(minAreaRect([[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]))


function minAreaRect1(points) {
  const ps = new Set(points.map((p) => JSON.stringify(p)));

  let ans = Infinity;
  const n = points.length;
  for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
          if (
              points[i][0] !== points[j][0] &&
              points[i][1] !== points[j][1]
          ) {
              const area = Math.abs(points[j][0] - points[i][0]) *
                  Math.abs(points[j][1] - points[i][1]);
              if (area > ans) continue;
              if (
                  ps.has(JSON.stringify([points[i][0], points[j][1]])) &&
                  ps.has(JSON.stringify([points[j][0], points[i][1]]))
              ) {
                  ans = Math.min(
                      ans,
                      area,
                  );
              }
          }
      }
  }
  return Number.isFinite(ans) ? ans : 0;
}


// 作者：masx200
// 链接：https://leetcode.cn/problems/minimum-area-rectangle/solutions/1824168/by-masx200-bc83/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。