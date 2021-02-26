### 定义基础变量

#### 混合
```css
在 LESS 中我们可以定义一些通用的属性集为一个class，然后在另一个class中去调用这些属性. 下面有这样一个class:

.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
那如果我们现在需要在其他class中引入那些通用的属性集，那么我们只需要在任何class中像下面这样调用就可以了:

#menu a {
  color: #111;
  .bordered;
}
.post a {
  color: red;
  .bordered;
}
```

#### 带参数混合

```css
.border-radius (@radius) {
  border-radius: @radius;
  -moz-border-radius: @radius;
  -webkit-border-radius: @radius;
}

然后在其他class中像这样调用它:

#header {
  .border-radius(4px);
}

同时也可以设定默认参数
.border-radius (@radius： 4px) {
  border-radius: @radius;
  -moz-border-radius: @radius;
  -webkit-border-radius: @radius;
}

@arguments 变量
@arguments包含了所有传递进来的参数. 如果你不想单独处理每一个参数的话就可以像这样写:

.box-shadow (@x: 0, @y: 0, @blur: 1px, @color: #000) {
  box-shadow: @arguments;
  -moz-box-shadow: @arguments;
  -webkit-box-shadow: @arguments;
}
.box-shadow(2px, 5px);
```