### 方法一

```css
<!-- 两边透明，底边100px，因此方向向上 -->
.triangle-up {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid blue;
}
```

### 方法二

```css
<!-- 设置两边，通过transform旋转45°控制 -->
.triangle-up {
  position: absolute;
  width: 10;
  height: 10;
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
  transform: rotate(45deg);
}
```

### 方法三

```css
<!-- 如果是为了更好的兼容性处理可以使用特殊符号处理 -->
<!-- 使用特殊符号，通过postion: absolute可以很好的定位元素位置 -->
<span class="cur">◆</span>
<span class="cur">◇</span>
```
### 方法四

当然除了上三种方法之外，你也可以使用图片的方法去定位。

### 带边框的三角形
实现原理：利用伪类的:before和:after一大一小重叠营造带有边框的三角形

```css
.arrow {
  &:before,
  &:after {
    position: absolute;
    left: 18%;
    content: '';
    top: 87px;
    display: inline-block;
    transition: left ease .5s;
  }
  &:before{
    border-right: 10px solid transparent;
    border-bottom: 12px solid #d9d9d9;
    border-left: 10px solid transparent;
  }
  &:after {
    top: 88px;
    margin: 0 1px;
    border-right: 9px solid transparent;
    border-bottom: 11px solid #fff;
    border-left: 9px solid transparent;
  }
}
```

```css
.arrow {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  &:before {
    content: "";
    position: absolute;
    left: 30px;
    border-width: 0 9px 10px;
    border-style: solid;
    border-color: transparent transparent #eaeaea;
    top: 100%;
  }
  &:after {
    content: "";
    position: absolute;
    top: calc(100% + 2px);
    left: 31px;
    border-width: 0 8px 8px;
    border-style: solid;
    border-color: transparent transparent #fff;
  }
}
```
