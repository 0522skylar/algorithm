/**
 * @param {number[]} nums
 * @return {number}
 */
/*
 var findMaximumXOR = function(nums) {// TEl
    let ans = 0;
    for(let i = 0; i < nums.length; i++) {
        for(let j = 1; j < nums.length; j++) {
            ans = Math.max(ans, nums[i] ^ nums[j]);
        }
    }
    return ans;
};

*/
var findMaximumXOR = function(nums) {
    //1、进制
    nums = nums.map((num)=>{ // 将[3,10,5,25,2,8]转换为二进制数组
        var str = new Array(32).fill(0)
        let i = 31
        while(num){
            str[i--] = num % 2  
            num = parseInt(num / 2) 
        }
        return str.join("")
    })
    
    //2、建树
    const tries = new TreeNode()
    for(let num of nums) {
        tries.insert(num)
    }
    console.log(tries)
    //3、匹配
    let res = 0
    for(let num of nums) {
        let tmp = []; // 保存二进制
        let cur = tries
        for(let digit of num) {
            const target = digit === "0" ? "1" : "0" 
            if(cur.children.has(target)) { //存在相异
                tmp.push(1) 
                cur = cur.children.get(target)  
            } 
            else {                        //不存相异
                tmp.push(0)
                cur = cur.children.get(digit) 
            }
        }
        let sum = 0; // 数组中每一项与数组中其他项异或的结果的最大值
       
        for(let digit of tmp) {
            sum = sum*2 + digit;
        }
        
        res = Math.max(res,sum);
    }
    return res 
};

class TreeNode{ // 字典树
    constructor(){
        this.word = null 
        this.children = new Map()
        this.num = 0
    }
    insert(word){
        let cur = this
        for(let c of word){
            if(!cur.children.has(c)) {
                cur.children.set(c,new TreeNode(c))
            }
            cur = cur.children.get(c) 
        }
        cur.word = word;
        cur.num++ //将得到的单词数++
    }
    search(word){
        let cur = this
        for(let c of word){
            if(!cur.children.has(c)) return 0
            cur = cur.children.get(c) 
        }
        return cur.num //代表word的个数
    }
}

//console.log(findMaximumXOR([3,10,5,25,2,8])) // 28
console.log(3 ^ 10)
console.log(3 ^ 5)
console.log(3 ^ 25)
console.log(3 ^ 2)
console.log(3 ^ 8)