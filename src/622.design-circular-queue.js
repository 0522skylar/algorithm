/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.k = k
    this.arr = new Array(this.k)
    this.headIdx = -1
    this.tailIdx = -1
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) {
        return false
    }
    if (this.isEmpty()) {
        this.headIdx = 0
    }
    this.tailIdx = (this.tailIdx + 1) % this.k
    this.arr[this.tailIdx] = value
    return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()) {
        return false
    }
    if (this.headIdx === this.tailIdx) {
        this.headIdx = -1
        this.tailIdx = -1
    } else {
        this.headIdx = (this.headIdx + 1) % this.k
    }
    return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.isEmpty()) {
        return -1;
    }
    return this.arr[this.headIdx]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty()) {
        return -1;
    }
    return this.arr[this.tailIdx]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.headIdx === -1
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return ((this.tailIdx + 1) % this.k) === this.headIdx
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */