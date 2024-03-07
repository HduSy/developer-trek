/**
 * 常写常熟
 */
const FULLFILLED = 'FULLFILLED'
const PENDING = 'PENDING'
const REJECTED = 'REJECTED'

function MyPromise(excutor) {
  this.state = PENDING
  this.value = null
  this.reason = null
  this.onFullfilledCbs = []
  this.onRejectedCbs = []

  function resolve(val) {
    if(this.state === PENDING) {
      this.state = FULLFILLED
      this.value = val
      return val
    }
  }
  function reject(reason) {
    if(this.state === PENDING) {
      this.state = FULLFILLED
      this.reason = reason
      return reason
    }
  }

  try {
    excutor(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

MyPromise.prototype.then = function(onResolved, onRejected) {
  if(typeof onRejected !== 'function') {
    onRejected = function(value) {
      return value
    }
  }
  switch(this.state) {
    case FULLFILLED:
      onResolved(this.value)
      break
    case REJECTED:
      onRejected(this.reason)
      break
    case PENDING:
      this.onFullfilledCbs.push(() => onResolved(this.value))
      this.onRejectedCbs.push(() => onRejected(this.reason))

  }
}