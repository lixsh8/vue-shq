/**
 * 格式化时间函数
 * @str: 2018-08-02 12:12:12日期字符串
 * @format: 格式   yyyy年MM月dd日 ....
 */
export function formatTime(str, format) {
  if (!str) return
  if (str.indexOf('-') >= 0) {
    str = str.replace(/-/g, '/')
  }
  var dateTime = new Date(str)
    
  Date.prototype.Format = function (fmt) { 
    var o = {
      'M+': this.getMonth() + 1, // 月份 
      'd+': this.getDate(), // 日 
      'h+': this.getHours(), // 小时 
      'm+': this.getMinutes(), // 分 
      's+': this.getSeconds(), // 秒 
      'q+': Math.floor((this.getMonth() + 3) / 3), // 季度 
      'S': this.getMilliseconds() // 毫秒 
    }
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (var k in o) { if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
    return fmt
  }
  return dateTime.Format(format)
}

/**
 * 弹出框
 * @txt: 文字
 * @t: 如果是字符串类型则不关闭-'noclose'; 如果是数字类型则自动关闭单位是ms-'3000'; 什么都不传默认就是3000
 */
export function alert(txt, t) {
  var html = `
    <div class="alert">
      <div class="alert-cnt">${txt}</div>
    </div>
  `
  var timer = null
  var time = t || 3000
  var alert = document.createElement('div')
  var app = document.getElementById('app')
  alert.innerHTML = html
  app.appendChild(alert)

  timer && clearTimeout(timer)
  // 阻止body滚动
  alert.addEventListener('touchmove', function(ev) {
    ev.stopPropagation()
    ev.preventDefault()
  }, false)
  // 点击关闭
  alert.addEventListener('click', function(ev) {
    app.removeChild(alert)
  })
  console.log(typeof time)
  // 定时关闭
  if (typeof time === 'number') {
    setTimeout(function () {
      alert && app.removeChild(alert)
    }, time)
  }
}

/***
 * 滚动加载更多
 * 
 */
(function() {
  // function Scroll() {
  //   this.bindEvent()
  // }
  // Scroll.prototype = {
  //   bindEvent: function() {
  //     window.addEventListener('scroll', function(e) {
  //       console.log(document.body.scrollTop)
  //     })
  //   }
  // }
  // window.Scroll = Scroll
})()

