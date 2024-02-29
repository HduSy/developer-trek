## 基本条件
- 有序
- 不含重复元素
## 框架
```js
var binarySearch = function(nums, target) {
    var left = 0, right = nums.length - 1;

    while(left <= right) {
        var mid = parseInt((left + right) / 2);
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        }
    }
    return -1;
}
```
## 找边界
含重复元素时倒也能找到边界，可见 [[34]在排序数组中查找元素的第一个和最后一个位置](./[34]在排序数组中查找元素的第一个和最后一个位置.js)