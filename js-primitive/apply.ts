/**
 * 模拟实现Function.prototype.apply()
 * 修改函数执行时this指向，apply方法第二个参数须以数组或类数组形式接收，返回执行结果
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
 */
// @ts-ignore
Function.prototype.myApply = function (context = window, args) {
  if (this === Function.prototype) return undefined // Function.prototype.myCall() 函数原型直接调用
  const fn = Symbol();
  context[fn] = this;
  let result;
  // 多判断一次参数类型是否为数组
  if (Array.isArray(args)) {
    result = context[fn](...args);
  } else {
    throw new TypeError('参数类型错误')
    // result = context[fn]();
  }
  delete context[fn];
  return result;
}