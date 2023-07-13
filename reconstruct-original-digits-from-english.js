/**
 * @param {string} s
 * @return {string}
 */
 var originalDigits = function(s) {
    let template = ["e","g","f","i","h","o","n","s","r","u","t","w","v","x","z"];
    let arr = [];
    let ans = new Array(10).fill(0);
    template.map((item) => {
        arr[item] = 0;
    })
    for(let i = 0; i < s.length; i++) {
        arr[s[i]] ++;
    }
    if(arr['z']) {
        ans[0] = arr['z']
    }
    if(arr['w']) {
        ans[2] = arr['w'];
    }
    if(arr['u']) {
        ans[4] = arr['u']
    }
    
    if(arr['x']) {
        ans[6] = arr['x']
    }
    if(arr['g']) {
        ans[8] = arr['g']
    }
    ans[1] = arr['o'] -ans[4] - ans[2] - ans[0];

    ans[3] = arr['t'] - ans[2] - ans[8];

    ans[7] = arr['s'] - ans[6];
    ans[5] = arr['v'] - ans[7];
    ans[9] = (arr['n'] - ans[1] - ans[7])/2;
    console.log(ans);
    let str = '';
    for(let i = 0; i <= 9; i++) {
        if(ans[i] != 0) {
            let count = ans[i];
            while(count) {
                str += i;
                count--;
            }
        }
    }
    return str;
};

// console.log(originalDigits("owoztneoer")) // "012"
// console.log(originalDigits("fviefuro")) // "45"
// console.log(originalDigits("nnei"));// '9'
// console.log(originalDigits('"zerozero"'))// '00'
console.log(originalDigits('"esnve"'))// 7