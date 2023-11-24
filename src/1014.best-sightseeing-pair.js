/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
  // let ans = 0
  // for (let i = 0; i < values.length; i++) { // TEL
  //   for (let j = i + 1; j < values.length; j++) {
  //     ans = Math.max(ans, values[i] + values[j] + i - j)
  //     // console.log(i , j, ans)
  //   }
  // }
  // return ans;

  let left = values[0]
  let ans = Number.MIN_VALUE
  for (let i = 1; i < values.length; i++) {
    ans = Math.max(ans, left + values[i] - i)
    left = Math.max(left, values[i] + i)
  }
  return ans
};

console.log(maxScoreSightseeingPair([8,1,5,2,6]))