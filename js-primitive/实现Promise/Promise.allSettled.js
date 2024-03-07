function MyPromiseAllSettled(promises) {
  let count = 0
  let arr = []
  return new Promise((rs, rj) => {
    const func = (i, status, res) => {
      arr[i] = {status, value: res}
      count++
      if(count === promises.length) rs(arr)
    }
    promises.forEach((prm, index) => {
      Promise.resolve(prm).then(res => {
        func(i, 'fullfilled', res)
      }, err => {
        func(i, 'rejected', err)
      })
    })
  })
}