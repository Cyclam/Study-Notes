/* 1. 原型链 */

function Parent() {
  this.name = "Jordan";
}
Parent.prototype.getName = function() {
  return this.name;
};

function Child() {
  this.age = 18;
}

Child.prototype.getAge = function() {
  return this.age;
};

// 继承 Parent
Child.prototype = new Parent();

/* 2. 借用构造函数 */

function Parent() {
  this.name = "Jordan";
}
Parent.prototype.getName = function() {
  return this.name;
};

function Child() {
  // 继承 Parent
  Parent.call(this);
  this.age = 18;
}

Child.prototype.getAge = function() {
  return this.age;
};

/* 3. 组合继承（将构造函数和原型链组合在一起） */

function Parent() {
  this.name = "Jordan";
}
Parent.prototype.getName = function() {
  return this.name;
};

function Child() {
  // 继承 属性
  Parent.call(this);
  this.age = 18;
}

// 每次都要讲prototype敲一遍，比较麻烦
Child.prototype = new Parent();
Child.prototype.constructor = Child;
Child.prototype.getAge = function() {
  return this.age;
};

/* 4. 原型式继承 Object.create() */

var person = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"]
};
var anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");
var yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");
alert(person.friends); //"Shelby,Court,Van,Rob,Barbie" 会数据共享

/* 5. ES6中的继承 */

class Parent {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  getAge() {
    return this.age;
  }
}
