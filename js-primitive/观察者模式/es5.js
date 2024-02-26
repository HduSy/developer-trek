let targetObj = {}

function observer(oldVal, newVal) {
  console.log(`观察到name属性值变化：${oldVal} -> ${newVal}`)
}

let name = '观察者'

Object.defineProperty(targetObj, 'name', {
  get() {
    return name
  },
  set(value) {
    name = value
    observer(targetObj['name'], value)
  }
})