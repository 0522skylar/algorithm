/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let ans = [];
    let count = 0;
    let flag = 0;
    for(let i = 0; i < temperatures.length ; i++) {
        count = i + 1;
        flag = 0;
        while(count < temperatures.length) {
            if(temperatures[i] < temperatures[count]) {
                ans.push(count - i);
                flag = 1;
                break;
            }
            count++;
        }
        if(!flag) {
            ans.push(0)
        }
    }
    return ans;
};
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))
console.log(dailyTemperatures([30,40,50,60]))
console.log(dailyTemperatures([30,60,90]))