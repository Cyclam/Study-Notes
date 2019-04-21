### Vue.nextTick()
> 官方解释：在下次DOM更新循环结束之后执行延迟回调，在修改数据之后立即调用这个方法，获取更新后的DOM。

也许有人会问，我在 Vue 实例方法中修改了数据，然后再在 $nextTick 回调中获取该数据在相应 DOM 元素所绑定的内容（或属性）殊无必要，我为什么需要这样的 API 呢？

考虑这样一种场景，你有一个 jQuery 插件，希望在 DOM 元素中某些属性发生变化之后重新应用该插件，这时候就需要在 $nextTick 的回调函数中执行重新应用插件的方法。

**什么时候需要用Vue.nextTick()**

1. 在Vue生命周期created()钩子函数进行的DOM操作一定要放在 Vue.nextTick() 的回调函数中，因为在 created() 钩子函数执行的时候 DOM 其实还并未进行任何渲染，而此时进行DOM操作无异于徒劳，所以此处一定要将 DOM 操作的 js 代码放进 Vue.nextTick() 的回调函数中。与之对应的就是 mounted() 钩子函数，因为该钩子函数执行时所有的 DOM 挂载和渲染都已完成，此时在该钩子函数进行任何的 DOM 操作都不会有问题。
2. 在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的 DOM 结构的时候，这个操作都应该被放进 Vue.nextTick() 回调函数中。


### Vue中的生命周期

#### 初始化阶段
- beforeCreate 实例初始化之后，this指向创建的实例，不能访问到data、computed、watch、methods上的方法和数据
- created 实例创建完成，可访问data、computed、watch、methods上的方法和数据，未挂载到DOM，不能访问到$el属性，$ref属性内容为空数组

#### 挂载阶段

在实例挂载前，先判断有无el对象，判断是否使用了模板；
如果使用了模板，则按照编译模板的方法去做，如果没有则把el控制的视图区域当作模板来渲染。

- beforeMount 在挂载开始之前被调用，beforeMount之前，会找到对应的template，并编译成render函数
- mounted 实例挂载到DOM上，此时可以通过DOM API获取到DOM节点，$ref属性可以访问

#### 更新阶段
- beforeUpdate 响应式数据更新时调用，发生在虚拟DOM打补丁之前
- updated 虚拟 DOM 重新渲染和打补丁之后调用，组件DOM已经更新，可执行依赖于DOM的操作

#### 销毁阶段
- beforeDestroy 实例销毁之前调用。这一步，实例仍然完全可用，this仍能获取到实例
- destroyed 实例销毁后调用，调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