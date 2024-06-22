/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  points.sort((a, b) => {
      if(a[0] === b[0]) {
          return a[1] - b[1]
      }
      return a[0] - b[0]
  })
  // console.log(points)
  // let ans = 0
  let map = []
  for (let i = 0; i < points.length; i++) {

    if (map.length != 0) {
      let count = 0
      let isAdd = true
      while(count < map.length) {
        let [x, y] = map[count]
        if (points[i][0] >= x  && points[i][1] <= y) {
          // x = points[i][0]
          isAdd = false
          map[count] = points[i]
        }
        else if (points[i][1] >= x && points[i][0] < x && points[i][1] < y) {
          isAdd = false
          map[count][1] = points[i][1]
        } else if (points[i][0] > x && points[i][0] <= y && points[i][1] > y) {
          isAdd = false
          // console.log(x, y)
          map[count] = [points[i][0], y]
        } else if (points[i][0] <= x  && points[i][1] >= y) {
          isAdd = false
          // map[count] = points[i]
        }
        count++
      }
      if (isAdd) {
        map.push(points[i])
      }
    } else {
      map.push(points[i])
    }
  }
  // console.log(map)
  return map.length
};

console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]))
console.log(findMinArrowShots([[1,2],[3,4],[5,6], [7,8]]))
console.log(findMinArrowShots([[1,2],[2,3],[3,4],[4,5]]))
console.log(findMinArrowShots([[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]]))