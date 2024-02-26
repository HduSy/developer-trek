/**
 * 最外层的拷贝
 * 浅拷贝 != 赋值
 * 将A对象的属性全部赋值给B对象
 * 如果属性值为引用类型，拷贝过去的是引用地址，A\B对象该属性指向同一引用类型值
 * 对象：Object.assign、Object.create()、扩展运算符、手动实现
 * 数组：Array.concat()、Array.slice()、Array.from()、扩展运算符、手动实现
 */
function shallowCopy(obj) {
  if (typeof obj !== 'object' || obj === null) return obj
  let result = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) result[key] = obj[key]
  }
  return result;
}
// 原始类型值不管是浅拷贝还是深拷贝都是对值本身的拷贝，对拷贝后值的修改不会影响到原始的值
// 对于引用数据类型进行浅拷贝，拷贝后的值的修改会影响到原始的值，如果执行的是深拷贝，则拷贝的对象和原始对象之间相互独立，互不影响

/**
 * 深拷贝
 * 将A对象的属性全部赋值给B对象
 * 如果属性值为引用类型，则新建一个引用类型在堆内存中开辟出一个新的区域存来进行存放，并将拷贝值赋给该引用类型，A\B对象相互独立，互不影响
 * JSON.parse(JSON.stringify()) // 很多坑
 */

// 简单递归
function deepCopy(obj, visited = new WeakMap()) {
  if(typeof obj !== 'object' || obj === null) return obj
  if(obj instanceof RegExp) return new RegExp(obj)
  if(obj instanceof Date) return new Date(obj)
  // 检查是否已访问过该对象，如果是则返回已拷贝的对象，避免无限递归
  if(visited.has(obj)) return visited.get(obj)
  let result = Array.isArray(obj) ? []:{}
  visited.set(obj, result) // 将当前对象标记为已访问
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      result[i] = deepCopy(obj[i], visited);
    }
  } else {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = deepCopy(obj[key], visited);
      }
    }
  }
  return result
}
// lodash
const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Object]';
const argsTag = '[object Arguments]';

const boolTag = '[object Boolean]';
const dateTag = '[object Date]';
const numberTag = '[object Number]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';
const errorTag = '[object Error]';
const regexpTag = '[object RegExp]';
const funcTag = '[object Function]';

const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag];


function forEach(array, iteratee) {
    let index = -1;
    const length = array.length;
    while (++index < length) {
        iteratee(array[index], index);
    }
    return array;
}

function isObject(target) {
    const type = typeof target;
    return target !== null && (type === 'object' || type === 'function');
}

function getType(target) {
    return Object.prototype.toString.call(target);
}

function getInit(target) {
    const Ctor = target.constructor;
    return new Ctor();
}

function cloneSymbol(targe) {
    return Object(Symbol.prototype.valueOf.call(targe));
}

function cloneReg(targe) {
    const reFlags = /\w*$/;
    const result = new targe.constructor(targe.source, reFlags.exec(targe));
    result.lastIndex = targe.lastIndex;
    return result;
}

function cloneFunction(func) {
    const bodyReg = /(?<={)(.|\n)+(?=})/m;
    const paramReg = /(?<=\().+(?=\)\s+{)/;
    const funcString = func.toString();
    if (func.prototype) {
        const param = paramReg.exec(funcString);
        const body = bodyReg.exec(funcString);
        if (body) {
            if (param) {
                const paramArr = param[0].split(',');
                return new Function(...paramArr, body[0]);
            } else {
                return new Function(body[0]);
            }
        } else {
            return null;
        }
    } else {
        return eval(funcString);
    }
}

function cloneOtherType(targe, type) {
    const Ctor = targe.constructor;
    switch (type) {
        case boolTag:
        case numberTag:
        case stringTag:
        case errorTag:
        case dateTag:
            return new Ctor(targe);
        case regexpTag:
            return cloneReg(targe);
        case symbolTag:
            return cloneSymbol(targe);
        case funcTag:
            return cloneFunction(targe);
        default:
            return null;
    }
}

function clone(target, map = new WeakMap()) {

    // 克隆原始类型
    if (!isObject(target)) {
        return target;
    }

    // 初始化
    const type = getType(target);
    let cloneTarget;
    if (deepTag.includes(type)) {
        cloneTarget = getInit(target, type);
    } else {
        return cloneOtherType(target, type);
    }

    // 防止循环引用
    if (map.get(target)) {
        return target;
    }
    map.set(target, cloneTarget);

    // 克隆set
    if (type === setTag) {
        target.forEach(value => {
            cloneTarget.add(clone(value));
        });
        return cloneTarget;
    }

    // 克隆map
    if (type === mapTag) {
        target.forEach((value, key) => {
            cloneTarget.set(key, clone(value));
        });
        return cloneTarget;
    }

    // 克隆对象和数组
    const keys = type === arrayTag ? undefined : Object.keys(target);
    forEach(keys || target, (value, key) => {
        if (keys) {
            key = value;
        }
        cloneTarget[key] = clone(target[key], map);
    });

    return cloneTarget;
}

// 默写
/**
 * 
 * @param target 深拷贝目标
 * @param visited 记录访问值，防止循环引用
 * @returns 
 */
function deepClone(target, visited = new WeakMap()) {
  if(typeof target !== 'object' || target === null) return target
  if(target instanceof RegExp) return new RegExp(target)
  if(target instanceof Date) return new Date(target)
  if(visited.has(target)) return visited.get(target)
  let result = new target.constructor() // 原型上的构造函数
  visited.set(target, result)
  for(let k in result) {
    if(result.hasOwnProperty(k)) {
      result[k] = deepClone(target[k], visited)
    }
  }
  return result
}