### 微信打开网页键盘弹起后页面上滑，导致弹框里的按钮响应区域错位

[微信打开网页键盘弹起后页面上滑，导致弹框里的按钮响应区域错位](https://developers.weixin.qq.com/community/develop/doc/00044ae90742f8c82fb78fcae56800)
```js
// 自定义指令 v-reset-page，以解决 iOS 12 中键盘收起后页面底部有留白的问题
Vue.directive('reset-page', {
  inserted: function (el) {
    // 在 body 监听键盘收起事件, focusout 会冒泡，如果用 blur 的话，需要监听 对应的输入框，因为 blur 不会冒泡。
    document.body.addEventListener('focusout', () => {
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        // 软键盘收起的事件处理
        setTimeout(() => {
          const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0
          window.scrollTo(0, Math.max(scrollHeight - 1, 0))
        }, 100)
      }
    })
  }
})
```