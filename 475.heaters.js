/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    let ans = 0;
    let j = 0;
    houses.sort((a, b) => a - b);
    heaters.sort((a, b) => a - b);
    for(let i = 0; i < houses.length; i++) {

        let curDistance = Math.abs(houses[i] - heaters[j]);
        while (j < heaters.length - 1 && Math.abs(houses[i] - heaters[j]) >= Math.abs(houses[i] - heaters[j + 1])) {
            j++;
            curDistance = Math.min(curDistance, Math.abs(houses[i] - heaters[j]));
        }
        ans = Math.max(ans, curDistance);
        // console.log(j, '------')
       
    }
    return ans;
}; 
// console.log(findRadius([1,2,3], [2])) // 1
// console.log(findRadius( [1,2,3,4], [1,4])) // 1
console.log(findRadius([1,7,9, 11, 12], [1,3,5]));// 7
// console.log(findRadius([1,5], [2])) // 3