/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let ans = [];
    let n = arr.length;
    let l = 0;
    let r = n - 1;
    for(let i = 0; i < n - k; i++) {
        console.log(x - arr[l], arr[r] - x)
        if(Math.abs(x - arr[l]) <= Math.abs(arr[r] - x)) {
            r --;
        } else {
            l ++;
        }
    }
    for(let i = l; i <=r ; i++) {
        ans.push(arr[i]);
    }
    return ans;
};
console.log(findClosestElements([1,2,3,4,5], 4, 3))
console.log(findClosestElements([1,2,3,4,5], 4, -1))
console.log(findClosestElements([1,2,3,4,5], 2, 1))