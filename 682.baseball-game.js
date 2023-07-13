/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let ans = 0;
    let arr = [];
    let count = 0;
    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case '+':
                arr[count] = arr[count - 1] + arr[count - 2];
                count++;
                break;
            case 'D':
                arr[count] = 2 * arr[count - 1];
                count++;
                break;
            case 'C':
                arr[count - 1] = 0;
                count--;
                break;
            default:
                arr[count] = Number(operations[i]);
                count++;
        }
        console.log(arr)
    }
    for (let j = 0; j < arr.length; j++) {
        ans += arr[j]
    }
    return ans;
};

console.log(calPoints(["5", "2", "C", "D", "+"]))
console.log(calPoints(["1"]))
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]))