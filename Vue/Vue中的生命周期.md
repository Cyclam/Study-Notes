### Vue中生命周期

1. beforeCreated

vue实例初始化，此时无法获取data中的数据和methods中的方法

2. created

此时data中的数据已经初始化完毕，可以对data中的数据进行修改，但$el还没有，此时还是虚拟的DOM结构

3. beforeMounted
在挂载vue实例之前

4. mounted

创建$el并挂载vue实例上，可以获取$el中的DOM元素，进行DOM访问操作

5. beforeUpdated
data数据更新时调用，发生在虚拟DOM重新渲染之前

6. updated
data中的数据、DOM结构更新完毕

7. beforeDestroy
在实例销毁之前调用，在这一步实例依然可用
使用场景：执行清理任务，比如：清除定时器等

8. destroyed
vue实例被销毁后调用，调用后，vue实例所绑定的数据会被解除，事件监听会被移除，所有的子实例也会被销毁。
