package main

import "fmt" // 不允许单引号

type human interface {
	say()
}

type student struct {
	name string
	age int
}

func (s *student) say() { // receiver是指针类型
	fmt.Println(s.name)
}

func count (num int) int {
	const Max = 10
	if (num > Max) {
		return 0
	}
	return num + count(num + 2)
}
// 1: 1 + count(3)
// 2: 1 + 3 + count(5)
// 3: 1 + 3 + 5 + count(7)
// 4: 1 + 3 + 5 + 7 + count(9)
// 5: 1 + 3 + 5 + 7 + 9 + 0

func sum (num...int) int {
	total := 0
	for _, val := range num {
		total += val
	}
	return total
}

func main () {
	var peo human
	Dan := &student{name: "Dan", age: 26}
	// Dan.say() // "Dan"

	peo = Dan // 赋值给peo的Dan必须是指针
	peo.say() // "Dan"

	fmt.Println(count(1))

	nums := []int{1, 2, 3, 4}
	fmt.Println(sum(nums...)) // 数组

	str := "我严世界"
	byte_str := []byte(str)
	fmt.Printf("字节数组：%d，字符串：%s\n", byte_str, string(byte_str))
	fmt.Println([]rune(str))
	for i, s := range []byte(str) {
		fmt.Printf("第%d个字节为：%b，十进制为%d，十六进制为%X\n", i, s, s, s) // %d 十进制 %b 二进制 %x 十六进制
	}

	// cha := make(chan int, 4)
	// cha <- 16
	// cha <- 10
	// fmt.Println(cha) // 16
	// fmt.Println(<-cha) // 16

	// cha := make(chan int, 4)
	// cha <- 16
	// tup := <- cha
	// cha <- 10 // cha被tup变量接收完之后，才可以继续往cha发送数据
	// fmt.Println(tup) // 16
	// fmt.Println(cha) // 0xc00008a000
	// fmt.Println(<-cha) // 10
}
