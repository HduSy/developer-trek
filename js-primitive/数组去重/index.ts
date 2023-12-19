let unique
// Object 开辟额外空间标记元素是否出现过
unique = (array: []) => {
  let container = {}
  return array.filter((item, index) =>  container.hasOwnProperty(item) ? false : (container[item] = true)) // false 过滤掉
}

// indexOf + filter
unique = arr => arr.filter((e,i) => arr.indexOf(e) === i)
unique = arr => arr.filter((e,i) => arr.indexOf(e) === arr.lastIndexOf(e))
// Set
unique = array => Array.from(new Set(array))
unique = array => [...new Set(array)]

