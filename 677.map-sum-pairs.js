var MapSum = function() {
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    this.map.set(key, val)
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let sum = 0;
    this.map.forEach((item, key) => {
        if(key.indexOf(prefix) === 0) {
            sum += item;
        }
    })
    return sum;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

 let mapSum = new MapSum();
 mapSum.insert("apple", 3);  
 console.log(mapSum.sum("ap"));           // 返回 3 (apple = 3)
 mapSum.insert("app", 2);    
 console.log(mapSum.sum("ap"));           // 返回 5 (apple + app = 3 + 2 = 5)