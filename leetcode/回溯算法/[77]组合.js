/**
 * https://programmercarl.com/0077.%E7%BB%84%E5%90%88.html
 * 组合，无序
 * 排列，讲究顺序
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let res = [] // 结果
  let path = [] // 存储单个满足条件的结果
  let startIndex = 1 // 开始索引，防止重复
  backtrack(n, k, startIndex)

  function backtrack(n, k, startIndex) { // n控制决策树宽度，k控制决策树深度
    if(path.length === k) { // 树的深度：到达叶子结点，终止条件
      res.push([...path])
      return
    }
    for(let i = startIndex; i <= n; i++) { // 树的宽度：遍历
      // 做选择
      path.push(i)
      backtrack(n, k, i + 1)
      // 撤销选择
      path.pop()
    }
  }
  return res
};