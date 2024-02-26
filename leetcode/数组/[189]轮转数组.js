/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let tmpArr = []
  for(let i = 0; i< nums.length; i++) {
    tmpArr[(i+k)%nums.length] = nums[i]
  }
  for(let i = 0; i<nums.length;i++){
    nums[i] = tmpArr[i]
  }
};

var rotate = function(nums, k) {
  function reverse(arr, start, end) {
    while(start < end) {
      [arr[start++], arr[end--]] = [arr[end], arr[start]]
    }
  }
  k %= nums.length // 当K大于nums.length时，可减小移动次数
  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)
};