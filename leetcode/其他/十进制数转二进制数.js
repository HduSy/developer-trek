function Decimal2Binary(num) {
  let tmp = num
  let result = ''
  while(tmp > 0) {
    let remainder = tmp % 2
    tmp = parseInt(tmp/2, 10)
    result = remainder + result
  }
  const nativeTrans = num.toString(2)
  console.log('函数转换结果：', result)
  console.log('原生转换结果：', nativeTrans)
}