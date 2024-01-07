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