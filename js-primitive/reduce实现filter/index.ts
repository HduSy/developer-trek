// @ts-ignore
Array.prototype.reduce2Filter = function (handler) {
  return this.reduce((pre, cur, i) => {
    if (handler.call(this, cur, i)) pre.push(cur);
    return pre;
  }, [])
}