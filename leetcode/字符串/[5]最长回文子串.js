/**
 * 回文 'a' 'aa' 'aba' 'aaa' 'aabaa'
 * demo: babad bab aba
 * aabacab
 * 
 * 分析：中心扩散法
 * 奇数回文abbba，中心是b
 * 偶数回文abbbba，中心是bb
 * 循环遍历字符串 对取到的每个值 都假设他可能成为最后的中心进行判断
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let res = ''
  for(let i = 0;i < s.length;i++) {
    helper(i, i)
    helper(i, i + 1)
  }
  function helper(m, n) {
    while(m>=0 && n<s.length && s[m] === s[n]){ // 找最长回文
      m--;
      n++;
    }
    // while条件恰不满足时，m+1到n-1是回文，长度n-1-(m+1)+1
    if(n-m-1 > res.length) { // 大于当前已找到回文长度
      res = s.slice(m+1, n)
    }
  }
  return res
};