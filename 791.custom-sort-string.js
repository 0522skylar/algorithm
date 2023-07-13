
/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
  // let ans = new Array(s.length).fill(0)
  // for(let i = 0; i < s.length; i++) {
  //   if(order.indexOf(s[i]) != -1) {
  //     // console.log(order.indexOf(s[i]))
  //     if(ans[order.indexOf(s[i])] != 0) {
  //       ans.push(s[i])
  //     } else {
  //       ans[order.indexOf(s[i])] = s[i]
  //     }
      
  //   } else {
  //     ans.push(s[i])
  //   }
  // }
  // ans = ans.filter((item) => item!=0)
  // let res = ''
  // for(let i = 0; i < ans.length; i++) {
  //   res += ans[i]
  // }
  // return res;

  let arr = new Array(27).fill(0)
  for(let i = 0; i < order.length; i++) {
    arr[order[i].charCodeAt() - 'a'.charCodeAt()] = i
  }
  let ans = s.split('').sort((a, b) => {
    return arr[a.charCodeAt() - 97] - arr[b.charCodeAt() - 97]
  })
  return ans.join('');
};

console.log(customSortString("cba", "abcd")) // cdba
console.log(customSortString("cbafg", "abcd"))
console.log(customSortString("kqep","pekeq")) // "kqeep"