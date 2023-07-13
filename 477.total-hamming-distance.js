/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
    let count = 0;
    let m = nums.length;
    for(let i = 0; i <= 30; i++) {
        let n = 0;
        for (const val of nums) {
            console.log(val)
            n += (val >> i) & 1;
        }
        count += (m - n) * n;
    }
    return count;
};


var totalHammingDistance = function(nums) {
    let ans = 0, n = nums.length;
    for (let i = 0; i < 30; ++i) {
        let c = 0;
        for (const val of nums) {
            c += (val >> i) & 1;
        }
        ans += c * (n - c);
    }
    return ans;
};

console.log(totalHammingDistance([4,14,2])) // 6