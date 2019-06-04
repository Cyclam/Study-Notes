
```js
/*
 * @Author: Roger
 * @Date: 2019-05-29 11:57:30
 * @Last Modified by: Roger
 * @Last Modified time: 2019-05-29 11:57:58
 * @Description: canvas图片压缩
 */
export default function compressImage (file, cb, compression = true) {
  // 压缩图片需要的一些元素和对象
  var reader = new FileReader()
  var img = new Image()
  // 选择的文件对象
  var fileRaw = file.raw ? file.raw : file
  // 缩放图片需要的canvas
  var canvas = document.createElement('canvas')
  var context = canvas.getContext('2d')
  // base64地址图片加载完毕后
  img.onload = function () {
    // 图片原始尺寸
    var originWidth = this.width
    var originHeight = this.height
    // 最大尺寸限制
    var maxWidth = 900
    var maxHeight = 900000
    // 目标尺寸
    var targetWidth = originWidth
    var targetHeight = originHeight
    // 图片尺寸超过400x400的限制
    if (compression) {
      if (originWidth > maxWidth || originHeight > maxHeight) {
        if (originWidth / originHeight > maxWidth / maxHeight) {
          // 更宽，按照宽度限定尺寸
          targetWidth = maxWidth
          targetHeight = Math.round(maxWidth * (originHeight / originWidth))
        } else {
          targetHeight = maxHeight
          targetWidth = Math.round(maxHeight * (originWidth / originHeight))
        }
      }
    }
    // canvas对图片进行缩放
    canvas.width = targetWidth
    canvas.height = targetHeight
    // 清除画布
    context.clearRect(0, 0, targetWidth, targetHeight)
    // 图片压缩
    context.drawImage(img, 0, 0, targetWidth, targetHeight)
    // canvas转为blob并上传
    canvas.toBlob(blob => {
      const imageData = new FormData()
      imageData.append('file', blob)
      cb(imageData)
    }, fileRaw.type || 'image/png')
  }
  // 文件base64化，以便获知图片原始尺寸
  reader.onload = (e) => {
    img.src = e.target.result
  }
  // 选择的文件是图片
  if (fileRaw.type.indexOf('image') === 0) {
    reader.readAsDataURL(fileRaw)
  }
}
```