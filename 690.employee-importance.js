/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
 var GetImportance = function(employees, id) {
    let myMap = new Map();
    for (const employee of employees) {
        myMap.set(employee.id, employee);
    }

    let ans = 0;
    const dfs = (id) => {
        let temp = myMap.get(id);
        ans += temp.importance;

        let sub = temp.subordinates;
        for(let subId of sub) {
            dfs(subId);
        }
        return ans;
    }
    return dfs(id);
};

var GetImportance = function(employees, id) {
    const map = new Map();
    for (const employee of employees) {
        map.set(employee.id, employee);
    }
    const dfs = (id) => {
        const employee = map.get(id);
        let total = employee.importance;
        const subordinates = employee.subordinates;
        for (const subId of subordinates) {
            total += dfs(subId);
        }
        return total;
        
    }

    return dfs(id);
};


console.log(GetImportance([[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1))