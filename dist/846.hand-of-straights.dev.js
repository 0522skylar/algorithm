"use strict";

/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function isNStraightHand(hand, groupSize) {
  var n = hand.length;

  if (n % groupSize !== 0) {
    return false;
  }

  hand.sort(function (a, b) {
    return a - b;
  });
  var cnt = new Map();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = hand[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var x = _step.value;
      cnt.set(x, (cnt.get(x) || 0) + 1);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = hand[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _x = _step2.value;

      if (!cnt.has(_x)) {
        continue;
      }

      for (var j = 0; j < groupSize; j++) {
        var num = _x + j;

        if (!cnt.has(num)) {
          return false;
        }

        cnt.set(num, cnt.get(num) - 1);

        if (cnt.get(num) == 0) {
          cnt["delete"](num);
        }
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return true;
};

console.log(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3));
console.log(isNStraightHand([1, 2, 3, 4, 3, 5], 2)); // false