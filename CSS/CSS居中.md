## 水平居中

1. inline-block + text-align (父元素和子元素高度都未知)

.parent{ text-align: center; }  
.child{ display: inline-block; }

缺点：子元素文本继承了text-align属性，子元素需要额外加上text-align: left;

2. absolute + transform  

.parent{ position: relative }
.child{ position: absolute; left: 50%; transform: translateX(-50%); }

优点：居中子元素不会对其他元素产生影响
缺点：transform是CSS3的属性，存在兼容性问题

3. table + margin

.child{ display: margin: 0 auto; }

优点：只需要设置子元素样式

4. flex + justify-content

.parent{ display: flex; justify-content: center; }

优点：只需要设置父元素样式
缺点：兼容性问题

5. flex + margin

.parent{ display: flex; }
.child{ margin: 0 auto; }

## 垂直居中

1. table-cell + vertical-align

.parent{ display: table-cell; verticle-align: middle; }

2. absolute + transform

.parent{ position: relative; }
.child{ position: absolute; top: 50%; transform: translateY(-50%); }

3. flex + align-items

.parent{ display: flex; align-items: center; }

## 水平垂直居中

1. inline-block + text-align + table-cell + verticle-align

.parent{ text-align: center; display: table-cell; verticle-align: midddle; }
.child{ display: inline-block; }

2. absolute + transform

.parent{ position: relative; }
.child { position: absolute; left: 50%; top: 50%; translate(-50%, -50%); }

3. flex + justify-content + align-tiems 

.parent{ display: flex; justify-content: center; align-items: center; }
