// 数组乱序-洗牌

function shuffle(arr) {
  let length = arr.length
  let index = length - 1
  while(index >= 0) {
    let random = Math.floor(length * Math.random());
    [arr[index], arr[random]] = [arr[random], arr[index]]
    index--;
  }
  return arr
}