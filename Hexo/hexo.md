### Hexo 安装和使用

安装的前提：
安装Hexo 相当简单，在安装之前必须安装下列应用程序：
- Node.js
- Git  

安装上述必备程序之后，使用npm即可完成Hexo的安装
部署远程博客前，需要安装git，执行`npm install hexo-deployer-git --save`

`$ npm install -g hexo-cli`

1. Tips: 预览发布：通过`hexo server -g`可本地预览，发布使用`hexo deploy -g`，如果担心已生成的文件对发布有干扰可先执行`hexo clean`清除缓存和静态文件，等待一会，才能在线上看到更新之后的状态。

2. 文章图片的存放
想要在文章中插入图片的话，可以按照Markdown语法来插入，格式为![图片名称](图片地址)。图片的存放有两种方式：在本地D:\Hexo\source`目录下新建一个存放图片的文件夹，比如images`，然后把想要插入的图片放在里面，插入图片的路径；第二种方法是把图片上传到网络，然后插入图片路径。推荐使用第二种。推荐两个比较好用的：图床；无需注册，方便快捷。七牛云存储；需要注册，免费，空间大，速度快。

3. Hexo的基本命令

Hexo基本常用的命令就四个，而且还可以使用组合命令。基本命令如下：

`hexo g = hexo generate  #生成`
`hexo s = hexo server  #启动本地预览`
`hexo d = hexo deploy  #远程部署`

`hexo n "文章标题" = hexo new "文章标题"  #新建一篇博文`
我通常是选用组合命令，操作更为效率。如果你使用搜狗输入法的话，可以自定义一个短语，比如我输入hs则出现`hexo s -g`命令。

`hexo s -g  #等同先输入hexo g，再输入hexo s`
`hexo d -g  #等同先输入hexo g，再输入hexo d`