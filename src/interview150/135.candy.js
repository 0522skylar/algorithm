/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  let n = ratings.length;
  let leftArr = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      leftArr[i] = leftArr[i - 1] + 1;
    }
  }
  // console.log(leftArr)
  let ans = 0
  let right = 1
  for (let i = n - 1; i >= 0; i--) {
    if (i < n-1 && ratings[i] > ratings[i + 1]) {
      right++
    } else {
      right = 1
    }
    ans += Math.max(leftArr[i], right)
  }
  return ans;
};
console.log(candy([1, 0, 2])) // 5
console.log(candy([1, 1, 2]))// 4