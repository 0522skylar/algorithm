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

// 逆向思维
/**
 * @param {number[]} deck
 * @return {number[]}
 */

/*
** 这个题理解了半天，看了几个答案感觉说的都不是很清楚
** 题目的意思是：给你一个数组，你要把它打乱为某个顺序，然后通过他的操作步骤最后变为一个递增的有序数组
** 假设你打乱后的序列为a，按照他的步骤操作完后的数组为b，b是顺序递增的，操作完后a是空的了
** 现在要你通过顺序递增的b，反推出你原始的a

** a--->b的操作步骤是这样的：从a数组头拿一个放入b数组尾部，然后把a数组头拿一个放入a数组尾部
** b--->a反推操作就是：从a数组尾部拿一个放入a数组头，然后从b数组尾拿一个放入a数组头
*/
var deckRevealedIncreasing = function(deck) {
  // 题目的意思是你要把一堆牌排一个顺序，然后按照1，2，3的步骤操作完之后可以获得一个递增的排序
  let res = [];
  deck.sort((a,b)=>a-b);// 从小到大排序，到时候要通过这个反推初始的序列顺序

  while(deck.length > 0){
      if(res.length >0){
          // 从a尾部拿一个数，添加到a头部。
          let data = res.pop();
          res.unshift(data);
      }
      // 先从b尾部拿一个数，添加到a头部；
      let data2 = deck.pop();
      res.unshift(data2);
  }
  return res;
};

// 作者：为所欲为、灵异术
// 链接：https://leetcode.cn/problems/reveal-cards-in-increasing-order/solutions/784848/zhen-tong-su-yi-dong-jsmo-ni-by-luckyq-i368/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。