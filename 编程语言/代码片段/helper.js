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
  return new Blob([u8arr], {type: fileType});
};

/**
 * 复制
 */
export function handleCopyLink () {
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