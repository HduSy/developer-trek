# 回溯算法
递归
## 框架
```js
const res = [] // 存储结果集
const path = [] // 代表中间找到的结果
const startIndex = 0 // 有时需要，避免重复
backtrack(a, b, startIndex) // 回溯函数调用
return res // 返回结果
// 编写回溯函数逻辑
function backtrack(a, b, startIndex) {
  // 编写终止条件
  if(path.length === b) { // 决策树深度
    res.push([...path])
    return // return
  }
  for(let i = 0; i < a.length; i++) { // 决策树广度（for循环横向遍历，树的水平方向向右走）
    path.push() // 作出选择
    backtrack(a, b, i+1) // 递归调用（纵向遍历，树的垂直方向向下走）
    path.pop() // 撤销选择
  }
}
```
## 解题步骤

## 代码
[电话号码的字母组合](./[17]电话号码的字母组合.js)   
[全排列](./[46]全排列.js)   
[组合](./[77]组合.js)   
[分割回文子串](./[131]分割回文子串.js)   
[leetcode-[46]全排列-代码随想录解法](https://leetcode.cn/problems/permutations/solutions/857631/dai-ma-sui-xiang-lu-dai-ni-xue-tou-hui-s-mfrp)   
## Reference
[代码随想录-回溯算法理论基础](https://programmercarl.com/%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html)