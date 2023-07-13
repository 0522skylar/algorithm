/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
  const n = position.length;
  const cars = position.map((v, i) => [v, (target - v) / speed[i]]);
  console.log(cars)
  cars.sort((a, b) => a[0] - b[0]);

  let ans = 0, t = n;
  while (--t > 0) {
    // console.log(t)
    if (cars[t][1] < cars[t - 1][1]) { //如果汽车[t]来得早，它就不会被抓住
      ans++;
    }
    else { //汽车[t-1]与汽车[t]同时到达
      cars[t - 1] = cars[t];
    }
  }
  return ans + Number(t == 0);
};
console.log(carFleet(12,  [10,8,0,5,3], [2,4,1,1,3]))