/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
var brokenCalc = function(startValue, target) {
  // 先* 后 -      
  if (startValue < target) {
    let ans = 0
    while (startValue < target) {
      if (target % 2 == 0) {
        target /= 2
        ans++
      } else {
        target = (target + 1) / 2
        ans += 2
      }
    }
    return ans + startValue - target
  } else if (startValue == target) {
    return 0
  } else {
    return startValue - target
  }
};

// console.log(brokenCalc(3,3)) // 0
// console.log(brokenCalc(3,4)) // 3
// console.log(brokenCalc(3,5)) // 2
// console.log(brokenCalc(3,6)) // 1
// console.log(brokenCalc(3,7)) // 7

console.log(brokenCalc(2,3)) // 2
console.log(brokenCalc(5,8)) // 2
console.log(brokenCalc(3, 10)) // 3