import Vue from 'vue'
import MessageComponent from './message.vue'

let MessageConstructor = Vue.extend(MessageComponent)

// let box
let instance
let instances = []
let seed = 1

function Message (options = {}) {
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  let id = 'message_' + seed++
  options.onClose = function () {
    Message.close(id)
  }
  // 使用基础 Vue 构造器创建一个 vue 实例，这里手动挂载到 document.body 上
  instance = new MessageConstructor({
    data: options
  })
  // 这里添加一些实例方法和属性，后面移除的时候需要用到 id 等
  instance.id = id
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  instance.dom = instance.vm.$el
  instance.dom.style.zIndex = 200
  instances.push(instance)
  return instance.vm
}

['success', 'warning', 'info', 'error'].forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return Message(options)
  }
})

Message.close = function (id) {
  for (let [instance, i] of instances.entries()) {
    if (id === instance.id) {
      instances.splice(i, 1)
      break
    }
  }
}

export default Message
