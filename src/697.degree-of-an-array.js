/**
 * @param {number[]} nums
 * @return {number}
 */
/*
var findShortestSubArray = function(nums) {
    // let arr = new Array(50000).fill(0);
    let map = new Map();

    let index = new Map();
    for(let i = 0; i < nums.length; i++) {
        // arr[nums[i]]++;
        if(map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
            let [fir, send] = index.get(nums[i]);
            index.set(nums[i], [fir, i]);
        } else {
            map.set(nums[i], 1)
            index.set(nums[i], [i, i]);
        }
    }

    let maxV = 0;
    for(let item of map) {
        if(item[1] > maxV) {
            maxV = item[1];
        }
    }
    let arr = []
    for(let item of map) {
        if(item[1] == maxV) {
            arr.push(item[0])
        }
    }

    let ans = Number.MAX_VALUE;
    console.log(index)
    for(let i = 0; i < arr.length; i++) {
        let [fir, send] = index.get(arr[i])
        ans = Math.min(ans, send - fir)
    }
    return ans + 1
};
*/
var findShortestSubArray = function(nums) {
    const mp = {};

    for (const [i, num] of nums.entries()) {
        if (num in mp) {
            mp[num][0]++;
            mp[num][2] = i;
        } else {
            mp[num] = [1, i, i];
        }
    }
    
    let maxNum = 0, minLen = 0;
    for (const [count, left, right] of Object.values(mp)) {
        if (maxNum < count) {
            maxNum = count;
            minLen = right - left + 1;
        } else if (maxNum === count) {
            if (minLen > (right - left + 1)) {
                minLen = right - left + 1;
            }
        }
    }
    console.log(mp)
    return minLen;
};

// console.log(findShortestSubArray([1,2,2,3,1]))
// console.log(findShortestSubArray([1,2,2,3,1,4,2]))
console.log(findShortestSubArray([2, 1])) // 1