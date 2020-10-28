//给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。 
//
// 
//
// 提示： 
//
// 
// num1 和num2 的长度都小于 5100 
// num1 和num2 都只包含数字 0-9 
// num1 和num2 都不包含任何前导零 
// 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式 
// 
// Related Topics 字符串 
// 👍 274 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    if (num1==='0')
        return num2
    if (num2==='0')
        return num1
    //直接看答案了，解题415过程处理不了超出精度问题而看到此题
    let i = num1.length - 1, j = num2.length-1, ans = [], add = 0
    while (i >= 0 || j >= 0 || add !== 0) {
        const x = i >= 0 ? num1.charAt(i) - 0 : 0
        const y = j >= 0 ? num2.charAt(j) - 0 : 0
        const res = x + y + add
        ans.unshift(res % 10)
        add = Math.floor(res / 10)
        i -= 1
        j -= 1
    }
    return ans.join('')
};
//leetcode submit region end(Prohibit modification and deletion)
