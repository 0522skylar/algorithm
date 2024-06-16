/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let ans = []
  intervals.push(newInterval)
  intervals = intervals.sort((a, b) => a[0] - b[0])
  let temp = intervals[0]
  for (let i = 1; i < intervals.length; i++) {
    const [x, y] = intervals[i]
    if (x > temp[1]){
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

// console.log(insert([[1,3],[6,9]], [2,5]))
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))