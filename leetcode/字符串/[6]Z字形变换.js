/**
 * PAYPALISHIRING
 * numRows
 * Z字形变换
 * 傻找规律没找到(滑稽，怎么可能这么简单浅显的规律)
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if(numRows < 2) return s
  let res = new Array(numRows).fill('')
  let i = 0, flag = -1
  for(let j = 0; j< s.length; j++) {
    res[i] += s[j]
    if(i === 0 || i === numRows - 1) flag = -flag
    i += flag
  }
  return res.join('')
};

// 善用存储中间结果，巧立了一个游标卡尺