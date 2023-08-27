/**
 * @param {number} n
 * @return {number[]}
 */
var beautifulArray = function(n) {
  if(n == 1) {
    return [1]
  }
  return [...beautifulArray(Math.ceil(n/2)).map(i => 2*i-1), ...beautifulArray(Math.floor(n/2)).map(i => 2*i)];
};

console.log(beautifulArray(5))
console.log(beautifulArray(4))
console.log(beautifulArray(6))
console.log(beautifulArray(3))