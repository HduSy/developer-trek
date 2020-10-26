//罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。 
//
// 字符          数值
//I             1
//V             5
//X             10
//L             50
//C             100
//D             500
//M             1000 
//
// 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做 XXVII, 即为 XX + V + I
//I 。 
//
// 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5
// 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况： 
//
// 
// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。 
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。 
// 
//
// 给定一个整数，将其转为罗马数字。输入确保在 1 到 3999 的范围内。 
//
// 示例 1: 
//
// 输入: 3
//输出: "III" 
//
// 示例 2: 
//
// 输入: 4
//输出: "IV" 
//
// 示例 3: 
//
// 输入: 9
//输出: "IX" 
//
// 示例 4: 
//
// 输入: 58
//输出: "LVIII"
//解释: L = 50, V = 5, III = 3.
// 
//
// 示例 5: 
//
// 输入: 1994
//输出: "MCMXCIV"
//解释: M = 1000, CM = 900, XC = 90, IV = 4. 
// Related Topics 数学 字符串 
// 👍 435 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let res = ''
    while (num > 0) {
        if (num >= 1000) {
            num -= 1000
            res += 'M'
        } else if (num >= 900) {
            num -= 900
            res += 'CM'
        } else if (num >= 500) {
            num -= 500
            res += 'D'
        } else if (num >= 400) {
            num -= 400
            res += 'CD'
        } else if (num >= 100) {
            num -= 100
            res += 'C'
        } else if (num >= 90) {
            num -= 90
            res += 'XC'
        } else if (num >= 50) {
            num -= 50
            res += 'L'
        } else if (num >= 40) {
            num -= 40
            res += 'XL'
        } else if (num >= 10) {
            num -= 10
            res += 'X'
        } else if (num >= 9) {
            num -= 9
            res += 'IX'
        } else if (num >= 5) {
            num -= 5
            res += 'V'
        } else if (num >= 4) {
            num -= 4
            res += 'IV'
        } else {
            num -= 1
            res += 'I'
        }
    }
    return res
};
//另种更简洁的贪心写法
intToRoman = function (num) {
    let res = '', index = 0
    let nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    while (index < 13) {
        while (num >= nums[index]) {
            res += romans[index]
            num -= nums[index]
        }
        index++
    }
    return res
}
// console.log(intToRoman(1995))
//leetcode submit region end(Prohibit modification and deletion)
