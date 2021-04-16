### 外部引入 script 属性
defer: 异步加载，按顺序执行，JS 的加载是异步的，执行是被推迟的。等整个文档解析完成、DOMContentLoaded 事件即将被触发时，被标记了 defer 的 JS 文件才会开始依次执行。
async: 异步加载，不按顺序执行，加载完立即执行，会阻塞 onload 事件，仅限脚本资源，如在网页使用谷歌统计
preload: 预加载，浏览器空闲时加载数据，不会阻塞 onload 事件
prefetch: 预加载，浏览器空闲时加载数据

**从应用的角度来说，一般当我们的脚本与 DOM 元素和其它脚本之间的依赖关系不强时，我们会选用 async；当脚本依赖于 DOM 元素和其它脚本的执行结果时，我们会选用 defer。**


### Question List

- 如何计算时间复杂度 [算法的时间与空间复杂度](https://zhuanlan.zhihu.com/p/50479555)
- 按位取反 [按位取反，为什么~2 = -3?](https://github.com/LinDaiDai/niubility-coding-js/issues/32)

### 精选博主

[Koala](https://github.com/koala-coding/goodBlog) // Node js
[LinDaiDai](https://github.com/LinDaiDai/niubility-coding-js) // js
[labuladong](https://github.com/labuladong/fucking-algorithm) // 算法