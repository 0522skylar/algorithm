/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var baseNeg2 = function(n) {
  if (n == 0) {
    return '0'
  }
  let ans = ''
  while (n) {
    let c = Math.abs(n % (-2)) 
    ans = (c == 0 ? '0' : '1') + ans
    n = (n - c) / (-2)
  }
  return ans;
};
var addNegabinary = function(arr1, arr2) {
  let sum1 = BigInt(0);
  for (let i = arr1.length - 1; i >= 0; i--) {
    sum1 += BigInt(Math.pow(-2, arr1.length - 1 - i) * arr1[i]) 
  }

  for (let i = arr2.length - 1; i >= 0; i--) {
    sum1 +=  BigInt(Math.pow(-2, arr2.length - 1 - i) * arr2[i]) 
  }
  let res = sum1 ? [] : [0];
  while (sum1) {
    const reminder = Math.abs(parseInt(sum1 % -2n));
    sum1 = BigInt((sum1 - BigInt(reminder)) / -2n);
    res.unshift(reminder);
  }
  return res;
};
console.log(addNegabinary([1,1,1,1,1], [1,0,1]))
console.log(addNegabinary([0], [0]))
console.log(addNegabinary([1], [0]))
console.log(addNegabinary([0], [1]))
console.log(addNegabinary([0], [1,0]))

