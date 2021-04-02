// constructor 返回创建实例对象时构造函数的引用

// 构造函数 Parent 有一个指向原型的指针，原型 Parent.prototype 有一个指向构造函数的指针 Parent.prototype.constructor，如上图所示，其实就是一个循环引用。

/* 1、通过字面量的形式创建一个对象 */

var obj = {};
// 其实是 var obj = new Object() 的简写形式

/* 2、工厂模式 */
function Student(name, age) {
  var F = new Object();
  F.name = name;
  F.age = age;
  F.say = function() {
    console.log(this.name, this.age);
  };
  return F;
}

var st = new Student("Mike", 23);
st.say();

/* 3、构造函数 */
function People(name, age) {
  this.name = name;
  this.age = age;
  this.say = function() {
    console.log(this.name, this.age);
  };
}

var s = new People("Jordan", 39);
s.say();

/* 4、原型模式 */
function Human(name, age) {
  this.name = name;
  this.age = age;
}

Human.prototype.say = function() {
  console.log(this.name, this.age);
};

var h = new Human("Tom", 33);
h.say();

/* 5、组合模式(构造函数 + 原型模式) */

function Parent(name, age) {
  this.name = name;
  this.age = age;
}
Parent.prototype = {
  constructor: Parent,
  say: function() {
    console.log(this.name);
  }
};
