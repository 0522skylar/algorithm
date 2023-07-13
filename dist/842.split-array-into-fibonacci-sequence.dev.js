"use strict";

/**
 * @param {string} num
 * @return {number[]}
 */
var splitIntoFibonacci = function splitIntoFibonacci(num) {
  var list = new Array().fill(0); // console.log(list);

  backTrack(list, num, num.length, 0, 0, 0);
  return list;
};

var backTrack = function backTrack(list, num, length, index, sum, prev) {
  if (index === length) {
    return list.length >= 3;
  }

  var currLong = 0;

  for (var i = index; i < length; i++) {
    if (i > index && num[index] === '0') {
      break;
    }

    currLong = currLong * 10 + num[i].charCodeAt() - '0'.charCodeAt(); // console.log(currLong)

    if (currLong > Math.pow(2, 31) - 1) {
      break;
    }

    var curr = currLong;

    if (list.length >= 2) {
      if (curr < sum) {
        continue;
      } else if (curr > sum) {
        break;
      }
    }

    list.push(curr);

    if (backTrack(list, num, length, i + 1, prev + curr, curr)) {
      return true;
    } else {
      list.splice(list.length - 1, 1);
    }
  }

  return false;
};

console.log(splitIntoFibonacci("1101111"));