/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
  let ans = 0;
  let left = -1;
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] != 0) {
      left = i;
      continue
    }
    let count = i + 1;
    let right = 0;
    while (count < seats.length) {
      if (seats[count] != 0) {
        right = count;
        break;
      }
      count++
    }
    if (count === seats.length) {
      ans = Math.max(ans, i - left)
    } else if (left != -1) {
      ans = Math.max(ans, Math.min(i - left, right - i))
    } else {
      ans = Math.max(ans, right - i)
    }
  }
  return ans;
};

var maxDistToClosest2 = function (seats) {
  let n = seats.length,
    max = 0,
    d = 0,
    pre
  for (let i = 0; i < n; i++) {
    if (seats[i] == 1) {
      if (pre == undefined) { // 左边有人
        d = i
      } else { // 存在两边有人
        d = i - pre >> 1
        // console.log(d)
      }
      pre = i
    } else if (i == n - 1) { // 右边无人
      d = i - pre
    }
    max = Math.max(max, d)
  }
  return max
};

console.log(maxDistToClosest2([1, 0, 0, 0, 1, 0, 1])) // 2
console.log(maxDistToClosest2( [1,0,0,0])) // 3
console.log(maxDistToClosest2( [0,1])) // 1
console.log(maxDistToClosest2( [1,0])) // 1