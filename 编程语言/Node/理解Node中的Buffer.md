### 参考文章

[彻底理解Node.js中的Buffer](https://cnodejs.org/topic/5cbdc8eda86ae80ce64b20ee)

### Buffer结构

Buffer是一个类似Array的对象，它的元素为16进制的两位数，即0到255的数值。
Node在进程启动时就已经加在了Buffer，并将其放在全局对象global上，使用Buffer时无须require进来。

```js
var str = "深入浅出node.js";
var buf = new Buffer(str, 'utf-8');
console.log(buf);
// => <Buffer e6 b7 b1 e5 85 a5 e6 b5 85 e5 87 ba 6e 6f 64 65 2e 6a 73>
// 不同编码的字符串占用的元素各不相同，上面代码的中文字在UTF-8下占用3个元素，字符和半角标点符号占用1个元素。
```

### Buffer内存分配

> C++层面申请内存，在Javascript中分配内存
当进行小而频繁的Buffer操作是，采用slab的机制进行预先申请和时候分配，使得Javascript到操作系统之间不必有过多的内存申请方面的系统调用。对于大块的Buffer而言，则直接使用c++层面提供的内存，而无需细腻的分配操作。