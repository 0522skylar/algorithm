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


/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, n) {
  let arr = [cells.join('')], sign = -1
  while (n--) {
      cells = cells.map((cell, i) => i === 0 || i === cells.length - 1 ? 0 : Number(cells[i - 1] === cells[i + 1]))
      sign = arr.indexOf(cells.join(''))
      if (sign > -1) {
          break
      } else {
          arr.push(cells.join(''))
      }
  }
  return sign === -1 ? arr[arr.length - 1].split('') : arr[n % (arr.length - sign) + sign].split('')
};

// 作者：月亮
// 链接：https://leetcode.cn/problems/prison-cells-after-n-days/solutions/2340820/js-zhuang-kuang-shu-zu-si-lu-by-yue-lian-hkp3/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。