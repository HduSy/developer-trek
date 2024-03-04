/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0, right = x, anwser = -1
  while (left <= right) {
    let mid = left + ((right - left) >> 1) // 防止溢出
    if (mid * mid > x) {
      right = mid - 1
    } else if (mid * mid <= x) {
      if ((mid + 1) * (mid + 1) > x) return mid
      left = mid + 1
    }
  }
  return 0
};