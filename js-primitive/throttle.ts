/**
 * 节流
 * 不管事件触发频率如何，回调函数在Ns内只会执行一次
 */

// 时间戳实现
function throttle(event, time) {
  let pre = 0
  return function (...args) {
    if (Date.now() - pre > time) {
      pre = Date.now();
      event.apply(this, args);
    }
  }
}
// 定时器实现
function throttle(event, time) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        event.apply(this, args);
      }, time);
    }
  }
}
// 结合版
function throttle(event, time) {
  let pre = 0
  let timer = null
  return function (...args) {
    if (Date.now() - pre > time) {
      clearTimeout(timer)
      timer = null // 第一次和最后一次触发都会执行回调函数
      pre = Date.now()
      event.apply(this, args)
    } else if (!timer) {
      timer = setTimeout(() => {
        event.apply(this, args)
      }, time)
    }
  }
}