### 变量

1. var_dump函数可以将我们的变量的数据类型显示出来。

**php中双引号里面的变量会被执行(输出)，单引号不会，也就是单引号里的会被当成字符串。**

### 常量

什么是常量？常量可以理解为值不变的量（如圆周率）；或者是常量值被定义后，在脚本的其他任何地方都不可以被改变。PHP中的常量分为自定义常量和系统常量（后续小节会详细介绍）。

自定义常量是根据我们开发的需要，而定义的常量，它通过使用PHP中的函数define()定义。（注：函数，我们可以理解为一个混凝土搅拌机，亦或是一个筛子，通过入口提供原料，然后出口产出结果，在函数中也允许入口不提供任何数据，出口也允许不返回任何值。）

define()函数的语法格式为：
```php
	bool define(string $constant_name, mixed $value[, $case_sensitive = true])

	或者const THE_VALUES = 100;
```
它有3个参数（也就是原料）：

第一个参数"constant_name"为必选参数，常量名称,即标志符，常量的命名规则与变量的一致，但是要注意哦，它可不带美元符号哦。第二个参数"value"为必选参数，它是常量的值。第三个参数"case_sensitive"为可选参数，指定是否大小写敏感，设定为true表示不敏感，一般不指定第三个参数的情况下，默认第三个参数的值为false。

（注： string表示参数类型为字符串类型，mixed表示参数类型可以接受为多种不同的类型，case_sensitive = true表示默认为布尔类型TRUE）

### 系统常量

系统常量是PHP已经定义好的常量，我们可以直接拿来使用，常见的系统常量有：

（1）__FILE__ :php程序文件名。它可以帮助我们获取当前文件在服务器的物理位置。

（2）__LINE__ :PHP程序文件行数。它可以告诉我们，当前代码在第几行。

（3）PHP_VERSION:当前解析器的版本号。它可以告诉我们当前PHP解析器的版本号，我们可以提前知道我们的PHP代码是否可被该PHP解析器解析。

（4）PHP_OS：执行当前PHP版本的操作系统名称。它可以告诉我们服务器所用的操作系统名称，我们可以根据该操作系统优化我们的代码。

### PHP循环结构之foreach

在PHP中foreach循环语句，常用于遍历数组，一般有两种使用方式:不取下标、取下标。

（1）只取值，不取下标
```php
	<?php
	 foreach (数组 as 值){
	//执行的任务
	}
	?>
```
（2）同时取下标和值
```php
	<?php
	foreach (数组 as 下标 => 值){
	 //执行的任务
	}
	?>
```

### 数组

	$arr = array();表示创建一个数组

#### 索引数组

索引数组是指数组的键是整数的数组，并且键的整数顺序是从0开始，依次类推。

#### 关联数组

关联数组赋值有两种方式:

第一种：用数组变量的名字后面跟一个中括号的方式赋值，当然，关联数组中，中括号内的键一定是字符串。比如，$arr['apple']='苹果';

第二种：用array()创建一个空数组，使用=>符号来分隔键和值，左侧表示键，右侧表示值。当然，关联数组中，键一定是字符串。比如，array('apple'=>'苹果');

### 类（class）

#### 类的属性

在类中定义的变量称之为属性，通常属性跟数据库中的字段有一定的关联，因此也可以称作“字段”。属性声明是由关键字 public，protected 或者 private 开头，后面跟一个普通的变量声明来组成。属性的变量可以设置初始化的默认值，默认值必须是常量。

访问控制的关键字代表的意义为：

**public**：公开的  
**protected**：受保护的  
**private**：私有的

	class Car {
	    //定义公共属性
	    public $name = '汽车';
	
	    //定义受保护的属性
	    protected $corlor = '白色';
	
	    //定义私有属性
	    private $price = '100000';
	}

> 默认都为public，外部可以访问。一般通过->对象操作符来访问对象的属性或者方法，对于静态属性则使用::双冒号进行访问。当在类成员方法内部调用的时候，可以使用$this伪变量调用当前对象的属性。

```php
	$car = new Car();
	echo $car->name;   //调用对象的属性
	echo $car->color;  //错误 受保护的属性不允许外部调用
	echo $car->price;  //错误 私有属性不允许外部调用
```

受保护的属性与私有属性不允许外部调用，在类的成员方法内部是可以调用的。  

```php
	class Car{
	    private $price = '1000';
	    public function getPrice() {
	        return $this->price; //内部访问私有属性
	​    }
	}
```

#### 类的方法

方法就是在类中的function，很多时候我们分不清方法与函数有什么差别，在面向过程的程序设计中function叫做函数，在面向对象中function则被称之为方法。

同属性一样，类的方法也具有public，protected 以及 private 的访问控制。

访问控制的关键字代表的意义为：  
**public**：公开的  
**protected**：受保护的  
**private**：私有的

我们可以这样定义方法：
```php
	class Car {
	    public function getName() {
	        return '汽车';
	    }
	​}
	$car = new Car();
	echo $car->getName();
```

**使用关键字static修饰的，称之为静态方法，静态方法不需要实例化对象，可以通过类名直接调用，操作符为双冒号::**。

```php
	class Car {
	    public static function getName() {
	        return '汽车';
	    }
	​}
	echo Car::getName(); //结果为“汽车”
```

#### 构造函数和析构函数

