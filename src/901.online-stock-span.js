var StockSpanner = function() {
  this.list = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  this.list.push(price)
  let ans = 1
  for(let i = this.list.length - 2; i >= 0; i--) {
    if (price >= this.list[i]) {
      ans++
    } else {
      return ans;
    }
  }
  return ans;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new Stoc\kSpanner()
 * var param_1 = obj.next(price)
 */