// 与 Promise.all 相反

function MyPromiseAny(promises) {
  let count = 0, arr = []
  return new Promise((rs, rj) => {
    promises.forEach((promise, i) => {
      Promise.resolve(promise).then(rs, err => { // 任意一个resolve就resolved，所有rejected才reject
        arr[i] = { status: 'error', message: err.message }
        count++
        if(count === promises.length) return rj(new Error('没有promise成功'))
      })
    })
  })
}