/**
 * @param {number} n
 * @return {number}
 */

var clumsy = function(n) {
  let arr = [1,2,6, 7]
  if (n <= 4) {
    return arr[n-1]
  }
  let ans = Math.floor((n * (n-1)) / (n-2)) + (n-3)
  n = n - 4
  // console.log(ans, 111, n)

  while(n > 0) {
    if (n > 3) {
      ans =  ans - ( Math.floor((n * (n-1)) / (n-2))) + (n-3)
    } else {
      if (n == 1) {
        ans = ans - 1
      } else if (n==2) {
        ans = ans - 2 * 1
      } else if (n==3) {
        ans = ans - 3 * 2 / 1
      }
    }
    n = n - 4
  }
  return ans
};

console.log(clumsy(4)) // 7
console.log(clumsy(5)) // 7
// console.log(clumsy(6))
// console.log(clumsy(7))
// console.log(clumsy(8))
// console.log(clumsy(9))
console.log(clumsy(10))