PHP5可以在类中使用___construct()定义一个构造函数，具有构造函数的类，会在每次对象创建的时候调用该函数，因此常用来在对象创建的时候进行一些初始化工作。
```php
	class Car {
	   function __construct() {
	       print "构造函数被调用\n";
	   }
	}
	$car = new Car(); //实例化的时候 会自动调用构造函数__construct，这里会输出一个字符串
```

在子类中如果定义了__construct则不会调用父类的__construct，如果需要同时调用父类的构造函数，需要使用parent::__construct()显式的调用。  
```php
	class Car {
	   function __construct() {
	       print "父类构造函数被调用\n";
	   }
	}
	class Truck extends Car {
	   function __construct() {
	       print "子类构造函数被调用\n";
	       parent::__construct();
	   }
	}
	$car = new Truck();
```

同样，PHP5支持析构函数，使用__destruct()进行定义，析构函数指的是当某个对象的所有引用被删除，或者对象被显式的销毁时会执行的函数。
```php
	class Car {
	   function __construct() {
	       print "构造函数被调用 \n";
	   }
	   function __destruct() {
	       print "析构函数被调用 \n";
	   }
	}
	$car = new Car(); //实例化时会调用构造函数
	echo '使用后，准备销毁car对象 \n';
	unset($car); //销毁时会调用析构函数
```

当PHP代码执行完毕以后，会自动回收与销毁对象，因此一般情况下不需要显式的去销毁对象。

#### Static静态关键字

静态属性与方法可以在不实例化类的情况下调用，直接使用类名::方法名的方式进行调用。静态属性**不允许**对象使用->操作符调用。  

	class Car {
	    private static $speed = 10;
	    
	    public static function getSpeed() {
	        return self::$speed;
	    }
	}
	echo Car::getSpeed();  //调用静态方法

静态方法也可以通过变量来进行动态调用
```php
	$func = 'getSpeed';
	$className = 'Car';
	echo $className::$func();  //动态调用静态方法
```

**静态方法中，$this伪变量不允许使用。可以使用self，parent，static在内部调用静态方法与属性。**

	class Car {
	    private static $speed = 10;
	    
	    public static function getSpeed() {
	        return self::$speed;
	    }
	    
	    public static function speedUp() {
	        return self::$speed+=10;
	    }
	}
	class BigCar extends Car {
	    public static function start() {
	        parent::speedUp();
	    }
	}
	
	BigCar::start();
	echo BigCar::getSpeed();

#### 访问控制

前面的小节，我们已经接触过访问控制了，访问控制通过关键字public，protected和private来实现。被定义为公有的类成员可以在任何地方被访问。被定义为受保护的类成员则可以被其自身以及其子类和父类访问。被定义为私有的类成员则只能被其定义所在的类访问。

类属性必须定义为**公有、受保护、私有**之一。为兼容PHP5以前的版本，如果采用 var 定义，则被视为公有。
```php
	class Car {
	    $speed = 10; //错误 属性必须定义访问控制
	    public $name;   //定义共有属性
	}
```
类中的方法可以被定义为**公有、私有或受保护**。如果没有设置这些关键字，则该方法默认为公有。
```php
	class Car {
	​    //默认为共有方法
	    function turnLeft() {
	    }
	}
```
> 如果构造函数定义成了私有方法，则不允许直接实例化对象了，这时候一般通过静态方法进行实例化，在设计模式中会经常使用这样的方法来控制对象的创建，比如单例模式只允许有一个全局唯一的对象。

	class Car {
	    private function __construct() {
	        echo 'object create';
	    }
	
	    private static $_object = null;
	    public static function getInstance() {
	        if (empty(self::$_object)) {
	            self::$_object = new Car(); //内部方法可以调用私有方法，因此这里可以创建对象
	        }
	        return self::$_object;
	    }
	}
	//$car = new Car(); //这里不允许直接实例化对象
	$car = Car::getInstance(); //通过静态方法来获得一个实例

#### 重载

PHP中的重载指的是动态的创建属性与方法，是通过魔术方法来实现的。属性的重载通过__set，__get，__isset，__unset来分别实现对不存在属性的赋值、读取、判断属性是否设置、销毁属性。

	class Car {
	    private $ary = array();
	    
	    public function __set($key, $val) {
	        $this->ary[$key] = $val;
	    }
	    
	    public function __get($key) {
	        if (isset($this->ary[$key])) {
	            return $this->ary[$key];
	        }
	        return null;
	    }
	    
	    public function __isset($key) {
	        if (isset($this->ary[$key])) {
	            return true;
	        }
	        return false;
	    }
	    
	    public function __unset($key) {
	        unset($this->ary[$key]);
	    }
	}
	$car = new Car();
	$car->name = '汽车';  //name属性动态创建并赋值
	echo $car->name;
方法的重载通过__call来实现，当调用不存在的方法的时候，将会转为参数调用__call方法，当调用不存在的静态方法时会使用__callStatic重载。

	class Car {
	    public $speed = 0;
	    
	    public function __call($name, $args) {
	        if ($name == 'speedUp') {
	            $this->speed += 10;
	        }
	    }
	}
	$car = new Car();
	$car->speedUp(); //调用不存在的方法会使用重载
	echo $car->speed;
这里__call($name,$args)这两个参数的具体,首先$name会自动接收不存在的函数的名字 所以也就有__call函数第一句判断句,$args会以数组的方式接收不存在的函数的各个参数。