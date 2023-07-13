/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    let ans = 0;
    for(let i = left; i <= right; i++) {
        let num =parseInt(i).toString(2);
        let count = 0;
        for(let j = 0; j < num.length; j++) {
            if(num[j] === '1') {
                count++;
            }
        } 

        if(isParams(count)) {
            ans++;
        }
    }
    return ans;
};

const isParams = (num) => {
    if(num === 1) {
        return false
    }
    for(let i = 2; i*i <= num; i++) {
        if(num % i === 0) {
            return false
        }
    }
    return true;
}


const isOneNum = (i) => { // i是十进制
    let num =parseInt(i).toString(2); // 转为2进制
    let count = 0;
    for(let j = 0; j < num.length; j++) {
        if(num[j] === '1') {
            count++;
        }
    }
    return count; // 2进制中1的个数
}
console.log(countPrimeSetBits(6, 10))
console.log(countPrimeSetBits(10, 15))
