
var RandomizedSet = function() {
  this.list = new Set()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.list.has(val)) {
    return false
  } else {
    this.list.add(val)
    return true
  }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (this.list.has(val)) {
    this.list.delete(val)
    return true
  } else {
    return false
  }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  let arr = [...this.list]
  return arr[Math.floor(Math.random() * arr.length)]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */