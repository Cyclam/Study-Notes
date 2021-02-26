
## Question
1. 在服务器的 ~/.ssh/authorized_keys 文件内加入自己的公钥, 按理说下次在有该公钥的机器登录服务器时可以免密登录。但在一台服务器上遇到无法免密登录的情况。

## Answer
1. 造成这个问题的原因是 ~/.ssh 文件夹和，文件夹内的文件权限不对。

```shell
$ cd ~
$ chmod 700 .ssh
$ cd .ssh
$ chmod 644 authorized_keys id_rsa.pub
$ chmod 600 id_rsa
```

更改文件夹和文件为合适的权限后即可实现免密登录。
为什么要使用几个权限并不太清楚，虽然只要不给其他用户和用户组可写的权限都可以正常使用免密登录，但是尽量还是按照这几个文件及文件夹默认的权限去设置。

2. 直接拷贝公钥到远程主机
`cat ~/.ssh/id_rsa.pub | ssh root@66.42.101.188 'mkdir -p .ssh && cat - >> ~/.ssh/authorized_keys'`

3. 或者使用`ssh-copy-id`命令
`ssh-copy-id命令可以把本地主机的公钥复制到远程主机的authorized_keys文件上，ssh-copy-id命令也会给远程主机的用户主目录（home）和~/.ssh, 和~/.ssh/authorized_keys设置合适的权限。`

`ssh-copy-id [-i [identity_file]] [user@]machine` -i 指定公钥文件

实例：`ssh-copy-id -i ~/.ssh/id_rsa.pub user@server`

## ssh别名登录

`$ vi ~/.ssh/config`添加以下内容即可通过 `ssh vultr`登录
```shell
Host vultr
  HostName 45.xx.xx.xx
  User root
  #PreferredAuthentications publickey
  IdentityFile ~/.ssh/id_rsa
```