/**
 * @param {number} n
 * @return {number}
 */
// ETL
var monotoneIncreasingDigits = function(n) {

    const isAddNum = (num) => {
        let str = num.toString()
        if(str.indexOf(0) != -1) {
            return false;
        }
        let count = num % 10;
        while( count ) {
            num = Math.floor(num / 10);
            if(num % 10 > count) {
                return false;
            }
            count = num % 10;
        }
        return true;
    }
    for(let i = n; i >= 0; i--) {
        if(isAddNum(i)) {
            return i;
        }
    }
};

var monotoneIncreasingDigits2 = function(n) {
    let i = 1;
    let res = n;
    while( i <= Math.floor(res / 10)) {
        let n = Math.floor(res / i) % 100;
        i *= 10;
        if(Math.floor(n /  10) > n % 10) {
            res = Math.floor(res / i) * i -1;
        }
    }
    return res;
}
console.log(monotoneIncreasingDigits2(10)) // 9
console.log(monotoneIncreasingDigits2(1234)) // 1234
console.log(monotoneIncreasingDigits2(332)) // 299
console.log(monotoneIncreasingDigits2(120)) // 119