var reverseWords = function(s) {
  s = s.trim()
  let slow = s.length - 1, fast = s.length - 1
  let res = []
  while(fast >= 0) {
    while(fast >= 0 && s[fast]!==' ') fast--
    res.push(s.slice(fast+1, slow+1))
    while(fast >= 0 && s[fast]===' ') fast--
    slow = fast
  }
  return res.join(' ')
}