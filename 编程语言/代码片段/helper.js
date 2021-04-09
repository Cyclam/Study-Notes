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

export const lazyLoad = (function () {
  let count = 0
  return function () {
    let deleteIndexList = []
    imgList.forEach((img, index) => {
      let rect = img.getBoundingClientRect()
      if (rect.top < window.innerHeight) {
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