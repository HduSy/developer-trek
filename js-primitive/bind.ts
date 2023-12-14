/**
 * 模拟实现Function.prototype.bind()
 * 修改函数执行时this指向，bind方法第二个参数接收方式和call相同，返回修改了this后的可执行函数
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
 */
// @ts-ignore
Function.prototype.myBind = function (context,...args1) {
  if (this === Function.prototype) {
    throw new TypeError('Error')
  }
  const _this = this
  return function F(...args2) {
    // 判断是否用于构造函数
    if (this instanceof F) {
      return new _this(...args1, ...args2)
    }
    // 普通函数调用
    return _this.apply(context, args1.concat(args2))
  }
}