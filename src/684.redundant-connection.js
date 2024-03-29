/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    // let f = new Array(1005).fill(0)
    let f = {}
    let n = edges.length;

    function find(x) {
        return x === f[x] ? x : f[x] = find(f[x])
    }

    function init() {
        for (let i = 1; i <= n; i++) {
            f[i] = i;
        }
    }

    function join(u, v) {
        f[find(u)] = find(v);
    }

    init();
    for ([a, b] of edges) {
        if(find(a) === find(b)) {
            return [a, b]
        }
        join(a, b);
    }
    return null;
};

// 在一棵树中，边的数量比节点的数量少 11。如果一棵树有 nn 个节点，则这棵树有 n-1n−1 条边。这道题中的图在树的基础上多了一条附加的边，因此边的数量也是 nn。

// 树是一个连通且无环的无向图，在树中多了一条附加的边之后就会出现环，因此附加的边即为导致环出现的边。

// 可以通过并查集寻找附加的边。初始时，每个节点都属于不同的连通分量。遍历每一条边，判断这条边连接的两个顶点是否属于相同的连通分量。

// 1. 如果两个顶点属于不同的连通分量，则说明在遍历到当前的边之前，这两个顶点之间不连通，因此当前的边不会导致环出现，合并这两个顶点的连通分量。

// 2. 如果两个顶点属于相同的连通分量，则说明在遍历到当前的边之前，这两个顶点之间已经连通，因此当前的边导致环出现，为附加的边，将当前的边作为答案返回。
console.log(findRedundantConnection([
    [1, 2],
    [1, 3],
    [2, 3]
]))
console.log(findRedundantConnection([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 4],
    [1, 5]
]))