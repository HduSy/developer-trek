/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0, right = nums.length
  while(left <= right) {
    let middle = parseInt((left + right)/2)
    if(nums[middle] > target) {
      right = middle - 1
    } else if(nums[middle] < target) {
      left = middle + 1
    } else {
      return middle
    }
  }
  return left
};