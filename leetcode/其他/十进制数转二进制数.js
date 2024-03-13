function Decimal2Binary(num) {
  let tmp = num
  let result = ''
  while(tmp > 0) {
    let remainder = tmp % 2
    tmp = parseInt(tmp/2, 10)
    result = remainder + result
  }
  const nativeTrans = num.toString(2)
}