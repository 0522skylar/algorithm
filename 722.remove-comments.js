/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function(source) {
    let ans = []
    let str = source.join('\n');
    let app = '';
    let len = str.length;
    let i = 0;
    while(i < len) {
        if(str[i] === '/' && (i + 1 < len) && str[i+1] === '/') {
            while(i < len && str[i] != '\n') {
                i++;
            }
            app += '\n';
            i++;
        } else if(str[i] ==='/' && (i + 1 < len) && str[i+1] ==='*') {
            i += 2;
            while(i < len -1 && !(str[i] === '*' && str[i+1] ==='/')) {
                i++;
            }
            i += 2;
        } else {
            app += str[i];
            i++;
        }
        
    }
    console.log(1111)
    ans = app.split('\n');
    let res = []
    for(let i = 0; i < ans.length; i++) {
        if(ans[i] === '') {
            continue
        }
        res.push(ans[i])
    }
    // return app.split('\n').filter(v => v);
    return res;
};

/**
 * @param {string[]} source
 * @return {string[]}
 */

var removeComments1 = function(source) {
    let ans = '';
    
    source = source.join('##');
    const n = source.length;
    
    let i = 0;
    while (i < n) {
      if (source[i] === '/' && (i + 1 < n) && source[i + 1] === '/') {
        // 找到下一个 ##，把中间部分删除再加一个换行，没有的话，直接处理到最后
        let nextSplitIdx = source.indexOf('##', i + 2);
        nextSplitIdx = nextSplitIdx === -1 ? n : nextSplitIdx;
        ans += '##';
        i = nextSplitIdx + 2;
      } else if (source[i] === '/' && (i + 1 < n) && source[i + 1] === '*') {
        // 找到下一个 */，将这部分删除（块注释一定会闭合）
        let nextSplitIdx = source.indexOf('*/', i + 2);
        i = nextSplitIdx + 2;
      } else {
        ans += source[i];
        i++;
      }
    }
    
    return ans.split('##').filter(v => v);
  };

console.log(removeComments(["/*Test program */", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", "/* This is a test", "   multiline  ", "   comment for ", "   testing */", "a = b + c;", "}"]))

console.log(removeComments(["a/*comment", "line", "more_comment*/b"]))

// ["aec*","ec","ddadbede","e","eed*","bab","c/bb*","cbae*","dcabebdc","badcc","dd*","eb/dcdbaaadd","ba*","ab","*","*","aeabdccccd","c/aa","de/aedb*","*","*","/dc","e/edceacc/ea*","ca","ec","ebdce","dadc","eadddaabebeedd","cbeadebcaebded*","ee","eb","dd","cbccc","da*","d*","b*","dac*","de","e","b","dbbbe","ccd*","*","adaabdaaea","eec*","/a/addc","*","*","/ddddcab*","cb*","b*","*","aaadddd","bd*","ad","*","*","e","a*","a","d*","e*","cedc*","*","*","eb","*","b*","*","ba*","da*","eccd*/ab","*","*/cbcedae*","a","aa","*","cadbbd","d","*","c","d/d","d/c","dbbdedece"]

// ["aec*","ec","ddadbede","e","eed*","bab","c/bb*","cbae*","dcabebdc","badcc","dd*","eb/dcdbaaadd","ba*","ab","*","*","aeabdccccd","c/aa","de/aedb*","","*","*","/dc","e/edceacc/ea*","ca","ec","ebdce","dadc","eadddaabebeedd","cbeadebcaebded*","ee","eb","dd","cbccc","","da*","d*","b*","dac*","de","e","b","dbbbe","ccd*","*","adaabdaaea","eec*","/a/addc","","*","*","","/ddddcab*","cb*","b*","*","aaadddd","bd*","ad","*","*","e","a*","a","d*","e*","cedc*","*","*","","eb","*","b*","*","ba*","da*","eccd*/ab","*","*/cbcedae*","a","aa","*","cadbbd","d","*","c","d/d","d/c","dbbdedece"]