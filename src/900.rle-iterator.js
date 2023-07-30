/**
 * @param {number[]} encoding
 */
/*
var RLEIterator = function(encoding) {
  this.ans = ''
  for (let i = 0; i < encoding.length - 1; i+=2) {
    let num = encoding[i]
    let char = encoding[i+1]

    for (let j = 0; j < Number(num); j++) {
      this.ans += char
    }
  }
  console.log(this.ans)
};
RLEIterator.prototype.next = function(n) {
  let arr = this.ans.split('')
  if (n >= this.ans.length) {
    return -1
  }
  let deleteArr = arr.splice(0, n)
  this.ans = arr.join('')
  return deleteArr[deleteArr.length - 1]
};
*/

/** 
 * @param {number} n
 * @return {number}
 */

var RLEIterator = function(encoding) {
  this.encoding = encoding
  this.index = 0
};

RLEIterator.prototype.next = function(n) {
  for (; this.index < this.encoding.length; this.index+=2) {
    if (n <= this.encoding[this.index]) {
      this.encoding[this.index] -= n;
      return this.encoding[this.index+1]
    } else {
      n -= this.encoding[this.index]
    }
  }
  return -1
};
/**
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(encoding)
 * var param_1 = obj.next(n)
 */

console.log(RLEIterator([3,8,0,9,2,5]).next(2))