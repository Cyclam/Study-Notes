### 写在上班第二天

上班两天，感受到充满极客的味道，虽然对周围的同事不是特别的熟悉，但上班第一天的时候还是能感受到各位同事的热情欢迎。废话不多说，在这里记录一下上班这两天的主要工作。

#### 搭建前端开发环境

刚来的第一天，主要围绕前端开发环境的搭建，主要安装的一下环境依赖有：

- Node.js
- npm(node自带，不过用的是淘宝镜像，当然得安装cnpm，这个大家都懂)
- gulp(全局安装：cnpm install gulp -g)
- grunt(公司以前配置好的自动化构建工具，现在还在用，所以自己还是得装上)
- git(这个是必须的，第一次用git的时候我们需要做一些用户信息的配置：
要配置的是你个人的用户名称和电子邮件地址。这两条配置很重要，每次 Git 提交时都会引用这两条信息，说明是谁提交了更新，所以会随更新内容一起被永久纳入历史记录：`$ git config --global user.name "John Doe"`
`$ git config --global user.email johndoe@example.com`)
- gitlab(公司用的代码仓库，如果同一部电脑有用到github和github的话，需要在git上作一些相应的配置)
生产两个SSH-Key，一个用于公司gitlab的，一个用于自己github上的。
1. 生成一个github用的SSH-Key
`$ ssh-keygen -t rsa -C "youremail@your.com" -f ~/.ssh/id_rsa`

2. 生成一个gitlab用的SSH-Key
`$ ssh-keygen -t rsa -C "youremail@yourcompany.com" -f ~/.ssh/gitlab_rsa`  在`~/.ssh/`目录会生成github-rsa和github-rsa.pub私钥和公钥。 我们将github-rsa.pub中的内容粘帖到github / gitlab服务器的SSH-key的配置中。

3. 在 ~/.ssh 目录下新建一个config文件
`touch config`
添加以下内容：
``` bash
`#gitlab
Host gitlab.com(这里需要替换成公司的gitlab域名，如：code@xxxx.com)
HostName gitlab.com(同上)
Port 55988(配置端口)
PreferredAuthentications publickey
IdentityFile ~/.ssh/gitlab_rsa
`#github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/github_rsa
```
4. 测试
`$ ssh -T git@github.com`
输出：Hi bonzstars! You've successfully authenticated, but GitHub does not provide shell access.
表示成功连接上github了，连接gitlab也是一样的，你可以在gitlab上新建一个test测试项目，然后自己测试看看是否成功。

- Sublime Text 3(安装一些必要的插件，如：Emmet，LESS，Vue等)
 
#### Sublime Text插件部分
首先是安装包管理器Package Control，SublimeText3的指令已经更新了，SublimeText2更新上来的童鞋注意下 
Ctrl+`打开控制台或者View->Show Console菜单打开命令行
> import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())

1. Emmet
2. SideBarEnhancements(侧边栏增强插件)
3. Terminal(控制台呼出插件，快捷键：ctrl+shift+T)
4.  SublimeCodeIntel(代码提示插件)， 装上后还不能直接使用，查了一下原因要配置，你可以点击 Preferences->Browse Packages->SublimeCodeIntel然后添加一个.codeintel文件夹再再在文件夹里面添加一个config文件（Windows创建.codeintel文件夹需要输入.codeintel.）config文件配置：

```
{
  "PHP": {
    "php": '/usr/bin/php',
    "phpExtraPaths": [],
    "phpConfigFile": 'php.ini'
  },
  "JavaScript": {
    "javascriptExtraPaths": []
  },
  "Perl": {
    "perl": "/usr/bin/perl",
    "perlExtraPaths": []
  },
  "Ruby": {
    "ruby": "/usr/bin/ruby",
    "rubyExtraPaths": []
  },
  "Python": {
    "python": '/usr/bin/python',
    "pythonExtraPaths": []
  },
  "Python3": {
    "python": '/usr/bin/python3',
    "pythonExtraPaths": []
  }
}
```
5. Sublime-HTMLPrettify(代码排版插件，安装完按快捷键ctrl+shift+h 一键格式化代码)
6. Autoprefixer(CSS3前缀补充插件，使用方法：在输入CSS3属性后按Tab键)
7. AutoFileName(文件路径自动提示)
8. SublimeLinter(安装完这个插件，还需要独立安装组件)
#### JavaScript 语法检查
- 安装 SublimeLinter-jshint
为了让 JavaScript 代码有语法检查，我们安装`SublimeLinter-jshint `
同样的方法，我们安装 SublimeLinter-jshint
按下 Ctrl+Shift+p 进入 Command Palette
输入install进入 Package Control: Install Package
输入`SublimeLinter-jshint`进行安装.
- 在插件开始工作之前，我们必须再看一下上述插件的安装说明，通过 SublimeLinter-jshint 的说明 我们可以看到，这个组件依赖于 nodeJS 下的 jshint，所以我们安装 nodeJS 环境和 nodeJS 下的 jshint。1. 安装 Node.js  2. 通过 npm 安装jshint
- 在命令行下输入如下代码，完成安装`npm install -g jshint`

#### css 语法检查
- 安装 SublimeLinter-csslint
- 同样的方法，输入`SublimeLinter-csslint`。进行安装.
- 在命令行中输入`npm install -g csslint`
> 参考文档：[代码校验工具 SublimeLinter 的安装与使用](https://gaohaoyang.github.io/2015/03/26/sublimeLinter/)

### 搭建好环境后熟悉业务流程

### 使用Fiddlers或者Charles抓包工具
测试环境下，使用抓包工具，截取网络资源，使用本地修改的静态资源替换  
https协议需要安装证书

### windows下使用Fiddlers
### mac下使用Charles

### SwitchyOmega代理工具
配置选项

### 使用Mac有关的命令操作

#### 显示隐藏文件

1. 在Finder下使用 Command+Shift+. 可以显示隐藏文件、文件夹，再按一次，恢复隐藏；
finder下使用Command+Shift+G 可以前往任何文件夹，包括隐藏文件夹。
2. 在终端下  
显示全部文件
defaults write com.apple.finder AppleShowAllFiles -bool true
osascript -e 'tell application "Finder" to quit'

不显示全部文件
defaults write com.apple.finder AppleShowAllFiles -bool false
osascript -e 'tell application "Finder" to quit'

#### mac关闭占用端口

查找被占用的8080端口
sudo lsof -i :8080
然后根据PID杀进程：
sudo kill -9 61342（即pid）

### SSH终端链接工具
1. 使用Finalshell
Mac一键安装脚本
curl -o finalshell_install.sh www.hostbuf.com/downloads/finalshell_install.sh;
chmod +x finalshell_install.sh; 
使用sudo ./finalshell_install.sh启动服务
2. 使用Xshell
