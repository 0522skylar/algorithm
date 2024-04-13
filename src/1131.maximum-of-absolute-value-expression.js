/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function(arr1, arr2) { // ETL === exceeded time limit
  // let ans = 0
  // for (let i = 0; i < arr1.length; i++) {
  //   for (let j = i + 1; j < arr1.length; j++) {
  //     ans = Math.max(ans, Math.abs(arr1[i] - arr1[j]) + Math.abs(arr2[i] - arr2[j]) + Math.abs(i - j))
  //   }
  // }
  // 绝对值的6种情况
  // 1. a > b > 0   ==> a - b
  // 2. a > 0 > b   ==> a - b
  // 3. 0 > a > b   ==> a - b
  // 4. a < b < 0   ==> a - b
  // 5.a < 0 < b   ==> -a + b
  // 6. 0 < a < b   ==> -a - b

  let a = []
  let b = []
  let c = []
  let d = []
  for (let i = 0 ; i < arr1.length; i++) {
    let x = arr1[i]
    let y = arr2[i]
    a.push(x + y + i)
    b.push(x + y - i)
    c.push(x - y + i)
    d.push(x - y - i)
  }
  // let ans = Math.max(Math.max(...a), Math.max(...b), Math.max(...c), Math.max(...d))
  let fir = Math.max.apply(null, a) - Math.min.apply(null, a) 
  let sed = Math.max.apply(null, b) - Math.min.apply(null, b)
  let three = Math.max.apply(null, c) - Math.min.apply(null , c)
  let four = Math.max.apply(null, d) - Math.min.apply(null, d)
  
  return Math.max.apply(null, [fir, sed, three, four])
};

console.log(maxAbsValExpr([1,2,3,4], [-1,4,5,6]))
console.log(maxAbsValExpr([1,-2,-5,0,10], [0,-2,-1,-7,-4]))