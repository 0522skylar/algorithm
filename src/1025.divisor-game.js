/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
  let sum = 0
  while(n > 1) {
    for (let j = 1; j < n; j++) {
      if (n % j == 0) {
        n = n - j;
        break
      }
    }
    sum++
  }
  return sum % 2 !== 0
};
console.log(divisorGame(2)) // t 
console.log(divisorGame(3)) // f
console.log(divisorGame(4)) // t
 // 4 / 2 -> 2 -> 1
 // 4 / 1 -> 3 -> 1 -> 1