/**
 * 原理：target instanceof Origin，Origin（构造函数）的原型是否出现在target的原型链上
 */

function myInstanceof(target, Origin) {
  // const proto = origin.__proto__
  const proto = Object.getPrototypeOf(target)
  if(proto) {
    // 构造函数的prototype属性指向原型
    if(Origin.prototype === proto) {
      return true
    } else {
      return myInstanceof(proto, Origin) // 接着在target的原型链上找
    }
  } else {
    return false
  }
}