/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
// 常规解法
var shoppingOffers = function(price, special, needs) { // TLE
    let res = 0;
    let n = price.length;
    for(let i = 0; i < n; i++) {
        res += price[i] * needs[i] // 不使用优惠券的金额
    }
    for(let i = 0; i < special.length; i++) {
        let isVaild = true; // 是否能够使用优惠券
        for(let j = 0; j < n; j++) {
            if(needs[j] < special[i][j]) {
                isVaild = false;
            }
            needs[j] -= special[i][j] // 减去使用优惠券的数量
        }
        if(isVaild) { // 使用优惠券
            let len = special[0].length;
            // console.log(res, special[i][len - 1])
            // shoppingOffers(price, special, needs)其中i使用优惠券，其他不使用优惠券的金额
            res = Math.min(res, shoppingOffers(price, special, needs) + special[i][len - 1]) // 回溯
        }
        for(let j = 0; j < n; j++) {
            needs[j] += special[i][j] // 加上使用优惠券的数量
        }
    }
    return res;
};


var shoppingOffers = function(price, special, needs) {
    const memo = new Map();

    // 记忆化搜索计算满足购物清单所需花费的最低价格
    const dfs = (price, special, curNeeds, filterSpecial, n) => {
        if (!memo.has(curNeeds)) {
            let minPrice = 0;
            for (let i = 0; i < n; ++i) {
                minPrice += curNeeds[i] * price[i]; // 不购买任何大礼包，原价购买购物清单中的所有物品
            }
            for (const curSpecial of filterSpecial) {
                const specialPrice = curSpecial[n];
                const nxtNeeds = [];
                for (let i = 0; i < n; ++i) {
                    if (curSpecial[i] > curNeeds[i]) { // 不能购买超出购物清单指定数量的物品
                        break;
                    }
                    nxtNeeds.push(curNeeds[i] - curSpecial[i]);
                }
                if (nxtNeeds.length === n) { // 大礼包可以购买
                    minPrice = Math.min(minPrice, dfs(price, special, nxtNeeds, filterSpecial, n) + specialPrice);
                }
            }
            memo.set(curNeeds, minPrice);
        }
        return memo.get(curNeeds);
    }

    const n = price.length;

    // 过滤不需要计算的大礼包，只保留需要计算的大礼包
    const filterSpecial = [];
    for (const sp of special) {
        let totalCount = 0, totalPrice = 0;
        for (let i = 0; i < n; ++i) {
            totalCount += sp[i];
            totalPrice += sp[i] * price[i];
        }
        if (totalCount > 0 && totalPrice > sp[n]) {
            filterSpecial.push(sp);
        }
    }

    return dfs(price, special, needs, filterSpecial, n);
};


console.log(shoppingOffers([2,5], [[3,0,5],[1,2,10]], [3,2])) // 14
console.log(shoppingOffers([2,3,4], [[1,1,0,4],[2,2,1,9]], [1,2,1])) // 11