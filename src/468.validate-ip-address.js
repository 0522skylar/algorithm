/**
 * @param {string} queryIP
 * @return {string}
 */
 var validIPAddress = function(queryIP) {
    if(queryIP.indexOf('.') != -1) {
        return isIpfour(queryIP)
    }
    else if(queryIP.indexOf(':') != -1) {
        return isIpSix(queryIP)
    }
    return "Neither"
};

const isIpfour = (queryIP) => {
    let arr = queryIP.split(".");
    if(arr.length != 4) {
        return "Neither"
    }
    else {
        for(let i = 0; i < 4; i++) {
            // console.log(Number(arr[i]) >= 0, Number(arr[i]) <= 255, Number(arr[i]).toString().length === arr[i].length)
            if(Number(arr[i]) >= 0 && Number(arr[i]) <= 255 && Number(arr[i]).toString().length === arr[i].length) {
                continue;
            }
            else {
            console.log(arr[i])

                return "Neither"
            }
        }
        return "IPv4"
    }
}

const isIpSix = (queryIP) => {
    let arr = queryIP.split(":");
    if(arr.length != 8) {
        return "Neither"
    }
    else {
        for(let i = 0; i < 8; i++) {
            if(/^[A-Fa-f0-9]{1,4}$/.test(arr[i])) {
                continue;
            }
            else {
                return "Neither"
            }
        }
        return "IPv6"
    }
}

console.log(validIPAddress("172.16.254.1")) //4
// console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334")) //8
// console.log(validIPAddress("256.256.256.256"))//n