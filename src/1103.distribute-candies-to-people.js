/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
  let arr = new Array(num_people).fill(0);
  let count = 1
  while(candies) {
    for(let i = 0; i < num_people; i++) {
      if(candies >= count) {
        arr[i] += count;
        candies -= count;
        count++

      } else {
        arr[i] += candies;
        candies = 0
        break
      }
    }
  }
  return arr
};
console.log(distributeCandies(7, 4))
console.log(distributeCandies(10, 3))