## Cenos7最新firewalld引起的问题，用经典的 iptables-services 来替代 firewalld
```
yum -y install iptables-services
systemctl mask firewalld
systemctl enable iptables
systemctl stop firewalld
systemctl start iptables
```

- 打开防火墙`systemctl start firewalld.service`
- 查看开放端口`firewall-cmd --list-ports`
## 更新防火墙规则方法1:无需断开连接，动态更改规则
firewall-cmd --reload
## 更新防火墙规则方法2:断开连接，以重启的方式更改规则
firewall-cmd --complete-reload


## netstat 命令
RHEL 7 及 CentOS 7 minimal 內沒有包括 netstat, 需要安裝相關套件才可以使用
- `yum install net-tools`