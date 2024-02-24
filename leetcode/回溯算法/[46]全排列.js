/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = []
  let track = [] // 记录已选择列表
  let used = new Array(nums.length).fill(false) // 记录可选列表

  function backtrack(nums, track, used) {
    if(track.length === nums.length) { // 终止条件形成一个答案
      // res.push(track) 不通过
      res.push([...track])
      return
    }

    for(let i = 0, length = nums.length; i < length; i++) {
      if(used[i]) { // nums[i] 已经在 track 中，跳过
        continue
      }
      // 做选择
      track.push(nums[i])
      used[i] = true
      backtrack(nums, track, used) // 递归遍历
      // 撤销选择
      track.pop()
      used[i] = false
    }
  }

  backtrack(nums, track, used)
  return res
};


// 回溯法，理解就有点难度，更别说自己做出来了