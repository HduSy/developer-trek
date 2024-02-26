/**
 * 将一个多参数函数转化为一系列单个参数函数的技术
 * 通俗理解：通过闭包暂存参数，参数数量足够时，才执行函数
 */

function currying(fn: Function, ...args1) {
  if(args1.length >= fn.length) {
    return fn(...args1)
  } else {
    // 闭包
    return (...args2) => currying(fn, ...args1, ...args2)
  }
}

// demo

function add(a, b, c) {
  return a + b + c
}

const curryingAdd = currying(add)

curryingAdd(1, 2, 3) // 6
curryingAdd(1)(2)(3) // 6
curryingAdd(1)(2, 3) // 6
curryingAdd(1, 2)(3) // 6
curryingAdd()(1, 2, 3) // 6