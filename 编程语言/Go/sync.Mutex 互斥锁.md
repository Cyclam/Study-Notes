### golang中的互斥锁
- 在一个 goroutine 获得 Mutex 后，其他 goroutine 只能等到这个 goroutine 释放该 Mutex
- 使用 Lock() 加锁后，不能再继续对其加锁，直到利用 Unlock() 解锁后才能再加锁
- 在 Lock() 之前使用 Unlock() 会导致 panic 异常
- 已经锁定的 Mutex 并不与特定的 goroutine 相关联，这样可以利用一个 goroutine 对其加锁，再利用其他 goroutine 对其解锁
- 在同一个 goroutine 中的 Mutex 解锁之前再次进行加锁，会导致死锁
- 适用于读写不确定，并且只有一个读或者写的场景

```go
package main
import (
  "fmt"
  "sync"
  "time"
)
func main() {
  var mutex sync.Mutex
  wait := sync.WaitGroup{}
  fmt.Println("Locked")
  mutex.Lock()
  for i := 1; i <= 3; i++ {
    wait.Add(1)
    go func(i int) {
      fmt.Println("Not lock:", i)
      mutex.Lock()
      fmt.Println("Lock:", i)
      time.Sleep(time.Second)
      fmt.Println("Unlock:", i)
      mutex.Unlock()
      defer wait.Done()
    }(i)
  }
  time.Sleep(time.Second)
  fmt.Println("Unlocked")
  mutex.Unlock()
  wait.Wait()
}
```

```go
Locked
Not lock: 1
Not lock: 2
Not lock: 3
Unlocked
Lock: 1
Unlock: 1
Lock: 2
Unlock: 2
Lock: 3
Unlock: 3
```

```go
import (
	"sync"
	"fmt"
	"time"
)

func main() {
	var mutex sync.Mutex
	count := 0
	
	for r := 0; r < 5; r++ {
		go func() {
			// 开始上锁
			mutex.Lock()
			count += 1
			// 如果不对该 goroutine 加锁，此时并发条件下打印出来的值有可能是乱序的，而不是依次1、2、3、4...打印出来
			// 加锁条件下阻塞，后一个 goroutine 会等待前面的 goroutine 解锁才可进行下一步操作
			fmt.Println(count)
			mutex.Unlock()
			// 解锁完毕
		}()
	}

	time.Sleep(time.Second)
	fmt.Println("the count is : ", count)
}
```