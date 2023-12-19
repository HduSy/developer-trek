let flat
// 基本实现 利用了递归
flat = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(flat(array[i])); // 递归
    } else {
      result.push(array[i]);
    }
  }
  return result;
}
// reduce简化
flat = (array) => {
  return array.reduce(
    (target, current) => Array.isArray(current) ? target.concat(flat(current)) : target.concat(current)
    , [])
}
// 指定深度扁平化
const flatByDeep = (array: [], deep: number) => {
  return array.reduce(
    (previousValue, currentValue) => 
      Array.isArray(currentValue) && deep > 1 ? 
        previousValue.concat(flatByDeep(currentValue, deep - 1)) : previousValue.concat(currentValue)
    , [])
}