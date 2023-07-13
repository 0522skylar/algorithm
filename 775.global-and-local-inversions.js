/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function(nums) { // TEL
    // let ans = 0;
    // for(let i = 0; i < nums.length; i++) {
    //     for(let j = i+1; j < nums.length; j++) {
    //         if(nums[i] > nums[j]) {
    //             ans++;
    //             // console.log(nums[i], nums[j])
    //             if(j === i + 1) {
    //                 ans--;
    //             }
    //         }
    //     }
    // }
    // console.log(ans)
    // return ans === 0

    for(let i = 0; i < nums.length; i++) {
        if(Math.abs(nums[i] - i) > 1) {
            return false
        }

    }
    return true
};

console.log(isIdealPermutation([1,0,2])) // t
console.log(isIdealPermutation([1,2,0])) // f
console.log(isIdealPermutation([0,1,2])) // t
console.log(isIdealPermutation([0,2,1])) // t
console.log(isIdealPermutation([2,1,0])) // f
console.log(isIdealPermutation([2,0,1])) // f
// 1, 0, 2---true
// 2, 1, 0
//0,1,2---true

//1,2,0----false
//2,1,0

// 1,3,2,0---false
// 3,2,1,0

//0,1,3,2---true
//0,1,2,3---true
//0,2,1,3---true
//0,2,3,1--
//0,3,2,1
//0,3,1,2


//1,2,3,0
//1,3,2,0
//1,0,2,3
//1,0,3,2

// 1,2,3,0---false
// 3,2,1,0
// console.log(isIdealPermutation([1,3,2,0]))