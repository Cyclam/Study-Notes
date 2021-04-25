/**
 * 全屏
 */
export const fullScreen = () => {
  var el = document.documentElement;
  var rfs =
    el.requestFullScreen ||
    el.webkitRequestFullScreen ||
    el.mozRequestFullScreen ||
    el.msRequestFullScreen;
  if (typeof rfs != "undefined" && rfs) {
    rfs.call(el);
  }
};

/**
 * 退出全屏
 */
export const exitFullScreen = () => {
  var el = document;
  var cfs =
    el.cancelFullScreen ||
    el.webkitCancelFullScreen ||
    el.mozCancelFullScreen ||
    el.exitFullScreen;
  if (typeof cfs != "undefined" && cfs) {
    cfs.call(el);
  }
};

/**
 * 从markdown格式的内容获取原始内容
 * @param {markdown格式的内容} mdContent
 */
export const getOriginContent = mdContent => {
  const [value, align] = solveAlign(mdContent);
  // 先匹配横线和竖线
  const hlineReg = /-[-]+-/;
  const vlineReg = /\+[+]+\+/;
  if (hlineReg.exec(value)) {
    return ["---", align];
  } else if (vlineReg.exec(value)) {
    return ["+++", align];
  }
  return [md.render(value).replace(/<[^>]+>/g, ""), align];
};


/**
 * 深拷贝
 * @param {} source
 */
export function deepClone(source) {
  if (!source && typeof source !== "object") {
    throw new Error("error arguments", "shallowClone");
  }
  const targetObj = source.constructor === Array ? [] : {};
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === "object") {
      targetObj[keys] = deepClone(source[keys]);
    } else {
      targetObj[keys] = source[keys];
    }
  });
  return targetObj;
}

/**
 * 创建并下载文件
 * @param  {String} fileName 文件名
 * @param  {String} content  文件内容
 */
export const downloadFile = (fileName, content) => {
  const blob = new Blob([content])
  const URL = window.URL || window.webkitURL || window.moxURL
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = fileName
  link.click()
  URL.revokeObjectURL(url)
}

/**
 * 统计字数
 * @param {*} data 
 */
export const wordCalc = (data) => {
  const pattern = /[a-zA-Z0-9_\u0392-\u03c9\u0410-\u04F9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g;
  const m = data.match(pattern);
  let count = 0;
  if (m === null) return count;
  for (let i = 0; i < m.length; i++) {
    if (m[i].charCodeAt(0) >= 0x4e00) {
      count += m[i].length;
    } else {
      count += 1;
    }
  }
  return count;
};

/**
 * 是否为PC端
 */
export const isPC = () => {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

/**
 * 获取Base64图片
 * @param {*} img 
 */
function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, img.width, img.height);
  var dataURL = canvas.toDataURL("image/png"); // 可选其他值 image/jpeg
  return dataURL;
}

/**
 * 图片Base64转Blob
 * @param {*} src 
 * @param {*} cb 
 */
export const url2Blob = (src, cb) => {
  var image = new Image();
  image.src = src + "?v=" + Math.random(); // 处理缓存
  image.crossOrigin = "Anonymous"; // 支持跨域图片
  image.onload = () => {
    var base64 = getBase64Image(image);
    cb && cb(base64);
  };
};

/**
 * Base64转Blob
 * @param {*} base64 
 * @param {*} fileType 
 */
export const toBlob = (base64, fileType) => {
  const bytes = window.atob(base64);
  let n = bytes.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bytes.charCodeAt(n);
  }
  return new Blob([u8arr], { type: fileType });
};

/**
 * 复制
 */
export function handleCopyLink() {
  const input = document.createElement('input')
  const activityUrl = `download link`
  input.setAttribute('value', activityUrl)
  document.body.appendChild(input)
  input.select()
  if (document.execCommand('copy')) {
    document.execCommand('copy')
    this.$message.success('复制成功！')
  }
  document.body.removeChild(input)
}

/**
 * 对数组对象去重
 */
var input = [
  { key: '01', value: '乐乐' },
  { key: '02', value: '博博' },
  { key: '03', value: '淘淘' },
  { key: '04', value: '哈哈' },
  { key: '01', value: '乐乐' }
]

var uniqueKey = []
var output = input.reduce((a, b) => {
  if (!uniqueKey.includes(b.key)) {
    uniqueKey.push(b.key)
    a.push(b)
  }
  return a
}, [])

let output = []
const hash = {}
output = roleList.reduce((item, next) => {
  if (!hash[next.key]) {
    hash[next.key] = true && item.push(next)
  }
  return item
}, [])

// [
//   { key: '01', value: '乐乐' },
//   { key: '02', value: '博博' },
//   { key: '03', value: '淘淘' },
//   { key: '04', value: '哈哈' }
// ]

