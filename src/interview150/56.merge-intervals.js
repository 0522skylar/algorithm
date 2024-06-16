/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  let ans = []
  intervals = intervals.sort((a, b) => {
    return a[0] - b[0]
  })
  console.log(intervals)
  let temp = intervals[0]
  for (let i = 1; i < intervals.length; i++) {
    const [x, y] = intervals[i]
    if (x > temp[1]){
      console.log(x, temp)
      ans.push(temp)
      temp = intervals[i]
      continue
    }
    if (y > temp[1]) {
      temp[1] = y
    }
    if(x < temp[0]) {
      temp[0] = x
    }
  }
  ans.push(temp)
  return ans
};
// console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
// console.log(merge([[1,4],[4,5]]))
// console.log(merge([[1,4],[0,4]])) // [[0,4]]...
// console.log(merge([[1,4], [0,1]]))

// console.log(merge([[1,4],[1,5]]))
// console.log(merge([[1,4],[2,3]]))

console.log(merge([[0,0],[1,2],[5,5],[2,4],[3,3],[5,6],[5,6],[4,6],[0,0],[1,2],[0,2],[4,5]]))