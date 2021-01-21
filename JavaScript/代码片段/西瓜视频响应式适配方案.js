// 来源：https://m.ixigua.com/video/6919468429506413069/?wid_try=1
function setRootPixel() {
  var defaultFontSize = 0
  function getDefaultFontSize() {
    if (defaultFontSize) {
      return defaultFontSize
    }
    document.documentElement.style.fontSize = ''
    var temp = document.createElement('div')
    temp.style.cssText = 'width:1rem;display:none'
    document.head.appendChild(temp)
    defaultFontSize =
      +window
        .getComputedStyle(temp, null)
        .getPropertyValue('width')
        .replace('px', '') || 16
    document.head.removeChild(temp)
    return defaultFontSize
  }
  function getQuery(name) {
    return (new RegExp('[?&]' + name + '=([^&#\\b]+)').exec(location.search || '') || [])[1]
  }
  function setRootFontSize() {
    var widthQueryKey = ''
    var rem2px = 50
    var clientWidth
    if (widthQueryKey && +getQuery(widthQueryKey)) {
      clientWidth = +getQuery(widthQueryKey)
    } else {
      clientWidth =
        window.innerWidth && document.documentElement.clientWidth
          ? Math.min(window.innerWidth, document.documentElement.clientWidth)
          : window.innerWidth ||
            document.documentElement.clientWidth ||
            (document.body && document.body.clientWidth) ||
            375
      var supportLandscape = false
      if (supportLandscape) {
        var isLandscape = (((screen.orientation && screen.orientation.angle) || window.orientation) / 90) % 2
        if (isLandscape) {
          var clientHeight =
            window.innerHeight && document.documentElement.clientHeight
              ? Math.min(window.innerHeight, document.documentElement.clientHeight)
              : window.innerHeight ||
                document.documentElement.clientHeight ||
                (document.body && document.body.clientHeight) ||
                375
          clientWidth = Math.max(clientHeight, 350)
        }
      }
    }
    var htmlFontSizePx = (clientWidth / 375) * rem2px
    var useRootFontSizeBeyondMax = false
    var maxRootFontSize = 64
    if (useRootFontSizeBeyondMax) {
      htmlFontSizePx = htmlFontSizePx < maxRootFontSize ? htmlFontSizePx : rem2px
    } else {
      /* 兼容移动端页面在pc站上的显示， media query后固定body的宽度，这时候以浏览器宽度来计算html的font-size就会使页面样式错乱 */
      htmlFontSizePx = Math.min(htmlFontSizePx, maxRootFontSize)
    }
    window.ROOT_FONT_SIZE = htmlFontSizePx
    document.documentElement.style.fontSize = (htmlFontSizePx / getDefaultFontSize()) * 100 + '%'
  }
  function adjust(immediate) {
    if (immediate) {
      setRootFontSize()
      return
    }
    setTimeout(setRootFontSize, 30)
  }
  if (window.isResponsive === false) {
    document.documentElement.style.fontSize = '50px'
    return
  }
  adjust(true)
  window.addEventListener('resize', adjust, false)
  if ('onorientationchange' in window) {
    window.addEventListener('orientationchange', adjust, false)
  }
}
typeof window !== 'undefined' && setRootPixel()
