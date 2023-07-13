/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString1 = function(s) {
    let map = new Map();
    for(let i = 0; i < s.length; i++) {
        if(map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1 )
        } else {
            map.set(s[i], 1)
        }
    }
    let maxVal = 0;
    for(let item of map) {
        // console.log(item)
        if(item[1] > maxVal) {
            maxVal = item[1]
        }
    }
    if(maxVal - (s.length - maxVal) > 1) {
        return ''
    } else {
        return 
    }
};

var reorganizeString = function(s) {
    const strArr = s.split('')
    let len = strArr.length;
    let threshold = Math.floor((len + 1) / 2)

    if (len === 1) {
        return s;
    }

    const map = new Map();

    for (const i of strArr) {
        map.set(i, (map.get(i) || 0) + 1)
    }

    const newMapArr = [...map]
    newMapArr.sort((a, b) => {
        return b[1] - a[1]
    })

    if(newMapArr[0][1] > threshold) {
        return ''
    }
    // console.log(newMapArr)
    const newStr = new Array(len)

    let idx = 0;

    for (let i = 0; i < newMapArr.length; i++) {
        while (newMapArr[i][1] --) {
            if (idx >= len) {
                idx = 1;
            }
            newStr[idx] = newMapArr[i][0]
            idx += 2;
        }
    }
    return newStr.join('')
}
console.log(reorganizeString("aab"))
console.log(reorganizeString("aaab"))