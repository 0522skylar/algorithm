/**
 *  * 解题思路：
     * 1、将任务按类型分组，正好A-Z用一个int[26]保存任务类型个数
     * 2、对数组进行排序，优先排列个数（count）最大的任务，
     *      如题得到的时间至少为 retCount =（Maxcount-1）* (n+1) + 1 ==> A->X->X->A->X->X->A(X为其他任务或者待命)
     * 3、再排序下一个任务，如果下一个任务B个数和最大任务数一致，
     *      则retCount++ ==> A->B->X->A->B->X->A->B
     * 4、如果空位都插满之后还有任务，那就随便在这些间隔里面插入就可以，因为间隔长度肯定会大于n，在这种情况下就是任务的总数是最小所需时间
     *
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    if(n === 0) {
        return tasks.length;
    }
    let arr = new Array(26).fill(0);
    for(let i = 0; i < tasks.length; i++) {
        arr[tasks[i].charCodeAt() - 65] ++
    }
    arr.sort((a, b) => b - a);
    let maxVal = arr[0];
    let maxCount = 0;
    for(let i = 26; i >= 0; i--) {
        if(arr[i] != maxVal) {
            continue;
        }
        maxCount++;
    }
    return Math.max((maxVal - 1) * ( n + 1) + maxCount, tasks.length); 
};
console.log(leastInterval(["A","A","A","B","B","B"], 2)) // 8
console.log(leastInterval(["A","B","C","A","B","C"], 2)) // 6