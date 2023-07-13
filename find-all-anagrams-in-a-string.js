/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
   let list = [];
   let slength = s.length;
   let plength = p.length;
   if(slength < p.length) {
       return list;
   }
   let counts = new Array(26).fill(0);
   let countp = new Array(26).fill(0);
   console.log(p[0].charCodeAt());
   for(let i = 0; i < plength; i++) {
        counts[s[i].charCodeAt() - 97]++;
       
        countp[p[i].charCodeAt() - 97]++;
   }
//    console.log(countp, counts)
   if(countp.toString() === counts.toString()) {
       list.push(0);
   }
   for(let i = plength; i < slength; i++) {
       counts[s[i].charCodeAt() - 97]++;
       counts[s[i-plength].charCodeAt() - 97]--;
       console.log(counts);
       console.log(s[i], s[i-plength])
       if(countp.toString() === counts.toString()) {
            list.push(i - plength + 1);
        }
   }
   return list;
};
console.log(findAnagrams("cbaebabacd", "abc"))