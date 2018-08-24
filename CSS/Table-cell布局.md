### 设置了display：table-cell的元素：

- 对宽度高度敏感
- 对margin值无反应
- 响应padding属性
- 内容溢出时会自动撑开父元素

> 与其他一些display属性类似，table-cell同样会被其他一些CSS属性破坏，例如float, position:absolute，所以，在使用display:table-cell与float:left或是position:absolute属性尽量不用同用。设置了display:table-cell的元素对宽度高度敏感，对margin值无反应，响应padding属性，基本上就是活脱脱的一个td标签元素了 ————摘自[我所知道的几种display:table-cell的应用](http://www.zhangxinxu.com/wordpress/?p=1187)

#### 两列自适应
```html
<div class="content">
  <div class="left-box">
    <img src="img/avatar.jpg" width="70">
  </div>
  <div class="right-box">some thing</div>
</div>
```

```css
.content {
  display: table;
  padding: 10px;
  border: 2px solid #999;
}
.left-box {
  float: left;
  margin-right: 10px;
}

.right-box {
  display: table-cell;
  padding: 10px;
  width: 3000px;
  vertical-align: top;
  border: 1px solid #ccc;
}
```

#### 等高布局
```html
<div class="content">
  <div class="left">我和右边等高</div>
  <div class="right">table表格中的单元格最大的特点之一就是同一行列表元素都等高。所以，很多时候，我们需要等高布局的时，就可以借助display:table-cell属性。说到table-cell的布局，不得不说一下“匿名表格元素创建规则”
  </div>
</div>
```

```css
.content {
  display: table;
  padding: 10px;
  border: 2px solid #999;
}
.left {
  display: table-cell;
  width: 100px;
  border: 1px solid #ccc;
}
.right {
  display: table-cell;
  border: 1px solid #ccc;
}
```