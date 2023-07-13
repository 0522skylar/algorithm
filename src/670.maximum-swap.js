/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    if(num === 0) {
        return 0
    }
    let arr = (num + '').split('');
    let indexArr = new Array(arr.length).fill(0); // 与当前index相比,更大的数所在索引值
    let maxIndex = arr.length - 1;
    for(let i = arr.length - 1; i >= 0; i--) {
        if(Number(arr[i]) > Number(arr[maxIndex])) {
            maxIndex = i
        }
        indexArr[i] = maxIndex;
    }
    console.log(indexArr);
    for(let i = 0; i < arr.length ; i++) {
        let isVal = Number(arr[i]);
        let maxVal = Number(arr[indexArr[i]]);
        console.log(isVal, maxVal)
        if(isVal != maxVal) {
            arr[i] = maxVal;
            arr[indexArr[i]] = isVal;
            break;
        }
    }
    return Number(arr.join(''))
    
};

console.log(maximumSwap(2736))
console.log(maximumSwap(9973))
console.log(maximumSwap(98368))
console.log(maximumSwap(115))
console.log(maximumSwap(120))