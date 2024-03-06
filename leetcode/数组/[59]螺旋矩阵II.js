/**
 * 傻叉解法，这种思路完全错的
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let target = []
  for(let i = 1; i <= 3*n-2; i++) {
    let res = []
    for(let j = i; j <= n + j - 1; j++) {
      res.push(j)
    }
    target.push(res)
  }
  return target
};


var generateMatrix = function(n) {
  let startX = startY = 0
  let loop = Math.floor(n / 2) // 循环次数
  let mid = Math.floor(n / 2) // n为基数时的最后一个
  let res = new Array(n).fill(0).map(() => new Array(n).fill(0))
  let offset = 1 // 偏移
  let count = 1 // 更新的数值
  while(loop--) {
    let row = startX, col = startY
    // 上列，从左到右
    for(;col < n - offset; col++) {
      res[row][col] = count++
    }
    // 右列，从上倒下
    for(;row < n - offset; row++) {
      res[row][col] = count++
    }
    // 下列，从右往左
    for(;col > startX; col--) {
      res[row][col] = count++
    }
    // 左列，从下至上
    for(;row > startY; row--) {
      res[row][col] = count++
    }

    startX++
    startY++
  }
  if(n % 2 === 1) {
    res[mid][mid] = count
  }
  return res
}