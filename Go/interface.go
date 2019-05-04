package main

import (
	"fmt"
)

type People struct {
	name string
	age int
}

type Men interface {
	sayHi()
}

func (p *People) sayHi() {
	fmt.Println(p.name)
}

func test(t Men) {
	t.sayHi()
}

// 如果方法的接收者是值类型，无论调用者是对象还是对象指针，修改的都是对象的副本，不影响调用者；
// 如果方法的接收者是指针类型，则调用者修改的是指针指向的对象本身。
func main() {
	man := &People{"tom", 18}
	man.sayHi()

	var t Men
	t = man
	t.sayHi()

	fmt.Println("=========")
	test(t) // t 本身是一个Men接口类型
	test(man) // man 实现了Men接口 所以可以被复制给一个Men类型的变量
}
