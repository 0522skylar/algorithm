/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let len= 0
  while(head !== null && len <= 10000) {
    len++
    head = head.next
    
  }
  // console.log(len)
  return len === 10001
};