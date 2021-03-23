package main

import (
  "fmt"
  "sync"
  "time"
)

func main() {
  var mutex sync.RWMutex
  arr := []int{1, 2, 3}
  // 写
  go func() {
    fmt.Println("Try to lock writing operation.")
    mutex.Lock()
    fmt.Println("Writing operation is locked.")

    arr = append(arr, 4)

    fmt.Println("Try to unlock writing operation.")
    mutex.Unlock()
    fmt.Println("Writing operation is unlocked.")
  }()
  // 读
  go func() {
    fmt.Println("Try to lock reading operation.")
    mutex.RLock()
    fmt.Println("The reading operation is locked.")

    fmt.Println("The len of arr is : ", len(arr))

    fmt.Println("Try to unlock reading operation.")
    mutex.RUnlock()
    fmt.Println("The reading operation is unlocked.")
  }()

  time.Sleep(time.Second * 2)
  return
}

// 其中 Lock() 即“写锁定”，调用了“写锁定”后，不能有其他goroutine进行读或者写操作。 Unlock() 即“写解锁”，调用了“写解锁”后会唤醒所有因为要进行“读锁定（即:RLock()）” 而被阻塞的 goroutine。
// RLock()为“读锁定”，调用“读锁定”后，不能有其他goroutine进行写操作，但是可以进行读操作。RUnlock() 为“读解锁”，调用“读解锁”后，会唤醒一个因为要进行“写锁定”而被阻塞的goroutine。

// 写优先
Try to lock writing operation.
Writing operation is locked.
Try to unlock writing operation.
Writing operation is unlocked.
Try to lock reading operation.
The reading operation is locked.
The len of arr is :  4
Try to unlock reading operation.
The reading operation is unlocked.

// 读优先
Try to lock reading operation.
The reading operation is locked.
The len of arr is :  3
Try to unlock reading operation.
The reading operation is unlocked.
Try to lock writing operation.
Writing operation is locked.
Try to unlock writing operation.
Writing operation is unlocked.