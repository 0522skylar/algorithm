"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @param {number[]} nums
 * @return {number}
 */

/*
var findShortestSubArray = function(nums) {
    // let arr = new Array(50000).fill(0);
    let map = new Map();

    let index = new Map();
    for(let i = 0; i < nums.length; i++) {
        // arr[nums[i]]++;
        if(map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
            let [fir, send] = index.get(nums[i]);
            index.set(nums[i], [fir, i]);
        } else {
            map.set(nums[i], 1)
            index.set(nums[i], [i, i]);
        }
    }

    let maxV = 0;
    for(let item of map) {
        if(item[1] > maxV) {
            maxV = item[1];
        }
    }
    let arr = []
    for(let item of map) {
        if(item[1] == maxV) {
            arr.push(item[0])
        }
    }

    let ans = Number.MAX_VALUE;
    console.log(index)
    for(let i = 0; i < arr.length; i++) {
        let [fir, send] = index.get(arr[i])
        ans = Math.min(ans, send - fir)
    }
    return ans + 1
};
*/
var findShortestSubArray = function findShortestSubArray(nums) {
  var mp = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = nums.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          i = _step$value[0],
          num = _step$value[1];

      if (num in mp) {
        mp[num][0]++;
        mp[num][2] = i;
      } else {
        mp[num] = [1, i, i];
      }
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

  var maxNum = 0,
      minLen = 0;

  for (var _i = 0, _Object$values = Object.values(mp); _i < _Object$values.length; _i++) {
    var _Object$values$_i = _slicedToArray(_Object$values[_i], 3),
        count = _Object$values$_i[0],
        left = _Object$values$_i[1],
        right = _Object$values$_i[2];

    if (maxNum < count) {
      maxNum = count;
      minLen = right - left + 1;
    } else if (maxNum === count) {
      if (minLen > right - left + 1) {
        minLen = right - left + 1;
      }
    }
  }

  console.log(mp);
  return minLen;
}; // console.log(findShortestSubArray([1,2,2,3,1]))
// console.log(findShortestSubArray([1,2,2,3,1,4,2]))


console.log(findShortestSubArray([2, 1])); // 1