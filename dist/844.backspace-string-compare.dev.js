"use strict";

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function backspaceCompare(s, t) {
  var sArr = s.split('');
  var tArr = t.split('');
  var sans = [];
  var tans = [];

  for (var i = 0; i < sArr.length; i++) {
    if (sArr[i] === '#') {
      sans.pop();
    } else {
      sans.push(sArr[i]);
    }
  }

  for (var _i = 0; _i < tArr.length; _i++) {
    if (tArr[_i] === '#') {
      tans.pop();
    } else {
      tans.push(tArr[_i]);
    }
  } // console.log(sans)


  return tans.join('') === sans.join('');
};

console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("ab##", "c#d#"));
console.log(backspaceCompare("a#c", "b"));