/**
 * <img src="loading.gif" data-src="https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg" alt="">
 * <img src="loading.gif" data-src="https://cdn.pixabay.com/photo/2014/08/01/00/08/pier-407252_1280.jpg" alt="">
 * <img src="loading.gif" data-src="https://cdn.pixabay.com/photo/2014/12/15/17/16/pier-569314_1280.jpg" alt="">
 * <img src="loading.gif" data-src="https://cdn.pixabay.com/photo/2010/12/13/10/09/abstract-2384_1280.jpg" alt="">
 */

// 1、监听高度实现
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
  for (let i = n; i < imgs.length; i++) {
    if(imgs[i].offsetTop < window.innerHeight + document.documentElement.scrollTop || document.body.scrollTop) { // 可见区域高度 + 已滚动高度
      if(imgs[i].getAttribute('src') === 'loading.gif') { // 还未加载
        imgs[i].src = imgs[i].getAttribute('data-src')
      }
      n = i + 1 // 存储已加载图片的位置
    }
  }
}

// 页面添加滚动监听
window.addEventListener('scroll', throttle(lazyload, 200))

// 2、IO
function lazyload() {
  if(window.IntersectionObserver) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const img = entry.target as HTMLImageElement
        if(entry.isIntersecting) {
          if(img.getAttribute('src') === 'loading.gif') {
            img.src = img.getAttribute('data-src')
          }
          observer.unobserve(img) // 移除监听：停止监听已开始懒加载的img元素
        }
      })
    })
    for (let i = 0; i < imgs.length; i++) {
        observer.observe(imgs[i]) // 逐个监听img元素
    }
  } else {
    // const rect =  element.getBoundingClientRect()
    // rect.top < window.innerHeight && rect.bottom > 0 && rect.left < window.innerWidth && rect.right > 0

    // 或者
    // element.offsetTop < window.innerHeight + document.documentElement.scrollTop || document.body.scrollTop
  }
}