
var MinStack = function() {
  let arr = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  arr.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    arr.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return arr[arr.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  let min = Number.MAX_VALUE
  for (let i = 0; i < arr.length; i++) {
    min = Math.min(min, arr[i])
  }
  return min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */