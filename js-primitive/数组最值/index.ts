let max
// reduce
max = array => array.reduce((c,n)=>Math.max(c,n))

// call apply
const array = [3,2,1,4,5];
Math.max.call(null, ...array)
Math.max.apply(null, array)
Math.max(...array)