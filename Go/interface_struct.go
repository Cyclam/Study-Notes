package main

import "fmt"

type Fruitable interface {
	eat()
}

type Banana struct {
	name string
}
type Apple struct {
	name string
}

func (a *Apple) eat() {
	fmt.Println("eating apple")
}

func (b *Banana) eat() {
	fmt.Println("eating banana")
}

type Fruit struct {
	Banana // 匿名类型
	Apple *Apple
	name string
}

func (f *Fruit) want() {
	fmt.Println("I like")
	fmt.Println(f)

	// 直接调用 Fruit结构体Apple的类型必须设为指针类型 否则只能用下面这种链式写法
	f.eat() // eating banana
	f.Apple.eat() // eating apple
}


func main() {
	var f1 = Fruit{Banana{name: "b"}, &Apple{name: "a"}, "Apple"}
	f1.want()
	fmt.Println("=================")
	var f Fruitable
	// Fruit does not implement Fruitable (eat method has pointer receiver)
	f2 := &Fruit{Banana{name: "b"}, &Apple{name: "a"}, "Apple"}
	f = f2
	f.eat() // eating banana 匿名字段Banana字段具有更高优先级 首先从Fruitable里寻找eat方法，没有则从匿名字段Banana字段里找
}
