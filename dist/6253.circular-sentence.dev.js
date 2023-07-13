"use strict";

/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function isCircularSentence(sentence) {
  var arr = sentence.split(" ");

  for (var i = 1; i < arr.length; i++) {
    if (arr[i][0] === arr[i - 1][arr[i - 1].length - 1]) {
      continue;
    } else {
      return false;
    }
  }

  if (arr[arr.length - 1][arr[arr.length - 1].length - 1] === arr[0][0]) {
    return true;
  } else {
    return false;
  }
};

console.log(isCircularSentence("leetcode exercises sound delightful"));
console.log(isCircularSentence("eetcode"));
console.log(isCircularSentence("Leetcode is cool"));