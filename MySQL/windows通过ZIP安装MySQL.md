### 安装步骤
1. 讲zip文件解压到本地目录`E:\mysql-5.7.20`
2. 在bin文件夹下新建一个配置文件(my.ini)，并且`E:\mysql-5.7.20`目录下新建data文件夹用于存放mysql数据

my.ini写入以下内容

```
[mysqld]
basedir = E:\mysql-5.7.20
datadir = E:\mysql-5.7.20\data
port=3306
charcter-set-server=utf8

[client]
port=3306
charcter-set-server=utf8
```

5.7.22安装下更改配置为

```
[mysqld]
basedir = D:\mysql-5.7.22
datadir = D:\mysql-5.7.22\data
port=3306
explicit_defaults_for_timestamp=true

[client]
port=3306
```

3. 以管理员身份运行cmd命令
输入`cd E:\mysql-5.7.20\bin`进入bin目录下
输入`mysqld --initialize --user=mysql --console`
记下最后一行产生的随机密码
接着输入`mysqld --install`
成功会显示`Servers Successfully installed`
控制台下输入`net start mysql`启动mysql服务

或者cmd进入到mysql安装目录bin，如`E:\mysql-5.7.20\bin`，输入`mysqld --console开启mysql服务`

或者用以下方法
输入mysqld install回车运行，出现安装成功就可以了。
输入net start mysql 启动mysql （或打开windows服务手动启动mysql）
要在bin目录下手动初始化data目录

cd到bin目录下先初始化

- mysqld --initialize-insecure自动生成无密码的root用户，

- mysqld --initialize自动生成带随机密码的root用户

这里选择 mysqld --initialize-insecure 

初始化后再运行net start mysql 成功启动mysql

4. `net stop mysql` 关闭mysql服务

### tips
- 按照此步骤`my.ini`文件务必请放在bin目录下，放在mysql根目录下会报错
- 安装之前data文件夹必须为空，报错后可查看data目录下的日志文件DESKTOP-OQOAPS8.err
- 需要重新安装先用sc delete mysql（服务名称）命令卸载服务，清空data文件夹后执行安装命令
- git bash 登录mysql
`winpty mysql -u root -p`
- 修改密码：`set password for root@localhost = password('123456')`或者
`update user set password=password(”xueok654123″) where user=’root’`
或者`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '你的密码';(8.x版本)`

### MAC OS mysql命令无效

在`.bash_profile`添加环境变量`export PATH="$PATH:/usr/local/mysql/bin`