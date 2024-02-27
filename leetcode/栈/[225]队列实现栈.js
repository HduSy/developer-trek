
var MyStack = function() {
  this.queueIn = []
  this.queueOut = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.queueIn.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  if(this.queueIn.length === 0) {
    [this.queueIn, this.queueOut] = [this.queueOut, this.queueIn]
  }
  while(this.queueIn.length > 1) {
    this.queueOut.push(this.queueIn.shift())
  }
  return this.queueIn.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  const x = this.pop() // 取出
  this.queueIn.push(x) // 归位
  return x
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.queueIn.length === 0 && this.queueOut.length === 0
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */