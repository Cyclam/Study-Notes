// var formData = new FormData()
// formData.append('username', 'john')
// formData.append('id', 3234)

var xhr = new XMLHttpRequest();
xhr.timeout = 3000
xhr.responseType = 'json'
xhr.open("GET", "https://anapioficeandfire.com/api/characters/583", true);
xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      return xhr.responseText;
    }
  }
};
// 在这里注册成功回调，因为 onreadystatechange 在每次 xhr.readystate 变化时都会触发
xhr.onload = (e) => {
  if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
    // successCallback
  }
}
xhr.onerror = (e) => {}
xhr.upload.onprogress = (e) => {} // 上传触发
xhr.onprogress = (e) => { } // 下载触发


```doc
xhr.onprogress = updateProgress;
xhr.upload.onprogress = updateProgress;
function updateProgress(event) {
  if (event.lengthComputable) {
    var completedPercent = event.loaded / event.total;
  }
}
```
