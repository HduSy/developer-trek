//给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。 
//
// 示例 1： 
//
// 输入: "babad"
//输出: "bab"
//注意: "aba" 也是一个有效答案。
// 
//
// 示例 2： 
//
// 输入: "cbbd"
//输出: "bb"
// 
// Related Topics 字符串 动态规划 
// 👍 2722 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (!s || s.length === 0) return ''
    let len = 1, strLen = s.length
    let maxLen = 0, maxStart = 0
    let left = 0, right = 0
    for (let i = 0; i < strLen; i++) {
        left = i - 1
        right = i + 1
        while (left >= 0 && s.charAt(left) === s.charAt(i)) {
            left--
            len++
        }
        while (right < strLen && s.charAt(right) === s.charAt(i)) {
            right++
            len++
        }
        while (left >= 0 && right < strLen && s.charAt(left) === s.charAt(right)) {
            len += 2
            left--
            right++
        }
        if (len > maxLen) {
            maxStart = left
            maxLen = len
        }
        len = 1
    }
    return s.substring(maxStart + 1, maxStart + maxLen + 1)
};

function palindromeTest(str) {
    if (!str) return true
    if (str.length === 1) return true
    let left = 0, right = str.length - 1
    while (left < right) {
        if (str[left] !== str[right])
            return false
        left++
        right--
    }
    return true
}

//leetcode submit region end(Prohibit modification and deletion)