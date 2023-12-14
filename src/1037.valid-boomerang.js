/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {

  let [x1, y1] = points[0]
  let [x2, y2] = points[1]
  let [x3, y3] = points[2]

  return (x2-x1)*(y3-y2) != (y2-y1) * (x3-x2)
};