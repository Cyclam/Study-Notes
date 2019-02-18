### chkconfig管理nginx
先将nginx服务加入chkconfig管理列表：

`chkconfig --add /etc/init.d/nginx`
加完这个之后，就可以使用service对nginx进行启动，重启等操作了。

`service nginx start`
`service nginx stop`
设置终端模式开机启动：

`chkconfig nginx on`

### Nginx

- 列出所有端口`netstat -ntlp`
- 查看开放的端口`service iptables status`

#### 开放端口
在`/etc/sysconfig/iptables`添加`-A INPUT -p tcp -m state --state NEW -m tcp --dport <port_num> -j ACCEPT `
然后**重启防火墙**`service iptables restart`即可

### 基本操作命令
- nginx 启动
- nginx -s reload 重启
- nginx -s stop 关闭
- nginx -t   #查看nginx配置是否正确  也可以切换到nginx的安装目录下的sbin目录下，执行: ./nginx -t
- ps -ef | grep nginx  #查看nginx端口