package main

import "fmt"

type Human interface {
	sayHello()
}

type Teacher struct {
	Age int
}

func (t *Teacher) sayHi() {
	fmt.Println(t.Age, "come from Teacher")
}

func (t *Teacher) sayHello() {
	fmt.Println("sayHello from Teacher")
}

type Student struct {
	Name string
	Teacher // 匿名字段 可以通过.直接调用父类方法 继承Teacher机构体的方法和字段
}

// 重载（overload）是指同一个类里有函数名相同但是参数不同的函数
// 重写（override）指子类重新实现父类已有的方法

func (s *Student) sayHello() { // 重写父类方法
	fmt.Println(s.Name, "come from Student")
	fmt.Println(s.Age, "come from Student")
}

func main() {
	s := &Student{"Tom", Teacher{Age: 18}}
	// s := Student{Name: "Tom", Teacher{Age: 18}} // 错误
	s.sayHello() // 调用的是子类重写的方法
	s.sayHi()
	s.Teacher.sayHello()

	var h Human
	h = s
	h.sayHello()
}

// import "fmt"

// func sum(a []int, c chan int) {
// 	fmt.Println(a)
// 	total := 0
// 	for _, v := range a {
// 		total += v
// 	}
// 	c <- total  // send total to c
// }

// func main() {
// 	a := []int{7, 2, 8, -9, 4, 0}

// 	c := make(chan int)
// 	go sum(a[:len(a)/2], c)
// 	go sum(a[len(a)/2:], c)
// 	x, y := <-c, <-c  // receive from c

// 	fmt.Println(x, y, x + y)
// }