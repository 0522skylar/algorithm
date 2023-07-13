/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  let ans = 0;
  people = people.sort((a, b) => {
    return b - a;
  })
  // console.log(people)
  let num = 0;
  for(let i = 0; i < people.length; i++) {
    if (people[i] < limit) {
      num = i;
      break;
    }
  }
  
  let count = people.length - 1;
  ans = num;
  console.log(ans, people)
  for(let i = num; i < people.length; i++) {
    if (i >= count) {
      break
    }
    if (people[i] + people[count] <= limit) {
      ans++
      count--
    } else {
      ans++
    }
  }
  return ans;
};

console.log(numRescueBoats([3,2], 3))
console.log(numRescueBoats([1,3,2], 3))
console.log(numRescueBoats([3,2,2,1],3)) // 3