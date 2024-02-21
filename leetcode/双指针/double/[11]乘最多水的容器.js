/**
 * 从水槽面积计算公式中分析出决定性因素——短板
 * 短板向内移动，短板可能变大，面积可能变大
 * 长板向内移动，短板可能不变或变小，面积一定变小！！
 * 
 * 因此只有向内移动短板才有可能出现最大面积
 */
var maxArea = function(height) {
  let left = 0 ,right = height.length - 1
  let S = 0
  while(left < right) {
    S = Math.max(S, Math.min(height[left], height[right]) * (right - left))
    if(height[left] <= height[right]) left++
    else right--
  }
  return S
};