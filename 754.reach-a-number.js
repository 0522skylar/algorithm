/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
    let temp = Math.abs(target);
    let s = 0;
    let dis = 0;
    while(dis < temp) {
        s++;
        dis += s;
    }
    //1+2+3=6

    let dt = dis - temp; // 6 - 4
    if(dt % 2 == 0) {
        return s;
    } else {
        if(s % 2 === 0) {
            return s + 1;
        }
        else {
            return s + 2;
        }
    }
};

// 4  
// 0-->1  1--> -1  -1--> 2 2 -1 --

console.log(reachNumber(4))
console.log(reachNumber(5))
console.log(reachNumber(6))
console.log(reachNumber(7))
console.log(reachNumber(8))