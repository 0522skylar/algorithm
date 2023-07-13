/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let ans = [];
    for(let i = left; i <= right; i++) {
        let len = i; 
        let rem = i % 10;
        let flag = false
        let str = i.toString();
        if(str.indexOf(0) != -1) {
            continue;
        }
        while(rem !== 0) {
            if(i % rem !== 0) {
                flag = true
            }
            len = Math.floor(len / 10);
            rem = len % 10;
        }
        if(!flag) {
            ans.push(i);
        }
    }
    return ans;
};
console.log(selfDividingNumbers(1, 22))
console.log(selfDividingNumbers(47, 85))