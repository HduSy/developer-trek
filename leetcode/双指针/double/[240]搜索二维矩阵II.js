/**
 * 该矩阵关键特点在于，从左到右，从上到下数字是递增的，很快能想到缩减空间法去解题
 * @param {number[][]} matrix [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
 * @param {number} target
 * @return {boolean}
 */
// m * n 的矩阵 matrix
var searchMatrix = function(matrix, target) {
  let i = 0, j = matrix[i].length - 1
  while(j >= 0 && i < matrix.length) {
    if(matrix[i][j] === target) return true
    if(matrix[i][j] > target) j--
    else i++
  }
  return false
};