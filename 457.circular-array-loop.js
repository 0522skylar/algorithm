/**
 * @param {number[]} nums
 * @return {boolean}
 */

let f = new Array(50010).fill(0)
function find(x) {
    return x === f[x] ? f[x] : f[x] = find(f[x])
}
var circularArrayLoop = function(nums) {
    let n = nums.length;
    for(let i = 0; i < n; i++) {
        f[i] = i;
    }
    for(let i = 0; i < n; i++) {
        let x = i;
        let y = (i + nums[i] % n + n) % n;
        console.log(y, i)
        if(nums[x] * nums[y] < 0 || x === y) {
            continue;
        }
        x = find(x)
        y = find(y)
        if(x === y) {
            return true
        }
        f[x] = y;
    }
    return false
};
console.log(circularArrayLoop([2,-1,1,2,2])) // true
// console.log(circularArrayLoop([-1,2])) // false
// console.log(circularArrayLoop([-2,1,-1,-2,-2])) // false