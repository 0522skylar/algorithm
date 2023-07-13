/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    let mymap = new Map();
    for(let i = 0; i < paths.length; i++) {
        let contents = paths[i].split(' ');
        let url = contents[0];
        for(let j = 1; j < contents.length; j++) {
            let str = contents[j].split('(')[1];
            if(mymap.has(str)) {
                mymap.set(str, [...mymap.get(str), url + '/' + contents[j].split('(')[0]])
            }
            else {
                mymap.set(str, [url + '/' + contents[j].split('(')[0]])
            }
        }
    }

    let ans = [];
    for(let item of mymap) {
        // console.log(item)
        if(item[1].length >= 2) {
            ans.push(item[1]);

        }
    }
    return ans;
};

console.log(findDuplicate(["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]))


console.log(findDuplicate(["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)"]))

console.log(findDuplicate(["root/a 1.txt(abcd) 2.txt(efsfgh)","root/c 3.txt(abdfcd)","root/c/d 4.txt(efggdfh)"]))
