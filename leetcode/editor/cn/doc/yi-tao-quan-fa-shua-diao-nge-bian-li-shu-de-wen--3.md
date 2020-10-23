
> 本文将带你用树的一种遍历算法解决N个`leetcode`相关算法题(算法小渣渣致敬叶师傅)
![](https://pic.leetcode-cn.com/4b6c826d61ecff4640b4d9bd4c590408054194e93fc291c6741d81ba92a3fd09-file_1587549768689)

> 我不害怕曾經練過一萬種踢法的人，但我害怕一種踢法練過一萬次的人(by 叶师傅的徒弟Bruce Lee)
![](https://pic.leetcode-cn.com/63cd6533b84c9c7ea6c0bc42dc6c48408aa315316e9a72e8c05b91a2b2bdc837-file_1587549768543)

# 树的遍历(Traversal)
如下图, 三种遍历方式, 可用同一种递归思想实现
![](https://pic.leetcode-cn.com/bd95aab8e74b7b999fc7cc826fd01377b6c5ed95ff1dd54ff43085b022293f36-file_1587549768626)

## 先序遍历(PreOrder, 按照先访问根节点的顺序)

```JavaScript
var preorderTraversal = function(root) {
  const res = []
  function traversal (root) {
    if (root !== null) {
      res.push(root.val) // 访问根节点的值
      traversal(root.left) // 递归遍历左子树
      traversal(root.right) // 递归遍历右子树
    }
  }
  traversal(root)
  return res
}
```

## 94 中序遍历(InOrder, 按照根节点在中间访问的顺序)


![](https://pic.leetcode-cn.com/623c5dd42510881424ad6c7de9c2081c5f6245d76b5a5d8e69c12feaba2dfd4e-file_1587549768556)

```JavaScript
var inorderTraversal = function(root) {
  const res = []
  function traversal (root) {
    if (root !== null) {
      traversal(root.left)
      res.push(root.val)
      traversal(root.right)
    }
  }
  traversal(root)
  return res
}
```

## 145 后续遍历(PosterOrder, 按照根节点在后面访问的顺序)


![](https://pic.leetcode-cn.com/cffaae094f699706212d5f239322c77e0504dd190c02be5e8cbb9f35604b96f2-file_1587549768558)

```JavaScript
var postorderTraversal = function(root) {
  const res = []
  function traversal (root) {
    if (root !== null) {
      traversal(root.left)
      traversal(root.right)
      res.push(root.val)
    }
  }
  traversal(root)
  return res
}
```

## 100 相同的树

![](https://pic.leetcode-cn.com/fc8aa73a1944bff75a45dd8c711f850884a581b8df4d2de7588ebde5c6404484-file_1587549768563)

可以利用这种递归思想并发同时爬两棵树

```JavaScript
var isSameTree = function(p, q) {
  function traversal (root1, root2) {
    if (root1 === null && root2 !== null) {
      return false
    } else if (root1 !== null && root2 === null) {
      return false
    } else if (root1 === null && root2 === null) {
      return true
    } else {
      return  root1.val === root2.val && traversal(root1.left, root2.left) && traversal(root1.right, root2.right)
    }
  }
  return traversal(p, q)
}
```

## 226 翻转二叉树


![](https://pic.leetcode-cn.com/cf616615da64bc703fa8c0228eb15e0286b37dd68b4e90bb67682fa460e09866-file_1587549768567)

这种算法可以帮助`Homebrew`作者`Max Howell`解开`Google`的算法面试题

![](https://pic.leetcode-cn.com/1fadd2f6dfe9b1844bbcd02dae830af6a74dce10fd7a56153badf55c1c454e56-file_1587549768609)

```JavaScript
var invertTree = function(root) {
  function traversal (root) {
    if (root === null) {
      return null
    } else {
      [root.left, root.right] = [traversal(root.right), traversal(root.left)]
      return root
    }
  }
  return  traversal(root)
}
```

## 590 N叉树的后序遍历

![](https://pic.leetcode-cn.com/9df5bdd077e59147e1bd8e39544afcafbe86bba646edbc05ab624388e19d2d8f-file_1587549768594)

我们还可以用此种算法解决N叉树的问题
```JavaScript
var postorder = function(root) {
  const res = []
  function traversal (root) {
    if (root !== null) {
      root.children.forEach(child => {
        traversal(child)
      })
      res.push(root.val)
    }
  }
  traversal(root)
  return res
}
```
如果你已对这种写法审美疲劳, 可以换个写法, 使用匿名函数
```JavaScript
var postorder = function(root) {
  const res = []
  ;(function (root) {
    if (root !== null) {
      root.children.forEach(child => {
        arguments.callee(child)
      })
      res.push(root.val)
    }
  })(root)
  return res
}
```
还可以利用栈来迭代
```JavaScript
var postorder = function(root) {
  if (root === null) {
    return []
  }
  const res = []
  const arr = [root]
  while (arr.length) {
    const cur = arr.pop()
    res.push(cur.val)
    for (let i = cur.children.length - 1; i >= 0; i--) {
      arr.push(cur.children[i])
    }
  }
  return res.reverse()
}
```

## 103 二叉树的锯齿形层次遍历

![](https://pic.leetcode-cn.com/229c9e671b508b85aca915ad8be6238ea2cef512cb4b05a3a240ffa88c45cd81-file_1587549768597)

大白话, 蛇皮走位爬树

```JavaScript
var zigzagLevelOrder = function(root) {
  if (root === null) {
    return []
  } else {
    let res = []
    function traversal (root, depth) {
      if (root !== null) {
        if (res[depth] === undefined) {
          res[depth] = []
        }
        res[depth].push(root.val)
        traversal(root.left, depth + 1)
        traversal(root.right, depth + 1)
      }
    }
    traversal(root, 0)
    res.forEach((item, index) => {
      if (index & 1) {
        res[index] = item.reverse()
      }
    })
    return res
  }
}
```
优化
```JavaScript
var zigzagLevelOrder = function(root) {
  if (root === null) {
    return []
  } else {
    let res = []
    function traversal (root, depth) {
      if (root !== null) {
        if (res[depth] === undefined) {
          res[depth] = []
        }
        if (depth & 1) {
          res[depth].unshift(root.val)
        } else {
          res[depth].push(root.val)
        }
        traversal(root.left, depth + 1)
        traversal(root.right, depth + 1)
      }
    }
    traversal(root, 0)
    return res
  }
}
```

## 230 二叉搜索树中第K小的元素

![](https://pic.leetcode-cn.com/47a5f9a60ec914f9b37224785ce806d13741ec2d12a7354ea0ab525ad1b6c12c-file_1587549768633)

```JavaScript
var kthSmallest = function (root, k) {
  let arr = []
  function traversal (node) {
    if (node !== null) {
      traversal(node.left)
      arr.push(node.val)
      traversal(node.right)
    }
  }
  traversal(root)
  return arr[k - 1]
}
```

优化, 减少遍历次数
```JavaScript
var kthSmallest = function (root, k) {
  let arr = []
  function traversal(node) {
    if (node !== null && arr.length < k) {
      traversal(node.left)
      arr.push(node.val)
      traversal(node.right)
    }
  }
  traversal(root)
  return arr[k - 1]
}
```

进一步优化, 使用O(1)的额外空间
```JavaScript
var kthSmallest = function (root, k) {
  let res
  let count = 0
  function traversal(node) {
    if (node !== null) {
      if (count < k) {
        traversal(node.left)
      }
      if (++count === k) {
        res = node.val
      }
      if (count < k) {
        traversal(node.right)
      }
    }
  }
  traversal(root)
  return res
}
```

## 102 二叉树的层序遍历   

![](https://pic.leetcode-cn.com/4a21a48da9a316856b1f3fa3ad7f7fa1c9b9f948bb83c45b2013297312b361b3-file_1587549768640)

```JavaScript
var levelOrder = function(root) {
  const res = []
  function traversal (root, depth) {
    if (root !== null) {
      if (!res[depth]) {
        res[depth] = []
      }
      traversal(root.left, depth + 1)
      res[depth].push(root.val)
      traversal(root.right, depth + 1)
    }
  }
  traversal(root, 0)
  return res
}
```

## 199 二叉树的右视图

![](https://pic.leetcode-cn.com/5f8fb35ff9eb3f858a2da89bb52749e34d1429c566a10316b4c179938a84cb3f-file_1587549768646)

基本思路: 先序遍历, 记录每一层深度下的节点的值, 并先记录左节点再记录右节点, 则最后记录的值即为该层深度的右视图看到的值

```JavaScript
var rightSideView = function(root) {
  const arr = []
  function traversal (root, depth) {
    if (root) {
      if (arr[depth] === undefined) {
        arr[depth] = []
      }
      arr[depth].push(root.val)
      traversal(root.left, depth + 1)
      traversal(root.right, depth + 1)
    }
  }
  traversal(root, 0)
  const res = []
  for (let i = 0; i < arr.length; ++i) {
    res.push(arr[i][arr[i].length - 1])
  }
  return res
};
```

## 104 二叉树的最大深度

![](https://pic.leetcode-cn.com/5ab3482a10e3cd95a072b6e7640cd76e4238aa74f47414d7b8a0a6c9d135fae1-file_1587549768652)

```JavaScript
var maxDepth = function (root) {
  let res = 0
  function traversal (root, depth) {
    if (root !== null) {
      if (depth > res) {
        res = depth
      }
      if (root.left) {
        traversal(root.left, depth + 1)
      }
      if (root.right) {
        traversal(root.right, depth + 1)
      }
    }
  }
  traversal(root, 1)
  return res
}
```

## 107 二叉树的层次遍历 II   

![](https://pic.leetcode-cn.com/0c675c7f6ab4145f1b440ecc5d85aae8f8c8a9ba8da94330ad2e7ce5e9c45f57-file_1587549768657)

```JavaScript
var levelOrderBottom = function(root) {
  if (root === null) {
    return []
  }
  let res = []
  function traversal (root, depth) {
    if (root !== null) {
      if (!res[depth]) {
        res[depth] = []
      }
      traversal(root.left, depth + 1)
      res[depth].push(root.val)
      traversal(root.right, depth + 1)
    }
  }
  traversal(root, 0)
  return res.reverse()
}
```

## 671 二叉树中第二小的节点  

![](https://pic.leetcode-cn.com/c70ac8cd4232ae7c63cf94cd7351adcc89403746ed4912dca35f0868bf6a67d3-file_1587549768623)


```JavaScript
var findSecondMinimumValue = function(root) {
  let arr = []
  ;(function traversal (root) {
    if (root !== null) {
      traversal(root.left)
      arr.push(root.val)
      traversal(root.right)
    }
  })(root)
  let _arr = [...new Set(arr)].sort()
  return _arr[1] ? _arr[1] : -1
}
```



## 1038 从二叉搜索树到更大和树  

![](https://pic.leetcode-cn.com/e0fe4a7503fdbba23c3eff2bfe22cd0632d018fd2546dc88a21cae987a9e3b43-file_1587549768661)

```JavaScript
var bstToGst = function(root) {
  let sum = 0
  function traversal (root) {
    if (root !== null) {
      traversal(root.right)
      root.val += sum
      sum = root.val
      traversal(root.left)
    }
  }
  traversal(root)
  return root
}
```

## 538 把二叉搜索树转换为累加树   

![](https://pic.leetcode-cn.com/7994beca892c504d68584b68606331e165bdd4040ab7286e8f655dc542410f1c-file_1587549768664)


```JavaScript
var convertBST = function(root) {
  let sum = 0
  function traversal (root) {
    if (root !== null) {
      traversal(root.right)
      sum += root.val
      root.val = sum
      traversal(root.left)
    }
  }
  traversal(root)
  return root
}
```

## 700 二叉搜索树中的搜索

![](https://pic.leetcode-cn.com/81c469ffdbaadfadb713be054ef2acdc25cc4f76809116aa8f091cfa0b5a0490-file_1587549768673)

```JavaScript
var searchBST = function(root, val) {
  function traversal (root) {
    if (root !== null) {
      if (root.val === val) {
        return root
      } else if (root.val < val) {
        return traversal(root.right)
      } else {
        return traversal(root.left)
      }
    } else {
      return root
    }
  }
  return traversal(root)
}
```

## 559 N叉树的最大深度   

![](https://pic.leetcode-cn.com/28160b864f2b8d36a1b069c552581dd500a8bb3beb28262612902a84fbc61597-file_1587549768678)

```JavaScript
var maxDepth = function(root) {
  if (root === null) {
    return 0
  } else {
    let depth = 1
    function traversal (root, curDepth) {
      if (root !== null) {
        if (curDepth > depth) {
          depth = curDepth
        }
        root.children.forEach(child => traversal(child, curDepth + 1))
      }
    }
    traversal(root, 1)
    return depth
  }
}
```

## 589 N叉树的前序遍历   

![](https://pic.leetcode-cn.com/f0fa8c98364d5671c51fdd67821ce052e88db44b6399c926ce5726c31a764894-file_1587549768684)

```JavaScript
var preorder = function(root) {
  const res = []
  function traversal (root) {
    if (root !== null) {
      res.push(root.val)
      root.children.forEach(child => traversal(child))
    }
  }
  traversal(root)
  return res
}
```

## 897 递增顺序查找树

![](https://pic.leetcode-cn.com/94b734b13600676e601cdec175a96504e12df2633b4658f85f6d95cfe27bba79-file_1587549768705)

```JavaScript
var increasingBST = function(root) {
  const arr = []
  function traversal (root) {
    if (root !== null) {
      traversal(root.left)
      arr.push(root.val)
      traversal(root.right)
    }
  }
  traversal(root)
  const res = new TreeNode(arr[0])
  let currentNode = res
  for (let i = 0; i < arr.length - 1; i++) {
    currentNode.left = null
    currentNode.right = new TreeNode(arr[i + 1])
    currentNode = currentNode.right
  }
  return res
}
```

原文在掘金: [https://juejin.im/post/5e1c4e46f265da3e140fa54d](https://juejin.im/post/5e1c4e46f265da3e140fa54d)

欢迎点赞👍、关注和来撩三连😎

