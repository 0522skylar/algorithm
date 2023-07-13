/**
 * @param {character[]} chars
 * @return {number}
 */
//  var compress = function(chars) {
//     let arr = new Array(26).fill(0);
//     for(let i = 0; i < chars.length; i++) {
//         arr[chars[i].charCodeAt() - 97] ++;
//     }
//     // console.log(arr)
//     let ans = 0;
//     chars = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] == 1) {
//             chars.push(String.fromCharCode(i + 97))
//         }
//         if(arr[i] != 0 && arr[i] !=1){
//             chars.push(String.fromCharCode(i + 97))
//             chars.push( ...arr[i].toString().split(""))
//         }
//     }
//     console.log(chars)
//     return chars.length;
// };

var compress = function(chars) {
    let len = 0;
    for(let i = 0, cnt = 1; i < chars.length; i++, cnt++) {
        if(i + 1 === cnt.length || chars[i] != chars[i+1] ) {
            // console.log(chars[i], cnt);
            chars[len++] = chars[i];
            if(cnt > 1) {
                for(let ch = 0; ch < String(cnt).length; ch++) {
                    chars[len++] = String(cnt)[ch];
                }
            }
            cnt = 0;
        }
    }
    console.log(chars)
    return len;
}
console.log(compress(["a","a","b","b","c","c","c"])) // 6
console.log(compress( ["a","b","b","b","b","b","b","b","b","b","b","b","b"])) // 4
// console.log(compress( ["a"])) // 1