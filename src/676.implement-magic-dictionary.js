var MagicDictionary = function() {
    this.arr = [];
};

/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
    this.arr = dictionary.concat();
};

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
    for(let i = 0; i < this.arr.length; i++) {
        if(searchWord.length != this.arr[i].length || searchWord===this.arr[i]) {
            continue;
        } else {
            let diff = 0;
            for(let j = 0; j < searchWord.length; j++) {
                if(searchWord[j] != this.arr[i][j]) {
                    diff++;
                }
            }
            if(diff === 1) {
                return true;
            }
        }
    }
    return false
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */

//  let magicDictionary = new MagicDictionary();
//  magicDictionary.buildDict(["hello", "leetcode"]);
//  console.log(magicDictionary.search("hello")); // 返回 False
//  console.log(magicDictionary.search("hhllo")); // 将第二个 'h' 替换为 'e' 可以匹配 "hello" ，所以返回 True
//  console.log(magicDictionary.search("hell")); // 返回 False
//  console.log(magicDictionary.search("leetcoded")); // 返回 False



 let magicDictionary = new MagicDictionary();
 magicDictionary.buildDict(["hello","hallo","leetcode","judge"]);
 console.log(magicDictionary.search("juage")); // 返回 False

// ["MagicDictionary", "buildDict", "search", "search", "search", "search", "search"]

// [[], [["hello","hallo","leetcode","judge"]], ["hello"], ["hallo"], ["hell"], ["leetcodd"], ["juage"]]