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
    let arr1 = [];
    let arr2 = [];
    if(l1) {
        arr1.push(l1.val)
        l1 = l1.next
    }
    if(l2) {
        arr2.push(l2.val)
        l2 = l2.next
    }
    let pre = null;
    let falg = 0;
    while(arr1.length || arr2.length || falg != 0) {
        let x = arr1.length ? arr1.pop() : 0;
        let y = arr2.length ? arr2.pop() : 0;
        let total = x+ y+ falg;
        falg = Math.floor(total / 10);
        let cur = new ListNode(total % 10)
        cur.next = pre
        pre = cur
    }
    return pre;
};
