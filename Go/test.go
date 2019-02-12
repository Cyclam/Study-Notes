package main

import (
	"fmt"
	"time"
)

func main()  {
	ch := make(chan int, 5)
	nums := []int{1, 2, 3, 4, 5}
	for _, num := range nums {
		ch <- num
	}
	go recev(ch)
	time.Sleep(3 * time.Second)
}

// 因为receiver要不断从channel中读取可能存在的数据，所以receiver一般都使用一个无限循环来读取channel，避免sender发送的数据被丢弃。
func recev(ch chan int) {
	// for val := range ch {
	// 	fmt.Println(val)
	// }
	for {
		fmt.Println(<-ch)
	}
}