function insertSort(arr = []) {
  for(let i = 1; i < arr.length; i++) { // 从第2个位置开始插入，前面的已有序
    let target = i // 插入位置
    for(let j = i - 1; j >= 0; j--) { // 从后向前
      if(arr[j] > arr[target]) {
        [arr[target], arr[j]] = [arr[j], arr[target]]
        target = j // 更新插入位置
      } else {
        break // 大于等于时跳出内层循环
      }
    }
    // 下一个元素
  }
  return arr
}