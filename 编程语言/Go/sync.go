package main

import (
	"fmt"
)

func main() {
	done := make(chan string)
	values := []string{"a", "b", "c"}

	for _, v := range values {
		fmt.Println("--->", v)
		go func(u string) {
			fmt.Println(u)
			done <- v
		}(v)
	}

	// wait for all goroutines to complete before exiting
	for _ = range values {
		<-done
	}
}

// Q: 期望输出顺序是 a,b,c 实际输出顺序是 c,b,a我的思考是 开了 3 个 goroutine，a 的 gorotuine 最先执行，应该最先输出，而不是 c.

// go关键字只是一个语法糖，可以认为 go func()()只是创建了一个 待被执行任务（G），for循环只能保证三个任务的创建顺序是G(a)->G(b)->G(c)，
// 但三个任务很可能会被分配到不同的cpu core上执行（go的运行时调度器来分配）。所以三个任务的执行顺序是不确定的。
// 但是比较奇妙的是，一般情况下在同一个goroutine中创建的多个任务中最后创建那个任务最可能先被执行。
// 原因的话就要看go的实现细节了：简单说同一goroutine中三个任务被创建后 理论上会按顺序 被放在同一个任务队列，
// 但实际上最后那个任务会被放在专一的next（下一个要被执行的任务的意思）的位置，所以优先级最高，最可能先被执行。
// 剩下的两个任务如果go运行时调度器发现有空闲的core，就会把任务偷走点，让别的core执行，这样才能充分利用多核，提高并发能力。