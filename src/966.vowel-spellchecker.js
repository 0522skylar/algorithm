/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function (wordlist, queries) {
  const map1 = {}, map2 = {}, map3 = {};
  wordlist.forEach((w1, i) => {
      const w2 = w1.toLowerCase();
      const w3 = aeiou(w2);
      // console.log(w3)
      map1[w1] = w1;
      map2[w2] = map2[w2] || w1;
      map3[w3] = map3[w3] || w1;
  });
  return queries.map(w1 => {
      const w2 = w1.toLowerCase();
      const w3 = aeiou(w2);
      return map1[w1] || map2[w2] || map3[w3] || '';
  })
};

const set = new Set('aeiou');
function aeiou(w) {
  let res = '';
  for (const c of w) {
      res += set.has(c) ? '*' : c;
  }
  return res;
}

console.log(spellchecker(["KiTe","kite","hare","Hare"], ["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"]))