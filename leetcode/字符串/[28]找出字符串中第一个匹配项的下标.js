/**
 * 自解成功
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let nl = needle.length
  for(let i = 0; i < haystack.length - nl; i++) {
    if(haystack.slice(i, i + nl -1) === needle) return i
  }
  return -1
};