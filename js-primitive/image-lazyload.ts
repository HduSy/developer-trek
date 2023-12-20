/**
 * 
 * <img src="loading.gif" data-src="https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg" alt="">
 * <img src="loading.gif" data-src="https://cdn.pixabay.com/photo/2014/08/01/00/08/pier-407252_1280.jpg" alt="">
 * <img src="loading.gif" data-src="https://cdn.pixabay.com/photo/2014/12/15/17/16/pier-569314_1280.jpg" alt="">
 * <img src="loading.gif" data-src="https://cdn.pixabay.com/photo/2010/12/13/10/09/abstract-2384_1280.jpg" alt="">
 */


const imgs = document.getElementsByTagName('img')
let n = 0 // 存储图片加载到的位置，避免每次都从第一张图片开始遍历

// scroll 做截流
function throttle(event, time) {
  let timer = null
  return function(...args) {
    if(!timer) {
      timer = setTimeout(() => {
        timer = null
        event.apply(this, args)
      }, time)
    }
  }
}

const lazyload = () => {
  const availableViewHeight = window.innerHeight // 可见区域高度
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop // 已滚动高度
  for (let i = n; i < imgs.length; i++) {
    if(imgs[i].offsetTop < availableViewHeight + scrollTop) {
      if(imgs[i].getAttribute('src') === 'loading.gif') { // 还未加载
        imgs[i].src = imgs[i].getAttribute('data-src')
      }
      n = i + 1 // 存储已加载图片的位置
    }
  }
}

// 页面添加滚动监听
window.addEventListener('scroll', throttle(lazyload, 200))