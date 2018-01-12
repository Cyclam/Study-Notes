### 变量声明

$highlight-color: #49d;

与CSS属性不同，变量可以在css规则块定义之外存在。当变量定义在css规则块内，那么该变量只能在此规则块内使用。如果它们出现在任何形式的{...}块中（如@media或者@font-face块），情况也是如此：
```
$nav-color: #F90;
nav {
  $width: 100px;
  width: $width;
  color: $nav-color;
}

//编译后

nav {
  width: 100px;
  color: #F90;
}
```

#### 子组合选择器和同层组合选择器: >、+和~

你也可以用同层全体组合选择器~，选择所有跟在article后的同层article元素，不管它们之间隔了多少其他元素：

`article ~ article { border-top: 1px dashed #ccc }`

#### 嵌套属性
```
nav {
  border: {
  style: solid;
  width: 1px;
  color: #ccc;
  }
}
嵌套属性的规则是这样的：把属性名从中划线-的地方断开，在根属性后边添加一个冒号:，紧跟一个{ }块，把子属性部分写在这个{ }块中。就像css选择器嵌套一样，sass会把你的子属性一一解开，把根属性和子属性部分通过中划线-连接起来，最后生成的效果与你手动一遍遍写的css样式一样：

nav {
  border-style: solid;
  border-width: 1px;
  border-color: #ccc;
}
```

#### 混合器
```
@mixin rounded-corners {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
然后就可以在你的样式表中通过@include来使用这个混合器，放在你希望的任何地方。@include调用会把混合器中的所有样式提取出来放在@include被调用的地方。如果像下边这样写：

notice {
  background-color: green;
  border: 2px solid #00aa00;
  @include rounded-corners;
}
```