function Main(input){
    const S = input.split('');
    let sum = 0;
    for(let i = 0; i < S.length; i++){
        sum += Number(S[i]);
    }
    console.log(45 - sum);
}

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));// AC特定JavaScript输出
Main('023456789') // 1
Main('459230781') // 6