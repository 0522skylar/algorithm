/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var decodeAtIndex1 = function(s, k) {
  let ans = 0n;
  let res = ''
  k = BigInt(k);
  for(let i = 0; i < s.length; i++) {
    if (s[i] >= 'a' && s[i] <= 'z') {
      ans++;
    }
    if (s[i] >= '2' && s[i] <= '9') {
      ans *= BigInt(s[i])
    }
  }

  for(let i = s.length - 1; i >= 0; i--) {
    k = k % ans;
    if (k === 0n && (s[i] >= 'a' && s[i] <= 'z')) {
      res = s[i];
      return res;
    }
    if (s[i] >= 'a' && s[i] <= 'z') {
      ans--;
    } else {
      ans = ans / BigInt(s[i]);
    }
  }
  return ''
};

var decodeAtIndex = function(s, k) {
  let len = s.length;
  let count = 0n;
  k = BigInt(k);

  for (let i = 0; i < len; i++) {
    if(Number(s[i])!==Number(s[i])) {
      count++
    }else {
      count *= BigInt(Number(s[i]));
    }
  }

  for (let i = len - 1; i >= -1; i--) {
    k = k % count;
    const v = s[i];
    if (Number(s[i])!==Number(s[i]) && k === 0n) {
      return s[i];
    } 
    if (Number(s[i])!==Number(s[i])) {
      count--;
    } else {
      count /= BigInt(v);
    }
  }

};

console.log(decodeAtIndex("leet2code3", 10))

console.log(decodeAtIndex1("jb8dis8msunncn92o7o45iq7jrkkmx8q24vesm6i4jdtweq6gxccrb7p2fhxsqke7njwcul4y9cd3rpmrhq3ve6prifmt7aa89tt",731963130)) // b