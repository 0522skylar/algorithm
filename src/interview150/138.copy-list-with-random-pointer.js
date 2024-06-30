/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
  let ansList = new _Node(0)
  let ans = ansList
  let temp = head
  let map = new Map()
  while(temp) {
    ans.next = new _Node(temp.val)
    ans = ans.next
    map.set(temp, ans)
    temp = temp.next
  }
  temp = head
  ans = ansList.next
  while(temp) {
      if (temp.random !== null) {
          ans.random = map.get(temp.random)
      }
      temp = temp.next
      ans = ans.next
  }
  return ansList.next
};