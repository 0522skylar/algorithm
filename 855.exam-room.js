/**
 * @param {number} n
 */
var ExamRoom = function(n) {
  this.seatList = [];
  this.length = n;
};

/**
* @return {number}
*/
ExamRoom.prototype.seat = function() {
  if (this.seatList.length === 0) {
      this.seatList.unshift(0);
      return 0
  }
  let max = this.seatList[0]
  let index = 0;
  for(let i = 1; i < this.seatList.length; i++) {
      const gap = Math.floor((this.seatList[i] - this.seatList[i-1]) / 2) // middle need / 2
      if(gap > max) {
          max = gap;
          index = this.seatList[i - 1] + gap;
      }
  }
  if(this.length - 1  - this.seatList[this.seatList.length - 1] > max) {
      index = this.length - 1
  }

  const inseart = this.seatList.findIndex(item => item > index)
  if(inseart === -1) {
      this.seatList.push(index)
  } else {
      this.seatList.splice(inseart, 0, index)
  }
  return index
};

/** 
* @param {number} p
* @return {void}
*/
ExamRoom.prototype.leave = function(p) {
  const index = this.seatList.findIndex(v => v === p);
  this.seatList.splice(index, 1);
};

/**
* Your ExamRoom object will be instantiated and called as such:
* var obj = new ExamRoom(n)
* var param_1 = obj.seat()
* obj.leave(p)
*/