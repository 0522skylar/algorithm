var MyLinkedList = function() {
    this.len = 0;
    this.head = new ListNode(0);
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this.len) {
        return -1
    }
    let cur = this.head;
    for(let i = 0; i <= index; i++) {
        cur = cur.next;
    }
    return cur.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    this.addAtIndex(0, val)
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    this.addAtIndex(this.len, val)
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index > this.len) {
        return ;
    }
    index = Math.max(0, index);
    this.len++;
    let pre = this.head;
    for(let i = 0; i < index; i++) {
        pre = pre.next;
    }
    let toadd = new ListNode(val);
    toadd.next = pre.next;
    pre.next = toadd;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this.len) {
        return;
    }
    this.len --;
    let pre = this.head;
    for(let i = 0; i < index; i++) {
        pre = pre.next;
    }
    pre.next = pre.next.next;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */