/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    /*
    const dfs = (i, n, str, k) => { // js heap out of memory
        if(i == n) {
            return str[k-1]
        }
        let count = '';
        for(let j = 0; j < str.length; j++) {
            if(str[j] == '0') {
                count += '1'
            } else {
                count += '0'
            }
        }
        return dfs(i+1, n, str + count, k)
    }
    return dfs(1, n, '0', k)
    */
   if(n === 1) {
    return 0
   }
//    console.log(k, k+1 >> 2, k&1, n)

   return k & 1 ?  kthGrammar(n-1, Math.ceil(k / 2)) : 1 ^  kthGrammar(n-1, Math.ceil(k/2))
   return k & 1 ?  kthGrammar(n-1, k+1 >> 1) : 1 ^  kthGrammar(n-1, k+1>>1)
};

// console.log(kthGrammar(1,1))
// console.log(kthGrammar(2,1))
// console.log(kthGrammar(2,2))
console.log(kthGrammar(3,1))

// 0
// 01
// 0110
//01101001
//0110100110010110 ---- (n,k) -->k%2==0 -- > ~(n-1, k/2)
//                 ---- (n,k) -->k%2!=0 -- > (n-1, Math.floor(k/2))