/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let ansList = new ListNode(0)
  let temp = ansList
  let sign = 0
  while(l1 || l2 || sign) {
    let a = l1 ? l1.val : 0
    let b = l2 ? l2.val : 0
    console.log((a + b + sign))
    // temp = (a + b + sign) % 10
    
    let flag = new ListNode((a + b + sign) % 10)
    temp.next = flag
    temp = flag
    if (a + b + sign > 9) {
      sign = 1
    } else {
      sign = 0
    }
    if (l1 != null) {
        l1 = l1.next
    }
    if (l2 !== null) {
        l2 = l2.next
    }
  }
 
  
//   console.log(temp, l1, l2)
  return ansList.next
};