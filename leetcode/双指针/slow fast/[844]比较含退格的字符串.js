/**
 * 自解
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  let sarr = [], tarr = []
  for(let i = 0; i< s.length;i++) {
    if(s[i]==='#') sarr.pop()
    else sarr.push(s[i])
  }
  for(let i = 0; i< t.length;i++) {
    if(t[i]==='#') tarr.pop()
    else tarr.push(t[i])
  }
  return sarr.join() === tarr.join()
};