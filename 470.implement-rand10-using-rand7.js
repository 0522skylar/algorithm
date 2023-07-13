/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
 var rand10 = function() {
    let res = 0;
    while(true) {
        res = (rand7() - 1) * 7 + rand7();
        if(res <= 40) {
            break;
        }
    }
    return res % 10 + 1;
};