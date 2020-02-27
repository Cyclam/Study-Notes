摘自：`https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop`

## 事件循环
### 添加消息

函数 setTimeout 接受两个参数：待加入队列的消息和一个延迟（可选，默认为 0）。这个延迟代表了消息被实际加入到队列的最小延迟时间。如果队列中没有其它消息，在这段延迟时间过去之后，消息会被马上处理。但是，如果有其它消息，setTimeout 消息必须等待其它消息处理完。因此第二个参数仅仅表示最少延迟时间，而非确切的等待时间。

下面的例子演示了这个概念（setTimeout 并不会在计时器到期之后直接执行）：

```js
const s = new Date().getSeconds();

setTimeout(function() {
  // 输出 "2"，表示回调函数并没有在 500 毫秒之后立即执行
  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500);

while(true) {
  if(new Date().getSeconds() - s >= 2) {
    console.log("Good, looped for 2 seconds");
    break;
  }
}
```

## 参考
[http://www.ruanyifeng.com/blog/2014/10/event-loop.html](什么是 Event Loop)