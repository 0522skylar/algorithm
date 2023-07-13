/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function(n) {
    // 122112122122112112212112122112
    let str = '122';'1221121221221121122'
    let ans = 0;
    let falg = 1;
    for(let i = 0; i < n; i++) {
        if(str[i] === '1') {
            ans++;
        }
        if(i >= 2) {
            if(falg == 1) {
                falg = 2;
                if(str[i] === '1') {
                    str += '1';
                }
                else {
                    str += '11';
                }
                
            } 
            else {
                falg = 1;
                if(str[i] === '1') {
                    str += '2';
                }
                else {
                    str += '22';
                }
    
            }
        }
    }
    // console.log(str)
    return ans;    
};

console.log(magicalString(6)) // 3

console.log(magicalString(20)) //1
console.log(magicalString(9758)) // 4874