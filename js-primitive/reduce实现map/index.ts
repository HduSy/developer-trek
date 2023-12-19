// @ts-ignore
Array.prototype.reduceToMap = function (handler) {
  return this.reduce((pre, cur, i) => {
    pre.push(handler.call(this, cur, i))
    return pre;
  }, [])
}