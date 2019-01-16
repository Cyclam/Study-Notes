## 1.工作区和GOPATH

- GOROOT：Go 语言安装根目录的路径，也就是 GO 语言的安装路径
- GOPATH：若干工作区目录的路径，是我们自己定义的工作区间
- GOBIN: GO 程序生成的可执行文件（executable file）的路径

### go get命令
- -u: 下载并安装代码包，不论工作区中是否已存在它们
- -d: 只下载代码包，不安装代码包
- fix：在下载代码包后先运行一个用于柑橘当前GO 语言版本修正代码的工具，然后再安装代码包
- -t: 同时下载测试所需的代码包
- insecure: 允许通过非安全的网络协议下载和安装代码包，HTTP就是这样的协议

go get并没有提供依赖管理的功能，常常会用到第三方以及官方出品的管理工具：如blide、gb以及官方出品的dep、vgo等。

## 2.命令源码文件 *

命令源码文件是程序的运行入口，是每个可独立运行的程序必须拥有的。
**如果一个源码文件声明属于main包，并且包含一个无参数声明且无结果声明的main函数，那么它就是命令源码文件**

```go
package main

import (
  // 需在此处添加代码。[1]
  "flag"
	"fmt"
)

var name string

func init() {
  // 需在此处添加代码。[2]
  flag.StringVar(&name, "name", "everyone", "The greeting object.")
}

func main() {
  // 需在此处添加代码。[3]
  flag.Parse()
	fmt.Printf("Hello, %s!\n", name)
}

```

`flag.StringVar(&name, "name", "everyone", "The greeting object.")`

函数flag.StringVar接受4个参数

- 第 1 个参数是用于存储该命令参数值的地址，具体到这里就是在前面声明的变量name的地址了，由表达式&name表示
- 第 2 个参数是为了指定该命令参数的名称，这里是name
- 第 3 个参数是为了指定在未追加该命令参数时的默认值，这里是everyone
- 第 4 个函数参数，即是该命令参数的简短说明了，这在打印命令说明时会用到

flag.Parse()用于真正解析命令参数，并把它们的值赋值给相应的变量。
对该函数的调用必须在所有命令参数存储载体的声明（这里是对变量name的声明）和设置（这里是对flag.StringVar函数的调用）之后，并且在读取任何命令参数值之前进行。

> 自定义命令源码文件的参数使用说明
最简单的一种方式是对变量flag.Usage重新赋值。flag.Usage的类型是func()，即是一种五参数且无结果声明的函数类型。

```go
package main
import (
	"flag"
	"fmt"
	"os"
)
var name string

func init() {
  // 需在此处添加代码。[2]
  flag.StringVar(&name, "name", "everyone", "The greeting object.")
}

func main() {
	// 需在此处添加代码。[3]
	flag.Usage = func() {
		fmt.Fprintf(os.Stderr, "Usage of %s:\n", "question")
		flag.PrintDefaults()
	}
	flag.Usage()
  flag.Parse()
	// fmt.Printf("Hello, %s!\n", name)
}
```

## 3.库源码文件

## 4.程序实体

> 判断变量的类型
使用类型断言表达式，包括用来把container变量的值转换为空接口值的interface{}(container)以及一个用于判断前者的类型是否为切片类型的[]string的.([]string)

```go
package main

import "fmt"

var container = []string{"zero", "one", "two"}

func main() {
	container := map[int]string{0: "zero", 1: "one", 2: "two"}
	fmt.Printf("The element is %q.\n", container[1])
}

value, ok := interface{}(container).([]string)

```
## 5.数组和切片

> 数组类型的值的长度是固定的，而切片类型的值是可变长的

**Go语言的切片类型属于引用类型，同属引用类型的还有字典类型、通道类型、函数类型；而Go语言的数组类型则属于值类型，同属值类型的有基础数据类型以及结构体类型**

注意，Go 语言里不存在像 Java 等编程语言中令人困惑的“传值或传引用”问题。在 Go 语言中，我们判断所谓的“传值”或者“传引用”只要看被传递的值的类型就好了。

如果传递的值是引用类型的，那么就是“传引用”。如果传递的值是值类型的，那么就是“传值”。从传递成本的角度讲，引用类型的值往往要比值类型的值低很多。

**数组的容量永远等于其长度，都是不可变的，切片的容量却不是这样，并且它的变化是有规律可寻的**

**请记住，在无需扩容时，append函数返回的是指向原底层数组的新切片，而在需要扩容时，append函数返回的是指向新底层数组的新切片**

```go
初始时两个切片引用同一个底层数组，在后续操作中对某个切片的操作超出底层数组的容量时，这两个切片引用的就不是同一个数组了，比如下面这个例子:
s1 := []int {1,2,3,4,5}
s2 := s1[0:5]

s2 = append(s2, 6)
s1[3] = 30

此时s1[3]的值为30, s2[3]的值仍然为4，因为s2的底层数组已是扩容后的新数组了。
```