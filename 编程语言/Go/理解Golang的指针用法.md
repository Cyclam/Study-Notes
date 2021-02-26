### 指针和引用的区别

指针可以重分配，而引用不能。换句话说，指针可以被分配另一个不同的地址。

```go
package main

import "fmt"

var ap *int

func main() {
  a := 1          // define int
  b := 2          // define int

  ap = &a
  // set ap to address of a (&a)
  //   ap address: 0x2101f1018
  //   ap value  : 1

  *ap = 3
  fmt.Println(a) // 3
  // change the value at address &a to 3
  //   ap address: 0x2101f1018
  //   ap value  : 3

  a = 4
  fmt.Println(*ap) // 4
  // change the value of a to 4
  //   ap address: 0x2101f1018
  //   ap value  : 4

  ap = &b
  fmt.Println(*ap) // 2
  // set ap to the address of b (&b)
  //   ap address: 0x2101f1020
  //   ap value  : 2
}
```
