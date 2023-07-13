/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let ans = [];
    let map1 = new Map();
    let map2 = new Map();
    let index = Number.MAX_VALUE;
    for(let i = 0; i < list1.length; i++) {
        map1.set(list1[i], i);
    }
    for(let i = 0; i < list2.length; i++) {
        if(map1.has(list2[i])) {
            let a = map1.get(list2[i]);
            if(a + i <= index) {
                index = a + i;
                if(map2.has(index)) {
                    map2.set(index, [...map2.get(index), list2[i]])
                } 
                else {
                    map2.set(index, [list2[i]])
                }
            }
        }
    }
    let count = Number.MAX_VALUE;
    for(let key of map2) {
        // console.log(key)
        if(key[0] < count) {
            ans = map2.get(key[0])
        }
    }
    return ans;
};

console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"]))