/**
 * 
 * @param {*} context 
 * @param  {...any} args 
 * 给 context 添加一个方法
 */
Function.prototype.call = function (context, ...args) {
  context = context || window;
  console.log(context) // demo{name: 1}
  console.log(this) // function b()

  const fnSymbol = Symbol("fn");
  context[fnSymbol] = this;
  
  context[fnSymbol](...args);
  delete context[fnSymbol];

}
var demo = {
  name: 'Mike',
  // fn: function() {
  //   console.log(this.name)
  // }
}
// 函数本质也是一个对象，所以在 call 方法里的 this 指向的是 b 函数对象本身。
// You can see this article. [深入理解call方法的实现原理](https://ohiamfine.github.io/2019/07/31/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3call%E6%96%B9%E6%B3%95%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86/)

// 其实 context.fn = this 中的 this 指向的当前的 count 函数名，context 是我们传入的 obj2 对象。
// 所以这里的意思就是为 obj2 添加一个属性 fn，值为 count 函数，就跟我们之前的小 demo 一样。
// 然后下一行的意思就是取得 mycall 后面的参数，再下一行就是将参数传入 count 函数并执行，最后返回执行结果。
function b() {
  console.log(this.name)
}
b.call(demo)


/**
 * 
 * @param {*} context 
 * @param  {...any} args 
 * @returns 
 */
Function.prototype.bind = function (context, ...args) {
  context = context || window;
  const fnSymbol = Symbol("fn");
  context[fnSymbol] = this;
  
  return function (..._args) {
    args = args.concat(_args);
    context[fnSymbol](...args);
    delete context[fnSymbol];   
  }
}
