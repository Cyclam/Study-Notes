> 在开始正文之前说说为什么需要使用Swagger去搭建一个Node API在线文档，前段时间在公司内部调岗后跟一个新来没多久的后端负责一个营销工具系列的开发任务。后端直接丢个我一个JSON文件，需要我自己本地运行一个node服务去查看相应的API文档，想想每次都需要自己本地开启一个服务，如此手动操作肯定不是作为一个程序猿想要的，而且还有另外两个前端需要查阅这份API文档，所有干脆使用Jenkins + Swagger + Gitlab去搭建一个自动化部署的环境，那么我在这里先讲第一部分——如何本地使用Swagger搭建API文档。

## 环境要求
1. npm
2. npm install -g koa-generator

## 下载Swagger UI
`git@github.com:swagger-api/swagger-ui.git`
也可以直接下载zip文件，最新版本是3.17.6

## 使用koa2搭建node应用
运行`koa2 <app name>`初始化node应用  
`cd <app name>` && `npm install`  

将node应用的public目录下原有的文件夹移除，在前面下载好的Swagger UI找到dist文件夹，将该文件夹的所有文件全部放在public目录下

`npm start`启动应用即可看到初始化的swagger文档界面
![swagger ui]([./images/20180728141753.png])

指定应用默认显示的文档页面

```javascript
const ui = SwaggerUIBundle({
    url: "./swagger.yml", // 指定默认显示的文档
    // url: 'swagger.json', // 也可以使用json格式 一般书写采用yml或者yaml
	  // url: 'swagger.yaml',
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout",
    validatorUrl: false
  })
```