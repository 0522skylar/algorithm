/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    let n = 0;
    let temp = head;
    while(temp != null) {
        n++;
        temp = temp.next;
    }
    let quotient = Math.floor(n / k);
    let res = n % k;
    const park = new Array(k).fill(null);
    let cur = head;
    for(let i = 0; i < k && cur != null ; i++) {
        park[i] = cur;
        let parkSize = quotient + (i < res ? 1 : 0);
        for(let j = 1; j < parkSize; j++) {
            cur = cur.next
        }
        const next = cur.next;
        cur.next = null;
        cur = next
    }
    return park;
};