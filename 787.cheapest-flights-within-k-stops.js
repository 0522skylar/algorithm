/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPriceSelf = function(n, flights, src, dst, k) { // TEL
    let ans = Number.MAX_VALUE;
    let memo = new Array(n).fill(0).map(() => new Array(k + 2).fill(0))
    const dfs = (map, src, dst, k, cost) => {
        if(src === dst) {
            ans = Math.min(ans, cost)
            memo[src][k] = ans
            return
        }

        if(k < 0) {
            return
        }
        if(memo[src][k] != 0) {
            return
        }
        if(map.has(src)) {
            for(let i = 0; i < map.get(src).length; i++) {
                let next = map.get(src)[i]
                if(cost + next.sed >=  ans) {
                    continue
                }
                dfs(map, next.fir, dst, k - 1, cost + next.sed)
            }
            
        }
        
    }
    let map = new Map();
    for(let j = 0; j < flights.length; j++) {
        let item = flights[j];
        if(map.has(item[0])) {
            let mm = map.get(item[0]);
            mm.push({
                fir: item[1],
                sed: item[2]
            })
            map.set(item[0], mm)
        } else {
            map.set(item[0], [{ fir: item[1], sed:item[2] }])
        }
    }
    // console.log(map)
    dfs(map, src, dst, k, 0)
    return ans === Number.MAX_VALUE ? -1 : ans
};

var findCheapestPrice1 = function(n, flights, src, dst, k) {
    const INF = 10000 * 101 + 1;
    const f = new Array(k + 2).fill(0).map(() => new Array(n).fill(INF));
    f[0][src] = 0;
    for (let t = 1; t <= k + 1; ++t) {
        for (const flight of flights) {
            const j = flight[0], i = flight[1], cost = flight[2];
            f[t][i] = Math.min(f[t][i], f[t - 1][j] + cost);
        }
    }
    let ans = INF;
    for (let t = 1; t <= k + 1; ++t) {
        ans = Math.min(ans, f[t][dst]);
    }
    return ans == INF ? -1 : ans;
};

var findCheapestPrice2 = function(n, flights, src, dst, k) {
    const INF = 10000 * 101 + 1;
    let f = new Array(n).fill(INF);
    f[src] = 0;
    let ans = INF;
    for (let t = 1; t <= k + 1; ++t) {
        const g = new Array(n).fill(INF);
        for (const flight of flights) {
            const j = flight[0], i = flight[1], cost = flight[2];
            g[i] = Math.min(g[i], f[j] + cost);
        }
        f = g;
        ans = Math.min(ans, f[dst]);
    }
    return ans == INF ? -1 : ans;
};

const findCheapestPrice = (n, flights, src, dst, k) => {
    const INF = 10000* 101 + 1;
    let arr = new Array(n).fill(INF);
    arr[src] = 0;
    let ans = INF;
    for(let i = 1; i <= k + 1; i++) {
        const temp = new Array(n).fill(INF);
        for(const item of flights) {
            const j = item[0]
            let t = item[1];
            let cost = item[2];
            temp[t] = Math.min(temp[t], arr[j] + cost)
        }
        arr = temp
        ans = Math.min(ans, arr[dst])
    }
    return ans === INF ? -1 : ans;
}

console.log(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 1))
console.log(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 0))