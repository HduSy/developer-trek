function ShallowClone(obj) {
  if(typeof obj !== 'object' || obj === null) return obj
  let res = Array.isArray(obj) ? [] : {}
  for(let k in obj) {
    if(obj.hasOwnProperty(k)) res[k] = obj[k]
  }
  return res
}

function DeepClone(obj, visited = new WeakMap()) {
  if(typeof obj !== 'object' || obj === null) return obj
  if(visited.has(obj)) return visited.get(obj)
  let res = Array.isArray(obj) ? [] : {}
  visited.set(obj, res)
  if(Array.isArray(obj)) {
    for(let i = 0; i < obj.length; i++) {
      res[i] = DeepClone(obj[i], visited)
    }
  } else {
    for(let k in obj) {
      if(obj.hasOwnProperty(k)) res[k] = DeepClone(obj[k], visited)
    }
  }
  return res
}

function flat(arr) {
  let res = []
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr)) {
      res.push(flat(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res
}

function MyInstanceOf(target, origin) {
  let proto = Object.getPrototypeOf(target)
  if(proto) {
    if(origin.prototype === proto) return true
    return MyInstanceOf(proto, origin)
  }
  return false
}

function sleep(time, i) {
  return new Promise((rs, rj) => {
    setTimeout(() => {
      rs(i)
    }, time)
  })
}

const printAsync = async () => {
  for(let i = 0; i < 6; i++) {
    const res = await sleep(1000, i)
    console.log(res)
  }
}

const State1 = 'Pending'
const State2 = 'fullfilled'
const State3 = 'rejected'

function MyPromise(excutor) {
  this.state = State1
  this.value = null
  this.reason = null

  this.onFullfilledCbs = []
  this.onRejectedCbs = []

  function resolve(value) {
    if(this.state === State1) {
      this.state = State2
      this.value = value
      return value
    }
  }

  function reject(reason) {
    if(this.state === State1) {
      this.state = State3
      this.reason = reason
      return reason
    }
  }

  try {
    excutor(resolve, reject)
  } catch(err) {
    reject(err)
  }
}

MyPromise.prototype.then = (onFullfilled, onRejected) => {
  if(typeof onFullfilled !== 'function') {
    onFullfilled = function(res) {
      return res
    }
  }
  if(typeof onRejected !== 'function') {
    onRejected = function(reason) {
      throw reason
    }
  }

  const promise = new Promise((rs, rj) => {
    switch(this.state) {
      case State1:
        setTimeout(() => {
          this.onFullfilledCbs.push(() => {
            setTimeout(() => {
              try {
                const x = onFullfilled(this.value)
                rs(x)
              } catch (error) {
                rj(error)
              }
            }, 0)
          })
          this.onRejectedCbs.push(() => onRejected(this.reason))
        }, 0)
        break
      case State2:
        setTimeout(() => {
          try {
            const x = onFullfilled(this.value)
            rs(x)
          } catch (error) {
            rj(error)
          }
        }, 0)
        break
      case State3:
        setTimeout(() => {
          try {
            const x = onRejected(this.reason)
            rs(x)
          } catch (error) {
            rj(error)
          }
        }, 0)
    }
  })
  return promise
}