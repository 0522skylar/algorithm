/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
// TEL
var prisonAfterNDays1 = function(cells, n) {
  // let ans= []
  for(let i = 0; i < n; i++) {
    let item = cells.concat()
    for(let j = 0; j < 8; j++) {
      if (j === 0 || j == 7) {
        cells[j]  = 0
      } else {
        if ((item[j - 1] && item[j+1]) || (!item[j-1] && !item[j+1])) {
          cells[j] = 1
        } else {
          cells[j] = 0
        }
      }
    }
  }
  return cells
};

var prisonAfterNDays = function(cells, n) {
  // let ans= []
  let num = n % 14
  if(!num) {
    num = 14
  }
  while(num--) {
    let temp = cells.concat()
    for(let i = 1; i < 7; i++) {
      cells[i] = (temp[i-1] ^ !temp[i+1])
    }
    cells[0] = 0
    cells[7] = 0
  }
  return cells
};

console.log(prisonAfterNDays([0,1,0,1,1,0,0,1], 7)) // [0,0,1,1,0,0,0,0]
console.log(prisonAfterNDays([1,0,0,1,0,0,1,0], 1000000000)) // [0,0,1,1,1,1,1,0]