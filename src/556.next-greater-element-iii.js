/**
 * @param {number} n
 * @return {number}
 */
/*
var nextGreaterElement = function(n) {
    let str =  String(n);
    for(let i = str.length - 2; i >= 0; i--) {
        if(str[i] >= str[i+1]) {
            continue
        }
        for(let j = str.length - 1; j > i; j--) {
            if(str[j] > str[i]) {
                let ss = str[j]
                str[j] = str[i]
                str[i] = ss
                break
            }
        }
        console.log(str, '-------')
        str = str.split('').reverse().join('')
        let ans = Number(str)
        if(ans <= n) {
            return -1
        }
        return (ans <= Number.MAX_VALUE) ? ans : -1
    }
    return -1;
};
*/

var nextGreaterElement = function (n) {
    const nums = n.toString().split('');
    const len = nums.length;
    let i = len - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    if (i < 0) return -1;
    let j = len - 1;
    while (nums[j] <= nums[i]) {
        j--;
    }
    
    [nums[i], [nums[j]]] = [nums[j], nums[i]];
    let l = i + 1, r = len - 1;
    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l++;
        r--;
    }
    return parseInt(nums.join('')) > Math.pow(2, 31) - 1 ? -1 : parseInt(nums.join(''));
};

// console.log(nextGreaterElement(12))
// console.log(nextGreaterElement(21))
// console.log(nextGreaterElement(1))
console.log(nextGreaterElement(101))