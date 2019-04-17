## 水平居中

```css
1. inline-block + text-align (父元素和子元素高度都未知)

.parent {
    text-align: center;
}  
.child {
    display: inline-block;
}

缺点：子元素文本继承了text-align属性，子元素需要额外加上text-align: left;

2. absolute + transform  

.parent {
    position: relative
}
.child {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

优点：居中子元素不会对其他元素产生影响
缺点：transform是CSS3的属性，存在兼容性问题

3. table + margin

.child {
    display: table;
    margin: 0 auto;
}

优点：只需要设置子元素样式

4. flex + justify-content

.parent {
    display: flex;
    justify-content: center;
}

优点：只需要设置父元素样式
缺点：兼容性问题

5. flex + margin

.parent {
    display: flex;
}
.child {
    margin: 0 auto;
}
```

## 垂直居中

```css
1. table-cell + vertical-align

.parent {
    display: table-cell;
    verticle-align: middle;
}

2. absolute + transform

.parent {
    position: relative;
}
.child {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

3. flex + align-items

.parent{
    display: flex;
    align-items: center;
}
```

## 水平垂直居中（不定宽高和定宽高）

```css
1. inline-block + text-align + table-cell + verticle-align

.parent {
    display: table-cell;
    verticle-align: midddle;
    text-align: center;
}
.child {
    display: inline-block;
}

或者
.parent {
    display: table-cell;
    verticle-align: middel;
}
.child {
    margin: aruto;
}

2. absolute + transform

.parent {
    position: relative;
}
.child {
    position: absolute;
    left: 50%;
    top: 50%;
    translate(-50%, -50%);
}

3. absolute

.parent {
    position: relative;
}
.child {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}

4. flex + justify-content + align-tiems 

.parent {
    display: flex;
    justify-content: center;
    align-items: center;
}

5. grid

.parent {
    display: grid;
}
.child {
    justify-self: center;
    align-self: center;
}

6. margin设置负值

.parent {
    width: 200px;
    height: 200px;

    position: relative;
}
.child {
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;

    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -50px;
}
```

