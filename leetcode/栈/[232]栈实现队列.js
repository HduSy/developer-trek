/**
 * https://programmercarl.com/0232.%E7%94%A8%E6%A0%88%E5%AE%9E%E7%8E%B0%E9%98%9F%E5%88%97.html
 * 额外创建一个栈，优先出栈
 */
var MyQueue = function() {
  this.stackIn = []
  this.stackOut = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stackIn.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  let size = this.stackOut.length
  if(size) {
    return this.stackOut.pop()
  }
  while(this.stackIn.length) {
    this.stackOut.push(this.stackIn.pop())
  }
  return this.stackOut.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  const x = this.pop() // 取出来
  this.stackOut.push(x) // 再放进去
  return x
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.stackIn.length === 0 && this.stackOut.length === 0
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */