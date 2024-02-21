/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let slow = 0, fast = 1
  while(slow < numbers.length - 1) {
    if(numbers[slow] > target) return
    if(numbers[slow] + numbers[fast] === target) return [slow+1, fast+1]
    else if(numbers[slow] + numbers[fast] > target) {
      slow++
      fast = slow + 1
      if(fast > numbers.length - 1) {
        slow++
        fast = slow + 1
      }
      continue
    } else {
      fast++
      if(fast > numbers.length - 1) {
        slow++
        fast = slow + 1
      }
      continue
    }
  }
  return
};
// error!不通过

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let left = 0, right = numbers.length - 1
  while(left < right) {
    let a = numbers[left]
    let b = numbers[right]
    if(a + b === target) return [left, right]
    else if(a + b < target) left++
    else right--
  }
  return
};