/**
 * 深拷贝
 * 1. 使用 JSON.parse(JSON.Stringify(xxx)) 缺点是无法实现对对象中方法的深拷贝，会显示为 undefined
 * 2. Reflect
 * 3. 递归所有属性
 */
function deepClone(obj) {
  // 初始化开辟空间
  let objClone = Array.isArray(obj) ? [] : {};
  // 判断是对象 因为 typeof null === 'object'
  if (obj && typeof obj === "object") {
    // 使用for..in 遍历对象时原理和查找[[Prototype]] 链类似，任何可以通过原型链访问到
    // （并且是enumerable，参见第3 章）的属性都会被枚举。使用in 操作符来检查属性在对象
    // 中是否存在时，同样会查找对象的整条原型链（无论属性是否可枚举）—— 摘自《你不知道的JavaScript上卷 第五章原型》
    for (key in obj) {
      // 判断是否是自己的属性方法，而不是原型属性方法
      if (obj.hasOwnProperty(key)) {
        // 判断ojb子元素是否为对象，如果是，递归复制
        if (obj[key] && typeof obj[key] === "object") {
          objClone[key] = deepClone(obj[key]);
        } else {
          // 如果不是，简单复制
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}

/**
 * 懒加载
 */
let imgList = [...document.querySelectorAll('img')]
let num = imgList.length
var viewHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

export const lazyLoad = (function () {
  let count = 0
  return function () {
    let deleteIndexList = []
    imgList.forEach((img, index) => {
      let rect = img.getBoundingClientRect()
      if (rect.top < viewHeight) {
        img.src = img.dataset.src
        deleteIndexList.push(index)
        count++
        if (count === num) {
          document.removeEventListener('scroll', lazyLoad)
        }
      }
    })
    imgList = imgList.filter((_, index) => !deleteIndexList.includes(index))
  }
})()

/***************************/

let imgList = [...document.querySelectorAll('img')]
export const lazyLoad = function () {
  let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.src = entry.target.dataset.src
        observer.unobserve(entry.target)
      }
    })
  })
  imgList.forEach(img => {
    observer.observe(img)
  })
}

/**
 * 
 * @param {*} list 
 * @returns 
 */
export function listToTree (list) {
  var getTree = (routes, pid = 0) => {
    const result = []
    let temp
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].pid === pid) {
        const current = { ...routes[i] }
        temp = getTree(routes, routes[i].id)
        if (temp.length > 0) {
          current.children = temp
        }
        result.push(current)
      }
    }
    return result
  }
  return getTree(list)
}

/**
 * 
 * @param {*} tree 
 * @returns 
 */
export function treeToList (tree) {
  var queen = []
  var out = []
  queen = queen.concat(tree)
  while (queen.length) {
    var first = queen.shift()
    if (first.children) {
      queen = queen.concat(first.children)
      delete first['children']
    }
    out.push(first)
  }
  return out
}

/**
 * @desc 头部菜单栏上下滚动
 * @param {*} callback 
 */
export function handleScrollHeader (callback) {
  let timer = 0

  let beforeScrollTop = window.pageYOffset
  callback = callback || function () {}
  window.addEventListener(
    'scroll',
    event => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        let direction = 'up'
        const afterScrollTop = window.pageYOffset
        const delta = afterScrollTop - beforeScrollTop
        if (delta === 0) {
          return false
        }
        direction = delta > 0 ? 'down' : 'up'
        callback(direction)
        beforeScrollTop = afterScrollTop
      }, 50)
    },
    false
  )
}

/**
 * // var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];
 * // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
 * @desc 扁平化数组
 * @param {*} input 
 * @returns 
 */
export function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // 使用 pop 从 stack 中取出并移除值
    const next = stack.pop();
    if (Array.isArray(next)) {
      // 使用 push 送回内层数组中的元素，不会改动原始输入
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  // 反转恢复原数组的顺序
  return res.reverse();
}

// Copy from Bilibili
/**
 * @desc 函数节流
 * @param {*} fn 
 * @param {*} delay 
 * @param {*} mustRunDelay 
 * @returns 
 */
export function throttle(fn, delay, mustRunDelay) {
  let timer = null
  let t_start
  return function() {
    const context = this
    const args = arguments
    const t_curr = +new Date()
    clearTimeout(timer)
    if (!t_start) {
      t_start = t_curr
    }
    if (t_curr - t_start >= mustRunDelay) {
      fn.apply(context, args)
      t_start = t_curr
    } else {
      timer = setTimeout(function() {
        fn.apply(context, args)
      }, delay)
    }
  }
}
/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
export function debounce(func, wait, immediate) {
  let timeout
  return function () {
    const context = this
    const args = arguments
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      const callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) func.apply(context, args)
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args)
      }, wait)
    }
  }
}

