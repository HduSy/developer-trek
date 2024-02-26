/**
 * 模拟实现Function.prototype.call()
 * 修改函数执行时this指向，call方法剩余参数一个个接受，返回执行结果
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
 */
// func.call(this, ...args)
// @ts-ignore
Function.prototype.myCall = function(context=window, ...args) {
  if(this == Function.prototype) return undefined // Function.prototype.myCall() 函数原型直接调用
  context = context||window
  const fn = Symbol() // 保证属性不重名
  context[fn] = this // this作为myCall调用者指向当前函数
  const result = context[fn](...args) // 执行
  delete context[fn]
  return result
}
