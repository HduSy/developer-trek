/**
 * 防抖（debounce）
 * 事件触发回调函数执行一次后，ns之内事件被再次触发时回调函数不会再次执行，ns后事件被触发时回调函数才能再次被执行
 * 窗口resize、搜索框远程搜索、表单校验
 */
function debounce(event, time) {
  let timer = null;
  // 返回一个闭包函数
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      event.apply(this, args); // 箭头函数保证this指向闭包函数调用者而不是debounce调用者
    }, time);
  };
}
/**
 * 首次立即执行
 */
function debounce(event, time, flag) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    if (flag && !timer) {
      event.apply(this, args);
    }
    timer = setTimeout(() => {
      event.apply(this, args);
    }, time);
  };
}