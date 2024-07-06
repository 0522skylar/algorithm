/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let ansListleft = new ListNode(0, null)
  let curL = ansListleft
  let ansListright = new ListNode(0, null)
  let curR = ansListright
  while(head) {
    let temp = new ListNode(head.val, null)
    if (head.val < x) {
      
      curL.next = temp
      curL = curL.next
    } else {
      curR.next = temp
      curR = curR.next
    }
    head = head.next
  }
  curL.next = ansListright
  return ansListleft.next
};
