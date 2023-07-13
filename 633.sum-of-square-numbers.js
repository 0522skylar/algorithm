/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let i = 0;
    let j = Math.floor(Math.sqrt(c));
    // console.log(j)
    while(i <= j) {
        let totel = i * i + j * j;
        if(totel < c) {
            i++;
        }
        else if(totel > c) {
            j--;
        }
        else {
            return true;
        }
    }
    return false;
};

console.log(judgeSquareSum(5))
console.log(judgeSquareSum(4))
console.log(judgeSquareSum(3))