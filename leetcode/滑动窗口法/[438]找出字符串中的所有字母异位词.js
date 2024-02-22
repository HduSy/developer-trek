/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let sl = s.length, pl = p.length
  const tmp = new Array(26).fill(0)
  let sarr = [...tmp], parr = [...tmp]
  let res = []
  for(let i = 0; i < sl; i++) parr[p.charCodeAt(i) - 'a'.charCodeAt()]++

  for(let i = 0; i < sl; i++) {
    sarr[s.charCodeAt(i) - 'a'.charCodeAt()]++
    if(i >= pl -1) { // 大于等于s最大索引，窗口构成了
      if(sarr.toString() === parr.toString()) res.push(i - pl + 1)
      sarr[s.charCodeAt(i - pl +1) - 'a'.charCodeAt()]--
    }
  }
  return res
};