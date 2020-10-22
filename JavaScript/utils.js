/**
 * 下载文件
 * @param {*} content 
 * @param {*} filename 
 */
export const download = (content, filename) => {
  const eleLink = document.createElement("a");
  eleLink.download = filename;
  eleLink.style.display = "none";
  // 字符内容转变成blob地址
  const blob = new Blob([content]);
  eleLink.href = URL.createObjectURL(blob);
  // 触发点击
  document.body.appendChild(eleLink);
  eleLink.click();
  // 然后移除
  document.body.removeChild(eleLink);
};

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