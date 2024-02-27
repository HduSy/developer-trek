/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const map = {
    1000: 'M',
    900: 'CM',
    500:'D', 400:'CD', 100:'C', 90:'XC', 50:'L', 40:'XL', 10:'X', 9:'IX', 5:'V', 4:'IV', 1:'I'
  }
  let res = ''
  for(k of Object.keys(map).reverse()) {
    let count = Math.floor(num / k)
    if(count >= 1) {
      res += map[k].repeat(count)
      num %= k
    }
  }
  return res
};

// 巧用 Object 数据结构
// 心中有解法，就要考虑优化