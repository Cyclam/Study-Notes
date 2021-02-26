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
	T *Teacher // 继承Teacher机构体的方法和字段 调用父类方法需要通过T字段来调用
}

func (s *Student) sayHello() {
	fmt.Println(s.Name, "come from Student")
	fmt.Println(s.T.Age, "come from Student")
}

func main() {
	s := &Student{"Tom", &Teacher{Age: 18}}
	// s := Student{Name: "Tom", Teacher{Age: 18}} // 错误
	s.sayHello()
	s.T.sayHi()
	s.sayHello()

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