/**
 * Initialize your data structure here.
 * @param {number} size
 */
 var MovingAverage = function(size) {
    this.size = size;
    this.arr = [];
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.arr.push(val);
    if(this.arr.length <= this.size) {
        let ans = this.arr.reduce((pre,next)=>pre+next);
        console.log(ans, this.arr.length, ans/this.arr.length)
        return ans / this.arr.length;
    }
    else {
        this.arr.shift();
        console.log(this.arr)
        let ans = this.arr.reduce((pre,next)=>pre+next);
        return ans / this.arr.length;
    }
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */