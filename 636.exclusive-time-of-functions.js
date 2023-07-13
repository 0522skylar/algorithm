/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    // 模拟栈数据结构
    let arr = [];
    // 保存结果
    let res = new Array(n).fill(0)
    // 遍历
    for(let i = 0; i < logs.length; i++) {
        // 分解每一项
        let splitArr = logs[i].split(':');
        // 取出哪个函数
        let id = Number(splitArr[0])
        // 取出时间
        let time = Number(splitArr[2])
        if(splitArr[1] === 'start') {
            // 如果是开始时间,保存到栈中
            arr.push([id, time]);
        }
        else {
            // 如果是结束时间,弹出最近一次开始的事件
            let pop = arr.pop();
            // 计算独立时间
            let interVal = time - pop[1] + 1;
            // 保存到结果中
            res[pop[0]] += interVal;
            // 如果栈不为空,还需要继续计算
            if(arr.length != 0) {
                // 减去当前函数占用时间
                res[arr[arr.length - 1][0]] -= interVal;
            }
        }
    }
    return res;
};

console.log(exclusiveTime(2, ["0:start:0","1:start:2","1:end:5","0:end:6"]))
// [3, 4]
console.log(exclusiveTime(1, ["0:start:0","0:start:2","0:end:5","0:start:6","0:end:6","0:end:7"]))
// [8]
console.log(exclusiveTime(2, ["0:start:0","0:start:2","0:end:5","1:start:6","1:end:6","0:end:7"])) // [7,`]
console.log(exclusiveTime(2, ["0:start:0","0:start:2","0:end:5","1:start:7","1:end:7","0:end:8"]))//[8, 1]
console.log(exclusiveTime(1, ["0:start:0","0:end:0"])) // 1