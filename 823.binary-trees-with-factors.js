/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
  arr.sort((a, b) => a-b)
  const map = {}
  arr.forEach((item) => {
    map[item] = 1;
  })
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j <= i; j++) {
      if(map[arr[i] * arr[j]]) {
        let curx = map[arr[i]]
        let cury = map[arr[j]]
        if( i=== j) {
          map[arr[i] * arr[j]] += curx * cury;

        }
        else {
          map[arr[i] * arr[j]] += curx * cury * 2
        }
      }
    }
  }
  console.log(map)

  return Object.values(map).reduce((v, c) => c + v) % (10 ** 9 + 7)
};


console.log(numFactoredBinaryTrees([2,4]))
console.log(numFactoredBinaryTrees([2, 4, 5, 10]))