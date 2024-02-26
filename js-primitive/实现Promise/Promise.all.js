function MyPromiseAll(promises) {
  let arr = [], count = 0 // 完成的计数
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(res => {
        arr[index] = res
        count++;
        if(count === promises.length) resolve(res)
      }, reject)
    })
  })
}