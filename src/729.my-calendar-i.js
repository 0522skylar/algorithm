var MyCalendar = function() {
    this.list = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    for(let i = 0; i < this.list.length; i++) {
        const [fir, send] = this.list[i];
        if(start < send && fir < end) {
            return false
        }
    }
    this.list.push([start, end])
    return true;

};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */