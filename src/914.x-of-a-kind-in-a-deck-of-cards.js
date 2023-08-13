/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  let map = new Map()
  for (let i = 0; i < deck.length; i++) {
    if (map.has(deck[i])) {
      map.set(deck[i], map.get(deck[i]) + 1)
    } else {
      map.set(deck[i], 1)
    }
  }
  let key = Number.MAX_VALUE
  
  for (let item of map) {
    // console.log(item)
    if (item[1] < key) {
      key = item[1]
    }
  }

  if (key < 2) {
    return false
  }
  for (let i = 2; i <= key; i++) {
    let count = 0;
    for (let item of map) {
      if (item[1] != i && item[1] % i !== 0) {
        count = 1
        break
      }
    }
    console.log(count)
    if (!count) {
      return true
    }
  }
  return false
};

// console.log(hasGroupsSizeX([1,2,3,4,4,3,2,1])) // true

// console.log(hasGroupsSizeX([1,1,2,2,2,2])) // true

// console.log(hasGroupsSizeX([1,1,1,1,2,2,2,2,2,2])) // true


console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3])) // false