"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function canVisitAllRooms(rooms) {
  var key = [];

  var dfs = function dfs(roomId) {
    var arrkey = rooms[roomId];

    for (var i = 0; i < arrkey.length; i++) {
      var item = arrkey[i];

      if (key.indexOf(item) == -1) {
        key.push(item);
        dfs(item);
      }
    }

    return;
  };

  dfs(0); // console.log(key)

  key.push(0);
  return _toConsumableArray(new Set(key)).length === rooms.length;
};

console.log(canVisitAllRooms([[1], [2], [3], []]));
console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]));