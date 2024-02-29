// 找左边界
var getLeftBorder = function(nums, target) {
  let left = 0, right = nums.length - 1
  let leftBorder = -2
  while(left <= right) {
    let mid = left + ((right - left) >> 1)
    if(nums[mid] >= target) {
      right = mid - 1
      leftBorder = right // 向左的⬅️方向移
    } else {
      left = mid + 1
    }
  }
  return leftBorder
}
var getRightBorder = function(nums, target) {
  let left = 0, right = nums.length - 1
  let rightBorder = -2
  while(left <= right) {
    let mid = left + ((right - left) >> 1)
    if(nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
      rightBorder = left // 向右➡️的方向移
    }
  }
  return rightBorder
}

/**
 * 情况一：target 在数组范围的右边或者左边，例如数组{3, 4, 5}，target为2或者数组{3, 4, 5},target为6，此时应该返回{-1, -1}
   情况二：target 在数组范围中，且数组中不存在target，例如数组{3,6,7},target为5，此时应该返回{-1, -1}
   情况三：target 在数组范围中，且数组中存在target，例如数组{3,6,7},target为6，此时应该返回{1, 1}
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = getLeftBorder(nums, target)
  let right = getRightBorder(nums, target)
  // 情况一
  if(left === -2 || right === -2) return [-1, -1]
  // 情况三
  if(right - left > 1) return [left + 1, right - 1] // 复原了，找的时候left多-1，right多+1
  // 情况二
  return [-1, -1]
};