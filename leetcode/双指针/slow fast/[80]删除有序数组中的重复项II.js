/** 有序 + 保留2位不重复
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let slow = 2, fast = 2
  while(fast < nums.length) {
    if(nums[slow - 2] !== nums[fast]) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  return slow - 1
};