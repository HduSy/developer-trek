let targetObj = {
  name: 'name'
}

function observer(oldVal, newVal) {
  console.log(`观察到name属性值变化：${oldVal} -> ${newVal}`)
}

let proxyObj = new Proxy(targetObj, {
  set(target, p, newValue, reveiver) {
    observer(target[p], newValue)
    Reflect.set(target, p, newValue, reveiver)
  }
})