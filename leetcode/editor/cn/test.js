var climbStairs = function (n) {
    //terminator
    if (n === 1) return 1
    if (n === 2) return 2
    //process current
    let pre = 1, cur = 2, tmp
    for (let i = 3; i <= n; i++) {
        tmp = cur
        cur = pre + cur
        pre = tmp
    }
    return cur
};
console.log(climbStairs(45))