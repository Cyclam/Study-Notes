## 安装
root用户登录，运行

```
wget --no-check-certificate -O shadowsocks-libev.sh https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks-libev.sh
chmod +x shadowsocks-libev.sh
./shadowsocks-libev.sh 2>&1 | tee shadowsocks-libev.log
```

## 卸载
`./shadowsocks-libev.sh uninstall`

本脚本安装完成后，会将 Shadowsocks-libev 加入开机自启动


## 常用命令
启动：/etc/init.d/shadowsocks start
停止：/etc/init.d/shadowsocks stop
重启：/etc/init.d/shadowsocks restart
查看状态：/etc/init.d/shadowsocks status

## 无界面客户端
安装：brew install shadowsocks-libev
```
To have launchd start shadowsocks-libev now and restart at login:
  brew services start shadowsocks-libev
Or, if you don't want/need a background service you can just run:
  /usr/local/opt/shadowsocks-libev/bin/ss-local -c /usr/local/etc/shadowsocks-libev.json -u
```
启动：brew services start shadowsocks-libev
停止：brew services restart shadowsocks-libev
重启：brew services stop shadowsocks-libev

[CentOS下shadowsocks-libev一键安装脚本](https://teddysun.com/357.html)
[客户端配置](https://teddysun.com/339.html)