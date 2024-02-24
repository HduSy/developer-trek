/**
 * 234的组合=23的所有组合后面分别加上4的字母
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(!digits) return []
  const map = {
    2: ['a','b','c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }
  if(digits.length===1) return map[digits]

  
  function findstr(t) {
    let res = []
    if(!t) return []
    if(t.length===1) return map[t]
    for(let i = 0;i<digits;i++) {
      if(i===0) res = map[digits[i]]
      else {
        res.map()
      }
    }
    return res
  }
};


/**
 * 23
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(!digits) return []
  const map = {
    '2': ['a','b','c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  }
  let res = [] // 最终结果
  let path = '' // 中间结果

  function backtrack(digits) {
    if(path.length === digits.length) {
      res.push(path)
      return
    }

    for(let i = 0; i < digits.length; i++) {
      res+=map[digits[i]]
      backtrack()
    }
  }
}


/**
 * 真鸡儿太难了, 我是废物
 * 不同集合之间的组合
 * @param {*} digits 
 */
var letterCombinations = function(digits) {
  let k = digits.length
  if(!k) return []
  const map = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"] // 0-9
  if(k===1) return map[digits].split('')
  
  let res = []
  let path = []
  backtrack(digits, k, 0)
  return res

  /**
   * https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0017.%E7%94%B5%E8%AF%9D%E5%8F%B7%E7%A0%81%E7%9A%84%E5%AD%97%E6%AF%8D%E7%BB%84%E5%90%88.md
   * @param {*} n 字符串
   * @param {*} k 字符串长度-树深度-结束条件
   * @param {*} a 字符串索引-树宽度-遍历到哪个字母了
   * @returns 
   */
  function backtrack(n, k, a) {
    if(path.length === k) {
      res.push(path.join(''))
      return
    }

    for(const v of map[n[a]]) {
      path.push(v)
      backtrack(n, k, a + 1)
      path.pop(v)
    }
  }
}