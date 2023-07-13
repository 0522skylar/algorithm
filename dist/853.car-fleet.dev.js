"use strict";

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function carFleet(target, position, speed) {
  var n = position.length;
  var cars = position.map(function (v, i) {
    return [v, (target - v) / speed[i]];
  });
  console.log(cars);
  cars.sort(function (a, b) {
    return a[0] - b[0];
  });
  var ans = 0,
      t = n;

  while (--t > 0) {
    // console.log(t)
    if (cars[t][1] < cars[t - 1][1]) {
      //如果汽车[t]来得早，它就不会被抓住
      ans++;
    } else {
      //汽车[t-1]与汽车[t]同时到达
      cars[t - 1] = cars[t];
    }
  }

  return ans + Number(t == 0);
};

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));