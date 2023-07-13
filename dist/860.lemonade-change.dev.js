"use strict";

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function lemonadeChange(bills) {
  if (bills[0] != 5) {
    return false;
  }

  var five = 0;
  var ten = 0;

  for (var i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      five++;
    } else if (bills[i] === 10) {
      ten++;
      five--;
    } else if (ten > 0) {
      ten--;
      five--;
    } else {
      five -= 3;
    }

    if (five < 0) {
      return false;
    }
  }

  return true;
}; // console.log(lemonadeChange([5,5,5,10,20]))
// console.log(lemonadeChange([5,5,10,10,20]))
// console.log(lemonadeChange([5,5,5,5,20,20,5,5,20,5]))


console.log(lemonadeChange([5, 5, 5, 20, 5, 5, 5, 10, 20, 5, 10, 20, 5, 20, 5, 10, 5, 5, 5, 5])); // false