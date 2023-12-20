/**
 * 6 种继承
 */
// 题
function People(name, age) {
  this.name = name
  this.age = age
}
People.prototype.eat = function () {
  console.log('吃东西啦')
}
function Man(type) {
  this.type = type
}

/**
 * 1、原型继承
 * 原理：通过实例__proto__属性访问原型来继承，子类原型指向父类实例，子类实例的__proto__属性指向其原型即父类实例，访问父类实例__proto__进而访问父类原型
 * 缺点：引用类型值被所有子类共享，牵一发而动全身
 */
Man.prototype = new People('MOSS', 500)

/**
 * 2、构造继承
 * 原理：子类构造函数中调用父类构造函数
 * 缺点：无法继承父类原型，函数在构造函数中，子实例不能共享函数，浪费内存
 */
function Man(name, age, type) {
  People.call(this, name, age)
  this.type = type
}

/**
 * 3、组合继承：构造函数+原型
 * 原理：原型继承实现父类函数复用，构造函数调用解决父类引用类型值共享问题
 * 缺点：多次调用父类构造函数，创建了多个父类实例
 */
function Man(name, age, type) {
  People.call(this, name, age)
  this.type = type
}
Man.prototype = new People('MOSS', 500)
Man.constructor = Man // 修复构造函数指向

/**
 * 4、组合继承优化1
 * 原理：与3不同的是原型指定时，子类原型指向父类原型
 * 缺点：instanceof判断失误，无法区分实例是由哪个类实例化的，因为构造函数指向同一个父类
 */
function Man(name, age, type) {
  People.call(this, name, age)
  this.type = type
}
Man.prototype = People.prototype

/**
 * 5、组合继承优化2，寄生组合继承
 * 原理：子类原型指向Object.create以父类原型为基础创建的对象
 * 缺点：无
 */
function Man(name, age, type) {
  People.call(this, name, age)
  this.type = type
}
Man.prototype = Object.create(People.prototype, {
  constructor: {
    value: Man
  } // 构造函数修复
})

/**
 * ES6 class extends 继承
 */
class People {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  setAge(age) {
    this.age = age
  }
}
class Man extends People {
  constructor(name, age, type) {
    super(name, age)
    this.type = type
  }
}