// 创建对象
function SingleTon(name) {
  this.name = name
}

SingleTon.prototype.getName = function() {
  return this.name
}
// 管理单例
SingleTon.getInstance = (function(){
  let instance
  // 返回闭包
  return function(name) {
    if(!instance) instance = new SingleTon(name)
    return instance
  }
})()

const a = SingleTon.getInstance('ccc')
const b = SingleTon.getInstance('ttt')

console.log(a === b) // true
console.log(a.getName()) // ccc
console.log(b.getName()) // ccc