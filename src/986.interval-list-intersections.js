/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
  if (firstList.length == 0 || secondList.length === 0) {
    return []
  }
  let ans = []
  let firIndex = 0
  let secIndex = 0

  while(firIndex < firstList.length && secIndex < secondList.length) {
    let [x, y] = firstList[firIndex]
    let [m, n] = secondList[secIndex]
    let MaxX = Math.max(x, m)
    let MinY = Math.min(y, n)
    if (MinY >= MaxX) {
      ans.push([MaxX, MinY])
    }
    if (n >= y) {
      firIndex++
    } else {
      secIndex++
    }
  }

  return ans
};

console.log(intervalIntersection([[0,2],[5,10],[13,23],[24,25]], [[1,5],[8,12],[15,24],[25,26]]))
console.log(intervalIntersection([[1,3],[5,9]], []))
console.log(intervalIntersection([], [[4,8],[10,12]]))
console.log(intervalIntersection([[1,7]], [[3,10]]))