/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */

var isNStraightHand = function(hand, groupSize) {
  const n = hand.length;
  if (n % groupSize !== 0) {
      return false;
  }
  hand.sort((a, b) => a - b);
  const cnt = new Map();
  for (const x of hand) {
      cnt.set(x, (cnt.get(x) || 0) + 1);
  }
  for (const x of hand) {
      if (!cnt.has(x)) {
          continue;
      }
      for (let j = 0; j < groupSize; j++) {
          const num = x + j;
          if (!cnt.has(num)) {
              return false;
          }
          cnt.set(num, cnt.get(num) - 1);
          if (cnt.get(num) == 0) {
              cnt.delete(num);
          }
      }
  }
  return true;
};

console.log(isNStraightHand( [1,2,3,6,2,3,4,7,8], 3))
console.log(isNStraightHand( [1,2,3,4,3,5], 2)) // false