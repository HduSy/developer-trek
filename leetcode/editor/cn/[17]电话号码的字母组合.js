//给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。 
//
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。 
//
// 
//
// 示例: 
//
// 输入："23"
//输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// 
//
// 说明: 
//尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。 
// Related Topics 字符串 回溯算法 
// 👍 973 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits) return []
    let strs = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    //边界条件注意
    if (digits.length === 1) {
        return [...strs[parseInt(digits)]]
    }
    let tmp = []
    for (let char of digits) {
        tmp.push(strs[parseInt(char)])
    }
    let res = []
    for (let i = 0; i < tmp.length - 1;) {
        for (let j = 0; j < tmp[i].length; j++) {
            for (let k = 0; k < tmp[i + 1].length; k++) {
                res.push(tmp[i][j] + tmp[i + 1][k])
            }
        }
        tmp.splice(0, 2, res)
        res = []
    }
    return tmp[0]
};
// console.log(letterCombinations('23'))
//leetcode submit region end(Prohibit modification and deletion)
