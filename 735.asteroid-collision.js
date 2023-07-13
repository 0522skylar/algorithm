/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let ans = [];
    let top = -1;
    for(let i = 0; i < asteroids.length; i++) {
        let cur = asteroids[i];
        if(top != -1 && ans[top] > 0 && cur < 0) {
            if(ans[top] + cur > 0) {
                continue;
            }
            else if(ans[top] + cur < 0) {
                i--;
            }
            top--;
            ans.pop()
        } else {
            ans.push(cur);
            top++;
        }
    }

    return ans;
};

console.log(asteroidCollision([5, 10, -5]))
console.log(asteroidCollision([8, -8]))
console.log(asteroidCollision([10, 2, -5]))