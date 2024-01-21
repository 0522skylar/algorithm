/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
  let ans = new Array(n).fill(0)
  for (let i = 0; i < bookings.length; i++) {
    const [start, end, index] = bookings[i]
    for (let j = start; j <= end; j++) {
      ans[j-1] += index
    }
  
  }
  return ans;
};

console.log(corpFlightBookings([[1,2,10],[2,3,20],[2,5,25]], 5))