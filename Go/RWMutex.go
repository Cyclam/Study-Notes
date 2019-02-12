package main

import (
  "sync"
  "time"
  "fmt"
)

var m *sync.RWMutex
var val = 0

// Mutex就是互斥锁，互斥锁代表着当数据被加锁了之后，除了加锁的程序，其他程序不能对数据进行读操作和写操作。 
// 这个当然能解决并发程序对资源的操作。但是，效率上是个问题。当加锁后，其他程序要读取操作数据，就只能进行等待了。
// 这个时候就需要使用读写锁。

// 读写锁分为读锁和写锁，读数据的时候上读锁，写数据的时候上写锁。
// 有写锁的时候，数据不可读不可写。有读锁的时候，数据可读，不可写。
func main() {
  m = new(sync.RWMutex)
  // 并发执行三个协程
  go read(1)
  go write(2)
  go read(3)
  // go func () {
  //   read(1)
  //   write(2)
  //   read(3)
  // }()
  time.Sleep(5 * time.Second)
}

func read(i int) {
  // 读锁 读取val的数据，数据不可写
  m.RLock()
  time.Sleep(1 * time.Second)
  fmt.Println(i, val)
  time.Sleep(1 * time.Second)
  // println("val: ", val)
  m.RUnlock()
}

func write(i int) {
  // 写锁
	m.Lock()
  val = 10
  time.Sleep(1 * time.Second)
  fmt.Println(i, val)
	m.Unlock()
}