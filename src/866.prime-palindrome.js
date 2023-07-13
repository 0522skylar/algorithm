/**
 * @param {number} n
 * @return {number}
 */
var primePalindrome = function(n) {
  for (let x = n; x <= 10e8; ++x) {
      if (huiwen(x) && isPrime(x)) {
        return x;
      }
      if (10_000_000 < x && x < 100_000_000) {
        x = 100_000_000;
      }
                
  }
};

const huiwen = (x) => {
  let fan = String(x).split('').reverse().join('');
  if (fan === String(x)) {
    return true
  } else {
    return false
  }
}

const isPrime = (x) => {
  if (x < 2) {
      return false;
  }
  for (let i = 2; i * i <= x; ++i) {
      if (x % i === 0) {
          return false;
      }
  }
  return true;
}

console.log(primePalindrome(9989900))