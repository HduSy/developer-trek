### 中心扩展法
参考官方的中心扩展法，计算最大串的函数getMax计算完毕后返回最大串的索引left和right放在一个对象里
把两种类型的obj和obj2算出其中最大的，在赋给我们想要得到的start和end，当然，每次赋值前判断下长度是否大于默认的

### 代码

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let len = s.length;
    function getMax(left,right){
        while(left>=0&&right<len&&s[left]===s[right]){
            left--;
            right++
        }
        return{
            left:left+1,//因为while循环停止时left已经--，所以应该退一格，right同理
            right:right-1
        }
    }
    
    let start=0,end=0;
    for(let i=0;i<len;i++){
        let obj = getMax(i,i);//aba类型
        let obj2 = getMax(i,i+1);//abba类型
        let f = obj.right - obj.left > obj2.right - obj2.left;
        let maxObj = f?obj:obj2;
        if(maxObj.right-maxObj.left>end-start){
            start = maxObj.left;
            end = maxObj.right;
        }
    }
    return s.slice(start,end+1)
};
```