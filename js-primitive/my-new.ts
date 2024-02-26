// new 实现
function myNew(Construtor, ...args) {
  const newObj = new Object() // 创建一个新对象
  // newObj.__proto__ = Construtor.prototype
  Object.setPrototypeOf(newObj, Construtor.prototype) // 新对象的原型指向构造函数的原型
  const result = Construtor.apply(newObj, args) // 修改构造函数的this为newObj并执行
  return typeof result === 'object' ? result : newObj // 返回值处理
}

// 测试
function Otaku(name, age) {
  this.name = name;
  this.age = age;
  this.habit = "Games";
}
Otaku.prototype.strength = 60;
Otaku.prototype.sayYourName = function () {
  console.log("I am " + this.name);
};

var person = myNew(Otaku, "Kevin", "18");

console.log(person.name); // Kevin
console.log(person.habit); // Games
console.log(person.strength); // 60
person.sayYourName(); // I am Kevin
