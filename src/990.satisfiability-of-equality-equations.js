/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
  let pre = new Array(26).fill(0)
  const find = (x) => {
    while(pre[x] != x) {
      x = pre[x]
    }
    return x;
  }
  const mereg = (x, y) => {
    let a = find(x)
    let b = find(y)
    if (a != b) {
      pre[b] = a
    }
  }

  for(let i = 0; i < 26; i++) {
    pre[i] = i;
  }
  for(let i = 0; i < equations.length; i++) {
    if (equations[i][1] === '=') {
      mereg(equations[i][0].charCodeAt() - 97, equations[i][3].charCodeAt() - 97)
    }
  }
  for(let i = 0; i < equations.length; i++) {
    if (equations[i][1] === '!') {
      if (find(equations[i][0].charCodeAt() - 97) == find(equations[i][3].charCodeAt() - 97)) {
        return 0
      }
    }
  }
  return 1
};

console.log(equationsPossible(["a==b","b!=a"]))
console.log(equationsPossible(["b==a","a==b"]))