import Message from './main'

let install = (Vue) => {
  Vue.prototype.$message = Message
}

export default {
  Message,
  install
}

// 在入口文件引入，使用 Vue.use(Message)
// Vue.use()安装 Vue.js 插件。
// 如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。