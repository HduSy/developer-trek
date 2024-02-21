# 滑动窗口法
用到双指针类型解题方法
## 核心理念
左右指针控制窗口大小，向右滑动窗口
## 核心框架
```js
var slidingWindow = function(s) {
    const record = new Map() // 记录：用合适的数据结构「记录」窗口中的数据，不一定是Map可以是一个结果（窗口中数据总和）
    let left = 0, right = 0 // 左右指针，窗口左右边
    while (right < s.length) { // 滑到底了，滑动结束
        let c = s[right] // 将要移入窗口的值
        record.set(c, (record.get(c) || 0) + 1) // 更新record
        
        // 进行窗口内数据的一系列更新
        ...

        // 收缩条件判断，左侧窗口进行收缩
        while (left < right && window needs shrink condition) {
            let d = s[left] // 要移出窗口的值
            record.set(d, record.get(d) - 1) // 更新record
            left++ // 向左缩小窗口
            
            // 进行窗口内数据的一系列更新
            ...
            // 满足条件时更新结果
            ...
        }
        // 满足条件时更新结果
        ...

        right++ // 向右增大窗口
    }
}
```
## leetcode
[3.无重复字符的最长子串](./[3]无重复字符的最长子串.js)   
[209.长度最小的子数组](./[209]长度最小的子数组.js)
## 参考
[滑动窗口法](https://labuladong.online/algo/essential-technique/sliding-window-framework/)