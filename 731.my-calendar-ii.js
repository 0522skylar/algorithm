var MyCalendarTwo = function() {
    this.list = [];
    this.arr = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
    for(let i = 0; i < this.arr.length; i++) {
        const [left, right] = this.arr[i];
        if(left < end && start < right) {
            return false
        }
    }
    for(let i = 0; i < this.list.length; i++) {
        const [left, right] = this.list[i];
        if(left < end && start < right) {
            this.arr.push([Math.max(left, start) , Math.min(right, end)])
        }
    }
    this.list.push([start, end])
    return true;
};

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */