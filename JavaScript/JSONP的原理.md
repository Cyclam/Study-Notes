
### 什么是jsonp

Web页面上调用js文件时则不受跨域的影响（不仅如此，我们还发现凡是拥有"src"这个属性的标签都拥有跨域的能力，比如`<script>、<img>、<iframe>`）。 

而jsonp实际上是通过动态创建script脚本，并在页面上加载远程服务器的这段js脚本，此时服务端返回一个携带有json数据的包装函数，然后我们通过在客户端调用该同名函数去处理包含在函数里面的json数据。


```js
var handler = function(data) {
    console.log(data.name); // "Jordan"
}

var url = 'http://www.mysite.com/api?id=19348932495754&callback=handler' // 指定ID和callback
var script = document.createElement('script');
script.setAttribute('src', url);
document.body.appendChild(script); // 返回的数据：handler({name: "Jordan"})
```