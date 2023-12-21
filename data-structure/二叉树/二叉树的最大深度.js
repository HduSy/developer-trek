/**
 * 遍历解法
 * 用一个外部变量记录每个节点所在的深度，取最大值就可以得到最大深度
 */
// 外部变量
let res = 0
let depth = 0
// traverse函数
function traverse(root) {
  if(root === null) return 0
  depth++; // 前序位置，进入节点
  if(root.left === null && root.right === null) {
    res = Math.max(res, depth) // 到达叶节点，更新最大深度
  }
  traverse(root.left)
  traverse(root.right)
  depth--; // 后序位置，离开节点
}
// 主函数
function maxDepth(root) {
  traverse(root)
  return res
}

/**
 * 分解解法 - 也是一种遍历
 */
function maxDepth(root) {
  let res = 0
  if(root === null) {
    return 0
  }
  const leftMax = maxDepth(root.left)
  const rightMax = maxDepth(root.right)
  // 后序位置
  res = Math.max(leftMax, rightMax) + 1
  return res
}