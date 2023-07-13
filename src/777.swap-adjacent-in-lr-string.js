/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function(start, end) {
    let i = 0;
    let j = 0;
    let len = start.length;
    while(i < len || j < len) {
        while(i < len && start[i] == 'X') {
            i++
        }
        while(j < len && end[j] == 'X') {
            j++
        }
        if(start[i] != end[j]) {
            return false
        }
        if((start[i] == 'L' && i < j) || (start[i] == 'R' && i > j)) {
            return false
        }
        i++;
        j++;
    }
    return true
    // let n = start.length, i = 0, j = 0;
    // while (i < n || j < n) {
    //     while (i < n && start[i] == 'X') i++;
    //     while (j < n && end[j] == 'X') j++;
    //     if (i == n || j == n) {
    //         console.log(i, j)
    //         return i == j;
    //     }
    //     if (start[i] != end[j]) return false;
    //     if (start[i] == 'L' && i < j) return false;
    //     if (start[i] == 'R' && i > j) return false;
    //     i++; j++;
    // }
    // return i == j;
};

console.log(canTransform("RXXLRXRXL", "XRLXXRRLX")) // true
console.log(canTransform("RL", "LR")) // false

console.log(canTransform("LXXLXRLXXL","XLLXRXLXLX")) // false

console.log(canTransform("XXXXXLXXXX","LXXXXXXXXX")) // true
console.log(canTransform("RXR","XXR")) // false