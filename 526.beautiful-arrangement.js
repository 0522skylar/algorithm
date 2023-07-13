/**
 * @param {number} n
 * @return {number}
 */

var countArrangement = function (n) {
    let visited = new Array(n + 1).fill(0);
    let count = 0;
    function backtrack(step, N, visited) {
        if (step == N + 1) {
            count++;
            return;
        }
        for (let i = 1; i <= N; i++) {
            //用过的不能再次使用，避免重复
            if (visited[i] === 0) {
                visited[i] = 1;
                //限制条件进行，剪枝
                if (i % step == 0 || step % i == 0) {

                    backtrack(step + 1, N, visited);
                }
                visited[i] = 0;
            }
        }
    }
    backtrack(1, n, visited);
    return count;
};

console.log(countArrangement(2))//2
console.log(countArrangement(3))//3
console.log(countArrangement(4))//8
console.log(countArrangement(5))//10