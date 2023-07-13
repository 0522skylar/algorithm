/**
 * @param {number} num
 * @return {number}
 */
 var findComplement = function(num) {
    let str = num.toString(2)
    let ansStr = ''
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '0') {
            ansStr+= '1';
        }
        else {
            ansStr += '0'
        }
    }
    return parseInt(ansStr, 2);
};
console.log(findComplement(5))