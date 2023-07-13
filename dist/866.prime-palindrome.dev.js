"use strict";

/**
 * @param {number} n
 * @return {number}
 */
var primePalindrome = function primePalindrome(n) {
  for (var x = n; x <= 10e8; ++x) {
    if (huiwen(x) && isPrime(x)) {
      return x;
    }
  }
};

var huiwen = function huiwen(x) {
  var fan = String(x).split('').reverse().join('');

  if (fan === String(x)) {
    return true;
  } else {
    return false;
  }
};

var isPrime = function isPrime(x) {
  if (x < 2) {
    return false;
  }

  for (var i = 2; i * i <= x; ++i) {
    if (x % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(primePalindrome(9989900));