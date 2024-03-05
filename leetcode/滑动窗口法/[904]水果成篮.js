/**
 * 自解失败
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  let left = 0, right = 0
  let res = 0
  let tmpSet = new Set() // 失败原因，Set这种数据结构选取错误
  while(right < fruits.length) {
    tmpSet.add(fruits[right])
    while(tmpSet.size > 2) {
      tmpSet.delete(fruits[left])
      left++
    }
    res = Math.max(res, right - left + 1)
    right++
  }
  return res
};


/**
 * 都特么什么题啊 fuck
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  let left = 0, right = 0, n = fruits.length, res = 0
  let map = new Map() // 中间结构
  while(right < n) { // 遍历
    map.set(fruits[right], (map.get(fruits[right]) || 0) + 1)
    while(map.size > 2) { // 缩减窗口的条件
      map.set(fruits[left], (map.get(fruits[left])) - 1)
      if(map.get(fruits[left]) === 0) {
        map.delete(fruits[left])
      }
      left++ // 向右缩减窗口
    }
    res = Math.max(res, right - left + 1)
    right++ // 向右扩大窗口
  }
  return res
};