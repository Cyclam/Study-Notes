package main

import (
	"fmt"
	"sync"
)

func main()  {
	// 那么这种多线程等待的问题就可以使用WaitGroup
	wg := new(sync.WaitGroup)
	for i := 0; i < 10; i++ {
		go func(i int) {
			wg.Add(1)
			fmt.Println("done", i)
			// ok, bol := (interface{}(i)).(string)
			// fmt.Println(ok, bol, "=========")
			wg.Done()
		}(i)
	}
	// 等待10个协程结束 阻塞状态
	wg.Wait()
	fmt.Println("All end.")
}

func do() {
	var wg sync.WaitGroup
	tasks := []string{"a", "b", "c"}
	ch := make(chan string, 10)
	for i, work := range tasks {
		wg.Add(1) // 在goroutine开始之前计数
		go func(i int, work string) {
			ch <- work
			fmt.Println(i)
			defer wg.Done() // 手动结束一个goroutine
		}(i, work)
	}

	wg.Wait() // 等待所有goroutine结束，在此之前阻塞
	close(ch)
	// go func() {
	// 	wg.Wait()
	// 	close(ch)
	// }()
	for v := range ch {
		fmt.Println(v)
	}

	fmt.Println("done.")
}