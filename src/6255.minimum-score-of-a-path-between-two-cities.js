/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */


const find = (parent, index) => {
    if (parent[index] !== index) {
        parent[index] = find(parent, parent[index]);
    }
    return parent[index];
}

var minScore = function (n, roads) {
    let ans = Number.MAX_VALUE;
    const len = roads.length;
    let parent = new Array(n + 1).fill(0);
    for(let i = 1; i < n + 1; i++) {
        parent[i] = i;
    }
    for(let i = 0; i < len; i++) {
        parent[find(parent, roads[i][1])] = find(parent, roads[i][0])
    }
    for (let i = 0; i < len; i++) {
        const node1 = roads[i][0];
        if(ans > roads[i][2] && find(parent, node1) === find(parent, 1)) {
            ans = roads[i][2]
        }
    }
    return ans;
}; 

/*
var minScore = function (n, roads) {
    let ans = Number.MAX_VALUE;
    let mx = 0;
    let map = new Map();
    for (let i = 0; i < roads.length; i++) {
        let arr1 = map.get(roads[i][0]) || []
        arr1.push({
            fir: roads[i][1],
            sec: roads[i][2]
        })
        let arr2 = map.get(roads[i][1]) || []
        arr2.push({
            fir: roads[i][0],
            sec: roads[i][2]
        })
        map.set(roads[i][0], arr1)
        map.set(roads[i][1], arr2)
        mx = Math.max(mx, Math.max(roads[i][0], roads[i][1]))
    }

    let q = [];
    q.push(1);
    let visited = new Array(mx + 1).fill(false);
    visited[1] = true;
    while (q.length) {
        // let a = q[0];
        let a = q.pop();
        let temp = map.get(a);
        for (let i = 0; i < temp.length; i++) {
            if (!visited[temp[i].fir]) {
                q.push(temp[i].fir)
                visited[temp[i].fir] = true;
            }
            ans = Math.min(ans, temp[i].sec)
        }
    }
    return ans
};
*/
console.log(minScore(4, [
    [1, 2, 9],
    [2, 3, 6],
    [2, 4, 5],
    [1, 4, 7]
])) // 5
console.log(minScore(4, [
    [1, 2, 2],
    [1, 3, 4],
    [3, 4, 7]
])) // 2

console.log(minScore(20,
    [
        [18, 20, 9207],
        [14, 12, 1024],
        [11, 9, 3056],
        [8, 19, 416],
        [3, 18, 5898],
        [17, 3, 6779],
        [13, 15, 3539],
        [15, 11, 1451],
        [19, 2, 3805],
        [9, 8, 2238],
        [1, 16, 618],
        [16, 14, 55],
        [17, 7, 6903],
        [12, 13, 1559],
        [2, 17, 3693]
    ])) // 55


console.log(minScore(7,
    [
        [1, 3, 1484],
        [3, 2, 3876],
        [2, 4, 6823],
        [6, 7, 579],
        [5, 6, 4436],
        [4, 5, 8830]
])) // 579


console.log(minScore(13,
    [
        [2, 12, 1891],
        [10, 9, 4138],
        [11, 3, 2007],
        [1, 10, 9390],
        [12, 8, 1915],
        [6, 2, 1098],
        [5, 4, 2795],
        [3, 13, 4562],
        [9, 7, 9202],
        [4, 6, 6752],
        [8, 11, 1480],
        [7, 5, 9827]
])) // 1098

console.log(minScore(14,
    [
        [12, 7, 2151],
        [7, 2, 7116],
        [11, 14, 8450],
        [11, 2, 9954],
        [1, 11, 3307],
        [10, 7, 3561],
        [10, 1, 4986],
        [11, 7, 7674],
        [14, 2, 1764],
        [11, 12, 6608],
        [14, 7, 1070],
        [9, 8, 2287],
        [14, 12, 6559],
        [1, 2, 1450],
        [2, 12, 9165]
])) // 1070