# 回溯算法


## 为什么叫决策树
站在一颗树的节点上时，每个节点都要做决策。「路径track」记录每一步选择，「剩余选择列表used」代表接下来🉑以做出的选择的列表

## 框架

```js
result = []
def backtrack(路径, 选择列表):
    if 满足结束条件:
        result.add(路径)
        return
    
    for 选择 in 选择列表:
        做选择
        backtrack(路径, 选择列表)
        撤销选择
```
## Reference
[代码随想录-回溯法](https://leetcode.cn/problems/permutations/solutions/857631/dai-ma-sui-xiang-lu-dai-ni-xue-tou-hui-s-mfrp)   
[labuladong-回溯法](https://labuladong.online/algo/essential-technique/backtrack-framework)   