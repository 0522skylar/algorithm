/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
    // 最大公约数
    const gcd = (a, b) => b ? gcd(b, a % b) : a;
    // 最小公倍数
    const lcm = (a, b) => a * b / gcd(a, b);

    if(expression[0] === '-') { // 方便计算,没有前面为-的符号
        expression = "0/1" + expression;
    }
    else {
        expression = "0/1+" + expression;
    }

    let count = []; // 保存运算符

    for(let item of expression) {
        if(item === '-' || item === '+') {
            count.push(item);
        }
    }

    let lcmC = 1; // 计算分母的最小公倍数

    let fenArr = expression.split(/[-+]/);

    for(let item of fenArr) {
        let fir = item.split('/')[1];

        lcmC = lcm(fir, lcmC);
    }

    let fenzi = 0;
    let fenmu = lcmC;
    // console.log(lcmC, fenArr)
    for(let i = 1; i < fenArr.length; i++) {
        let [a, b] = fenArr[i].split('/');
        if(count[i - 1] === '-') {
            fenzi -= a * (fenmu / b); // 分数化为同分母分数
        }
        else {
            fenzi += a * (fenmu / b); 
        }
    }

    let y = gcd(Math.abs(fenzi), fenmu);//求出分子分母的最大公约数y,分子分母分别约去y
    return fenzi / y + '/' + fenmu / y;
};

console.log(fractionAddition("-1/2+1/2+1/3"))


/**
 * @param {string} e
 * @return {string}
 */
/*
 var fractionAddition = function (e) {

    // 最大公约数
    const gcd = (a, b) => b ? gcd(b, a % b) : a
    // 最小公倍数
    const lcm = (a, b) => a * b / gcd(a, b)
    // 处理成相同的格式
    if (e[0] == '-') e = '0/1' + e
    else e = '0/1+' + e
    // 运算符数组
    let cc = []
    for (let x of e) if (x == '-' || x == '+') cc.push(x)
    let l = 1
    // 分数数组
    let ff = e.split(/[-+]/)
    for (let x of ff) {
        let a = x.split('/')[1]
        l = lcm(a, l)
    }
    let fenzi = 0, fenmu = l
    // 从第二个分数开始，计算所有分数的计算结果
    for (let i = 1; i < ff.length; i++) {
        let [a, b] = ff[i].split('/')
        if (cc[i - 1] == '-') {
            fenzi -= a * (fenmu / b)
        } else {
            fenzi += a * (fenmu / b)
        }
    }
    // 求约数
    let y = gcd(Math.abs(fenzi), fenmu)
    // 化简分数并输入
    return fenzi / y + '/' + fenmu / y
};
*/

