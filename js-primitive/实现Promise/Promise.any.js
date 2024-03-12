// 与 Promise.all 相反

function PromiseAny(promises) {
  let errs = [], count = 0
  return new Promise((rs, rj) => {
    for(let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(v => rs(v), err => {
        errs[i] = err
        count++
        if(count === promises.length) rj(errs)
      })
    }
  })
}