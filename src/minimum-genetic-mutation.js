const { template } = require("express-art-template");

function minMutation(start, end, bank) {
    const bankSet = new Set(bank)
    if(!bankSet.has(end)) {
        return -1;
    }
    const DNA = ["A", "C", "G", "T"]
    let step = 0
    let queue = [start.split("")]
    // console.log('queue', queue);
    while(queue.length) {
      let tmp = []
      for(let char of queue) {
        if(char.join("") === end) {
            return step
        }
        for(let i = 0; i < 8; i++) {
          // 遍历每一位，然后替换
          for(let k of DNA) {
            const arr = [...char]
            arr[i] = k
            const newStr = arr.join("")
            if(bankSet.has(newStr)) {
              tmp.push(arr)
              bankSet.delete(newStr)
            }
          }
        }
      }
      if(tmp.length) {
        step++
      }
      queue = [...tmp]
    }
    return -1
};
console.log(minMutation("AACCGGTT", "AAACGGTA", ["AACCGGTA", "AACCGCTA", "AAACGGTA"])) // 1

function mymin(start, end , bank) {
    const bankSet = new Set(bank);
    if(!bankSet.has(end)) {
        return -1;
    }
    const myStr = ["A", "C", "G", "T"];
    let step = 0;
    let queue = [start.split("")];

    while(queue.length) {
        let tmp = [];
        for(let char of queue) {
            if(char.join("") == end) {
                return step;
            }
            for(let i = 0; i < 8; i++) {
                for(let k of myStr) {
                    const arr = [...char]
                    arr[i] = k;
                    const newStr = arr.join("");
                    if(bankSet.has(newStr)) {
                        tmp.push(arr);
                        bankSet.delete(newStr);
                    }
                }
            }
        }
    }
}
