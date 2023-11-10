/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
  let arr = []
  for(let i = num.length - 1; i >= 0; i--) {
    let r = num[i] + k
    arr.push(r % 10)
    k = Math.floor(r / 10)
  }
  while(k) {
    arr.push(k % 10)
    k = Math.floor(k / 10)
  }
  
  return arr.reverse()
};
console.log(addToArrayForm([9,9,9,9,9,9,9,9,9,9], 1))