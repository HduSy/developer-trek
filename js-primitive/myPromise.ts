/**
 * Promise ES6阮一峰
 * 心中熟记原理，按照原理实现即可
 */

/**
 * 三种状态：pending、resolved、rejected
 * 两种状态转换：pending->resolved、pending->rejected
 * 一个参数：exacutor = (resolve, reject) => {}
 * resolve的value，reject的reason
 */

/**
 * basic
 * 1、创建Promise对象（pending状态）,参数指定执行器函数
 * 2、在执行函数中启动异步任务
 * 3、根据结果不同做不同的处理：
 *  1）如果成功了，调用resolve()，指定成功的value，pending状态变为resolved状态
 *  2）如果失败了，调用reject()，指定失败的reason，pending状态变为rejected状态
 * 4、Promise的成功或失败的回调函数来获取成功的value或失败的reason
 */
const PENDING = 'pending'
const FULLFILLED = 'fullfilled'
const REJECTED = 'rejected'

function MyPromise(exacutor) {
  this.state = PENDING
  this.value = null
  this.reason = null

  const resolve = (value) => {
    if(this.state === PENDING) {
      this.state = FULLFILLED
      this.value = value
    }
  }

  const reject = (reason) => {
    if(this.state === PENDING) {
      this.state = REJECTED
      this.reason = reason
    }
  }

  try {
    exacutor(resolve, reject) // 初始化Promise时同步执行exacutor函数，内部异步操作
  } catch (error) {
    reject(error)
  }
}
/**
 * Promise.prototype.then：exacutor异步操作结果回调
 * (onResolved, onRejected) => {}
 *  - onResolved函数：成功的回调函数 (value) => {}
 *  - onRejected函数：失败的回调函数 (error) => {}
 * 调用then时，若Promise状态为pending，则需要将then回调的两个参数分别保存
 */
function MyPromise(exacutor) {
  this.state = PENDING
  this.value = null
  this.reason = null
  this.onFullfilledCallbacks = []
  this.onRejectedCallbacks = []

  const resolve = (value) => {
    if(this.state === PENDING) {
      this.state = FULLFILLED
      this.value = value
      this.onFullfilledCallbacks.forEach(fn => fn())
    }
  }

  const reject = (reason) => {
    if(this.state === PENDING) {
      this.state = REJECTED
      this.reason = reason
      this.onRejectedCallbacks.forEach(fn => fn())
    }
  }
  // then 异步调用
  MyPromise.prototype.then = (onFullfilled, onRejected) => {
    // 若不是函数则初始化为函数
    if(typeof onFullfilled !== 'function') {
      onFullfilled = v => v
    }
    if(typeof onRejected !== 'function') {
      onRejected = r => r
    }
    // setTimeout 模拟异步
    switch(this.state) {
      case FULLFILLED:
        setTimeout(() => onFullfilled(this.value), 0)
        break
      case REJECTED:
        setTimeout(() => onRejected(this.reason), 0)
        break
      case PENDING:
        this.onFullfilledCallbacks.push(() => setTimeout(() => onFullfilled(this.value), 0))
        this.onRejectedCallbacks.push(() => setTimeout(() => onRejected(this.reason), 0))
        break
    }
  }

  try {
    exacutor(resolve, reject) // 初始化Promise时同步执行exacutor函数，内部异步操作
  } catch (error) {
    reject(error)
  }
}
// then 链式调用
MyPromise.prototype.then = (onFullfilled, onRejected) => {
  if(typeof onFullfilled !== 'function') {
    onFullfilled = v => v
  }
  if(typeof onRejected !== 'function') {
    onRejected = r => r
  }

  const promiseTemp = new Promise((rs, rj) => {
    switch(this.state) {
      case FULLFILLED:
        setTimeout(() => {
          try {
            const result = onFullfilled(this.value)
            rs(result)
          } catch (error) {
            rj(error)
          }
        }, 0)
        break
      case REJECTED:
        setTimeout(() => {
          try {
            const result = onRejected(this.reason)
            rs(result)
          } catch (error) {
            rj(error)
          }
        }, 0)
        break
      case PENDING:
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onFullfilled(this.value);
              rs(x)
            } catch (reason) {
              rj(reason)
            }
          }, 0)
        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason);
              rs(x)
            } catch (reason) {
              rj(reason)
            }
          }, 0)
        })
        break
    }
  })
  return promiseTemp
}
// catch
MyPromise.prototype.catch = function(onRejected) {
  return this.then(null, onRejected)
}
// Promise.finally
MyPromise.prototype.finally = (cb) => {
  return this.then(value => {
    // 异步执行成功会执行cb
    cb();
    return value
  }, error => {
    // 异步执行失败会执行cb
    cb();
    return error
  })
}
// Promise.resolve 生成一个resolved状态的Promise
MyPromise.resolve = value => {
  return new Promise((rs, rj) => rs(value))
}
// Promise.reject 生成一个rejected状态的Promise
MyPromise.reject = error => {
  return new Promise((rs, rj) => rj(error))
}
// Promise.all 成功时返回结果数组，失败时返回最先被reject失败状态的值
MyPromise.all = (promises) => {
  return new Promise((rs, rj) => {
    if(promises.length === 0) return rs([]);
    let result = []
    let index = 0
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(value => {
        result[i] = value
        if(++index === promises.length) rs(result)
      }, error => {
        rj(error)
        return
      })
    }
  })
}
// Promise.race
MyPromise.race = (promises) => {
  return new Promise((rs, rj) => {
    if(promises.length === 0) return;
    promises.forEach(promise => promise.then(value => rs(value), error => rj(error)) // 哪个先resolve就先返回
  })
}