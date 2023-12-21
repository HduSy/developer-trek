# 纲领篇
## 题解思路
1. ==「遍历」==：是否可以通过遍历一遍二叉树得到答案？如果可以，用一个 traverse 函数配合外部变量来实现，该函数没有返回值，`void traverse(...)`，靠更新外部变量来作为结果
2. ==「分解」==：是否可以定义一个递归函数，通过子问题（子树）的答案推导出原问题的答案？如果可以，写出这个递归函数的定义，函数名根据该函数具体功能而定，该函数有返回值，返回值是子问题的计算结果（也是一种遍历）
3. 无论使用哪一种思维模式，清楚知道每个节点做什么工作、需要在什么位置做
## 深入理解前中后序遍历
- 前序位置：进入当前节点前的位置；
- 后序位置：离开当前节点后的位置；
- 中序位置：节点左子树遍历完，即将进行右子树遍历，处在当前节点的位置；

![图示](./../../assets/2.jpeg)
1. 你理解的二叉树的前中后序遍历是什么，仅仅是三个顺序不同的 List 吗？
每个节点都有 ==「唯一」== 属于自己的<font color='green'>前</font>、<font color='blue'>中</font>、<font color='red'>后</font>序位置，前中后序只是遍历二叉树过程中处理每个节点的 ==三个时间点==
2. 请分析，为什么多叉树没有中序遍历？
因为二叉树的每个节点只会进行唯一一次左子树切换右子树，而多叉树节点可能有很多子节点，会多次切换子树去遍历，没有「唯一」的中序遍历位置
### 后序遍历
#### 后序位置的特别之处
前序位置的代码只能从函数参数中获取父节点传递来的数据，而后序位置的代码不仅可以获取参数数据，还可以获取到子树通过函数返回值传递回来的数据

打印二叉树所有节点层数(前序)
```js
function traverse(root, level) {
  if(root === null) return
  console.log(`节点 ${root} 在第 ${level} 层`) // level 从参数获得，可递归传递下去
  traverse(root.left, level + 1)
  traverse(root.right, level + 1)
}
traverse(root, 1)
```
打印二叉树左右子树节点树(后序)
```js
function count(root) {
  if(root === null) return 0
  const leftCount = count(root.left)
  const rightCount = count(root.right)
  // 后序位置遍历完了左右子树，才知道结果，必须拿到递归函数返回值
  console.log(`节点 ${root} 的左子树有 ${leftCount} 个节点，右子树有 ${rightCount}个节点`)
}
```
#### 题解思路
若题目和子树有关，那大概率要给函数设置合理的定义和返回值，在后序位置写代码
### 层序遍历

## LeetCode
[104 二叉树的最大深度](./二叉树的最大深度.js)   
[543二叉树的直径](./二叉树的直径.js)
## 二叉树扩展
- 动态规划算法属于分解问题的思路，它的关注点在整棵 ==「子树」==，即子问题
```js
var count = function(root) {
    if (root == null) {
        return 0;
    }
    // 我这个节点关心的是我的两个子树的节点总数分别是多少
    var leftCount = count(root.left);
    var rightCount = count(root.right);
    // 后序位置，左右子树节点数加上自己就是整棵树的节点数
    return leftCount + rightCount + 1;
}
// 斐波那契
var fib = function(N) {
    if (N === 1 || N === 2) return 1;
    return fib(N - 1) + fib(N - 2);
};
```
- 回溯算法属于遍历的思路，它的关注点在节点间的 ==「树枝」==，遍历节点的所有 ==「枝条」==
```js
// 二叉树遍历
var traverse = function(root) {
    if (root === null) return;
    console.log("从节点 " + root + " 进入节点 " + root.left);
    traverse(root.left);
    console.log("从节点 " + root.left + " 回到节点 " + root);

    console.log("从节点 " + root + " 进入节点 " + root.right);
    traverse(root.right);
    console.log("从节点 " + root.right + " 回到节点 " + root);
}
// 多叉树遍历
function traverse(root) {
  if (root == null) return;
  for (let child of root.children) {
    console.log(`从节点 ${root} 进入节点 ${child}`);
    traverse(child);
    console.log(`从节点 ${child} 回到节点 ${root}`);
  }
}
// 回溯遍历思路，着眼点永远是在节点之间移动的过程，类比到二叉树上就是「树枝」
void backtrack(...) {
  for (int i = 0; i < ...; i++) {
  // 做选择
  ...

  // 进入下一层决策树
  backtrack(...);

  // 撤销刚才做的选择
  ...
  }
}
```
- DFS 算法属于遍历的思路，它的关注点在单个「节点」，遍历节点的所有 ==「子节点」==
```js
// DFS 算法把「做选择」「撤销选择」的逻辑放在 for 循环外面
var dfs = function(root) {
  if (root == null) return;
  // 做选择
  console.log("我已经进入节点 "+ root +" 啦");
  for (var i in root.children) {
      dfs(root.children[i]); // 处理的是每个节点
  }
  // 撤销选择
  console.log("我将要离开节点 "+ root +" 啦");
}

// 回溯算法把「做选择」「撤销选择」的逻辑放在 for 循环里面，方便拿到「树枝」的两个端点
var backtrack = function(root) {
  if (root == null) return;
  for (var i in root.children) {
    // 做选择
    console.log("我站在节点 "+ root +" 到节点 "+ root.children[i] +" 的树枝上");
    backtrack(root.children[i]); // 处理的是每个节点下的字节点，该节点的枝
    // 撤销选择
    console.log("我将要离开节点 "+ root.children[i] +" 到节点 "+ root +" 的树枝上");
  }
}
```