/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    let arr = sentence.split(" ");
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < dictionary.length; j++) {
            if(arr[i].indexOf(dictionary[j]) == 0) {
                arr[i] = dictionary[j];
            }
        }
    }
    return arr.join(" ")

};
console.log(replaceWords(["cat","bat","rat"], "the cattle was rattled by the battery"))
console.log(replaceWords(["a","b","c"], "aadsfasf absbs bbab cadsfafs"))