/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {

    let minx = Number.MAX_VALUE;
    let miny = Number.MAX_VALUE;
    if(ops.length === 0) {
        return m * n
    }
    for(let i = 0; i < ops.length ; i++) {
        let lenx = ops[i][0];
        let leny = ops[i][1];
        minx = Math.min(lenx, minx)
        miny = Math.min(leny, miny)
    }

    return minx * miny
};