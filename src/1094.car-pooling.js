/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
  let arr = new Array(10000).fill(0);
  for (let i = 0; i < trips.length; i++) {
    let start = trips[i][1];
    let end = trips[i][2];
    let numPassengers = trips[i][0];
    for (let j = start; j < end; j++) {
      if (arr[j] + numPassengers > capacity) {
        return false;
      }
      arr[j] += numPassengers;
    }
  }
  return true
};

console.log(carPooling([[2,1,5],[3,3,7]], 4)) // f
console.log(carPooling([[2,1,5],[3,3,7]], 5)) // t
console.log(carPooling([[2,1,5],[3,5,7]], 3)) // t