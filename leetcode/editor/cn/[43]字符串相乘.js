//给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。 
//
// 示例 1: 
//
// 输入: num1 = "2", num2 = "3"
//输出: "6" 
//
// 示例 2: 
//
// 输入: num1 = "123", num2 = "456"
//输出: "56088" 
//
// 说明： 
//
// 
// num1 和 num2 的长度小于110。 
// num1 和 num2 只包含数字 0-9。 
// num1 和 num2 均不以零开头，除非是数字 0 本身。 
// 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。 
// 
// Related Topics 数学 字符串 
// 👍 501 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (num1 === '0' || num2 === '0')
        return '0'
    // 两数相乘结果的位数一定小于等于两数位数之和
    let len1 = num1.length, len2 = num2.length, p = new Array(len1 + len2).fill(0)
    //9*9=81,个位与个位，每次只处理两位即可
    for (let i = len1; i--;) {
        for (let j = len2; j--;) {
            //乘积与乘积个位对应数相加
            const tmp = num1[i] * num2[j] + p[i + j + 1]
            //更新个位数
            p[i + j + 1] = tmp % 10
            //更新十位数
            p[i + j] += 0 | tmp / 10 // 取整技巧
        }
    }
    while (p[0] === '0')
        p.shift()
    return p.join('')
};

console.log(multiply('9333852702227987', '85731737104263')) // 800207406037324579815815608581
//leetcode submit region end(Prohibit modification and deletion)