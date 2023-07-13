/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
    let ans = 0;
    for(let i = 2; i <= n; i++) {
        let str = i.toString()
        // console.log(str)
        str = str.replace(/[018]/g, "");
        if(str != '') {
            str = str.replace(/[2569]/g, "");
            if(str === "") {
                ans ++;
            }
        }
    }
    return ans;
};

console.log(rotatedDigits(10))