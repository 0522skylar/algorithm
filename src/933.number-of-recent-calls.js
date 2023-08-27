var RecentCounter = function() {
  this.map = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.map.push(t)
  if (t - 3000 < 0) {
    return this.map.length
  } else {
    for(let i = this.map.length - 1; i >= 0; i--) {
      if(this.map[i] + 3000 < t) {
        return this.map.length - i - 1
      }
    }
    return this.map.length
  }
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */