

// 来源：https://tech.meituan.com/2017/06/09/webviewperf.html
// 1. CSS的加载会在HTML解析到CSS的标签时开始，所以CSS的标签要尽量靠前。
// 2. 但是，CSS链接下面不能有任何的JS标签（包括很简单的内联JS），否则会阻塞HTML的解析。
// 3. 如果必须要在头部增加内联脚本，一定要放在CSS标签之前。

// 来源：https://rules-center.meituan.com/m/detail/guize/4
// 这段代码要添加在CSS标签之前 ![performance]([./images/fef19af0.png])
; (function () {
  var UA = navigator.userAgent
  var isAndroid = /android|adr/gi.test(UA)
  var isIos = /iphone|ipod|ipad/gi.test(UA) && !isAndroid
  var isMobile = isAndroid || isIos
  var docEl = document.documentElement
  var maxwidth = docEl.dataset.mw || 750
  var dpr = isIos ? Math.min(window.devicePixelRatio, 3) : 1
  var scale = 1 / dpr
  var tid
  docEl.removeAttribute('data-mw')
  docEl.dataset.dpr = dpr
  metaEl = document.createElement('meta')
  metaEl.name = 'viewport'
  metaEl.content = fillScale(scale)
  docEl.firstElementChild.appendChild(metaEl)
  var refreshRem = function() {
    var width = docEl.getBoundingClientRect().width
    if (width / dpr > maxwidth) {
      width = maxwidth * dpr
    }
    var rem = parseInt((width / 16) * 2.15) // 某些浏览器默认字体不是 16px
    docEl.style.fontSize = rem + 'px'
  }
  window.addEventListener(
    'resize',
    function() {
      clearTimeout(tid)
      tid = setTimeout(refreshRem, 300)
    },
    false
  )
  window.addEventListener(
    'pageshow',
    function(e) {
      if (e.persisted) {
        clearTimeout(tid)
        tid = setTimeout(refreshRem, 300)
      }
    },
    false
  )
  function fillScale(scale) {
    return 'width=device-width,initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale
  }
  refreshRem()
})()
