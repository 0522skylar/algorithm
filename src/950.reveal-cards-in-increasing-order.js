/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
  deck.sort((a, b) => b - a)
  // console.log(deck)
  let ans = [deck[0]]
  for (let i = 1; i < deck.length; i++) {
    const second = ans.pop()
    ans.unshift(second)
    ans.unshift(deck[i])
  }
  return ans;
};

console.log(deckRevealedIncreasing([17,13,11,2,3,5,7]))