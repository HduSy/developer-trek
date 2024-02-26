function MyPromiseRace(promises) {
  return new Promise((rs, rj) => {
    for(p of promises) {
      Promise.resolve(p).then(rs, rj)
    }
  })
}