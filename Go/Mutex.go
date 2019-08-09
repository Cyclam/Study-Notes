package main

import (
	"sync"
	"time"
	"fmt"
)

var (
	mu      sync.Mutex // guards balance
	balance int
)

// 写
func Deposit(amount int) {
	// mu.Lock()
	balance = balance + amount // 写操作包含两个操作序列：先读取后写入
	fmt.Println(balance)
	// mu.Unlock()
}
// 读
func Balance() int {
	mu.Lock()
	defer mu.Unlock()
	fmt.Println(balance, "done")
	time.Sleep(1 * time.Second)
	return balance
}

func main() {
	// 最多只有一个goroutine在同一时刻访问一个共享变量
	go Balance()

	go Deposit(100)
	go Deposit(10)
	go Deposit(20)
	time.Sleep(3 * time.Second)
}