/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const find = (piles, speed) => {
  let time = 0;
  for (const pile of piles) {
      const curTime = Math.floor((pile + speed - 1) / speed);
      time += curTime;
  }
  return time;
}
var minEatingSpeed = function(piles, h) {
  let left = 1;
  let right = 0;
  for (const pile of piles) {
    right = Math.max(right, pile);
  }
  while(left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (find(piles, mid) > h ) {
      left = mid + 1;
    } else if (find(piles, mid) <= h){
      right = mid;
    }
  }
  return left
};

console.log(minEatingSpeed([3,6,7,11], 8))
console.log(minEatingSpeed([30,11,23,4, 20], 5))
console.log(minEatingSpeed([30,11,23,4, 20], 6))
