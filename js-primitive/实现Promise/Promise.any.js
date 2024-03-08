// 与 Promise.all 相反

function MyPromiseAny(promises) {
  let count = 0, arr = []
  return new Promise((rs, rj) => {
    function func(i ,status, res) {
      arr[i] = {status, value: res}
      count++
      if(count === promises.length) rs(arr)
    }
    promises.forEach((prm, i) => {
      Promise.resolve(prm).then(v => {
        func(i, 'fullfilled', v)
      }).catch(e => {
        func(i, 'erject', e)
      })
    })
  })
}