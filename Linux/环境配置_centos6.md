## 安装node版本管理器

- 下载安装nvm `wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash`

```shell
=> Downloading nvm as script to '/root/.nvm'
=> Appending nvm source string to /root/.bashrc
=> Appending bash_completion source string to /root/.bashrc
=> Close and reopen your terminal to start using nvm or run the following to use it now:

之后激活nvm: `source ~/.nvm/nvm.sh`

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

安装完毕重新打开控制台即可
```

- 使用nvm安装指定版本的node `nvm install <node_version>`
- 切换已安装的其他版本的node `nvm use <node_version>`

## 安装git

- `yum info git && yum install git`

## 安装MySQL数据库

几个常用的命令
1. 启动： service mysqld start.
2. 停止： service mysqld stop.
3. 重启： service mysqld restart.
4. 查看状态： service mysqld status.
5. 查看状态： systemctl status mysqld.service.

- Step1: 检测系统是否自带安装mysql `yum list installed | grep mysql`
- Step2: 删除系统自带的mysql及其依赖 `yum -y remove mysql-libs.x86_64`
- Step3: 给CentOS添加rpm源，并且选择较新的源，命令如下：

```shell
# wget dev.mysql.com/get/mysql-community-release-el6-5.noarch.rpm
# yum localinstall mysql-community-release-el6-5.noarch.rpm
# yum repolist all | grep mysql
# yum-config-manager --disable mysql55-community // yum-config-manager系统默认没有这个命令 需自行安装 => yum -y install yum-utils
# yum-config-manager --disable mysql56-community
# yum-config-manager --enable mysql57-community-dmr
# yum repolist enabled | grep mysql
```
- Step4:安装mysql 服务器 `yum install mysql-community-server`
- Step5: 启动mysql `service mysqld start`
- Step6: 查看mysql是否自启动，并且设置开启自启动
```shell
# chkconfig --list | grep mysqld
# chkconfig mysqld on
```
- Step7: mysql安全设置 `mysql_secure_installation`
- Step8: 卸载mysql `yum remove  mysql mysql-server mysql-libs mysql-serve`

```shell
PLEASE REMEMBER TO SET A PASSWORD FOR THE MySQL root USER !
To do so, start the server, then issue the following commands:

/usr/bin/mysqladmin -u root password 'new-password'
/usr/bin/mysqladmin -u root -h vultr.guest password 'new-password'

Alternatively you can run: /usr/bin/mysql_secure_installation

which will also give you the option of removing the test
databases and anonymous user created by default.  This is
strongly recommended for production servers.
```

## 安装Ruby

## 安装Golang

## 熟悉curl、yum命令

## 安装SSL证书

[使用certbot更方便](https://certbot.eff.org/lets-encrypt/centosrhel7-nginx)

- 首先下载ACME.SH `wget -O -  https://raw.githubusercontent.com/Neilpang/acme.sh/master/acme.sh | INSTALLONLINE=1  sh`
```shell
It is recommended to install crontab first. try to install 'cron, crontab, crontabs or vixie-cron'.
[Sat Feb  2 09:59:55 CST 2019] We need to set cron job to renew the certs automatically.
[Sat Feb  2 09:59:55 CST 2019] Otherwise, your certs will not be able to be renewed automatically.
[Sat Feb  2 09:59:55 CST 2019] Please add '--force' and try install again to go without crontab.
[Sat Feb  2 09:59:55 CST 2019] ./acme.sh --install --force
[Sat Feb  2 09:59:56 CST 2019] Pre-check failed, can not install.
```
- 安装定时任务 `yum install vixie-cron`
  开启`service crond start`
  开机启动`chkconfig crond on`
- 申请Let’s Encrypt免费泛域名证书的第一步获取验证DNS所需要的TXT记录`acme.sh --issue -d *.yusingz.com -d yusingz.com --dns --yes-I-know-dns-manual-mode-enough-go-ahead-please`
```shell
[root@vultr ~]# acme.sh --issue -d *.yusingz.com -d yusingz.com --dns
[Sat Feb  2 10:42:52 CST 2019] It seems that you are using dns manual mode. Read this link first: https://github.com/Neilpang/acme.sh/wiki/dns-manual-mode
[root@vultr ~]# acme.sh --issue -d *.yusingz.com -d yusingz.com --dns --yes-I-know-dns-manual-mode-enough-go-ahead-please
[Sat Feb  2 10:43:40 CST 2019] Registering account
[Sat Feb  2 10:43:42 CST 2019] Registered
[Sat Feb  2 10:43:42 CST 2019] ACCOUNT_THUMBPRINT='-bLkIZHLG2xs_FoZeQhi0r3wIURhQlM-9UDqA9bSCME'
[Sat Feb  2 10:43:42 CST 2019] Creating domain key
[Sat Feb  2 10:43:43 CST 2019] The domain key is here: /root/.acme.sh/*.yusingz.com/*.yusingz.com.key
[Sat Feb  2 10:43:43 CST 2019] Multi domain='DNS:*.yusingz.com,DNS:yusingz.com'
[Sat Feb  2 10:43:43 CST 2019] Getting domain auth token for each domain
[Sat Feb  2 10:43:45 CST 2019] Getting webroot for domain='*.yusingz.com'
[Sat Feb  2 10:43:45 CST 2019] Getting webroot for domain='yusingz.com'
[Sat Feb  2 10:43:46 CST 2019] Add the following TXT record:
[Sat Feb  2 10:43:46 CST 2019] Domain: '_acme-challenge.yusingz.com'
[Sat Feb  2 10:43:46 CST 2019] TXT value: 'AHtWTMZ1dwxjSjqMaLgaxIN9GrCH7ET9El6h4PV5K3g'
[Sat Feb  2 10:43:46 CST 2019] Please be aware that you prepend _acme-challenge. before your domain
[Sat Feb  2 10:43:46 CST 2019] so the resulting subdomain will be: _acme-challenge.yusingz.com
[Sat Feb  2 10:43:46 CST 2019] Add the following TXT record:
[Sat Feb  2 10:43:46 CST 2019] Domain: '_acme-challenge.yusingz.com'
[Sat Feb  2 10:43:46 CST 2019] TXT value: 'xEU5kByNLj6mUP2U78US7h3w5Upvu9eUwRBANGeL4LE'
[Sat Feb  2 10:43:46 CST 2019] Please be aware that you prepend _acme-challenge. before your domain
[Sat Feb  2 10:43:46 CST 2019] so the resulting subdomain will be: _acme-challenge.yusingz.com
[Sat Feb  2 10:43:46 CST 2019] Please add the TXT records to the domains, and re-run with --renew.
[Sat Feb  2 10:43:46 CST 2019] Please add '--debug' or '--log' to check more details.
[Sat Feb  2 10:43:46 CST 2019] See: https://github.com/Neilpang/acme.sh/wiki/How-to-debug-acme.sh
[Sat Feb  2 10:43:46 CST 2019] Removing DNS records.
```