
var TimeMap = function() {
  this.time = []
  this.map = new Map()
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  this.time.push(timestamp)
   if (this.map.has(key)) {
      let obj = this.map.get(key)
      obj[timestamp] = value
      this.map.set(key, obj)
   } else {
    let obj = {}
    obj[timestamp] = value
    this.map.set(key, obj)
   }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) { // TEL
   if (this.map.has(key)) {
    let obj = this.map.get(key)
    let arr = []
    for(let item in obj) {
      arr.push(item)
    }
    arr.sort((a, b) => b - a)
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= timestamp) {
        return obj[arr[i]]
      }
    }
    return ''
   } else {
    return ''
   }
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

var TimeMap = function() {
  this.map = new Map();
};

TimeMap.prototype.set = function(key, value, timestamp) {
  if (this.map.has(key)) {
      this.map.get(key).push([value, timestamp]);
  } else {
      this.map.set(key, [[value, timestamp]]);
  }
};

TimeMap.prototype.get = function(key, timestamp) { // 二分查找
  let pairs = this.map.get(key)
  if (pairs) {
      let low = 0, high = pairs.length - 1;
      while (low <= high) {
          let mid = Math.floor((high - low) / 2) + low;
          if (pairs[mid][1] > timestamp) {
              high = mid - 1;
          } else if (pairs[mid][1] < timestamp) {
              low = mid + 1;
          } else {
              return pairs[mid][0];
          }
      }
      if (high >= 0) {
          return pairs[high][0];
      }
      return "";
  }
  return "";
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/time-based-key-value-store/solutions/867666/ji-yu-shi-jian-de-jian-zhi-cun-chu-by-le-t98o/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。