# JavaScript 学习笔记
### 第一部分：基础入门
#### 1.0 数据类型和变量  
Tips: JavaScript严格区分大小写，如果弄错了大小写，程序将报错或者运行不正常。  
Number、String、Boolean、undefined、Array、Object
***
##### Number   
javascript 不区分整数和浮点数，统一用Number表示  
在javascriitp中始终坚持使用===比较，NAN这个特殊的Number与所有其他值都不相等，包括它自己。

    NaN == NaN;  //false  
唯一能判断NaN的方法是通过isNaN()函数：  
    isNaN(NaN);  //true  
最后需要注意浮点数的相等比较：  

    1/3 == (1 - 2/3);  //false  
浮点数在运算的过程中会产生误差，因为计算机无法精确表示无限循环小数。要比较两个浮点数是否相等，只能计算它们之间的绝对值，看是否小于某个阈值：  

    Math.abs(1/3 - (1 -2/3)) < 0.0000001;  //true
##### null和undefined
null表示一个‘空’的值，它和0以及空字符串''不同，0是一个数值，''表示长度为0的字符串，而null表示‘空’。  
大多数情况下，我们都应该用null，而undefined仅仅在判断函数参数是否传递的情况下有用。
##### Array  
数组是一组按顺序排列的集合，集合的每个值称为元素。数组的索引值是数组对象的属性。  
##### Object  
对象是一组由键-值组成的无序集合。  
##### 变量
变量在javascritp中就是用一个变量名表示，变量名是大小写英、数字、$和_组合，且不能用数字开头。变量名也不能是javascript的关键字。  
#### 1.1 字符串  
***
字符串内部既包含有'又包含"，可以用转义字符\来标识。比如：'I\'m \"ok\"!';
##### 操作字符串之常用方法
1、indexOf()会搜索指定字符串出现的位置：

    var s = 'hello, world';
    s.indexOf('world');  //返回7
    s.indexOf('World');  //没有找到指定的字符串，返回-1
2、substring()返回指定索引区的字符串：

    var s = 'hello, worlld';
    s.substring(0,5);  //从索引值0开始到5（不包括5），返回'hello'
    s.substring(7);  //从索引值7开始到结束，返回'world'
#### 1.2 操作数组之常用方法
***
1、slice()对应String的substring()版本，它截取Array的部分元素，然后返回一个新的Array。如果不给slice()传递任何参数，它就会从头到尾截取所有元素。利用这一点，我们可以赋值一个Array。 
 
2、push()和pop()  
push()向Array的末尾添加若干元素，pop()则把Array的最后一个元素删除掉。 
 
unshift()和shift()  
unshift()往Array的头部添加若干元素，shift()则把Array的第一个元素删掉。
  
sort()可以对当前的Array排序，它会修改当前Array元素的位置。  
reverse()反转Array。 
 
splice()方法是修改Array的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素：  

    var arr =['Microsoft','Apple','Yahoo','AOL','Excite','Oracle'];  
    // 从索引2开始删除3个元素,然后再添加两个元素:  
	arr.splice(2, 3, 'Google', 'Facebook');  // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
	arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
	// 只删除,不添加:
	arr.splice(2, 2); // ['Google', 'Facebook']
	arr; // ['Microsoft', 'Apple', 'Oracle']
	// 只添加,不删除:
	arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
	arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']

concat()方法把当前的Array和另一个Array连接起来，并返回一个新的Array:
    
    var arr = ['A','B','C'];
    var add = arr.concat([1,2,3]);
    add;  //['A','B','C',1,2,3]
    arr;  //['A','B','C']

join()方法把当前Array的每个元素都用指定的字符串拼接起来，然后返回连接后的字符串：

    var arr = ['A','B','C'，1,2,3]；
    arr.join('-')  //'A-B-C-1-2-3'  如果Array的元素不是字符串，将自动转换为字符串后再连接。

#### 1.3 对象
***
javascript的对象是一种无序集合数据类型，它由若干键值对组成。  
访问对象的属性是通过 . 操作符完成的，但这要求属性名必须是一个有效的变量名。如果属性名包含特殊字符，就必须用''括起来。比如属性名middle-school不是一个有效的变量，就需要用''括起来。访问该属性也无法使用 . 操作符，必须用['XXX']来访问。  
访问一个不存在的属性会返回undefined。  

    var xiaoming = {
	    name: '小明',
	    birth: 1990,
	    school: 'No.1 Middle School',
	    height: 1.70,
	    weight: 65,
	    score: null
	};
	'name' in xiaoming; // true
	'grade' in xiaoming; // false

如果我们要检测某个对象是否有某一属性，可以用in操作符。不过in判断一个属性是否存在，这个属性不一定是它自身的，有可能是继承得到：  

    'toString' in xiaoming; // true
因为toString定义在object对象中，而所有对象最终都会在原型链上指向object，所以xiaoming也拥有toString属性。

要判断一个属性是否是xiaoming自身拥有的，而不是继承得到，可以用hasOwnProperty()方法：  
    
    var xiaoming = {
    	name: '小明'
	};
	xiaoming.hasOwnProperty('name'); // true
	xiaoming.hasOwnProperty('toString'); // false