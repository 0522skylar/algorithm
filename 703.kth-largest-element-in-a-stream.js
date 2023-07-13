/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.arr = nums;
    this.k = k;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.arr.push(val);
    this.arr.sort((a, b) => b - a);
    return this.arr[this.k - 1];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
 let kthLargest = new KthLargest(3, [4, 5, 8, 2]);
 console.log(kthLargest.add(3));   // return 4 [2,3,4,5,8]
 console.log(kthLargest.add(5));   // return 5 [2,3,4,5,5,8]
 console.log(kthLargest.add(10));  // return 5 [2,3,4,5,5,8, 10]
 console.log(kthLargest.add(9));   // return 8 [2,3,4,5,5,8, 9, 10]
 console.log(kthLargest.add(4));   // return 8 [2,3,4, 4,5,5,8, 9, 10]
