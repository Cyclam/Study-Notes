> 使用pm2管理node应用

## 什么是pm2
PM2是node进程管理工具，可以利用它来简化很多node应用管理的繁琐任务，如性能监控、自动重启、负载均衡等，而且使用非常简单。

全局安装`npm install pm2 -g`  

在package.json里scripts字段添加`"prd": "pm2 start bin/www --watch"`

常用命令行有：  
- pm2 list
- pm2 delete <id>
- pm2 restart <name>
- pm2 reload <all/id/name>
- pm2 monit



## 参考文章
[关于Node进程管理器PM2使用技巧和需要注意的地方](https://github.com/jawil/blog/issues/7)

QVK-8s7kqesTnXJQFUX3