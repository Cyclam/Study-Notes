package main

import (
	"fmt"
	"time"
)

// channel用于goroutines之间的通信，让它们之间可以进行数据交换。
// 像管道一样，一个goroutine_A向channel_A中放数据，另一个goroutine_B从channel_A取数据。
func main() {
	ch := make(chan string)
	go sender(ch)         // sender goroutine
	go recver(ch)         // recver goroutine
	time.Sleep(1 * time.Second)
}

func sender(ch chan string) {
	ch <- "malongshuai"
	ch <- "gaoxiaofang"
	ch <- "wugui"
	ch <- "tuner"
	// time.Sleep(1 * time.Second)
	// fmt.Println(<-ch, "=======")
	// time.Sleep(1 * time.Second)
}

func recver(ch chan string) {
	// var recv string
	// for {
	// 	recv := <-ch
	// 	fmt.Println(recv, "end")
	// }

	for v := range ch {
		// fmt.Println(<-ch)
		fmt.Println(v)
	}
}