function fromatNum(n) {
  return n < 10 ? '0'+n : n
}

export const formatDate = t => {
  if (!t) return
  const date = new Date(t)
  const Y = date.getFullYear() + '-'
  const M = fromatNum(date.getMonth()+1) + '-'
  const D = fromatNum(date.getDate())
  return Y+M+D
}

export const formatDateTime = t => {
  if (!t) return
  const date = new Date(t)
  const Y = date.getFullYear() + '-'
  const M = fromatNum(date.getMonth()+1) + '-'
  const D = fromatNum(date.getDate())
  const h = fromatNum(date.getHours()) + ':'
  const m = fromatNum(date.getMinutes()) + ':'
  const s = fromatNum(date.getSeconds())
  return Y+M+D+' '+h+m+s
}

// 数字转换为时间格式 formatDuration(3600) => "1:00:00" formatDuration(60) => "01:00"
export const formatDuration = n => {
  if (String(n).indexOf(':') !== -1) {
    return n
  }
  let hour
  let min
  let sec
  let secStr
  let minStr
  if (n < 60) {
    secStr = n < 10 ? `0${n}` : n
    return `00:${secStr}`
  } else if (n < 3600) {
    sec = n % 60
    min = parseInt(n / 60)
    secStr = sec < 10 ? `0${sec}` : sec
    minStr = min < 10 ? `0${min}` : min
    return `${minStr}:${secStr}`
  } else {
    sec = n % 60
    min = parseInt((n % 3600) / 60)
    hour = parseInt(n / 3600)
    secStr = sec < 10 ? `0${sec}` : sec
    minStr = min < 10 ? `0${min}` : min
    return `${hour}:${minStr}:${secStr}`
  }
}

export const isEmptyObject = o =>{
  return JSON.stringify(o) === '{}' ? true : false
}

/**
 * @description 解析URL参数
 * @param url
 * @returns {string}
 */
export function parseQuery (url) {
  url = url || window.location.href
  const querys = url.split('?')
  const params = querys[1] ? querys[1].split('&') : []
  const obj = {}
  for (let i = 0; i < params.length; i++) {
    const param = params[i] || ''
    const index = param.indexOf('=')
    obj[param.substring(0, index)] = param.substring(index + 1)
    // var param = params[i].split("=");
    // obj[param[0]] = param[1];
  }
  return obj
}

/**
 * @description 对象解析成 url 字符串
 * @param obj
 * @returns {string}
 */
export function stringifyQuery (obj) {
  let res = null
  if (obj) {
    res = Object.keys(obj).map(function (key) {
      const encode = window.encodeURIComponent
      const val = obj[key]
      if (val === undefined) {
        return ''
      }
      if (val === null) {
        return encode(key)
      }
      if (Array.isArray(val)) {
        const result = []
        val.slice().forEach(function (val2) {
          if (val2 === undefined) {
            return
          }
          if (val2 === null) {
            result.push(encode(key))
          } else {
            result.push(encode(key) + '=' + encode(val2))
          }
        })
        return result.join('&')
      }
      return encode(key) + '=' + encode(val)
    }).filter(function (x) { return x.length > 0 }).join('&')
  }
  return (res || '')
}

function getDevicePixelRatio() {
  let ratio = 1
  if (typeof window === 'undefined') return ratio
  // To account for zoom, change to use deviceXDPI instead of systemXDPI
  // eslint-disable-next-line
  if (window.screen.systemXDPI !== undefined && window.screen.logicalXDPI !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI) {
    // Only allow for values > 1
    ratio = window.screen.systemXDPI / window.screen.logicalXDPI
  } else if (window.devicePixelRatio !== undefined) {
    ratio = window.devicePixelRatio
  }
  return ratio
}

export const DPR = getDevicePixelRatio

// 首屏加载完成时间标准 (firstscreenfinish)
export const fsfReport = function(img) {
  const path = img && img.src || ''
  if (path && window.performance) {
    const arr = window.performance.getEntriesByType('resource') || []
    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i]['name'] === path) {
        window.performance.timing.firstscreenfinish = window.performance.timeOrigin + arr[i]['responseEnd']
        return
      }
    }
  }
}

// 强制https
export const replaceHTTP = url => {
  if (!url) return ''
  const newUrl = url.replace(/^(http:\/\/|:\/\/|\/\/|\/)/, 'https://')
  if (newUrl.match(/^https:\/\//)) {
    return newUrl
  } else {
    return 'https://' + newUrl
  }
}

function typeOf (obj) {
  const maps = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return maps[toString.call(obj)]
}
export function isArray (obj) {
  return typeOf(obj) === 'array'
}

export function isNumber (obj) {
  return typeOf(obj) === 'number'
}
// Copy from Bilibili End
