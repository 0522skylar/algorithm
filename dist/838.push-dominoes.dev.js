"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function pushDominoes(dominoes) {
  var s = _toConsumableArray(dominoes);

  var n = s.length;
  var i = 0;
  var left = 'L';

  while (i < n) {
    var j = i;

    while (j < n && s[j] === '.') {
      j++;
    }

    var right = j < n ? s[j] : 'R';

    if (left === right) {
      while (i < j) {
        s[i++] = right;
      }
    } else if (left === 'R' && right === 'L') {
      var k = j - 1;

      while (i < k) {
        s[i++] = 'R';
        s[k--] = 'L';
      }
    }

    left = right;
    i = j + 1;
  }

  return s.join('');
};

console.log(pushDominoes("RR.L"));
console.log(pushDominoes(".L.R...LR..L.."));