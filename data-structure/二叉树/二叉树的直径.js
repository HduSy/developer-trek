/**
 * 当前节点直径=左子树最大深度+右子树最大深度
 * 遍历一边二叉树计算每个节点直径，取最大值
 */
const diameterOfBinaryTree = function(root) {
  let res = 0
  if(root === null) return 0
  const maxDepth = (root) => {
      if (root === null) return 0
      const leftMaxDepth = maxDepth(root.left)
      const rightMaxDepth = maxDepth(root.right)
      res = Math.max(res, leftMaxDepth + rightMaxDepth) // 当前节点路径 = left_node_maxdepth + right_maxdepth
      return Math.max(leftMaxDepth, rightMaxDepth) + 1 // 当前节点最大深度
  }
  maxDepth(root)
  return res
}