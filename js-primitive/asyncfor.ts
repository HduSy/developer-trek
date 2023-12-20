// await + promise 实现异步循环打印
function sleep(time) {
  return new Promise((rs: Function)=>{
    setTimeout(() => {
      rs()
    }, time);
  })
}

const start = async () => {
  for (let i = 0; i < 6; i++) {
    await sleep(1000)
    console.log(i)
  }
}

start()