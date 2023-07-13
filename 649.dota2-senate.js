/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
    let flag = 0;
    // senate = senate.split('')
    let R = true;
    let D = true;
    while (R && D) {
        R = false;
        D = false;
        for (let i = 0; i < senate.length; i++) {
            if (senate[i] === 'R') {
                if (flag < 0) {
                    senate[i] = '0'
                } else {
                    R = true
                }
                flag++;
                // arrA.push(i);

            }
            if (senate[i] === 'D') {
                if (flag > 0) {
                    senate[i] = '0'
                } else {
                    D = true
                }
                flag--;
            }
        }

    }
    return R === true ? 'Radiant' : 'Dire'
    // if(arrA.length > arrB.length) {
    //     return 'Radiant'
    // } else if(arrA.length < arrB.length) {
    //     return 'Dire'
    // } else {
    //     return senate[0] === 'R' ? 'Radiant' : 'Dire'
    // }
};


var predictPartyVictory = function (senate) {
    var Radiant = [];
    var Dire = [];
    var Senate = Array.from(senate);
    var SenanteL = Senate.length; //数组长度
    //循环数组，找到R和D，并分别将他们push到相对应的数组中去
    for (var i = 0; i < SenanteL; i++) {
        if (Senate[i] == "R") {
            Radiant.push(i);
        } else {
            Dire.push(i);
        }
    }

    while (Radiant.length > 0 && Dire.length > 0) {
        //Radiant和Dire两个数组中分别存的是R和D在初始数组中的索引
        //比较两个数组首元素大小，数值小的说明其在初始数组中位于另一个的前面，那么，他就可以行使权力使对手无法发动技能
        //通俗的讲，谁数值小，谁先动手，另一个数值大的只能被干掉
        if (Radiant[0] < Dire[0]) {
            Radiant.push(Radiant[0] + SenanteL);
        } else {
            Dire.push(Dire[0] + SenanteL);
        }
        //shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值
        //用这个方法，当一轮结束之后，此时数组中存在的数据就是本轮存活下来的
        Radiant.shift();
        Dire.shift();
    }
    return Radiant.length > 0 ? "Radiant" : "Dire";
};
console.log(predictPartyVictory("RD"))
console.log(predictPartyVictory("RDD"))
console.log(predictPartyVictory("DDRRR")) // Dire