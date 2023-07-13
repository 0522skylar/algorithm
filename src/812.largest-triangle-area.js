/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {

  let ans = 0;
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < i; j++) {
      for (let k = 0; k < j; k++) {
        let x1 = points[i][0], y1 = points[i][1];
        let x2 = points[j][0], y2 = points[j][1];
        let x3 = points[k][0], y3 = points[k][1];
        let abX = x2-x1
        let abY = y2-y1
        let acX = x3-x1
        let acY = y3-y1
        if (Math.abs(abX * acY - acX * abY) / 2.0 > ans) {
          ans = Math.abs(abX * acY - acX * abY)/ 2.0;
        }
    
      }
    }
  }
  return ans;
};

// console.log(largestTriangleArea([[0,0],[0,1],[1,0],[0,2],[2,0]]))
// console.log(largestTriangleArea([[1,0],[0,0],[0,1]]))
console.log(largestTriangleArea([[-35,19],[40,19],[27,-20],[35,-3],[44,20],[22,-21],[35,33],[-19,42],[11,47],[11,37]]))