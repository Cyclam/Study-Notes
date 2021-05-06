### 为什么在 data 函数初始化对象的时候，没有深度遍历对象使用 Object.definePropety 去设置描述符。

- 可能出于性能上的考量，将选择交由开发者去决定，可以使用 $set 方法重新绑定。

### 响应式更新问题

```vue
<script>
export default {
  data () {
    return {
      demo: {
        age: 1
      }
    }
  },
  methods: {
    // 如果我们先触发 testA 方法，再触发 testB 方法，同样 demo 不会更新视图
    testA () {
      this.demo.count = 100
      console.log(this.demo)
      // get age: ƒ reactiveGetter()
      // set age: ƒ reactiveSetter(newVal)
    },
    testB () {
      let count = 1
      this.$set(this.demo, "count", count)
      // console.log(this.demo)
      // get age: ƒ reactiveGetter()
      // set age: ƒ reactiveSetter(newVal)
      // get count: ƒ reactiveGetter()
      // set count: ƒ reactiveSetter(newVal)
    }
  }
}
</script>
```

### [].slice(0)

[What's the point of .slice(0) here](https://stackoverflow.com/questions/5024085/whats-the-point-of-slice0-here)

### nextTick

**Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。Vue 在内部对异步队列尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。**

异步队列的先进先出原则，在更新操作之后，再使用异步方式确保在更新 DOM 之后获取。

### event

Vue 支持 2 种事件类型，原生 DOM 事件和自定义事件，它们主要的区别在于添加和删除事件的方式不一样，并且自定义事件的派发是往当前实例上派发，但是可以利用在父组件环境定义回调函数来实现父子组件的通讯。另外要注意一点，只有组件节点才可以添加自定义事件，并且添加原生 DOM 事件需要使用 native 修饰符；而普通元素使用 .native 修饰符是没有作用的，也只能添加原生 DOM 事件。

### vue 响应式原理

- 对于 Array 类型的数据，会先重写操作数组的原型方法，重写后能达到两个目的，

当数组发生变化时，触发 notify
如果是 push，unshift，splice 这些添加新元素的操作，则会使用 observer 观察新添加的数据
重写完原型方法后，遍历拿到数组中的每个数据 使用 observer 观察它

**Object.defineProperty() 监听的数组对象，使用 push 方法不会触发 getter 和 setter 方法，因为无法监测新增数组、删除下标以及数组长度的变化，内部其实是使用 splice 去做的。这里有个问题，当使用 splice 去动态在已有索引增删数组的时候，有可能会多次触发 getter 和 setter ，因为数组对应的索引变化了（相当于数组整体都改变了），不知道官方有没有处理到这个细节问题。**

- 而对于 Object 类型的数据，则遍历它的每个 key，使用 defineProperty 设置 getter 和 setter，当触发 getter 的时候，observer 则开始收集依赖，而触发 setter 的时候，observe 则触发 notify。

有三个重要的模块要熟悉，分别是 observe、Dep、Watcher。

1. observe 监听数据的变化
2. Dep 知道数据变化后通知给 watcher
3. Watcher 收到通知后执行 update 操作，更新 DOM

**每个组件实例都对应一个 watcher 实例，它会在组件渲染的过程中把“接触”过的数据 property 记录为依赖。之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。**

### Virtual DOM

- 虚拟 DOM 不会立马进行排版与重绘操作（补充：对实例 Data 里的数据修改，不会立即反应在 DOM 上，这是个异步渲染的过程）
- 虚拟 DOM 进行频繁修改，然后一次性比较并修改真实 DOM 中需要改的部分，最后在真实 DOM 中进行排版与重绘，减少过多DOM节点排版与重绘损耗
- 虚拟 DOM 有效降低大面积真实 DOM 的重绘与排版，因为最终与真实 DOM 比较差异，可以只渲染局部

