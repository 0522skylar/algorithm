/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(n) {
  const mod = 1000000007;
  if (n === 1) {
    return 10
  }
  let [a0,a1,a2,a3,a4,a6,a7,a8,a9] = Array(9).fill(1)
  while(n-- > 1) {
    [a0,a1,a2,a3,a4,a6,a7,a8,a9] = [
      (a4 + a6) % mod,
      (a8 + a6) % mod,
      (a7 + a9) % mod,
      (a4 + a8) % mod,
      (a0 + a3 + a9) % mod,
      (a0 + a1 + a7) % mod,
      (a2 + a6) % mod,
      (a1 + a3) % mod,
      (a2 + a4) % mod,
    ]
  }

  return (a0+a1+a2+a3+a4+a6+a7+a8+a9) % mod
};

console.log(knightDialer(2))
console.log(knightDialer(3131))