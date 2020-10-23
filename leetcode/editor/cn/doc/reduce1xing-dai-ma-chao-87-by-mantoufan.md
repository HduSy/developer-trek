### 解题思路
- `Reduce`遍历字符串
    - 循环周期`l = numRows * 2 - 2`
    - ，根据`下标`判断当前字符在第几行`y = Math.min(i % l, l - i % l)`
    - `y`作为下标，将当前字符依次放入`p[y]`
        - 数组有序，`y`小，在前面
        - `y`相同，在同一行
        - 同一行的顺序，与遍历字符串的顺序一致（`+=`即可）
### 代码

```javascript
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    return numRows === 1 ? s : s.split('').reduce((p, v, i, a, l = numRows * 2 - 2) => (p[Math.min(i % l, l - i % l)] += s[i]) && p, new Array(numRows).fill('')).join('')
```

### 结果
![11.png](https://pic.leetcode-cn.com/1601195412-znJpcn-11.png)

