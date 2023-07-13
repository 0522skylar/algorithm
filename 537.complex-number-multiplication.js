/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function(num1, num2) {
    let arr1 = num1.split('+');
    let arr2 = num2.split('+');
    
    let res1 = Number(arr1[0]) * Number(arr2[0]);
    let res2 = Number(arr1[0]) * parseInt(arr2[1]);
    let res3 = parseInt(arr1[1]) * Number(arr2[0]);
    let res4 = parseInt(arr1[1]) * parseInt(arr2[1]);
    
    let ans1 = res1 - res4;
    let ans2 = res2 + res3;
    return ans1 + '+' + ans2 + 'i';
};

console.log(complexNumberMultiply("1+1i", "1+1i"))
console.log(complexNumberMultiply("1+-1i", "1+-1i"))