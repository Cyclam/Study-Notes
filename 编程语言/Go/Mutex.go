package main

import (
	"fmt"
	"sync"
	"time"
)

var (
	mu      sync.Mutex // guards balance
	balance int
)

// 写
func Deposit(amount int) {
	mu.Lock()
	defer mu.Unlock()
	fmt.Println(balance)
	balance = balance + amount // 写操作包含两个操作序列：先读取后写入
	// fmt.Println("write", balance)
}

// 读
func Balance() int {
	// mu.Lock()
	// defer mu.Unlock()
	fmt.Println("read", balance)
	time.Sleep(1 * time.Second)
	return balance
}

func main() {
	// 最多只有一个goroutine在同一时刻访问一个共享变量
	go Balance()
	// go Deposit(100)
	go Deposit(10)
	go Deposit(10)
	go Deposit(10)
	go Deposit(10)
	go Deposit(10)
	go Deposit(10)
	go Deposit(10)
	go Deposit(10)
	go Deposit(10)
	go Deposit(10)
	time.Sleep(1 * time.Second)
}

// 0
// 10
// read 10 上一个写入完毕释放锁之后被立即读取
// 20
// 30
// 40
// 50
// 60
// 70
// 80
// 90