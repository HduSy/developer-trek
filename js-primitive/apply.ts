/**
 * 模拟实现Function.prototype.apply()
 * 修改函数执行时this指向，apply方法第二个参数须以数组或类数组形式接收，返回执行结果
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
 */
// @ts-ignore
Function.prototype.myApply = function (context = window, args) {
  if (this === Function.prototype) return undefined
  const fn = Symbol();
  context[fn] = this;
  let result;
  if (Array.isArray(args)) {
    result = context[fn](...args);
  } else {
    result = context[fn]();
  }
  delete context[fn];
  return result;
}