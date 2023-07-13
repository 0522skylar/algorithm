"use strict";

/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function loudAndRich(richer, quiet) {
  var n = quiet.length;
  var arr = new Array(n).fill(0);

  for (var i = 0; i < n; i++) {
    arr[i] = [];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = richer[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var r = _step.value;
      arr[r[1]].push(r[0]); // r[1]前面有多少个富人
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

  console.log(arr);
  var ans = new Array(n).fill(-1);

  for (var _i = 0; _i < n; _i++) {
    dfs(_i, quiet, arr, ans);
  }

  return ans;
};

var dfs = function dfs(x, quiet, arr, ans) {
  if (ans[x] !== -1) {
    return;
  }

  ans[x] = x; // 最大的quiet一定是本身

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = arr[x][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var y = _step2.value;
      // 如果在x前面还有富人, 需要递归去找最小的quiet
      dfs(y, quiet, arr, ans);

      if (quiet[ans[y]] < quiet[ans[x]]) {
        // 如果还有比本身更小的quiet,就找到它并替换
        ans[x] = ans[y];
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
};

console.log(loudAndRich([[1, 0], [2, 1], [3, 1], [3, 7], [4, 3], [5, 3], [6, 3]], [3, 2, 5, 4, 6, 1, 7, 0]));