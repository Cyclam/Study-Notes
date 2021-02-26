## Path

### os.path.join() 拼接路径

假设当前路径__dirname为/Volumes/HDD/Workspace/koa2-api/routes/
// /Volumes/HDD/Workspace/koa2-api/routes/public/upload 
// console.log(path.resolve(__dirname, `./public/upload`), '+++++++++++++')

// /Volumes/HDD/Workspace/koa2-api/public/upload
console.log(path.resolve(__dirname, `../public/upload`), '+++++++++++++')

os.path.join()函数用于路径拼接文件路径。 
os.path.join()函数中可以传入多个路径：

**会从第一个以'/'开头的参数开始拼接，之前的参数全部丢弃。**

以上一种情况为先。在上一种情况确保情况下，若出现'./'开头的参数，会从'./'开头的参数的上一个参数开始拼接，'../'，则从上上个参数开始拼接。

```js
import os
print("1:", os.path.join('aaaa','/bbbb','ccccc.txt'))
print("2:", os.path.join('/aaaa','/bbbb','/ccccc.txt'))
print("3:", os.path.join('aaaa','./bbb','ccccc.txt'))

/bbbb\ccccc.txt
/ccccc.txt
aaaa\./bbb\ccccc.txt

path.join('/foo', 'bar', 'baz/asdf', 'quux', '..') // '/foo/bar/baz/asdf' 

```

### path.resolve() 将相对路径转为绝对路径

给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径

const dir = path.resolve(__dirname, `../public/upload`);
**ps: // 从右往左 返回值都不带尾部的斜杠 忽略非字符串的参数**

```js
path.resolve('/foo/bar', './baz')
// '/foo/bar/baz'

path.resolve('/foo/bar', '/tmp/file/')
// '/tmp/file'

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')
// 如果当前目录是/home/myself/node，返回

// $ cd wwwroot
// $ cd static_files/png/
// $ cd ..
// $ pwd => wwwroot/static_files
// $ cd /gif/image.gif
// /home/myself/node/wwwroot/static_files/gif/image.gif

const url = path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile')
console.log(url)

// $ cd foo/bar
// $ cd /tmp/file/
// $ cd ..
// $ cd a/../subfile
// $ pwd
// $ /tmp/subfile
```
### 例子

``` js
let myPath = path.join(__dirname,'/img/so'); //D:\myProgram\test\img\so 
let myPath2 = path.join(__dirname,'./img/so'); //D:\myProgram\test\img\so 
let myPath3 = path.resolve(__dirname,'/img/so'); // D:\img\so
let myPath4 = path.resolve(__dirname,'./img/so'); // D:\myProgram\test\img\so
console.log(__dirname); //D:\myProgram\test 
console.log(myPath); //D:\myProgram\test\img\so 
console.log(myPath2); //D:\myProgram\test\img\so 
console.log(myPath3); //D:\img\so<br> 
console.log(myPath4); //D:\myProgram\test\img\so

````