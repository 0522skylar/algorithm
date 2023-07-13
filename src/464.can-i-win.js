
/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
    if(maxChoosableInteger >= desiredTotal) {
        return true;
    }
    if(maxChoosableInteger * (maxChoosableInteger + 1) / 2 < desiredTotal) {
        return false;
    }
    let mymap = new Map();
    const boolWin = (length, nowTarget, used, mymap) => {
        if(mymap.get(used)) {
            return mymap.get(used)
        }
        //由于maxChoosableInteger 不会大于 20，所以可以使用一个int型的各个位标记是否使用
        //myMap[used]用于标记在使用used（二进制各个位真值代表某个元素是否已经使用，比如used = “1101”代表使用了1，3，4）情况本次挑选是否能赢
        for(let i = 0; i < length; i++) {
            let cur = (1 << i); //第i位表示选择[1,2,3, maxChoosableInteger]选择i + 1这个值
            if((cur & used) === 0) { //这个值没有使用过

                //nowTarget <= i + 1是代表已经达到预期值
                //nowTarget - (i + 1)表示选择了i + 1
                //cur | used代表更新各个元素使用情况，使用i + 1，将used的第i位（从第到高）标记为1
                //!canWin(length, total - (i + 1), cur | used, myMap)表示的是对方选择输了

                if(nowTarget <= i + 1 || !boolWin(length, nowTarget - (i + 1), cur | used, mymap)) {
                    mymap.set(used, true)
                    return true;
                }
            }
        }
        mymap.set(used, false)
        return false;
    }
    return boolWin(maxChoosableInteger, desiredTotal, 0, mymap);
};

console.log(canIWin(10,11)) // false
console.log(canIWin(10,0)) // true
console.log(canIWin(10,1)) // true