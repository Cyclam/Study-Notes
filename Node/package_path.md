## Path

### path.join() 拼接路径

假设当前路径__dirname为/Volumes/HDD/Workspace/koa2-api/routes/
// /Volumes/HDD/Workspace/koa2-api/routes/public/upload 
// console.log(path.resolve(__dirname, `./public/upload`), '+++++++++++++')

// /Volumes/HDD/Workspace/koa2-api/public/upload
console.log(path.resolve(__dirname, `../public/upload`), '+++++++++++++')

### path.resolve() 将相对路径转为绝对路径

const dir = path.resolve(__dirname, `../public/upload`);
**ps: // 从右往左 返回值都不带尾部的斜杠 忽略非字符串的参数**

```javascript
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