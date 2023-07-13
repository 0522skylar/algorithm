/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
    let set = new Set();
    set.add(computed(p1, p2))
    set.add(computed(p2, p3))
    set.add(computed(p3, p4))
    set.add(computed(p4, p1))
    set.add(computed(p1, p3))
    set.add(computed(p2, p4))

    let arr = [...set];
    if(arr.length === 2 && arr[0] != 0 && arr[1] != 0) {
        return true
    }
    return false
};


const computed = (a, b) => {
    const [x, y] = a;
    const [n, m] = b;
    let ans = Math.pow( x - n, 2) + Math.pow(y - m, 2)
    return ans;
}

console.log(validSquare([0,0], [1,1], [1,0], [0,1]))
console.log(validSquare([0,0], [1,1], [1,0], [0,12]))
console.log(validSquare([1,0], [-1,0], [0,1], [0,-1]))
console.log(validSquare([1,0],
    [0,1],
    [0,-1],
    [-1,0]))
