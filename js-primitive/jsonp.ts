/**
 * 利用了允许静态js、css资源跨域原理
 * 
 * 浏览器将返回一个url里拼接的同名请求参数callback
 * 且该callback参数为服务端处理后的数据res
 * 响应MIME类型为javascript/text
 * 浏览器收到相应后，识别到类型立即执行
 * 而客户端已注册了该回调，拿到res
 */
(function(window, document) {
  const jsonp = (url: string, data, callback) => {
    // 1、拼接url data参数，将传入的data数据转化为url字符串形式，如 {id:1,name:'jack'} => id=1&name=jack
    let dataStr = url.indexOf('?') ? '&' : '?'
    for (const key in data) {
      dataStr += `${key}=${data[key]}&`
    }
    // 2、拼接url参数callback参数
    const cbName = Math.random().toString().replace('.', '')
    dataStr += `callback=${cbName}`
    // 3、创建script标签发起GET请求
    const scriptEl = document.createElement('script')
    scriptEl.src = `${url}${dataStr}`
    // 4、window上注册回调以服务端响应后执行
    window[cbName] = res => {
      callback(res)
      // 5、清除工作，删除script标签、删除window上本次jsonp请求回调函数属性
      document.body.removeChild(scriptEl)
      delete window[cbName]
    }
    // 3、script开始请求
    document.body.appendChild(scriptEl)
  }
  // @ts-ignore 暴露到全局方法
  window.$jsonp = jsonp
})(window, document)